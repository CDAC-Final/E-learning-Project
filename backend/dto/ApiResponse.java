package com.elearning.backend.dto;

import java.time.LocalDateTime;

import lombok.Data;


@Data

public class ApiResponse {

	
	private LocalDateTime timeStamp;
	private String message;
	//private boolean success;
	public ApiResponse(String message) {
		//super();
		this.timeStamp = LocalDateTime.now();
		this.message = message;
		
	}
}
