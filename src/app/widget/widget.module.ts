import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDesignComponent } from './form-design/form-design.component';
import { ButtonDesignComponent } from './button-design/button-design.component';
import { CodeComponent } from './code/code.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WidgetPagesModule } from './form-design/widget-pages/widget-pages.module';
import { FlexLayoutModule } from "@angular/flex-layout";

const routes: Routes = [
  { path: '', redirectTo: 'form-design', pathMatch: 'full' },
  { path: 'form-design', component: FormDesignComponent },
  { path: 'button-design', component: ButtonDesignComponent },
  { path: 'code', component: CodeComponent },
];

@NgModule({
  declarations: [FormDesignComponent, ButtonDesignComponent, CodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    WidgetPagesModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule
  ]
})
export class WidgetModule { }
