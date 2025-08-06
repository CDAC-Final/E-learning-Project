package com.elearning.backend.service;

import java.util.List;

import com.elearning.backend.entities.Payment;

public interface PaymentService {

	Payment createPayment(Payment payment);

	List<Payment> getAllPayments();

	Payment getPaymentById(Long id);

	void deletePayment(Long id);

}
