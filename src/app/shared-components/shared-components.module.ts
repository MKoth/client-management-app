import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingHoursSharedComponent } from './working-hours-shared/working-hours-shared.component';
import { SocialLinksSharedComponent } from './social-links-shared/social-links-shared.component';
import { MediaUploadFormSharedComponent } from './media-upload-form-shared/media-upload-form-shared.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DragAndDropDirective } from './drag-and-drop.directive';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [WorkingHoursSharedComponent, SocialLinksSharedComponent, MediaUploadFormSharedComponent, DragAndDropDirective],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ImageCropperModule
  ],
  exports: [WorkingHoursSharedComponent, SocialLinksSharedComponent, MediaUploadFormSharedComponent]
})
export class SharedComponentsModule { }
