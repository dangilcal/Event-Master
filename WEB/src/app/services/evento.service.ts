import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from '../models/evento.model';

@Injectable()
export class EventoService {
  constructor(private http: HttpClient) {}

  getEventoData(): Observable<Evento[]> {
    return this.http.get<Evento[]>(environment.API_URL + 'eventos/finalizados');
  }

  getEventoParticipa(): Observable<Evento[]> {
    return this.http.get<Evento[]>(
      environment.API_URL + 'ParticipaEventos/participa'
    );
  }

  getEventoNoParticipa(): Observable<Evento[]> {
    return this.http.get<Evento[]>(
      environment.API_URL + 'ParticipaEventos/noparticipa'
    );
  }

  // postEventoData(body: any): Evento {
  //   let bodyData = new Evento();
  //   bodyData.isbn = body.EventoISBN;
  //   bodyData.name = body.EventoName;
  //   bodyData.pages = body.EventoPages;
  //   bodyData.publishDate = new Date();

  //   let result = new Evento();
  //   this.http.post<Evento>(environment.API_URL + 'Eventos', bodyData).subscribe(
  //     (response) => {
  //       console.log('response received');
  //       result = response;
  //     },
  //     (error) => {
  //       console.error('error caught in component');
  //     }
  //   );
  //   return result;
  // }
}
