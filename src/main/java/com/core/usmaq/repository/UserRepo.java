package com.core.usmaq.repository;

import com.core.usmaq.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository <User, Long>{

}
