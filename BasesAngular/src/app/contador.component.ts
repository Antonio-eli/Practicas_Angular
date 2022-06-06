import { Component } from "@angular/core";

@Component({
    selector : 'app-contador',
    template: `
    <div class="container">
        <h1 class="text-center fs-2 fw-light">{{titulo}}</h1>
        <div class="row gx-5">
            <h1 class="fs-3 fw-light liner">{{tema38}}</h1>
            <div class="col-lg-12 d-flex justify-content-evenly">
                <div><button (click)="acumular(+2)">+1</button></div>
                <div class="badge bg-secondary d-flex align-items-center">{{ numero }}</div>
                <div><button (click)="acumular(-2)">-1</button> </div>
            </div>
        </div>
        <div class="row gx-5 my-5">
            <h1 class="fs-3 fw-light liner">{{tarea}}</h1>
            <p class="fs-4 text-center fw-lighter">La base es: <span class="fw-bold">5</span></p>
            <div class="col-lg-12 d-flex justify-content-evenly">
                <div><button (click)="acumularTarea( base )">+ {{ base }}</button></div>
                <div class="badge bg-secondary d-flex align-items-center">{{ numeroTarea }}</div>
                <div><button (click)="acumularTarea( - base )">- {{ base }} </button> </div>
            </div>
        </div>
    </div>
    `
})
export class ContadorComponent {
    titulo      : string = 'Bases Angular';
    tema38      : string = 'Contador App';
    tarea       : string = 'Acumulador App';
    numero      : number = 10;
    numeroTarea : number = 10;
    base        : number = 5;
    acumular( valorNumerico : number){
        this.numero += valorNumerico;
    }
    acumularTarea( valorTarea : number){
        this.numeroTarea += valorTarea;
    }
}