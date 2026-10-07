# Einschränkungen

Manche Vorgänge müssen an bestimmten Terminen beginnen oder enden — eine Lieferung kommt am Dienstag an, eine Genehmigung läuft am Freitag ab. Einschränkungen ermöglichen es Ihnen, Termine dort festzusetzen, wo es nötig ist, und den Rest des Terminplans flexibel zu halten.

## Wie Einschränkungen funktionieren

Zusammen mit Vorgangsabhängigkeiten (Vorgängerverknüpfungen) bestimmt die Einschränkung eines Vorgangs, wie der Vorgang geplant wird.

Einschränkungen werden auf dem Reiter **Erweitert** des Dialogs **Aufgabeneigenschaften** festgelegt. Die Standardeinschränkung ist **So bald wie möglich**. Dies bedeutet, dass der Vorgang unter Berücksichtigung der Abhängigkeiten zu anderen Vorgängen so nah wie möglich am Projektstartdatum geplant wird. Bei Projekten, die vom Enddatum aus geplant werden, ist der Standard stattdessen **So spät wie möglich**.

Es gibt zwei Einschränkungen, die den Vorgang zwingen, am angegebenen Datum zu beginnen oder zu enden, unabhängig von Abhängigkeiten. Diese Einschränkungen werden als _unflexible Einschränkungen_ bezeichnet und sind **Muss beginnen am** und **Muss enden am**. Verwenden Sie diese Einschränkungen nur, wenn Sie sicher sind, dass sie notwendig sind.

Andere Einschränkungen (**Beginn nicht vor**, **Beginn nicht nach**, **Ende nicht vor** und **Ende nicht nach**) werden als _flexibel_ bezeichnet, da sie Vorgangsabhängigkeiten berücksichtigen. Wenn Abhängigkeiten den Vorgang über das Einschränkungsdatum hinaus verschieben, hat das durch die Abhängigkeit bestimmte Datum Vorrang.

| Einschränkung                | Beschreibung                                                                                                                                  |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **So bald wie möglich**      | Der Vorgang wird so früh geplant, wie es die Vorgänger erlauben. Wenn keine Vorgänger verknüpft sind, beginnt der Vorgang am Anfang des übergeordneten Sammelvorgangs. |
| **So spät wie möglich**      | Der Vorgang wird so spät geplant, wie es die Vorgänger erlauben. Wenn keine Vorgänger verknüpft sind, endet der Vorgang am Ende des übergeordneten Sammelvorgangs.    |
| **Beginn nicht vor**    | Wenn der Vorgang aufgrund von Vorgängern später als das angegebene Datum beginnt, ändert sich nichts. Andernfalls wird der Vorgang so geplant, dass er am angegebenen Datum beginnt. |
| **Beginn nicht nach**      | Wenn Vorgänger den Vorgang über das Einschränkungsdatum hinaus verschieben, hat das durch die Abhängigkeit bestimmte Datum Vorrang. Andernfalls wird der Vorgang so geplant, dass er bis zum angegebenen Datum beginnt. |
| **Ende nicht vor**   | Wenn der Vorgang aufgrund von Vorgängern später als das angegebene Datum endet, ändert sich nichts. Andernfalls wird der Vorgang so geplant, dass er am angegebenen Datum endet. |
| **Ende nicht nach**     | Wenn Vorgänger den Vorgang über das Einschränkungsdatum hinaus verschieben, hat das durch die Abhängigkeit bestimmte Datum Vorrang. Andernfalls wird der Vorgang so geplant, dass er bis zum angegebenen Datum endet. |
| **Muss beginnen am**            | Das Startdatum des Vorgangs wird exakt wie angegeben geplant, unabhängig von Vorgängern.                                                    |
| **Muss enden am**           | Das Enddatum des Vorgangs wird exakt wie angegeben geplant, unabhängig von Vorgängern.                                                      |

Vorgänge mit einer flexiblen oder unflexiblen Einschränkung zeigen ein spezielles Symbol in der Vorgangsliste an.

> Belassen Sie die meisten Vorgänge auf **So bald wie möglich** und verwenden Sie flexible Einschränkungen nur für Vorgänge, die in der Nähe eines bestimmten Datums beginnen oder enden müssen.
