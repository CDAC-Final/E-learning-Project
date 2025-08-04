package com.elearning.backend.entities;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "courses")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Course extends BaseEntity {
	private String title;
	private String description;
	private String author;
	private double price;
	private double rating;
	
	@OneToMany(mappedBy="myCourse")
	@JsonIgnore
	List<Enrollment> enrollments=new ArrayList<>();
	
	@OneToMany(mappedBy="myCourse")
	@JsonIgnore
	List<Payment> payments=new ArrayList<>();

	@OneToMany(mappedBy="myCourse",cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Lecture> lectures=new ArrayList<>();
	
	public void addLecture(Lecture lecture) {
		this.lectures.add(lecture);
		lecture.setMyCourse(this);
	}

	public void removeLecture(Lecture lecture) {
		this.lectures.remove(lecture);
		lecture.setMyCourse(null);
	}
	
}
