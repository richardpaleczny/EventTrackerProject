package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.healthyhabitsjpa.entities.HealthyHabits;

public interface HealthyHabitsRepository extends JpaRepository<HealthyHabits, Integer> {

}
