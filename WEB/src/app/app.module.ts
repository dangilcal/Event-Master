import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { NgChartsModule } from 'ng2-charts';
import { FaltasService } from './services/faltas.service';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './components/routing/app-routing.module';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [AppComponent, HomeComponentComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [BookService, FaltasService, CookieService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
