# Valor ganado

La Gestión de Valor Ganado (GVG) combina mediciones de alcance, cronograma y costo para evaluar si su proyecto va según lo previsto y dentro del presupuesto. Establezca una fecha de estado y una línea base, e Ingantt calcula las métricas de GVG estándar del sector.

## Fecha de estado

La **Fecha de estado** define la fecha utilizada para el seguimiento del progreso y los cálculos de valor ganado. Cuando se establece, se muestra una línea vertical verde en el diagrama de Gantt en esa fecha.

Cuando la fecha de estado no está establecida, se usa la fecha actual para los cálculos. Puede establecer la fecha de estado en el diálogo **Opciones de Valor Ganado**, accesible desde el menú **Proyecto**.

## Gestión de Valor Ganado

Ingantt admite la Gestión de Valor Ganado — una técnica de gestión de proyectos que integra datos de alcance, cronograma y costo para evaluar el rendimiento del proyecto.

### Configuración del Valor Ganado

1. Cree una [línea base](/es/tracking/baselines/index.md#establecer-una-línea-base) para capturar el cronograma y los costos planificados.
2. Establezca la **Fecha de estado** en el diálogo **Opciones de Valor Ganado** (accesible desde el menú **Proyecto**) o deje que se use la fecha actual de forma predeterminada.
3. Actualice los valores de [% completado](/es/tracking/progress/index.md#-completado) de las tareas a medida que avanza el trabajo.

### Métricas de GVG disponibles

Las siguientes columnas de GVG se pueden agregar a la lista de tareas a través del diálogo **Opciones**:

| Métrica | Descripción |
|--------|-------------|
| **BCWS** | Costo Presupuestado del Trabajo Programado (Valor Planificado) |
| **BCWP** | Costo Presupuestado del Trabajo Realizado (Valor Ganado) |
| **ACWP** | Costo Real del Trabajo Realizado |
| **BAC** | Presupuesto a la Conclusión |
| **EAC** | Estimación a la Conclusión |
| **VAC** | Variación a la Conclusión |
| **SV** | Variación del Cronograma |
| **CV** | Variación del Costo |
| **SPI** | Índice de Rendimiento del Cronograma |
| **CPI** | Índice de Rendimiento del Costo |
| **TCPI** | Índice de Rendimiento del Trabajo por Completar |
| **SV%** | Porcentaje de Variación del Cronograma |
| **CV%** | Porcentaje de Variación del Costo |

### Método de Valor Ganado

Cada tarea puede usar uno de dos métodos para calcular el BCWP (valor ganado):

- **% completado** (predeterminado) — Usa el porcentaje completado de la tarea para calcular el valor ganado.
- **% completado físico** — Usa un valor de porcentaje completado físico registrado por separado. Útil para la medición del progreso basada en entregables.

Establezca el método para tareas individuales en la pestaña **Costo y VG** del diálogo **Propiedades de la tarea**. Cambie el método predeterminado para nuevas tareas en el diálogo **Opciones de Valor Ganado**.

### Línea base de Valor Ganado

Los cálculos de GVG usan una línea base específica. Puede elegir qué línea base (`Línea base 0` a `Línea base 10`) se usa para el valor ganado en el diálogo **Opciones de Valor Ganado**. El valor predeterminado es `Línea base 0`.
