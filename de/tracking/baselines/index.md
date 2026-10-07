# Basispläne

Speichern Sie einen Schnappschuss Ihres Terminplans, bevor die Arbeit beginnt, und vergleichen Sie ihn dann mit dem aktuellen Stand, um zu sehen, wo das Projekt abgewichen ist.

Ein Basisplan erfasst das Startdatum, das Enddatum, die Dauer, die Arbeit und die Kosten jedes Vorgangs zu einem bestimmten Zeitpunkt.

## Basisplan festlegen

Legen Sie einen Basisplan über das Menü **Projekt** im Untermenü **Basisplan festlegen** fest:

- Sie können einen Basisplan für alle Vorgänge oder nur für ausgewählte Vorgänge festlegen.
- Ingantt unterstützt bis zu 11 Basispläne.

## Basispläne anzeigen

Sobald ein Basisplan gespeichert wurde, können Sie ihn im Gantt-Diagramm anzeigen, indem Sie die Sichtbarkeit des Basisplans im Dialog **Basispläne** umschalten. Basisplan-Balken erscheinen als dünnere Balken unterhalb der aktuellen Vorgangsbalken und verwenden eine eigene Farbe pro Basisplannummer.

Um Basispläne zu verwalten, verwenden Sie den Eintrag **Basispläne** im Menü **Projekt**. Der Dialog **Basispläne** ermöglicht Ihnen:

- Alle gespeicherten Basispläne anzeigen
- Nicht mehr benötigte Basispläne entfernen
- Festlegen, welcher Basisplan für [Earned-Value](/de/tracking/earned-value/index.md#earned-value-management)-Berechnungen verwendet wird

## Basisplan- und Abweichungsspalten

Sie können Basisplan- und Abweichungsspalten über den Dialog **Optionen** zur Vorgangsliste hinzufügen. Insgesamt gibt es **55 Basisplanspalten** und **5 Abweichungsspalten**.

### Die 55 Basisplanspalten

Ingantt speichert **11 Basispläne**: den unnummerierten **Basisplan** sowie **Basisplan 1** bis **Basisplan 10**. Jeder stellt dieselben fünf Vorgangsspalten bereit:

- Geplanter Anfang
- Geplantes Ende
- Geplante Dauer
- Geplante Arbeit
- Geplante Kosten

11 Basispläne × 5 Felder = **55 Basisplanspalten**, alle über die Spaltenauswahl in der Vorgangstabelle verfügbar. Der unnummerierte Satz ist schlicht benannt (*Geplanter Anfang*); die nummerierten tragen ihre Nummer (*Basisplan 3 Anfang*).

### Die 5 Abweichungsspalten

Abweichungsspalten werden berechnet — aktueller Terminplan minus Basisplan — und es gibt fünf davon:

- Anfangsabweichung
- Endabweichung
- Dauerabweichung
- Arbeitsabweichung
- Kostenabweichung

Es gibt einen Satz von fünf, nicht einen Satz pro Basisplan. Sie vergleichen den aktuellen Terminplan mit **einem** Basisplan — demjenigen, der unter **Projekt → Earned-Value-Optionen** als [Earned-Value-Basisplan](/de/tracking/earned-value/index.md#earned-value-basisplan) ausgewählt ist; standardmäßig ist das der unnummerierte Basisplan. Ändern Sie diese Einstellung, werden alle Abweichungsspalten gegen den gewählten Basisplan neu berechnet. Ein Vorgang, dessen gewählter Basisplan nie festgelegt wurde, zeigt eine leere Abweichung statt einer Null.

## Wo Basispläne gespeichert werden

Basispläne werden **in der Projektdatei** gespeichert, nicht in einer separaten Datei. Mit dem Speichern des Projekts werden auch seine Basispläne gespeichert.

Wenn Sie versuchen, einen zwölften Basisplan festzulegen, meldet Ingantt *Alle Basisplan-Plätze sind belegt. Löschen Sie zuerst einen im Dialog „Basispläne“.* Öffnen Sie **Projekt → Basispläne** und löschen Sie einen.

Basispläne sind nicht dasselbe wie der [Versionsverlauf](/de/ui/version-history/index.md), der die Datei selbst im Zeitverlauf aufzeichnet. Verwenden Sie den Versionsverlauf, um zu einem früheren Plan zurückzukehren; verwenden Sie Basispläne, um zu messen, wie weit der aktuelle Plan abgewichen ist.

## Zwischenpläne

Zwischenpläne speichern leichtgewichtige Terminplan-Schnappschüsse (nur **Anfangs-** und **Enddatum**) für einen schnellen Vergleich ohne den Aufwand vollständiger Basispläne. Ingantt unterstützt bis zu 10 Zwischenpläne (`Zwischenplan 1` bis `Zwischenplan 10`).

Legen Sie Zwischenpläne über den Eintrag **Zwischenpläne** im Menü **Projekt** fest und löschen Sie sie dort. Sie können Zwischenplandaten als Spalten in der Vorgangsliste anzeigen.
