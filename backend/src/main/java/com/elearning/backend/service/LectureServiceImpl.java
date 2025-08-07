package com.elearning.backend.service;

import org.modelmapper.ModelMapper;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.dao.CourseDao;
import com.elearning.backend.dao.LectureDao;
import com.elearning.backend.dto.LectureDTO;
import com.elearning.backend.entity.Course;
import com.elearning.backend.entity.Lecture;
import com.elearning.backend.custom_exceptions.ResourceNotFoundException;
import com.elearning.backend.dto.ApiResponse;


import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class LectureServiceImpl implements LectureService{
	private final LectureDao lectureDao;
	private ModelMapper mapper;
	private final CourseDao courseDao;
	
	
	@Override
	public ApiResponse addLectureToCourse(Long courseId, LectureDTO dto) {
		
		Course courseEntity=courseDao.findById(courseId)
						.orElseThrow(() ->new ResourceNotFoundException("Invalid course id - Lecture can't be added!!!!"));
			
		Lecture lectureEntity = mapper.map(dto, Lecture.class);
				
		courseEntity.addLecture(lectureEntity);
				
		return new ApiResponse("New lecture added to the course");
	}


	@Override
	public ApiResponse deleteLectureFromCourse(Long courseId, Long lectureId) {
		Course courseEntity=courseDao.findById(courseId)
				 .orElseThrow(()->new ResourceNotFoundException("Invalid course id "));
		
		Lecture lectureEntity = lectureDao.findById(lectureId)
				.orElseThrow(()->new ResourceNotFoundException("Lecture not present"));
		
		courseEntity.removeLecture(lectureEntity);
		
		return new ApiResponse("Lecture deleted from course successfully");
	}
	
	
}
