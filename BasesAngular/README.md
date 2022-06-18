# BasesAngular

- Loa parentesis son para escuchar eventos (), (ngSubmit)="agregar()"
- Los corchetes son para esteblecer propiedades a los objetos [], [value]="nuevo.poder"
-  @Input(), sirven para intercambiar datos entre componentes, son un mecanismo para enviar y recibir datos de un componente a otro. Para indicarle a un componente que puede recibir un valor desde el componente padre debemos agregarle el decorador @input a la propiedad que deseamos controlar.
-  Decorador @output Para emitir un valor desde el componente hijo ( home.component) que pueda ser escuchado por el componente padre (app.component) utilizamos el decorador @output.

## Servicios

- El trabajo de un servicio es el de controlar la información, desde obtenerla, almacenarla, actualizarla y compartirla con los componentes. No hay nada especial acerca de un Servicio en Angular, excepto que estos deben de integrarse con los componentes vía el inyector de Dependencias de Angular.
- Nota: Los componentes de nuestra aplicación tienen un trabajo, presentar datos y permitir que el usuarios interactúe con esa información.
