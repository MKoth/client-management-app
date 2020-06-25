import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MediaComponent } from './media/media.component';
import { WorkingTimeComponent } from './working-time/working-time.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'media', component: MediaComponent },
  { path: 'working-time', component: WorkingTimeComponent },
  { path: 'social-links', component: SocialLinksComponent }
];

@NgModule({
  declarations: [InfoComponent, MediaComponent, WorkingTimeComponent, SocialLinksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    SharedComponentsModule,
    MatCardModule
  ],
  exports: [
    RouterModule
  ]
})
export class CompanyModule { }
