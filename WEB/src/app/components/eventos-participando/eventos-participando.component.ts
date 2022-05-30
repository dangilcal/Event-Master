import { Component, OnInit } from '@angular/core';
import { tokenHelp } from 'src/app/helper/tokenHelp';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos-participando',
  templateUrl: './eventos-participando.component.html',
  styleUrls: ['./eventos-participando.component.css'],
})
export class EventosParticipandoComponent implements OnInit {
  constructor(private cookie: tokenHelp, private _evento: EventoService) {
    this.evento = null;
    this.isCero = false;
  }

  evento: Evento[] | null;
  isCero: boolean;

  ngOnInit(): void {
    this._evento
      .getEventoParticipa()
      .subscribe((x) =>
        (this.evento = x) && x.length === 0
          ? (this.isCero = true)
          : (this.isCero = false)
      );
  }
}
