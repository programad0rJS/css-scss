import { Component } from '@angular/core';

@Component({
  selector: 'angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  
  // TextoPlaceholder = 'Escriba algo aqui';
  // deshabilitado = true;
  // ImgSrc = 'data:image/jpeg;base64,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'

  // texto = 'Me perdi de algo';
  // texto1 = '';
  // title = 'Bienvenidos a  Aprendiendo Angular';
  // holamundo = 'hola soy un parrafo';
  // nombre ='Josue';
  // cambiarTexto(): void {
  //   this.texto = "Amor Amor Amor Amor Amor Amor cambiarTexto es el el poder de angular";

    
  // }

  // constructor(){
  //   setInterval( ()=> this.deshabilitado = false,2000)
  // }
  // eso es funciones
}