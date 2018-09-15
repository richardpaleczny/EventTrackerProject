package com.skilldistillery.healthyhabitsjpa.tests;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.healthyhabitsjpa.entities.HealthyHabits;

class HealthyHabitTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	private HealthyHabits healthyHabits;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("HealthyHabits");
		em = emf.createEntityManager();
		healthyHabits = em.find(HealthyHabits.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	void test_healthyHabit_mappings() {
		assertEquals("Meditation", healthyHabits.getActivity());
	}

}
