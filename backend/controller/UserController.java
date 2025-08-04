package com.elearning.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.elearning.backend.dto.*;
import com.elearning.backend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController()
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

	private final  UserService service;
	
	@GetMapping
	public ResponseEntity<?>listOfUsers()
	{
		
		List<UserResponseDTO> users = service.getAllUsers();
		if(users.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(users);
		
	}
}
