# Valori effettivi

Man mano che il lavoro avanza e aggiorni la [% Complete](/it/tracking/progress/index.md#-di-completamento), Ingantt calcola automaticamente i valori effettivi e residui per durata, lavoro, costo e date. Questi campi ti permettono di vedere esattamente cosa è stato speso, cosa resta e come il progetto sta procedendo rispetto al piano.

Le colonne più comuni di valori effettivi e residui sono **Actual Cost** / **Remaining Cost**, **Actual Work** / **Remaining Work** e **Actual Duration** / **Remaining Duration**. Guardando questi valori nell'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice), puoi vedere i totali dell'intero progetto a colpo d'occhio — quanto è stato speso, quanto sforzo è stato impiegato e quanto resta da fare. Assicurati che l'attività di riepilogo radice sia visibile: seleziona **Show root summary task** nel menu **View** o nella finestra **Options**.

## Visualizzare le colonne effettive e residue

Le colonne di valori effettivi e residui non sono visibili per impostazione predefinita. Per aggiungerle all'elenco delle attività, apri la finestra **Options** (scheda **Task Columns**) e abilita le colonne necessarie. Puoi anche fare clic destro sull'intestazione di una colonna nella griglia delle attività per accedere rapidamente alle impostazioni delle colonne.

### Durata

- **Actual Duration** — La quantità di tempo lavorativo dedicata a un'attività finora. Calcolata come la durata dell'attività moltiplicata per la sua % di completamento.
- **Remaining Duration** — Il tempo lavorativo ancora necessario per completare l'attività: Duration - Actual Duration.

Ad esempio, un'attività di 10 giorni al 40% di completamento ha una Actual Duration di 4 giorni e una Remaining Duration di 6 giorni.

### Lavoro

- **Actual Work** — Lo sforzo totale (in ore) che le risorse hanno dedicato a un'attività. Quando **Updating task status updates resource status** è abilitato nelle impostazioni del progetto (impostazione predefinita), l'Actual Work viene aggiornato proporzionalmente quando modifichi la % di completamento.
- **Remaining Work** — Lo sforzo ancora necessario per completare l'attività: Work - Actual Work.

### Costo

- **Actual Cost** — I costi sostenuti finora: la somma dei costi fissi maturati e dei costi delle risorse maturati. Il modo in cui i costi maturano dipende dall'impostazione **Cost Accrual** di ogni risorsa:
  - **Start** — L'intero costo viene riconosciuto quando viene impostata l'Actual Start.
  - **Prorated** — Il costo viene riconosciuto proporzionalmente in base all'avanzamento effettivo del lavoro.
  - **End** — Il costo viene riconosciuto solo quando l'attività raggiunge il 100% di completamento.
- **Remaining Cost** — Il budget ancora necessario per completare l'attività: Total Cost - Actual Cost.

### Date

- **Actual Start** — La data in cui il lavoro è effettivamente iniziato. Impostata automaticamente alla data di inizio pianificata dell'attività quando la % di completamento supera lo 0%.
- **Actual Finish** — La data in cui il lavoro è stato effettivamente completato. Impostata automaticamente alla data di fine pianificata dell'attività quando la % di completamento raggiunge il 100%.

### Straordinari

- **Actual Overtime Work** — Ore di straordinario già lavorate sull'attività.
- **Remaining Overtime Work** — Ore di straordinario ancora previste.
- **Actual Overtime Cost** — Costi di straordinario già sostenuti.
- **Remaining Overtime Cost** — Costi di straordinario ancora previsti.

## Come vengono calcolati i valori effettivi

Tutti i campi effettivi e residui mantengono la relazione:

> **Totale = Effettivo + Residuo**

Quando modifichi un valore, Ingantt aggiorna gli altri per mantenerli coerenti. Il flusso di lavoro più comune consiste nell'aggiornare la **% Complete**, che si propaga automaticamente a tutti i campi effettivi e residui:

1. L'**Actual Duration** e la **Remaining Duration** vengono ricalcolate dalla nuova percentuale.
2. L'**Actual Work** e il **Remaining Work** vengono aggiornati (se l'impostazione del progetto è abilitata).
3. L'**Actual Start** e l'**Actual Finish** vengono impostate in base all'avanzamento.
4. L'**Actual Cost** e il **Remaining Cost** vengono ricalcolati in base al metodo di maturazione.

Per le attività di riepilogo, **Actual Work**, **Remaining Work**, **Actual Cost** e **Remaining Cost** vengono calcolati per somma dalle attività figlio. L'**Actual Start** è la prima data di inizio effettiva tra le attività figlio e l'**Actual Finish** è l'ultima data di fine effettiva.

## Colonne delle attività

Oltre ai valori effettivi e residui, Ingantt supporta un'ampia gamma di colonne per le attività — dati di pianificazione, informazioni sul percorso critico, costo, lavoro, metriche Earned Value, baseline, campi personalizzati e codici struttura. Tutte le colonne possono essere attivate, disattivate e riordinate usando la finestra **Options** (scheda **Task Columns**). Puoi anche fare clic destro sull'intestazione di una colonna nella griglia delle attività per accedere rapidamente alle impostazioni delle colonne.
