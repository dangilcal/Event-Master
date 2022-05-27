import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { comunicadorEntreComponentes } from 'src/app/helper/comunicadorEntreComponentes';
import { tokenHelp } from 'src/app/helper/tokenHelp';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private _token: tokenHelp,
    private router: Router,
    private _comunicador: comunicadorEntreComponentes
  ) {
    this.existeToken = null;
    this.pagActual = -10;
    this.mensaje = '';
  }

  existeToken: boolean | null;
  pagActual: number;
  mensaje: string;

  componentes = [
    'HomeComponentComponent',
    'EventosDisponiblesComponent',
    'EventosParticipandoComponent',
    'EventosFinalizadosComponent',
    'EventoNuevoComponent',
    'LoginComponent',
    'RegistroComponent',
  ];

  ngOnInit(): void {
    if (this._token.getCookie() == '') {
      this.existeToken = false;
    } else {
      this.existeToken = true;
    }
    this._comunicador.customMessage.subscribe(
      (x) => (this.mensaje = x) && this.actualizarPagActual()
    );
  }

  cerrarSesion() {
    this._token.closeToken();
    window.location.reload();
    this.router.navigateByUrl('');
  }

  actualizarPagActual() {
    this.pagActual = this.componentes.indexOf(this.mensaje) + 1;
  }
}
