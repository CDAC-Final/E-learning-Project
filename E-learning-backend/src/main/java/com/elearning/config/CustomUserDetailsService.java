package com.elearning.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.elearning.entity.User;
import com.elearning.service.UserService;
import com.elearning.utility.Constants.ActiveStatus;

@Component
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		User user = this.userService.getUserByEmailAndStatus(email, ActiveStatus.ACTIVE.value());

		CustomUserDetails customUserDetails = new CustomUserDetails(user);

		return customUserDetails;

	}
}
