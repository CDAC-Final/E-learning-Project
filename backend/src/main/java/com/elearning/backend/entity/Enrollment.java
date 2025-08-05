package com.elearning.backend.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id; // ✅ Corrected import
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "enrollments")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = {"course", "user"}) // ✅ Prevent infinite loop
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course; // ✅ Renamed

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // ✅ Renamed

    @CreationTimestamp
    @Column(name = "enrollment_date")
    private LocalDateTime enrollmentDate;
}
