package com.elearning.backend.entity;



import java.math.BigDecimal;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "courses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course extends BaseEntity {

    @Column(nullable = false, length = 200)
    private String title;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(length = 100)
    private String category;

    @Column(length = 50)
    private String difficulty; // BEGINNER, INTERMEDIATE, ADVANCED

    @Column(name = "estimated_duration_hours")
    private Integer estimatedDurationHours;

    @Column(name = "thumbnail_url")
    private String thumbnailUrl;

    @Column(name = "preview_video_url")
    private String previewVideoUrl;

    @Column(name = "is_published")
    private Boolean isPublished = false;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "max_students")
    private Integer maxStudents;

    @Lob
    @Column(name = "learning_objectives", columnDefinition = "TEXT")
    private String learningObjectives;

    @Lob
    @Column(name = "prerequisites", columnDefinition = "TEXT")
    private String prerequisites;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "instructor_id", nullable = false)
    private User instructor; // Instructor who created the course

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Lesson> lessons;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Enrollment> enrollments;
}