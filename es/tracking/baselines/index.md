# Líneas base

Guarde una instantánea de su cronograma antes de que comience el trabajo, luego compárela con el estado actual para ver dónde se ha desviado el proyecto.

Una línea base captura la fecha de inicio, la fecha de finalización, la duración, el trabajo y el costo de cada tarea en un momento dado.

## Establecer una línea base

Establezca una línea base desde el menú **Proyecto** usando el submenú **Establecer línea base**:

- Puede establecer una línea base para todas las tareas o solo para las tareas seleccionadas.
- Ingantt admite hasta 11 líneas base.

## Ver líneas base

Una vez que se ha guardado una línea base, puede verla en el diagrama de Gantt alternando la visibilidad de la línea base en el diálogo **Líneas base**. Las barras de línea base aparecen como barras más delgadas debajo de las barras de tareas actuales, usando un color distinto por número de línea base.

Para gestionar las líneas base, use el elemento **Líneas base** en el menú **Proyecto**. El diálogo **Líneas base** le permite:

- Ver todas las líneas base guardadas
- Eliminar líneas base que ya no necesita
- Designar qué línea base se usa para los cálculos de [valor ganado](/es/tracking/earned-value/index.md#gestión-de-valor-ganado)

## Columnas de línea base y variación

Puede agregar columnas de línea base y de variación a la lista de tareas a través del diálogo **Opciones**. Hay **55 columnas de línea base** y **5 columnas de variación** en total.

### Las 55 columnas de línea base

Ingantt almacena **11 líneas base**: la **Línea base** sin número, más **Línea base 1** a **Línea base 10**. Cada una expone las mismas cinco columnas de tarea:

- Inicio de línea base
- Fin de línea base
- Duración de línea base
- Trabajo de línea base
- Costo de línea base

11 líneas base × 5 campos = **55 columnas de línea base**, todas disponibles desde el selector de columnas de la tabla de tareas. El conjunto sin número se nombra simplemente (*Inicio de línea base*); los numerados llevan su número (*Inicio de línea base 3*).

### Las 5 columnas de variación

Las columnas de variación se calculan — cronograma actual menos línea base — y son cinco:

- Variación de inicio
- Variación de fin
- Variación de duración
- Variación de trabajo
- Variación de costo

Hay un solo conjunto de cinco, no un conjunto por línea base. Comparan el cronograma actual con **una** línea base — la que esté seleccionada como [línea base de valor ganado](/es/tracking/earned-value/index.md#línea-base-de-valor-ganado) en **Proyecto → Opciones de valor acumulado**, que de forma predeterminada es la Línea base sin número. Cambie esa configuración y todas las columnas de variación se recalculan respecto a la línea base que eligió. Una tarea cuya línea base elegida nunca se estableció muestra una variación vacía en lugar de un cero.

## Dónde se almacenan las líneas base

Las líneas base se almacenan **dentro del archivo de proyecto**, no en un archivo aparte. Al guardar el proyecto se guardan sus líneas base.

Si intenta establecer una duodécima línea base, Ingantt le indica *Todas las líneas base están en uso. Primero elimine una en el diálogo de líneas base.* Abra **Proyecto → Líneas base** y borre una.

Las líneas base no son lo mismo que el [historial de versiones](/es/ui/version-history/index.md), que registra el archivo en sí a lo largo del tiempo. Use el historial de versiones para volver a un plan anterior; use las líneas base para medir cuánto se ha desviado el plan actual.

## Planes provisionales

Los planes provisionales almacenan instantáneas ligeras del cronograma (solo fechas de **Inicio** y **Fin**) para una comparación rápida sin la carga de las líneas base completas. Ingantt admite hasta 10 planes provisionales (`Plan provisional 1` a `Plan provisional 10`).

Establezca y borre planes provisionales desde el elemento **Planes intermedios** en el menú **Proyecto**. Puede mostrar las fechas de los planes provisionales como columnas en la lista de tareas.
