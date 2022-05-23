import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Injectable()
export class tokenHelp {
  constructor(private cookie: CookieService) {}

  public setCookie(token: string) {
    this.cookie.set('X-Token', token);
  }

  public getCookie() {
    return this.cookie.get('X-Token');
  }

  public closeToken() {
    this.cookie.delete('X-Token');
  }

  public getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    return httpHeaders;
  }

  //Decodificar token

  public getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
