import { HealthyHabitsService } from './../healthy-habits.service';
import { Component, OnInit } from '@angular/core';
import { HealthyHabits } from '../models/healthy-habits';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // ****************************************************************
  // FIELDS

  healthyHabits: HealthyHabits[] = [];

  // ****************************************************************
  // METHODS

  reload = function() {
    this.hhService
      .index()
      .subscribe(
        data => (this.healthyHabits = data),
        err => console.error('Observer got an error: ' + err)
      );
  };

  constructor(private hhService: HealthyHabitsService) {}

  ngOnInit() {
    this.reload();
  }
}
