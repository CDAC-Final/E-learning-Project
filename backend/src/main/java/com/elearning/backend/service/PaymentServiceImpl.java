package com.elearning.backend.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.dao.PaymentDao;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService{
	private final PaymentDao paymentDao;
	private ModelMapper mapper;
	
	
	
}
