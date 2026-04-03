# Abhängigkeiten

Reale Projekte haben eine Reihenfolge — Sie können nicht testen, bevor Sie bauen. Verknüpfen Sie Vorgänge miteinander, damit Ingantt die richtige Abfolge berechnet und alles automatisch verschiebt, wenn sich ein Vorgang ändert.

## Vorgänger und Abhängigkeiten

Wenn Sie Vorgänge über die Schaltfläche **Ausgewählte Vorgänge verknüpfen** in der Symbolleiste verknüpfen, erstellen Sie eine Abhängigkeit zwischen den Vorgängen. Die Abhängigkeit heißt **Ende-Anfang** und ist eine von vier verfügbaren Abhängigkeiten:

| Typ                 | Beschreibung                                                                  |
|---------------------|-------------------------------------------------------------------------------|
| **Ende-Anfang** | Der zweite Vorgang kann beginnen, sobald der erste Vorgang abgeschlossen ist. |
| **Ende-Ende**| Der zweite Vorgang endet, wenn der erste Vorgang endet.                       |
| **Anfang-Ende** | Der zweite Vorgang endet, wenn der erste Vorgang beginnt.                     |
| **Anfang-Anfang**  | Der zweite Vorgang beginnt, wenn der erste Vorgang beginnt.                   |

![Abhängigkeiten](/images/building-schedule/tasks/dependencies.png)

Um Vorgänger zuzuweisen und Abhängigkeiten zu bearbeiten, verwenden Sie den Reiter **Vorgänger** des Dialogs **Vorgangseigenschaften**.

## Verzögerung und Vorlaufzeit

Manchmal müssen Sie eine Wartezeit zwischen zwei abhängigen Vorgängen festlegen.

Nehmen wir an, Ihr erster Vorgang ist „Wand streichen" und Ihr zweiter Vorgang ist „Bilder an die Wand hängen". Diese Vorgänge sind verknüpft (haben eine **Ende-Anfang**-Abhängigkeit). Es ist nicht möglich, Bilder aufzuhängen, bis die Farbe trocken ist, also müssen Sie warten. Um dies in Ihrem Terminplan abzubilden, legen Sie die **Verzögerung** (z. B. 2 Tage) für die Abhängigkeit zwischen den beiden Vorgängen fest.

![Verzögerung](/images/building-schedule/tasks/lag.png)

Verzögerungen können auch das umgekehrte Szenario darstellen — wenn ein abhängiger Vorgang beginnen soll, bevor sein Vorgänger abgeschlossen ist. Um dies festzulegen, machen Sie die **Verzögerung** negativ (z. B. -1 Tag). Dies wird als _Vorlaufzeit_ bezeichnet.

Um Verzögerung oder Vorlaufzeit festzulegen, wählen Sie den Vorgänger auf dem Reiter **Vorgänger** des Dialogs **Vorgangseigenschaften** aus und klicken Sie auf die Schaltfläche **Bearbeiten**.

> Verzögerungen können in Stunden, Tagen, Wochen, Monaten oder als Bruchteil der Dauer des Vorgängervorgangs angegeben werden (z. B. 50%).

## Zirkuläre Abhängigkeiten

Wenn Sie versehentlich eine zirkuläre Abhängigkeit erstellen — z. B. indem Sie zwei Vorgänge gegenseitig als Vorgänger festlegen — erkennt Ingantt dies und macht die letzte Aktion rückgängig. Dies gilt auch für komplexe zirkuläre Ketten.

Wenn Sie eine Projektdatei öffnen, die zirkuläre Abhängigkeiten enthält, entfernt Ingantt automatisch die problematischen Verknüpfungen, damit das Projekt geplant werden kann. Eine Warnmeldung zeigt an, wie viele zirkuläre Abhängigkeitsverknüpfungen beim Import entfernt wurden.
