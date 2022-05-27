import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class comunicadorEntreComponentes implements OnInit {
  private message = new BehaviorSubject<string>('');
  public customMessage = this.message.asObservable();

  constructor() {}

  ngOnInit(): void {}

  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
}
