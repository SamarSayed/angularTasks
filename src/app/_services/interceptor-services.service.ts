import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorServicesService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem("token")
    if (token) {
      const reqClone = req.clone({ headers: req.headers.append('authorization', token) })
      console.log(reqClone.body)
      return next.handle(reqClone)
    }
    return next.handle(req)
  }
}
