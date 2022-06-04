import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-evento-nuevo',
  templateUrl: './evento-nuevo.component.html',
  styleUrls: ['./evento-nuevo.component.css']
})
export class EventoNuevoComponent implements OnInit {

  evento: Evento | null;
  min: string | null;

  constructor(
    private fb: FormBuilder,
    private _evento: EventoService,
  ) {
    this.evento = null;
    this.textoError = null;
    this.min = "" + (new Date().toISOString().slice(0, 16));
  }

  ngOnInit(): void { }

  textoError: string | null;


  RegisterForm = this.fb.group({
    Nombre: ['', Validators.required],
    nInscripciones: ['', [Validators.required, Validators.min(1)]],
    AforoMax: ['', [Validators.required, Validators.min(2)]],
    Categoria: ['', Validators.required],
    Direccion: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    descripcion: ['', Validators.required],
  });

  onSubmit() {

    this._evento.postEventoData(this.RegisterForm.value)

  }

  get f() {
    return this.RegisterForm.controls;
  }


}
