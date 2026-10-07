# Dipendenze

I progetti reali hanno un ordine — non puoi testare prima di costruire. Collega le attività tra loro in modo che Ingantt calcoli la sequenza corretta e sposti tutto automaticamente quando un'attività cambia.

## Predecessori e dipendenze

Quando colleghi le attività usando il pulsante **Link selected tasks** nella barra degli strumenti, crei una dipendenza tra le attività. La dipendenza è chiamata **Fine a Inizio**, ed è una delle quattro dipendenze disponibili:

| Tipo                | Descrizione                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| **Fine a Inizio** | La seconda attività può iniziare una volta che la prima è terminata.                       |
| **Fine a Fine**| La seconda attività termina quando la prima termina.                        |
| **Inizio a Fine** | La seconda attività termina quando la prima inizia.                          |
| **Inizio a Inizio**  | La seconda attività inizia quando la prima inizia.                            |

![Dependencies](/images/building-schedule/tasks/dependencies.png)

Per assegnare predecessori e modificare le dipendenze, usa la scheda **Predecessori** della finestra **Proprietà del Compito**.

## Ritardo e anticipo

A volte potresti aver bisogno di impostare un tempo di attesa tra due attività dipendenti.

Supponiamo che la prima attività sia "Dipingere il muro" e la seconda sia "Appendere i quadri al muro". Queste attività sono collegate (hanno una dipendenza **Fine a Inizio**). Non è possibile appendere i quadri finché la vernice non è asciutta, quindi è necessario attendere. Per riflettere questo nel cronogramma, imposta il **Ritardo** (ad esempio, 2 giorni) per la dipendenza tra le due attività.

![Lag](/images/building-schedule/tasks/lag.png)

I ritardi possono anche rappresentare lo scenario opposto — quando un'attività dipendente deve iniziare prima che il predecessore termini. Per impostarlo, rendi il **Ritardo** negativo (ad esempio, -1 giorno). Questo è chiamato _anticipo_.

Per impostare un ritardo o un anticipo, seleziona il predecessore nella scheda **Predecessori** della finestra **Proprietà del Compito** e fai clic sul pulsante **Modifica**.

> I ritardi possono essere impostati in ore, giorni, settimane, mesi o come frazione della durata dell'attività predecessore (ad esempio, 50%).

## Dipendenze circolari

Se crei accidentalmente una dipendenza circolare — ad esempio, rendendo due attività predecessori l'una dell'altra — Ingantt la rileva e annulla l'ultima azione. Questo si applica anche a catene circolari complesse.

Quando apri un file di progetto che contiene dipendenze circolari, Ingantt rimuove automaticamente i collegamenti problematici in modo che il progetto possa essere pianificato. Un messaggio di avviso mostra quanti collegamenti di dipendenza circolare sono stati rimossi durante l'importazione.
