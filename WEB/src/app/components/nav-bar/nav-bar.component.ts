import { Component, OnInit } from '@angular/core';
import { tokenHelp } from 'src/app/helper/tokenHelp';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private _token: tokenHelp) {
    this.existeToken = null;
  }
  existeToken: boolean | null;
  ngOnInit(): void {
    if (this._token.getCookie() == "") {
      this.existeToken = false;
    } else {
      this.existeToken = true;
    }
  }

  cerrarSesion() {
    this._token.closeToken();
    window.location.reload();
  }
}
