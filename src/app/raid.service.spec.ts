import { TestBed, inject } from '@angular/core/testing';

import { RaidService } from './raid.service';

describe('RaidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaidService]
    });
  });

  it('should be created', inject([RaidService], (service: RaidService) => {
    expect(service).toBeTruthy();
  }));
});
