# Comprendere i costi

Assegna costi alle attività e alle risorse per vedere il prezzo totale del progetto. L'attività di riepilogo radice mostra il totale complessivo — confrontalo con le risorse di budget per sapere se il progetto rientra nel budget approvato.

## Come viene calcolato il costo dell'attività

Il costo di ogni attività è una combinazione del proprio costo fisso e dei costi delle risorse assegnate. Ingantt calcola il costo totale di ogni attività e lo visualizza nella colonna **Cost** nell'elenco delle attività.

*Il **Cost** dell'attività = **Fixed Cost** dell'attività + costi delle risorse assegnate all'attività*

> Se non vedi la colonna **Cost** nell'elenco delle attività, assicurati che il flag **Cost Column** sia selezionato nella scheda **Task Columns** della finestra **Options**.

## Costi delle attività di riepilogo

Nel campo **Cost**, ogni [attività di riepilogo](/it/building-schedule/tasks/index.md#attività-di-riepilogo) mostra il costo totale di tutte le sue sottoattività.

Tuttavia, proprio come un'attività normale, un'attività di riepilogo può avere [risorse assegnate](/it/building-schedule/assignments/index.md#assegnazioni-delle-risorse-e-unità) e un **Fixed Cost**. Questi si aggiungono al costo totale delle sottoattività, aumentando il **Cost** dell'attività di riepilogo.

*Il **Cost** dell'attività di riepilogo = costo totale di tutte le sottoattività + **Fixed Cost** dell'attività di riepilogo + costi delle risorse assegnate all'attività di riepilogo*

Usa l'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice) per visualizzare e gestire il costo totale dell'intero progetto.

## Risorse di budget

Una risorsa può essere contrassegnata come risorsa **Budget** nella finestra **Resource Properties**. Le risorse di budget rappresentano gli importi di budget complessivi allocati a livello di progetto e possono essere assegnate solo all'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice).

Le risorse di budget sono escluse da:

- Pianificazione
- Totali dei costi
- Rilevamento della sovrallocazione
- Livellamento delle risorse

Forniscono un monitoraggio del budget dall'alto verso il basso, separato dai calcoli dei costi dal basso verso l'alto.

## Valuta

Se il tuo progetto utilizza una valuta diversa da quella predefinita di Ingantt, puoi cambiarla nella scheda **Regional** della finestra **Project Properties**. Specifica la valuta come simbolo (ad es., EUR), abbreviazione (EUR) o nome completo (euro).

Nella stessa scheda, puoi anche specificare la **Currency Position** — prima o dopo il valore, con o senza spazio.

> Quando cambi la valuta, i valori dei costi non vengono ricalcolati.
