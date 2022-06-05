import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';
import { ParticipaService } from 'src/app/services/participa.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  idEvento: string | null;
  evento: Evento | null;
  eventoFechaInicio: string | null;
  eventoFechaFinal: string | null;
  isParticipa: boolean | null;
  finalizado: boolean | null;

  constructor(
    private activeRoute: ActivatedRoute,
    private _evento: EventoService,
    private _participas: ParticipaService
  ) {
    this.idEvento = '';
    this.evento = null;
    this.eventoFechaInicio = null;
    this.eventoFechaFinal = null;
    this.isParticipa = null;
    this.finalizado = false;
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((x) => (this.idEvento = x.get('id')));
    this._evento
      .getEventoForId(Number(this.idEvento))
      .subscribe(
        (x) =>
          (this.evento = x) &&
          (x.fechaInicio != null
            ? (this.eventoFechaInicio = new Date(
                x.fechaInicio
              ).toLocaleString())
            : console.log('Error')) &&
          (this.evento?.fechaFin != null
            ? (this.eventoFechaFinal = new Date(
                this.evento?.fechaFin
              ).toLocaleString())
            : console.log('Error')) &&
          this.aux()
      );
  }

  enviarParticipacion() {
    this._participas.postEventoData(Number(this.idEvento));
  }

  aux() {
    this._participas.getParticipaIsEx(Number(this.idEvento)).subscribe((x) => {
      x ? (this.isParticipa = false) : (this.isParticipa = true);
      this.evento?.fechaFin
        ? new Date(this.evento?.fechaFin) > new Date()
          ? (this.finalizado = false)
          : (this.finalizado = true)
        : null;
    });
  }

  pdf() {
    let pdfData = new jsPDF('l', 'mm', [350, 100]);
    if (this.evento?.nombre) {
      pdfData.setFont('courier');
      pdfData.rect(0, 0, 350, 100, 'F');
      pdfData.setTextColor('White');
      pdfData.text('Evento --> ' + this.evento?.nombre, 20, 20);
      pdfData.text('Id Entrada --> ' + this.evento?.nInscripciones, 20, 30);
      pdfData.text('Categíra --> ' + this.evento?.categoria, 20, 40);
      pdfData.text('Dirección --> ' + this.evento?.direccion, 20, 50);
      pdfData.text(
        'Fecha del inicio del evento  --> ' + this.eventoFechaInicio,
        20,
        60
      );
      pdfData.text(
        'Fecha del final del evento  --> ' + this.eventoFechaFinal,
        20,
        70
      );
      var logo = new Image();
      logo.src = '/assets/EventMaster.png';
      pdfData.addImage(logo, 'png', 250, 50, 90, 50);
    }
    pdfData.save('Entrada.pdf');
  }
}
