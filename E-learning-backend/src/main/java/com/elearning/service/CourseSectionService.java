package com.elearning.service;

import java.util.List;

import com.elearning.entity.Course;
import com.elearning.entity.CourseSection;

public interface CourseSectionService {

	CourseSection add(CourseSection section);
	
	CourseSection getById(int section);
	
	List<CourseSection> getByCourse(Course course);
	
}
