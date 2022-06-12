import { Component } from "@angular/core"



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 43

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return ` ${this.nombre} - ${this.edad} `
    }

    cambiarNombre(): void {
        this.nombre = 'Spidernan';
    }

    cambiarEdad(): void {
        this.edad = 50;
    }

}