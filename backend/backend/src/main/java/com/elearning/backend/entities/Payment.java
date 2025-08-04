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
@Table(name = "orders")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Payment{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private double price;
	
	@ManyToOne
	@JoinColumn(name="course_id",nullable = false)
	private Course myCourse;
	
	@ManyToOne
	@JoinColumn(name="user_id",nullable = false)
	private User myUser;
	
	@CreationTimestamp
	@Column(name="order_date")
	private LocalDateTime orderDate; 
}

