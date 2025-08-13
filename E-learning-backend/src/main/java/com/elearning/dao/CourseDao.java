package com.elearning.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.elearning.entity.Category;
import com.elearning.entity.Course;
import com.elearning.entity.User;

@Repository
public interface CourseDao extends JpaRepository<Course, Integer> {

	List<Course> findByMentorOrderByIdDesc(User mentor);

	List<Course> findByMentorAndStatusOrderByIdDesc(User mentor, String status);

	List<Course> findByCategoryAndStatusOrderByIdDesc(Category category, String status);

	List<Course> findByStatusAndNameContainingIgnoreCaseOrderByIdDesc(String status, String name);

	List<Course> findByStatusOrderByIdDesc(String status);

	Long countByMentorAndStatus(User mentor, String status);

}
