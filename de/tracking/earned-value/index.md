# Earned Value

Earned-Value-Management (EVM) kombiniert Umfangs-, Termin- und Kostenmessungen, um zu beurteilen, ob Ihr Projekt im Zeitplan und im Budget liegt. Legen Sie ein Statusdatum und einen Basisplan fest, und Ingantt berechnet die branchenüblichen EVM-Kennzahlen.

## Statusdatum

Das **Statusdatum** definiert das Datum, das für die Fortschrittsverfolgung und Earned-Value-Berechnungen verwendet wird. Wenn es gesetzt ist, wird eine grüne vertikale Linie im Gantt-Diagramm an diesem Datum angezeigt.

Wenn das Statusdatum nicht gesetzt ist, wird das aktuelle Datum für Berechnungen verwendet. Sie können das Statusdatum im Dialog **Earned-Value-Optionen** festlegen, der über das Menü **Projekt** zugänglich ist.

## Earned-Value-Management

Ingantt unterstützt Earned-Value-Management — eine Projektmanagementtechnik, die Umfangs-, Termin- und Kostendaten integriert, um die Projektleistung zu beurteilen.

### Earned Value einrichten

1. Erstellen Sie einen [Basisplan](/de/tracking/baselines/index.md#basisplan-festlegen), um den geplanten Terminplan und die Kosten zu erfassen.
2. Legen Sie das **Statusdatum** im Dialog **Earned-Value-Optionen** fest (zugänglich über das Menü **Projekt**) oder lassen Sie es auf das aktuelle Datum voreingestellt.
3. Aktualisieren Sie die [% Abgeschlossen](/de/tracking/progress/index.md#-abgeschlossen)-Werte der Vorgänge, während die Arbeit voranschreitet.

### Verfügbare EVM-Kennzahlen

Die folgenden EVM-Spalten können über den Dialog **Optionen** zur Vorgangsliste hinzugefügt werden:

| Kennzahl | Beschreibung |
|--------|-------------|
| **BCWS** | Budgetierte Kosten der geplanten Arbeit (Planned Value) |
| **BCWP** | Budgetierte Kosten der geleisteten Arbeit (Earned Value) |
| **ACWP** | Tatsächliche Kosten der geleisteten Arbeit |
| **BAC** | Budget bei Abschluss |
| **EAC** | Schätzung bei Abschluss |
| **VAC** | Abweichung bei Abschluss |
| **SV** | Terminabweichung |
| **CV** | Kostenabweichung |
| **SPI** | Terminleistungsindex |
| **CPI** | Kostenleistungsindex |
| **TCPI** | Noch-zu-erreichender Leistungsindex |
| **SV%** | Terminabweichung in Prozent |
| **CV%** | Kostenabweichung in Prozent |

### Earned-Value-Methode

Jeder Vorgang kann eine von zwei Methoden zur Berechnung des BCWP (Earned Value) verwenden:

- **% Abgeschlossen** (Standard) — Verwendet den Fertigstellungsgrad des Vorgangs zur Berechnung des Earned Value.
- **Physisch % Abgeschlossen** — Verwendet einen separat erfassten physischen Fertigstellungsgrad. Nützlich für lieferungsbasierte Fortschrittsmessung.

Legen Sie die Methode für einzelne Vorgänge auf dem Reiter **Kosten und EV** des Dialogs **Vorgangseigenschaften** fest. Ändern Sie die Standardmethode für neue Vorgänge im Dialog **Earned-Value-Optionen**.

### Earned-Value-Basisplan

EVM-Berechnungen verwenden einen bestimmten Basisplan. Sie können im Dialog **Earned-Value-Optionen** wählen, welcher Basisplan (`Basisplan 0` bis `Basisplan 10`) für Earned Value verwendet wird. Der Standard ist `Basisplan 0`.
