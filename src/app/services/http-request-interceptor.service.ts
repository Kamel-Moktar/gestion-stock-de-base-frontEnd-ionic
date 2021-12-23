import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let baseUrl =localStorage.getItem(environment.apiBaseUrl);
     if(req.url.indexOf("assets")==-1){
     if (baseUrl && !(req.url.startsWith('http') || req.url.startsWith('https'))) {
       req = req.clone({url: baseUrl + req.url});
       console.log("apppppre :" + req.url);
     }
     }
     else console.log("len local :" + req.url);
      return next.handle(req);

  }
}

