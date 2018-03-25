import { TestBed, async, inject } from '@angular/core/testing';

import { RaidGuard } from './raid.guard';

describe('RaidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaidGuard]
    });
  });

  it('should ...', inject([RaidGuard], (guard: RaidGuard) => {
    expect(guard).toBeTruthy();
  }));
});
