package com.elearning.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseAddDTO {
	private String title;
	private String description;
	private String author;
	private double price;
}
