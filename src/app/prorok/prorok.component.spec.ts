import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProrokComponent } from './prorok.component';

describe('ProrokComponent', () => {
  let component: ProrokComponent;
  let fixture: ComponentFixture<ProrokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProrokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
