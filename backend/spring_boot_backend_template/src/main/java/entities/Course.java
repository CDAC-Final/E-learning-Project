package com.sunbeam.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.sunbeam.category.Category;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "course")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true , exclude = "student" )
public class Course extends BaseEntity{
	@Column(length = 100, unique = true)
	private String name;
	@Column(length = 100)
	@Enumerated(EnumType.STRING)
	private Category category;
	@Column(name = "course_Start_Date")
	private LocalDate startDate;
	@Column(name = "course_End_Date")
	private LocalDate endDate;
	@Column(name = "fees")
	private double fees;
	@Column(name ="grade")
	private String grade;
	private boolean status;
	
	@OneToMany(mappedBy = "myCourse" , cascade = CascadeType.ALL , orphanRemoval = true)
	private List<Student> student = new ArrayList<>();

	public Course(String name, Category category, LocalDate stratDate, LocalDate endDate, double fees, String grade) {
		super();
		this.name = name;
		this.category = category;
		this.startDate = stratDate;
		this.endDate = endDate;
		this.fees = fees;
		this.grade = grade;
		this.status = true;
	}
	
	
	public void addCourse(Student newstudent)
	{
		this.student.add(newstudent);
		newstudent.setMyCourse(this);
		
	}
	
	
//	public void removeFoodItem(FoodItem foodItem) {
//		this.foodItems.remove(foodItem);
//		foodItem.setMyRestaurant(null);}
	/*
	 * 
	 * public void addFoodItem(FoodItem foodItem) {
		this.foodItems.add(foodItem);
		// add a link fooditem -> restaurant
		foodItem.setMyRestaurant(this);
	}

	// add helper method to remove food item
	public void removeFoodItem(FoodItem foodItem) {
		this.foodItems.remove(foodItem);
		// remove a link fooditem -> restaurant
		foodItem.setMyRestaurant(null);
	}
	 */
//	/*
	
//	public void removeCourse()
//	{
//		
//	}

	
}

/*
 * 1.	ID (unique identifier for each Course, auto generated, starts from 1)
2.	Name (unique , Cannot be Blank, Example : Java SE,Web Programming in Java ,Spring Boot , Spring Cloud, Oracle DB , MySql DB  )
3.	Category (Enum, Example: JAVA,DBT)
4.	Start Date (Cannot be Blank)
5.	End Date (Cannot be Blank)
6.	Fees (Cannot be Blank)
7.	Grade to Pass (Cannot be Blank)
 */
