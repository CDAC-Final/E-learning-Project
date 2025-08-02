package com.sunbeam.service;

import com.sunbeam.dto.AddNewCourseDto;
import com.sunbeam.dto.ApiResponse;


public interface CourseService {

	ApiResponse addNewCourse(AddNewCourseDto dto);
	
//	String addNewCourse(Course newcourse);

}
