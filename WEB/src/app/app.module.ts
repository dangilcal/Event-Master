import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookService } from './services/book.service';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './components/routing/app-routing.module';
import { LoginService } from './services/login.service';
import { EventosFinalizadosComponent } from './components/eventos-finalizados/eventos-finalizados.component';
import { InterceptorService } from './services/interceptor.service';
import { EventoService } from './services/evento.service';
import { tokenHelp } from './helper/tokenHelp';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventosDisponiblesComponent } from './components/eventos-disponibles/eventos-disponibles.component';
import { EventosParticipandoComponent } from './components/eventos-participando/eventos-participando.component';
import { EventoNuevoComponent } from './components/evento-nuevo/evento-nuevo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { comunicadorEntreComponentes } from './helper/comunicadorEntreComponentes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponent,
    EventosFinalizadosComponent,
    NavBarComponent,
    EventosDisponiblesComponent,
    EventosParticipandoComponent,
    EventoNuevoComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    NgbModule,
  ],
  providers: [
    BookService,
    CookieService,
    LoginService,
    EventoService,
    tokenHelp,
    comunicadorEntreComponentes,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
