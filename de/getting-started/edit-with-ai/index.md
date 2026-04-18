# Mit KI bearbeiten

Verbinden Sie Ihr Projekt mit einem KI-Coding-Assistenten wie Claude Code, Codex oder einem beliebigen Tool mit HTTP-Zugriff und lassen Sie es Änderungen an Ihrem Terminplan in Echtzeit vornehmen. Während die Sitzung läuft, kann die KI Ihr aktuelles Projekt lesen, Vorgänge hinzufügen oder ändern, Abhängigkeiten anpassen, Ressourcen zuweisen und Aktualisierungen zurückschicken — Sie sehen jede Änderung im Gantt-Diagramm in dem Moment, in dem sie angewendet wird.

> **Mit KI bearbeiten ist derzeit in der Beta-Phase.** Die Funktion ist in der Webversion von Ingantt verfügbar.

## Eine KI-Bearbeitungssitzung starten

1. Öffnen Sie das Projekt, das Sie bearbeiten möchten.
2. Klicken Sie oben rechts auf das Symbol **Mit KI bearbeiten** (✨), direkt neben der Schaltfläche für den Versionsverlauf.
3. Der Dialog zeigt eine Reihe von Anweisungen, die beschreiben, wie Ihr KI-Tool das Projekt lesen und schreiben soll.
4. Klicken Sie auf **Anweisungen kopieren**. Dies startet die Bearbeitungssitzung und kopiert die Anweisungen in Ihre Zwischenablage.
5. Fügen Sie die Anweisungen in Ihr KI-Tool ein (z. B. als erste Nachricht in einer Claude Code- oder Codex-Unterhaltung).
6. Bitten Sie die KI in natürlicher Sprache, Änderungen vorzunehmen — zum Beispiel: _„Eine zweiwöchige QA-Phase nach der Entwicklung hinzufügen"_ oder _„Alex allen Design-Vorgängen zuweisen"_.

Die KI folgt den Anweisungen, um die aktuelle YAML abzurufen, zu bearbeiten und das Ergebnis an Ingantt zurückzusenden. Ingantt validiert jede Bearbeitung, bevor sie akzeptiert wird.

## Was während einer Sitzung passiert

- **Der grüne Punkt** neben dem ✨-Symbol zeigt eine aktive Sitzung an. Der Punkt wird gelb, wenn die Verbindung wiederhergestellt wird, und rot, wenn ein Fehler in der Sitzung aufgetreten ist.
- **Jede KI-Änderung wird validiert** gegen die Projektregeln von Ingantt, bevor sie angewendet wird. Sendet die KI ungültige Daten, lehnt Ingantt die Änderung ab und teilt der KI mit, was schiefgelaufen ist, damit sie sich selbst korrigieren kann.
- **Ihre eigenen Bearbeitungen werden ebenfalls an die Sitzung übertragen.** Wenn Sie etwas in der Ingantt-Benutzeroberfläche ändern, während die Sitzung aktiv ist, sieht die KI Ihre Änderung beim nächsten Lesevorgang.
- **Der Scheduler bleibt maßgeblich.** Wenn die KI Termine oder Dauern festlegt, führt Ingantt die Critical-Path-Methode erneut aus, um den endgültigen Terminplan zu berechnen, was andere Vorgänge verschieben kann.

## Die Sitzung beenden

Klicken Sie während einer aktiven Sitzung auf das ✨-Symbol und wählen Sie **Sitzung beenden**. Sie können auch einfach den Browser-Tab schließen — die Sitzung endet nach einer gewissen Zeit der Inaktivität automatisch.

## Unterstützte KI-Tools

Jedes KI-Tool, das HTTP-Anfragen stellen kann, funktioniert mit „Mit KI bearbeiten". Gängige Optionen sind:

- **Claude Code** — fügen Sie die Anweisungen als erste Nachricht in eine Unterhaltung ein.
- **Codex** — fügen Sie die Anweisungen als erste Nachricht in eine Unterhaltung ein.
- **Andere Tools** — jeder Assistent mit Zugriff auf `curl` oder einen HTTP-Client kann die Sitzung lesen und schreiben.

## Tipps

- Lassen Sie den Ingantt-Tab geöffnet, solange die Sitzung aktiv ist. Wenn der Tab geschlossen wird, erhält die KI beim nächsten Schreibvorgang einen Fehler „Sitzung nicht verbunden".
- Sendet die KI ungültiges YAML, sehen Sie eine Benachrichtigung in der Ingantt-Benutzeroberfläche. Die KI erhält die Fehlerdetails und behebt das Problem in der Regel beim nächsten Versuch.
- Beginnen Sie bei großen Projekten mit einer fokussierten Anfrage (_„die Testphase umstrukturieren"_) anstatt mit umfassenden Änderungen — die KI kann in kleinen Schritten mit sofortigem Feedback iterieren.
- Die KI kann keine Informationen sehen, die ihr nicht gegeben werden. Wenn Ihre Anfrage von Kontext abhängt — Einschränkungen, Fristen oder Geschäftsregeln — nehmen Sie diese in Ihre Aufforderung auf.
