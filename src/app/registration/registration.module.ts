import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './registration/user-info/user-info.component';
import { CompanyInfoComponent } from './registration/company-info/company-info.component';
import { MediaComponent } from './registration/media/media.component';
import { WorkingHoursComponent } from './registration/working-hours/working-hours.component';
import { SocialLinksComponent } from './registration/social-links/social-links.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: '', component: RegistrationComponent }
];

@NgModule({
  declarations: [RegistrationComponent, UserInfoComponent, CompanyInfoComponent, MediaComponent, WorkingHoursComponent, SocialLinksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    RouterModule
  ]
})
export class RegistrationModule { }
