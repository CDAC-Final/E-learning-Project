package com.elearning.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.elearning.entity.MentorDetail;

@Repository
public interface MentorDetailDao extends JpaRepository<MentorDetail, Integer> {

}
