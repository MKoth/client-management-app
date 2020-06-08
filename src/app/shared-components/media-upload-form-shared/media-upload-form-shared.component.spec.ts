import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUploadFormSharedComponent } from './media-upload-form-shared.component';

describe('MediaUploadFormSharedComponent', () => {
  let component: MediaUploadFormSharedComponent;
  let fixture: ComponentFixture<MediaUploadFormSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaUploadFormSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaUploadFormSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
