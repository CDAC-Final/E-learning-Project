package com.elearning.backend.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.dao.LectureDao;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class LectureServiceImpl implements LectureService{
	private final LectureDao lectureDao;
	private ModelMapper mapper;
	
	
}
