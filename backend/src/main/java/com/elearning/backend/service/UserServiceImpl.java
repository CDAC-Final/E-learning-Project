package com.elearning.backend.service;

import org.modelmapper.ModelMapper;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.custom_exceptions.ApiException;
import com.elearning.backend.custom_exceptions.AuthenticationException;
import com.elearning.backend.custom_exceptions.ResourceNotFoundException;
import com.elearning.backend.dao.UserDao;
import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.AuthRequest;
import com.elearning.backend.dto.UserRequestDTO;
import com.elearning.backend.dto.UserRespDTO;
import com.elearning.backend.entities.User;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	
	private final UserDao userDao;
	private ModelMapper mapper;

	@Override
	public UserRespDTO authenticate(AuthRequest dto) {
		
		User entity = userDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new AuthenticationException("Invalid login !!!!!"));

		return mapper.map(entity, UserRespDTO.class);
	}

	@Override
	public UserRespDTO signUp(UserRequestDTO dto) {
		
		if (userDao.existsByEmail(dto.getEmail()))
			throw new ApiException("Dup Email detected - User exists already!!!!");

		User entity = mapper.map(dto, User.class);
		return mapper.map(userDao.save(entity), UserRespDTO.class);
	}

}
