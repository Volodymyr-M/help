# Fortlaufende Dauern

Eine gewöhnliche Dauer wird in **Arbeitszeit** gemessen. Ein dreitägiger Vorgang in einem Kalender mit Montag bis Freitag und acht Stunden pro Tag benötigt 24 Arbeitsstunden, und wenn er am Donnerstag beginnt, endet er am Montag — das Wochenende zählt nicht.

Eine **fortlaufende** Dauer wird in **Kalenderzeit** gemessen. Sie zählt ununterbrochen, 24 Stunden am Tag, 7 Tage die Woche, über Wochenenden, Feiertage und jede arbeitsfreie Ausnahme im [Kalender](/de/setting-up-project/calendars/index.md) hinweg.

Verwenden Sie sie für alles, dem es egal ist, ob Ihr Team gerade arbeitet: Aushärten von Beton, Trocknen von Farbe, ein Dauertest, eine behördliche Wartefrist oder ein Transportweg.

## Eine fortlaufende Dauer eingeben

Geben Sie die Dauer mit einem **`e`** vor der Einheit ein:

| Sie geben ein | Sie erhalten |
|----------|---------|
| `3d` | 3 Arbeitstage |
| `3ed` | 3 fortlaufende Tage — 72 Stunden durchgehend |
| `2ew` | 2 fortlaufende Wochen — 14 Kalendertage |
| `8eh` | 8 fortlaufende Stunden |

Die Einheiten sind `min`, `h`, `d`, `w` und `m` — Minuten, Stunden, Tage, Wochen, Monate — und jede davon akzeptiert das `e`. Die Abkürzungen sind übersetzt; in einer nicht-englischen Oberfläche verwenden Sie daher die Einheitenbuchstaben dieser Sprache. Die Markierung `e` bleibt gleich.

Sie können statt der Eingabe auch das Kontrollkästchen **Fortlaufend** im Dauer-Editor des Dialogs [Vorgangseigenschaften](/de/building-schedule/task-properties/index.md) verwenden. Sein Tooltip ist die Definition:

> Fortlaufend. Wenn aktiviert, zählt die Dauer ununterbrochen (24/7) statt nur während der im Kalender definierten Arbeitszeit.

Das Aktivieren oder Deaktivieren des Kästchens behält die sichtbare Zahl bei und ändert ihre Bedeutung: Aus `3d` wird `3ed`. Es rechnet 3 Arbeitstage nicht stillschweigend in die entsprechende Anzahl fortlaufender Tage um.

## Was eine fortlaufende Einheit wert ist

Fortlaufende Einheiten ignorieren Ihren Projektkalender und verwenden feste Kalenderarithmetik:

| Einheit | Fortlaufender Wert |
|------|---------------|
| 1 fortlaufender Tag | 24 Stunden |
| 1 fortlaufende Woche | 7 Tage = 168 Stunden |
| 1 fortlaufender Monat | 30 Tage = 720 Stunden |

Vergleichen Sie das mit Arbeitseinheiten, die aus den [Projekteigenschaften](/de/setting-up-project/project/index.md) stammen — standardmäßig 8 Stunden pro Tag, 5 Tage pro Woche, 20 Tage pro Monat. `1w` sind also 40 Arbeitsstunden, während `1ew` 168 durchgehende Stunden sind.

## Fortlaufende Verzögerung bei einer Abhängigkeit

Dasselbe Prinzip gilt für die Verzögerung bei einer [Abhängigkeit](/de/building-schedule/dependencies/index.md), und hier ist es am wichtigsten. „Den nächsten Vorgang drei Tage nach dem Ende dieses Vorgangs starten“ bedeutet üblicherweise drei *Kalender*tage, nicht drei Arbeitstage — sonst verschiebt ein Ende am Freitag den Nachfolger auf Mittwoch.

Auf dem Reiter **Vorgänger** der Vorgangseigenschaften hat jede Verknüpfung ein eigenes Kontrollkästchen **Fortlaufend** neben der Verzögerung, mit derselben Bedeutung:

> Wenn aktiviert, zählt die Verzögerung ununterbrochen (24/7) statt nur während der im Kalender definierten Arbeitszeit.

Sie können sie auch direkt eingeben: Eine Verzögerung von `3ed` sind drei Kalendertage.

## Import und Export

Fortlaufende Dauern und Verzögerungen sind Teil des Microsoft-Project-Formats und bleiben beim Austausch in beide Richtungen erhalten. Eine aus Microsoft Project importierte Dauer von `3ed` bleibt `3ed` und wird wieder als fortlaufende Dauer exportiert.
