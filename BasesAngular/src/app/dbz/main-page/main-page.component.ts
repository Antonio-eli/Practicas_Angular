import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
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

  nuevo: Personaje = {
    nombre: 'Bulma',
    poder: 10
  }

  deletePersonaje: string = '';
  addPersonaje: string = '';

}
