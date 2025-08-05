package com.elearning.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entity.Course;
import com.elearning.backend.entity.Enrollment;
import com.elearning.backend.entity.User;

public interface EnrollmentRepository extends JpaRepository<Enrollment ,Long> {

	boolean existsByUserAndCourse(User user , Course course);
	List<Enrollment> findByUserId(Long userId);
}
