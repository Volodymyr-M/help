# Propiedades del proyecto

Configure la fecha de inicio de su proyecto, las horas de trabajo y las reglas de programación. Estas configuraciones determinan cómo se calcula y muestra cada tarea en su proyecto.

## Nombre del proyecto

Establezca el nombre de su proyecto en el campo **Nombre** en la pestaña **General** del diálogo **Propiedades del proyecto**. Este nombre también es utilizado por la [tarea de resumen raíz](/es/building-schedule/tasks/index.md#tarea-de-resumen-raíz) de su proyecto.

En web y Windows, al hacer clic en el nombre del proyecto en el encabezado también se abre el diálogo **Propiedades del proyecto**.

## Fecha de inicio y dirección de planificación

De forma predeterminada, su proyecto se planifica desde la Fecha de inicio, que puede establecer en el campo **Fecha de inicio del proyecto** del diálogo **Propiedades del proyecto**.

Para planificar su proyecto desde la Fecha de fin, cambie a **Planificar desde la fecha de fin** en el diálogo **Propiedades del proyecto** y establezca la **Fecha de fin del proyecto**.

La pestaña **General** del diálogo **Propiedades del proyecto** muestra tanto la Fecha de inicio como la Fecha de fin. Cuando se programa desde el inicio, la Fecha de inicio es editable y la Fecha de fin muestra el valor calculado. Cuando se programa desde el fin, la Fecha de fin es editable y la Fecha de inicio muestra el valor calculado.

Tenga en cuenta:

- Para proyectos planificados desde la Fecha de inicio, la [restricción](/es/building-schedule/constraints/index.md#restricciones) predeterminada para las tareas recién creadas es **Lo antes posible**.
- Para proyectos planificados desde la Fecha de fin, la restricción predeterminada para las tareas recién creadas es **Lo más tarde posible**.

Al cambiar entre planificación desde el Inicio y el Fin, las restricciones de las tareas existentes no se cambian excepto para las [tareas de resumen](/es/building-schedule/tasks/index.md#tareas-de-resumen), incluyendo la [tarea de resumen raíz](/es/building-schedule/tasks/index.md#tarea-de-resumen-raíz).

Para las tareas de resumen:

- La restricción **Lo antes posible** se reemplaza por **Lo más tarde posible** al cambiar de planificación desde el Inicio al Fin.
- La restricción **Lo más tarde posible** se reemplaza por **Lo antes posible** al cambiar de planificación desde el Fin al Inicio.

## Primer día de la semana

Dependiendo de su país, una semana puede comenzar en domingo o lunes. Puede actualizar el campo **Primer día de la semana** en la pestaña **Regional** del diálogo **Propiedades del proyecto** para cambiar la configuración predeterminada de su proyecto.

Cambiar esta propiedad actualiza la interfaz de usuario, incluyendo el diagrama de Gantt en algunos niveles de zoom, pero no afecta la programación. Para ajustar el cronograma en consecuencia, actualice sus [Calendarios](/es/setting-up-project/calendars/index.md).

## Horas por día, días por semana, días por mes

En Ingantt, puede especificar la [Duración](/es/building-schedule/task-properties/index.md#duración), el [Trabajo](/es/building-schedule/task-properties/index.md#trabajo) o la [Posposición](/es/building-schedule/dependencies/index.md#posposición-y-tiempo-de-adelanto) en Horas, Días, Semanas y Meses.

Por ejemplo, establecer la duración de una tarea en 2 Días significa 16 horas usando la configuración predeterminada.

De forma predeterminada:

- 1 Día equivale a 8 horas.
- 1 Semana equivale a 5 días (40 horas).
- 1 Mes equivale a 20 días (160 horas).

Puede cambiar estas configuraciones predeterminadas en la pestaña **Duración** del diálogo **Propiedades del proyecto**.

> La mayoría de los proyectos deberían usar los valores predeterminados. Solo cambie estas configuraciones si su proyecto tiene un requisito específico para conversiones diferentes.

## Formato de visualización de duración y trabajo

De forma predeterminada, las duraciones se muestran en días y los valores de trabajo en horas. Puede cambiar el formato de visualización para ambos en la pestaña **Tiempo** del diálogo **Propiedades del proyecto**. Las unidades disponibles son minutos, horas, días, semanas y meses.

Cuando cambia cualquiera de los formatos, todos los valores existentes se actualizan para mostrarse en la nueva unidad.

## Hora de inicio y fin predeterminadas

La hora de inicio predeterminada (8:00 AM) y la hora de fin (5:00 PM) controlan cuándo comienza y termina el trabajo cada día. Puede cambiarlas en la pestaña **Tiempo** del diálogo **Propiedades del proyecto**.

## Opciones de programación

La pestaña **Programación** del diálogo **Propiedades del proyecto** contiene opciones que controlan cómo se programan las tareas:

- **Respetar fechas de restricción** — Cuando está habilitado, las restricciones semiflexibles (como No comenzar después del) tienen prioridad sobre las dependencias, lo que podría crear holgura negativa. Cuando está deshabilitado (el valor predeterminado), las dependencias siempre tienen prioridad.
- **Dividir tareas en progreso** — Cuando está habilitado (el valor predeterminado), el programador puede dividir automáticamente las tareas que tienen progreso fuera de secuencia.
- **Mover partes completadas/restantes** — Cuatro opciones que controlan cómo las porciones de trabajo completado y restante se reposicionan en relación con la fecha de estado. Estas ayudan a mantener su cronograma actualizado moviendo el trabajo completado hacia atrás a la fecha de estado o empujando el trabajo restante hacia adelante.
