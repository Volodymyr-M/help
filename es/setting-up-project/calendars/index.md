# Calendarios

Días festivos, vacaciones, medios días, turnos nocturnos — su cronograma necesita reflejar cuándo realmente se trabaja. Configure calendarios para que Ingantt omita el tiempo no laborable y le dé fechas realistas.

Los calendarios definen los días y horarios en los que se puede realizar el trabajo. Los calendarios usan dos tipos de datos:

- **Días de la semana**: Horario de trabajo establecido para cada día de la semana — definiendo el horario típico y rutinario.
- **Excepciones**: Fechas en las que no se trabaja o se trabaja en horarios diferentes a los que define el horario semanal.

## Calendario del proyecto

Un proyecto tiene un **Calendario** asociado según se especifica en el diálogo **Propiedades del proyecto**. Este calendario define cómo se programan las tareas que no están asignadas a recursos de trabajo. Los días libres como los fines de semana también se muestran en el diagrama de Gantt basándose en este calendario.

## Calendario de recursos

Cada [recurso de trabajo](/es/building-schedule/resources/index.md#tipo-de-recurso) tiene un calendario asociado según se especifica en el campo **Calendario base** del diálogo **Propiedades del recurso**. Una vez que el recurso de trabajo es [asignado](/es/building-schedule/assignments/index.md#asignaciones-de-recursos-y-unidades) a una tarea, su calendario afecta la programación de la tarea.

Cuando múltiples recursos de trabajo están asignados a una tarea, sus calendarios se **intersecan** — lo que significa que el trabajo solo se programa durante los horarios en que **todos** los recursos asignados están disponibles. Por ejemplo, si el Recurso A trabaja de lunes a miércoles y el Recurso B trabaja de miércoles a viernes, una tarea asignada a ambos solo se programará los miércoles.

> Si múltiples recursos comparten un horario de trabajo similar, cree un solo calendario y asígnelo a todos. Aún puede especificar excepciones para cada recurso por separado en **Propiedades del recurso** — por ejemplo, vacaciones o períodos de trabajo ajustados en fechas específicas.

## Calendario de tareas

Cada tarea tiene una propiedad **Calendario** en el diálogo **Propiedades de la tarea**, establecida en **NINGUNO** de forma predeterminada. Cuando se establece en **NINGUNO**:

- Si una tarea no está asignada a ningún recurso de trabajo, la tarea se programa según el calendario del proyecto.
- Si una tarea está asignada a recursos de trabajo, la tarea se programa según sus calendarios.

Si la propiedad **Calendario** de la tarea se establece en un calendario en lugar de **NINGUNO**:

- Si una tarea no está asignada a ningún recurso de trabajo, la tarea se programa según el calendario especificado.
- Si una tarea está asignada a recursos de trabajo, la tarea se programa según la **intersección** del calendario de la tarea y los calendarios de los recursos — el trabajo solo se programa durante los horarios que son laborables tanto en el calendario de la tarea como en todos los calendarios de recursos. Para usar solo el calendario de la tarea, ignorando completamente los calendarios de recursos, marque la opción **Ignorar calendarios de recursos**.

## Calendarios predefinidos

Ingantt tiene 3 calendarios predefinidos, uno de los cuales (**Estándar**) se asigna al proyecto de forma predeterminada.

| Calendario | Descripción                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| **Estándar**     | Se trabaja de lunes a viernes, de 8 AM a 5 PM con un descanso de 1 hora (12 PM a 1 PM).       |
| **Turno nocturno**  | Se trabaja de la noche del lunes a la mañana del sábado, de 11 PM a 8 AM con un descanso de 1 hora (3 AM a 4 AM). |
| **24 Horas**     | Se trabaja las 24 horas del día, todos los días.                                                         |

Puede editar cualquiera de los calendarios predefinidos usando el diálogo **Propiedades del calendario** o crear sus propios calendarios basados en ellos usando el diálogo **Agregar calendario**.

## Semanas laborales

Las semanas laborales le permiten definir cambios específicos por rango de fechas en el horario semanal. Por ejemplo, podría tener un período en el que todos trabajan jornadas de 4 horas en lugar de las 8 estándar, o un período en el que el sábado se convierte en día laborable.

Las semanas laborales se configuran en la pestaña **Semanas laborales** del diálogo **Propiedades del calendario**. Cada semana laboral tiene un nombre, una fecha de inicio y fin, y definiciones de horario de trabajo por día de la semana.

> Las excepciones del calendario tienen prioridad sobre las semanas laborales, que a su vez tienen prioridad sobre el horario predeterminado de los días de la semana.

## Excepciones del calendario

Las excepciones del calendario son fechas en las que el trabajo difiere del horario regular semanal — incluyendo los días libres.

Las excepciones del calendario se pueden especificar:

- En el diálogo **Propiedades del recurso** para un recurso particular.
- En las **Propiedades del calendario** para un calendario particular para que los proyectos, recursos o tareas que usen este calendario tengan esta excepción.

Por ejemplo, si desea configurar unas vacaciones para una persona, agréguelas como una excepción para este recurso. Si desea configurar un día festivo para todos, agréguelo como una excepción a un calendario que todos usen.

Al agregar o editar excepciones del calendario, usted especifica los períodos de horario de trabajo para la excepción. Si no especifica ninguno, la excepción no tiene horario de trabajo, lo que significa que define un día libre.

Cada excepción puede tener un **Nombre** descriptivo (como "Feriado de Navidad" o "Oficina cerrada") que se muestra en la lista de excepciones.

### Excepciones recurrentes

Las excepciones del calendario se pueden configurar para que se repitan en un patrón en lugar de solo una fecha única. Los patrones de recurrencia disponibles incluyen:

- **Diario** — Cada N días o cada N días laborables
- **Semanal** — Cada N semanas en los días de la semana especificados
- **Mensual** — Por día del mes o por posición (por ejemplo, segundo martes)
- **Anual** — Por fecha o por posición (por ejemplo, último viernes de noviembre)

Las excepciones recurrentes tienen una condición de fin: sin fin, finalizar en fecha, o finalizar después de N ocurrencias.

## Calendarios vacíos y parciales

Si no agrega ningún horario de trabajo a un calendario, este está vacío y no se puede usar para la programación. Dichos calendarios se marcan con un icono de advertencia en la lista de calendarios, y el número de dichos calendarios se muestra en el cajón de navegación.

Sin embargo, hay situaciones en las que su calendario no está vacío pero aún no tiene suficiente horario de trabajo para programar una tarea particular. Estas situaciones solo pueden detectarse cuando se realiza la programación.

Si asigna un calendario vacío — o uno sin suficiente horario de trabajo — a un proyecto, recurso o tarea y la programación no puede proceder, se muestra un error y se revierte la última acción.
