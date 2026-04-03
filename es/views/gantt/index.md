# Diagrama de Gantt

El diagrama de Gantt es la línea de tiempo de su proyecto. Vea los ajustes de nivelación, las líneas de progreso y cómo el cronograma ha cambiado desde que estableció la línea base.

## Vistas disponibles

Ingantt proporciona múltiples vistas para trabajar con su proyecto, accesibles desde el cajón de navegación o el menú **Vista**. Todas las vistas son completamente funcionales — realice cualquier acción disponible para tareas en cualquier vista.

**Vistas de tareas:**

- **Tareas** — lista de tareas y diagrama de Gantt
- **Gantt de seguimiento**
- **[Tablero de tareas](/es/views/task-views/index.md#tablero-de-tareas)**
- **[Diagrama de red](/es/views/task-views/index.md#diagrama-de-red)**
- **[Vista de calendario](/es/views/task-views/index.md#vista-de-calendario)**
- **[Línea de tiempo](/es/views/task-views/index.md#línea-de-tiempo)**

**Vistas de recursos:**

- **[Uso de recursos](/es/views/resource-views/index.md#uso-de-recursos)**
- **[Uso de tareas](/es/views/resource-views/index.md#uso-de-tareas)**
- **[Planificador de equipo](/es/views/resource-views/index.md#planificador-de-equipo)**
- **[Gráfico de recursos](/es/views/resource-views/index.md#gráfico-de-recursos)**

## Vista de tareas

La vista de **Tareas** es la vista principal que combina una lista de tareas y el diagrama de Gantt (vista dividida). Puede configurar qué paneles mostrar a través del submenú **Vista > Paneles en Tareas**: la Lista de tareas y el Diagrama de Gantt se pueden alternar independientemente.

## Inspector de tareas

El **Inspector de tareas** es un panel lateral que muestra los detalles de la tarea seleccionada, incluyendo factores de programación (qué determina las fechas de la tarea), propiedades generales, recursos, predecesoras, costo y más. Alterne el Inspector de tareas desde la barra de herramientas.

La sección **Factores de programación** en la parte superior del Inspector muestra qué está determinando las fechas programadas de la tarea: predecesoras determinantes (mostradas en negrita con una insignia "Determinante"), predecesoras no determinantes (con su holgura relativa), restricciones, retrasos de nivelación, calendarios y valores de holgura. Las tareas críticas muestran una insignia "Crítica".

## Gantt de nivelación

Cuando se ha aplicado la [nivelación automática](/es/adjusting-schedule/leveling/index.md#nivelación-automática) a su proyecto, aparece un botón de alternancia **Gantt de nivelación** en el área del diagrama de Gantt.

Cuando está habilitado, el diagrama de Gantt muestra **barras verdes** en la posición previa a la nivelación de cada tarea (donde estaba la tarea antes de la nivelación automática). Las barras de tareas estándar permanecen en sus posiciones niveladas actuales. Esto le permite comparar visualmente el cronograma original con el cronograma nivelado y ver cuánto se retrasó cada tarea.

Cuando el botón está desactivado, solo se muestran las barras de tareas estándar.

> El botón de alternancia Gantt de nivelación solo es visible cuando existen datos de nivelación. Se oculta automáticamente cuando borra la nivelación. Si abre un archivo de proyecto que ya contiene datos de nivelación, el botón está disponible pero comienza en la posición desactivada.

## Líneas de progreso

Cuando están habilitadas, el diagrama de Gantt muestra una **línea de progreso** — una línea en zigzag que indica visualmente si las tareas están atrasadas o adelantadas respecto a la fecha de estado. Las tareas atrasadas hacen que la línea se desplace hacia la izquierda; las tareas adelantadas la desplazan hacia la derecha; las tareas en tiempo mantienen la línea recta.

Alterne las líneas de progreso desde el botón de la barra de herramientas flotante en el diagrama de Gantt o el menú **Vista**. La línea de progreso también se incluye en la salida PDF/impresión cuando está habilitada.
