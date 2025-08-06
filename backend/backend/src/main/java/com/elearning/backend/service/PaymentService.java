package com.elearning.backend.service;

import java.util.List;

import com.elearning.backend.dto.PaymentRequestDTO;
import com.elearning.backend.dto.PaymentResponseDTO;

public interface PaymentService {

    PaymentResponseDTO createPayment(PaymentRequestDTO paymentRequest);

    List<PaymentResponseDTO> getAllPayments();

    PaymentResponseDTO getPaymentById(Long id);

    void deletePayment(Long id);
}
