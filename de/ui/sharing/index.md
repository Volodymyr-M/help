# Projekt freigeben

Ein in Google Drive gespeichertes Ingantt-Projekt kann genauso freigegeben werden wie jede andere Drive-Datei — für bestimmte Personen, für Ihre Organisation oder für jeden, der den Link hat. Im Web erledigen Sie all das direkt aus Ingantt heraus.

## Bevor Sie beginnen

Die Freigabe funktioniert nur bei Google-Drive-Dateien. Sie müssen bei Google angemeldet sein, und das Projekt muss in Drive gespeichert sein; ein Projekt, das in einer lokalen Datei auf Ihrem Gerät liegt, lässt sich nicht freigeben. Siehe [Projekt speichern](/de/getting-started/saving/index.md).

> Die Schaltfläche **Teilen** ist Teil von Ingantt für Web. Unter Android, iOS, Windows und macOS geben Sie die Datei stattdessen über Google Drive frei — öffnen Sie Drive, suchen Sie die Ingantt-Datei und verwenden Sie den Befehl **Teilen** von Drive. Das Ergebnis ist identisch, denn die Berechtigungen liegen in beiden Fällen auf der Drive-Datei.

## Für bestimmte Personen freigeben

1. Öffnen Sie das Projekt und klicken Sie in der Kopfzeile auf **Teilen** oder wählen Sie **Teilen** im Menü **Datei**. Der Dialog **Auf Google Drive teilen** öffnet sich.
2. Unter **Personen mit Zugriff** sehen Sie alle, die bereits Zugriff haben, Eigentümer zuerst.
3. Klicken Sie auf **Hinzufügen**, geben Sie die E-Mail-Adresse der Person ein, wählen Sie die gewünschte Rolle und bestätigen Sie.
4. Schließen Sie den Dialog. Ingantt speichert die neuen Berechtigungen in Drive und bestätigt mit *Zugriff aktualisiert*.

Die Rollen sind die Rollen von Google Drive:

| Rolle | Was sie tun können |
|------|------------------|
| **Betrachter** | Das Projekt öffnen und ansehen. Kann keine Änderungen speichern. |
| **Kommentator** | Wie Betrachter, zusätzlich Kommentare zur Datei in Google Drive. Kann keine Änderungen speichern. |
| **Bearbeiter** | Das Projekt öffnen und Änderungen darin speichern. |
| **Eigentümer** | Alles, einschließlich Löschen der Datei und Übertragen der Eigentümerschaft. |

Um die Rolle einer Person zu ändern, wählen Sie neben ihrem Namen eine andere Rolle. Um sie zu entfernen, löschen Sie ihre Zeile.

> Geben Sie eine Adresse ein, mit der sich die Person tatsächlich bei Google anmelden kann. Wenn Ingantt nicht bestätigen kann, dass die Adresse zu Gmail oder Google Workspace gehört, warnt es Sie, denn eine Drive-Freigabe an eine Adresse ohne dahinterstehendes Google-Konto erlaubt es dieser Person nicht, das Projekt zu öffnen.

## Allgemeiner Zugriff — Links und Organisationen

**Allgemeiner Zugriff** steuert alle, die Sie nicht einzeln benannt haben:

- **Eingeschränkt** — nur die unter **Personen mit Zugriff** aufgeführten Personen. Dies ist die Standardeinstellung.
- **Jeder mit dem Link** — jeder, der den Link hat, mit der von Ihnen gewählten Rolle (Betrachter, Kommentator oder Mitbearbeiter).
- **Domain** — alle in Ihrer Google-Workspace-Organisation, mit der von Ihnen gewählten Rolle. Diese Option erscheint nur, wenn der Eigentümer des Projekts einer Workspace-Domain angehört; für private Gmail-Konten wird sie nicht angeboten.

**Link kopieren** kopiert den Google-Drive-Link zum Projekt. Jeder, dessen Zugriff es erlaubt, kann diesen Link öffnen und den Plan in Ingantt bearbeiten.

Der Tooltip der Schaltfläche **Teilen** zeigt Ihnen den aktuellen Zustand auf einen Blick — *Privat — nur Sie haben Zugriff*, *Mit bestimmten Personen geteilt*, *Jeder mit dem Link kann ansehen/kommentieren/bearbeiten* oder das Entsprechende für Ihre Domain.

## Wer den Zugriff ändern darf

Nur der **Eigentümer** der Datei kann den Zugriff immer verwalten. Ein **Mitbearbeiter** kann den Zugriff ebenfalls verwalten, es sei denn, der Eigentümer hat dies in Google Drive abgeschaltet.

Wenn Sie den Dialog bei einem Projekt öffnen, das für Sie als Betrachter oder Kommentator freigegeben wurde, meldet er **Sie sind ein Betrachter und können den Zugriff nicht verwalten** und zeigt den aktuellen allgemeinen Zugriff an, ohne dass Sie ihn ändern können. Fragen Sie den Eigentümer, wenn Sie mehr benötigen.

## An einem freigegebenen Projekt arbeiten

- Alle öffnen dieselbe Drive-Datei, aber Ingantt ist kein Werkzeug für gleichzeitiges Bearbeiten. Jedes Speichern schreibt die gesamte Projektdatei; wenn also zwei Personen den Plan geöffnet haben und beide speichern, gewinnt das letzte Speichern, und die Änderungen der anderen Person werden ersetzt. Vereinbaren Sie, wer bearbeitet, bevor Sie beginnen, und prüfen Sie den Versionsverlauf der Datei in Google Drive, wenn Sie glauben, dass etwas verloren gegangen ist.
- Ein Betrachter oder Kommentator, der zu speichern versucht, sieht **Sie sind ein Betrachter und können nicht speichern**. Verwenden Sie stattdessen **Datei speichern unter**, um eine persönliche Kopie zu behalten.
- Jeder Mitwirkende benötigt zum Bearbeiten ein eigenes aktives Ingantt-Abonnement oder eine eigene Testphase — die Freigabe eines Plans gibt nicht Ihr Abonnement frei. Siehe [Abonnements und Zahlung](/de/account/subscription/index.md).
- Die Freigabe an die Adresse einer Google-**Gruppe** wird vom Freigabedialog in Ingantt nicht unterstützt. Geben Sie für einzelne Adressen frei oder verwalten Sie eine Gruppenfreigabe über Google Drive.

## Verwandte Themen

- [Google-Drive-Integration](/de/ui/files/index.md) — Anmeldung, Berechtigungen und Öffnen freigegebener Dateien.
- [Projekt speichern](/de/getting-started/saving/index.md) — wo ein Projekt gespeichert wird und wann es gespeichert wird.
