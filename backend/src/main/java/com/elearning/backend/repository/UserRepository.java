package com.elearning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
