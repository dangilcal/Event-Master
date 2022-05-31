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

  constructor(
    private fb: FormBuilder,
    private _evento: EventoService,
    private router: Router
  ) {
    this.evento = null;
    this.textoError = null;
  }

  ngOnInit(): void { }

  textoError: string | null;


  RegisterForm = this.fb.group({
    Nombre: ['', Validators.required],
    nInscripciones: ['', Validators.required],
    AforoMax: ['', Validators.required],
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
