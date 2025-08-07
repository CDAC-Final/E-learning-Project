package com.elearning.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entity.Course;
import com.elearning.backend.entity.Enrollment;
import com.elearning.backend.entity.User;

public interface EnrollmentDao extends JpaRepository<Enrollment, Long>{
    boolean existsByUserAndCourse(User user , Course course);
	List<Enrollment> findByUserId(Long userId);
	List<Enrollment> findByCourseId(Long courseId);
	
}
