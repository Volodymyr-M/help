# Versionsverlauf

Ingantt bewahrt den vollständigen Verlauf jedes in Google Drive gespeicherten Plans. Sie können ihn durchsuchen, jede frühere Version im Gantt-Diagramm als Vorschau ansehen, die wichtigen Versionen anheften und eine davon als aktuellen Plan wiederherstellen.

**Das Projekt muss aus Google Drive geöffnet sein.** Der Versionsverlauf ist der Überarbeitungsverlauf von Google Drive, daher sind die beiden Menüeinträge zum Versionsverlauf bei einem von Ihrem Gerät geöffneten oder noch nie gespeicherten Projekt ausgeblendet. Speichern Sie es in [Drive](/de/ui/files/index.md), und sie erscheinen.

## Den Versionsverlauf öffnen

Wählen Sie **Datei → Versionsverlauf → Versionsverlauf anzeigen** oder drücken Sie `Strg` + `Alt` + `Umschalt` + `H`.

Der Seitenbereich öffnet sich, und Ingantt wechselt in den Vollbildmodus, damit das Diagramm Platz hat. Beim Schließen des Bereichs wird alles wieder so hergestellt, wie es war.

## Durchsuchen und Vorschau

Die Versionen werden mit der neuesten zuerst aufgelistet und nach Tagen gruppiert — **Heute**, **Gestern**, dann das Datum. Die neueste ist mit **Aktuelle Version** beschriftet und wird beim Öffnen des Bereichs für Sie ausgewählt.

Klicken Sie auf eine beliebige Version, und Ingantt lädt sie in das Diagramm, damit Sie sie ansehen können. Die Vorschau ist ein Blick, keine Bearbeitung:

- Ihr geöffneter Plan wird unberührt beiseitegelegt, einschließlich seines Rückgängig-Verlaufs und aller ungespeicherten Änderungen.
- Schließen Sie den Bereich, und Ihr Plan kehrt genau so zurück, wie Sie ihn verlassen haben.
- Durch die Vorschau wird nichts in Drive geschrieben.

## Eine Version anheften

Google Drive bereinigt alte Überarbeitungen einer Datei im Laufe der Zeit. Das Anheften einer Version markiert sie als **dauerhaft behalten**, sodass sie diese Bereinigung übersteht und in der Liste bleibt.

Es gibt zwei Möglichkeiten zum Anheften:

- **Datei → Versionsverlauf → Aktuelle Version anheften** heftet die neueste Version an, ohne den Bereich zu öffnen. Verwenden Sie es direkt nach einem Speichern, das Sie behalten möchten — vor einer Neuplanung, am Ende einer Phase oder wenn ein Plan abgenommen wurde.
- Öffnen Sie im Bereich das Menü einer beliebigen Version und wählen Sie **Diese Version anheften**.

Angeheftete Versionen sind in der Liste mit **Angeheftet** markiert. Wählen Sie denselben Menüeintrag erneut, wird die Anheftung aufgehoben.

## Eine Version wiederherstellen

Wählen Sie die gewünschte Version aus und wählen Sie **Diese Version wiederherstellen**. Ingantt bittet Sie um Bestätigung:

> Diese Version wiederherstellen? Ihre aktuelle Version wird zuerst gespeichert.

Beim Wiederherstellen wird Ihr aktueller Plan nicht verworfen. Der wiederhergestellte Inhalt wird als **neue** Version oben auf den Verlauf gespeichert, sodass die Version, auf der Sie waren, weiterhin in der Liste steht und selbst wiederhergestellt werden kann. Der Verlauf wächst immer nur — das Wiederherstellen löscht nie etwas.

Nach Ihrer Bestätigung wird der wiederhergestellte Plan zum geöffneten Projekt und sofort in Drive gespeichert.

## Versionsverlauf ist nicht dasselbe wie Basispläne

Die beiden lassen sich leicht verwechseln:

- Der **Versionsverlauf** ist eine Aufzeichnung der *Datei* im Zeitverlauf, geführt von Google Drive. Er beantwortet die Frage „Wie sah dieser Plan letzten Dienstag aus?“
- **[Basispläne](/de/tracking/baselines/index.md)** sind Schnappschüsse des *Terminplans*, die im Plan selbst gespeichert sind und mit denen Sie in derselben Ansicht vergleichen — Basisplanbalken im Gantt-Diagramm, Basisplan- und Abweichungsspalten in der Tabelle. Sie beantworten die Frage „Wie weit sind wir vom genehmigten Plan abgewichen?“

Verwenden Sie den Versionsverlauf, um zurückzugehen. Verwenden Sie Basispläne, um zu messen.
