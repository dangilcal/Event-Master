import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Injectable()
export class tokenHelp {
  constructor(private cookie: CookieService) { }

  public setCookie(token: string) {
    this.cookie.set('X-Token', token, 0, "/");
  }

  public getCookie() {
    return this.cookie.get('X-Token');
  }

  public closeToken() {
    this.cookie.delete('X-Token', "/");
  }

  public getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    return httpHeaders;
  }

  //Decodificar token

  public getDecodedAccessToken(): any {
    try {
      return jwt_decode(this.getCookie());
    } catch (Error) {
      return null;
    }
  }
  public getId(): any {
    try {
      return this.getDecodedAccessToken()['userId'];
    } catch (Error) {
      return null;
    }
  }
  public getUserName(): any {
    try {
      return this.getDecodedAccessToken()['user'];
    } catch (Error) {
      return null;
    }
  }
}
