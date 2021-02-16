import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar = true;

    frase: any = {
        mensaje: 'Fallar a menudo es hasta ahora la mejor forma conocida de llegar más rápido al éxito.',
        autor: 'Tom Kelley'
    };

    personajes: string[] = [ 'Fernado Herrera', 'Juan Pablo', 'Fazt'];
}
