import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AddPatientComponent } from './components/hospital/add-patient/add-patient.component';
import { EditPatientComponent } from './components/hospital/edit-patient/edit-patient.component';
import { HospitalListComponent } from './components/hospital/hospital-list/hospital-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthguardService } from './guards/authguard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthguardService] },
  { path: 'register', component: RegisterComponent },
  {path:'login',component:LoginComponent},
  { path:'addPatient',component:AddPatientComponent,canActivate:[AuthguardService]},
  { path:'editpatient/:id',component:EditPatientComponent,canActivate:[AuthguardService]},
  { path: 'hospitals', component: HospitalListComponent,canActivate:[AuthguardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
