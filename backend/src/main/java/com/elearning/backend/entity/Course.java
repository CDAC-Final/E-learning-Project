package com.elearning.backend.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "courses")
@NoArgsConstructor
@Data
@ToString(callSuper = true, exclude = {"enrollments", "lectures"})
public class Course extends BaseEntity {
    
    private String title;
    private String description;
    private String author;
    private double price;
    private double rating;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Enrollment> enrollments = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Lecture> lectures = new ArrayList<>();

//    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
//    @JsonIgnore
//    private List<Payment> payments = new ArrayList<>();

    public void addLecture(Lecture lecture) {
        this.lectures.add(lecture);
        lecture.setCourse(this);
    }

    public void removeLecture(Lecture lecture) {
        this.lectures.remove(lecture);
        lecture.setCourse(null);
    }

    public void addEnrollment(Enrollment enrollment) {
        this.enrollments.add(enrollment);
        enrollment.setCourse(this);
    }

    public void removeEnrollment(Enrollment enrollment) {
        this.enrollments.remove(enrollment);
        enrollment.setCourse(null);
    }
    
//    public void addPayment(Payment payment) {
//        this.payments.add(payment);
//        payment.setCourse(this);
//    }
//
//    public void removePayment(Payment payment) {
//        this.payments.remove(payment);
//        payment.setCourse(null);
//    }
}
