package com.elearning.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.elearning.backend.dto.ApiResponse;

@RestControllerAdvice
	public class GlobalExceptionHandler {

	    // 1. Handle EmailAlreadyExistsException
//	    @ExceptionHandler(EmailAlreadyExistsException.class)
//	    public ResponseEntity<ApiResponse> handleEmailExists(EmailAlreadyExistsException ex) {
//	        ApiResponse response = new ApiResponse(ex.getMessage());
//	        return new ResponseEntity<>(response, HttpStatus.CONFLICT);  // 409
//	    }

	    // 2. Catch-all for any unhandled exceptions
	    @ExceptionHandler(Exception.class)
	    public ResponseEntity<?> handleGenericException(Exception ex) {
	        ApiResponse response = new ApiResponse("Something went wrong");
	        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);  // 500
	    }
	}

