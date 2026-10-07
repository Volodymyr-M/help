# Integración con Google Drive

Ingantt almacena sus archivos de proyecto en Google Drive para que pueda acceder a ellos desde cualquier dispositivo. Este artículo explica cómo iniciar sesión, los permisos que solicita Ingantt, cómo encajan Drive e Ingantt, y qué hacer cuando el inicio de sesión en Google no funciona como debería.

## Iniciar sesión en Google

En la pantalla de Proyectos, haga clic en **Iniciar sesión con Google**. Se abre un diálogo estándar de Google que solicita los permisos indicados a continuación. Puede cerrar la sesión en cualquier momento con **Cerrar sesión en Google**.

Ingantt solicita los siguientes permisos:

- **Ver la información de su perfil** — Se usa para identificar su cuenta.
- **Conectarse a su Google Drive** — Solo versión **Web**. Le permite crear o abrir archivos de Ingantt desde la interfaz web de Google Drive (botón **Nuevo** o menú **Abrir con**).
- **Ver, editar, crear y eliminar solo los archivos específicos de Google Drive que usa con esta aplicación** — Permite que Ingantt cree y edite sus propios archivos en su Google Drive. Ingantt no puede acceder a sus otros archivos.

> El tercer permiso es el ámbito restringido de Google Drive: Ingantt solo ve los archivos que usted creó en Ingantt o abrió con él. El resto de su Drive permanece invisible para Ingantt, y por eso Ingantt tampoco puede explorar las carpetas de su Drive por usted.

## Crear y abrir proyectos en Google Drive

Una vez que ha iniciado sesión, la pantalla de Proyectos es su Drive:

- **Proyectos recientes** — los proyectos que abrió más recientemente, agrupados por fecha.
- **Compartidos conmigo** — archivos de Ingantt que otras personas compartieron con usted.
- **Favoritos** — proyectos que marcó con **Añadir a Favoritos**.
- **Papelera** — proyectos que movió a la Papelera. Use **Restaurar** para recuperar uno.

Use **Abrir** → **Abrir desde Google Drive** para elegir un archivo existente, o la pestaña **Subir** de ese diálogo para buscar un archivo en su dispositivo o arrastrarlo allí. Los archivos de Microsoft Project, Primavera y los demás formatos compatibles se pueden abrir de esta manera — consulte [Importar y exportar](/es/getting-started/import-export/index.md).

Los proyectos nuevos se crean desde **Nuevo** en la pantalla de Proyectos: **Nuevo proyecto**, **Nuevo con IA** o **Nuevo desde plantilla**. Cuando ha iniciado sesión en la web, un proyecto nuevo se destina a Google Drive desde el primer momento y se guarda automáticamente a partir de entonces.

> **¿Falta un archivo en "Compartido conmigo"?** Google exige que primero abra un archivo compartido desde Google Drive. Haga clic derecho en el archivo allí y elija **Abrir con** → **Ingantt**. Entonces aparece en la lista.

## Usar Ingantt desde la propia interfaz de Google Drive (web)

En la web, Ingantt se puede iniciar desde Drive y no solo al revés. Para eso sirve el permiso **Conectarse a su Google Drive**: al concederlo cuando inicia sesión en Ingantt, Ingantt queda registrado como aplicación de Drive para su cuenta y aparece en el menú **Nuevo** de Drive y en el menú **Abrir con** de los archivos de Ingantt. Agregar Ingantt desde [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"} hace lo mismo; no necesita ambas cosas.

- **Nuevo** → **Más** → **Ingantt** crea un proyecto nuevo de Ingantt en la carpeta de Drive en la que se encuentra.
- Haga clic derecho en un archivo de Ingantt → **Abrir con** → **Ingantt** para abrirlo en Ingantt para Web.

En ambos casos, Drive abre `web.ingantt.com` y le transmite la carpeta o el archivo que debe usar, de modo que llega directamente al proyecto correcto.

## Solución de problemas al iniciar sesión en Google (Web)

**Google Drive no ofrece Ingantt en sus menús Nuevo ni Abrir con.** Cierre la sesión de Google en Ingantt, vuelva a iniciarla y asegúrese de conceder el permiso **Conectarse a su Google Drive** en la pantalla de consentimiento; Google solo agrega las entradas de menú de Drive una vez concedido ese permiso, y es fácil omitirlo. Agregar Ingantt desde Google Workspace Marketplace concede el mismo permiso. Después, vuelva a cargar Drive. Si usa una cuenta de Google Workspace de su trabajo o centro educativo, es posible que su administrador haya desactivado las aplicaciones de terceros para Drive o restringido las instalaciones desde Marketplace.

**Un archivo que alguien compartió con usted no está en "Compartido conmigo".** Ábralo una vez desde Google Drive con **Abrir con** → **Ingantt**. Como Ingantt solo tiene acceso a los archivos que usted usa con Ingantt, un archivo compartido le resulta invisible hasta que lo haya abierto de esa manera al menos una vez.

**"Error al guardar el archivo en Google Drive".** Compruebe primero su conexión. Si el problema persiste, cierre la sesión de Google y vuelva a iniciarla — es posible que la sesión haya caducado o perdido un permiso.

**"No se pudo iniciar sesión en Google."** Si usa más de una cuenta de Google, asegúrese de que la ventana emergente inicia sesión con la cuenta propietaria de sus proyectos. Las extensiones del navegador que bloquean las cookies de terceros o las ventanas emergentes también pueden impedir que el diálogo de Google se complete.

¿Sigue atascado? [Contacte con soporte](mailto:support@ingantt.com) e indíquenos su plataforma, su navegador y el mensaje exacto que ve.

## Video explicativo

[Usar Ingantt para Web con Google Drive](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## Relacionado

- [Guardar su proyecto](/es/getting-started/saving/index.md) — destinos, guardado automático y trabajo sin conexión.
- [Compartir un proyecto](/es/ui/sharing/index.md) — dar acceso a un plan a otras personas.
