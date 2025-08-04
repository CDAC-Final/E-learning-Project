package com.elearning.backend.service;


import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.AuthRequest;
import com.elearning.backend.dto.UserRequestDTO;
import com.elearning.backend.dto.UserRespDTO;

public interface UserService {
	UserRespDTO authenticate(AuthRequest dto);

	UserRespDTO signUp(UserRequestDTO dto);

	
}
