import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register.model';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }

  postRegisterUser(body: any): Register {
    let bodyData = new Register();
    bodyData.nombre = body.Nombre;
    bodyData.apellidos = body.Apellidos;
    bodyData.apodo = body.Usuario;
    bodyData.dni = body.DNI;
    bodyData.email = body.Email;
    bodyData.passwordHast = body.Pass;

    let result = new Register();
    this.http.post<Register>(environment.API_URL + 'Users', bodyData).subscribe(
      (response) => {
        console.log('response received');
        result = response;
        setTimeout(function () {
          window.location.href = 'Login';
        }, 1000);
      },
      (error) => {
        console.error('error caught in component');
        alert("No puedes crear a ese Usuario");
      }
    );
    return result;
  }
}
