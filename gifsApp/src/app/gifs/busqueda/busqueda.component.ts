import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild( 'txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar(){
    /*console.log(this.txtBuscar.nativeElement);*/
    const styles = ['color: whithe', 'background: #BA4A00'].join(';');
    const valor = this.txtBuscar.nativeElement.value;
    console.log('%c%s', styles, valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
