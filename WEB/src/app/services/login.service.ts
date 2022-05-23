import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tokenHelp } from '../helper/tokenHelp';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private cookies: tokenHelp) {}

  postLoginData<T>(login: any): Observable<HttpResponse<T>> {
    const httpHeaders: HttpHeaders = this.cookies.getHeaders();
    return this.http.post<T>(environment.API_URL + 'identidad/login', login, {
      headers: httpHeaders,
      observe: 'response',
    });
  }
}
