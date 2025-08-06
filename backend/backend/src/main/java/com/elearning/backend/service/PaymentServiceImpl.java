package com.elearning.backend.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.dao.PaymentDao;
import com.elearning.backend.entities.Payment;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService{
	private final PaymentDao paymentDao;
	private ModelMapper mapper;
	
	@Override
	public Payment createPayment(Payment payment) {
		
		return paymentDao.save(payment);
	}
	
	@Override
	public List<Payment> getAllPayments() {
		
		return paymentDao.findAll();
	}
	
	
	@Override
	public Payment getPaymentById(Long id) {
		
		return paymentDao.findById(id).orElseThrow(() -> new RuntimeException("Payment not found for ID" + id));
	}
	
	@Override
	public void deletePayment(Long id) {
		
		paymentDao.deleteById(id);
	}
}
