import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { Routes } from '@angular/router';
import { OfferComponent } from './offer/offer.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    OfferComponent,
    OfferDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
