# Ressourcenansichten

Sehen Sie die Arbeitsverteilung in Ihrem Team. Verwendungsansichten zeigen, wer was wann macht, der Teamplaner ermöglicht Zuweisungen per Drag-and-Drop, und das Ressourcendiagramm zeigt die Kapazität auf einen Blick.

## Ressourcenverwendung

Die **Ressourcenverwendung**-Ansicht ermöglicht es Ihnen, alle Ressourcenzuweisungen und die [Arbeit](/de/building-schedule/tasks/index.md#arbeit) zu sehen, die jede Arbeitsressource während jedes Zeitraums auf der Zeitachse leistet.

Ähnlich wie beim Gantt-Diagramm können Sie die Zeitachse vergrößern oder verkleinern, um eine detailliertere oder weniger detaillierte Ansicht zu erhalten.

Wenn eine Ressource mehr Arbeit leisten muss, als die Kalender für den gegebenen Zeitraum erlauben, wird die entsprechende **Arbeit** rot hervorgehoben.

In der Ressourcenverwendung-Ansicht können Sie auf Zuweisungsebene Arbeitszellen doppelklicken, um die Arbeitsverteilung direkt zu bearbeiten. Wenn Sie eine Arbeitszelle bearbeiten, ändert sich das Arbeitsprofil der Zuweisung automatisch zu „Konturiert" und die benutzerdefinierten Tagesarbeitsdaten werden gespeichert.

## Vorgangsverwendung

Die **Vorgangsverwendung**-Ansicht ist die Umkehrung der Ressourcenverwendung — sie zeigt eine vorgangszentrierte Ansicht der Arbeitsverteilung. Jeder Vorgang erscheint als übergeordnete Zeile mit seinen Ressourcenzuweisungen darunter eingerückt.

Das linke Panel zeigt Vorgangs- und Zuweisungsdetails, während das rechte Panel Arbeitswerte über Zeiträume verteilt anzeigt. Arbeitswerte auf Vorgangsebene werden fett dargestellt. Überlastete Zuweisungs-Arbeitswerte werden rot hervorgehoben.

## Teamplaner

Die **Teamplaner**-Ansicht ist eine ressourcenzentrierte Planungsansicht, in der jede Zeile eine Arbeitsressource darstellt. Vorgangsbalken werden auf der Zeile jeder Ressource entlang einer gemeinsamen Zeitskala positioniert.

Hauptfunktionen:

- **Horizontal ziehen**, um einen Vorgang umzuplanen — der Vorgang erhält eine Anfang-nicht-früher-als-Einschränkung an der neuen Position
- **Vertikal ziehen**, um einen Vorgang einer anderen Ressource zuzuweisen
- **Diagonal ziehen**, um in einer Aktion umzuplanen und neu zuzuweisen
- Ziehen zum oder vom Bereich **Nicht zugewiesene Vorgänge**, um Ressourcenzuweisungen hinzuzufügen oder zu entfernen
- Überlastete Ressourcen werden mit rotem Text im linken Panel angezeigt
- Vorgänge, die zu 100 % abgeschlossen sind, können nicht gezogen werden

## Ressourcendiagramm

Die **Ressourcendiagramm**-Ansicht zeigt ein pro-Ressource-Histogramm der Arbeitsauslastung über die Zeit. Es zeigt jeweils eine Arbeitsressource mit vertikalen Balken für jeden Zeitraum an. Navigieren Sie zwischen Ressourcen über die Pfeilschaltflächen im linken Panel.

Sieben Diagrammtypen sind verfügbar:

| Diagrammtyp | Beschreibung |
|------------|-------------|
| **Spitzeneinheiten** | Prozentsatz der genutzten Ressourcenkapazität pro Zeitraum (Standard) |
| **Arbeit** | Arbeitsstunden pro Zeitraum |
| **Überlastung** | Nur die überschüssigen Stunden über die Kapazität hinaus |
| **Prozentuale Auslastung** | Wie Spitzeneinheiten mit Prozentanzeige |
| **Verbleibende Verfügbarkeit** | Ungenutzte Kapazität in Stunden |
| **Arbeitsverfügbarkeit** | Gesamte Kalenderkapazität in Stunden |
| **Einheitenverfügbarkeit** | Effektiver Max.-Einheiten-Prozentsatz |

Blaue Balken stellen Arbeit innerhalb der Kapazität dar; rote Balken stellen den überlasteten Anteil dar, der die Kapazität überschreitet.
