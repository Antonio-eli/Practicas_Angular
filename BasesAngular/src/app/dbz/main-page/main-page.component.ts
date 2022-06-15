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

  nuevo: Personaje = {
    nombre : 'Son Gokū',
    poder  : 100000
  }

  agregar() {
    console.log(this.nuevo.nombre);
    console.log(this.nuevo.poder);
  }

}
