import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFoodComponent } from './notification-food.component';

describe('NotificationFoodComponent', () => {
  let component: NotificationFoodComponent;
  let fixture: ComponentFixture<NotificationFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
