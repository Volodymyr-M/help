# Ressourcen

Fügen Sie die Personen, Geräte und Materialien hinzu, die die Arbeit erledigen werden. Sobald Ressourcen Vorgängen zugewiesen sind, kann Ingantt die Arbeitsauslastung berechnen, Überlastungen erkennen und die Verfügbarkeit jeder Person berücksichtigen.

## Ressourcentyp

Ingantt unterstützt drei Arten von Ressourcen:

| Ressourcentyp | Beschreibung                                                                                     |
|---------------|--------------------------------------------------------------------------------------------------|
| **Arbeit**      | Jemand oder etwas, das Ihren Vorgang ausführt. Dies kann eine Person, ein Team, ein Auftragnehmer oder ein Gerät sein. |
| **Material**  | Materialien, die zur Erledigung Ihres Vorgangs verwendet werden, wie Werkstoffe, Zutaten oder Komponenten. |
| **Kosten**      | Kosten, die auf mehrere Vorgänge angewendet werden können, wie Lieferkosten, Bereitstellungskosten oder andere Fixkosten. |

Nur Arbeitsressourcen beeinflussen die Planung, wenn sie Vorgängen zugewiesen werden.

Alle Ressourcentypen wirken sich auf Kostenberechnungen aus, wenn das Feld **Kosten** der Ressource ausgefüllt ist.

## Max. Einheiten

Arbeitsressourcen haben eine Eigenschaft **Max. Einheiten** (Standard 100%), die die verfügbare Kapazität der Ressource darstellt. Beispiele:

- **100%** — Eine Vollzeitressource
- **50%** — Eine Teilzeitressource (zur Hälfte der Zeit verfügbar)
- **300%** — Ein Team aus 3 Vollzeitmitgliedern, dargestellt als einzelne Ressource

**Max. Einheiten** wird von der [Überlastungserkennung](/de/adjusting-schedule/leveling/index.md#overallocated-resources) und dem [automatischen Kapazitätsabgleich](/de/adjusting-schedule/leveling/index.md#auto-leveling) verwendet, um festzustellen, ob eine Ressource mehr Arbeit hat, als sie bewältigen kann. Beim Zuweisen einer Arbeitsressource zu einem Vorgang entsprechen die Standard-Zuweisungseinheiten dem Wert von **Max. Einheiten** der Ressource.

## Verfügbarkeitszeiträume

Die Verfügbarkeit einer Arbeitsressource kann sich im Laufe der Zeit ändern. Beispielsweise könnte ein Teammitglied in den ersten drei Monaten in Vollzeit arbeiten und dann auf Teilzeit wechseln.

Auf dem Reiter **Verfügbarkeit** des Dialogs **Ressourceneigenschaften** können Sie mehrere Verfügbarkeitszeiträume definieren, jeweils mit einem Datumsbereich und einem Verfügbarkeitsprozentsatz. Für Termine, die in einen definierten Zeitraum fallen, überschreiben die Einheiten des Zeitraums den Basiswert **Max. Einheiten** der Ressource für Kapazitätsberechnungen.

## Generische Ressourcen

Eine Ressource kann über das Kontrollkästchen im Dialog **Ressourceneigenschaften** als **Generisch** markiert werden. Generische Ressourcen sind Platzhalter, die eine Rolle darstellen (z. B. „Entwickler", „Designer") und keine bestimmte Person. Sie sind in der frühen Planungsphase nützlich, wenn konkrete Teammitglieder noch nicht feststehen.

Generische Ressourcen werden in der Ressourcenliste durch ein Abzeichen-Symbol gekennzeichnet. Die generische Kennzeichnung ist rein informativ — sie hat keinen Einfluss auf Planung oder Kostenberechnungen.

## Buchungsart

Jede Ressource hat eine **Buchungsart**, die im Dialog **Ressourceneigenschaften** auf **Zugesichert** (Standard) oder **Vorgeschlagen** gesetzt werden kann.

- **Zugesichert** — Die Ressource ist fest für das Projekt gebucht.
- **Vorgeschlagen** — Die Ressource ist vorläufig zu Planungszwecken zugewiesen.

Standardmäßig schließt der automatische Kapazitätsabgleich vorgeschlagene Ressourcen aus. Sie können sie einbeziehen, indem Sie „Level resources with the proposed booking type" in den [Kapazitätsabgleich-Optionen](/de/adjusting-schedule/leveling/index.md#leveling-options) aktivieren.
