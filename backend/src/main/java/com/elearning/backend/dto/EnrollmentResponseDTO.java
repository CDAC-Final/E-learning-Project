package com.elearning.backend.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class EnrollmentResponseDTO {
 
 private Long courseId;
 private String courseTitle;
private String courseDescription;
private Long enrollmentId;
 private LocalDateTime enrollmentDate;
}
