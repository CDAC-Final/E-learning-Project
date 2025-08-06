package com.elearning.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entities.Course;
import com.elearning.backend.entities.Enrollment;
import com.elearning.backend.entities.User;

public interface EnrollmentDao extends JpaRepository<Enrollment, Long>{
    boolean existsByUserAndCourse(User user , Course course);
	List<Enrollment> findByUserId(Long userId);
}
