package com.elearning.backend.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.EnrollmentDTO;
import com.elearning.backend.dto.EnrollmentResponseDTO;
import com.elearning.backend.entity.Course;
import com.elearning.backend.entity.Enrollment;
import com.elearning.backend.entity.User;
import com.elearning.backend.repository.CourseRepository;
import com.elearning.backend.repository.EnrollmentRepository;
import com.elearning.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class EnrollmentServiceImpl implements EnrollmentService {

	private final CourseRepository courseRepository;
	private final EnrollmentRepository enrollmentRepository;
	private final UserRepository userRepository;
	private final ModelMapper modelMapper;
	
	@Override
	public ApiResponse enrollUser(EnrollmentDTO dto) {
		
		Long courseId = dto.getCourseId();
		Course course = courseRepository.findById(courseId).orElseThrow(()->new RuntimeException("Course not found"));
		Authentication authentication =SecurityContextHolder.getContext().getAuthentication();
		String userName= authentication.getName();
		
		User user = userRepository.findByEmail(userName).orElseThrow(()-> new RuntimeException("User not found"));
		
		boolean alreadyEnrolled = enrollmentRepository.existsByUserAndCourse(user,course);
		if(alreadyEnrolled)
		{
			return new ApiResponse("User already exits in the course");
		}
		// TODO Auto-generated method stub
		Enrollment enrollment = new Enrollment();
		enrollment.setCourse(course);
		enrollment.setUser(user);
		enrollment.setEnrollmentDate(LocalDateTime.now());
		
		enrollmentRepository.save(enrollment);
		return new ApiResponse ("User Enrolled successfully");
		
		
	}

	@Override
	public List<EnrollmentResponseDTO> getUserEnrollments(Long userId) {
		// TODO Auto-generated method stub
		List<Enrollment> enrollments = enrollmentRepository.findByUserId(userId);
		List<EnrollmentResponseDTO> dtolist = new ArrayList<>();
		
		for(Enrollment enrollment : enrollments)
		{
			EnrollmentResponseDTO dto = new EnrollmentResponseDTO();
			dto.setCourseId(enrollment.getCourse().getId());
			dto.setCourseTitle(enrollment.getCourse().getTitle());
			dto.setEnrollmentDate(enrollment.getEnrollmentDate());
			dto.setCourseDescription(enrollment.getCourse().getDescription());
			dto.setEnrollmentId(enrollment.getId());
			dtolist.add(dto);
		}
		return dtolist;
	}

}
