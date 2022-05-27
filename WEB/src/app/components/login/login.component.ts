import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tokenHelp } from 'src/app/helper/tokenHelp';
import { IResponse } from 'src/app/models/Iresponse';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login | null;

  constructor(
    private fb: FormBuilder,
    private _login: LoginService,
    private router: Router,
    private cookie: tokenHelp
  ) {
    this.login = null;
    this.textoError = null;
    this.mostrarError = false;
  }

  ngOnInit(): void {}

  textoError: string | null;
  mostrarError: boolean;

  loginForm = this.fb.group({
    User: ['', Validators.required],
    Pass: ['', Validators.required],
  });

  onSubmit() {
    // Lo pasamos en formato JSON
    const login = {
      apodo: this.loginForm.value.User,
      PasswordHast: this.loginForm.value.Pass,
    };

    this._login.postLoginData<IResponse>(login).subscribe(
      (res) => {
        if (res.body != null) {
          const token = res.body.response;
          this.cookie.setCookie(token);
        }
        window.location.reload();
        this.router.navigateByUrl('');
      },
      (error) => {
        this.textoError = error;
        this.mostrarError = true;
      }
    );
  }
}
