import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'staff', pathMatch: 'full' },
  { path: 'staff', component: StaffComponent },
  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  declarations: [StaffComponent, ScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StaffModule { }
