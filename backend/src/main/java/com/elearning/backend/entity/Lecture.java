package com.elearning.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
	private Course course;
}
