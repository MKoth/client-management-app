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
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

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
    FlexLayoutModule,
    NgxMatColorPickerModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    RouterModule
  ],
  providers:[
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class WidgetModule { }
