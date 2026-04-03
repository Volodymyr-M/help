# Propiedades de la tarea

Cada tarea tiene propiedades que controlan cómo se programa, cómo se calculan los costos y cómo aparece en el diagrama de Gantt. Establézcalas en el diálogo **Propiedades de la tarea**.

## Duración

Al planificar su proyecto, usted ingresa las duraciones como estimaciones, lo que significa que la duración es una suposición razonable de cuánto tiempo tomará una tarea para todos los recursos involucrados.

No confunda **Duración** con **Trabajo**. Por ejemplo, si tres personas trabajan en su tarea, pero la completan en una hora, usted establece la **Duración** de la tarea en una hora. Si estas tres personas están asignadas a la tarea, Ingantt calcula la propiedad **Trabajo** por usted como tres horas.

La duración se puede cambiar usando el campo **Duración** en el diálogo **Propiedades de la tarea**.

Cuando aún no tiene confianza en su estimación de la duración, puede marcarla como una **Estimación** en el diálogo **Propiedades de la tarea**. Esto hace que la duración siempre muestre un signo de interrogación ("**?**"). Marcar o desmarcar esta opción no afecta la programación.

Si al menos una subtarea de una tarea de resumen tiene la opción **Estimación** marcada, la duración de la tarea de resumen también se marca como **Estimación** y por lo tanto también muestra "**?**".

La duración se puede establecer en Horas, Días, Semanas o Meses. De forma predeterminada, "1 Día" significa 8 horas, "1 Semana" significa 5 días (40 horas) y "1 Mes" significa 20 días. Estos valores predeterminados se pueden cambiar en la pestaña **Duración** del diálogo **Propiedades del proyecto**.

Cuando cambia las asignaciones de recursos, el trabajo o la duración, uno de estos se recalcula según el [Tipo](#tipo-y-basado-en-el-esfuerzo) de la tarea.

## Trabajo

Una vez que una tarea tiene un recurso de trabajo asignado (como una persona que realiza la tarea), la propiedad **Trabajo** de la tarea se vuelve mayor que 0. Muestra el tiempo que todos los recursos dedicarán a trabajar en la tarea. Por ejemplo, si una tarea con una **Duración** de 5 horas tiene 2 recursos asignados trabajando en ella, el **Trabajo** de la tarea es igual a 10 horas.

El trabajo se puede cambiar usando el campo **Trabajo** en el diálogo **Propiedades de la tarea**.

Al igual que la Duración, el Trabajo se puede especificar en Horas, Días, Semanas o Meses usando las definiciones en la pestaña **Duración** del diálogo **Propiedades del proyecto**. El formato de visualización predeterminado para el trabajo se puede cambiar en la pestaña **Tiempo**.

Cuando cambia las asignaciones de recursos, el trabajo o la duración, uno de estos se recalcula según el [Tipo](#tipo-y-basado-en-el-esfuerzo) de la tarea.

## Plazo

A veces necesita asegurarse de que una tarea se complete en un día específico, lo que normalmente se llama un plazo.

El plazo de una tarea se puede especificar usando el campo **Plazo** en el diálogo **Propiedades de la tarea**.

Los plazos son solo para su referencia y no afectan la programación.

Los plazos se muestran en el diagrama de Gantt como iconos especiales.

> Si su cronograma muestra que una tarea termina después de su plazo especificado, Ingantt muestra un icono en la lista de tareas y cuenta dichas tareas en el cajón de navegación.

![Plazo](/images/building-schedule/tasks/deadline.png)

> Puede establecer un plazo para todo el proyecto estableciendo el plazo para la tarea de resumen raíz. Solo asegúrese de que la tarea de resumen raíz esté visible en el diálogo **Opciones**.

## Hito

Cualquier tarea puede marcarse como un hito marcando la casilla **Hito** en el diálogo **Propiedades de la tarea**. Esto no cambia su duración ni afecta la programación, pero la tarea se muestra en el diagrama de Gantt como un icono.

![Hito](/images/building-schedule/tasks/milestone.png)

Si especifica 0 como la **Duración** de una tarea, la tarea se marca automáticamente como un **Hito** una vez que guarda el cambio.

## Tipo y basado en el esfuerzo

Las asignaciones de recursos de trabajo (o unidades de recursos de trabajo asignados), el trabajo y la duración dependen entre sí. Cuando cambia uno de estos, los demás deben recalcularse en consecuencia. El **Tipo** de la tarea (con la ayuda de la opción **Basado en el esfuerzo**) define cuál de las dos propiedades restantes permanece sin cambios, de modo que solo una de ellas se recalcula.

Por ejemplo, puede establecer el **Tipo** en **Unidades fijas** (el valor predeterminado), en cuyo caso cuando cambia la Duración, el Trabajo se recalcula automáticamente.

| Tipo               | Descripción                                             |
|--------------------|---------------------------------------------------------|
| **Unidades fijas**    | Al cambiar la Duración: el Trabajo se recalcula.         |
|                    | Al cambiar el Trabajo: la Duración se recalcula.         |
|                    | Al cambiar las Unidades:                                  |
|                    | - Si **Basado en el esfuerzo** está activado: la Duración se recalcula. |
|                    | - Si **Basado en el esfuerzo** no está activado: el Trabajo se recalcula. |
| **Duración fija** | Al cambiar la Duración: el Trabajo se recalcula.         |
|                    | Al cambiar el Trabajo: las Unidades se recalculan.           |
|                    | Al cambiar las Unidades: el Trabajo se recalcula.            |
| **Trabajo fijo**     | Al cambiar la Duración: las Unidades se recalculan.       |
|                    | Al cambiar el Trabajo: la Duración se recalcula.         |
|                    | Al cambiar las Unidades: la Duración se recalcula.        |

En otras palabras, el **Tipo** le permite congelar una de las tres propiedades, mientras que la opción **Basado en el esfuerzo** define si el Trabajo debe permanecer sin cambios de las dos restantes.

> Los ajustes de **Tipo** y **Basado en el esfuerzo** no están disponibles para [tareas de resumen](/es/building-schedule/tasks/index.md#tareas-de-resumen), que siempre son de Duración fija y no están basadas en el esfuerzo.

## Notas

Puede agregar cualquier texto a su tarea completando el campo **Notas** en la pestaña **Notas** del diálogo **Propiedades de la tarea**. Úselo para descripciones de tareas, información de contacto, ideas o cualquier otro dato de texto.

Si una tarea tiene el campo **Notas** completado, se muestra un icono especial para la tarea en la lista de tareas. En Windows, macOS y Web, al pasar el ratón sobre el icono se muestra la nota. En dispositivos móviles, abra el diálogo **Propiedades de la tarea** para ver la nota completa.

## Hipervínculo

Puede adjuntar una URL a su tarea usando el campo **Hipervínculo** en la pestaña **Notas** del diálogo **Propiedades de la tarea**. Las tareas con un hipervínculo muestran un icono de enlace en la lista de tareas. Al hacer clic en el icono del enlace se abre la URL en su navegador.

## Ocultar barra y Acumulación

En la pestaña **Visual** del diálogo **Propiedades de la tarea**:

- **Ocultar barra** — Oculta la barra de la tarea en el diagrama de Gantt mientras mantiene la fila visible en la lista de tareas. El área de la barra invisible sigue respondiendo a clics y menús contextuales.
- **Acumulación** — Muestra la barra de la subtarea en la fila de su tarea de resumen padre en el diagrama de Gantt. Esto proporciona una vista condensada cuando las tareas de resumen están contraídas.

Estas opciones también se pueden alternar desde el submenú **Editar > Visualización** o el menú contextual de clic derecho.
