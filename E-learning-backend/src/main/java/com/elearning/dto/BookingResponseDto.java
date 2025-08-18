package com.elearning.dto;

import java.util.ArrayList;
import java.util.List;

import com.elearning.entity.Booking;

import lombok.Data;

@Data
public class BookingResponseDto extends CommonApiResponse {

	private List<Booking> bookings = new ArrayList();

}
