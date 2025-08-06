package com.elearning.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentRequestDTO {
	private double price;
//    private PaymentStatus paymentStatus;
    private Long courseId;
    private Long userId;
}
