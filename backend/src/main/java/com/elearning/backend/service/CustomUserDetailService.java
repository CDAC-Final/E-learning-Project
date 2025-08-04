package com.elearning.backend.service;

import java.util.Optional;

import com.elearning.backend.entity.User;
import com.elearning.backend.repository.UserRepository;
import com.elearning.backend.security.CustomUserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // Spring Security calls this automatically with the username (email in our case)
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isEmpty()) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }

        return new CustomUserDetails(userOpt.get());
    }
}

