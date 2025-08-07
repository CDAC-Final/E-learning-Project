package com.elearning.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.elearning.backend.dao.UserDao;
import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.UserResponseDTO;
import com.elearning.backend.dto.UserRegistrationDTO;
import com.elearning.backend.entity.Role;
import com.elearning.backend.entity.User;


import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	
	private final  UserDao userDao;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
	

	@Override
	public ApiResponse registerUser(UserRegistrationDTO userDTO) {
		// TODO Auto-generated method stub
		
//		if(userRepository.findByEmail(userDTO.getEmail()).isPresent())
//		{
//			throw new EmailAlreadyExistsException("Email already registered");
//		}
		
		User user = modelMapper.map(userDTO, User.class);
		user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		user.setRole(Role.ROLE_STUDENT);
		System.out.println("Mapped user = " + user);
		
		userDao.save(user);
		
		return new ApiResponse("User added Successfully " );
		
		
	}



	@Override
	public List<UserResponseDTO> getAllUsers() {
		// TODO Auto-generated method stub
		List<UserResponseDTO> userDtos = new ArrayList<>();
		List<User> users = userDao.findAll();
		for (User us: users)
		{
			UserResponseDTO dto  = modelMapper.map(us, UserResponseDTO.class);
			userDtos.add(dto);
		}
		
		return userDtos;
	}



	@Override
	public ApiResponse delteUserById(Long id) {
		// TODO Auto-generated method stub
		User user = userDao.findById(id).orElseThrow(()-> new RuntimeException("User Not Found with id " + id));
		userDao.delete(user);
		
		return new ApiResponse("User delted successfully");
	}

}
