package com.sunbeam.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

import com.sunbeam.dto.AddNewCourseDto;
import com.sunbeam.entities.Course;
import com.sunbeam.service.CourseService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/courses")
@AllArgsConstructor
//@Getter
//@Setter
public class CourseController {
	
	private final CourseService courseservice;
	
	@PostMapping
	@Operation(description = "Adding new coursee")
//	public String addCourse(@RequestBody Course newcourse)
//	{
//		return courseservice.addNewCourse(newcourse);
//	}
	
	public ResponseEntity<?> addCourse(@RequestBody AddNewCourseDto dto)//Course newCourse)
	{
		
		return ResponseEntity.status(HttpStatus.CREATED).body(courseservice.addNewCourse(dto));
	}
	
	
}
