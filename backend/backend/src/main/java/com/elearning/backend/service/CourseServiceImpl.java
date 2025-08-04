package com.elearning.backend.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.custom_exceptions.ApiException;
import com.elearning.backend.custom_exceptions.ResourceNotFoundException;
import com.elearning.backend.dao.CourseDao;
import com.elearning.backend.dao.UserDao;
import com.elearning.backend.dto.*;
import com.elearning.backend.entities.*;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class CourseServiceImpl implements CourseService{
	
	private final CourseDao courseDao;
	private ModelMapper mapper;

	@Override
	public ApiResponse addNewCourse(CourseAddDTO dto) {
		Course entity=mapper.map(dto, Course.class);
		courseDao.save(entity);
		return new ApiResponse("Course added successfully!");
	}

	@Override
	public List<CourseRespDTO> getAllCourses() {
		return courseDao.findAll()
				.stream()
				.map(course->mapper.map(course, CourseRespDTO.class))
				.toList();
	}

	@Override
	public CourseRespDTO getCourseDetailsById(Long courseId) {
		Course entity = courseDao.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Course ID !!!!!"));
		return mapper.map(entity, CourseRespDTO.class);
	}

	@Override
	public ApiResponse updateCourseByid(Long courseId, CourseAddDTO dto) {
		if (courseDao.existsByName(dto.getTitle()))
			throw new ApiException("Dup Restaurant Name - update restaurant failed ");
		
		Course entity = courseDao.findById(courseId)
				.orElseThrow(() ->
				new ResourceNotFoundException("Invalid Course ID : Update failed"));
		
		mapper.map(dto, entity);
		
		return new ApiResponse("Course details updated!");
	}

	@Override
	public CourseWithLectureDTO getCompleteDetails(Long courseId) {
		Course entity = courseDao.fetchCompleteDetails(courseId);
	
		return mapper.map(entity, CourseWithLectureDTO.class);
	}
	
}
