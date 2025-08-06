package com.elearning.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elearning.backend.dao.CourseDao;
import com.elearning.backend.dao.PaymentDao;
import com.elearning.backend.dao.UserDao;
import com.elearning.backend.dto.PaymentRequestDTO;
import com.elearning.backend.dto.PaymentResponseDTO;
import com.elearning.backend.entities.Course;
import com.elearning.backend.entities.Payment;
import com.elearning.backend.entities.PaymentStatus;
import com.elearning.backend.entities.User;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentDao paymentDao;
    private final CourseDao courseDao;
    private final UserDao userDao;
    private final ModelMapper mapper;

    @Override
    public PaymentResponseDTO createPayment(PaymentRequestDTO dto) {
        Payment payment = new Payment();
        payment.setPrice(dto.getPrice());
        payment.setPaymentStatus(PaymentStatus.SUCCESS); // Or logic-based
        payment.setMyCourse(courseDao.findById(dto.getCourseId())
            .orElseThrow(() -> new RuntimeException("Course not found")));
        payment.setMyUser(userDao.findById(dto.getUserId())
            .orElseThrow(() -> new RuntimeException("User not found")));

        Payment saved = paymentDao.save(payment);

        return toResponseDTO(saved);
    }

    @Override
    public List<PaymentResponseDTO> getAllPayments() {
        return paymentDao.findAll().stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PaymentResponseDTO getPaymentById(Long id) {
        Payment payment = paymentDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found for ID " + id));

        return toResponseDTO(payment);
    }

    @Override
    public void deletePayment(Long id) {
        paymentDao.deleteById(id);
    }

    private PaymentResponseDTO toResponseDTO(Payment payment) {
        PaymentResponseDTO dto = mapper.map(payment, PaymentResponseDTO.class);
        dto.setCourseId(payment.getMyCourse().getId());
        dto.setCourseTitle(payment.getMyCourse().getTitle());
        dto.setUserId(payment.getMyUser().getId());
        dto.setUserName(payment.getMyUser().getName() + " " + payment.getMyUser());
        return dto;
    }
}
