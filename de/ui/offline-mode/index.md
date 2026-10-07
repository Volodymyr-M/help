# Offline arbeiten

Schalten Sie Autosave aus, damit nichts in Google Drive geschrieben wird, bis Sie bewusst speichern — nützlich, wenn Sie Ihre Verbindung gleich verlieren werden.

In der **Web**-Version heißt der Menüeintrag **Datei → Offline arbeiten (kein Autosave)**. Unter Windows, macOS, Android und iOS heißt derselbe Schalter **Autosave aktivieren**.

## Was „Offline arbeiten“ bewirkt

**Datei → Offline arbeiten** schaltet Autosave für den aktuellen Tab aus. Das ist alles. Solange es aktiv ist, hört Ingantt auf, Ihr Projekt alle 20 Sekunden in Google Drive zu schreiben, und nichts verlässt Ihren Browser, bis Sie speichern.

Beim Einschalten erscheint einmalig eine Erinnerung:

> Der Offline-Modus ist aktiv. Denken Sie daran, Ihre Änderungen manuell zu speichern, bevor Sie den Tab schließen.

Nehmen Sie das wörtlich. **Ingantt stellt Ihre Änderungen nicht in eine Warteschlange und sendet sie nicht, wenn Sie wieder online sind.** Es gibt keine Hintergrundsynchronisierung. Wenn Sie den Tab ohne Speichern schließen oder neu laden, ist die seit dem letzten Speichern geleistete Arbeit verloren.

## Speichern, während Sie offline sind

Ohne Verbindung können Sie nicht in Google Drive speichern; die Abfolge, die funktioniert, ist daher:

1. Öffnen Sie den Plan, solange Sie noch eine Verbindung haben.
2. Schalten Sie **Datei → Offline arbeiten** ein.
3. Bearbeiten Sie wie gewohnt. Alles geschieht im Browser — der Terminplan wird neu berechnet, Rückgängig und Wiederholen funktionieren, nichts wird irgendwohin gesendet.
4. Wenn Sie wieder online sind, schalten Sie **Offline arbeiten** wieder aus und drücken Sie dann **Speichern** (oder `Strg`/`Cmd` + `S`). Dies ist der Schritt, der Ihre Arbeit in Drive ablegt.
5. Ab diesem Punkt läuft Autosave weiter.

Wenn Sie sich lieber nicht darauf verlassen möchten, an Schritt 4 zu denken, exportieren Sie eine Kopie, bevor Sie die Verbindung verlieren: **Datei → Exportieren → XML** lädt den Plan auf Ihr Gerät herunter, und Sie können diese Datei später erneut öffnen.

## Die Schaltfläche „Speichern“ zeigt Ihnen, wo Sie stehen

Die Schaltfläche „Speichern“ in der Symbolleiste ist die Anzeige, die Sie im Auge behalten sollten:

| Was sie anzeigt | Was es bedeutet |
|---------------|---------------|
| **Datei in Google Drive gespeichert** | Alles ist in Drive. |
| **Autosave ausstehend…** | Es gibt ungespeicherte Änderungen; Autosave übernimmt sie in Kürze. |
| **Wird gespeichert…** | Ein Speichervorgang läuft. |
| **Datei in Google Drive speichern** | Es gibt ungespeicherte Änderungen und Autosave ist aus — Sie müssen speichern. |
| **Fehler beim Speichern der Datei in Google Drive** | Ein Speichervorgang wurde versucht und ist fehlgeschlagen. Ihre Änderungen sind noch im Tab und weiterhin ungespeichert. |

Der Fehlerzustand ist das, was Sie sehen, wenn Autosave läuft, während die Verbindung unterbrochen ist: Das Speichern schlägt fehl, die Schaltfläche wird rot, und das Projekt bleibt ungespeichert im Tab. In diesem Moment ist nichts verloren, aber auch nichts in Sicherheit — stellen Sie die Verbindung wieder her und speichern Sie.

## Unterschiede zwischen den Plattformen

- **Die Einstellung bleibt im Web nicht erhalten.** Sie gilt pro Tab und pro Sitzung. Öffnen Sie einen neuen Tab oder laden Sie neu, und Autosave ist wieder an. Das ist beabsichtigt — aktiviertes Autosave ist die sicherere Standardeinstellung, sodass ein vergessener Offline-Schalter Sie nicht verfolgen kann. Unter Windows, macOS, Android und iOS *wird* die Autosave-Einstellung gespeichert.
- **Die Standardwerte unterscheiden sich.** Im Web ist Autosave von Anfang an aktiviert. In den Desktop- und Mobil-Builds ist es von Anfang an deaktiviert, und derselbe Menüeintrag heißt **Autosave aktivieren**.
- **Ein Projekt, das Sie noch nicht gespeichert haben, wird überhaupt nicht automatisch gespeichert**, Offline-Modus hin oder her. Autosave kann nur eine Datei aktualisieren, die bereits in Drive existiert. Speichern Sie einmal, und Autosave übernimmt.
- **Eine in der Webversion von Ihrem Gerät geöffnete Datei wird nie automatisch gespeichert.** Ingantt für Web kann nicht in eine Datei auf Ihrer Festplatte zurückschreiben. Speichern Sie sie in [Google Drive](/de/ui/files/index.md), um Autosave zu erhalten.

## Offline arbeiten und „Mit KI bearbeiten“

Wenn Sie [Mit KI bearbeiten](/de/getting-started/edit-with-ai/index.md) verwenden, während Autosave aus ist, warnt Ingantt Sie. Die Änderungen der KI werden als gewöhnliche, rückgängig machbare Bearbeitungen auf das geöffnete Projekt angewendet — sie werden nicht von selbst gespeichert. Schließen Sie den Tab, ohne zu speichern, ist die Arbeit der KI weg, genau wie jede manuelle Bearbeitung.

## Was nicht unterstützt wird

Um die Erwartungen klar zu benennen:

- Ingantt erkennt nicht, dass Sie offline gegangen oder zurückgekommen sind.
- Ingantt stellt offline vorgenommene Änderungen nicht in eine Warteschlange und spielt sie bei Wiederverbindung nicht nach.
- Es gibt keine Auflösung von Synchronisierungskonflikten, weil es keine Synchronisierung gibt. Wenn Sie und ein Kollege dieselbe Drive-Datei bearbeiten, gewinnt das letzte Speichern — die gesamte Datei, nicht Vorgang für Vorgang zusammengeführt.
- Das erstmalige Öffnen eines Plans erfordert eine Verbindung. Offline arbeiten hält einen bereits geöffneten Plan bearbeitbar; es ermöglicht nicht, einen neuen zu öffnen.
