import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';
import { Routes, RouterModule } from '@angular/router';
import { DxTreeListModule, DxTemplateModule, DxDataGridModule } from 'devextreme-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  declarations: [CategoriesComponent, ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxTreeListModule,
    DxTemplateModule,
    DxDataGridModule,
    MatCheckboxModule
  ],
  exports: [
    RouterModule
  ]
})
export class ServicesModule { }
