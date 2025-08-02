package com.sunbeam.service;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dao.CourseDao;
import com.sunbeam.dto.AddNewCourseDto;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.Course;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional  // chukun dusrikdl kelay 
@AllArgsConstructor
public class CourseServiceImpl implements CourseService{

    private final ModelMapper modelMapper;
	
	private final CourseDao coursedao;

//	@Override
//	public String addNewCourse(Course newcourse) {
//		newcourse.setStatus(true);
//		Course course = coursedao.save(newcourse);
//		return "new course added with name " +course.getName();
//	}
	
	@Override
	public ApiResponse addNewCourse(AddNewCourseDto dto) {
		if(coursedao.existsByName(dto.getName()))
		{
			throw new ApiException("Similar name entity already exists");
		}
		
		 Course entity = modelMapper.map(dto , Course.class);
		 entity.setStatus(true);
		 
		Course Persistentcourse  = coursedao.save(entity);
		return new ApiResponse("course added with name "+Persistentcourse.getName());
	}
}
