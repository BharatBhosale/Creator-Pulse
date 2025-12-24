package com.mit.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mit.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    // No code needed – CRUD methods are provided by Spring Data JPA

    UserModel getByEmailId(String emailId);
}
