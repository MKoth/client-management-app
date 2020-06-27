import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertsViewComponent } from './experts-view/experts-view.component';
import { ServiceViewComponent } from './service-view/service-view.component';
import { DateViewComponent } from './date-view/date-view.component';
import { TimeViewComponent } from './time-view/time-view.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ExpertsViewComponent, ServiceViewComponent, DateViewComponent, TimeViewComponent, PaymentViewComponent, ResultViewComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatExpansionModule,
    PerfectScrollbarModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports:[
    ExpertsViewComponent, ServiceViewComponent, DateViewComponent, TimeViewComponent, PaymentViewComponent, ResultViewComponent
  ]
})
export class WidgetPagesModule { }
