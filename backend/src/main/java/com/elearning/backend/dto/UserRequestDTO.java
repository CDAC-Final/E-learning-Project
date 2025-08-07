package com.elearning.backend.dto;

import java.time.LocalDate;


import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import com.elearning.backend.entity.*;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequestDTO {
	@NotBlank(message = "first name is required")
	@Length(min = 3, max = 20, message = "invalid length of firstname")
	private String name;
	
	@NotBlank
	@Email(message = "invalid email format")
	private String email;
	
	@Pattern
	(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", 
	message = "Invalid password format")
	private String password;
	
	@NotNull
	private Role userRole;
}
