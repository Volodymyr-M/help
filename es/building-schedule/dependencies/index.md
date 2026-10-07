# Dependencias

Los proyectos reales tienen un orden — no se puede probar antes de construir. Vincule las tareas entre sí para que Ingantt calcule la secuencia correcta y desplace todo automáticamente cuando una tarea cambie.

## Predecesoras y dependencias

Cuando vincula tareas usando el botón **Vincular tareas seleccionadas** en la barra de herramientas, crea una dependencia entre las tareas. La dependencia se llama **Final a Comienzo**, y es una de las cuatro dependencias disponibles:

| Tipo                | Descripción                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| **Final a Comienzo** | La segunda tarea puede comenzar una vez que la primera tarea termine.                       |
| **Final a Final**| La segunda tarea termina cuando la primera tarea termina.                        |
| **Comienzo a Final** | La segunda tarea termina cuando la primera tarea comienza.                          |
| **Comienzo a Comienzo**  | La segunda tarea comienza cuando la primera tarea comienza.                            |

![Dependencias](/images/building-schedule/tasks/dependencies.png)

Para asignar predecesoras y editar dependencias, use la pestaña **Predecesores** del diálogo **Propiedades de la tarea**.

## Posposición y tiempo de adelanto

A veces puede necesitar establecer un tiempo de espera entre dos tareas dependientes.

Supongamos que su primera tarea es "Pintar la pared" y su segunda tarea es "Colgar cuadros en la pared". Estas tareas están vinculadas (tienen una dependencia **Final a Comienzo**). No es posible colgar cuadros hasta que la pintura esté seca, así que necesita esperar. Para reflejar esto en su cronograma, establezca la **Retraso** (por ejemplo, 2 días) para la dependencia entre las dos tareas.

![Posposición](/images/building-schedule/tasks/lag.png)

Las posposiciones también pueden representar el escenario opuesto — cuando una tarea dependiente debe comenzar antes de que su predecesora termine. Para establecer esto, haga la **Retraso** negativa (por ejemplo, -1 día). Esto se llama _tiempo de adelanto_.

Para establecer la posposición o el tiempo de adelanto, seleccione la predecesora en la pestaña **Predecesores** del diálogo **Propiedades de la tarea** y haga clic en el botón **Editar**.

> Las posposiciones se pueden establecer en horas, días, semanas, meses o como una fracción de la duración de la tarea predecesora (por ejemplo, 50%).

## Dependencias circulares

Si accidentalmente crea una dependencia circular — por ejemplo, haciendo que dos tareas sean predecesoras una de la otra — Ingantt la detecta y revierte la última acción. Esto se aplica también a cadenas circulares complejas.

Cuando abre un archivo de proyecto que contiene dependencias circulares, Ingantt elimina automáticamente los vínculos problemáticos para que el proyecto pueda programarse. Un mensaje de advertencia muestra cuántos vínculos de dependencia circular se eliminaron durante la importación.
