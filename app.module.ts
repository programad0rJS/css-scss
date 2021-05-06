// seguramente tengo un error declarar la cosa ya no tengo un error  
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolamundoModule } from './components/holamundo/holamundo.module';
import { InicioComponent } from './components/inicio/inicio.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HolamundoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
