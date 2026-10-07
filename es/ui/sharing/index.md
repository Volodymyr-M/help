# Compartir un proyecto

Un proyecto de Ingantt almacenado en Google Drive se puede compartir de la misma manera que cualquier otro archivo de Drive — con personas concretas, con su organización o con cualquiera que tenga el enlace. En la web, todo esto se hace desde dentro de Ingantt.

## Antes de empezar

Compartir solo funciona con archivos de Google Drive. Debe haber iniciado sesión con Google y el proyecto debe estar guardado en Drive; un proyecto que reside en un archivo local de su dispositivo no tiene nada que compartir. Consulte [Guardar su proyecto](/es/getting-started/saving/index.md).

> El botón **Compartir** forma parte de Ingantt para Web. En Android, iOS, Windows y macOS, comparta el archivo desde Google Drive — abra Drive, busque el archivo de Ingantt y use el comando **Compartir** del propio Drive. El resultado es idéntico, porque los permisos residen en el archivo de Drive en cualquier caso.

## Compartir con personas concretas

1. Abra el proyecto y haga clic en **Compartir** en el encabezado, o elija **Compartir** en el menú **Archivo**. Se abre el diálogo **Compartir en Google Drive**.
2. En **Personas con acceso** verá a todos los que ya tienen acceso, los propietarios primero.
3. Haga clic en **Agregar**, ingrese la dirección de correo electrónico de la persona, elija el rol que quiere darle y confirme.
4. Cierre el diálogo. Ingantt guarda los nuevos permisos en Drive y lo confirma con *Acceso actualizado*.

Los roles son los roles de Google Drive:

| Rol | Qué puede hacer |
|------|------------------|
| **Lector** | Abrir el proyecto y verlo. No puede guardar cambios. |
| **Comentador** | Lo mismo que Lector, además de comentar el archivo en Google Drive. No puede guardar cambios. |
| **Editor** | Abrir el proyecto y guardar cambios en él. |
| **Propietario** | Todo, incluido eliminar el archivo y transferir la propiedad. |

Para cambiar el rol de alguien, elija un rol distinto junto a su nombre. Para quitarlo, elimine su fila.

> Ingrese una dirección con la que la persona pueda realmente iniciar sesión en Google. Si Ingantt no puede confirmar que la dirección pertenece a Gmail o Google Workspace, se lo advierte, porque compartir en Drive con una dirección sin una cuenta de Google detrás no le permitirá abrir el proyecto.

## Acceso general — enlaces y organizaciones

**Acceso general** controla a todos los que no ha nombrado individualmente:

- **Restringido** — solo las personas listadas en **Personas con acceso**. Es el valor predeterminado.
- **Cualquier persona con el enlace** — cualquiera que tenga el enlace, con el rol que usted elija (Lector, Comentador o Editor).
- **Dominio** — todos los miembros de su organización de Google Workspace, con el rol que usted elija. Esta opción solo aparece cuando el propietario del proyecto pertenece a un dominio de Workspace; no se ofrece para cuentas personales de Gmail.

**Copiar enlace** copia el enlace de Google Drive al proyecto. Cualquiera cuyo acceso lo permita puede abrir ese enlace y editar el plan en Ingantt.

La información emergente del botón **Compartir** le indica el estado actual de un vistazo — *Privado — solo usted puede acceder*, *Compartido con personas concretas*, *Cualquier persona con el enlace puede ver/comentar/editar* o el equivalente para su dominio.

## Quién puede cambiar el acceso

Solo el **propietario** del archivo puede administrar el acceso siempre. Un **editor** también puede administrar el acceso, a menos que el propietario lo haya desactivado en Google Drive.

Si abre el diálogo en un proyecto que se compartió con usted como lector o comentador, indica **Usted es un lector y no puede administrar el acceso** y muestra el acceso general actual sin permitirle cambiarlo. Si necesita más acceso, pídaselo al propietario.

## Trabajar en un proyecto compartido

- Todos abren el mismo archivo de Drive, pero Ingantt no es una herramienta de coedición en vivo. Cada guardado escribe el archivo completo del proyecto, así que si dos personas tienen el plan abierto y ambas guardan, gana el último guardado y los cambios de la otra persona se reemplazan. Acuerde con los demás quién edita antes de empezar, y revise el historial de versiones del archivo en Google Drive si cree que se perdió algo.
- Un lector o comentador que intente guardar verá **Usted es un lector y no puede guardar**. Use **Guardar archivo como** para conservar una copia personal en su lugar.
- Cada colaborador necesita su propia suscripción o prueba activa de Ingantt para editar — compartir un plan no comparte su suscripción. Consulte [Suscripciones y pago](/es/account/subscription/index.md).
- Compartir con una dirección de **grupo** de Google no es compatible con el diálogo Compartir de Ingantt. Comparta con direcciones individuales o administre el uso compartido con un grupo desde Google Drive.

## Relacionado

- [Integración con Google Drive](/es/ui/files/index.md) — iniciar sesión, permisos y apertura de archivos compartidos.
- [Guardar su proyecto](/es/getting-started/saving/index.md) — dónde se almacena un proyecto y cuándo se guarda.
