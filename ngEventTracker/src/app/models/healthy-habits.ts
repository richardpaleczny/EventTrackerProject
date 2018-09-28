export class HealthyHabits {
  id: number;
  activity: string;
  recommendedTime: number;
  recommendedAmount: number;
  timeSpent: number;
  goalMet: boolean;
  feelingRating: number;

  constructor(
    id?: number,
    activity?: string,
    recommendedTime?: number,
    recommendedAmount?: number,
    timeSpent?: number,
    goalMet?: boolean,
    feelingRating?: number
  ) {
    this.id = id;
    this.activity = activity;
    this.recommendedTime = recommendedTime;
    this.recommendedAmount = recommendedAmount;
    this.timeSpent = timeSpent;
    this.goalMet = goalMet;
    this.feelingRating = feelingRating;
  }
}
