import { HealthyHabitsService } from './../healthy-habits.service';
import { Component, OnInit } from '@angular/core';
import { HealthyHabits } from '../models/healthy-habits';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // ****************************************************************
  // FIELDS

  selected = null;

  healthyHabits: HealthyHabits[] = [];

  newHealthyHabits = new HealthyHabits();

  // ****************************************************************
  // METHODS

  displayTable() {
    this.selected = null;
  }

  reload = function() {
    this.hhService
      .index()
      .subscribe(
        data => (this.healthyHabits = data),
        err => console.error('Observer got an error: ' + err)
      );
  };

  show = function(id) {
    this.hhService.show(id).subscribe(
      data => {
        this.selected = data;
      },
      err => console.error('Observer got an error: ' + err)
    );
  };

  createHealthyHabit = function(hhAddForm: NgForm) {
    // Take the values from the form and pass them to our empty object.
    // Take this object and send it to be persisted in our database.
    this.newHealthyHabits.activity = hhAddForm.value.activity;
    this.newHealthyHabits.recommendedTime = hhAddForm.value.recommendedTime;
    this.newHealthyHabits.recommendedAmount = hhAddForm.value.recommendedAmount;
    this.newHealthyHabits.timeSpent = hhAddForm.value.timeSpent;
    this.newHealthyHabits.goalMet = hhAddForm.value.goalMet;
    this.newHealthyHabits.feelingRating = hhAddForm.value.feelingRating;

    this.hhService
      .create(this.newHealthyHabits)
      .subscribe(
        data => this.reload(),
        err => console.error('Observer got an error: ' + err)
      );

    hhAddForm.reset();
  };

  constructor(private hhService: HealthyHabitsService) {}

  ngOnInit() {
    this.reload();
  }
}
