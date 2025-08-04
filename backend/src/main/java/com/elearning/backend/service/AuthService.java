package com.elearning.backend.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.elearning.backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final CustomUserDetailService customUserDetailService;
    private final JwtUtil jwtUtil;

    // Load user by email (Spring Security requires username — in our case it's email)
    public UserDetails loadUserByUsername(String email) {
        return customUserDetailService.loadUserByUsername(email);
    }

    // Generate JWT token
    public String generateToken(UserDetails userDetails) {
        return jwtUtil.generateToken(userDetails);
    }
}
