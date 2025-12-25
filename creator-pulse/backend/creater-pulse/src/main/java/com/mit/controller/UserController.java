package com.mit.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.mit.model.UserModel;
import com.mit.service.UserService;
import org.springframework.http.ResponseEntity;



@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody UserModel user) {
        try {
            return ResponseEntity.ok(service.saveUser(user));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserModel user) {
        try {
            return ResponseEntity.ok(service.loginUser(user));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public List<UserModel> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserModel getUserById(@PathVariable Long id) {
        return service.getUserById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        service.deleteUser(id);
    }
}



