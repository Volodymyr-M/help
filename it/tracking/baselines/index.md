# Baseline

Salva un'istantanea del cronogramma prima dell'inizio dei lavori, poi confrontala con lo stato attuale per vedere dove il progetto ha deviato.

Una baseline cattura la data di inizio, la data di fine, la durata, il lavoro e il costo di ogni attività in un determinato momento.

## Impostare una baseline

Imposta una baseline dal menu **Progetto** usando il sottomenu **Imposta previsione**:

- Puoi impostare una baseline per tutte le attività o solo per quelle selezionate.
- Ingantt supporta fino a 11 baseline.

## Visualizzare le baseline

Una volta salvata una baseline, puoi visualizzarla nel diagramma di Gantt attivando la visibilità della baseline nella finestra **Previsioni**. Le barre della baseline appaiono come barre più sottili sotto le barre delle attività correnti, con un colore distinto per ogni numero di baseline.

Per gestire le baseline, usa la voce **Previsioni** nel menu **Progetto**. La finestra **Previsioni** ti permette di:

- Visualizzare tutte le baseline salvate
- Rimuovere le baseline di cui non hai più bisogno
- Designare quale baseline viene utilizzata per i calcoli [Earned Value](/it/tracking/earned-value/index.md#earned-value-management)

## Colonne di baseline e scostamento

Puoi aggiungere colonne di baseline e di scostamento all'elenco delle attività tramite la finestra **Opzioni**. In totale ci sono **55 colonne di baseline** e **5 colonne di scostamento**.

### Le 55 colonne di baseline

Ingantt memorizza **11 baseline**: la **Previsione** senza numero, più da **Previsione 1** a **Previsione 10**. Ognuna espone le stesse cinque colonne di attività:

- Baseline Start
- Baseline Finish
- Baseline Duration
- Baseline Work
- Baseline Cost

11 baseline × 5 campi = **55 colonne di baseline**, tutte disponibili dal selettore delle colonne nella tabella delle attività. Il set senza numero ha il nome semplice (*Inizio Baseline*); quelli numerati portano il proprio numero (*Inizio Baseline 3*).

### Le 5 colonne di scostamento

Le colonne di scostamento sono calcolate — cronogramma attuale meno baseline — e sono cinque:

- Start Variance
- Finish Variance
- Duration Variance
- Work Variance
- Cost Variance

Esiste un solo set di cinque, non un set per ogni baseline. Confrontano il cronogramma attuale con **una** baseline — quella selezionata come [baseline Earned Value](/it/tracking/earned-value/index.md#previsione-per-valore-acquisito) in **Progetto → Opzioni Valore Acquisito**, che per impostazione predefinita è la Baseline senza numero. Cambia quell'impostazione e ogni colonna di scostamento viene ricalcolata rispetto alla baseline scelta. Un'attività la cui baseline scelta non è mai stata impostata mostra uno scostamento vuoto anziché zero.

## Dove vengono memorizzate le baseline

Le baseline sono memorizzate **all'interno del file di progetto**, non in un file separato. Salvando il progetto si salvano anche le sue baseline.

Se provi a impostare una dodicesima baseline, Ingantt ti avvisa: *Tutti gli slot delle previsioni sono in uso. Eliminarne uno prima nel dialogo Previsioni.* Apri **Progetto → Previsioni** e liberane uno.

Le baseline non sono la stessa cosa della [cronologia delle versioni](/it/ui/version-history/index.md), che registra il file stesso nel tempo. Usa la cronologia delle versioni per tornare a un piano precedente; usa le baseline per misurare di quanto il piano attuale si è discostato.

## Piani Provvisori

I piani intermedi memorizzano istantanee leggere del cronogramma (solo le date di **Inizio** e **Fine**) per un confronto rapido senza il sovraccarico delle baseline complete. Ingantt supporta fino a 10 piani intermedi (da `Interim Plan 1` a `Interim Plan 10`).

Imposta e cancella i piani intermedi dalla voce **Piani Provvisori** nel menu **Progetto**. Puoi visualizzare le date dei piani intermedi come colonne nell'elenco delle attività.
