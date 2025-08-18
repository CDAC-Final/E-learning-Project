package com.elearning.service;

import java.util.List;

import com.elearning.entity.Booking;
import com.elearning.entity.Course;
import com.elearning.entity.User;

public interface BookingService {

	Booking addBooking(Booking booking);

	Booking updateBooking(Booking booking);

	Booking getById(int bookingId);

	Booking findByBookingId(String bookingId);

	List<Booking> getBookingByCustomer(User customer);

	List<Booking> getByMentor(User mentor);

	List<Booking> getByCourse(Course course);

	List<Booking> getAllBookings();

	List<Booking> getByCourseAndCustomer(Course course, User customer);

}
