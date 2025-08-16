package com.elearning.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.elearning.entity.Course;
import com.elearning.entity.CourseSection;

@Repository
public interface CourseSectionDao extends JpaRepository<CourseSection, Integer> {

	List<CourseSection> findByCourse(Course course);
	
}
