package com.elearning.backend.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.annotation.Generated;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "enrollments")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Enrollment{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	  
	@ManyToOne
    @JoinColumn(name="course_id",nullable = false)
    private Course myCourse;
    
    @ManyToOne
    @JoinColumn(name="user_id",nullable = false)
    private User myUser;
    
    @CreationTimestamp
	@Column(name="enrollment_date")
	private LocalDateTime enrollmentDate;    
}
