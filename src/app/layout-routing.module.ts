import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CompanyModule } from './company/company.module';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { StaffModule } from './staff/staff.module';
import { WidgetModule } from './widget/widget.module';
import { OrdersModule } from './orders/orders.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => DashboardModule },
      { path: 'company', loadChildren: () => CompanyModule },
      { path: 'users', loadChildren: () => UsersModule },
      { path: 'services', loadChildren: () => ServicesModule },
      { path: 'staff', loadChildren: () => StaffModule },
      { path: 'widget', loadChildren: () => WidgetModule },
      { path: 'orders', loadChildren: () => OrdersModule },
    ]
  },
  {
    path: '',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: 'login', loadChildren: () => LoginModule },
      { path: 'registration', loadChildren: () => RegistrationModule }
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
