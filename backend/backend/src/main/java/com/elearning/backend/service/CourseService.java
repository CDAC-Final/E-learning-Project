package com.elearning.backend.service;

import java.util.List;

import com.elearning.backend.dto.*;

public interface CourseService {

	ApiResponse addNewCourse(CourseAddDTO dto);

	List<CourseRespDTO> getAllCourses();

	CourseRespDTO getCourseDetailsById(Long courseId);

	ApiResponse updateCourseByid(Long courseId, CourseAddDTO dto);

	CourseWithLectureDTO getCompleteDetails(Long courseId);
	
}
