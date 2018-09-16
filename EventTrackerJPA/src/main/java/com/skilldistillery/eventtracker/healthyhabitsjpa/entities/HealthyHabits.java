package com.skilldistillery.eventtracker.healthyhabitsjpa.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HealthyHabits {

	// fields

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String activity;

	@Column(name = "recommended_time")
	private Integer recommendedTime;

	@Column(name = "recommended_amount")
	private Integer recommendedAmount;

	@Column(name = "time_spent")
	private Integer timeSpent;

	@Column(name = "goal_met")
	private Boolean goalMet;

	@Column(name = "feeling_rating")
	private Integer feelingRating;

	// constructors

	public HealthyHabits() {
	}

	public HealthyHabits(Integer id, String activity, Integer recommendedTime,
			Integer recommendedAmount, Integer timeSpent, Boolean goalMet,
			Integer feelingRating) {
		super();
		this.id = id;
		this.activity = activity;
		this.recommendedTime = recommendedTime;
		this.recommendedAmount = recommendedAmount;
		this.timeSpent = timeSpent;
		this.goalMet = goalMet;
		this.feelingRating = feelingRating;
	}

	// getters & setters

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public Integer getRecommendedTime() {
		return recommendedTime;
	}

	public void setRecommendedTime(Integer recommendedTime) {
		this.recommendedTime = recommendedTime;
	}

	public Integer getRecommendedAmount() {
		return recommendedAmount;
	}

	public void setRecommendedAmount(Integer recommendedAmount) {
		this.recommendedAmount = recommendedAmount;
	}

	public Integer getTimeSpent() {
		return timeSpent;
	}

	public void setTimeSpent(Integer timeSpent) {
		this.timeSpent = timeSpent;
	}

	public Boolean getGoalMet() {
		return goalMet;
	}

	public void setGoalMet(Boolean goalMet) {
		this.goalMet = goalMet;
	}

	public Integer getFeelingRating() {
		return feelingRating;
	}

	public void setFeelingRating(Integer feelingRating) {
		this.feelingRating = feelingRating;
	}

	// helpers

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((activity == null) ? 0 : activity.hashCode());
		result = prime * result
				+ ((feelingRating == null) ? 0 : feelingRating.hashCode());
		result = prime * result + ((goalMet == null) ? 0 : goalMet.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result
				+ ((recommendedAmount == null) ? 0 : recommendedAmount.hashCode());
		result = prime * result
				+ ((recommendedTime == null) ? 0 : recommendedTime.hashCode());
		result = prime * result + ((timeSpent == null) ? 0 : timeSpent.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		HealthyHabits other = (HealthyHabits) obj;
		if (activity == null) {
			if (other.activity != null)
				return false;
		} else if (!activity.equals(other.activity))
			return false;
		if (feelingRating == null) {
			if (other.feelingRating != null)
				return false;
		} else if (!feelingRating.equals(other.feelingRating))
			return false;
		if (goalMet == null) {
			if (other.goalMet != null)
				return false;
		} else if (!goalMet.equals(other.goalMet))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (recommendedAmount == null) {
			if (other.recommendedAmount != null)
				return false;
		} else if (!recommendedAmount.equals(other.recommendedAmount))
			return false;
		if (recommendedTime == null) {
			if (other.recommendedTime != null)
				return false;
		} else if (!recommendedTime.equals(other.recommendedTime))
			return false;
		if (timeSpent == null) {
			if (other.timeSpent != null)
				return false;
		} else if (!timeSpent.equals(other.timeSpent))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "HealthyHabits [id=" + id + ", activity=" + activity
				+ ", recommendedTime=" + recommendedTime + ", recommendedAmount="
				+ recommendedAmount + ", timeSpent=" + timeSpent + ", goalMet="
				+ goalMet + ", feelingRating=" + feelingRating + "]";
	}

}
