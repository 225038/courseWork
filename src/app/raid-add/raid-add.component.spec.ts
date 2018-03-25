import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidAddComponent } from './raid-add.component';

describe('RaidAddComponent', () => {
  let component: RaidAddComponent;
  let fixture: ComponentFixture<RaidAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
