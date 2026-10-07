# PSP-Codes

Jeder Vorgang hat einen **WBS**-Code — seine Adresse in der Gliederung. Standardmäßig ist es die einfache Gliederungsnummer: `1`, `1.1`, `1.2`, `1.2.1`. Blenden Sie ihn ein, indem Sie die Spalte **WBS** in der Vorgangstabelle aktivieren.

Eine **PSP-Code-Maske** ersetzt diese Gliederungsnummern durch einen strukturierten Code nach Ihrem eigenen Entwurf, sodass Vorgänge als `PROJ-A-01` oder `1.A.001` statt `1.1.1` erscheinen. Organisationen mit einem Nummerierungsstandard — ein Vertrag, ein Kostencode-Schema, das Berichtsformat eines Kunden — nutzen dies, damit die Codes von Ingantt dazu passen.

Öffnen Sie **Projekt → PSP-Code-Definition**, um eine einzurichten.

## PSP-Codes und Gliederungscodes sind verschieden

- Ein **PSP-Code** ist strukturell. Es gibt genau einen pro Vorgang, und er leitet sich daraus ab, wo der Vorgang in der Gliederung steht. Er nummeriert sich selbst neu, wenn Sie Vorgänge verschieben.
- Ein **[Gliederungscode](/de/adjusting-schedule/custom-fields/index.md)** ist eine Markierung. Sie definieren eine Nachschlageliste — Abteilung, Phase, Kostenstelle — und weisen Vorgängen Werte unabhängig von der Hierarchie zu. Ein Vorgang kann mehrere tragen, aus mehreren Gliederungscodes.

## Die Maske definieren

Der Dialog besteht aus drei Teilen.

### Projektcode-Präfix

Fester Text, der jedem Code im Projekt vorangestellt wird. Mit dem Präfix `PROJ` erscheinen die Codes je nach Ihren Trennzeichen als `PROJ.1.1` oder `PROJ-A-01`. Lassen Sie es leer, wenn Sie kein Präfix wünschen.

### Code-Maske

Eine Zeile pro Gliederungsebene, hinzugefügt mit **Ebene hinzufügen**. Jede Zeile legt fest:

| Feld | Funktion |
|-------|--------------|
| **Ebene** | Die Gliederungstiefe, für die diese Zeile gilt. Ebene 1 sind Vorgänge der obersten Ebene, Ebene 2 deren untergeordnete Vorgänge und so weiter. |
| **Sequenz** | Die auf dieser Ebene verwendeten Zeichen: **Zahlen** (1, 2, 3), **Großbuchstaben** (A, B, C … Z, AA), **Kleinbuchstaben** (a, b, c … z, aa) oder **Zeichen**. |
| **Länge** | Maximale Zeichenanzahl auf dieser Ebene. Lassen Sie das Feld leer — es zeigt *Beliebig* an — für keine Begrenzung. |
| **Trennzeichen** | Das Zeichen zwischen dieser Ebene und der nächsten, etwa `.` oder `-`. |

Zwei Dinge zum Verhalten der Felder sind wissenswert:

- **Die Länge füllt Zahlen mit führenden Nullen auf.** Eine Länge von `3` auf einer Zahlen-Ebene macht aus dem neunten Vorgang `009`. Buchstaben-Ebenen werden nicht aufgefüllt.
- **Zeichen** verhält sich für Codes, die Ingantt generiert, genauso wie Zahlen. Die Option existiert aus Kompatibilität mit Microsoft Project, wo sie eine Ebene bezeichnet, die Sie selbst eingeben.

Sie müssen nicht jede Ebene definieren. **Ebenen tiefer als Ihre letzte Maskenzeile fallen auf eine Zahl mit `.` als Trennzeichen zurück**, sodass eine Maske mit drei Zeilen auch bei einem fünf Ebenen tiefen Plan einen vollständigen Code erzeugt.

### Optionen

**PSP-Code für neue Aufgabe generieren** und **Eindeutigkeit neuer PSP-Codes überprüfen** werden mit dem Projekt gespeichert und bleiben bei einem Austausch mit Microsoft Project in beide Richtungen erhalten. In Ingantt wird eine Maske mit mindestens einer Ebene automatisch auf jeden Vorgang angewendet, und die Codes sind konstruktionsbedingt eindeutig, weil sie der Gliederung folgen.

## Was beim Speichern der Maske passiert

Ingantt nummeriert das gesamte Projekt sofort neu. Die Codes werden bei jeder Strukturänderung aus der Gliederung neu aufgebaut — wenn Sie einen Vorgang hinzufügen, löschen, einrücken, ausrücken oder verschieben —, sodass sie immer beschreiben, wo der Vorgang jetzt steht.

Das sollte klar gesagt werden: **Ein PSP-Code ist keine dauerhafte Kennung für einen Vorgang.** Verschieben Sie einen Vorgang, ändert sich sein Code. Wenn Sie eine Beschriftung benötigen, die einem Vorgang folgt, verwenden Sie stattdessen einen Gliederungscode oder ein [benutzerdefiniertes Textfeld](/de/adjusting-schedule/custom-fields/index.md).

## Import und Export

Die Maske ist Teil des Microsoft-Project-Formats und übersteht einen Austausch in beide Richtungen. Ein mit einer Maske importiertes Projekt behält sie, exportiert sie mit, und seine Vorgangscodes entsprechen dem, was Microsoft Project erzeugt hat.
