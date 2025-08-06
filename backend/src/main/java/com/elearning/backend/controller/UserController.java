package com.elearning.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;


import java.util.List;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

import com.elearning.backend.dto.AuthRequest;
import com.elearning.backend.dto.UserRequestDTO;
import com.elearning.backend.service.UserService;
import com.elearning.backend.dto.UserResponseDTO;
import com.elearning.backend.dto.ApiResponse;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
	private final UserService userService;

	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody AuthRequest dto) {
		return ResponseEntity.ok(userService.authenticate(dto));
	}
	

	@PostMapping("/signup")
	public ResponseEntity<?> userSignUp(@RequestBody @Valid
			UserRequestDTO dto)
	{
		System.out.println("in user signup "+dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.signUp(dto));
	}

    @GetMapping
    public ResponseEntity<?> listOfUsers() {
        List<UserResponseDTO> users = service.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(users);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserByID(@PathVariable Long id) {
        ApiResponse response = service.delteUserById(id);
        return ResponseEntity.ok(response);
    }
}
	




