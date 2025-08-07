package com.elearning.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entity.Lecture;

public interface LectureDao extends JpaRepository<Lecture, Long>{

}
