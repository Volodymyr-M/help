# Vorgangseigenschaften

Jeder Vorgang hat Eigenschaften, die steuern, wie er geplant wird, wie Kosten berechnet werden und wie er im Gantt-Diagramm angezeigt wird. Legen Sie diese im Dialog **Vorgangseigenschaften** fest.

## Dauer

Bei der Planung Ihres Projekts geben Sie Dauern als Schätzungen ein, d. h. die Dauer ist eine vernünftige Einschätzung, wie viel Zeit ein Vorgang für alle beteiligten Ressourcen in Anspruch nehmen wird.

Verwechseln Sie **Dauer** nicht mit **Arbeit**. Wenn beispielsweise drei Personen an Ihrem Vorgang arbeiten und ihn in einer Stunde abschließen, setzen Sie die **Dauer** des Vorgangs auf eine Stunde. Wenn diese drei Personen dem Vorgang zugewiesen sind, berechnet Ingantt die Eigenschaft **Arbeit** für Sie als drei Stunden.

Die Dauer kann über das Feld **Dauer** im Dialog **Vorgangseigenschaften** geändert werden.

Wenn Sie sich bei Ihrer Schätzung der Dauer noch nicht sicher sind, können Sie sie im Dialog **Vorgangseigenschaften** als **Schätzung** markieren. Dadurch wird bei der Dauer immer ein Fragezeichen („**?**") angezeigt. Das Aktivieren oder Deaktivieren dieser Option hat keinen Einfluss auf die Planung.

Wenn mindestens ein Teilvorgang eines Sammelvorgangs **Schätzung** aktiviert hat, wird die Dauer des Sammelvorgangs ebenfalls als **Schätzung** markiert und zeigt somit auch „**?**" an.

Die Dauer kann in Stunden, Tagen, Wochen oder Monaten angegeben werden. Standardmäßig bedeutet „1 Tag" 8 Stunden, „1 Woche" 5 Tage (40 Stunden) und „1 Monat" 20 Tage. Diese Standardwerte können auf dem Reiter **Dauer** des Dialogs **Projekteigenschaften** geändert werden.

Wenn Sie Ressourcenzuweisungen, Arbeit oder Dauer ändern, wird eine dieser Größen gemäß der [Vorgangsart](#typ-und-leistungsgesteuert) neu berechnet.

## Arbeit

Sobald einem Vorgang eine Arbeitsressource zugewiesen ist (z. B. eine Person, die den Vorgang ausführt), wird die Eigenschaft **Arbeit** des Vorgangs größer als 0. Sie zeigt die Zeit an, die alle Ressourcen für die Arbeit am Vorgang aufwenden werden. Wenn beispielsweise ein Vorgang mit einer **Dauer** von 5 Stunden 2 zugewiesene Ressourcen hat, die daran arbeiten, beträgt die **Arbeit** des Vorgangs 10 Stunden.

Die Arbeit kann über das Feld **Arbeit** im Dialog **Vorgangseigenschaften** geändert werden.

Genau wie die Dauer kann die Arbeit in Stunden, Tagen, Wochen oder Monaten angegeben werden, wobei die Definitionen auf dem Reiter **Dauer** des Dialogs **Projekteigenschaften** verwendet werden. Das Standard-Anzeigeformat für Arbeit kann auf dem Reiter **Zeit** geändert werden.

Wenn Sie Ressourcenzuweisungen, Arbeit oder Dauer ändern, wird eine dieser Größen gemäß der [Vorgangsart](#typ-und-leistungsgesteuert) neu berechnet.

## Stichtag

Manchmal müssen Sie sicherstellen, dass ein Vorgang bis zu einem bestimmten Tag abgeschlossen ist, was üblicherweise als Stichtag bezeichnet wird.

Der Stichtag eines Vorgangs kann über das Feld **Stichtag** im Dialog **Vorgangseigenschaften** festgelegt werden.

Stichtage dienen nur zu Ihrer Information und beeinflussen die Planung nicht.

Stichtage werden im Gantt-Diagramm als spezielle Symbole angezeigt.

> Wenn Ihr Terminplan zeigt, dass ein Vorgang später als sein festgelegter Stichtag endet, zeigt Ingantt ein Symbol in der Vorgangsliste an und zählt solche Vorgänge im Navigationsmenü.

![Stichtag](/images/building-schedule/tasks/deadline.png)

> Sie können einen Stichtag für das gesamte Projekt festlegen, indem Sie den Stichtag für den Projektsammelvorgang setzen. Stellen Sie dabei sicher, dass der Projektsammelvorgang im Dialog **Optionen** als sichtbar eingestellt ist.

## Meilenstein

Jeder Vorgang kann als Meilenstein markiert werden, indem das Kontrollkästchen **Meilenstein** im Dialog **Vorgangseigenschaften** aktiviert wird. Dies ändert weder seine Dauer noch beeinflusst es die Planung, aber der Vorgang wird im Gantt-Diagramm als Symbol dargestellt.

![Meilenstein](/images/building-schedule/tasks/milestone.png)

Wenn Sie 0 als **Dauer** eines Vorgangs angeben, wird der Vorgang automatisch als **Meilenstein** markiert, sobald Sie die Änderung speichern.

## Typ und Leistungsgesteuert

Arbeitsressourcenzuweisungen (bzw. Einheiten zugewiesener Arbeitsressourcen), Arbeit und Dauer hängen voneinander ab. Wenn Sie eine dieser Größen ändern, müssen die anderen entsprechend neu berechnet werden. Die Eigenschaft **Typ** des Vorgangs (zusammen mit dem Flag **Leistungsgesteuert**) legt fest, welche der beiden verbleibenden Eigenschaften unverändert bleibt, sodass nur eine davon neu berechnet wird.

Beispielsweise können Sie **Typ** auf **Feste Einheiten** (den Standardwert) setzen. In diesem Fall wird bei einer Änderung der Dauer die Arbeit automatisch neu berechnet.

| Typ                | Beschreibung                                            |
|--------------------|---------------------------------------------------------|
| **Feste Einheiten**| Bei Änderung der Dauer: Arbeit wird neu berechnet.      |
|                    | Bei Änderung der Arbeit: Dauer wird neu berechnet.      |
|                    | Bei Änderung der Einheiten:                             |
|                    | - Wenn **Leistungsgesteuert** aktiviert ist: Dauer wird neu berechnet. |
|                    | - Wenn **Leistungsgesteuert** nicht aktiviert ist: Arbeit wird neu berechnet. |
| **Feste Dauer**    | Bei Änderung der Dauer: Arbeit wird neu berechnet.      |
|                    | Bei Änderung der Arbeit: Einheiten werden neu berechnet.|
|                    | Bei Änderung der Einheiten: Arbeit wird neu berechnet.  |
| **Feste Arbeit**   | Bei Änderung der Dauer: Einheiten werden neu berechnet. |
|                    | Bei Änderung der Arbeit: Dauer wird neu berechnet.      |
|                    | Bei Änderung der Einheiten: Dauer wird neu berechnet.   |

Mit anderen Worten: Die Eigenschaft **Typ** ermöglicht es Ihnen, eine der drei Größen einzufrieren, während das Flag **Leistungsgesteuert** festlegt, ob die Arbeit unter den verbleibenden zwei unverändert bleiben soll.

> **Typ** und **Leistungsgesteuert** sind nicht verfügbar für [Sammelvorgänge](/de/building-schedule/tasks/index.md#sammelvorgänge), die immer Feste Dauer und nicht Leistungsgesteuert sind.

## Notizen

Sie können jedem Vorgang beliebigen Text hinzufügen, indem Sie das Feld **Notizen** auf dem Reiter **Notizen** des Dialogs **Vorgangseigenschaften** ausfüllen. Verwenden Sie es für Vorgangsbeschreibungen, Kontaktinformationen, Ideen oder andere Textdaten.

Wenn bei einem Vorgang das Feld **Notizen** ausgefüllt ist, wird ein spezielles Symbol für den Vorgang in der Vorgangsliste angezeigt. Unter Windows, macOS und im Web zeigt das Überfahren des Symbols mit der Maus die Notiz an. Auf Mobilgeräten öffnen Sie den Dialog **Vorgangseigenschaften**, um die vollständige Notiz anzuzeigen.

## Hyperlink

Sie können Ihrem Vorgang eine URL über das Feld **Hyperlink** auf dem Reiter **Notizen** des Dialogs **Vorgangseigenschaften** anhängen. Vorgänge mit einem Hyperlink zeigen ein Link-Symbol in der Vorgangsliste an. Durch Klicken auf das Link-Symbol wird die URL in Ihrem Browser geöffnet.

## Balken ausblenden und Rollup

Auf dem Reiter **Visuell** des Dialogs **Vorgangseigenschaften**:

- **Balken ausblenden** — Blendet den Balken des Vorgangs im Gantt-Diagramm aus, wobei die Zeile in der Vorgangsliste sichtbar bleibt. Der unsichtbare Balkenbereich reagiert weiterhin auf Klicks und Kontextmenüs.
- **Rollup** — Zeigt den Balken des Teilvorgangs in der Zeile seines übergeordneten Sammelvorgangs im Gantt-Diagramm an. Dies bietet eine kompakte Ansicht, wenn Sammelvorgänge zugeklappt sind.

Diese Optionen können auch über das Untermenü **Bearbeiten > Anzeige** oder das Rechtsklick-Kontextmenü umgeschaltet werden.
