# Baseline

Salva un'istantanea del cronogramma prima dell'inizio dei lavori, poi confrontala con lo stato attuale per vedere dove il progetto ha deviato.

Una baseline cattura la data di inizio, la data di fine, la durata, il lavoro e il costo di ogni attività in un determinato momento.

## Impostare una baseline

Imposta una baseline dal menu **Project** usando il sottomenu **Set baseline**:

- Puoi impostare una baseline per tutte le attività o solo per quelle selezionate.
- Ingantt supporta fino a 11 baseline.

## Visualizzare le baseline

Una volta salvata una baseline, puoi visualizzarla nel diagramma di Gantt attivando la visibilità della baseline nella finestra **Baselines**. Le barre della baseline appaiono come barre più sottili sotto le barre delle attività correnti, con un colore distinto per ogni numero di baseline.

Per gestire le baseline, usa la voce **Baselines** nel menu **Project**. La finestra **Baselines** ti permette di:

- Visualizzare tutte le baseline salvate
- Rimuovere le baseline di cui non hai più bisogno
- Designare quale baseline viene utilizzata per i calcoli [Earned Value](/it/tracking/earned-value/index.md#earned-value-management)

## Colonne di baseline e scostamento

Puoi aggiungere colonne di baseline (**Start**, **Finish**, **Duration**, **Work**, **Cost**) e colonne di scostamento (**Start Variance**, **Finish Variance**, ecc.) all'elenco delle attività tramite la finestra **Options**. Le colonne di scostamento mostrano la differenza tra il cronogramma attuale e la [baseline Earned Value](/it/tracking/earned-value/index.md#baseline-earned-value).

## Piani intermedi

I piani intermedi memorizzano istantanee leggere del cronogramma (solo le date di **Start** e **Finish**) per un confronto rapido senza il sovraccarico delle baseline complete. Ingantt supporta fino a 10 piani intermedi (`Interim Plan 1` fino a `Interim Plan 10`).

Imposta e cancella i piani intermedi dalla voce **Interim Plans** nel menu **Project**. Puoi visualizzare le date dei piani intermedi come colonne nell'elenco delle attività.
