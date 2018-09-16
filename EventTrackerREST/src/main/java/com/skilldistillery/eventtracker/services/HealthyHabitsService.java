package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.healthyhabitsjpa.entities.HealthyHabits;

public interface HealthyHabitsService {

	HealthyHabits show(Integer id);

	List<HealthyHabits> index();

	HealthyHabits create(HealthyHabits hh);

	HealthyHabits replace(Integer id, HealthyHabits hh);

	HealthyHabits update(Integer id, HealthyHabits hh);

	boolean delete(Integer id);

}
