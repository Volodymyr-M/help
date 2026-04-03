# Kosten verstehen

Weisen Sie Vorgängen und Ressourcen Kosten zu, um den Gesamtpreis Ihres Projekts zu sehen. Der Projektsammelvorgang zeigt die Gesamtsumme — vergleichen Sie sie mit Budgetressourcen, um zu wissen, ob Ihr Projekt in das genehmigte Budget passt.

## Wie Vorgangskosten berechnet werden

Die Kosten jedes Vorgangs sind eine Kombination aus seinen eigenen Fixkosten und den Kosten seiner zugewiesenen Ressourcen. Ingantt berechnet die Gesamtkosten jedes Vorgangs und zeigt sie in der Spalte **Kosten** in der Vorgangsliste an.

*Vorgangs-**Kosten** = **Fixkosten** des Vorgangs + Kosten der dem Vorgang zugewiesenen Ressourcen*

> Wenn Sie die Spalte **Kosten** in der Vorgangsliste nicht sehen, stellen Sie sicher, dass das Flag **Kostenspalte** auf dem Reiter **Vorgangsspalten** des Dialogs **Optionen** aktiviert ist.

## Sammelvorgangskosten

Jeder [Sammelvorgang](/de/building-schedule/tasks/index.md#sammelvorgänge) zeigt in seinem Feld **Kosten** die Gesamtkosten aller seiner Teilvorgänge an.

Wie ein regulärer Vorgang kann ein Sammelvorgang jedoch [zugewiesene Ressourcen](/de/building-schedule/assignments/index.md#ressourcenzuweisungen-und-einheiten) und **Fixkosten** haben. Diese werden zusätzlich zu den Gesamtkosten der Teilvorgänge hinzuaddiert und erhöhen die **Kosten** des Sammelvorgangs.

*Sammelvorgang-**Kosten** = Gesamtkosten aller Teilvorgänge + **Fixkosten** des Sammelvorgangs + Kosten der dem Sammelvorgang zugewiesenen Ressourcen*

Verwenden Sie den [Projektsammelvorgang](/de/building-schedule/tasks/index.md#projektsammelvorgang), um die Gesamtkosten Ihres gesamten Projekts einzusehen und zu verwalten.

## Budgetressourcen

Eine Ressource kann im Dialog **Ressourceneigenschaften** als **Budget**-Ressource markiert werden. Budgetressourcen stellen insgesamt zugewiesene Budgetbeträge auf Projektebene dar und können nur dem [Projektsammelvorgang](/de/building-schedule/tasks/index.md#projektsammelvorgang) zugewiesen werden.

Budgetressourcen sind ausgenommen von:

- Planung
- Kostensummen
- Überlastungserkennung
- Ressourcenabgleich

Sie bieten eine Top-Down-Budgetverfolgung, die von der Bottom-Up-Kostenberechnung getrennt ist.

## Währung

Wenn Ihr Projekt eine andere Währung als den Ingantt-Standard verwendet, können Sie diese auf dem Reiter **Regional** des Dialogs **Projekteigenschaften** ändern. Geben Sie die Währung als Symbol (z. B. €), Abkürzung (EUR) oder vollständigen Namen (Euro) an.

Auf demselben Reiter können Sie auch die **Währungsposition** angeben — vor oder nach dem Wert, mit oder ohne Leerzeichen.

> Wenn Sie die Währung ändern, werden Kostenwerte nicht umgerechnet.
