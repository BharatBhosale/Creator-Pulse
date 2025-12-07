package com.mit.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")   // change table name if different
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String password;

    @Column(name = "email_id", nullable = false, unique = true)
    private String emailId;


}
