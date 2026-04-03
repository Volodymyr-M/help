# Importar y exportar

Abra archivos de proyecto de muchas aplicaciones de programación y exporte su proyecto a PDF, PNG, CSV u otros formatos.

## Importación de archivos de proyecto

Ingantt puede abrir archivos de proyecto de muchas aplicaciones de programación, no solo de Microsoft Project. Los formatos de importación compatibles incluyen:

- **Microsoft Project** — MPP, MPT, MPX
- **Primavera P6** — XER, PMXML
- **GanttProject** — GAN
- **Asta Powerproject** — PP
- **ConceptDraw** — CDPX
- **FastTrack Schedule** — FTS
- **ProjectLibre** — POD
- **GNOME Planner** — Planner
- **Phoenix Project Manager** — PPX
- **Synchro** — SP
- **TurboProject** — PEP
- Y más (SDEF y otros formatos)

Para importar un archivo, haga clic en el botón **+** en la pantalla de Proyectos, o use la opción **Importar** en el menú **Archivo**. Si realiza cambios en un archivo importado, Ingantt los guarda en formato XML.

> Para abrir archivos de proyecto que no sean XML, Ingantt los envía a través de una conexión segura al servicio web de Ingantt para su conversión. Sus archivos no se almacenan en el servicio. Se requiere conexión a internet.

## Exportación de su proyecto

Ingantt proporciona múltiples formatos de exportación a través de la opción **Exportar** en el menú **Archivo** (o **Descargar** en web). Cuando elige **Exportar**, aparece un diálogo que le permite seleccionar el formato deseado:

| Formato | Descripción |
|---------|-------------|
| **PDF** | Documento PDF imprimible de su diagrama de Gantt |
| **PNG** | Archivo de imagen de su diagrama de Gantt (incluye el tema actual) |
| **CSV** | Archivo de valores separados por comas con datos de tareas para hojas de cálculo |
| **XML** | Formato XML de proyecto para interoperabilidad |
| **Markdown** | Formato de texto para documentación, READMEs o wikis |

El archivo exportado refleja la configuración actual de su diagrama de Gantt. Por ejemplo, si los nombres de las tareas están ocultos en el diálogo **Opciones**, tampoco aparecerán en la exportación. El nivel de zoom también se preserva.

> Las exportaciones en PDF siempre usan colores de tema claro, mientras que las exportaciones en PNG usan el tema actual de la interfaz (claro u oscuro). Las exportaciones en CSV y Markdown son texto plano. Cuando son visibles en la interfaz, las tareas divididas, las barras de línea base y las barras fantasma de nivelación se renderizan en las exportaciones PDF y PNG.
