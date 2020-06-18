import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { Routes, RouterModule } from '@angular/router';
import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import { SharedDirectivesModule } from '../shared-directives/shared-directives.module';

const routes: Routes = [
  { path: '', component: OrdersComponent },
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxSchedulerModule,
    DxTemplateModule,
    SharedDirectivesModule
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersModule { }
