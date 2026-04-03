# Gantt-Diagramm

Das Gantt-Diagramm ist die Zeitachse Ihres Projekts. Sehen Sie Abgleichanpassungen, Fortschrittslinien und wie sich der Terminplan seit der Basislinie verändert hat.

## Verfügbare Ansichten

Ingantt bietet mehrere Ansichten für die Arbeit mit Ihrem Projekt, zugänglich über die Navigationsleiste oder das Menü **Ansicht**. Alle Ansichten sind voll funktionsfähig — führen Sie jede für Vorgänge verfügbare Aktion in jeder Ansicht aus.

**Vorgangsansichten:**

- **Vorgänge** — Vorgangsliste und Gantt-Diagramm
- **Überwachungs-Gantt**
- **[Vorgangstafel](/de/views/task-views/index.md#vorgangstafel)**
- **[Netzplandiagramm](/de/views/task-views/index.md#netzplandiagramm)**
- **[Kalenderansicht](/de/views/task-views/index.md#kalenderansicht)**
- **[Zeitachse](/de/views/task-views/index.md#zeitachse)**

**Ressourcenansichten:**

- **[Ressourcenverwendung](/de/views/resource-views/index.md#ressourcenverwendung)**
- **[Vorgangsverwendung](/de/views/resource-views/index.md#vorgangsverwendung)**
- **[Teamplaner](/de/views/resource-views/index.md#teamplaner)**
- **[Ressourcendiagramm](/de/views/resource-views/index.md#ressourcendiagramm)**

## Vorgangsansicht

Die **Vorgangsansicht** ist die Hauptansicht, die eine Vorgangsliste und das Gantt-Diagramm kombiniert (geteilte Ansicht). Sie können über das Untermenü **Ansicht > Bereiche in Vorgängen** konfigurieren, welche Bereiche angezeigt werden: Vorgangsliste und Gantt-Diagramm können jeweils unabhängig ein- und ausgeblendet werden.

## Vorgangsinspektor

Der **Vorgangsinspektor** ist ein Seitenbereich, der Details des ausgewählten Vorgangs anzeigt, einschließlich Planungsfaktoren (was die Termine des Vorgangs bestimmt), allgemeine Eigenschaften, Ressourcen, Vorgänger, Kosten und mehr. Schalten Sie den Vorgangsinspektor über die Symbolleiste ein oder aus.

Der Abschnitt **Planungsfaktoren** oben im Inspektor zeigt, was die geplanten Termine des Vorgangs bestimmt: bestimmende Vorgänger (fett mit einem „Bestimmend"-Abzeichen dargestellt), nicht bestimmende Vorgänger (mit ihrem relativen Puffer), Einschränkungen, Abgleichverzögerungen, Kalender und Pufferwerte. Kritische Vorgänge zeigen ein „Kritisch"-Abzeichen an.

## Abgleich-Gantt

Wenn der [automatische Abgleich](/de/adjusting-schedule/leveling/index.md#automatischer-abgleich) auf Ihr Projekt angewendet wurde, erscheint eine **Abgleich-Gantt**-Umschaltfläche im Gantt-Diagramm-Bereich.

Wenn aktiviert, zeigt das Gantt-Diagramm **grüne Balken** an den Positionen jedes Vorgangs vor dem Abgleich (wo der Vorgang vor dem automatischen Abgleich war). Die Standard-Vorgangsbalken bleiben an ihren aktuellen abgeglichenen Positionen. So können Sie den ursprünglichen Terminplan visuell mit dem abgeglichenen Terminplan vergleichen und sehen, wie stark jeder Vorgang verzögert wurde.

Wenn die Umschaltfläche ausgeschaltet ist, werden nur die Standard-Vorgangsbalken angezeigt.

> Die Abgleich-Gantt-Umschaltfläche ist nur sichtbar, wenn Abgleichdaten vorliegen. Sie wird automatisch ausgeblendet, wenn Sie den Abgleich löschen. Wenn Sie eine Projektdatei öffnen, die bereits Abgleichdaten enthält, ist die Umschaltfläche verfügbar, startet aber in der ausgeschalteten Position.

## Fortschrittslinien

Wenn aktiviert, zeigt das Gantt-Diagramm eine **Fortschrittslinie** — eine Zickzack-Linie, die visuell anzeigt, ob Vorgänge relativ zum Statusdatum im Rückstand oder voraus sind. Vorgänge im Rückstand lassen die Linie nach links ausschlagen; Vorgänge, die voraus sind, lassen sie nach rechts ausschlagen; planmäßige Vorgänge halten die Linie gerade.

Schalten Sie Fortschrittslinien über die schwebende Symbolleisten-Schaltfläche im Gantt-Diagramm oder das Menü **Ansicht** ein oder aus. Die Fortschrittslinie wird auch in der PDF-/Druckausgabe dargestellt, wenn sie aktiviert ist.
