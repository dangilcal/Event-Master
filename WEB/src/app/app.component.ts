import { Component } from '@angular/core';
import { comunicadorEntreComponentes } from './helper/comunicadorEntreComponentes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Event Master';

  constructor(private _comunicador: comunicadorEntreComponentes) {}

  recargarPage(event: any) {
    this._comunicador.changeMessage(event.constructor.name);
  }
}
