import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { tokenHelp } from '../helper/tokenHelp';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private cookie: tokenHelp) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.cookie.getCookie();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.cookie.closeToken();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
