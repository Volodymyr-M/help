# Tareas

Todo cronograma comienza con las tareas. Defina qué se debe hacer, cuánto tiempo tomará y cuándo vence. Una vez que sus tareas estén en su lugar, verá la línea de tiempo de su proyecto tomar forma en el diagrama de Gantt.

## Tareas de resumen

Las tareas de resumen le ayudan a organizar sus tareas agrupándolas. Para crear una tarea de resumen, seleccione las tareas que desea agrupar, luego haga clic en el botón **Aumentar sangría** en la barra de herramientas para aplicarles sangría. Para convertir una tarea de resumen de nuevo en una tarea regular, seleccione todas sus subtareas y haga clic en el botón **Disminuir sangría** para eliminar su sangría.

Dado que las tareas de resumen agrupan otras tareas, sus propiedades se derivan de sus subtareas en lugar de establecerse directamente. Su duración representa la duración general de todas las tareas dentro del grupo: la fecha de finalización de una tarea de resumen es la fecha de finalización más tardía entre sus subtareas.

Una tarea de resumen también muestra el porcentaje completado general, el costo total y el trabajo total de sus subtareas.

En el diagrama de Gantt, las tareas de resumen se muestran como barras negras. En la lista de tareas, puede **expandir** o **contraer** las tareas de resumen para mostrar u ocultar sus subtareas.

![Resumen](/images/building-schedule/tasks/summary.png)

## Tarea de resumen raíz

En Ingantt, siempre existe una tarea de resumen para todo su proyecto. Esta tarea es la tarea número 0, por encima de todas sus tareas.

La tarea de resumen raíz podría no ser visible de forma predeterminada. Para cambiar esto, marque **Mostrar tarea de resumen raíz** en el menú **Vista** o en el diálogo **Opciones**.

Al igual que cualquier otra tarea de resumen, la tarea de resumen raíz muestra los datos generales de sus subtareas. Dado que todas las tareas en su cronograma son sus subtareas, la tarea de resumen raíz muestra los datos generales de todo su proyecto.

El nombre de la tarea de resumen raíz es el mismo que el nombre del proyecto.

![Tarea de resumen raíz](/images/building-schedule/tasks/root_summary.png)

## Tareas programadas manualmente

De forma predeterminada, todas las tareas en Ingantt son **autoprogramadas** — sus fechas de inicio y finalización son calculadas por el algoritmo de programación basándose en dependencias, restricciones y calendarios.

Puede cambiar una tarea al modo **Programada manualmente** usando la casilla de verificación en el diálogo **Propiedades de la tarea**. Cuando una tarea está programada manualmente:

- **No es afectada por el algoritmo de programación** — sus fechas las establece usted
- Puede ingresar fechas de **Inicio** y **Fin** usando los campos de fecha o el selector de fechas
- Puede escribir **valores de texto** (como "Por definir", "principios de marzo" o "2-3 semanas") en lugar de fechas reales cuando aún no está seguro del momento
- Se muestra un icono de pin para las tareas programadas manualmente en la lista de tareas

> Use tareas programadas manualmente como marcadores de posición cuando se desconoce el momento exacto, o cuando las fechas están fijadas por factores externos.

## Tareas recurrentes

Las tareas recurrentes representan actividades que se repiten en un horario regular, como reuniones diarias, revisiones semanales o informes mensuales. Puede crear tareas recurrentes a través del menú **Insertar** eligiendo **Agregar tarea recurrente**.

Al crear una tarea recurrente, usted especifica:

- **Duración de la ocurrencia** — La duración de cada ocurrencia individual
- **Patrón de recurrencia** — Patrón diario, semanal, mensual o anual con una fecha de inicio y condición de fin (sin fin, finalizar en fecha, o finalizar después de N ocurrencias)
- **Solo días laborales** — Limita las ocurrencias a días laborales

Las tareas recurrentes aparecen como una tarea de resumen que contiene las ocurrencias individuales. Cada ocurrencia puede completarse de forma independiente. Al eliminar una tarea recurrente, se le solicita elegir si desea eliminar toda la serie o solo la ocurrencia seleccionada.

## Tareas divididas

Una tarea puede dividirse en partes no contiguas, representando interrupciones en el trabajo. Para dividir una tarea, selecciónela y elija **Dividir tarea** de la barra de herramientas o del menú contextual de clic derecho. El diálogo **Dividir tarea** ofrece dos modos:

- **Por duración** — Especifique un desplazamiento de separación desde el inicio de la tarea y una duración de división
- **Por fechas** — Especifique las fechas de detención y reanudación para la división

Las tareas divididas se muestran como barras separadas con conectores de puntos entre las partes en el diagrama de Gantt. Cada parte dividida tiene su propio controlador de redimensionamiento, y arrastrar una parte para que se encuentre con una parte adyacente fusiona las dos. Para eliminar una división, seleccione la tarea y elija **Eliminar división** de la barra de herramientas.

## Tareas inactivas

Una tarea puede marcarse como **inactiva** desmarcando la casilla **Activa** en la pestaña **General** del diálogo **Propiedades de la tarea**, o usando la opción **Desactivar tarea** en el submenú **Editar > Visualización** o en el menú contextual de clic derecho.

Las tareas inactivas:

- Se excluyen de la programación — no afectan la ruta crítica ni otras tareas
- Se excluyen de los acumulados de tareas de resumen para duración, trabajo, costo y % completado
- Se excluyen de la detección de sobreasignación de recursos y la nivelación automática
- Se excluyen de los cálculos de Valor Ganado

Las tareas inactivas permanecen visibles en la lista de tareas y el diagrama de Gantt pero aparecen con opacidad reducida y texto tachado. Sus fechas se conservan como referencia.

Desactivar una tarea de resumen se aplica en cascada a todas sus subtareas. Reactivar una subtarea reactiva automáticamente su tarea de resumen padre si es necesario. Las tareas con progreso real (% completado > 0) no pueden desactivarse.

> Use tareas inactivas para mantener escenarios hipotéticos en su cronograma sin afectar el plan activo.
