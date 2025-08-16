package com.elearning.dto;

import com.elearning.entity.Category;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CategoryResponseDto extends CommonApiResponse {
	
	private List<Category> categories = new ArrayList<>(); 

}
