import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAnswerComponent } from './registration-answer.component';

describe('RegistrationAnswerComponent', () => {
  let component: RegistrationAnswerComponent;
  let fixture: ComponentFixture<RegistrationAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
