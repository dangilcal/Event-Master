import { Component, OnInit } from '@angular/core';
import { tokenHelp } from 'src/app/helper/tokenHelp';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos-finalizados',
  templateUrl: './eventos-finalizados.component.html',
  styleUrls: ['./eventos-finalizados.component.css'],
})
export class EventosFinalizadosComponent implements OnInit {
  constructor(private cookie: tokenHelp, private _evento: EventoService) {
    this.evento = null;
    this.isCero = false;
  }

  evento: Evento[] | null;
  isCero: boolean;

  ngOnInit(): void {
    this._evento
      .getEventoData()
      .subscribe((x) =>
        (this.evento = x) && x.length === 0
          ? (this.isCero = true)
          : (this.isCero = false)
      );
  }
}
