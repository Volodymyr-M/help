# Projekteigenschaften

Konfigurieren Sie das Startdatum Ihres Projekts, die Arbeitszeiten und die Planungsregeln. Diese Einstellungen bestimmen, wie jeder Vorgang in Ihrem Projekt berechnet und angezeigt wird.

## Projektname

Legen Sie Ihren Projektnamen im Feld **Name** auf dem Reiter **Allgemein** des Dialogs **Projekteigenschaften** fest. Dieser Name wird auch vom [Projektsammelvorgang](/de/building-schedule/tasks/index.md#projektsammelvorgang) Ihres Projekts verwendet.

Im Web und unter Windows öffnet ein Klick auf den Projektnamen in der Kopfzeile ebenfalls den Dialog **Projekteigenschaften**.

## Startdatum und Planungsrichtung

Standardmäßig wird Ihr Projekt vom Startdatum aus geplant, das Sie im Feld **Projektstartdatum** des Dialogs **Projekteigenschaften** festlegen können.

Um Ihr Projekt stattdessen vom Enddatum aus zu planen, wechseln Sie zu **Vom Endtermin planen** im Dialog **Projekteigenschaften** und legen Sie den **Projektendtermin** fest.

Der Reiter **Allgemein** des Dialogs **Projekteigenschaften** zeigt sowohl das Startdatum als auch das Enddatum an. Bei der Planung vom Startdatum ist das Startdatum bearbeitbar und das Enddatum zeigt den berechneten Wert an. Bei der Planung vom Enddatum ist das Enddatum bearbeitbar und das Startdatum zeigt den berechneten Wert an.

Beachten Sie:

- Bei Projekten, die vom Startdatum geplant werden, ist die Standard-[Einschränkung](/de/building-schedule/constraints/index.md#einschränkungen) für neu erstellte Vorgänge **So früh wie möglich**.
- Bei Projekten, die vom Enddatum geplant werden, ist die Standardeinschränkung für neu erstellte Vorgänge **So spät wie möglich**.

Beim Wechsel zwischen der Planung vom Start- und Enddatum werden die Einschränkungen bestehender Vorgänge nicht geändert, mit Ausnahme von [Sammelvorgängen](/de/building-schedule/tasks/index.md#sammelvorgänge), einschließlich des [Projektsammelvorgangs](/de/building-schedule/tasks/index.md#projektsammelvorgang).

Für Sammelvorgänge:

- Die Einschränkung **So früh wie möglich** wird beim Wechsel von der Planung vom Start- zum Enddatum durch **So spät wie möglich** ersetzt.
- Die Einschränkung **So spät wie möglich** wird beim Wechsel von der Planung vom End- zum Startdatum durch **So früh wie möglich** ersetzt.

## Erster Wochentag

Je nach Land kann eine Woche am Sonntag oder Montag beginnen. Sie können das Feld **Erster Wochentag** auf dem Reiter **Regional** des Dialogs **Projekteigenschaften** aktualisieren, um die Standardeinstellung für Ihr Projekt zu ändern.

Die Änderung dieser Eigenschaft aktualisiert die Benutzeroberfläche, einschließlich des Gantt-Diagramms bei einigen Zoomstufen, beeinflusst aber nicht die Planung. Um den Terminplan entsprechend anzupassen, aktualisieren Sie Ihre [Kalender](/de/setting-up-project/calendars/index.md).

## Stunden pro Tag, Tage pro Woche, Tage pro Monat

In Ingantt können Sie [Dauer](/de/building-schedule/task-properties/index.md#dauer), [Arbeit](/de/building-schedule/task-properties/index.md#arbeit) oder [Verzögerung](/de/building-schedule/dependencies/index.md#verzögerung-und-vorlaufzeit) in Stunden, Tagen, Wochen und Monaten angeben.

Zum Beispiel bedeutet das Setzen der Dauer eines Vorgangs auf 2 Tage mit den Standardeinstellungen 16 Stunden.

Standardmäßig:

- 1 Tag entspricht 8 Stunden.
- 1 Woche entspricht 5 Tagen (40 Stunden).
- 1 Monat entspricht 20 Tagen (160 Stunden).

Sie können diese Standardeinstellungen auf dem Reiter **Dauer** des Dialogs **Projekteigenschaften** ändern.

> Die meisten Projekte sollten die Standardwerte verwenden. Ändern Sie diese Einstellungen nur, wenn Ihr Projekt eine spezifische Anforderung an andere Umrechnungen hat.

## Anzeige von Dauer und Arbeit

Standardmäßig werden Dauern in Tagen und Arbeitswerte in Stunden angezeigt. Sie können das Anzeigeformat für beide auf dem Reiter **Zeit** des Dialogs **Projekteigenschaften** ändern. Verfügbare Einheiten sind Minuten, Stunden, Tage, Wochen und Monate.

Wenn Sie eines der Formate ändern, werden alle vorhandenen Werte aktualisiert und in der neuen Einheit angezeigt.

## Standard-Start- und Endzeit

Die Standard-Startzeit (8:00 Uhr) und Endzeit (17:00 Uhr) steuern, wann die Arbeit an jedem Tag beginnt und endet. Sie können diese auf dem Reiter **Zeit** des Dialogs **Projekteigenschaften** ändern.

## Planungsoptionen

Der Reiter **Planung** des Dialogs **Projekteigenschaften** enthält Optionen, die steuern, wie Vorgänge geplant werden:

- **Einschränkungstermine einhalten** — Wenn aktiviert, haben halbflexible Einschränkungen (wie Anfang nicht später als) Vorrang vor Abhängigkeiten, was möglicherweise negativen Puffer erzeugt. Wenn deaktiviert (die Standardeinstellung), haben Abhängigkeiten immer Vorrang.
- **Laufende Vorgänge teilen** — Wenn aktiviert (die Standardeinstellung), kann der Planer automatisch Vorgänge teilen, die Fortschritt außerhalb der Reihenfolge haben.
- **Abgeschlossene/verbleibende Teile verschieben** — Vier Optionen, die steuern, wie abgeschlossene und verbleibende Arbeitsanteile relativ zum Statusdatum neu positioniert werden. Diese helfen, Ihren Terminplan aktuell zu halten, indem abgeschlossene Arbeit zum Statusdatum zurück oder verbleibende Arbeit nach vorne verschoben wird.
