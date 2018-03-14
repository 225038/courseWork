import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUndecidedUserPageComponent } from './admin-undecided-user-page.component';

describe('AdminUndecidedUserPageComponent', () => {
  let component: AdminUndecidedUserPageComponent;
  let fixture: ComponentFixture<AdminUndecidedUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUndecidedUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUndecidedUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
