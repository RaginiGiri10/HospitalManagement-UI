import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationService = this.injector.get(AuthenticationService)

    let tokenizedRequest = req.clone({
       headers: req.headers.set('Authorization','Bearer '+ authenticationService.getToken())
    })

    return next.handle(tokenizedRequest);
   
  }
}
