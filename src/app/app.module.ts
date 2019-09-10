import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { BooknowComponent } from './shared/components/home/booknow/booknow.component';
import { BooklaterComponent } from './shared/components/home/booklater/booklater.component';
import { HttpClientModule } from '@angular/common/http';
import { MapviewComponent } from './shared/components/mapview/mapview.component';
import { ToastrModule } from 'ngx-toastr';

@ NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BooknowComponent,
    BooklaterComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8lgLyWZZBgmCV6EAVADrIanxU03jXfWc'
    }),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
