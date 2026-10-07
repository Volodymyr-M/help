# Projekt speichern

Ingantt speichert Ihr Projekt entweder als Datei auf Ihrem Gerät oder als Datei in Ihrem Google Drive. Autosave hält diese Datei dann während der Arbeit aktuell. Dieser Artikel erklärt, welcher Speicherort verwendet wird, wann Autosave greift und den einen Fall, in dem es nicht möglich ist.

## Zum ersten Mal speichern

Klicken Sie auf die Schaltfläche **Speichern** in der Symbolleiste oder verwenden Sie **Datei speichern** im Menü **Datei**.

Wenn das Projekt noch nie gespeichert wurde, fragt Ingantt, wohin es soll. **Projekt speichern unter** bietet zwei Ziele:

- **In neuer lokaler Datei speichern** — eine Datei auf Ihrem Gerät.
- **In neuer Google-Drive-Datei speichern** — eine Datei in Ihrem Google Drive. Erfordert die Anmeldung bei Google.

Sie können das Ziel später mit **Datei speichern unter** im Menü **Datei** ändern; dies erstellt immer eine neue Datei und arbeitet darin weiter.

Ihr Projekt wird in einem XML-Format gespeichert, das vollständig mit Microsoft Project kompatibel ist. Nichts an Ihrem Plan ist an Ingantt gebunden.

> Wenn Sie im Web beim Erstellen eines Projekts bereits bei Google angemeldet sind, wählt Ingantt Google Drive für Sie aus und benennt die Datei nach dem Projekt. Sie müssen nicht erst einmal speichern, bevor Autosave zu arbeiten beginnt, und das Umbenennen des Projekts benennt auch die Drive-Datei um.

## Autosave

Wenn Autosave aktiviert ist, schreibt Ingantt jede Änderung im Hintergrund in die vorhandene Datei des Projekts, etwa alle 20 Sekunden und nur, wenn etwas Ungespeichertes vorliegt. Es schreibt immer an das Ziel, das das Projekt bereits hat — es wählt nie ein neues.

Ob es standardmäßig aktiviert ist, hängt von der Plattform ab:

| Plattform | Autosave standardmäßig | Wo Sie es ändern |
|----------|--------------------|--------------------|
| **Web** | An | Menü **Datei** → **Offline arbeiten (kein Autosave)** |
| **Android, iOS, Windows, macOS** | Aus | **Autosave aktivieren** im Dialog **Optionen** oder im Menü **Datei** |

Die Schaltfläche **Speichern** dient zugleich als Autosave-Anzeige. Sie zeigt *Wird gespeichert…*, *Datei gespeichert*, *Datei in Google Drive gespeichert*, *Autosave ausstehend…* oder einen Fehler an, wenn ein Speichervorgang nicht durchging.

In zwei Situationen kann Autosave nicht helfen:

- **Das Projekt wurde noch nie gespeichert.** Es gibt noch keine Datei zum Aktualisieren, speichern Sie es also einmal selbst.
- **Das Projekt wurde aus einer lokalen Datei geöffnet, während Sie Ingantt in einem Browser verwenden.** Siehe unten.

## Autosave und lokale Dateien im Web

Ein Browser kann nicht in eine Datei zurückschreiben, die Sie von Ihrer Festplatte ausgewählt haben. Wenn Ingantt für Web in „eine lokale Datei“ speichert, lädt es stattdessen eine neue Kopie der Datei herunter — das ist das richtige Verhalten für ein ausdrückliches **Speichern**, aber nichts, was Sie alle 20 Sekunden geschehen lassen möchten.

Daher: **Ingantt für Web speichert lokale Dateien nicht automatisch.** Wenn Sie eine lokale Projektdatei im Browser geöffnet haben und Ihre Änderungen automatisch gesichert haben möchten, verwenden Sie einmal **Datei speichern unter** → **In neuer Google-Drive-Datei speichern**. Von da an hält Autosave die Drive-Datei aktuell.

Dies betrifft [Mit KI bearbeiten](/de/getting-started/edit-with-ai/index.md) in gleicher Weise: Ohne Autosave bleibt alles, was die KI ändert, ungespeichert, bis Sie es selbst speichern, und Ingantt warnt Sie davor, bevor die Sitzung beginnt.

## Offline arbeiten im Web

**Offline arbeiten (kein Autosave)** im Menü **Datei** schaltet Autosave für den aktuellen Browser-Tab aus. Verwenden Sie es, wenn Sie weiter bearbeiten möchten, ohne dass jede Änderung an Google Drive geht.

Zwei Dinge sollten Sie dazu wissen:

- Solange es aktiv ist, wird nichts gespeichert; speichern Sie also manuell, bevor Sie den Tab schließen. Ingantt erinnert Sie daran, wenn Sie es einschalten.
- Die Einstellung gilt pro Sitzung. Nach dem Neuladen der Seite oder dem Öffnen eines neuen Tabs ist Autosave wieder aktiviert. Unter Android, iOS, Windows und macOS wird stattdessen die Einstellung **Autosave aktivieren** gespeichert.

## Eine Kopie herunterladen

Im Web speichert **Datei** → **Herunterladen** → **XML herunterladen** eine Kopie des Projekts auf Ihrem Computer, ohne zu ändern, wo das Projekt selbst gespeichert ist. Verwenden Sie es für eine Sicherung oder um die Datei jemandem zu geben, der Microsoft Project verwendet.

Andere Formate — PDF, PNG, CSV, XML, YAML und Markdown — werden unter [Import & Export](/de/getting-started/import-export/index.md) behandelt.

## Schließen mit ungespeicherten Änderungen

Wenn Sie ein Projekt mit ungespeicherten Änderungen schließen, zeigt Ingantt die Abfrage **Änderungen speichern in** (gefolgt vom Projektnamen) und warnt, dass ungespeicherte Änderungen verloren gehen. Dieselbe Abfrage erscheint, bevor ein Projekt in den Papierkorb verschoben wird.

## Wenn Ingantt Sie nicht speichern lässt

- **„Nur-Ansicht-Modus, da die Testphase beendet ist“** oder **„Abonnement inaktiv“** — Ihre Projekte sind noch da und weiterhin lesbar, aber das Speichern ist deaktiviert, bis Ihr Abonnement aktiv ist. Siehe [Kostenlose Testphase](/de/account/trial/index.md) und [Abonnements und Zahlung](/de/account/subscription/index.md).
- **„Sie sind Betrachter und können nicht speichern“** — die Google-Drive-Datei wurde für Sie als Betrachter oder Kommentator freigegeben. Bitten Sie den Eigentümer um Bearbeitungszugriff oder verwenden Sie **Datei speichern unter**, um eine eigene Kopie zu behalten. Siehe [Projekt freigeben](/de/ui/sharing/index.md).
- **„Fehler beim Speichern der Datei in Google Drive“** — meist ein Verbindungsproblem oder eine abgelaufene Google-Anmeldung. Prüfen Sie Ihre Verbindung und melden Sie sich erneut an; siehe [Google-Drive-Integration](/de/ui/files/index.md).
