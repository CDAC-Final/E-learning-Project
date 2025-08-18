package com.elearning.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.elearning.entity.Booking;

import lombok.Data;

@Data
public class MentorDashboardDataResponse extends CommonApiResponse {

	private Long totalActiveCourse;

	private Long totalDeletedCourse;

	private Integer totalCoursePurchases;

	private BigDecimal totalPurchaseAmount;

	private List<Booking> bookings = new ArrayList<>();

}
