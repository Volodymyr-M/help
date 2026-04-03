# Ist-Werte

Während die Arbeit fortschreitet und Sie [% Abgeschlossen](/de/tracking/progress/index.md#-abgeschlossen) aktualisieren, berechnet Ingantt automatisch Ist- und Restwerte für Dauer, Arbeit, Kosten und Termine. Diese Felder zeigen Ihnen genau, was ausgegeben wurde, was übrig ist und wie das Projekt im Vergleich zum Plan steht.

Die häufigsten Ist- und Restspalten sind **Ist-Kosten** / **Verbleibende Kosten**, **Ist-Arbeit** / **Verbleibende Arbeit** und **Ist-Dauer** / **Verbleibende Dauer**. Wenn Sie diese Werte am [Projektsammelvorgang](/de/building-schedule/tasks/index.md#projektsammelvorgang) betrachten, sehen Sie die Gesamtwerte für das gesamte Projekt auf einen Blick — wie viel ausgegeben wurde, wie viel Aufwand investiert wurde und wie viel noch übrig ist. Stellen Sie sicher, dass der Projektsammelvorgang sichtbar ist: Aktivieren Sie **Projektsammelvorgang anzeigen** im Menü **Ansicht** oder im Dialog **Optionen**.

## Ist- und Restspalten anzeigen

Ist- und Restspalten sind standardmäßig nicht sichtbar. Um sie zur Vorgangsliste hinzuzufügen, öffnen Sie den Dialog **Optionen** (Reiter **Vorgangsspalten**) und aktivieren Sie die benötigten Spalten. Sie können auch mit der rechten Maustaste auf eine Spaltenüberschrift im Vorgangsraster klicken, um schnell auf die Spalteneinstellungen zuzugreifen.

### Dauer

- **Ist-Dauer** — Die bisher für einen Vorgang aufgewendete Arbeitszeit. Berechnet als Dauer des Vorgangs multipliziert mit seinem % Abgeschlossen.
- **Verbleibende Dauer** — Die noch benötigte Arbeitszeit, um den Vorgang abzuschließen: Dauer − Ist-Dauer.

Beispiel: Ein 10-Tage-Vorgang bei 40 % abgeschlossen hat eine Ist-Dauer von 4 Tagen und eine Verbleibende Dauer von 6 Tagen.

### Arbeit

- **Ist-Arbeit** — Der gesamte Aufwand (in Stunden), den Ressourcen für einen Vorgang aufgewendet haben. Wenn **Vorgangsstatus aktualisiert Ressourcenstatus** in den Projekteinstellungen aktiviert ist (die Standardeinstellung), wird die Ist-Arbeit proportional aktualisiert, wenn Sie % Abgeschlossen ändern.
- **Verbleibende Arbeit** — Der noch erforderliche Aufwand, um den Vorgang abzuschließen: Arbeit − Ist-Arbeit.

### Kosten

- **Ist-Kosten** — Die bisher angefallenen Kosten: die Summe der aufgelaufenen Fixkosten und aufgelaufenen Ressourcenkosten. Wie Kosten auflaufen, hängt von der **Kostenabgrenzung**-Einstellung jeder Ressource ab:
  - **Anfang** — Die gesamten Kosten werden erfasst, wenn der Ist-Anfang gesetzt wird.
  - **Anteilig** — Kosten werden proportional basierend auf dem tatsächlichen Arbeitsfortschritt erfasst.
  - **Ende** — Kosten werden erst erfasst, wenn der Vorgang 100 % abgeschlossen erreicht.
- **Verbleibende Kosten** — Das noch benötigte Budget, um den Vorgang abzuschließen: Gesamtkosten − Ist-Kosten.

### Termine

- **Ist-Anfang** — Das Datum, an dem die Arbeit tatsächlich begonnen hat. Wird automatisch auf das geplante Startdatum des Vorgangs gesetzt, wenn % Abgeschlossen über 0 % steigt.
- **Ist-Ende** — Das Datum, an dem die Arbeit tatsächlich abgeschlossen wurde. Wird automatisch auf das geplante Enddatum des Vorgangs gesetzt, wenn % Abgeschlossen 100 % erreicht.

### Überstunden

- **Ist-Überstundenarbeit** — Bereits geleistete Überstunden am Vorgang.
- **Verbleibende Überstundenarbeit** — Noch erwartete Überstunden.
- **Ist-Überstundenkosten** — Bereits angefallene Überstundenkosten.
- **Verbleibende Überstundenkosten** — Noch erwartete Überstundenkosten.

## Wie Ist-Werte berechnet werden

Alle Ist- und Restfelder folgen der Beziehung:

> **Gesamt = Ist + Rest**

Wenn Sie einen Wert ändern, aktualisiert Ingantt die anderen, um sie konsistent zu halten. Der häufigste Arbeitsablauf besteht darin, **% Abgeschlossen** zu aktualisieren, was automatisch auf alle Ist- und Restfelder durchkaskadiert:

1. **Ist-Dauer** und **Verbleibende Dauer** werden aus dem neuen Prozentsatz neu berechnet.
2. **Ist-Arbeit** und **Verbleibende Arbeit** werden aktualisiert (wenn die Projekteinstellung aktiviert ist).
3. **Ist-Anfang** und **Ist-Ende** werden basierend auf dem Fortschritt gesetzt.
4. **Ist-Kosten** und **Verbleibende Kosten** werden basierend auf der Abgrenzungsmethode neu berechnet.

Für Sammelvorgänge werden **Ist-Arbeit**, **Verbleibende Arbeit**, **Ist-Kosten** und **Verbleibende Kosten** von allen untergeordneten Vorgängen aufsummiert (Rollup). **Ist-Anfang** ist der früheste Ist-Anfang unter den untergeordneten Vorgängen, und **Ist-Ende** ist das späteste Ist-Ende.

## Vorgangsspalten

Über Ist- und Restwerte hinaus unterstützt Ingantt eine breite Palette von Vorgangsspalten — Planungsdaten, Informationen zum kritischen Pfad, Kosten, Arbeit, Earned-Value-Kennzahlen, Basispläne, benutzerdefinierte Felder und Gliederungscodes. Alle Spalten können über den Dialog **Optionen** (Reiter **Vorgangsspalten**) ein- oder ausgeblendet und neu angeordnet werden. Sie können auch mit der rechten Maustaste auf eine Spaltenüberschrift im Vorgangsraster klicken, um schnell auf die Spalteneinstellungen zuzugreifen.
