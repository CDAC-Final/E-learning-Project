package com.elearning.backend.service;

import com.elearning.backend.dto.ApiResponse;
import com.elearning.backend.dto.LectureDTO;

public interface LectureService {

	ApiResponse addLectureToCourse(Long courseId, LectureDTO dto);

	ApiResponse deleteLectureFromCourse(Long courseId, Long lectureId);

}
