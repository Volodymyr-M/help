# Kosten einrichten

Legen Sie Fixkosten für Vorgänge und Sätze für Ressourcen fest. Ingantt verwendet diese zusammen mit dem Terminplan, um die Kosten jedes Vorgangs und des gesamten Projekts zu berechnen.

## Vorgangs-Fixkosten

Sie können Kosten für einen Vorgang unabhängig von seinen Ressourcen festlegen, indem Sie das Feld **Fixkosten** auf dem Reiter **Kosten und EV** des Dialogs **Vorgangseigenschaften** ausfüllen. Verwenden Sie dies zum Beispiel, wenn jemand bereits eine Gesamtkostenschätzung für den Vorgang geliefert hat oder wenn der Vorgang zusätzliche Kosten über seine Ressourcenkosten hinaus hat.

> Wenn Sie die gleichen Fixkosten mehreren Vorgängen zuweisen müssen, erwägen Sie, eine Kostenressource zu erstellen und sie diesen Vorgängen zuzuweisen. Wenn sich die Kosten in Zukunft ändern, müssen Sie sie nur an einer Stelle aktualisieren.

## Arbeitsressourcenkosten

**Arbeits**-Ressourcen sind der einzige Typ mit einem Kalender, daher werden ihre Kosten pro Stunde, pro Tag, pro Woche oder pro Monat angegeben (siehe [Stunden pro Tag, Tage pro Woche, Tage pro Monat](/de/setting-up-project/project/index.md#stunden-pro-tag-tage-pro-woche-tage-pro-monat)).

Wenn Sie zum Beispiel eine Arbeitsressource mit einem **Standardsatz** von 100 € pro Stunde einem Vorgang mit einer 5-stündigen **Dauer** zuweisen, werden 500 € zu den **Kosten** des Vorgangs addiert.

Arbeitsressourcen unterstützen auch einen **Überstundensatz** für Arbeit über die regulären Kalenderzeiten hinaus. Die Gesamtkosten werden wie folgt berechnet:

> **Kosten = Reguläre Arbeit × Standardsatz + Überstundenarbeit × Überstundensatz + Kosten pro Einsatz**

Wenn eine Arbeitsressource einem Vorgang zugewiesen wird, können Sie den **Einheiten**-Wert als eine vom Standard abweichende Zahl angeben. Dies beeinflusst die Kostenberechnung. Wenn zum Beispiel **Einheiten** 50 % beträgt, sind die berechneten Kosten für die Ressource im Vorgang halb so hoch wie bei 100 % Einheiten.

## Materialressourcenkosten

Für **Material**-Ressourcen werden die Kosten pro Einheit angegeben, je nachdem, wie Sie die Einheit definieren. Es kann eine Gewichtseinheit (z. B. Pfund, Kilogramm, Tonne), eine Längen- oder Volumeneinheit (z. B. Fuß, Meter, Meile, Gallone, Liter) oder eine andere Einheit (z. B. Container, Karton, Stück, Quadratmeter) sein. Sie können im Dialog **Ressourceneigenschaften** ein **Materialbezeichnung** festlegen, um die Einheit zu beschreiben.

Materialressourcen unterstützen zwei Verbrauchsmodi:
- **Fest** (Standard) — Eine Gesamtmenge unabhängig von der Vorgangsdauer (z. B. 5 Tonnen Zement)
- **Variabel** — Ein Satz pro Zeiteinheit, der mit der Vorgangsdauer skaliert (z. B. 10 Liter Kraftstoff pro Tag)

Wenn zum Beispiel in Ihrem Projekt Kraftstoff verwendet wird, können Sie eine „Kraftstoff"-Materialressource hinzufügen und die Kosten pro Gallone im Dialog **Ressourceneigenschaften** angeben. Bei der Zuweisung der Ressource zu einem Vorgang geben Sie dann die Anzahl der Gallonen als **Einheiten** an, und Ingantt addiert die berechneten Kraftstoffkosten zu den **Kosten** des Vorgangs.

## Kostenressource

Eine **Kosten**-Ressource ist ein fester Aufwand, den Sie möglicherweise mehreren Vorgängen zuweisen möchten. Kostenressourcen unterstützen zuweisungsbezogene Kostenwerte — dieselbe Kostenressource kann unterschiedliche Beträge bei verschiedenen Vorgangszuweisungen haben (z. B. „Reise" = 800 € bei Vorgang A und 1.200 € bei Vorgang B).

Verwenden Sie diesen Typ für feste Ausgaben, die normalerweise nicht in Maßeinheiten angegeben werden, wie Installationskosten. Wenn mehrere Vorgänge aus dem gleichen Grund die gleichen Fixkosten haben, erstellen Sie eine Kostenressource und weisen Sie sie all diesen Vorgängen zu, anstatt das Feld **Fixkosten** für jeden Vorgang einzeln auszufüllen.

## Kostensatztabellen

Jede Arbeits- und Materialressource unterstützt bis zu 5 Kostensatztabellen (A bis E), jede mit mehreren Zeilen, die zu unterschiedlichen Zeitpunkten in Kraft treten. Dies ermöglicht es Ihnen, Satzänderungen über die Zeit zu modellieren oder verschiedene Satzsätze für verschiedene Arbeitsarten zu pflegen.

Kostensatztabellen werden auf dem Reiter **Kosten** des Dialogs **Ressourceneigenschaften** konfiguriert. Bei der Zuweisung einer Ressource zu einem Vorgang können Sie im Dialog **Ressourcenzuweisung bearbeiten** auswählen, welche Kostensatztabelle verwendet werden soll.

## Kosten pro Einsatz

Ressourcen unterstützen ein Feld **Kosten pro Einsatz** — eine Pauschalgebühr, die jedes Mal berechnet wird, wenn die Ressource einem Vorgang zugewiesen wird, unabhängig von der geleisteten Arbeit. Bei Arbeitsressourcen werden die **Kosten pro Einsatz** mit den Zuweisungseinheiten multipliziert (z. B. 200 % Einheiten bedeutet, dass die Kosten pro Einsatz zweimal berechnet werden). **Kosten pro Einsatz** fallen immer zu Beginn des Vorgangs an.

## Kostenabgrenzung

Die Einstellung **Kostenabgrenzung** steuert, wann Kosten als Ist-Kosten erfasst werden, während die Arbeit fortschreitet:

| Abgrenzung | Wann Kosten erfasst werden |
|---------|--------------------------|
| **Anfang** | Volle Kosten, sobald Fortschritt verzeichnet wird (% abgeschlossen > 0 %) |
| **Anteilig** | Proportional zum Fertigstellungsgrad (z. B. 50 % abgeschlossen = 50 % der Kosten) |
| **Ende** | Volle Kosten erst, wenn der Vorgang 100 % abgeschlossen erreicht |

Ressourcen haben eine **Kostenabgrenzung**-Einstellung auf dem Reiter **Kosten** des Dialogs **Ressourceneigenschaften**. Vorgänge haben eine **Fixkosten-Abgrenzung**-Einstellung auf dem Reiter **Kosten und EV** des Dialogs **Vorgangseigenschaften**. Das Projekt hat eine **Standard-Fixkosten-Abgrenzung**-Einstellung auf dem Reiter **Sonstiges** des Dialogs **Projekteigenschaften**.
