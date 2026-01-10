package com.core.usmaq.controller;

import com.core.usmaq.models.User;
import com.core.usmaq.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired // Inject userRepo
    private UserRepo userRepo;

    // Posting the data to the database
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepo.save(newUser);
    }
}
