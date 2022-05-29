import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  reister: Register | null;

  constructor(
    private fb: FormBuilder,
    private _register: RegisterService,
    private router: Router
  ) {
    this.reister = null;
    this.textoError = null;
    this.mostrarError = false;
  }

  ngOnInit(): void {}

  textoError: string | null;
  mostrarError: boolean;

  RegisterForm = this.fb.group({
    Nombre: ['', Validators.required],
    Apellidos: ['', Validators.required],
    Usuario: ['', Validators.required],
    DNI: ['', [Validators.required, Validators.minLength(9)]],
    Email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    Pass: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (
      this._register.postRegisterUser(this.RegisterForm.value).apodo == null
    ) {
      this.mostrarError = true;
    }
  }

  get f() {
    return this.RegisterForm.controls;
  }
}
