# Google-Drive-Integration

Ingantt speichert Ihre Projektdateien in Google Drive, damit Sie von jedem Gerät darauf zugreifen können. Dieser Artikel behandelt die Anmeldung, die Berechtigungen, die Ingantt anfordert, wie Drive und Ingantt zusammenspielen und was zu tun ist, wenn die Google-Anmeldung nicht wie erwartet funktioniert.

## Arbeiten ohne Anmeldung

Sie müssen sich nicht anmelden. Ohne Google-Konto können Sie auf Ihrem Gerät gespeicherte Projektdateien öffnen, bearbeiten und wieder speichern (im Web lädt das Speichern einer lokalen Datei eine neue Kopie herunter — siehe [Projekt speichern](/de/getting-started/saving/index.md)).

Melden Sie sich mit Google an, wenn Ihre Projekte in der Cloud liegen, während der Arbeit automatisch gespeichert werden, auf Ihren anderen Geräten verfügbar sein und für andere Personen freigegeben werden sollen.

## Bei Google anmelden

Klicken Sie auf dem Projekte-Bildschirm auf **Mit Google anmelden**. Ein Standard-Google-Dialog öffnet sich und fragt nach den unten aufgeführten Berechtigungen. Sie können sich jederzeit mit **Von Google abmelden** wieder abmelden.

Ingantt fordert die folgenden Berechtigungen an:

- **Profilinformationen anzeigen** — Wird verwendet, um Ihr Konto zu identifizieren.
- **Verbindung mit Google Drive herstellen** — Nur **Web**-Version. Ermöglicht es Ihnen, Ingantt-Dateien über die Google-Drive-Weboberfläche zu erstellen oder zu öffnen (Schaltfläche **Neu** oder Menü **Öffnen mit**).
- **Nur die spezifischen Google-Drive-Dateien einsehen, bearbeiten, erstellen und löschen, die Sie mit dieser App verwenden** — Ermöglicht Ingantt, eigene Dateien in Ihrem Google Drive zu erstellen und zu bearbeiten. Ingantt kann nicht auf Ihre anderen Dateien zugreifen.

> Die dritte Berechtigung ist der eingeschränkte Google-Drive-Bereich: Ingantt sieht immer nur Dateien, die Sie in Ingantt erstellt oder damit geöffnet haben. Der Rest Ihres Drive bleibt für Ingantt unsichtbar — deshalb kann Ingantt auch nicht Ihre Drive-Ordner für Sie durchsuchen.

## Projekte in Google Drive erstellen und öffnen

Sobald Sie angemeldet sind, ist der Projekte-Bildschirm Ihr Drive:

- **Zuletzt verwendete Projekte** — die Projekte, die Sie zuletzt geöffnet haben, nach Datum gruppiert.
- **Für mich freigegeben** — Ingantt-Dateien, die andere Personen für Sie freigegeben haben.
- **Markiert** — Projekte, die Sie mit **Zu „Markiert“ hinzufügen** markiert haben.
- **Papierkorb** — Projekte, die Sie in den Papierkorb verschoben haben. Mit **Wiederherstellen** holen Sie eines zurück.

Verwenden Sie **Öffnen** → **Aus Google Drive öffnen**, um eine vorhandene Datei auszuwählen, oder den Reiter **Hochladen** dieses Dialogs, um eine Datei auf Ihrem Gerät zu suchen oder hineinzuziehen. Microsoft Project, Primavera und die anderen unterstützten Formate lassen sich auf diesem Weg öffnen — siehe [Import & Export](/de/getting-started/import-export/index.md).

Neue Projekte entstehen über **Neu** auf dem Projekte-Bildschirm: **Neues Projekt**, **Neu mit KI** oder **Neu aus Vorlage**. Wenn Sie im Web angemeldet sind, wird ein neues Projekt sofort in Google Drive angelegt und von da an automatisch gespeichert.

> **Fehlt eine Datei unter „Für mich freigegeben“?** Google verlangt, dass Sie eine freigegebene Datei zuerst aus Google Drive öffnen. Klicken Sie die Datei dort mit der rechten Maustaste an und wählen Sie **Öffnen mit** → **Ingantt**. Danach erscheint sie in der Liste.

## Ingantt aus der Google-Drive-Oberfläche heraus verwenden (Web)

Im Web kann Ingantt aus Drive heraus gestartet werden statt umgekehrt. Dafür ist die Berechtigung **Verbindung mit Google Drive herstellen** gedacht, und es funktioniert erst, wenn Ingantt aus dem [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"} zu Ihrem Drive hinzugefügt wurde.

- **Neu** → **Mehr** → **Ingantt** erstellt ein neues Ingantt-Projekt in dem Drive-Ordner, in dem Sie sich befinden.
- Rechtsklick auf eine Ingantt-Datei → **Öffnen mit** → **Ingantt** öffnet sie in Ingantt für Web.

In beiden Fällen öffnet Drive `web.ingantt.com` und übergibt den zu verwendenden Ordner bzw. die Datei, sodass Sie direkt im richtigen Projekt landen.

## Fehlerbehebung bei der Google-Anmeldung (Web)

**Google Drive bietet Ingantt in den Menüs „Neu“ oder „Öffnen mit“ nicht an.** Melden Sie sich in Ingantt von Google ab, melden Sie sich erneut an und stellen Sie sicher, dass Sie die Berechtigung **Verbindung mit Google Drive herstellen** erteilen. Google fügt die Drive-Menüeinträge erst hinzu, wenn diese Berechtigung erteilt wurde, und sie lässt sich auf dem Zustimmungsbildschirm leicht übersehen. Fehlen die Einträge weiterhin, prüfen Sie, ob Ingantt aus dem Google Workspace Marketplace zu Ihrem Konto hinzugefügt ist.

**Eine Datei, die jemand für Sie freigegeben hat, fehlt unter „Für mich freigegeben“.** Öffnen Sie sie einmal aus Google Drive mit **Öffnen mit** → **Ingantt**. Da Ingantt nur auf Dateien zugreifen kann, die Sie mit Ingantt verwenden, bleibt eine freigegebene Datei für Ingantt unsichtbar, bis Sie sie mindestens einmal auf diesem Weg geöffnet haben.

**„Fehler beim Speichern der Datei in Google Drive“.** Prüfen Sie zuerst Ihre Verbindung. Bleibt der Fehler bestehen, melden Sie sich von Google ab und erneut an — die Anmeldung ist möglicherweise abgelaufen oder hat eine Berechtigung verloren.

**„Anmeldung bei Google nicht möglich.“** Wenn Sie mehr als ein Google-Konto verwenden, achten Sie darauf, dass sich das Popup mit dem Konto anmeldet, dem Ihre Projekte gehören. Auch Browser-Erweiterungen, die Drittanbieter-Cookies oder Popups blockieren, können den Google-Dialog am Abschluss hindern.

Kommen Sie nicht weiter? [Kontaktieren Sie den Support](mailto:support@ingantt.com) und nennen Sie uns Ihre Plattform, Ihren Browser und die genaue Meldung, die Sie sehen.

## Video-Anleitung

[Ingantt für Web mit Google Drive verwenden](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## Verwandte Themen

- [Projekt speichern](/de/getting-started/saving/index.md) — Speicherziele, Autosave und Offline-Arbeiten.
- [Projekt freigeben](/de/ui/sharing/index.md) — anderen Personen Zugriff auf einen Plan geben.
