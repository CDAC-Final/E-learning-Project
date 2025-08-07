package com.elearning.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entity.Payment;

public interface PaymentDao extends JpaRepository<Payment, Long> {

}
