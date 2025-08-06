package com.elearning.backend.service;

import java.util.List;

import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.UserResponseDTO;
import com.elearning.backend.dto.UserRegistrationDTO;


public interface UserService {

	ApiResponse registerUser(UserRegistrationDTO user);
	List<UserResponseDTO>getAllUsers();
	ApiResponse delteUserById(Long id);
	
}
