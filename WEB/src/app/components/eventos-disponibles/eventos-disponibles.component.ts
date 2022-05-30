import { Component, OnInit } from '@angular/core';
import { tokenHelp } from 'src/app/helper/tokenHelp';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos-disponibles',
  templateUrl: './eventos-disponibles.component.html',
  styleUrls: ['./eventos-disponibles.component.css'],
})
export class EventosDisponiblesComponent implements OnInit {
  constructor(private cookie: tokenHelp, private _evento: EventoService) {
    this.evento = null;
    this.isCero = false;
  }

  evento: Evento[] | null;
  isCero: boolean;

  ngOnInit(): void {
    this._evento
      .getEventoNoParticipa()
      .subscribe((x) =>
        (this.evento = x) && x.length === 0
          ? (this.isCero = true)
          : (this.isCero = false)
      );
  }
}
