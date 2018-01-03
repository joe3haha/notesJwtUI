import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor is online....');
  	if (localStorage.getItem('token') != undefined) {
            return next.handle(req.clone({
                setHeaders: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }));
        }
        else {
            return next.handle(req);
        }
  }
}