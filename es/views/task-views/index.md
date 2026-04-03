# Vistas de tareas

Más allá del diagrama de Gantt, vea las tareas en un tablero Kanban, calendario mensual, diagrama de red o línea de tiempo. Cada vista resalta diferentes aspectos de su cronograma.

## Tablero de tareas

La vista **Tablero de tareas** muestra las tareas como tarjetas organizadas en columnas que representan las etapas del flujo de trabajo (estilo Kanban).

Los proyectos nuevos comienzan con tres columnas predeterminadas: "No iniciada" (0%), "En progreso" (50%) y "Completada" (100%). Cada columna tiene un mapeo de % completado — cuando arrastra una tarjeta a una columna, el porcentaje completado de la tarea se actualiza automáticamente.

Puede agregar, editar, renombrar, reordenar y eliminar columnas. Cada columna tiene un botón **Agregar tarea** en la parte inferior para crear tareas directamente en esa etapa.

Solo las tareas activas que no son de resumen y que tienen "Mostrar en tablero" habilitado aparecen en el tablero. La configuración "Mostrar en tablero" está disponible en la pestaña **Visual** del diálogo **Propiedades de la tarea**.

> Arrastre las tarjetas de tareas entre columnas para cambiar su estado. Cuando el % completado de una tarea cambia en otro lugar (a través del diálogo, edición en línea o Actualizar proyecto), la tarjeta se mueve automáticamente a la columna correspondiente.

## Diagrama de red

La vista **Diagrama de red** muestra las tareas como nodos rectangulares dispuestos en un diseño de diagrama de flujo de izquierda a derecha. Las tareas sin predecesoras aparecen en la columna más a la izquierda, y cada tarea subsiguiente aparece después de todas sus predecesoras.

- Las tareas normales muestran ID, duración, fechas de inicio/fin y recursos
- Las tareas de resumen muestran ID, duración, fechas de inicio/fin y porcentaje completado
- Los hitos muestran ID y fecha de inicio
- Las tareas de la ruta crítica tienen encabezados y bordes rojos
- El progreso se indica mediante superposiciones de líneas diagonales: una línea para tareas en progreso, líneas cruzadas para tareas completadas

Puede contraer/expandir tareas de resumen, hacer clic para seleccionar, doble clic para editar, y clic derecho para el menú contextual. Las flechas de dependencia se dibujan entre los nodos para los cuatro tipos de vínculos.

## Vista de calendario

La **Vista de calendario** muestra una cuadrícula de calendario mensual con las tareas mostradas como barras horizontales que abarcan sus fechas programadas.

- Cambie entre las vistas de **Mes** y **Semana** usando el botón de alternancia en el encabezado
- Habilite el modo **Semana laboral** para mostrar solo los días laborables (vista de 5 días)
- Navegue con los botones Anterior/Siguiente o salte a hoy
- Los días no laborables se muestran con un fondo diferente
- Los hitos aparecen como iconos de diamante
- Haga doble clic en un día vacío para crear una nueva tarea de 1 día en esa fecha

Las tareas que se extienden más allá del límite de una semana continúan en la siguiente fila. Cuando múltiples tareas se superponen en el mismo día, se apilan verticalmente.

## Línea de tiempo

La **Línea de tiempo** es un panel plegable que aparece sobre el diagrama de Gantt, mostrando una vista general simplificada de las tareas seleccionadas por el usuario en un eje de tiempo horizontal.

Para agregar una tarea a la línea de tiempo, haga clic derecho en ella y elija **Mostrar en línea de tiempo**, o marque la opción en la pestaña **Visual** del diálogo Propiedades de la tarea.

Las tareas en la línea de tiempo se pueden mostrar como barras o llamadas (etiquetas de texto con líneas conectoras verticales). Puede cambiar entre modos arrastrando una barra de tarea por encima o por debajo de la línea separadora horizontal en el panel de línea de tiempo. La línea de tiempo también muestra un marcador de hoy y una superposición de ventana de visualización que puede arrastrar para desplazar el diagrama de Gantt.

Alterne la Línea de tiempo desde el menú **Vista**.

## Gantt de seguimiento

La vista **Gantt de seguimiento** es similar a la vista estándar de Tareas pero con el resaltado de la ruta crítica siempre habilitado y la Línea base 0 mostrada si ha sido guardada. Cuando navega fuera del Gantt de seguimiento, la visibilidad de la ruta crítica y la línea base se restauran a su estado anterior.

Use el Gantt de seguimiento para monitorear el progreso del proyecto en comparación con el plan de línea base.
