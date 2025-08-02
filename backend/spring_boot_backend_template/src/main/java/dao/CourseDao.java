package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>{

	boolean existsByName(String name);

}
