package com.elearning.backend.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "payments")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = {"course", "user"}) // Prevents infinite recursion
public class Payment extends BaseEntity {

    private double price;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course; // ✅ camelCase

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // ✅ camelCase

    
    @CreationTimestamp
    @Column(name = "payment_date")
    private LocalDateTime paymentDate;
}
