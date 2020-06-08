import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingHoursSharedComponent } from './working-hours-shared.component';

describe('WorkingHoursSharedComponent', () => {
  let component: WorkingHoursSharedComponent;
  let fixture: ComponentFixture<WorkingHoursSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingHoursSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingHoursSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
