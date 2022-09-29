import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaLibroComponent } from './component/tarjeta-libro/tarjeta-libro.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel2';
import { FormularioNuevoComponent } from './component/formulario-nuevo/formulario-nuevo.component';
import { FormsModule } from '@angular/forms';
import { ModalEditComponent } from './component/modal-edit/modal-edit.component';
import { FormularioNuevaCategoriaComponent } from './component/formulario-nueva-categoria/formulario-nueva-categoria.component';
import { ModalEditCategoriaComponent } from './component/modal-edit-categoria/modal-edit-categoria.component';







@NgModule({
  declarations: [
    AppComponent,
    TarjetaLibroComponent,
    HeaderComponent,   
    LandingComponent,
    FormularioNuevoComponent,
    ModalEditComponent,
    FormularioNuevaCategoriaComponent,
    ModalEditCategoriaComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule,
    
    
    
    
    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
