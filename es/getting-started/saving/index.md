# Guardar su proyecto

Ingantt guarda su proyecto como un archivo en su dispositivo o como un archivo en su Google Drive. El guardado automático mantiene luego ese archivo actualizado mientras trabaja. Este artículo explica qué destino obtiene, cuándo se aplica el guardado automático y el único caso en el que no puede hacerlo.

## Guardar por primera vez

Haga clic en el botón **Guardar** de la barra de herramientas o use **Guardar archivo** en el menú **Archivo**.

Si el proyecto nunca se ha guardado, Ingantt le pregunta dónde debe ir. **Guardar proyecto como** ofrece dos destinos:

- **Guardar en un nuevo archivo local** — un archivo en su dispositivo.
- **Guardar en un nuevo archivo de Google Drive** — un archivo en su Google Drive. Requiere iniciar sesión con Google.

Puede cambiar el destino más adelante con **Guardar archivo como** en el menú **Archivo**, que siempre crea un archivo nuevo y continúa trabajando en él.

Su proyecto se guarda en un formato XML totalmente compatible con Microsoft Project. Nada de su plan queda atado a Ingantt.

> En la web, si ya ha iniciado sesión en Google cuando crea un proyecto, Ingantt elige Google Drive por usted y nombra el archivo con el nombre del proyecto. No tiene que guardar una vez antes de que el guardado automático empiece a funcionar, y cambiar el nombre del proyecto cambia el nombre del archivo en Drive.

## Guardado automático

Cuando el guardado automático está activado, Ingantt escribe cada cambio en el archivo existente del proyecto en segundo plano, aproximadamente cada 20 segundos y solo cuando hay algo sin guardar. Siempre escribe en el destino que el proyecto ya tiene — nunca elige uno nuevo.

Que esté activado de forma predeterminada depende de la plataforma:

| Plataforma | Guardado automático predeterminado | Dónde cambiarlo |
|----------|--------------------|--------------------|
| **Web** | Activado | Menú **Archivo** → **Trabajar sin conexión (sin guardado automático)** |
| **Android, iOS, Windows, macOS** | Desactivado | **Habilitar guardado automático** en el diálogo **Opciones** o en el menú **Archivo** |

El botón **Guardar** funciona también como indicador del guardado automático. Muestra *Guardando…*, *Archivo guardado*, *Archivo guardado en Google Drive*, *Guardado automático pendiente…* o un error si un guardado no se completó.

El guardado automático no puede ayudar en dos situaciones:

- **El proyecto nunca se ha guardado.** Todavía no hay ningún archivo que actualizar, así que guárdelo una vez usted mismo.
- **El proyecto se abrió desde un archivo local mientras usa Ingantt en un navegador.** Vea a continuación.

## Guardado automático y archivos locales en la web

Un navegador no puede escribir de vuelta en un archivo que usted eligió de su disco. Cuando Ingantt para Web guarda en "un archivo local", en realidad descarga una nueva copia del archivo — que es el comportamiento correcto para un **Guardar** explícito, pero no algo que quiera que ocurra cada 20 segundos.

Por lo tanto: **Ingantt para Web no guarda automáticamente en archivos locales.** Si abrió un archivo de proyecto local en el navegador y quiere que sus cambios se conserven automáticamente, use **Guardar archivo como** → **Guardar en un nuevo archivo de Google Drive** una vez. A partir de entonces, el guardado automático mantiene el archivo de Drive al día.

Esto afecta a [Editar con IA](/es/getting-started/edit-with-ai/index.md) de la misma manera: sin guardado automático, todo lo que la IA cambie permanece sin guardar hasta que usted lo guarde, e Ingantt se lo advierte antes de que comience la sesión.

## Trabajar sin conexión en la web

**Trabajar sin conexión (sin guardado automático)** en el menú **Archivo** desactiva el guardado automático para la pestaña actual del navegador. Úselo cuando quiera seguir editando sin que cada cambio vaya a Google Drive.

Dos cosas que debe saber al respecto:

- No se guarda nada mientras está activado, así que guarde manualmente antes de cerrar la pestaña. Ingantt se lo recuerda cuando lo activa.
- La configuración es por sesión. Recargar la página o abrir una nueva pestaña comienza de nuevo con el guardado automático activado. En Android, iOS, Windows y macOS, en cambio, la configuración **Habilitar guardado automático** sí se recuerda.

## Descargar una copia

En la web, **Archivo** → **Descargar** → **Descargar XML** guarda una copia del proyecto en su computadora sin cambiar dónde está guardado el proyecto en sí. Úselo como copia de seguridad o para entregar el archivo a alguien que use Microsoft Project.

Los demás formatos — PDF, PNG, CSV, XML, YAML y Markdown — se tratan en [Importar y exportar](/es/getting-started/import-export/index.md).

## Cerrar con cambios sin guardar

Si cierra un proyecto que tiene cambios sin guardar, Ingantt pregunta **Guardar cambios en** su proyecto y advierte que los cambios sin guardar se perderán. El mismo aviso aparece antes de mover un proyecto a la Papelera.

## Si Ingantt no le permite guardar

- **"Modo de solo lectura porque la prueba ha finalizado"** o **"Suscripción inactiva"** — sus proyectos siguen ahí y siguen siendo legibles, pero el guardado está desactivado hasta que su suscripción esté activa. Consulte [Prueba gratuita](/es/account/trial/index.md) y [Suscripciones y pago](/es/account/subscription/index.md).
- **"Usted es un lector y no puede guardar"** — el archivo de Google Drive se compartió con usted como lector o comentador. Pida al propietario acceso de edición o use **Guardar archivo como** para conservar su propia copia. Consulte [Compartir un proyecto](/es/ui/sharing/index.md).
- **"Error al guardar el archivo en Google Drive"** — normalmente un problema de conexión o una sesión de Google caducada. Compruebe su conexión y vuelva a iniciar sesión; consulte [Integración con Google Drive](/es/ui/files/index.md).
