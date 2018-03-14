import { TestBed, inject } from '@angular/core/testing';

import { AuthPageService } from './auth-page.service';

describe('AuthPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPageService]
    });
  });

  it('should be created', inject([AuthPageService], (service: AuthPageService) => {
    expect(service).toBeTruthy();
  }));
});
