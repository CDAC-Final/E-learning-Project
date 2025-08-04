package com.elearning.backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "lectures")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Lecture extends BaseEntity{
	private String title;
	private String description;
	
	@ManyToOne
	@JoinColumn(name="course_id",nullable = false)
	private Course myCourse;
}


