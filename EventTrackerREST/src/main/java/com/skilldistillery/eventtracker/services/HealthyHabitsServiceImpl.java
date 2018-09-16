package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.healthyhabitsjpa.entities.HealthyHabits;
import com.skilldistillery.eventtracker.repositories.HealthyHabitsRepository;

@Service
public class HealthyHabitsServiceImpl implements HealthyHabitsService {

	@Autowired
	private HealthyHabitsRepository hhRepo;

	// CREATE

	@Override
	public HealthyHabits create(HealthyHabits hh) {

		return hhRepo.saveAndFlush(hh);
	}

	// READ

	@Override
	public HealthyHabits show(Integer id) {

		Optional<HealthyHabits> opHealthyHabits = hhRepo.findById(id);

		if (opHealthyHabits.isPresent()) {
			return opHealthyHabits.get();
		}

		return null;
	}

	@Override
	public List<HealthyHabits> index() {

		return hhRepo.findAll();
	}

	// UPDATE

	@Override
	public HealthyHabits replace(Integer id, HealthyHabits hh) {
		
		Optional<HealthyHabits> opHealthyHabits = hhRepo.findById(id);

		if (opHealthyHabits.isPresent()) {
			HealthyHabits managedHealthyHabits = opHealthyHabits.get();
			managedHealthyHabits.setActivity(hh.getActivity());
			managedHealthyHabits.setRecommendedTime(hh.getRecommendedTime());
			managedHealthyHabits.setRecommendedAmount(hh.getRecommendedAmount());
			managedHealthyHabits.setTimeSpent(hh.getTimeSpent());
			managedHealthyHabits.setGoalMet(hh.getGoalMet());
			managedHealthyHabits.setFeelingRating(hh.getFeelingRating());
			return hhRepo.saveAndFlush(managedHealthyHabits);
		}

		return null;
	}

	@Override
	public HealthyHabits update(Integer id, HealthyHabits hh) {

		Optional<HealthyHabits> opHealthyHabits = hhRepo.findById(id);

		if (opHealthyHabits.isPresent()) {
			HealthyHabits managedHealthyHabits = opHealthyHabits.get();

			if (hh.getActivity() != null && !hh.getActivity().equals(""))
				managedHealthyHabits.setActivity(hh.getActivity());

			if (hh.getRecommendedTime() != null && !(hh
					.getRecommendedTime() == managedHealthyHabits.getRecommendedTime()))
				managedHealthyHabits.setRecommendedTime(hh.getRecommendedTime());

			if (hh.getRecommendedAmount() != null
					&& !(hh.getRecommendedAmount() == managedHealthyHabits
							.getRecommendedAmount()))
				managedHealthyHabits.setRecommendedAmount(hh.getRecommendedAmount());

			if (hh.getTimeSpent() != null
					&& !(hh.getTimeSpent() == managedHealthyHabits.getTimeSpent()))
				managedHealthyHabits.setTimeSpent(hh.getTimeSpent());

			if (hh.getGoalMet() != null
					&& !(hh.getGoalMet() == managedHealthyHabits.getGoalMet()))
				managedHealthyHabits.setGoalMet(hh.getGoalMet());

			if (hh.getFeelingRating() != null && !(hh
					.getFeelingRating() == managedHealthyHabits.getFeelingRating()))
				managedHealthyHabits.setFeelingRating(hh.getFeelingRating());

			return hhRepo.saveAndFlush(managedHealthyHabits);
		}

		return null;
	}

	// DELETE

	@Override
	public boolean delete(Integer id) {
		
		try {
			hhRepo.deleteById(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return false;
	}
	
}
