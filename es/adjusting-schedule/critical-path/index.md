# Ruta crítica

Estas son las tareas que no puede permitirse retrasar — cualquier demora extiende todo el proyecto. Identifíquelas temprano, vigílelas de cerca, y sabrá exactamente dónde concentrarse para mantener su plazo.

## Tareas críticas

Una vez que pone su plan en acción, algunas tareas terminan antes de lo planificado — y otras no. Algunas tareas pueden tomar más tiempo sin extender la línea de tiempo del proyecto. Estas tareas tienen margen de sobra, conocido como _holgura_.

Otras tareas tienen holgura cero — cualquier retraso desplaza la fecha de finalización del proyecto. Estas se llaman _tareas críticas_. Para mantener su proyecto dentro del cronograma, présteles especial atención al hacer seguimiento del progreso.

Una tarea también es crítica si:
- Tiene una [restricción](/es/building-schedule/constraints/index.md#restricciones) **Debe comenzar el** o **Debe finalizar el**
- Tiene una [restricción](/es/building-schedule/constraints/index.md#restricciones) **Lo más tarde posible** en un proyecto planificado desde la fecha de Inicio
- Su fecha de finalización iguala o excede su [plazo](/es/building-schedule/task-properties/index.md#plazo)
- Tiene **holgura negativa** — un conflicto de programación donde las restricciones fuerzan la tarea antes de lo que sus dependencias permiten

Las tareas que están 100% completas nunca se marcan como críticas, independientemente de otras condiciones.

Ingantt detecta automáticamente las tareas críticas. Si la opción **Resaltar tareas críticas** está habilitada (a través del menú **Vista**, el menú **Gráfico** en la barra de menú, o el diálogo **Opciones**), estas tareas se muestran en rojo.

Las tareas con holgura negativa también muestran un icono de advertencia en la lista de tareas, indicando un conflicto de programación. Esto generalmente ocurre cuando una restricción **No comenzar después del** o **No finalizar después del** entra en conflicto con las dependencias de la tarea.

![Críticas](/images/building-schedule/tasks/critical.png)

## Opciones de la ruta crítica

En la pestaña **Otros** del diálogo **Propiedades del proyecto**, puede configurar cómo se calcula la ruta crítica:

- **Calcular múltiples rutas críticas** — Cuando está habilitado, cada grupo desconectado de tareas vinculadas obtiene su propia ruta crítica. Cuando está deshabilitado (el valor predeterminado), las tareas sin sucesoras derivan su fecha de finalización tardía de la fecha de finalización del proyecto.
- **Límite de holgura crítica** — De forma predeterminada, las tareas con holgura cero o negativa son críticas. Puede aumentar este umbral para que las tareas con holgura de hasta el número especificado de días también se consideren críticas.
