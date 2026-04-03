# Restricciones

Algunas tareas deben comenzar o terminar en fechas específicas — una entrega llega el martes, un permiso vence el viernes. Las restricciones le permiten fijar fechas donde sea necesario mientras mantiene el resto del cronograma flexible.

## Cómo funcionan las restricciones

Junto con las dependencias de tareas (vínculos de predecesoras), la restricción de una tarea define cómo se programa la tarea.

Las restricciones se establecen en la pestaña **Avanzado** del diálogo **Propiedades de la tarea**. La restricción predeterminada es **Lo antes posible**. Esto significa que la tarea se establece lo más cerca posible de la fecha de inicio del proyecto respetando las dependencias con otras tareas. En proyectos planificados desde la fecha de Fin, el valor predeterminado es **Lo más tarde posible**.

Hay dos restricciones que obligan a la tarea a comenzar o terminar en la fecha especificada independientemente de las dependencias. Estas restricciones se llaman _restricciones inflexibles_ y son **Debe comenzar el** y **Debe finalizar el**. Use estas restricciones solo si está seguro de que son necesarias.

Otras restricciones (**No comenzar antes del**, **No comenzar después del**, **No finalizar antes del** y **No finalizar después del**) se llaman _flexibles_, ya que respetan las dependencias de las tareas. Si las dependencias empujan la tarea más allá de la fecha de la restricción, la fecha determinada por la dependencia tiene prioridad.

| Restricción                 | Descripción                                                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **Lo antes posible**    | La tarea se programa tan pronto como las predecesoras lo permitan. Si no hay predecesoras vinculadas, la tarea comienza al inicio de la tarea de resumen padre. |
| **Lo más tarde posible**    | La tarea se programa lo más tarde que las predecesoras permitan. Si no hay predecesoras vinculadas, la tarea termina al final de la tarea de resumen padre.    |
| **No comenzar antes del**  | Si la tarea comienza después de la fecha especificada debido a las predecesoras, nada cambia. De lo contrario, la tarea se programa para comenzar en la fecha especificada. |
| **No comenzar después del**    | Si las predecesoras empujan la tarea más allá de la fecha de la restricción, la fecha determinada por la dependencia tiene prioridad. De lo contrario, la tarea se programa para comenzar antes de la fecha especificada. |
| **No finalizar antes del** | Si la tarea termina después de la fecha especificada debido a las predecesoras, nada cambia. De lo contrario, la tarea se programa para terminar en la fecha especificada.|
| **No finalizar después del**   | Si las predecesoras empujan la tarea más allá de la fecha de la restricción, la fecha determinada por la dependencia tiene prioridad. De lo contrario, la tarea se programa para terminar antes de la fecha especificada. |
| **Debe comenzar el**          | La fecha de inicio de la tarea se programa exactamente como se especifica, independientemente de las predecesoras.                                                   |
| **Debe finalizar el**         | La fecha de finalización de la tarea se programa exactamente como se especifica, independientemente de las predecesoras.                                                  |

Las tareas con una restricción flexible o inflexible muestran un icono especial en la lista de tareas.

> Mantenga la mayoría de las tareas configuradas en **Lo antes posible** y use restricciones flexibles solo para tareas que deben comenzar o terminar cerca de una fecha específica.
