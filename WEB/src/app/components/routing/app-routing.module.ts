import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosFinalizadosComponent } from '../eventos-finalizados/eventos-finalizados.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'e', component: EventosFinalizadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
