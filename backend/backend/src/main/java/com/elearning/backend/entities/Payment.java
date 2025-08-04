package com.elearning.backend.entities;

import java.time.LocalDate;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "payments")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Payment extends BaseEntity{
	private double price;
	
	@Enumerated(EnumType.STRING)
	private PaymentStatus paymentStatus;
	
	@ManyToOne
	@JoinColumn(name="course_id",nullable = false)
	private Course myCourse;
	
	@ManyToOne
	@JoinColumn(name="user_id",nullable = false)
	private User myUser;
	
	@CreationTimestamp
	@Column(name="payment_date")
	private LocalDateTime paymentDate; 
}

