# Vorgangsansichten

Über das Gantt-Diagramm hinaus können Sie Vorgänge auf einem Kanban-Board, einem Monatskalender, einem Netzplandiagramm oder einer Zeitachse anzeigen. Jede Ansicht hebt verschiedene Aspekte Ihres Terminplans hervor.

## Vorgangstafel

Die **Vorgangstafel**-Ansicht zeigt Vorgänge als Karten, die in Spalten organisiert sind, die Arbeitsablaufphasen darstellen (Kanban-Stil).

Neue Projekte starten mit drei Standardspalten: „Nicht begonnen" (0 %), „In Bearbeitung" (50 %) und „Abgeschlossen" (100 %). Jede Spalte hat eine Zuordnung zu % abgeschlossen — wenn Sie eine Karte in eine Spalte ziehen, wird der Fertigstellungsgrad des Vorgangs automatisch aktualisiert.

Sie können Spalten hinzufügen, bearbeiten, umbenennen, neu anordnen und löschen. Jede Spalte hat eine Schaltfläche **Vorgang hinzufügen** am unteren Rand zum direkten Erstellen von Vorgängen in dieser Phase.

Nur nicht-Sammelvorgänge, aktive Vorgänge mit aktiviertem „Auf Tafel anzeigen" erscheinen auf der Tafel. Die Einstellung „Auf Tafel anzeigen" ist auf dem Reiter **Visuell** des Dialogs **Vorgangseigenschaften** verfügbar.

> Ziehen Sie Vorgangskarten zwischen Spalten, um ihren Status zu ändern. Wenn sich der % abgeschlossen eines Vorgangs anderweitig ändert (über Dialog, Inline-Bearbeitung oder Projekt aktualisieren), verschiebt sich die Karte automatisch in die passende Spalte.

## Netzplandiagramm

Die **Netzplandiagramm**-Ansicht zeigt Vorgänge als rechteckige Knoten, die in einem Flussdiagramm-Layout von links nach rechts angeordnet sind. Vorgänge ohne Vorgänger erscheinen in der ganz linken Spalte, und jeder nachfolgende Vorgang erscheint nach allen seinen Vorgängern.

- Normale Vorgänge zeigen Nr., Dauer, Start-/Endtermine und Ressourcen
- Sammelvorgänge zeigen Nr., Dauer, Start-/Endtermine und Fertigstellungsgrad
- Meilensteine zeigen Nr. und Startdatum
- Kritische Pfad-Vorgänge haben rote Überschriften und Rahmen
- Der Fortschritt wird durch diagonale Linienüberlagerungen angezeigt: eine Linie für laufende Vorgänge, gekreuzte Linien für abgeschlossene Vorgänge

Sie können Sammelvorgänge auf- und zuklappen, zum Auswählen klicken, zum Bearbeiten doppelklicken und per Rechtsklick das Kontextmenü aufrufen. Abhängigkeitspfeile werden zwischen den Knoten für alle vier Verknüpfungstypen gezeichnet.

## Kalenderansicht

Die **Kalenderansicht** zeigt ein monatliches Kalenderraster mit Vorgängen als horizontale Balken, die ihre geplanten Termine umspannen.

- Wechseln Sie zwischen **Monats-** und **Wochen**ansicht über die Umschaltfläche in der Kopfzeile
- Aktivieren Sie den **Arbeitswoche**-Modus, um nur Werktage anzuzeigen (5-Tage-Ansicht)
- Navigieren Sie mit den Vor-/Zurück-Schaltflächen oder springen Sie zum heutigen Tag
- Arbeitsfreie Tage werden mit einem unterschiedlichen Hintergrund angezeigt
- Meilensteine erscheinen als Rauten-Symbole
- Doppelklicken Sie auf einen leeren Tag, um einen neuen 1-Tages-Vorgang an diesem Datum zu erstellen

Vorgänge, die über eine Wochengrenze hinausgehen, werden in die nächste Zeile umgebrochen. Wenn sich mehrere Vorgänge am selben Tag überschneiden, werden sie vertikal gestapelt.

## Zeitachse

Die **Zeitachse** ist ein einklappbarer Bereich, der über dem Gantt-Diagramm erscheint und eine vereinfachte Übersicht der vom Benutzer ausgewählten Vorgänge auf einer horizontalen Zeitachse zeigt.

Um einen Vorgang zur Zeitachse hinzuzufügen, klicken Sie mit der rechten Maustaste darauf und wählen Sie **Auf Zeitachse anzeigen**, oder aktivieren Sie die Option auf dem Reiter **Visuell** des Dialogs Vorgangseigenschaften.

Vorgänge auf der Zeitachse können als Balken oder Beschriftungen (Textbeschriftungen mit vertikalen Verbindungslinien) angezeigt werden. Sie können zwischen den Modi wechseln, indem Sie einen Vorgangsbalken über oder unter die horizontale Trennlinie im Zeitachsenbereich ziehen. Die Zeitachse zeigt auch eine Heute-Markierung und eine Ansichtsfenster-Überlagerung, die Sie ziehen können, um das Gantt-Diagramm zu scrollen.

Schalten Sie die Zeitachse über das Menü **Ansicht** ein oder aus.

## Überwachungs-Gantt

Die **Überwachungs-Gantt**-Ansicht ähnelt der Standard-Vorgangsansicht, jedoch mit immer aktivierter Hervorhebung des kritischen Pfads und angezeigtem Basisplan 0, wenn dieser gespeichert wurde. Wenn Sie die Überwachungs-Gantt-Ansicht verlassen, werden die Einstellungen für die Sichtbarkeit des kritischen Pfads und des Basisplans auf ihren vorherigen Zustand zurückgesetzt.

Verwenden Sie den Überwachungs-Gantt zur Überwachung des Projektfortschritts im Vergleich zum Basisplan.
