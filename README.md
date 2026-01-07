# USMAQ (Unified System for Medical Access & Quality)

> **Modernizing Healthcare in Bicol, One Record at a Time.**

---

## About the Project

**USMAQ** is a full-stack Hospital Management System (HMS) designed to bridge the gap between traditional medical practices and modern digital efficiency. Built with **Spring Boot** and **React**, it serves as a centralized platform for doctors, receptionists, and hospital administrators to manage patient care seamlessly.

The name stands for **Unified System for Medical Access & Quality**, reflecting our mission to make healthcare data accessible, secure, and fast.

## The Problem
Many hospitals in **Legazpi City** and the Bicol region are still stuck in the past:
* **Paper-Based Chaos:** Patient records are stored in physical folders, leading to lost data and slow retrieval times.
* **Inefficient Queues:** Patients wait hours just to have their files manually located.
* ** fragmented History:** Doctors cannot easily see a patient's past diagnoses or prescriptions if the paper file is missing.
* **Security Risks:** Physical records are vulnerable to damage (floods, fire) and unauthorized access.

## The Solution
USMAQ replaces the filing cabinet with a secure, cloud-ready database.
* **Instant Retrieval:** Search for a patient by name in milliseconds, not minutes.
* **Role-Based Access:** * **Receptionists** handle registration, billing, and queuing.
    * **Doctors** access private medical history, diagnoses, and prescriptions.
* **Data Integrity:** No more "lost files." Every diagnosis and prescription is permanently recorded.
* **Scalable:** Built to handle thousands of records without slowing down.

---

## Tech Stack

### Frontend (Client)
* **Framework:** React (Vite) + TypeScript
* **UI Library:** Material UI (MUI)
* **State Management:** React Hooks
* **Styling:** Emotion / CSS Modules

### Backend (Server)
* **Framework:** Java Spring Boot 3
* **Security:** Spring Security (RBAC)
* **Build Tool:** Gradle

### Database
* **Primary DB:** MySQL
* **ORM:** Hibernate / Spring Data JPA

---

## Key Features

### For Security
* **Secure Authentication:** Login system ensuring only authorized staff can access data.
* **Role-Based Views:** The interface changes dynamically based on who is logged in (Doctor vs. Staff).

### For Receptionists
* **Patient Registration:** Digital intake forms to capture demographics and insurance info.
* **Queue Management:** Real-time visibility of who is waiting in the lobby.
* **Record Search:** Fast filtering to find existing patient profiles.

### For Doctors
* **Digital Diagnosis:** Input and save medical findings directly to the patient's permanent record.
* **E-Prescribing:** (In Progress) Generate and record prescriptions digitally.
* **Patient History:** View a timeline of previous visits and treatments.
