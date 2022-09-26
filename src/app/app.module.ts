import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaLibroComponent } from './component/tarjeta-libro/tarjeta-libro.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel2';



@NgModule({
  declarations: [
    AppComponent,
    TarjetaLibroComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IvyCarouselModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
