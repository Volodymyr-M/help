# Asignaciones

Controle cómo se asignan los recursos a las tareas — quién trabaja en qué, cuánto de su tiempo y cómo se distribuye el esfuerzo. Ajuste unidades, perfiles de trabajo y horas extra para que coincidan con la forma en que su equipo realmente trabaja.

## Asignaciones de recursos y unidades

Los recursos se pueden asignar a una tarea en la pestaña **Recursos** del diálogo **Propiedades de la tarea**.

Para asignar un recurso, marque la casilla de verificación en la fila con el recurso. Para desasignar un recurso, desmarque la casilla.

Las asignaciones de recursos de trabajo o material tienen **Unidades**, que se muestran en la columna correspondiente. Haga clic en el botón **Editar** para cambiar el valor predeterminado de **Unidades** para la asignación.

De forma predeterminada, los recursos de trabajo se asignan con unidades que coinciden con las [Unidades máximas](/es/building-schedule/resources/index.md#unidades-máximas) del recurso (100% para un recurso a tiempo completo). Esto significa que el recurso dedicará todo su tiempo de calendario disponible a la tarea. Puede cambiar el valor a cualquier número.

De forma predeterminada, los recursos de material se asignan con 1 unidad. Esto significa que se utilizará 1 unidad de ese material al completar la tarea. La unidad representa lo que usted definió para el material (caja, galón, tonelada, etc.). Puede cambiar el valor predeterminado y establecer cualquier número de unidades.

## Perfiles de trabajo

Cuando un recurso de trabajo se asigna a una tarea, el esfuerzo (trabajo) se distribuye a lo largo de la duración de la tarea según un **perfil de trabajo**. De forma predeterminada, el trabajo se distribuye uniformemente (perfil Plano), pero Ingantt admite varios patrones de perfil que cambian cómo se distribuye el esfuerzo a lo largo del tiempo:

| Perfil | Descripción |
|---------|-------------|
| **Plano** | Esfuerzo uniforme durante toda la duración (predeterminado) |
| **Carga posterior** | El esfuerzo aumenta hacia el final de la tarea |
| **Carga inicial** | El esfuerzo es más intenso al principio y disminuye |
| **Doble pico** | Dos picos de intensidad durante la tarea |
| **Pico temprano** | Alcanza el pico temprano, luego disminuye |
| **Pico tardío** | Aumenta hasta un pico cerca del final |
| **Campana** | Curva de campana — alcanza el pico en el medio |
| **Tortuga** | Curva de campana más plana — distribución más suave |

Los perfiles de trabajo afectan cómo se distribuye el trabajo a lo largo de los períodos de tiempo y se preservan al abrir y guardar archivos de proyecto.

## Retraso de asignación

Cada asignación de recurso en una tarea tiene una propiedad de **Retraso** que desplaza cuándo el recurso comienza a trabajar en relación con la fecha de inicio de la tarea. Por ejemplo, si una tarea comienza el lunes y un recurso tiene un retraso de 2 días, ese recurso comienza a trabajar el miércoles.

El retraso se establece en el diálogo **Editar asignación de recurso** y solo se aplica a las asignaciones de recursos de trabajo. Se puede usar para escalonar los tiempos de inicio de los recursos en una tarea.

## Trabajo en horas extra

Para recursos de trabajo, puede designar una parte del trabajo total de una asignación como horas extra. El trabajo en horas extra es un subconjunto del trabajo total, no adicional: **Trabajo = Trabajo regular + Trabajo en horas extra**.

El impacto en los costos de las horas extra se trata en [Configuración de costos](/es/planning-costs/setting-up-costs/index.md#costo-del-recurso-de-trabajo).

Para tareas de Unidades fijas y Trabajo fijo, ingresar trabajo en horas extra reduce la duración de la tarea porque la duración se basa únicamente en el trabajo regular.

Establezca el trabajo en horas extra en el diálogo **Editar asignación de recurso**. Tres columnas opcionales están disponibles en la tabla de tareas: **Trabajo en horas extra**, **Costo de horas extra** y **Trabajo regular**.
