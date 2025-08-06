package com.elearning.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.elearning.backend.dto.PaymentRequestDTO;
import com.elearning.backend.dto.PaymentResponseDTO;
import com.elearning.backend.service.PaymentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/payments")
@AllArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public PaymentResponseDTO createPayment(@RequestBody PaymentRequestDTO paymentRequest) {
        return paymentService.createPayment(paymentRequest);
    }

    @GetMapping
    public List<PaymentResponseDTO> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{id}")
    public PaymentResponseDTO getPaymentById(@PathVariable Long id) {
        return paymentService.getPaymentById(id);
    }

    @DeleteMapping("/{id}")
    public String deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return "Payment deleted successfully with id: " + id;
    }
}
