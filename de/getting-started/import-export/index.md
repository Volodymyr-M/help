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
- **Ingantt YAML** — YAML, YML
- Und weitere (SDEF und andere Formate)

Um eine Datei zu importieren, klicken Sie auf die **+**-Schaltfläche auf dem Projekte-Bildschirm oder verwenden Sie die Option **Importieren** im Menü **Datei**. Wenn Sie Änderungen an einer importierten Datei vornehmen, speichert Ingantt diese im XML-Format.

> Um Projektdateien außer XML zu öffnen, sendet Ingantt diese über eine sichere Verbindung an den Ingantt-Webdienst zur Konvertierung. Ihre Dateien werden nicht auf dem Dienst gespeichert. Eine Internetverbindung ist erforderlich. YAML-Dateien werden lokal verarbeitet.

## Ihr Projekt exportieren

Ingantt bietet mehrere Exportformate über die Option **Exportieren** im Menü **Datei** (oder **Herunterladen** im Web). Wenn Sie **Exportieren** wählen, erscheint ein Dialog, in dem Sie das gewünschte Format auswählen können:

| Format | Beschreibung |
|--------|-------------|
| **PDF** | Druckbares PDF-Dokument Ihres Gantt-Diagramms |
| **PNG** | Bilddatei Ihres Gantt-Diagramms (enthält das aktuelle Design) |
| **CSV** | Kommagetrennte Wertedatei mit Vorgangsdaten für Tabellenkalkulationen |
| **XML** | Projekt-XML-Format für Interoperabilität |
| **YAML** | Kompakte, menschenlesbare Projektdefinition, konzipiert für die KI-gestützte Bearbeitung |
| **Markdown** | Textformat für Dokumentation, READMEs oder Wikis |

Die exportierte Datei spiegelt Ihre aktuellen Gantt-Diagramm-Einstellungen wider. Wenn zum Beispiel Vorgangsnamen im Dialog **Optionen** ausgeblendet sind, erscheinen sie auch im Export nicht. Die Zoomstufe wird ebenfalls beibehalten.

> PDF-Exporte verwenden immer helle Designfarben, während PNG-Exporte das aktuelle UI-Design (hell oder dunkel) verwenden. CSV-, YAML- und Markdown-Exporte sind reiner Text. Wenn sie in der Benutzeroberfläche sichtbar sind, werden geteilte Vorgänge, Basisplan-Balken und Abgleich-Geisterbalken in PDF- und PNG-Exporten gerendert.

## YAML mit KI-Agenten bearbeiten

Der YAML-Export ist für die Bearbeitung mit einem KI-Coding-Assistenten (Claude Code, Codex oder jedem Tool, das Dateien lesen und schreiben kann) konzipiert. Exportieren Sie das Projekt, beschreiben Sie die gewünschten Änderungen in natürlicher Sprache — _„eine zweiwöchige QA-Phase nach der Entwicklung hinzufügen"_, _„Alex allen Design-Vorgängen zuweisen"_ — und importieren Sie das Ergebnis zurück.

Das Format enthält **nur Eingaben** (Dauern, Abhängigkeiten, Einschränkungen, Zuweisungen, Kalender, Raten). Abgeleitete Werte — Start-/Endtermine von Vorgängen, Gesamtkosten, kritischer Pfad, Pufferzeit, Sammelvorgangsaggregationen — werden bewusst weggelassen; Ingantt berechnet sie beim Import neu. Der Agent sollte nicht versuchen, Termine selbst zu ermitteln.

Verweisen Sie den Agenten auf die [YAML-Formatreferenz](/yaml-reference.md), damit er das Schema kennt.

> Für die Echtzeitbearbeitung ohne den Export-/Import-Umweg siehe [Mit KI bearbeiten](/de/getting-started/edit-with-ai/index.md) — die KI liest und schreibt dasselbe YAML-Schema über eine Live-Sitzung, und Sie sehen jede Änderung im Gantt-Diagramm, sobald sie vorgenommen wird.
