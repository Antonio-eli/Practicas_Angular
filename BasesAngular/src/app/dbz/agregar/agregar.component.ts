import { Component, EventEmitter ,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre : '',
    poder  : 0
  }

  constructor( private dbzService: DbzService) {}


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    /*console.log(this.nuevo);
    console.log('%c Emitiendo evento EventEmitter con .emit( this.nuevo )  ', 'background: #E67E22; color: #FFF');
    this.onNuevoPersonaje.emit( this.nuevo );*/
    console.log('%c Utilizando dbzService.agregarPersonaje', 'background: #E67E22; color: #FFF');
    this.dbzService.agregarPersonaje( this.nuevo );
    this.nuevo = {
      nombre : '',
      poder  : 0
    }

  }

}
