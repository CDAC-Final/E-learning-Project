package com.elearning.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.backend.dao.UserDao;
import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.EnrollmentDTO;
import com.elearning.backend.dto.EnrollmentResponseDTO;
import com.elearning.backend.dto.EnrollmentWithUserDTO;
import com.elearning.backend.entity.User;

import com.elearning.backend.service.EnrollmentService;
import com.elearning.backend.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class EnrollmentController {

	
	private final EnrollmentService enrollmentService;
	
	private final UserDao userDao;
	
	@PostMapping("/enroll")
	public ResponseEntity<?>enrollInCourse(@RequestBody EnrollmentDTO dto)
	{
		
		ApiResponse response = enrollmentService.enrollUser(dto);
		return ResponseEntity.ok(response);
	}
	
	@PreAuthorize("hasRole('STUDENT')")
	@GetMapping("/enrollments/my")
	public ResponseEntity<?>getMyEnrollments(Authentication autentication )
	{
		String email = autentication.getName();
		User user = userDao.findByEmail(email).orElseThrow(()-> new RuntimeException("User not found"));
		List<EnrollmentResponseDTO> dtoList = enrollmentService.getUserEnrollments(user.getId());
		return ResponseEntity.ok(dtoList);
}
	
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/course/{courseId}")
	public ResponseEntity<?>getEnrollmentsByCourseId(@PathVariable Long courseId)
	{
		
		List<EnrollmentWithUserDTO> list = enrollmentService.getEnollmentsByCourse(courseId);
		return  ResponseEntity.ok(list);
		
	}
}
