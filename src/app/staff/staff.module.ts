import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { Routes, RouterModule } from '@angular/router';
import { DxSchedulerModule, DxTemplateModule, DxDataGridModule } from 'devextreme-angular';
import { SharedDirectivesModule } from '../shared-directives/shared-directives.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedComponentsModule } from '../shared-components/shared-components.module';

const routes: Routes = [
  { path: '', redirectTo: 'staff', pathMatch: 'full' },
  { path: 'staff', component: StaffComponent },
  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  declarations: [StaffComponent, ScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxSchedulerModule,
    DxTemplateModule,
    DxDataGridModule,
    SharedDirectivesModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
    FlexLayoutModule,
    SharedComponentsModule
  ],
  exports: [
    RouterModule
  ]
})
export class StaffModule { }
