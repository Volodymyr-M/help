# Nivelación de recursos

Es fácil asignar accidentalmente más trabajo del que una persona puede manejar en un día. La nivelación desplaza automáticamente las tareas para que nadie esté sobrecargado, aunque puede extender la fecha de finalización de su proyecto.

## Recursos sobreasignados

Un recurso de trabajo puede estar **sobreasignado**, lo que significa que tiene más trabajo asignado del que puede completar según su calendario y disponibilidad. Por ejemplo, si su proyecto tiene dos tareas, cada una con una duración de un día y sin [dependencia](/es/building-schedule/dependencies/index.md#predecesoras-y-dependencias) entre ellas, ambas asignadas al mismo recurso de trabajo, el recurso está sobreasignado. El recurso tiene que hacer dos días de trabajo en un día calendario. Para resolver esto, simplemente vincule las dos tareas con una dependencia.

Si una tarea tiene recursos sobreasignados asignados, Ingantt muestra un icono especial para ella en la lista de tareas.

Si un recurso está sobreasignado, Ingantt muestra un icono especial para él en la vista **Recursos** y la vista **Uso de recursos**.

Además, Ingantt cuenta dichas tareas y recursos y muestra los números en el cajón de navegación.

## Nivelación automática

Las dependencias entre tareas controlan su posición en la línea de tiempo. En proyectos más grandes, es fácil omitir una dependencia — resultando en múltiples tareas asignadas al mismo recurso de trabajo programadas al mismo tiempo. El recurso queda sobreasignado, e Ingantt le notifica con iconos especiales en las listas de tareas y recursos.

Puede resolver la sobreasignación manualmente estableciendo dependencias o restricciones para mover algunas tareas de modo que el trabajo no se realice simultáneamente.

Una forma alternativa de resolver la sobreasignación es la nivelación automática. Si elige **Nivelar recursos automáticamente** en el menú **Proyecto**, Ingantt desplaza automáticamente algunas tareas más adelante en la línea de tiempo para evitar la sobreasignación de recursos. Puede eliminar estos ajustes automáticos eligiendo **Borrar nivelación** en el menú **Proyecto**.

El comando de nivelación automática ofrece tres opciones de alcance:

- **Todas las tareas** — Nivela todas las tareas del proyecto
- **Tareas seleccionadas** — Nivela solo las tareas actualmente seleccionadas
- **Recursos seleccionados** — Nivela solo los conflictos de sobreasignación de los recursos seleccionados (disponible en las vistas de Recursos y Uso de recursos)

### Cómo funciona la nivelación automática

Cuando ejecuta **Nivelar recursos automáticamente**, Ingantt resuelve las sobreasignaciones **retrasando o dividiendo tareas**. No reasigna recursos ni cambia las unidades de asignación.

El algoritmo identifica los días en que un recurso tiene más trabajo asignado del que su capacidad permite, luego decide qué tareas en conflicto retrasar. Cada tarea se puntúa según varios factores — las tareas con puntuaciones más altas están protegidas del retraso:

| Factor | Efecto |
|--------|--------|
| **Dependencias** | Las tareas que son predecesoras de otras tareas están protegidas |
| **Holgura** | Las tareas críticas o casi críticas (menos holgura) están protegidas |
| **Prioridad** | Las tareas con un valor de Prioridad más alto están protegidas |
| **Restricciones** | Las tareas con restricciones de programación están protegidas |
| **Fecha de inicio** | Las tareas más tempranas están algo protegidas |
| **Duración** | Las tareas más largas están algo protegidas |

La tarea con la puntuación más baja se retrasa para resolver cada conflicto. El proceso se repite hasta que todas las sobreasignaciones se resuelven o no se pueden aplicar más retrasos.

> La nivelación automática puede extender la fecha de finalización del proyecto. Resuelve tantas sobreasignaciones como sea posible, pero algunas pueden permanecer si las restricciones impiden más retrasos.

### Opciones de nivelación

Configure el comportamiento de la nivelación en el diálogo **Opciones de nivelación**, accesible desde el menú **Proyecto**:

- **Orden de nivelación** — Controla cómo se priorizan las tareas: Solo ID (ID ascendente), Estándar (puntuación multifactorial), o Estándar con prioridad (prioridad primero, luego factores estándar; el predeterminado)
- **Base de sobreasignación** — Controla la granularidad de detección: minuto, hora, día, semana o mes. Las configuraciones de minuto y hora detectan conflictos incluso cuando los totales diarios están dentro de la capacidad pero las tareas se superponen dentro de un día.
- **Ajustar asignaciones individuales** — Cuando está habilitado y una tarea tiene múltiples asignaciones de recursos, solo la asignación del recurso sobreasignado se retrasa en lugar de toda la tarea
- **Crear divisiones en el trabajo restante** — Cuando está habilitado, el algoritmo de nivelación puede dividir el trabajo alrededor de los conflictos en lugar de retrasar tareas completas
- **Nivelar solo dentro de la holgura disponible** — Restringe los retrasos de nivelación para no exceder la holgura total de una tarea, evitando la extensión de la fecha de finalización del proyecto
- **Rango de nivelación** — Restringe la nivelación a tareas dentro de una ventana de fechas específica

### Exento de nivelación

Las siguientes tareas y recursos nunca son afectados por la nivelación automática:

- Tareas con [Prioridad](#prioridad) establecida en **1000**
- Tareas con **Se puede nivelar** establecido en **falso** (en la pestaña **Nivelación** del diálogo Propiedades de la tarea)
- Tareas con una [restricción](/es/building-schedule/constraints/index.md#restricciones) **Debe comenzar el** o **Debe finalizar el**
- [Tareas de resumen](/es/building-schedule/tasks/index.md#tareas-de-resumen)
- Hitos con duración cero
- Tareas completamente terminadas (100%)
- Recursos con **Se puede nivelar** establecido en **falso** en el diálogo Propiedades del recurso
- Recursos con [tipo de reserva](/es/building-schedule/resources/index.md#tipo-de-reserva) **Propuesto** (a menos que la opción de nivelación para incluir recursos propuestos esté habilitada)

### Re-nivelación y borrado

Cada vez que ejecuta **Nivelar recursos automáticamente**, cualquier nivelación anterior se borra automáticamente primero. La nivelación siempre comienza desde un cronograma limpio y sin nivelar para evitar que los retrasos se acumulen.

Si modifica el cronograma después de la nivelación (agrega tareas, cambia dependencias, etc.), los retrasos de nivelación existentes se preservan pero pueden ya no resolver todas las sobreasignaciones. Ejecute **Nivelar recursos automáticamente** de nuevo para re-nivelar el cronograma actualizado.

Para eliminar todos los retrasos de nivelación y volver al cronograma original calculado por CPM, elija **Borrar nivelación** del menú **Proyecto**.

### Gantt de nivelación

Después de ejecutar la nivelación automática, aparece un botón de alternancia **Gantt de nivelación** en el área del diagrama de Gantt. Cuando está habilitado, dibuja barras verdes en las posiciones previas a la nivelación — donde estaban las tareas antes de la nivelación — mientras que las barras de tareas estándar permanecen en sus posiciones niveladas actuales. Esto le permite comparar el cronograma original con el cronograma nivelado para ver cuánto se retrasó cada tarea.

El botón de alternancia solo es visible cuando el proyecto tiene datos de nivelación y se oculta automáticamente cuando borra la nivelación.

## Prioridad

El campo **Prioridad** está disponible en la pestaña **Nivelación** del diálogo **Propiedades de la tarea**. Acepta un valor entero de 0 a 1000, con un valor predeterminado de 500.

La Prioridad es utilizada por el algoritmo de [nivelación automática](#nivelación-automática) para decidir qué tareas retrasar al resolver sobreasignaciones de recursos. Las tareas con una prioridad más alta tienen menos probabilidad de ser retrasadas:

- **0** — Prioridad más baja, más probable de ser retrasada
- **500** — Prioridad predeterminada
- **1000** — "No nivelar" — la tarea nunca es retrasada por la nivelación automática

> Establezca la Prioridad en **1000** para tareas que nunca deben ser movidas por la nivelación automática, como tareas vinculadas a plazos externos o compromisos fijos.
