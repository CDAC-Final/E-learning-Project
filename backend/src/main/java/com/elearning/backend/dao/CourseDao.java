package com.elearning.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.elearning.backend.entity.*;

public interface CourseDao extends JpaRepository<Course, Long> {
	boolean existsByTitle(String courseTitle);
	
	@Query("select r from Course r left join fetch r.lectures where r.id=:courseId")
	Course fetchCompleteDetails(Long courseId);
}
