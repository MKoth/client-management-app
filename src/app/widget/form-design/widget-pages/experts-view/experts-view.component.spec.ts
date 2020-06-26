import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsViewComponent } from './experts-view.component';

describe('ExpertsViewComponent', () => {
  let component: ExpertsViewComponent;
  let fixture: ComponentFixture<ExpertsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
