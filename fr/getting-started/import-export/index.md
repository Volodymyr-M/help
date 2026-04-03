# Import et export

Ouvrez des fichiers de projet provenant de nombreuses applications de planification et exportez votre projet en PDF, PNG, CSV ou dans d'autres formats.

## Importer des fichiers de projet

Ingantt peut ouvrir des fichiers de projet provenant de nombreuses applications de planification, pas seulement Microsoft Project. Les formats d'import pris en charge incluent :

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
- Et d'autres (SDEF et autres formats)

Pour importer un fichier, cliquez sur le bouton **+** sur l'écran des projets, ou utilisez l'option **Import** dans le menu **File**. Si vous apportez des modifications à un fichier importé, Ingantt les enregistre au format XML.

> Pour ouvrir des fichiers de projet non-XML, Ingantt les envoie via une connexion sécurisée au service web Ingantt pour conversion. Vos fichiers ne sont pas stockés sur le service. Une connexion internet est requise.

## Exporter votre projet

Ingantt propose plusieurs formats d'export via l'option **Export** dans le menu **File** (ou **Download** sur le web). Lorsque vous choisissez **Export**, une boîte de dialogue apparaît vous permettant de sélectionner le format souhaité :

| Format | Description |
|--------|-------------|
| **PDF** | Document PDF imprimable de votre diagramme de Gantt |
| **PNG** | Fichier image de votre diagramme de Gantt (inclut le thème actuel) |
| **CSV** | Fichier de valeurs séparées par des virgules avec les données des tâches pour les tableurs |
| **XML** | Format XML de projet pour l'interopérabilité |
| **Markdown** | Format texte pour la documentation, les README ou les wikis |

Le fichier exporté reflète les paramètres actuels de votre diagramme de Gantt. Par exemple, si les noms des tâches sont masqués dans la boîte de dialogue **Options**, ils n'apparaîtront pas non plus dans l'export. Le niveau de zoom est également conservé.

> Les exports PDF utilisent toujours les couleurs du thème clair, tandis que les exports PNG utilisent le thème actuel de l'interface (clair ou sombre). Les exports CSV et Markdown sont en texte brut. Lorsqu'ils sont visibles dans l'interface, les tâches fractionnées, les barres de référence et les barres fantômes de nivellement sont tous rendus dans les exports PDF et PNG.
