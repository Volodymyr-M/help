# Historial de versiones

Ingantt conserva el historial completo de cada plan almacenado en Google Drive. Puede explorarlo, previsualizar cualquier versión anterior en el diagrama de Gantt, fijar las que importan y restaurar una como plan actual.

**El proyecto debe estar abierto desde Google Drive.** El historial de versiones es el historial de revisiones de Google Drive, por lo que los dos elementos de menú del historial de versiones están ocultos para un proyecto abierto desde su dispositivo o uno que nunca se ha guardado. Guárdelo en [Drive](/es/ui/files/index.md) y aparecerán.

## Abrir el historial de versiones

Elija **Archivo → Historial de versiones → Ver historial de versiones**, o pulse `Ctrl` + `Alt` + `Shift` + `H`.

El panel se abre en el lateral e Ingantt pasa a pantalla completa para que el diagrama tenga espacio. Al cerrar el panel, todo vuelve a quedar como estaba.

## Explorar y previsualizar

Las versiones se listan de la más reciente a la más antigua y se agrupan por día — **Hoy**, **Ayer** y luego la fecha. La más reciente lleva la etiqueta **Versión actual** y queda seleccionada automáticamente al abrir el panel.

Haga clic en cualquier versión e Ingantt la carga en el diagrama para que pueda examinarla. La vista previa es solo para mirar, no para editar:

- Su plan abierto se conserva aparte sin tocar, incluido su historial de deshacer y cualquier cambio sin guardar.
- Cierre el panel y su plan vuelve exactamente como lo dejó.
- Previsualizar no escribe nada en Drive.

## Fijar una versión

Google Drive elimina con el tiempo las revisiones antiguas de un archivo. Fijar una versión la marca como **conservar para siempre**, de modo que sobrevive a esa limpieza y permanece en la lista.

Hay dos maneras de fijar:

- **Archivo → Historial de versiones → Fijar versión actual** fija la versión más reciente sin abrir el panel. Úselo justo después de un guardado que quiera conservar — antes de una replanificación, al final de una fase o cuando se aprueba un plan.
- En el panel, abra el menú de cualquier versión y elija **Fijar esta versión**.

Las versiones fijadas se marcan como **Fijada** en la lista. Elegir el mismo elemento de menú de nuevo quita la fijación.

## Restaurar una versión

Seleccione la versión que desee y elija **Restaurar esta versión**. Ingantt le pide confirmación:

> ¿Restaurar esta versión? Su versión actual se guardará primero.

Restaurar no descarta su plan actual. Guarda el contenido restaurado como una **nueva** versión encima del historial, de modo que la versión en la que estaba sigue en la lista y puede restaurarse a su vez. El historial solo crece — restaurar nunca elimina nada.

Después de confirmar, el plan restaurado se convierte en el proyecto abierto y se guarda en Drive de inmediato.

## El historial de versiones no es lo mismo que las líneas base

Es fácil confundirlos:

- El **Historial de versiones** es un registro del *archivo* a lo largo del tiempo, mantenido por Google Drive. Responde a "¿cómo era este plan el martes pasado?"
- Las **[líneas base](/es/tracking/baselines/index.md)** son instantáneas del *cronograma* almacenadas dentro del plan, con las que se compara en la misma vista — barras de línea base en el diagrama de Gantt, columnas de línea base y variación en la tabla. Responden a "¿cuánto nos hemos desviado del plan aprobado?"

Use el historial de versiones para volver atrás. Use las líneas base para medir.
