import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spider-Man', 'Iron Man', 'Hulk ', 'Wolverine', 'Capitán América'];
  heroeBorrado: string = '';
  borrarHeroe(): void {
    console.log('borrando');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

