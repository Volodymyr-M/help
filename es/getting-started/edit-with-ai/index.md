# Editar con IA

Conecte su proyecto a un asistente de codificación con IA como Claude Code, Codex o cualquier herramienta con acceso HTTP, y deje que realice cambios en su cronograma en tiempo real. Mientras la sesión esté activa, la IA puede leer su proyecto actual, agregar o modificar tareas, ajustar dependencias, asignar recursos y enviar actualizaciones de vuelta — usted ve cada cambio en el diagrama de Gantt en el momento en que se aplica.

> **Editar con IA está actualmente en beta.** La función está disponible en la versión web de Ingantt.

## Iniciar una sesión de edición con IA

1. Abra el proyecto que desea editar.
2. Haga clic en el icono **Editar con IA** (✨) en la esquina superior derecha, junto al botón del historial de versiones.
3. El diálogo muestra un conjunto de instrucciones que describen cómo su herramienta de IA debe leer y escribir el proyecto.
4. Haga clic en **Copiar instrucciones**. Esto inicia la sesión de edición y copia las instrucciones al portapapeles.
5. Pegue las instrucciones en su herramienta de IA (por ejemplo, como primer mensaje en una conversación de Claude Code o Codex).
6. Pida a la IA que haga cambios en lenguaje natural — por ejemplo, _"añadir una fase de QA de dos semanas después del desarrollo"_ o _"asignar a Alex a todas las tareas de diseño"_.

La IA sigue las instrucciones para obtener el YAML actual, editarlo y enviar el resultado de vuelta a Ingantt. Ingantt valida cada edición antes de aceptarla.

## Qué sucede durante una sesión

- **El punto verde** junto al icono ✨ indica una sesión activa. El punto se vuelve ámbar cuando la conexión se está reestableciendo y rojo cuando la sesión ha encontrado un error.
- **Cada cambio de la IA se valida** contra las reglas del proyecto de Ingantt antes de aplicarse. Si la IA envía datos inválidos, Ingantt rechaza el cambio e indica a la IA qué salió mal para que pueda autocorregirse.
- **Sus propias ediciones también se envían a la sesión.** Si cambia algo en la interfaz de Ingantt mientras la sesión está activa, la IA verá su actualización en su próxima lectura.
- **El programador sigue siendo la autoridad.** Cuando la IA establece fechas o duraciones, Ingantt vuelve a ejecutar el Método de la Ruta Crítica para calcular el cronograma final, lo que puede desplazar otras tareas.

## Detener la sesión

Haga clic en el icono ✨ mientras una sesión esté activa y elija **Detener sesión**. También puede simplemente cerrar la pestaña del navegador — la sesión finaliza automáticamente tras un período de inactividad.

## Herramientas de IA compatibles

Cualquier herramienta de IA que pueda realizar solicitudes HTTP funciona con Editar con IA. Las opciones comunes incluyen:

- **Claude Code** — pegue las instrucciones como primer mensaje en una conversación.
- **Codex** — pegue las instrucciones como primer mensaje en una conversación.
- **Otras herramientas** — cualquier asistente con acceso a `curl` o a un cliente HTTP puede leer y escribir en la sesión.

## Consejos

- Mantenga la pestaña de Ingantt abierta mientras la sesión esté activa. Si la pestaña se cierra, la IA recibirá un error de "sesión no conectada" en su próxima escritura.
- Si la IA envía YAML inválido, verá una notificación en la interfaz de Ingantt. La IA recibe los detalles del error y normalmente corrige el problema en su siguiente intento.
- Para proyectos grandes, comience con una solicitud enfocada (_"reorganizar la fase de pruebas"_) en lugar de cambios amplios — la IA puede iterar en pequeños pasos con retroalimentación inmediata.
- La IA no puede ver información que no se le proporciona. Si su solicitud depende del contexto — restricciones, fechas límite o reglas de negocio — inclúyalo en su solicitud.
