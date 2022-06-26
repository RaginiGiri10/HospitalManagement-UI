import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './components/authentication/register/register.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HospitalListComponent } from './components/hospital/hospital-list/hospital-list.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { AddPatientComponent } from './components/hospital/add-patient/add-patient.component';
import { EditPatientComponent } from './components/hospital/edit-patient/edit-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    HospitalListComponent,
    LoginComponent,
    AddPatientComponent,
    EditPatientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
