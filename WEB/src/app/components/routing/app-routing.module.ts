import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from 'src/app/pages/home/home-component/home-component.component';
import { LoginGuard } from 'src/app/services/guards/login.guard';
import { TokenGuard } from 'src/app/services/guards/token.guard';
import { EventosFinalizadosComponent } from '../eventos-finalizados/eventos-finalizados.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'e',
    component: EventosFinalizadosComponent,
    canActivate: [TokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
