import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Son Gokū',
      poder: 50000
    },
    {
      nombre: 'Vegeta',
      poder: 45000
    },
    {
      nombre: 'Bardock',
      poder: 10000
    },
    {
      nombre: 'Rey Vegeta',
      poder: 5000
    }
  ];

  deletePersonaje: string = '';
  addPersonaje: string = '';
  nuevo: Personaje = {
    nombre : '',
    poder  : 0
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    console.log(this.nuevo);
    this.personajes.push( this.nuevo );
    this.nuevo = {
      nombre : '',
      poder  : 0
    }
  }

}
