# Dependencias

Los proyectos reales tienen un orden — no se puede probar antes de construir. Vincule las tareas entre sí para que Ingantt calcule la secuencia correcta y desplace todo automáticamente cuando una tarea cambie.

## Predecesoras y dependencias

Cuando vincula tareas usando el botón **Vincular tareas seleccionadas** en la barra de herramientas, crea una dependencia entre las tareas. La dependencia se llama **Fin a Inicio**, y es una de las cuatro dependencias disponibles:

| Tipo                | Descripción                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| **Fin a Inicio** | La segunda tarea puede comenzar una vez que la primera tarea termine.                       |
| **Fin a Fin**| La segunda tarea termina cuando la primera tarea termina.                        |
| **Inicio a Fin** | La segunda tarea termina cuando la primera tarea comienza.                          |
| **Inicio a Inicio**  | La segunda tarea comienza cuando la primera tarea comienza.                            |

![Dependencias](/images/building-schedule/tasks/dependencies.png)

Para asignar predecesoras y editar dependencias, use la pestaña **Predecesoras** del diálogo **Propiedades de la tarea**.

## Posposición y tiempo de adelanto

A veces puede necesitar establecer un tiempo de espera entre dos tareas dependientes.

Supongamos que su primera tarea es "Pintar la pared" y su segunda tarea es "Colgar cuadros en la pared". Estas tareas están vinculadas (tienen una dependencia **Fin a Inicio**). No es posible colgar cuadros hasta que la pintura esté seca, así que necesita esperar. Para reflejar esto en su cronograma, establezca la **Posposición** (por ejemplo, 2 días) para la dependencia entre las dos tareas.

![Posposición](/images/building-schedule/tasks/lag.png)

Las posposiciones también pueden representar el escenario opuesto — cuando una tarea dependiente debe comenzar antes de que su predecesora termine. Para establecer esto, haga la **Posposición** negativa (por ejemplo, -1 día). Esto se llama _tiempo de adelanto_.

Para establecer la posposición o el tiempo de adelanto, seleccione la predecesora en la pestaña **Predecesoras** del diálogo **Propiedades de la tarea** y haga clic en el botón **Editar**.

> Las posposiciones se pueden establecer en horas, días, semanas, meses o como una fracción de la duración de la tarea predecesora (por ejemplo, 50%).

## Dependencias circulares

Si accidentalmente crea una dependencia circular — por ejemplo, haciendo que dos tareas sean predecesoras una de la otra — Ingantt la detecta y revierte la última acción. Esto se aplica también a cadenas circulares complejas.

Cuando abre un archivo de proyecto que contiene dependencias circulares, Ingantt elimina automáticamente los vínculos problemáticos para que el proyecto pueda programarse. Un mensaje de advertencia muestra cuántos vínculos de dependencia circular se eliminaron durante la importación.
