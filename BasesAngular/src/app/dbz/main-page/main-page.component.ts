import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Bulma',
    poder: 10
  }

  /*get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }*/

  /*agregarNuevoPersonaje( argumento: Personaje ){
      console.log('Main page component: click agregarNuevoPersonaje, El evento de fue emitio por el  hijo lo recibio el padre y lo interpreto');
      console.log('%c Argumento :: ', 'background: #222; color: #bada55', argumento);
    this.personajes.push( argumento );
  }*/

  // constructor( private dbzService: DbzService){}
  constructor( ){}

}
