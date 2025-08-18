package com.elearning.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.dto.BookingRequestDto;
import com.elearning.dto.BookingResponseDto;
import com.elearning.dto.CommonApiResponse;
import com.elearning.resource.BookingResource;

@RestController
@RequestMapping("api/course/booking")
@CrossOrigin(origins = "http://localhost:5173")
//@PreAuthorize("hasRole('Customer')")
public class BookingController {

	@Autowired
	private BookingResource bookingResource;

	@PostMapping("add")
	public ResponseEntity<CommonApiResponse> addEvent(@RequestBody BookingRequestDto request) {
		return this.bookingResource.addBooking(request);
	}

	@GetMapping("fetch/all")
	public ResponseEntity<BookingResponseDto> fetchAllBookings() {
		return this.bookingResource.fetchAllBookings();
	}

	@GetMapping("fetch/course-wise")
	public ResponseEntity<BookingResponseDto> fetchAllBookingsByCourse(@RequestParam("courseId") Integer courseId) {
		return this.bookingResource.fetchAllBookingsByCourse(courseId);
	}

	@GetMapping("fetch/customer-wise")
	public ResponseEntity<BookingResponseDto> fetchAllBookingsByCustomer(
			@RequestParam("customerId") Integer customerId) {
		return this.bookingResource.fetchAllBookingsByCustomer(customerId);
	}

	@GetMapping("fetch/mentor-wise")
	public ResponseEntity<BookingResponseDto> fetchAllBookingsByMentorId(
			@RequestParam("mentorId") Integer mentorId) {
		return this.bookingResource.fetchAllBookingsByMentorId(mentorId);
	}

}
