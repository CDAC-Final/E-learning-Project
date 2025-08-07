package com.elearning.backend.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.entity.User;
@Transactional
@Repository
public interface UserDao extends JpaRepository<User, Long> {

	// derived method
	Optional<User> findByEmailAndPassword(String email, String password);
	//derived finder
	boolean existsByEmail(String email);
	Optional<User> findByEmail(String email);
}
