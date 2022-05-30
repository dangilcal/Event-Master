import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from 'src/app/pages/home/home-component/home-component.component';
import { LoginGuard } from 'src/app/services/guards/login.guard';
import { TokenGuard } from 'src/app/services/guards/token.guard';
import { EventoNuevoComponent } from '../evento-nuevo/evento-nuevo.component';
import { EventoComponent } from '../evento/evento.component';
import { EventosDisponiblesComponent } from '../eventos-disponibles/eventos-disponibles.component';
import { EventosFinalizadosComponent } from '../eventos-finalizados/eventos-finalizados.component';
import { EventosParticipandoComponent } from '../eventos-participando/eventos-participando.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'Login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'Disponibles',
    component: EventosDisponiblesComponent,
    canActivate: [TokenGuard],
  },
  {
    path: 'Participando',
    component: EventosParticipandoComponent,
    canActivate: [TokenGuard],
  },
  { path: 'Register', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'Evento/:id', component: EventoComponent },
  {
    path: 'EventoNuevo',
    component: EventoNuevoComponent,
    canActivate: [TokenGuard],
  },
  {
    path: 'eventosFinalizados',
    component: EventosFinalizadosComponent,
    canActivate: [TokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
