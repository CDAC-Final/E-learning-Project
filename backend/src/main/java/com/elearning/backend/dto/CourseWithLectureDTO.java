package com.elearning.backend.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseWithLectureDTO extends BaseDTO {
	private String title;
	private String description;
	private String author;
	private double price;
	private double rating;
	
	private List<LectureDTO> foodItems=new ArrayList<>();
}
