# Vistas de recursos

Vea la distribución de la carga de trabajo en su equipo. Las vistas de uso muestran quién hace qué y cuándo, el Planificador de equipo le permite arrastrar para reasignar, y el Gráfico de recursos revela la capacidad de un vistazo.

## Uso de recursos

La vista **Uso de recursos** le permite ver todas las asignaciones de recursos y la cantidad de [Trabajo](/es/building-schedule/tasks/index.md#work) que cada recurso de trabajo realiza durante cada período en la línea de tiempo.

Similar al diagrama de Gantt, puede acercar o alejar la línea de tiempo para ver una vista más o menos detallada.

Si un recurso tiene que realizar más trabajo del que los calendarios permiten para el período de tiempo dado, el **Trabajo** correspondiente se resalta en rojo.

En la vista de Uso de recursos, puede hacer doble clic en las celdas de trabajo a nivel de asignación para editar la distribución del trabajo directamente. Cuando edita una celda de trabajo, el perfil de trabajo de la asignación cambia automáticamente a "Con perfil" y los datos de trabajo personalizados por día se guardan.

## Uso de tareas

La vista **Uso de tareas** es la inversa de Uso de recursos — muestra una vista centrada en la tarea de la distribución del trabajo. Cada tarea aparece como una fila de nivel superior con sus asignaciones de recursos indentadas debajo.

El panel izquierdo muestra los detalles de la tarea y la asignación, mientras que el panel derecho muestra los valores de trabajo distribuidos a lo largo de los períodos de tiempo. Los valores de trabajo a nivel de tarea se muestran en negrita. Los valores de trabajo de asignación sobreasignados se resaltan en rojo.

## Planificador de equipo

La vista **Planificador de equipo** es una vista de programación centrada en recursos donde cada fila representa un recurso de trabajo. Las barras de tareas se posicionan en la fila de cada recurso a lo largo de una escala de tiempo compartida.

Características principales:

- **Arrastrar horizontalmente** para reprogramar una tarea — la tarea recibe una restricción No comenzar antes del en la nueva posición
- **Arrastrar verticalmente** para reasignar una tarea a un recurso diferente
- **Arrastrar diagonalmente** para reprogramar y reasignar en una operación
- Arrastrar hacia o desde la sección **Tareas no asignadas** para agregar o eliminar asignaciones de recursos
- Los recursos sobreasignados se muestran con texto rojo en el panel izquierdo
- Las tareas que están 100% completas no se pueden arrastrar

## Gráfico de recursos

La vista **Gráfico de recursos** muestra un histograma por recurso de la asignación de carga de trabajo a lo largo del tiempo. Muestra un recurso de trabajo a la vez con barras verticales para cada período de tiempo. Navegue entre recursos usando los botones de flecha en el panel izquierdo.

Hay siete tipos de gráficos disponibles:

| Tipo de gráfico | Descripción |
|------------|-------------|
| **Unidades pico** | Porcentaje de capacidad del recurso utilizado por período (predeterminado) |
| **Trabajo** | Horas de trabajo por período |
| **Sobreasignación** | Solo las horas excedentes más allá de la capacidad |
| **Porcentaje de asignación** | Igual que Unidades pico con visualización de porcentaje |
| **Disponibilidad restante** | Capacidad no utilizada en horas |
| **Disponibilidad de trabajo** | Capacidad total del calendario en horas |
| **Disponibilidad de unidades** | Porcentaje de unidades máximas efectivas |

Las barras azules representan trabajo dentro de la capacidad; las barras rojas representan la porción sobreasignada que excede la capacidad.
