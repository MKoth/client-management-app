import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutModule } from './main-layout/main-layout.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterOnlyLayoutComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
