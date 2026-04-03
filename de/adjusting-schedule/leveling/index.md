# Ressourcenabgleich

Es passiert schnell, dass einer Person mehr Arbeit zugewiesen wird, als sie an einem Tag bewältigen kann. Der Abgleich verschiebt automatisch Vorgänge, damit niemand überlastet wird, obwohl er das Enddatum Ihres Projekts verlängern kann.

## Überlastete Ressourcen

Eine Arbeitsressource kann **überlastet** sein, was bedeutet, dass ihr mehr Arbeit zugewiesen ist, als sie basierend auf ihrem Kalender und ihrer Verfügbarkeit erledigen kann. Wenn Ihr Projekt zum Beispiel zwei Vorgänge hat, jeder mit einer Dauer von einem Tag und ohne [Abhängigkeit](/de/building-schedule/dependencies/index.md#vorgänger-und-abhängigkeiten) untereinander, die beide derselben Arbeitsressource zugewiesen sind, ist die Ressource überlastet. Die Ressource muss zwei Tage Arbeit an einem Kalendertag erledigen. Um dies zu lösen, verknüpfen Sie einfach die beiden Vorgänge mit einer Abhängigkeit.

Wenn ein Vorgang überlastete Ressourcen zugewiesen hat, zeigt Ingantt ein spezielles Symbol in der Vorgangsliste an.

Wenn eine Ressource überlastet ist, zeigt Ingantt ein spezielles Symbol in der Ansicht **Ressourcen** und der Ansicht **Ressourcenverwendung** an.

Zusätzlich zählt Ingantt solche Vorgänge und Ressourcen und zeigt die Zahlen in der Navigationsleiste an.

## Automatischer Abgleich

Abhängigkeiten zwischen Vorgängen steuern ihre Position auf der Zeitachse. In größeren Projekten ist es leicht, eine Abhängigkeit zu übersehen — was dazu führt, dass mehrere Vorgänge, die derselben Arbeitsressource zugewiesen sind, gleichzeitig geplant werden. Die Ressource wird überlastet, und Ingantt benachrichtigt Sie mit speziellen Symbolen in den Vorgangs- und Ressourcenlisten.

Sie können Überlastungen manuell lösen, indem Sie Abhängigkeiten oder Einschränkungen setzen, um einige Vorgänge so zu verschieben, dass die Arbeit nicht gleichzeitig erledigt wird.

Eine alternative Möglichkeit zur Lösung von Überlastungen ist der automatische Abgleich. Wenn Sie im Menü **Projekt** die Option **Ressourcen automatisch abgleichen** wählen, verschiebt Ingantt automatisch einige Vorgänge weiter auf der Zeitachse, um Ressourcenüberlastungen zu vermeiden. Sie können diese automatischen Anpassungen durch Wahl von **Abgleich löschen** im Menü **Projekt** zurücksetzen.

Der automatische Abgleich bietet drei Bereichsoptionen:

- **Alle Vorgänge** — Gleicht alle Vorgänge im Projekt ab
- **Ausgewählte Vorgänge** — Gleicht nur die aktuell ausgewählten Vorgänge ab
- **Ausgewählte Ressourcen** — Gleicht nur die Überlastungskonflikte für die ausgewählten Ressourcen ab (verfügbar in den Ansichten Ressourcen und Ressourcenverwendung)

### Wie der automatische Abgleich funktioniert

Wenn Sie **Ressourcen automatisch abgleichen** ausführen, löst Ingantt Überlastungen durch **Verzögern oder Teilen von Vorgängen**. Es werden weder Ressourcen umverteilt noch Zuweisungseinheiten geändert.

Der Algorithmus identifiziert Tage, an denen eine Ressource mehr zugewiesene Arbeit hat, als ihre Kapazität zulässt, und entscheidet dann, welche konkurrierenden Vorgänge verzögert werden sollen. Jeder Vorgang wird anhand mehrerer Faktoren bewertet — Vorgänge mit höheren Bewertungen sind vor Verzögerung geschützt:

| Faktor | Auswirkung |
|--------|--------|
| **Abhängigkeiten** | Vorgänge, die Vorgänger anderer Vorgänge sind, werden geschützt |
| **Puffer** | Kritische oder nahezu kritische Vorgänge (weniger Puffer) werden geschützt |
| **Priorität** | Vorgänge mit einem höheren Prioritätswert werden geschützt |
| **Einschränkungen** | Vorgänge mit Planungseinschränkungen werden geschützt |
| **Startdatum** | Frühere Vorgänge werden etwas geschützt |
| **Dauer** | Längere Vorgänge werden etwas geschützt |

Der Vorgang mit der niedrigsten Bewertung wird verzögert, um jeden Konflikt zu lösen. Der Prozess wird wiederholt, bis alle Überlastungen gelöst sind oder keine weiteren Verzögerungen angewendet werden können.

> Der automatische Abgleich kann das Enddatum des Projekts verlängern. Er löst so viele Überlastungen wie möglich, aber einige können bestehen bleiben, wenn Einschränkungen weitere Verzögerungen verhindern.

### Abgleichoptionen

Konfigurieren Sie das Abgleichverhalten im Dialog **Abgleichoptionen**, zugänglich über das Menü **Projekt**:

- **Abgleichreihenfolge** — Steuert die Priorisierung der Vorgänge: Nur Nr. (aufsteigende Nr.), Standard (Multifaktor-Bewertung) oder Priorität Standard (Priorität zuerst, dann Standardfaktoren; die Standardeinstellung)
- **Überlastungsgrundlage** — Steuert die Erkennungsgranularität: Minute, Stunde, Tag, Woche oder Monat. Die Einstellungen Minute und Stunde erkennen Konflikte auch dann, wenn die Tagessummen innerhalb der Kapazität liegen, aber Vorgänge sich innerhalb eines Tages überschneiden.
- **Einzelne Zuweisungen anpassen** — Wenn aktiviert und ein Vorgang mehrere Ressourcenzuweisungen hat, wird nur die Zuweisung der überlasteten Ressource verzögert, nicht der gesamte Vorgang
- **Teilungen in verbleibender Arbeit erstellen** — Wenn aktiviert, kann der Abgleichalgorithmus Arbeit um Konflikte herum teilen, anstatt ganze Vorgänge zu verzögern
- **Nur innerhalb verfügbarer Pufferzeit abgleichen** — Beschränkt Abgleichverzögerungen darauf, den Gesamtpuffer eines Vorgangs nicht zu überschreiten, wodurch eine Verlängerung des Projektenddatums verhindert wird
- **Abgleichbereich** — Beschränkt den Abgleich auf Vorgänge innerhalb eines bestimmten Datumsfensters

### Vom Abgleich ausgenommen

Die folgenden Vorgänge und Ressourcen werden nie vom automatischen Abgleich beeinflusst:

- Vorgänge mit [Priorität](#priorität) auf **1000** gesetzt
- Vorgänge mit **Abgleich möglich** auf **Nein** gesetzt (auf dem Reiter **Abgleich** des Dialogs **Vorgangseigenschaften**)
- Vorgänge mit einer **Muss anfangen am**- oder **Muss enden am**-[Einschränkung](/de/building-schedule/constraints/index.md#einschränkungen)
- [Sammelvorgänge](/de/building-schedule/tasks/index.md#sammelvorgänge)
- Meilensteine mit Dauer null
- Vollständig abgeschlossene Vorgänge (100 %)
- Ressourcen mit **Abgleich möglich** auf **Nein** gesetzt im Dialog **Ressourceneigenschaften**
- Ressourcen mit [Buchungsart](/de/building-schedule/resources/index.md#buchungsart) **Vorgeschlagen** (sofern nicht die Abgleichoption zum Einbeziehen vorgeschlagener Ressourcen aktiviert ist)

### Erneuter Abgleich und Zurücksetzen

Jedes Mal, wenn Sie **Ressourcen automatisch abgleichen** ausführen, wird ein vorheriger Abgleich automatisch zuerst gelöscht. Der Abgleich beginnt immer von einem sauberen, nicht abgeglichenen Terminplan, um das Stapeln von Verzögerungen zu verhindern.

Wenn Sie den Terminplan nach dem Abgleich ändern (Vorgänge hinzufügen, Abhängigkeiten ändern usw.), bleiben die bestehenden Abgleichverzögerungen erhalten, lösen aber möglicherweise nicht mehr alle Überlastungen. Führen Sie **Ressourcen automatisch abgleichen** erneut aus, um den aktualisierten Terminplan neu abzugleichen.

Um alle Abgleichverzögerungen zu entfernen und zum ursprünglichen CPM-berechneten Terminplan zurückzukehren, wählen Sie **Abgleich löschen** aus dem Menü **Projekt**.

### Abgleich-Gantt

Nachdem Sie den automatischen Abgleich ausgeführt haben, erscheint eine **Abgleich-Gantt**-Umschaltfläche im Gantt-Diagramm-Bereich. Wenn aktiviert, werden grüne Balken an den Positionen vor dem Abgleich gezeichnet — dort, wo die Vorgänge vor dem automatischen Abgleich waren — während die Standard-Vorgangsbalken an ihren aktuellen abgeglichenen Positionen bleiben. So können Sie den ursprünglichen Terminplan mit dem abgeglichenen Terminplan vergleichen und sehen, wie stark jeder Vorgang verzögert wurde.

Die Umschaltfläche ist nur sichtbar, wenn Abgleichdaten vorliegen, und wird automatisch ausgeblendet, wenn Sie den Abgleich löschen.

## Priorität

Das Feld **Priorität** ist auf dem Reiter **Abgleich** des Dialogs **Vorgangseigenschaften** verfügbar. Es akzeptiert einen ganzzahligen Wert von 0 bis 1000, mit einem Standardwert von 500.

Die Priorität wird vom [automatischen Abgleich](#automatischer-abgleich)-Algorithmus verwendet, um zu entscheiden, welche Vorgänge bei der Lösung von Ressourcenüberlastungen verzögert werden sollen. Vorgänge mit einer höheren Priorität werden mit geringerer Wahrscheinlichkeit verzögert:

- **0** — Niedrigste Priorität, wird am ehesten verzögert
- **500** — Standardpriorität
- **1000** — „Nicht abgleichen" — der Vorgang wird nie durch den automatischen Abgleich verzögert

> Setzen Sie die Priorität auf **1000** für Vorgänge, die nie vom automatischen Abgleich verschoben werden dürfen, wie Vorgänge, die an externe Termine oder feste Verpflichtungen gebunden sind.
