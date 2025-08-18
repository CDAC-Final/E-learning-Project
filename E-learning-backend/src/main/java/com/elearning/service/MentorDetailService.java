package com.elearning.service;

import com.elearning.entity.MentorDetail;

public interface MentorDetailService {

	MentorDetail addMentorDetail(MentorDetail detail);
	
	MentorDetail updateMentorDetail(MentorDetail detail);

	MentorDetail getById(int detailId);

}
