# Import & Export

Öffnen Sie Projektdateien aus vielen Planungsanwendungen und exportieren Sie Ihr Projekt in PDF, PNG, CSV oder andere Formate.

## Projektdateien importieren

Ingantt kann Projektdateien aus vielen Planungsanwendungen öffnen, nicht nur aus Microsoft Project. Unterstützte Importformate umfassen:

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
- Und weitere (SDEF und andere Formate)

Um eine Datei zu importieren, klicken Sie auf die **+**-Schaltfläche auf dem Projekte-Bildschirm oder verwenden Sie die Option **Importieren** im Menü **Datei**. Wenn Sie Änderungen an einer importierten Datei vornehmen, speichert Ingantt diese im XML-Format.

> Um Projektdateien außer XML zu öffnen, sendet Ingantt diese über eine sichere Verbindung an den Ingantt-Webdienst zur Konvertierung. Ihre Dateien werden nicht auf dem Dienst gespeichert. Eine Internetverbindung ist erforderlich.

## Ihr Projekt exportieren

Ingantt bietet mehrere Exportformate über die Option **Exportieren** im Menü **Datei** (oder **Herunterladen** im Web). Wenn Sie **Exportieren** wählen, erscheint ein Dialog, in dem Sie das gewünschte Format auswählen können:

| Format | Beschreibung |
|--------|-------------|
| **PDF** | Druckbares PDF-Dokument Ihres Gantt-Diagramms |
| **PNG** | Bilddatei Ihres Gantt-Diagramms (enthält das aktuelle Design) |
| **CSV** | Kommagetrennte Wertedatei mit Vorgangsdaten für Tabellenkalkulationen |
| **XML** | Projekt-XML-Format für Interoperabilität |
| **Markdown** | Textformat für Dokumentation, READMEs oder Wikis |

Die exportierte Datei spiegelt Ihre aktuellen Gantt-Diagramm-Einstellungen wider. Wenn zum Beispiel Vorgangsnamen im Dialog **Optionen** ausgeblendet sind, erscheinen sie auch im Export nicht. Die Zoomstufe wird ebenfalls beibehalten.

> PDF-Exporte verwenden immer helle Designfarben, während PNG-Exporte das aktuelle UI-Design (hell oder dunkel) verwenden. CSV- und Markdown-Exporte sind reiner Text. Wenn sie in der Benutzeroberfläche sichtbar sind, werden geteilte Vorgänge, Basisplan-Balken und Abgleich-Geisterbalken in PDF- und PNG-Exporten gerendert.
