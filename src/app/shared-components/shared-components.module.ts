import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingHoursSharedComponent } from './working-hours-shared/working-hours-shared.component';
import { SocialLinksSharedComponent } from './social-links-shared/social-links-shared.component';
import { MediaUploadFormSharedComponent } from './media-upload-form-shared/media-upload-form-shared.component';



@NgModule({
  declarations: [WorkingHoursSharedComponent, SocialLinksSharedComponent, MediaUploadFormSharedComponent],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
