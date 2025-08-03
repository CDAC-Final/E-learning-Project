package com.elearning.backend.entities;

import java.time.LocalDate;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

//import annotations from JPA
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
public class User extends BaseEntity {
	@Column(length = 50, name = "user_name") 
	private String name;
	
	@Column(length = 30, unique = true) 
	private String email;
	
	@Column(length = 20, nullable = false) 
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(length = 30, name = "user_role")
	private UserRole userRole;
	
	@OneToMany(mappedBy="myUser")
	@JsonIgnore
	List<Enrollment> enrollments=new ArrayList<>();
	
	@OneToMany(mappedBy="myUser")
	@JsonIgnore
	List<Payment> payments=new ArrayList<>();
	
}















