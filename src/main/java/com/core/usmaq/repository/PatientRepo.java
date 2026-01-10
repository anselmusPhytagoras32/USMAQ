package com.core.usmaq.repository;

import com.core.usmaq.models.Patients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepo extends JpaRepository <Patients, Long>{
}
