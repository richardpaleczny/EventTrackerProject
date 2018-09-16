package com.skilldistillery.eventtracker.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.healthyhabitsjpa.entities.HealthyHabits;
import com.skilldistillery.eventtracker.repositories.HealthyHabitsRepository;

@Service
public class HealthyHabitsServiceImpl implements HealthyHabitsService {

	@Autowired
	private HealthyHabitsRepository hhRepo;

	@Override
	public HealthyHabits show(Integer id) {

		Optional<HealthyHabits> opHealthyHabits = hhRepo.findById(id);

		if (opHealthyHabits.isPresent()) {
			return opHealthyHabits.get();
		}

		return null;
	}
	
	

}
