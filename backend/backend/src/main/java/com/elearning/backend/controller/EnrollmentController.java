package com.elearning.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.backend.service.EnrollmentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/enrollments")
@AllArgsConstructor
public class EnrollmentController {
	private final EnrollmentService enrollmentService;
	
	
	
	
}
