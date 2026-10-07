# Trabajar sin conexión

Desactive el guardado automático para que no se escriba nada en Google Drive hasta que guarde deliberadamente — útil cuando está a punto de perder la conexión.

En la versión **Web**, el elemento de menú es **Archivo → Trabajar sin conexión (sin guardado automático)**. En Windows, macOS, Android e iOS, el mismo interruptor se llama **Habilitar guardado automático**.

## Qué hace Trabajar sin conexión

**Archivo → Trabajar sin conexión** desactiva el guardado automático para la pestaña actual. Eso es todo. Mientras está activado, Ingantt deja de escribir su proyecto en Google Drive cada 20 segundos, y nada sale de su navegador hasta que guarde.

Al activarlo se muestra un recordatorio único:

> El modo sin conexión está activado. Recuerde guardar sus cambios manualmente antes de cerrar la pestaña.

Tómelo al pie de la letra. **Ingantt no pone en cola sus ediciones ni las envía cuando vuelve a estar en línea.** No hay sincronización en segundo plano. Si cierra o recarga la pestaña sin guardar, el trabajo realizado desde el último guardado se pierde.

## Guardar mientras está sin conexión

No puede guardar en Google Drive sin conexión, así que la secuencia que funciona es:

1. Abra el plan mientras todavía tiene conexión.
2. Active **Archivo → Trabajar sin conexión**.
3. Edite con normalidad. Todo ocurre en el navegador — el cronograma se recalcula, deshacer y rehacer funcionan, no se envía nada a ningún sitio.
4. Cuando vuelva a estar en línea, desactive **Trabajar sin conexión** y luego pulse **Guardar** (o `Ctrl`/`Cmd` + `S`). Este es el paso que coloca su trabajo en Drive.
5. El guardado automático se reanuda a partir de ese momento.

Si prefiere no depender de recordar el paso 4, exporte una copia antes de perder la conexión: **Archivo → Exportar → XML** descarga el plan a su dispositivo, y puede volver a abrir ese archivo más tarde.

## El botón Guardar le indica en qué situación está

El botón Guardar de la barra de herramientas es el indicador que debe observar:

| Qué muestra | Qué significa |
|---------------|---------------|
| **Archivo guardado en Google Drive** | Todo está en Drive. |
| **Guardado automático pendiente…** | Hay ediciones sin guardar; el guardado automático las recogerá en breve. |
| **Guardando…** | Hay un guardado en curso. |
| **Guardar archivo en Google Drive** | Hay ediciones sin guardar y el guardado automático está desactivado — debe guardar. |
| **Error al guardar el archivo en Google Drive** | Se intentó guardar y falló. Sus ediciones siguen en la pestaña y siguen sin guardar. |

El estado de error es lo que ve si el guardado automático se ejecuta mientras la conexión está caída: el guardado falla, el botón se pone rojo y el proyecto permanece sin guardar en la pestaña. En ese momento no se pierde nada, pero tampoco está nada a salvo — vuelva a conectarse y guarde.

## Diferencias entre plataformas

- **La configuración no persiste en la Web.** Es por pestaña y por sesión. Abra una nueva pestaña o recargue, y el guardado automático vuelve a estar activado. Es deliberado — el guardado automático activado es el valor predeterminado más seguro, de modo que un interruptor sin conexión olvidado no puede seguirle a todas partes. En Windows, macOS, Android e iOS la configuración del guardado automático *sí* se recuerda.
- **Los valores predeterminados difieren.** En la Web, el guardado automático está activado de fábrica. En las compilaciones de escritorio y móviles está desactivado de fábrica, y el mismo elemento de menú se llama **Habilitar guardado automático**.
- **Un proyecto que todavía no ha guardado no se guarda automáticamente en absoluto**, con o sin modo sin conexión. El guardado automático solo puede actualizar un archivo que ya existe en Drive. Guarde una vez, y el guardado automático se hace cargo.
- **Un archivo abierto desde su dispositivo en la versión Web nunca se guarda automáticamente.** Ingantt para Web no puede escribir de vuelta en un archivo de su disco. Guárdelo en [Google Drive](/es/ui/files/index.md) para obtener el guardado automático.

## Trabajar sin conexión y Editar con IA

Si usa [Editar con IA](/es/getting-started/edit-with-ai/index.md) mientras el guardado automático está desactivado, Ingantt se lo advierte. Los cambios de la IA se aplican al proyecto abierto como ediciones normales que se pueden deshacer — no se guardan por sí solos. Cierre la pestaña sin guardar y el trabajo de la IA se pierde con ella, exactamente igual que cualquier edición manual.

## Qué no es compatible

Para dejar las expectativas claras:

- Ingantt no detecta que se ha quedado sin conexión ni que ha vuelto a conectarse.
- Ingantt no pone en cola las ediciones realizadas sin conexión ni las reproduce al reconectarse.
- No hay resolución de conflictos de sincronización, porque no hay sincronización. Si usted y un colega editan el mismo archivo de Drive, gana el último guardado — el archivo completo, no una combinación tarea por tarea.
- Abrir un plan por primera vez requiere conexión. Trabajar sin conexión mantiene editable un plan que ya tiene abierto; no le permite abrir uno nuevo.
