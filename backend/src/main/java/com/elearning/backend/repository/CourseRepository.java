package com.elearning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entity.Course;

public interface CourseRepository extends JpaRepository<Course,Long> {

}
