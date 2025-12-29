package com.mit.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mit.model.UserModel;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

   
    public UserModel saveUser(UserModel user) {
        UserModel existingUser = repository.getByEmailId(user.getEmailId());
        if (existingUser != null) {
            throw new RuntimeException("User already registered, please login");
        }
        return repository.save(user);
    }

    
    public UserModel loginUser(UserModel user) {

        UserModel existingUser = repository.getByEmailId(user.getEmailId());

        
        if (existingUser == null) {
            throw new RuntimeException("Please register first");
        }

        if (!existingUser.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Email or password is wrong");
        }

        
        return existingUser;
    }


    
    public List<UserModel> getAllUsers() {
        return repository.findAll();
    }

   
    public UserModel getUserById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    
    public void deleteUser(Long id) {
        repository.deleteById(id);
    }
}
