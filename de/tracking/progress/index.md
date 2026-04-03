# Fortschritt verfolgen

Sobald die Arbeit beginnt, aktualisieren Sie **% Abgeschlossen** für jeden Vorgang, um zu verfolgen, wie der tatsächliche Fortschritt im Vergleich zum Plan steht. Verwenden Sie **Projekt aktualisieren**, um den Fortschritt für mehrere Vorgänge gleichzeitig festzulegen. Während der Fortschritt erfasst wird, berechnet Ingantt automatisch [Ist-Werte](/de/tracking/actuals/index.md) — tatsächliche und verbleibende Werte für Dauer, Arbeit, Kosten und Termine.

## % Abgeschlossen

Sobald Ihr Projekt läuft, müssen Sie seinen Fortschritt verfolgen. Wenn Sie **% Abgeschlossen** für jeden Vorgang aktuell halten, können Sie den gesamten **% Abgeschlossen** des Projekts in seinem Projektsammelvorgang sehen.

Verwenden Sie das Feld **% Abgeschlossen** im Dialog **Vorgangseigenschaften**, um den Fertigstellungsgrad eines bestimmten Vorgangs festzulegen. Vorgänge, die zu 100 % abgeschlossen sind, zeigen ein grünes Häkchen in der Vorgangsliste an.

Wenn Sie % Abgeschlossen aktualisieren:

- Das Setzen über 0 % setzt den **Ist-Anfang** des Vorgangs auf das geplante Startdatum des Vorgangs.
- Das Setzen auf 100 % setzt das **Ist-Ende** des Vorgangs auf das geplante Enddatum des Vorgangs.
- **Ist-Dauer** und **Verbleibende Dauer** werden automatisch basierend auf dem Fertigstellungsgrad berechnet.
- Wenn **Vorgangsstatus aktualisiert Ressourcenstatus** in den Projekteinstellungen aktiviert ist (die Standardeinstellung), werden **Ist-Arbeit** und **Verbleibende Arbeit** ebenfalls proportional aktualisiert.

Der **% Abgeschlossen** eines Sammelvorgangs wird als dauergewichteter Durchschnitt aller seiner untergeordneten Nicht-Sammelvorgänge berechnet.

> Sie können den Fortschritt auch mit dem Befehl [Projekt aktualisieren](#projekt-aktualisieren) verfolgen, um % Abgeschlossen für mehrere Vorgänge gleichzeitig basierend auf einem Stichtag festzulegen.

## Projekt aktualisieren

Der Befehl **Projekt aktualisieren** bietet Massenoperationen zur Fortschrittsverfolgung, zugänglich über das Menü **Projekt**.

### Arbeit als abgeschlossen aktualisieren

Markieren Sie Vorgänge als abgeschlossen bis zu einem bestimmten Datum:

- **Proportional (0 %–100 %)** — Berechnet den Fertigstellungsgrad basierend darauf, wie viel der Arbeitsdauer jedes Vorgangs vor dem Stichtag liegt.
- **Alles oder nichts (0 % oder 100 %)** — Setzt Vorgänge auf 0 % oder 100 %, je nachdem, ob sie bis zum Stichtag abgeschlossen sind.

### Nicht abgeschlossene Arbeit umplanen

Verschiebt nicht abgeschlossene Arbeit, damit sie nach einem bestimmten Datum beginnt:

- Vorgänge, die noch nicht begonnen haben, erhalten eine **Anfang nicht früher als**-Einschränkung.
- Laufende Vorgänge werden geteilt, wenn **Laufende Vorgänge teilen** in den Projektplanungsoptionen aktiviert ist.
- Abgeschlossene Vorgänge werden nicht verändert.
