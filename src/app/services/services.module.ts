import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';
import { Routes, RouterModule } from '@angular/router';
import { DxTreeListModule, DxTemplateModule } from 'devextreme-angular';

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
    DxTemplateModule
  ],
  exports: [
    RouterModule
  ]
})
export class ServicesModule { }
