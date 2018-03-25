import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidManageComponent } from './raid-manage.component';

describe('RaidManageComponent', () => {
  let component: RaidManageComponent;
  let fixture: ComponentFixture<RaidManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
