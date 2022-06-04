import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from '../models/evento.model';

@Injectable()
export class EventoService {
  constructor(private http: HttpClient) { }

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

  getEventoForId(id: number): Observable<Evento> {
    return this.http.get<Evento>(environment.API_URL + 'eventos/' + id);
  }

  postEventoData(body: any): Evento {
    let bodyData = new Evento();
    bodyData.nombre = body.Nombre;
    bodyData.nInscripciones = body.nInscripciones;
    bodyData.aforoMax = body.AforoMax;
    bodyData.categoria = body.Categoria;
    bodyData.direccion = body.Direccion;
    bodyData.fechaInicio = body.fechaInicio;
    bodyData.fechaFin = body.fechaFin;
    bodyData.descripcion = body.descripcion;
    bodyData.imagen =
      '/assets/imgCategoria/' +
      bodyData.categoria +
      Math.floor(Math.random() * (2 - 1 + 1) + 1) +
      '.svg';
    let result = new Evento();
    this.http.post<Evento>(environment.API_URL + 'Eventos', bodyData).subscribe(
      (response) => {
        console.log('response received');
        result = response;
        setTimeout(function () {
          window.location.href = '';
        }, 1000);
      },
      (error) => {
        console.error('error caught in component');
        alert("No puedes crear a ese Evento");
      }
    );
    return result;
  }
}
