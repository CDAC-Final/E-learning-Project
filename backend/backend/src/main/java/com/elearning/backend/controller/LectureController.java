package com.elearning.backend.controller;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.backend.dto.LectureDTO;
import com.elearning.backend.service.LectureService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/lectures")
@AllArgsConstructor
public class LectureController {
	private final LectureService lectureService;
	
	@PostMapping("/add/{courseId}")
	@Operation(description = "Add new lecture")
	public ResponseEntity<?> addLecture(@PathVariable 
			Long courseId, @RequestBody LectureDTO dto)
	{
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(lectureService.addLectureToCourse(courseId, dto));
	}
	
	@DeleteMapping("/delete/{courseId}/{lectureId}")
	public ResponseEntity<?> deleteLectureFromCourse(@PathVariable Long courseId,@PathVariable Long lectureId){
		return ResponseEntity.ok(lectureService.deleteLectureFromCourse(courseId,lectureId));
	}
	
	
}
