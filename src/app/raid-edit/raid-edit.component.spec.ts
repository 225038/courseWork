import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidEditComponent } from './raid-edit.component';

describe('RaidEditComponent', () => {
  let component: RaidEditComponent;
  let fixture: ComponentFixture<RaidEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
