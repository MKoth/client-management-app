import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterOnlyLayoutComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
