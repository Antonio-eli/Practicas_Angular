# Notas.

Cuando se crea un componente este debe estar importado en un modulo como en el ejemplo.
- Pasao 1: crear heroe.component.ts
- Pasao 2: importarlo app.module.ts
- Las funciones se invocan __{{ obtenerNombre() }}__
- Los get se invocan sin patentesis __{{ nombreCapitalizado }}__

## Crear componentes.
``` ng g  c heroes/listado ```

## Diferencias entre Constructor y ngOnInit
- Constructor: se ejecuta en el momento en el que la clase es instanciada. Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases.
- ngOnInit: es simplemente una interfaz. Un «contrato» que obliga a cumplir una cierta estructura (en este caso, incluir el método ngOnInit()) a la clase que lo implementa. Se debería utilizar ngOnInit para las inicializaciones de las variables, evitando hacerlas en el constructor.

