// import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';
// import { login } from '../models/login';
// import { LoginService } from './login.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenServiceService implements HttpInterceptor  {

//   constructor(private LoginService: LoginService) {}  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     request = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${this.LoginService.getToken()}`
//       }
//     });    return next.handle(request);
//   }
  

// }
