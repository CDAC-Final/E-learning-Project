package com.elearning.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entities.Enrollment;

public interface EnrollmentDao extends JpaRepository<Enrollment, Long>{

}
