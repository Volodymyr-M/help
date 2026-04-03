# Erste Schritte

Beginnen Sie hier, um Ihren ersten Projektterminplan zu erstellen. In nur wenigen Minuten haben Sie Vorgänge auf einer Zeitachse, miteinander verknüpft und mit zugewiesenen Ressourcen — genug, um zu sehen, wann Ihr Projekt voraussichtlich abgeschlossen wird.

> Auf Mobilgeräten verwenden Sie Tippen statt Klicken, Doppeltippen statt Doppelklicken und langes Drücken statt Rechtsklick.

## Einen einfachen Terminplan erstellen

Nehmen wir an, Sie haben ein kleines Renovierungsprojekt mit zwei Vorgängen, einer nach dem anderen.

Nachdem Sie auf **Neu erstellen** geklickt haben, gelangen Sie zu einem geteilten Bildschirm mit der Vorgangsliste links und dem Gantt-Diagramm rechts. Fügen Sie Ihre Vorgänge nacheinander hinzu, indem Sie auf die große **+**-Schaltfläche unten rechts klicken. Geben Sie im Dialog **Vorgang hinzufügen** den **Namen** und die voraussichtliche **Dauer** jedes Vorgangs an.

![Vorgang hinzufügen](/images/getting-started/add_task.png)

Wählen Sie beide Vorgänge in der Liste auf der linken Seite aus und klicken Sie dann auf die Symbolleisten-Schaltfläche **Vorgänge verknüpfen**. Dies verknüpft die Vorgänge und aktualisiert das Gantt-Diagramm.

- Um auf Android und iOS mehrere Vorgänge auszuwählen, halten Sie Ihren Finger beim Tippen auf jeden Vorgang in der Liste oder im Gantt-Diagramm etwas länger gedrückt.
- Auf anderen Plattformen klicken Sie auf Vorgänge in der Liste oder im Gantt-Diagramm, während Sie `Strg` oder `Umschalt` auf der Tastatur gedrückt halten.

![Verknüpfen](/images/getting-started/link.png)

Nachdem die Vorgänge verknüpft sind, versuchen Sie die Dauer des ersten Vorgangs zu ändern. Doppelklicken Sie darauf in der Liste oder im Gantt-Diagramm und bearbeiten Sie das Feld **Dauer** im Dialog **Vorgangseigenschaften**. Sie werden sehen, wie sich diese Änderung auf den Terminplan auswirkt, indem der zweite Vorgang verschoben wird.

![Gantt](/images/getting-started/gantt.png)

## Projektname und Startdatum festlegen

Ihr Projekt beginnt möglicherweise an einem anderen Tag als dem von Ingantt verwendeten Standarddatum.

Öffnen Sie die **Projekteigenschaften** über die Navigationsleiste oder, im Web und unter Windows, durch Klicken auf den Projektnamen in der Kopfzeile.

Legen Sie das neue Projektstartdatum im Feld **Projektstartdatum** fest und ändern Sie dabei auch den **Namen** des Projekts.

![Projektname](/images/getting-started/project_name.png)

> Mit der Einfachheit des grundlegenden Terminplans können Sie bereits erkennen, wann das Projekt voraussichtlich endet, indem Sie auf das Gantt-Diagramm schauen.

## Ressourcen hinzufügen und zuweisen

Nehmen wir an, eine andere Person wird jeden Vorgang in Ihrem Projekt bearbeiten.

Öffnen Sie die Navigationsleiste und wechseln Sie zur Ansicht **Ressourcen**.

![Nav](/images/getting-started/nav.png)

Klicken Sie auf die große **+**-Schaltfläche, um den Dialog **Ressource hinzufügen** zu öffnen, geben Sie einen **Namen** für die Ressource ein und speichern Sie. Wiederholen Sie diese Schritte, um eine weitere Arbeitsressource hinzuzufügen.

![Ressource hinzufügen](/images/getting-started/add_resource.png)

![Ressourcen](/images/getting-started/resources.png)

Wechseln Sie über die Navigationsleiste zurück zur Ansicht **Vorgänge**. Doppelklicken Sie auf Ihren ersten Vorgang in der Liste oder im Gantt-Diagramm, um den Dialog **Vorgangseigenschaften** zu öffnen.

Wechseln Sie zum Reiter **Ressourcen**, aktivieren Sie die erste Ressource, um diese Person dem Vorgang zuzuweisen, und speichern Sie.

![Zuweisungen](/images/getting-started/assignments.png)

Wiederholen Sie die gleichen Schritte für Ihren zweiten Vorgang und die zweite Ressource.

![Ressourcen-Gantt](/images/getting-started/resources_gantt.png)

## Urlaub festlegen

Personen können während Ihres Projekts verschiedene Ereignisse haben, die den Zeitplan beeinflussen.

Nehmen wir an, die Ressource, die den ersten Vorgang in Ihrem Projekt erledigt, benötigt einen freien Tag während dieses Vorgangs.

Um dies zu konfigurieren, verwenden Sie die Navigationsleiste, um zur Ansicht **Ressourcen** zu gelangen.

Doppelklicken Sie auf die Ressource, um die **Ressourceneigenschaften** zu sehen. Gehen Sie zum Reiter **Kalender** und klicken Sie auf die Schaltfläche **Ausnahme hinzufügen**. Wählen Sie einen der Tage während Ihres Projekts aus, lassen Sie die Liste der Arbeitszeiten leer und speichern Sie.

![Freier Tag](/images/getting-started/day_off.png)

Gehen Sie über die Navigationsleiste zurück zu **Vorgänge** und sehen Sie, wie sich Ihr Terminplan geändert hat. Der zweite Vorgang hat sich aufgrund seiner Abhängigkeit vom ersten verschoben.

![Urlaub](/images/getting-started/vacation.png)

> Sie können nicht nur Urlaub, sondern auch andere Änderungen am Zeitplan einer Person konfigurieren. Zum Beispiel können Sie durch Hinzufügen von Arbeitszeit zur Ausnahme festlegen, dass die Ressource an diesem bestimmten Tag nur zu bestimmten Zeiten arbeitet.

## Feiertage festlegen

Stellen Sie sich vor, es gibt einen Feiertag während Ihres Projekts, einen Tag, an dem keine Arbeit erledigt wird.

Urlaube werden über den Kalender jeder Ressource konfiguriert. Tage, die alle betreffen, werden jedoch im Projektkalender konfiguriert. Der Standardprojektkalender heißt **Standard** und gibt bereits an, dass an Wochenenden keine Arbeit erledigt wird.

Um Feiertage zu konfigurieren, verwenden Sie die Navigationsleiste, um zur Ansicht **Kalender** zu gelangen. Doppelklicken Sie auf **Standard**, um die **Kalendereigenschaften** zu sehen. Klicken Sie auf die Schaltfläche **Ausnahme hinzufügen**. Wählen Sie einen der Tage während Ihres Projekts aus, lassen Sie die Liste der Arbeitszeiten leer und speichern Sie.

![Feiertag](/images/getting-started/holiday.png)

Gehen Sie über die Navigationsleiste zurück zur Ansicht **Vorgänge** und sehen Sie, wie sich Ihr Projekt geändert hat. Die Vorgänge sind verschoben, und der Feiertag wird ähnlich wie Wochenenden im Gantt-Diagramm angezeigt.

![Fertig](/images/getting-started/final.png)

> Mit dem gleichen Ansatz können Sie nicht nur Feiertage, sondern auch andere Änderungen am Zeitplan aller konfigurieren. Zum Beispiel können Sie durch Hinzufügen von Arbeitszeit zur Ausnahme festlegen, dass alle an diesem bestimmten Tag nur zu bestimmten Zeiten arbeiten.
>
> Sie können auch die Reiter für die einzelnen Wochentage in den **Kalendereigenschaften** überprüfen. Wenn Ihr gesamtes Team freitags früher geht oder samstags arbeitet, können Sie dies auf den entsprechenden Reitern konfigurieren.
