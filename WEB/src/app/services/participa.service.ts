import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from '../models/evento.model';
import { Participa } from '../models/participa.model';


@Injectable()
export class ParticipaService {
  constructor(private http: HttpClient) { }

  getParticipaIsEx(idEvento: number): Observable<Participa> {
    return this.http.get<Participa>(environment.API_URL + 'participas/' + idEvento);
  }

  postEventoData(idEvento: number): Participa {
    let bodyData = new Participa();
    bodyData.creaOParticipa = false;
    bodyData.idEvento = idEvento;
    bodyData.idUsuario = 0;


    let result = new Participa();
    this.http.post<Participa>(environment.API_URL + 'Participas', bodyData).subscribe(
      (response) => {
        console.log('response received');
        result = response;
        setTimeout(function () {
          window.location.href = 'Participando';
        }, 1000);
      },
      (error) => {
        console.error('error caught in component');
        alert("No Puedes registrarte");
      }
    );
    return result;
  }
}
