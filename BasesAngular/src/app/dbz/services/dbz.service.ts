import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
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

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){
        console.log();
        console.log('%c Servicio inicializado ', 'background: #222; color: #bada55');
    }
}