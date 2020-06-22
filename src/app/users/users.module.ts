import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedComponentsModule } from '../shared-components/shared-components.module';

const routes: Routes = [
  { path: '', redirectTo: 'groups', pathMatch: 'full' },
  { path: 'groups', component: GroupsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [GroupsComponent, UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxTemplateModule,
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
export class UsersModule { }
