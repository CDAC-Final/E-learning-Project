package com.elearning.backend.controller;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.elearning.backend.dto.CourseAddDTO;
import com.elearning.backend.service.CourseService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/courses")
@AllArgsConstructor
public class CourseController {
	private final CourseService courseService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addNewCourse(@RequestBody CourseAddDTO dto){
		return ResponseEntity.status(HttpStatus.CREATED)
							.body(courseService.addNewCourse(dto));
	}
	
	@GetMapping("/get")
	public ResponseEntity<?> getAllCourses(){
		return ResponseEntity.ok(courseService.getAllCourses());
	}
	
	@GetMapping("/get/details/{courseId}")
	public ResponseEntity<?> getCourseDetailsById(@PathVariable Long courseId){
		return ResponseEntity.ok(courseService.getCourseDetailsById(courseId));
	}
	
	@PutMapping("/update/{courseId}")
	public ResponseEntity<?> updateCourseById(@PathVariable Long courseId,@RequestBody CourseAddDTO dto){
		return ResponseEntity.ok(courseService.updateCourseByid(courseId,dto));
	}
	
	@GetMapping("/{courseId}/lectures")
	public ResponseEntity<?> fetchCompleteDetails(@PathVariable Long courseId) {
		return ResponseEntity.ok(courseService.getCompleteDetails(courseId));
	}
}
