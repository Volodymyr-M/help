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
- **Ingantt YAML** — YAML, YML
- Y más (SDEF y otros formatos)

Para importar un archivo, haga clic en el botón **+** en la pantalla de Proyectos, o use la opción **Importar** en el menú **Archivo**. Si realiza cambios en un archivo importado, Ingantt los guarda en formato XML.

> Para abrir archivos de proyecto que no sean XML, Ingantt los envía a través de una conexión segura al servicio web de Ingantt para su conversión. Sus archivos no se almacenan en el servicio. Se requiere conexión a internet. Los archivos YAML se procesan localmente.

## Exportación de su proyecto

Ingantt proporciona múltiples formatos de exportación a través de la opción **Exportar** en el menú **Archivo** (o **Descargar** en web). Cuando elige **Exportar**, aparece un diálogo que le permite seleccionar el formato deseado:

| Formato | Descripción |
|---------|-------------|
| **PDF** | Documento PDF imprimible de su diagrama de Gantt |
| **PNG** | Archivo de imagen de su diagrama de Gantt (incluye el tema actual) |
| **CSV** | Archivo de valores separados por comas con datos de tareas para hojas de cálculo |
| **XML** | Formato XML de proyecto para interoperabilidad |
| **YAML** | Definición de proyecto compacta y legible por humanos, diseñada para la edición asistida por IA |
| **Markdown** | Formato de texto para documentación, READMEs o wikis |

El archivo exportado refleja la configuración actual de su diagrama de Gantt. Por ejemplo, si los nombres de las tareas están ocultos en el diálogo **Opciones**, tampoco aparecerán en la exportación. El nivel de zoom también se preserva.

> Las exportaciones en PDF siempre usan colores de tema claro, mientras que las exportaciones en PNG usan el tema actual de la interfaz (claro u oscuro). Las exportaciones en CSV, YAML y Markdown son texto plano. Cuando son visibles en la interfaz, las tareas divididas, las barras de línea base y las barras fantasma de nivelación se renderizan en las exportaciones PDF y PNG.

## Edición de YAML con agentes de IA

La exportación YAML está diseñada para ser editada con un asistente de codificación con IA (Claude Code, Codex o cualquier herramienta que pueda leer y escribir archivos). Exporte el proyecto, describa los cambios que desea en lenguaje natural — _"añadir una fase de QA de dos semanas después del desarrollo"_, _"asignar a Alex a todas las tareas de diseño"_ — e importe el resultado de nuevo.

El formato contiene **solo entradas** (duraciones, dependencias, restricciones, asignaciones, calendarios, tarifas). Los valores derivados —fechas de inicio/fin de tareas, costo total, ruta crítica, holgura, totales de resumen— se omiten a propósito; Ingantt los recalcula al importar. El agente no debería intentar calcular las fechas por sí mismo.

Dirija al agente a la [referencia del formato YAML](/yaml-reference.md) para que conozca el esquema.

> Para la edición en tiempo real sin el ciclo de exportación/importación, consulte [Editar con IA](/es/getting-started/edit-with-ai/index.md) — la IA lee y escribe el mismo esquema YAML a través de una sesión en vivo y usted ve cada cambio aparecer en el diagrama de Gantt en el momento en que ocurre.
