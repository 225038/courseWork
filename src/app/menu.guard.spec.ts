import { TestBed, async, inject } from '@angular/core/testing';

import { MenuGuard } from './menu.guard';

describe('MenuGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuGuard]
    });
  });

  it('should ...', inject([MenuGuard], (guard: MenuGuard) => {
    expect(guard).toBeTruthy();
  }));
});
