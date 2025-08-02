package com.sunbeam.dto;

import java.time.LocalDate;

import com.sunbeam.category.Category;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddNewCourseDto {
	private String name;
	private Category category;
	private LocalDate startDate;
	private LocalDate endDate;
	private double fees;
	private String grade;
}
