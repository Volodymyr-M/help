# Valores reales

A medida que el trabajo avanza y usted actualiza el [% completado](/es/tracking/progress/index.md#-completado), Ingantt calcula automáticamente los valores reales y restantes de duración, trabajo, costo y fechas. Estos campos le permiten ver exactamente qué se ha gastado, qué queda y cómo el proyecto se compara con el plan.

Las columnas de valores reales y restantes más comunes son **Costo real** / **Costo restante**, **Trabajo real** / **Trabajo restante** y **Duración real** / **Duración restante**. Al observar estos valores en la [tarea de resumen raíz](/es/building-schedule/tasks/index.md#tarea-de-resumen-raíz), puede ver los totales de todo el proyecto de un vistazo — cuánto se ha gastado, cuánto esfuerzo se ha invertido y cuánto queda por hacer. Asegúrese de que la tarea de resumen raíz sea visible: marque **Mostrar tarea de resumen raíz** en el menú **Vista** o en el diálogo **Opciones**.

## Mostrar columnas de valores reales y restantes

Las columnas de valores reales y restantes no son visibles de forma predeterminada. Para agregarlas a la lista de tareas, abra el diálogo **Opciones** (pestaña **Columnas de tareas**) y habilite las columnas que necesite. También puede hacer clic derecho en el encabezado de una columna en la cuadrícula de tareas para acceder rápidamente a la configuración de columnas.

### Duración

- **Duración real** — La cantidad de tiempo de trabajo dedicado a una tarea hasta el momento. Se calcula como la duración de la tarea multiplicada por su % completado.
- **Duración restante** — El tiempo de trabajo aún necesario para terminar la tarea: Duración − Duración real.

Por ejemplo, una tarea de 10 días al 40% completado tiene una Duración real de 4 días y una Duración restante de 6 días.

### Trabajo

- **Trabajo real** — El esfuerzo total (en horas) que los recursos han dedicado a una tarea. Cuando **Actualizar el estado de la tarea actualiza el estado del recurso** está habilitado en la configuración del proyecto (el valor predeterminado), el Trabajo real se actualiza proporcionalmente cuando cambia el % completado.
- **Trabajo restante** — El esfuerzo aún requerido para completar la tarea: Trabajo − Trabajo real.

### Costo

- **Costo real** — Los costos incurridos hasta el momento: la suma de los costos fijos acumulados y los costos de recursos acumulados. Cómo se acumulan los costos depende de la configuración de **Acumulación de costos** de cada recurso:
  - **Inicio** — Todo el costo se reconoce cuando se establece el Inicio real.
  - **Prorrateado** — El costo se reconoce proporcionalmente según el progreso del trabajo real.
  - **Fin** — El costo se reconoce solo cuando la tarea alcanza el 100% completado.
- **Costo restante** — El presupuesto aún necesario para terminar la tarea: Costo total − Costo real.

### Fechas

- **Inicio real** — La fecha en que el trabajo realmente comenzó. Se establece automáticamente en la fecha de inicio programada de la tarea cuando el % completado supera el 0%.
- **Fin real** — La fecha en que el trabajo realmente se completó. Se establece automáticamente en la fecha de finalización programada de la tarea cuando el % completado alcanza el 100%.

### Horas extra

- **Trabajo real en horas extra** — Horas extra ya trabajadas en la tarea.
- **Trabajo restante en horas extra** — Horas extra aún esperadas.
- **Costo real de horas extra** — Costos de horas extra ya incurridos.
- **Costo restante de horas extra** — Costos de horas extra aún esperados.

## Cómo se calculan los valores reales

Todos los campos de valores reales y restantes mantienen la relación:

> **Total = Real + Restante**

Cuando cambia un valor, Ingantt actualiza los demás para mantenerlos consistentes. El flujo de trabajo más común es actualizar el **% completado**, que se propaga automáticamente a todos los campos de valores reales y restantes:

1. La **Duración real** y la **Duración restante** se recalculan a partir del nuevo porcentaje.
2. El **Trabajo real** y el **Trabajo restante** se actualizan (si la configuración del proyecto está habilitada).
3. El **Inicio real** y el **Fin real** se establecen según el progreso.
4. El **Costo real** y el **Costo restante** se recalculan según el método de acumulación.

Para las tareas de resumen, el **Trabajo real**, el **Trabajo restante**, el **Costo real** y el **Costo restante** se acumulan (suman) de todas las tareas hijas. El **Inicio real** es el inicio real más temprano entre los hijos, y el **Fin real** es el fin real más tardío.

## Columnas de tareas

Más allá de los valores reales y restantes, Ingantt admite una amplia gama de columnas de tareas — datos de programación, información de la ruta crítica, costo, trabajo, métricas de valor ganado, líneas base, campos personalizados y códigos de esquema. Todas las columnas se pueden activar o desactivar y reorganizar usando el diálogo **Opciones** (pestaña **Columnas de tareas**). También puede hacer clic derecho en el encabezado de una columna en la cuadrícula de tareas para acceder rápidamente a la configuración de columnas.
