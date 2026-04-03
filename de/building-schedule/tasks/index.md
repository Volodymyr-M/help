# Vorgänge

Jeder Terminplan beginnt mit Vorgängen. Definieren Sie, was erledigt werden muss, wie lange es dauern wird und wann es fällig ist. Sobald Ihre Vorgänge eingetragen sind, nimmt Ihre Projektzeitleiste im Gantt-Diagramm Gestalt an.

## Sammelvorgänge

Sammelvorgänge helfen Ihnen, Ihre Vorgänge zu organisieren, indem sie diese gruppieren. Um einen Sammelvorgang zu erstellen, wählen Sie die Vorgänge aus, die Sie gruppieren möchten, und klicken Sie dann auf die Schaltfläche **Einzug vergrößern** in der Symbolleiste, um sie einzurücken. Um einen Sammelvorgang wieder in einen regulären Vorgang umzuwandeln, wählen Sie alle seine Teilvorgänge aus und klicken Sie auf die Schaltfläche **Einzug verkleinern**, um die Einrückung zu entfernen.

Da Sammelvorgänge andere Vorgänge gruppieren, werden ihre Eigenschaften von ihren Teilvorgängen abgeleitet und nicht direkt festgelegt. Ihre Dauer stellt die Gesamtdauer aller Vorgänge innerhalb der Gruppe dar: Das Enddatum eines Sammelvorgangs ist das späteste Enddatum seiner Teilvorgänge.

Ein Sammelvorgang zeigt außerdem den Gesamtfertigstellungsgrad, die Gesamtkosten und die Gesamtarbeit seiner Teilvorgänge an.

Im Gantt-Diagramm werden Sammelvorgänge als schwarze Balken dargestellt. In der Vorgangsliste können Sie Sammelvorgänge **aufklappen** oder **zuklappen**, um ihre Teilvorgänge ein- oder auszublenden.

![Sammelvorgang](/images/building-schedule/tasks/summary.png)

## Projektsammelvorgang

In Ingantt gibt es immer einen Sammelvorgang für Ihr gesamtes Projekt. Dieser Vorgang hat die Nummer 0 und steht über allen Ihren Vorgängen.

Der Projektsammelvorgang ist möglicherweise standardmäßig nicht sichtbar. Um dies zu ändern, aktivieren Sie **Projektsammelvorgang anzeigen** im Menü **Ansicht** oder im Dialog **Optionen**.

Wie jeder andere Sammelvorgang zeigt der Projektsammelvorgang die Gesamtdaten seiner Teilvorgänge an. Da alle Vorgänge in Ihrem Terminplan seine Teilvorgänge sind, zeigt der Projektsammelvorgang die Gesamtdaten Ihres gesamten Projekts an.

Der Name des Projektsammelvorgangs entspricht dem Namen des Projekts.

![Projektsammelvorgang](/images/building-schedule/tasks/root_summary.png)

## Manuell geplante Vorgänge

Standardmäßig werden alle Vorgänge in Ingantt **automatisch geplant** — ihre Start- und Endtermine werden vom Planungsalgorithmus auf Basis von Abhängigkeiten, Einschränkungen und Kalendern berechnet.

Sie können einen Vorgang über das Kontrollkästchen im Dialog **Vorgangseigenschaften** in den Modus **Manuell geplant** umschalten. Wenn ein Vorgang manuell geplant wird:

- Er wird **nicht vom Planungsalgorithmus beeinflusst** — seine Termine werden von Ihnen festgelegt
- Sie können **Anfang**- und **Ende**-Termine über die Datumsfelder oder die Datumsauswahl eingeben
- Sie können **Textwerte** (wie „TBD", „Anfang März" oder „2–3 Wochen") anstelle tatsächlicher Termine eingeben, wenn Sie sich über den Zeitpunkt noch nicht sicher sind
- Ein Nadelsymbol wird für manuell geplante Vorgänge in der Vorgangsliste angezeigt

> Verwenden Sie manuell geplante Vorgänge als Platzhalter, wenn der genaue Zeitpunkt unbekannt ist oder wenn Termine durch externe Faktoren festgelegt werden.

## Wiederkehrende Vorgänge

Wiederkehrende Vorgänge stellen Aktivitäten dar, die sich nach einem regelmäßigen Zeitplan wiederholen, wie tägliche Stand-up-Meetings, wöchentliche Reviews oder monatliche Berichte. Sie können wiederkehrende Vorgänge über das Menü **Einfügen** erstellen, indem Sie **Wiederkehrenden Vorgang hinzufügen** wählen.

Beim Erstellen eines wiederkehrenden Vorgangs legen Sie Folgendes fest:

- **Dauer des Vorkommens** — Die Dauer jedes einzelnen Vorkommens
- **Wiederholungsmuster** — Tägliches, wöchentliches, monatliches oder jährliches Muster mit einem Startdatum und einer Endbedingung (kein Ende, Ende bis Datum oder Ende nach N Vorkommnissen)
- **Nur Arbeitstage** — Beschränkt Vorkommnisse auf Arbeitstage

Wiederkehrende Vorgänge erscheinen als Sammelvorgang, der die einzelnen Vorkommnisse enthält. Jedes Vorkommnis kann unabhängig abgeschlossen werden. Beim Löschen eines wiederkehrenden Vorgangs werden Sie gefragt, ob Sie die gesamte Serie oder nur das ausgewählte Vorkommnis löschen möchten.

## Geteilte Vorgänge

Ein Vorgang kann in nicht zusammenhängende Teile aufgeteilt werden, die Unterbrechungen in der Arbeit darstellen. Um einen Vorgang zu teilen, wählen Sie ihn aus und wählen Sie **Vorgang teilen** aus der Symbolleiste oder dem Rechtsklick-Kontextmenü. Der Dialog **Vorgang teilen** bietet zwei Modi:

- **Nach Dauer** — Geben Sie einen Versatzwert vom Vorgangsstart und eine Teilungsdauer an
- **Nach Datum** — Geben Sie die Stopp- und Wiederaufnahmedaten für die Teilung an

Geteilte Vorgänge werden im Gantt-Diagramm als separate Balken mit gepunkteten Verbindungslinien zwischen den Teilen angezeigt. Jeder geteilte Teil hat einen eigenen Größenänderungsgriff, und wenn ein Teil so verschoben wird, dass er einen benachbarten Teil berührt, werden die beiden zusammengeführt. Um eine Teilung zu entfernen, wählen Sie den Vorgang aus und wählen Sie **Teilung entfernen** aus der Symbolleiste.

## Inaktive Vorgänge

Ein Vorgang kann als **inaktiv** markiert werden, indem das Kontrollkästchen **Aktiv** auf dem Reiter **Allgemein** des Dialogs **Vorgangseigenschaften** deaktiviert wird, oder über die Option **Vorgang deaktivieren** im Untermenü **Bearbeiten > Anzeige** oder im Rechtsklick-Kontextmenü.

Inaktive Vorgänge sind:

- Von der Planung ausgeschlossen — sie beeinflussen weder den kritischen Pfad noch andere Vorgänge
- Von den Zusammenfassungen des Sammelvorgangs für Dauer, Arbeit, Kosten und % Complete ausgeschlossen
- Von der Erkennung von Ressourcenüberlastung und der automatischen Kapazitätsabgleichung ausgeschlossen
- Von Earned-Value-Berechnungen ausgeschlossen

Inaktive Vorgänge bleiben in der Vorgangsliste und im Gantt-Diagramm sichtbar, werden jedoch mit reduzierter Deckkraft und durchgestrichenem Text angezeigt. Ihre Termine werden als Referenz beibehalten.

Das Deaktivieren eines Sammelvorgangs wirkt sich auf alle seine Teilvorgänge aus. Das Reaktivieren eines Teilvorgangs reaktiviert bei Bedarf automatisch seinen übergeordneten Sammelvorgang. Vorgänge mit tatsächlichem Fortschritt (% Complete > 0) können nicht deaktiviert werden.

> Verwenden Sie inaktive Vorgänge, um „Was-wäre-wenn"-Szenarien in Ihrem Terminplan zu behalten, ohne den aktiven Plan zu beeinflussen.
