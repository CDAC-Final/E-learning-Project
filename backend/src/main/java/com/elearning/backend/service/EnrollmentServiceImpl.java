package com.elearning.backend.service;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.elearning.backend.dao.CourseDao;
import com.elearning.backend.dao.EnrollmentDao;
import com.elearning.backend.dao.UserDao;
import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.EnrollmentDTO;
import com.elearning.backend.dto.EnrollmentResponseDTO;
import com.elearning.backend.dto.EnrollmentWithUserDTO;
import com.elearning.backend.entity.Course;
import com.elearning.backend.entity.Enrollment;
import com.elearning.backend.entity.User;




import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class EnrollmentServiceImpl implements EnrollmentService {

	private final CourseDao courseDao;
	private final EnrollmentDao enrollmentDao;
	private final UserDao userDao;
	private final ModelMapper modelMapper;
	
	@Override
	public ApiResponse enrollUser(EnrollmentDTO dto) {
		
		Long courseId = dto.getCourseId();
		Course course = courseDao.findById(courseId).orElseThrow(()->new RuntimeException("Course not found"));
		Authentication authentication =SecurityContextHolder.getContext().getAuthentication();
		String userName= authentication.getName();
		
		User user = userDao.findByEmail(userName).orElseThrow(()-> new RuntimeException("User not found"));
		
		boolean alreadyEnrolled = enrollmentDao.existsByUserAndCourse(user,course);
		if(alreadyEnrolled)
		{
			return new ApiResponse("User already exits in the course");
		}
		// TODO Auto-generated method stub
		Enrollment enrollment = new Enrollment();
		enrollment.setCourse(course);
		enrollment.setUser(user);
		enrollment.setEnrollmentDate(LocalDateTime.now());
		
		enrollmentDao.save(enrollment);
		return new ApiResponse ("User Enrolled successfully");
		
		
	}

	@Override
	public List<EnrollmentResponseDTO> getUserEnrollments(Long userId) {
		// TODO Auto-generated method stub
		List<Enrollment> enrollments = enrollmentDao.findByUserId(userId);
		List<EnrollmentResponseDTO> dtolist = new ArrayList<>();
		
		for(Enrollment enrollment : enrollments)
		{
			EnrollmentResponseDTO dto = new EnrollmentResponseDTO();
//			dto.setCourseId(enrollment.getCourse().getId());
			dto.setCourseTitle(enrollment.getCourse().getTitle());
			dto.setEnrollmentDate(enrollment.getEnrollmentDate());
			dto.setCourseDescription(enrollment.getCourse().getDescription());
			dto.setEnrollmentId(enrollment.getId());
			dtolist.add(dto);
		}
		return dtolist;
	}

	@Override
	public List<EnrollmentWithUserDTO> getEnollmentsByCourse(Long courseId) {
		// TODO Auto-generated method stub
	List<Enrollment> enrollments =	enrollmentDao.findByCourseId(courseId);
	List<EnrollmentWithUserDTO> dtolist = new ArrayList<>();
	for(Enrollment enrollment : enrollments)
	{
		EnrollmentWithUserDTO dto = new EnrollmentWithUserDTO();
		User user = enrollment.getUser();
		
		dto.setEnrollmentId(enrollment.getId());
		dto.setUserEmail(user.getEmail());
		dto.setUserId(user.getId());
		dto.setUserEmail(user.getEmail());
		dto.setUserName(user.getName());
	    dtolist.add(dto);
	}
		return dtolist;
	}

}

