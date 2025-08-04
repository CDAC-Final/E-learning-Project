package com.elearning.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseRespDTO extends BaseDTO{
	private String title;
	private String description;
	private String author;
	private double price;
	private double rating;
}
