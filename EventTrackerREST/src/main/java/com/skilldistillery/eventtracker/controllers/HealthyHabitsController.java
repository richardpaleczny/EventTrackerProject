package com.skilldistillery.eventtracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.healthyhabitsjpa.entities.HealthyHabits;
import com.skilldistillery.eventtracker.services.HealthyHabitsService;

@RestController
@RequestMapping("api")
public class HealthyHabitsController {
	
	@Autowired
	private HealthyHabitsService hhService;
	
	@RequestMapping(path = "healthyhabits/{id}", method = RequestMethod.GET)
	public HealthyHabits show(@PathVariable Integer id) {
		return hhService.show(id);
	}

}
