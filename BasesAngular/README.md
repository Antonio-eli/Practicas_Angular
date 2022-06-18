# Notas.

Cuando se crea un componente este debe estar importado en un modulo como en el ejemplo.
- Paso 1: crear heroe.component.ts
- Paso 2: importarlo app.module.ts
- Las funciones se invocan __{{ obtenerNombre() }}__
- Los get se invocan sin patentesis __{{ nombreCapitalizado }}__
- Los parentesis () son para escuhar eventos, __(click)="agregar()"__
- Los corchetes [] son para establecer propiedades a los objetos, __[value]="nuevo.poder"__

## Crear componentes.
``` ng g  c heroes/listado ```

## Diferencias entre Constructor y ngOnInit
- Constructor: se ejecuta en el momento en el que la clase es instanciada. Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases.
- ngOnInit: es simplemente una interfaz. Un «contrato» que obliga a cumplir una cierta estructura (en este caso, incluir el método ngOnInit()) a la clase que lo implementa. Se debería utilizar ngOnInit para las inicializaciones de las variables, evitando hacerlas en el constructor.
## Módulos
- En los imports solo van módulos como observamos en el ejemplo
- CommonModule: CommonModule se utiliza para exportar todas las directivas y tuberías básicas de Angular
## Decorador @Input()

Sirven para intercambiar datos entre componentes, son un mecanismo para enviar y recibir datos de un componente a otro. Para indicarle a un componente que puede recibir un valor desde el componente padre debemos agregarle el decorador @input a la propiedad que deseamos controlar.
## Decorador @output()
Para emitir un valor desde el componente hijo ( home.component) que pueda ser escuchado por el componente padre (app.component) utilizamos el decorador @output.

## Servicios
El trabajo de un servicio es el de controlar la información, desde obtenerla, almacenarla, actualizarla y compartirla con los componentes. No hay nada especial acerca de un Servicio en Angular, excepto que estos deben de integrarse con los componentes vía el inyector de Dependencias de Angular.
- Nota: Los componentes de nuestra aplicación tienen un trabajo, presentar datos y permitir que el usuarios interactúe con esa información.