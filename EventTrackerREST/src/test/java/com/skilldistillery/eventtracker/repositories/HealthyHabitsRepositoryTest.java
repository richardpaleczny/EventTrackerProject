package com.skilldistillery.eventtracker.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.healthyhabitsjpa.entities.HealthyHabits;
import com.skilldistillery.eventtracker.services.HealthyHabitsService;

@SpringBootTest
@RunWith(SpringRunner.class)
public class HealthyHabitsRepositoryTest {

	@Autowired
	private HealthyHabitsRepository hhRepo;

	@Autowired
	private HealthyHabitsService hhService;

	@Test
	public void test_hhService_method_index_gets_all_activities() {
		assertEquals("Meditation", hhService.index().get(0).getActivity());
	}

	@Test
	public void test_hhService_method_show_finds_hh_by_id() {
		assertEquals("Meditation", hhService.show(1).getActivity());
	}

	@Test
	public void test_hhService_method_create_successfully_adds_hh_to_db() {

		HealthyHabits hh = new HealthyHabits();

		hh.setActivity("Test");
		hh.setFeelingRating(10);
		hh.setGoalMet(true);
		hh.setRecommendedAmount(60);
		hh.setRecommendedTime(60);
		hh.setTimeSpent(60);

		HealthyHabits created = hhService.create(hh);

		assertEquals("Test", created.getActivity());
	}

}