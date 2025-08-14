package com.elearning.service;

import com.elearning.entity.Category;

import java.util.List;

public interface CategoryService {

	Category addCategory(Category category);

	Category updateCategory(Category category);

	Category getCategoryById(int category);

	List<Category> getCategoriesByStatusIn(List<String> status);

}
