import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { tokenHelp } from '../helper/tokenHelp';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private cookie: tokenHelp, private route: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.cookie.getCookie();
    const id = this.cookie.getId();
    const userName = this.cookie.getUserName();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'X-Login': id,
          'X-User': userName,
        },
      });
    }
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.cookie.closeToken();
          this.route.navigate(['']).then(() => false);
        }
        if (err.status === 0) {
          return throwError('Servicio no disponible');
        }

        const error = err.error || err.statusText;
        return throwError(error);
      })
    );
  }
}
