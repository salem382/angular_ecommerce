// auth-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    const authToken = localStorage.getItem("userToken") || "";

    // Clone the request and add the token to the headers
    const authRequest = request.clone({
      setHeaders: {
        'token': authToken
      }
    });

    // Pass the cloned request to the next handler
    return next.handle(authRequest);
  }
}
