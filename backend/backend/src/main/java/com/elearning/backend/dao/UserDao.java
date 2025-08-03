package com.elearning.backend.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elearning.backend.entities.User;

public interface UserDao extends JpaRepository<User, Long> {

	// derived method
	Optional<User> findByEmailAndPassword(String email, String password);
	//derived finder
	boolean existsByEmail(String email);
}
