# Monitoraggio dell'avanzamento

Una volta iniziati i lavori, aggiorna la **% completato** di ogni attività per monitorare come l'avanzamento effettivo si confronta con il piano. Usa **Aggiorna Progetto** per impostare l'avanzamento in blocco. Man mano che l'avanzamento viene registrato, Ingantt calcola automaticamente i [valori effettivi](/it/tracking/actuals/index.md) — valori effettivi e residui per durata, lavoro, costo e date.

## % di completamento

Una volta che il progetto è in corso, è necessario monitorarne l'avanzamento. Se mantieni aggiornata la **% completato** per ogni attività, puoi vedere la **% completato** complessiva del progetto nell'attività di riepilogo radice.

Usa il campo **% completato** nella finestra **Proprietà del Compito** per impostare la percentuale di completamento di una particolare attività. Le attività completate al 100% mostrano un'icona a forma di segno di spunta verde nell'elenco delle attività.

Quando aggiorni la % di completamento:

- Impostarla sopra lo 0% imposta l'**Inizio Effettivo** dell'attività alla data di inizio pianificata dell'attività.
- Impostarla al 100% imposta l'**Fine Effettiva** dell'attività alla data di fine pianificata dell'attività.
- L'**Durata effettiva** e la **Durata rimanente** vengono calcolate automaticamente in base alla percentuale di completamento.
- Se **L'aggiornamento dello stato dell'attività aggiorna lo stato della risorsa** è abilitato nelle impostazioni del progetto (impostazione predefinita), anche l'**Lavoro effettivo** e il **Lavoro rimanente** vengono aggiornati proporzionalmente.

La **% completato** di un'attività di riepilogo viene calcolata come media ponderata sulla durata di tutte le sottoattività non di riepilogo discendenti.

> Puoi anche monitorare l'avanzamento usando il comando [Aggiorna Progetto](#aggiorna-progetto) per impostare la % di completamento per più attività contemporaneamente basandoti su una data di riferimento.

## Aggiorna Progetto

Il comando **Aggiorna Progetto** fornisce operazioni di monitoraggio dell'avanzamento in blocco, accessibili dal menu **Progetto**.

### Update Work as Complete

Contrassegna le attività come completate fino a una data specificata:

- **Proporzionale (0%–100%)** — Calcola la percentuale di completamento in base a quanto della durata lavorativa di ogni attività ricade prima della data di riferimento.
- **Tutto o niente (0% o 100%)** — Imposta le attività allo 0% o al 100% in base al fatto che terminino entro la data di riferimento.

### Reschedule Uncompleted Work

Sposta il lavoro non completato per iniziare dopo una data specificata:

- Le attività non ancora iniziate ricevono un vincolo **Inizio non prima di**.
- Le attività in corso vengono suddivise se **Dividi attività in corso** è abilitato nelle opzioni di pianificazione del progetto.
- Le attività completate non vengono modificate.
