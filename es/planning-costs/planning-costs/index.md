# Comprensión de los costos

Asigne costos a tareas y recursos para ver el precio total de su proyecto. La tarea de resumen raíz muestra el total general — compárelo con los recursos presupuestarios para saber si su proyecto se ajusta al presupuesto aprobado.

## Cómo se calcula el costo de la tarea

El costo de cada tarea es una combinación de su propio costo fijo y los costos de sus recursos asignados. Ingantt calcula el costo total de cada tarea y lo muestra en la columna **Costo** en la lista de tareas.

*El **Costo** de la tarea = el **Costo fijo** de la tarea + costos de los recursos asignados a la tarea*

> Si no ve la columna **Costo** en la lista de tareas, asegúrese de que la opción **Columna de costo** esté marcada en la pestaña **Columnas de tareas** del diálogo **Opciones**.

## Costos de las tareas de resumen

En su campo **Costo**, cada [tarea de resumen](/es/building-schedule/tasks/index.md#tareas-de-resumen) muestra el costo total de todas sus subtareas.

Sin embargo, al igual que una tarea regular, una tarea de resumen puede tener [recursos asignados](/es/building-schedule/assignments/index.md#asignaciones-de-recursos-y-unidades) y un **Costo fijo**. Estos se agregan sobre el costo total de las subtareas, aumentando el **Costo** de la tarea de resumen.

*El **Costo** de la tarea de resumen = costo total de todas las subtareas + el **Costo fijo** de la tarea de resumen + costos de los recursos asignados a la tarea de resumen*

Use la [tarea de resumen raíz](/es/building-schedule/tasks/index.md#tarea-de-resumen-raíz) para ver y gestionar el costo total de todo su proyecto.

## Recursos presupuestarios

Un recurso puede marcarse como recurso **Presupuestario** en el diálogo **Propiedades del recurso**. Los recursos presupuestarios representan montos de presupuesto asignados a nivel general del proyecto y solo pueden asignarse a la [tarea de resumen raíz](/es/building-schedule/tasks/index.md#tarea-de-resumen-raíz).

Los recursos presupuestarios se excluyen de:

- Programación
- Totales de costos
- Detección de sobreasignación
- Nivelación de recursos

Proporcionan seguimiento presupuestario descendente que es independiente de los cálculos de costos ascendentes.

## Moneda

Si su proyecto usa una moneda diferente a la predeterminada de Ingantt, puede cambiarla en la pestaña **Regional** del diálogo **Propiedades del proyecto**. Especifique la moneda como símbolo (por ejemplo, €), abreviatura (EUR) o nombre completo (euro).

En la misma pestaña, también puede especificar la **Posición de la moneda** — antes o después del valor, con o sin espacio.

> Cuando cambia la moneda, los valores de costo no se recalculan.
