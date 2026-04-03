# Kalender

Feiertage, Urlaub, halbe Tage, Nachtschichten — Ihr Terminplan muss widerspiegeln, wann tatsächlich gearbeitet wird. Richten Sie Kalender ein, damit Ingantt arbeitsfreie Zeit überspringt und Ihnen realistische Termine liefert.

Kalender definieren Tage und Zeiten, an denen gearbeitet werden kann. Kalender verwenden zwei Arten von Daten:

- **Wochentage**: Arbeitszeit, die für jeden Wochentag festgelegt wird — definiert den typischen, routinemäßigen Zeitplan.
- **Ausnahmen**: Tage, an denen nicht gearbeitet wird oder zu anderen Zeiten als im Wochentagsplan definiert.

## Projektkalender

Ein Projekt hat einen **Kalender**, der im Dialog **Projekteigenschaften** festgelegt wird. Dieser Kalender definiert, wie Vorgänge geplant werden, die keinen Arbeitsressourcen zugewiesen sind. Arbeitsfreie Tage wie Wochenenden werden ebenfalls basierend auf diesem Kalender im Gantt-Diagramm angezeigt.

## Ressourcenkalender

Jede [Arbeitsressource](/de/building-schedule/resources/index.md#ressourcentyp) hat einen Kalender, der im Feld **Basiskalender** des Dialogs **Ressourceneigenschaften** festgelegt wird. Sobald die Arbeitsressource einem Vorgang [zugewiesen](/de/building-schedule/assignments/index.md#ressourcenzuweisungen-und-einheiten) ist, beeinflusst ihr Kalender die Planung des Vorgangs.

Wenn einem Vorgang mehrere Arbeitsressourcen zugewiesen sind, werden ihre Kalender **geschnitten** — das bedeutet, dass Arbeit nur zu Zeiten geplant wird, zu denen **alle** zugewiesenen Ressourcen verfügbar sind. Wenn zum Beispiel Ressource A Mo-Mi arbeitet und Ressource B Mi-Fr, wird ein beiden zugewiesener Vorgang nur mittwochs geplant.

> Wenn mehrere Ressourcen einen ähnlichen Arbeitsplan haben, erstellen Sie einen einzelnen Kalender und weisen Sie ihn allen zu. Sie können trotzdem Ausnahmen für jede Ressource separat in den **Ressourceneigenschaften** angeben — zum Beispiel Urlaub oder angepasste Arbeitszeiten an bestimmten Tagen.

## Vorgangskalender

Jeder Vorgang hat eine **Kalender**-Eigenschaft im Dialog **Vorgangseigenschaften**, die standardmäßig auf **KEINE** gesetzt ist. Wenn auf **KEINE** gesetzt:

- Wenn einem Vorgang keine Arbeitsressourcen zugewiesen sind, wird der Vorgang gemäß dem Projektkalender geplant.
- Wenn einem Vorgang Arbeitsressourcen zugewiesen sind, wird der Vorgang gemäß deren Kalendern geplant.

Wenn die **Kalender**-Eigenschaft des Vorgangs auf einen Kalender statt auf **KEINE** gesetzt ist:

- Wenn einem Vorgang keine Arbeitsressourcen zugewiesen sind, wird der Vorgang gemäß dem angegebenen Kalender geplant.
- Wenn einem Vorgang Arbeitsressourcen zugewiesen sind, wird der Vorgang gemäß der **Schnittmenge** des Vorgangskalenders und der Ressourcenkalender geplant — Arbeit wird nur zu Zeiten geplant, die sowohl im Vorgangskalender als auch in allen Ressourcenkalendern als Arbeitszeit gelten. Um den Vorgangskalender allein zu verwenden und Ressourcenkalender vollständig zu ignorieren, aktivieren Sie das Flag **Ressourcenkalender ignorieren**.

## Vordefinierte Kalender

Ingantt hat 3 vordefinierte Kalender, von denen einer (**Standard**) dem Projekt standardmäßig zugewiesen ist.

| Kalender | Beschreibung                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| **Standard**     | Arbeit wird montags bis freitags, 8:00 bis 17:00 Uhr mit einer 1-stündigen Pause (12:00 bis 13:00 Uhr) erledigt.       |
| **Nachtschicht**  | Arbeit wird von Montagnacht bis Samstagmorgen, 23:00 bis 8:00 Uhr mit einer 1-stündigen Pause (3:00 bis 4:00 Uhr) erledigt. |
| **24 Stunden**     | Arbeit wird 24 Stunden am Tag, jeden Tag erledigt.                                                         |

Sie können jeden der vordefinierten Kalender über den Dialog **Kalendereigenschaften** bearbeiten oder über den Dialog **Kalender hinzufügen** eigene Kalender basierend auf ihnen erstellen.

## Arbeitswochen

Arbeitswochen ermöglichen es Ihnen, datumsbereichsspezifische Änderungen am Wochenplan zu definieren. Zum Beispiel könnten Sie einen Zeitraum haben, in dem alle 4-Stunden-Tage statt der üblichen 8 Stunden arbeiten, oder einen Zeitraum, in dem Samstag ein Arbeitstag wird.

Arbeitswochen werden auf dem Reiter **Arbeitswochen** des Dialogs **Kalendereigenschaften** konfiguriert. Jede Arbeitswoche hat einen Namen, ein Start- und Enddatum sowie Arbeitszeitdefinitionen pro Wochentag.

> Kalenderausnahmen haben Vorrang vor Arbeitswochen, die wiederum Vorrang vor dem Standard-Wochentagsplan haben.

## Kalenderausnahmen

Kalenderausnahmen sind Tage, an denen die Arbeit vom regulären Wochentagsplan abweicht — einschließlich arbeitsfreier Tage.

Kalenderausnahmen können angegeben werden:

- Im Dialog **Ressourceneigenschaften** für eine bestimmte Ressource.
- In den **Kalendereigenschaften** für einen bestimmten Kalender, damit Projekte, Ressourcen oder Vorgänge, die diesen Kalender verwenden, diese Ausnahme haben.

Wenn Sie zum Beispiel einen Urlaub für eine Person konfigurieren möchten, fügen Sie ihn als Ausnahme für diese Ressource hinzu. Wenn Sie einen Feiertag für alle konfigurieren möchten, fügen Sie ihn als Ausnahme zu einem Kalender hinzu, den alle verwenden.

Beim Hinzufügen oder Bearbeiten von Kalenderausnahmen geben Sie Arbeitszeiträume für die Ausnahme an. Wenn Sie keine angeben, hat die Ausnahme keine Arbeitszeit, was bedeutet, dass sie einen arbeitsfreien Tag definiert.

Jede Ausnahme kann einen beschreibenden **Namen** erhalten (wie „Weihnachtsfeiertag" oder „Büro geschlossen"), der in der Ausnahmeliste angezeigt wird.

### Wiederkehrende Ausnahmen

Kalenderausnahmen können so eingestellt werden, dass sie einem Muster folgen, anstatt nur ein einzelnes Datum zu betreffen. Verfügbare Wiederholungsmuster umfassen:

- **Täglich** — Alle N Tage oder alle N Werktage
- **Wöchentlich** — Alle N Wochen an angegebenen Wochentagen
- **Monatlich** — Nach Tag des Monats oder nach Position (z. B. zweiter Dienstag)
- **Jährlich** — Nach Datum oder nach Position (z. B. letzter Freitag im November)

Wiederkehrende Ausnahmen haben eine Endbedingung: kein Ende, Ende bis Datum oder Ende nach N Vorkommen.

## Leere und unvollständige Kalender

Wenn Sie einem Kalender keine Arbeitszeit hinzufügen, ist er leer und kann nicht für die Planung verwendet werden. Solche Kalender werden mit einem Warnsymbol in der Kalenderliste markiert, und die Anzahl solcher Kalender wird in der Navigationsleiste angezeigt.

Es gibt jedoch Situationen, in denen Ihr Kalender nicht leer ist, aber dennoch nicht genügend Arbeitszeit hat, um einen bestimmten Vorgang zu planen. Diese Situationen können erst erkannt werden, wenn die Planung durchgeführt wird.

Wenn Sie einem Projekt, einer Ressource oder einem Vorgang einen leeren Kalender — oder einen ohne ausreichende Arbeitszeit — zuweisen und die Planung nicht fortgesetzt werden kann, wird ein Fehler angezeigt und die letzte Aktion rückgängig gemacht.
