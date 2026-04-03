# Seguimiento del progreso

Una vez que el trabajo comienza, actualice el **% completado** en cada tarea para rastrear cómo el progreso real se compara con el plan. Use **Actualizar proyecto** para establecer el progreso en masa. A medida que se registra el progreso, Ingantt calcula automáticamente los [valores reales](/es/tracking/actuals/index.md) — valores reales y restantes de duración, trabajo, costo y fechas.

## % completado

Una vez que su proyecto está en marcha, necesita hacer seguimiento de su progreso. Si mantiene el **% completado** actualizado para cada tarea, puede ver el **% completado** general del proyecto en su tarea de resumen raíz.

Use el campo **% completado** en el diálogo **Propiedades de la tarea** para establecer el % completado de una tarea particular. Las tareas que están 100% completas muestran un icono de marca de verificación verde en la lista de tareas.

Cuando actualiza el % completado:

- Establecerlo por encima del 0% establece el **Inicio real** de la tarea en la fecha de inicio programada de la tarea.
- Establecerlo al 100% establece el **Fin real** de la tarea en la fecha de finalización programada de la tarea.
- La **Duración real** y la **Duración restante** se calculan automáticamente basándose en el porcentaje completado.
- Si **Actualizar el estado de la tarea actualiza el estado del recurso** está habilitado en la configuración del proyecto (el valor predeterminado), el **Trabajo real** y el **Trabajo restante** también se actualizan proporcionalmente.

El **% completado** de una tarea de resumen se calcula como un promedio ponderado por duración de todas sus tareas descendientes que no son de resumen.

> También puede hacer seguimiento del progreso usando el comando [Actualizar proyecto](#actualizar-proyecto) para establecer el % completado de múltiples tareas a la vez basándose en una fecha de corte.

## Actualizar proyecto

El comando **Actualizar proyecto** proporciona operaciones de seguimiento de progreso en masa, accesible desde el menú **Proyecto**.

### Actualizar trabajo como completado

Marque tareas como completadas hasta una fecha especificada:

- **Proporcional (0%–100%)** — Calcula el porcentaje completado basándose en cuánto de la duración laborable de cada tarea cae antes de la fecha de corte.
- **Todo o nada (0% o 100%)** — Establece las tareas en 0% o 100% según si terminan antes de la fecha de corte.

### Reprogramar trabajo no completado

Empuja el trabajo no completado para que comience después de una fecha especificada:

- Las tareas que no han comenzado reciben una restricción **No comenzar antes del**.
- Las tareas en progreso se dividen si **Dividir tareas en progreso** está habilitado en las opciones de programación del proyecto.
- Las tareas completadas no se modifican.
