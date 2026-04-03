# Primeros pasos

Comience aquí para crear su primer cronograma de proyecto. En solo unos minutos, tendrá tareas en una línea de tiempo, vinculadas entre sí, con recursos asignados — suficiente para ver cuándo se espera que termine su proyecto.

> En dispositivos móviles, use toques en lugar de clics, doble toque en lugar de doble clic, y pulsación larga en lugar de clic derecho.

## Creación de un cronograma básico

Supongamos que tiene un pequeño proyecto de renovación del hogar con dos tareas, una después de la otra.

Después de hacer clic en **Crear nuevo**, se le presenta una pantalla dividida con la lista de tareas a la izquierda y el diagrama de Gantt a la derecha. Agregue sus tareas una tras otra haciendo clic en el botón grande **+** en la esquina inferior derecha. En el diálogo **Agregar tarea**, especifique el **Nombre** y la **Duración** estimada de cada tarea.

![Agregar tarea](/images/getting-started/add_task.png)

Seleccione ambas tareas en la lista de la izquierda y luego haga clic en el botón **Vincular tareas** de la barra de herramientas. Esto vincula las tareas y actualiza el diagrama de Gantt.

- Para seleccionar múltiples tareas en Android e iOS, mantenga el dedo un poco más tiempo al tocar cada tarea en la lista o el diagrama de Gantt.
- En otras plataformas, haga clic en las tareas en la lista o el diagrama de Gantt mientras mantiene presionado `Ctrl` o `Shift` en el teclado.

![Vincular](/images/getting-started/link.png)

Ahora que las tareas están vinculadas, intente actualizar la duración de la primera tarea. Haga doble clic en ella en la lista o el diagrama de Gantt y edite el campo **Duración** en el diálogo **Propiedades de la tarea**. Verá cómo este cambio afecta el cronograma al desplazar la segunda tarea.

![Gantt](/images/getting-started/gantt.png)

## Establecer el nombre y la fecha de inicio del proyecto

Su proyecto podría comenzar en un día diferente al predeterminado utilizado por Ingantt.

Abra **Propiedades del proyecto** usando el cajón de navegación o, en web y Windows, haciendo clic en el nombre del proyecto en el encabezado.

Establezca la nueva fecha de inicio del proyecto en el campo **Fecha de inicio del proyecto** y cambie el **Nombre** del proyecto mientras está allí.

![Nombre del proyecto](/images/getting-started/project_name.png)

> Con la simplicidad del cronograma básico, ya puede saber cuándo se espera que termine el proyecto mirando el diagrama de Gantt.

## Agregar y asignar recursos

Supongamos que una persona diferente se encargará de cada tarea en su proyecto.

Abra el cajón de navegación y cambie a la vista **Recursos**.

![Nav](/images/getting-started/nav.png)

Haga clic en el botón grande **+** para abrir el diálogo **Agregar recurso**, ingrese un **Nombre** para el recurso y guarde. Repita estos pasos para agregar otro recurso de trabajo.

![Agregar recurso](/images/getting-started/add_resource.png)

![Recursos](/images/getting-started/resources.png)

Usando el cajón de navegación, vuelva a la vista **Tareas**. Haga doble clic en su primera tarea en la lista o el diagrama de Gantt para abrir el diálogo **Propiedades de la tarea**.

Cambie a la pestaña **Recursos**, marque el primer recurso para asignar a esta persona a la tarea y guarde.

![Asignaciones](/images/getting-started/assignments.png)

Repita los mismos pasos para su segunda tarea y el segundo recurso.

![Recursos gantt](/images/getting-started/resources_gantt.png)

## Configuración de vacaciones

Las personas pueden tener diferentes eventos durante el curso de su proyecto que afectan su línea de tiempo.

Supongamos que el recurso que realiza la primera tarea en su proyecto necesita un día libre durante esa tarea.

Para configurar esto, use el cajón de navegación para ir a la vista **Recursos**.

Haga doble clic en el recurso para ver las **Propiedades del recurso**. Vaya a la pestaña **Calendario** y haga clic en el botón **Agregar excepción**. Elija uno de los días durante su proyecto, deje la lista de horarios de trabajo vacía y guarde.

![Día libre](/images/getting-started/day_off.png)

Usando el cajón de navegación, vuelva a **Tareas** y vea cómo ha cambiado su cronograma. La segunda tarea se ha desplazado debido a su dependencia de la primera.

![Vacaciones](/images/getting-started/vacation.png)

> Puede configurar no solo vacaciones sino también otros cambios en el horario de una persona. Por ejemplo, al agregar horario de trabajo a la Excepción, puede especificar que el recurso trabaje solo durante horas específicas en ese día particular.

## Configuración de días festivos

Imagine que hay un día festivo durante su proyecto, un día en el que no se trabaja.

Las vacaciones se configuran a través del calendario de cada recurso. Sin embargo, los días que afectan a todos se configuran en el calendario del proyecto. El calendario predeterminado del proyecto se llama **Estándar** y ya indica que no se trabaja los fines de semana.

Para configurar días festivos, use el cajón de navegación para ir a la vista **Calendarios**. Haga doble clic en **Estándar** para ver las **Propiedades del calendario**. Haga clic en el botón **Agregar excepción**. Elija uno de los días durante su proyecto, deje la lista de horarios de trabajo vacía y guarde.

![Día festivo](/images/getting-started/holiday.png)

Usando el cajón de navegación, vuelva a la vista **Tareas** y vea cómo ha cambiado su proyecto. Las tareas se desplazan, y el día festivo se muestra de manera similar a los fines de semana en el diagrama de Gantt.

![Final](/images/getting-started/final.png)

> Usando el mismo enfoque, puede configurar no solo días festivos sino también otros cambios en el horario de todos. Por ejemplo, al agregar horario de trabajo a la Excepción, puede especificar que todos trabajen solo durante horas específicas en ese día particular.
>
> También puede revisar las pestañas que representan cada día de la semana en **Propiedades del calendario**. Si todo su equipo sale más temprano los viernes o trabaja los sábados, puede configurar esto en las pestañas correspondientes.
