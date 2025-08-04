package com.elearning.backend.dto;

import com.elearning.backend.entity.Role;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationDTO {

	
	private String name;
	//@Column(nullable = false , unique = true )
	private String email;
	//@Column(nullable = false)
	private String password;
	//@Enumerated(EnumType.STRING)
	//@Column(length = 20) // or 30 to be safe
	//private Role role;
}
