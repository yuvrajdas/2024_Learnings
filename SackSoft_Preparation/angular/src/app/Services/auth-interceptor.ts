import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImplicitReceiver } from '@angular/compiler';


@Injectable() // Remember to provide the interceptor in app.module.ts or using `@Injectable`
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and add the new headers
    console.log('Auth interceptor change header');

    let authReq = req.clone({
      setHeaders:{
        authorization:' your bearer token' // modify header.
      }
     })

    // Pass the modified request to the next handler
    return next.handle(authReq);
  }

}


