import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let baseUrl = environment.apiBaseUrl;
    if(baseUrl && !(req.url.startsWith('http') || req.url.startsWith('https'))){
      req = req.clone({url: baseUrl + req.url});
      req.headers.append('Access-Control-Allow-Origin', baseUrl);

    }
    return next.handle(req);
  }


}
