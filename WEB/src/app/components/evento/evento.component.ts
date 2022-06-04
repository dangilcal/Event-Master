import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/evento.model';
import { Participa } from 'src/app/models/participa.model';
import { EventoService } from 'src/app/services/evento.service';
import { ParticipaService } from 'src/app/services/participa.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  idEvento: string | null;
  evento: Evento | null;
  eventoFechaInicio: string | null;
  eventoFechaFinal: string | null;
  isParticipa: boolean | null;
  e: Participa | null;

  constructor(private activeRoute: ActivatedRoute, private _evento: EventoService, private _participas: ParticipaService) {
    this.idEvento = "";
    this.evento = null;
    this.eventoFechaInicio = null;
    this.eventoFechaFinal = null;
    this.isParticipa = null;
    this.e = null;
  }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(x => this.idEvento = x.get('id'));
    this._evento.getEventoForId(Number(this.idEvento)).subscribe(x => (this.evento = x) &&
      (this.evento?.fechaInicio != null ? this.eventoFechaInicio = new Date(this.evento?.fechaInicio).toLocaleString() : console.log("Error"))
      && (this.evento?.fechaFin != null ? this.eventoFechaFinal = new Date(this.evento?.fechaFin).toLocaleString() : console.log("Error")) && this.f());



  }

  enviarParticipacion() {
    this._participas.postEventoData(Number(this.idEvento));
  }

  f() {
    this._participas.getParticipaIsEx(Number(this.idEvento)).subscribe((x) => {

      (x != null) ? this.isParticipa = false : this.isParticipa = true
    }

    )
  }
}
