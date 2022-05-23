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
  }

  evento: Evento[] | null;

  ngOnInit(): void {
    this._evento.getEventoData().subscribe((x) => (this.evento = x));
  }
}
