# Zuweisungen

Steuern Sie, wie Ressourcen Vorgängen zugeordnet werden — wer woran arbeitet, mit wie viel Zeitanteil und wie der Aufwand verteilt wird. Passen Sie Einheiten, Arbeitsprofile und Überstunden an die tatsächliche Arbeitsweise Ihres Teams an.

## Ressourcenzuweisungen und Einheiten

Ressourcen können einem Vorgang auf dem Reiter **Ressourcen** des Dialogs **Vorgangseigenschaften** zugewiesen werden.

Um eine Ressource zuzuweisen, aktivieren Sie das Kontrollkästchen in der Zeile mit der Ressource. Um eine Ressource zu entfernen, deaktivieren Sie das Kontrollkästchen.

Zuweisungen von Arbeits- oder Materialressourcen haben **Einheiten**, die in der entsprechenden Spalte angezeigt werden. Klicken Sie auf die Schaltfläche **Bearbeiten**, um den Standardwert der **Einheiten** für die Zuweisung zu ändern.

Standardmäßig werden Arbeitsressourcen mit Einheiten zugewiesen, die dem Wert [Max. Einheiten](/de/building-schedule/resources/index.md#max-einheiten) der Ressource entsprechen (100% für eine Vollzeitressource). Das bedeutet, die Ressource wird ihre gesamte verfügbare Kalenderzeit dem Vorgang widmen. Sie können den Wert auf eine beliebige Zahl ändern.

Standardmäßig werden Materialressourcen mit 1 Einheit zugewiesen. Das bedeutet, 1 Einheit dieses Materials wird bei der Erledigung des Vorgangs verwendet. Die Einheit stellt das dar, was Sie für das Material definiert haben (Karton, Gallone, Tonne usw.). Sie können den Standardwert ändern und eine beliebige Anzahl von Einheiten festlegen.

## Arbeitsprofile

Wenn eine Arbeitsressource einem Vorgang zugewiesen wird, wird der Aufwand (die Arbeit) über die Dauer des Vorgangs gemäß einem **Arbeitsprofil** verteilt. Standardmäßig wird die Arbeit gleichmäßig verteilt (**Flach**-Profil), aber Ingantt unterstützt mehrere Profilmuster, die ändern, wie der Aufwand über die Zeit verteilt wird:

| Profil | Beschreibung |
|--------|-------------|
| **Flach** | Gleichmäßiger Aufwand über die gesamte Dauer (Standard) |
| **Nachlastig** | Der Aufwand steigt gegen Ende des Vorgangs an |
| **Vorlastig** | Der Aufwand ist am Anfang am höchsten und nimmt ab |
| **Doppelspitze** | Zwei Intensitätsspitzen während des Vorgangs |
| **Frühe Spitze** | Erreicht früh einen Höhepunkt, dann flacht er ab |
| **Späte Spitze** | Steigert sich zu einem Höhepunkt gegen Ende |
| **Glocke** | Glockenkurve — Höhepunkt in der Mitte |
| **Schildkröte** | Flachere Glockenkurve — gleichmäßigere Verteilung |

Arbeitsprofile beeinflussen, wie Arbeit über Zeiträume verteilt wird, und werden beim Öffnen und Speichern von Projektdateien beibehalten.

## Zuweisungsverzögerung

Jede Ressourcenzuweisung zu einem Vorgang hat eine Eigenschaft **Verzögerung**, die den Zeitpunkt verschiebt, an dem die Ressource relativ zum Startdatum des Vorgangs mit der Arbeit beginnt. Wenn ein Vorgang beispielsweise am Montag beginnt und eine Ressource eine Verzögerung von 2 Tagen hat, beginnt diese Ressource am Mittwoch mit der Arbeit.

Die Verzögerung wird im Dialog **Ressourcenzuweisung bearbeiten** festgelegt und gilt nur für Arbeitsressourcenzuweisungen. Sie kann verwendet werden, um die Startzeiten von Ressourcen bei einem Vorgang zeitlich zu staffeln.

## Überstundenarbeit

Bei Arbeitsressourcen können Sie einen Teil der Gesamtarbeit einer Zuweisung als Überstunden festlegen. Überstundenarbeit ist eine Teilmenge der Gesamtarbeit, keine Addition: **Arbeit = Reguläre Arbeit + Überstundenarbeit**.

Die Vorgangskosten werden anhand der regulären und der Überstundenanteile separat berechnet:
**Kosten = Reguläre Arbeit x Standardsatz + Überstundenarbeit x Überstundensatz + Kosten pro Einsatz**

Bei Vorgängen mit **Feste Einheiten** und **Feste Arbeit** reduziert die Eingabe von Überstundenarbeit die Vorgangsdauer, da die Dauer nur auf der regulären Arbeit basiert.

Legen Sie Überstundenarbeit im Dialog **Ressourcenzuweisung bearbeiten** fest. Drei optionale Spalten stehen in der Vorgangstabelle zur Verfügung: **Überstundenarbeit**, **Überstundenkosten** und **Reguläre Arbeit**.
