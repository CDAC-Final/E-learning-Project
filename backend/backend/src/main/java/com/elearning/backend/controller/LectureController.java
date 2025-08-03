package com.elearning.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.backend.service.LectureService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/lectures")
@AllArgsConstructor
public class LectureController {
	private final LectureService lectureService;
	
	
}
