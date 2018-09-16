package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

	// CREATE

	@RequestMapping(path = "healthyhabits", method = RequestMethod.POST)
	public HealthyHabits create(@RequestBody HealthyHabits healthyHabits,
			HttpServletResponse res) {

		HealthyHabits hh = hhService.create(healthyHabits);

		if (hh == null) {
			res.setStatus(500);
		} else {
			res.setStatus(201);
		}

		return hh;
	}

	// READ

	@RequestMapping(path = "healthyhabits/{id}", method = RequestMethod.GET)
	public HealthyHabits show(@PathVariable Integer id) {
		return hhService.show(id);
	}

	@RequestMapping(path = "healthyhabits", method = RequestMethod.GET)
	public List<HealthyHabits> index() {
		return hhService.index();
	}

	// UPDATE

	@RequestMapping(path = "healthyhabits/{id}", method = RequestMethod.PUT)
	public HealthyHabits replace(@PathVariable Integer id,
			@RequestBody HealthyHabits healthyHabits) {

		return hhService.replace(id, healthyHabits);
	}

	@RequestMapping(path = "healthyhabits/{id}", method = RequestMethod.PATCH)
	public HealthyHabits update(@PathVariable Integer id,
			@RequestBody HealthyHabits healthyHabits) {
		return hhService.update(id, healthyHabits);
	}

	// DELETE

	@RequestMapping(path = "healthyhabits/{id}", method = RequestMethod.DELETE)
	public Boolean destroy(@PathVariable Integer id, HttpServletResponse res) {

		Boolean result = hhService.delete(id);

		if (result) {
			res.setStatus(200);
		} else {
			res.setStatus(404);
		}

		return result;
	}

}
