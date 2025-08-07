package com.elearning.backend.service;

import java.util.List;

import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.EnrollmentDTO;
import com.elearning.backend.dto.EnrollmentResponseDTO;
import com.elearning.backend.dto.EnrollmentWithUserDTO;
import com.elearning.backend.entity.Enrollment;

public interface EnrollmentService {
   public ApiResponse  enrollUser(EnrollmentDTO dto);
   public List<EnrollmentResponseDTO> getUserEnrollments(Long userId);
   public List<EnrollmentWithUserDTO> getEnollmentsByCourse(Long courseId);
}
