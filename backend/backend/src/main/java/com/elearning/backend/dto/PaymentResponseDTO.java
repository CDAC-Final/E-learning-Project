package com.elearning.backend.dto;

import java.time.LocalDateTime;

import com.elearning.backend.entities.PaymentStatus;

public class PaymentResponseDTO {
	private Long id;
    private double price;
    private PaymentStatus paymentStatus;
    private LocalDateTime paymentDate;
    private Long courseId;
    private String courseTitle;   // Optional, for display
    private Long userId;
    private String userName;      // Optional, for display
}
