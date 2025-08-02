package com.sunbeam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "students")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true , exclude = "myCourse")
public class Student extends BaseEntity {
	@Column(name="student_name",length = 100 ,nullable = false )
	private String name;
	@Column(name="student_email",length = 100,nullable = false, unique = true)
	private String email;
	@Column(name="password",nullable = false)
	private String password;
	@Column(name="Marks",nullable = false)
	private double cgpa;
	private boolean status;
	
	
	@ManyToOne
	@JoinColumn(name = "course_id" , nullable = false)
	private Course myCourse;
	
	
	public Student(String name, String email, String password, double cgpa) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.cgpa = cgpa;
		this.status = true;
	}
	
	
	
}
/*1.	Student id (unique identifier for each Student , auto generated, starts from 1) - primary key
2.	student name (Cannot be Blank)
3.	Email (Cannot be Blank)
4.	Password (Cannot be Blank)
5.	CGPA (1-10)
5.	Course id - Foreign key

*/