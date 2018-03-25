import { TestBed, async, inject } from '@angular/core/testing';

import { HospitalGuard } from './hospital.guard';

describe('HospitalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalGuard]
    });
  });

  it('should ...', inject([HospitalGuard], (guard: HospitalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
