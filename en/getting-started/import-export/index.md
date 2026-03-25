# Import & Export

Open project files from many scheduling applications and export your project to PDF, PNG, CSV, or other formats.

## Importing Project Files

Ingantt can open project files from many scheduling applications, not just Microsoft Project. Supported import formats include:

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
- And more (SDEF and other formats)

To import a file, click the **+** button on the Projects screen, or use the **Import** option in the **File** menu. If you make changes to an imported file, Ingantt saves them in XML format.

> To open non-XML project files, Ingantt sends them through a secure connection to the Ingantt web service for conversion. Your files are not stored on the service. An internet connection is required.

## Exporting Your Project

Ingantt provides multiple export formats through the **Export** option in the **File** menu (or **Download** on web). When you choose **Export**, a dialog appears allowing you to select the desired format:

| Format | Description |
|--------|-------------|
| **PDF** | Printable PDF document of your Gantt chart |
| **PNG** | Image file of your Gantt chart (includes current theme) |
| **CSV** | Comma-separated values file with task data for spreadsheets |
| **XML** | Project XML format for interoperability |
| **Markdown** | Text format for documentation, READMEs, or wikis |

The exported file reflects your current Gantt chart settings. For example, if task names are hidden in the **Options** dialog, they won't appear in the export either. The zoom level is also preserved.

> PDF exports always use light theme colors, while PNG exports use the current UI theme (light or dark). CSV and Markdown exports are plain text. When visible in the UI, split tasks, baseline bars, and leveling ghost bars are all rendered in PDF and PNG exports.
