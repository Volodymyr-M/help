# Kritischer Pfad

Dies sind die Vorgänge, bei denen Sie sich keine Verzögerung leisten können — jede Verschiebung verschiebt das gesamte Projekt. Identifizieren Sie sie frühzeitig, beobachten Sie sie genau, und Sie wissen genau, worauf Sie sich konzentrieren müssen, um Ihren Termin einzuhalten.

## Kritische Vorgänge

Sobald Sie Ihren Plan umsetzen, werden einige Vorgänge früher als geplant fertig — und andere nicht. Manche Vorgänge können länger dauern, ohne den Projektzeitplan zu verlängern. Diese Vorgänge haben Spielraum, der als _Puffer_ bezeichnet wird.

Andere Vorgänge haben keinen Puffer — jede Verzögerung verschiebt das Enddatum des Projekts. Diese werden als _kritische Vorgänge_ bezeichnet. Um Ihr Projekt im Zeitplan zu halten, achten Sie besonders auf sie, wenn Sie den Fortschritt verfolgen.

Ein Vorgang ist auch kritisch, wenn:
- Er eine **Muss anfangen am**- oder **Muss enden am**-[Einschränkung](/de/building-schedule/constraints/index.md#einschränkungen) hat
- Er eine **So spät wie möglich**-[Einschränkung](/de/building-schedule/constraints/index.md#einschränkungen) in einem vom Startdatum geplanten Projekt hat
- Sein Enddatum seinen [Stichtag](/de/building-schedule/task-properties/index.md#stichtag) erreicht oder überschreitet
- Er **negativen Puffer** hat — ein Planungskonflikt, bei dem Einschränkungen den Vorgang früher als seine Abhängigkeiten es erlauben erzwingen

Vorgänge, die zu 100 % abgeschlossen sind, werden nie als kritisch markiert, unabhängig von anderen Bedingungen.

Ingantt erkennt kritische Vorgänge automatisch. Wenn die Option **Kritische Vorgänge hervorheben** aktiviert ist (über das Menü **Ansicht**, das Menü **Diagramm** in der Menüleiste oder den Dialog **Optionen**), werden diese Vorgänge rot dargestellt.

Vorgänge mit negativem Puffer zeigen auch ein Warnsymbol in der Vorgangsliste an, das auf einen Planungskonflikt hinweist. Dies tritt typischerweise auf, wenn eine **Anfang nicht später als**- oder **Ende nicht später als**-Einschränkung mit den Abhängigkeiten des Vorgangs in Konflikt steht.

![Kritisch](/images/building-schedule/tasks/critical.png)

## Optionen für den kritischen Pfad

Auf dem Reiter **Sonstiges** des Dialogs **Projekteigenschaften** können Sie konfigurieren, wie der kritische Pfad berechnet wird:

- **Mehrere kritische Pfade berechnen** — Wenn aktiviert, erhält jede unverbundene Gruppe verknüpfter Vorgänge ihren eigenen kritischen Pfad. Wenn deaktiviert (die Standardeinstellung), leiten Vorgänge ohne Nachfolger ihr spätes Ende vom Projektendtermin ab.
- **Kritische Pufferzeit-Grenze** — Standardmäßig sind Vorgänge mit null oder negativem Puffer kritisch. Sie können diesen Schwellenwert erhöhen, sodass Vorgänge mit Puffer bis zur angegebenen Anzahl von Tagen ebenfalls als kritisch betrachtet werden.
