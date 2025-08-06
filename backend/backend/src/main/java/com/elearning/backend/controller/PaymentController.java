package com.elearning.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elearning.backend.entities.Payment;
import com.elearning.backend.service.PaymentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/payments")
@AllArgsConstructor
public class PaymentController {
	private final PaymentService paymentService;
	
	@PostMapping
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentService.createPayment(payment);
    }
	
	@GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }
	
	 // Get payment by ID
    @GetMapping("/{id}")
    public Payment getPaymentById(@PathVariable Long id) {
        return paymentService.getPaymentById(id);
    }
	
    @DeleteMapping("/{id}")
    public String deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return "Payment deleted successfully with id: " + id;
    }
}
