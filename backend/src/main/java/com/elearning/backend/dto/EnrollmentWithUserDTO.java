package com.elearning.backend.dto;



import lombok.Data;

@Data
public class EnrollmentWithUserDTO {
	private Long enrollmentId;

    private Long userId;
    private String userName;
    private String userEmail;
}
