import { TestBed } from '@angular/core/testing';

import { HealthyHabitsService } from './healthy-habits.service';

describe('HealthyHabitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthyHabitsService = TestBed.get(HealthyHabitsService);
    expect(service).toBeTruthy();
  });
});
