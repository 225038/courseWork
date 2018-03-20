import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodManagmentComponent } from './food-managment.component';

describe('FoodManagmentComponent', () => {
  let component: FoodManagmentComponent;
  let fixture: ComponentFixture<FoodManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
