package com.elearning.backend.dto;

import java.time.LocalDate;

import com.elearning.backend.entities.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRespDTO extends BaseDTO{
	private String name;
	private String email;
	private UserRole userRole;
	
}
