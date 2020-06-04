import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MediaComponent } from './media/media.component';
import { WorkingTimeComponent } from './working-time/working-time.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompanyModule { }
