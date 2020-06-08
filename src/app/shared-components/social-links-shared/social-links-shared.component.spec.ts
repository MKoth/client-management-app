import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksSharedComponent } from './social-links-shared.component';

describe('SocialLinksSharedComponent', () => {
  let component: SocialLinksSharedComponent;
  let fixture: ComponentFixture<SocialLinksSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinksSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinksSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
