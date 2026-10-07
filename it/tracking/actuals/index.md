# Valori effettivi

Man mano che il lavoro avanza e aggiorni la [% di completamento](/it/tracking/progress/index.md#-di-completamento), Ingantt calcola automaticamente i valori effettivi e residui per durata, lavoro, costo e date. Questi campi ti permettono di vedere esattamente cosa è stato speso, cosa resta e come il progetto sta procedendo rispetto al piano.

Le colonne più comuni di valori effettivi e residui sono **Costo effettivo** / **Costo rimanente**, **Lavoro effettivo** / **Lavoro rimanente** e **Durata effettiva** / **Durata rimanente**. Guardando questi valori nell'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice), puoi vedere i totali dell'intero progetto a colpo d'occhio — quanto è stato speso, quanto sforzo è stato impiegato e quanto resta da fare. Assicurati che l'attività di riepilogo radice sia visibile: seleziona **Mostra compito di riepilogo principale** nel menu **Visualizza** o nella finestra **Opzioni**.

## Visualizzare le colonne effettive e residue

Le colonne di valori effettivi e residui non sono visibili per impostazione predefinita. Per aggiungerle all'elenco delle attività, apri la finestra **Opzioni** (scheda **Colonne dei compiti**) e abilita le colonne necessarie. Puoi anche fare clic destro sull'intestazione di una colonna nella griglia delle attività per accedere rapidamente alle impostazioni delle colonne.

### Durata

- **Durata effettiva** — La quantità di tempo lavorativo dedicata a un'attività finora. Calcolata come la durata dell'attività moltiplicata per la sua % di completamento.
- **Durata rimanente** — Il tempo lavorativo ancora necessario per completare l'attività: Duration − Actual Duration.

Ad esempio, un'attività di 10 giorni al 40% di completamento ha una Actual Duration di 4 giorni e una Remaining Duration di 6 giorni.

### Lavoro

- **Lavoro effettivo** — Lo sforzo totale (in ore) che le risorse hanno dedicato a un'attività. Quando **L'aggiornamento dello stato dell'attività aggiorna lo stato della risorsa** è abilitato nelle impostazioni del progetto (impostazione predefinita), l'Actual Work viene aggiornato proporzionalmente quando modifichi la % di completamento.
- **Lavoro rimanente** — Lo sforzo ancora necessario per completare l'attività: Work − Actual Work.

### Costo

- **Costo effettivo** — I costi sostenuti finora: la somma dei costi fissi maturati e dei costi delle risorse maturati. Il modo in cui i costi maturano dipende dall'impostazione **Attribuzione costi** di ogni risorsa:
  - **Inizio** — L'intero costo viene riconosciuto quando viene impostata l'Actual Start.
  - **Proporzionale** — Il costo viene riconosciuto proporzionalmente in base all'avanzamento effettivo del lavoro.
  - **Fine** — Il costo viene riconosciuto solo quando l'attività raggiunge il 100% di completamento.
- **Costo rimanente** — Il budget ancora necessario per completare l'attività: Total Cost − Actual Cost.

### Date

- **Inizio Effettivo** — La data in cui il lavoro è effettivamente iniziato. Impostata automaticamente alla data di inizio pianificata dell'attività quando la % di completamento supera lo 0%.
- **Fine Effettiva** — La data in cui il lavoro è stato effettivamente completato. Impostata automaticamente alla data di fine pianificata dell'attività quando la % di completamento raggiunge il 100%.

### Straordinari

- **Lavoro Straordinario Effettivo** — Ore di straordinario già lavorate sull'attività.
- **Lavoro Straordinario Residuo** — Ore di straordinario ancora previste.
- **Costo Straordinario Effettivo** — Costi di straordinario già sostenuti.
- **Costo Straordinario Residuo** — Costi di straordinario ancora previsti.

## Come vengono calcolati i valori effettivi

Tutti i campi effettivi e residui mantengono la relazione:

> **Totale = Effettivo + Residuo**

Quando modifichi un valore, Ingantt aggiorna gli altri per mantenerli coerenti. Il flusso di lavoro più comune consiste nell'aggiornare la **% completato**, che si propaga automaticamente a tutti i campi effettivi e residui:

1. L'**Durata effettiva** e la **Durata rimanente** vengono ricalcolate dalla nuova percentuale.
2. L'**Lavoro effettivo** e il **Lavoro rimanente** vengono aggiornati (se l'impostazione del progetto è abilitata).
3. L'**Inizio Effettivo** e l'**Fine Effettiva** vengono impostate in base all'avanzamento.
4. L'**Costo effettivo** e il **Costo rimanente** vengono ricalcolati in base al metodo di maturazione.

Per le attività di riepilogo, **Lavoro effettivo**, **Lavoro rimanente**, **Costo effettivo** e **Costo rimanente** vengono calcolati per somma dalle attività figlio. L'**Inizio Effettivo** è la prima data di inizio effettiva tra le attività figlio e l'**Fine Effettiva** è l'ultima data di fine effettiva.

## Colonne dei compiti

Oltre ai valori effettivi e residui, Ingantt supporta un'ampia gamma di colonne per le attività — dati di pianificazione, informazioni sul percorso critico, costo, lavoro, metriche Earned Value, baseline, campi personalizzati e codici struttura. Tutte le colonne possono essere attivate, disattivate e riordinate usando la finestra **Opzioni** (scheda **Colonne dei compiti**). Puoi anche fare clic destro sull'intestazione di una colonna nella griglia delle attività per accedere rapidamente alle impostazioni delle colonne.
