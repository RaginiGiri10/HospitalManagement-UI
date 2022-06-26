import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/models/authentication/login/login';
import { ILoginResponse } from 'src/app/models/authentication/login/loginResponse';
import { IRegister } from 'src/app/models/authentication/register/register';
import { IRegisterResponse } from 'src/app/models/authentication/register/registerResponse';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseAuthenticationUrl:string = environment.baseApiUrl+ 'authentication/'
  constructor(private httpClient: HttpClient,
                  private router:Router) { }
  
  register(registerData: IRegister):Observable<IRegisterResponse> {    
    return this.httpClient.post<IRegisterResponse>(this.baseAuthenticationUrl, registerData);
  }

  login(loginData: ILogin):Observable<ILoginResponse> {
    
    return this.httpClient.post<ILoginResponse>(this.baseAuthenticationUrl +'login',loginData)
  }

  isLoggedInUser(): boolean{
    return !!localStorage.getItem('ragtoken')
  }

  logout() {
    localStorage.removeItem('ragtoken')
    this.router.navigate(['/login'])
  }
  getToken(){    
    return localStorage.getItem('ragtoken')
  }


}
