# Attività

Ogni cronogramma parte dalle attività. Definisci cosa deve essere fatto, quanto tempo richiederà e quando è prevista la scadenza. Una volta che le attività sono in posizione, vedrai la linea temporale del tuo progetto prendere forma nel diagramma di Gantt.

## Attività di riepilogo

Le attività di riepilogo ti aiutano a organizzare le attività raggruppandole insieme. Per creare un'attività di riepilogo, seleziona le attività che vuoi raggruppare, poi fai clic sul pulsante **Increase Indent** nella barra degli strumenti per rientrarle. Per riconvertire un'attività di riepilogo in un'attività normale, seleziona tutte le sue sottoattività e fai clic sul pulsante **Decrease Indent** per rimuovere il rientro.

Poiché le attività di riepilogo raggruppano altre attività, le loro proprietà derivano dalle sottoattività anziché essere impostate direttamente. La loro durata rappresenta la durata complessiva di tutte le attività all'interno del gruppo: la data di fine di un'attività di riepilogo è l'ultima data di fine tra le sue sottoattività.

Un'attività di riepilogo mostra anche la percentuale di completamento complessiva, il costo totale e il lavoro totale delle sue sottoattività.

Nel diagramma di Gantt, le attività di riepilogo sono visualizzate come barre nere. Nell'elenco delle attività, puoi **espandere** o **comprimere** le attività di riepilogo per mostrare o nascondere le loro sottoattività.

![Summary](/images/building-schedule/tasks/summary.png)

## Attività di riepilogo radice

In Ingantt, esiste sempre un'attività di riepilogo per l'intero progetto. Questa attività è l'attività numero 0, posizionata sopra tutte le altre attività.

L'attività di riepilogo radice potrebbe non essere visibile per impostazione predefinita. Per cambiare questa impostazione, seleziona **Show root summary task** nel menu **View** o nella finestra **Options**.

Come qualsiasi altra attività di riepilogo, l'attività di riepilogo radice mostra i dati complessivi delle sue sottoattività. Poiché tutte le attività del cronogramma sono sue sottoattività, l'attività di riepilogo radice mostra i dati complessivi dell'intero progetto.

Il nome dell'attività di riepilogo radice corrisponde al nome del progetto.

![Root Summary Task](/images/building-schedule/tasks/root_summary.png)

## Attività pianificate manualmente

Per impostazione predefinita, tutte le attività in Ingantt sono **auto-scheduled** — le loro date di inizio e fine sono calcolate dall'algoritmo di pianificazione in base a dipendenze, vincoli e calendari.

Puoi passare un'attività alla modalità **Manually scheduled** utilizzando la casella di controllo nella finestra **Task Properties**. Quando un'attività è pianificata manualmente:

- **Non è influenzata dall'algoritmo di pianificazione** — le date sono impostate da te
- Puoi inserire le date di **Start** e **Finish** usando i campi data o il selettore di date
- Puoi digitare **valori testuali** (come "Da definire", "inizio marzo" o "2-3 settimane") al posto di date effettive quando non sei ancora sicuro della tempistica
- Un'icona a forma di puntina viene mostrata per le attività pianificate manualmente nell'elenco delle attività

> Usa le attività pianificate manualmente come segnaposto quando la tempistica esatta è sconosciuta, o quando le date sono fissate da fattori esterni.

## Attività ricorrenti

Le attività ricorrenti rappresentano attività che si ripetono con cadenza regolare, come riunioni giornaliere, revisioni settimanali o report mensili. Puoi creare attività ricorrenti tramite il menu **Insert** scegliendo **Add recurring task**.

Quando crei un'attività ricorrente, specifichi:

- **Durata dell'occorrenza** — La durata di ogni singola occorrenza
- **Schema di ricorrenza** — Schema giornaliero, settimanale, mensile o annuale con una data di inizio e una condizione di fine (nessuna fine, fine per data o fine dopo N occorrenze)
- **Solo giorni lavorativi** — Limita le occorrenze ai giorni lavorativi

Le attività ricorrenti appaiono come un'attività di riepilogo contenente le singole occorrenze. Ogni occorrenza può essere completata indipendentemente. L'eliminazione di un'attività ricorrente ti chiede di scegliere se eliminare l'intera serie o solo l'occorrenza selezionata.

## Attività suddivise

Un'attività può essere suddivisa in parti non contigue, che rappresentano interruzioni nel lavoro. Per suddividere un'attività, selezionala e scegli **Split task** dalla barra degli strumenti o dal menu contestuale (clic destro). La finestra **Split Task** offre due modalità:

- **Per durata** — Specifica un intervallo di pausa dall'inizio dell'attività e una durata della suddivisione
- **Per date** — Specifica le date di interruzione e ripresa della suddivisione

Le attività suddivise vengono visualizzate come barre separate con connettori punteggiati tra le parti nel diagramma di Gantt. Ogni parte suddivisa ha la propria maniglia di ridimensionamento, e trascinando una parte fino a farla incontrare con una adiacente le si unisce. Per rimuovere una suddivisione, seleziona l'attività e scegli **Remove split** dalla barra degli strumenti.

## Attività inattive

Un'attività può essere contrassegnata come **inattiva** deselezionando la casella **Active** nella scheda **General** della finestra **Task Properties**, oppure utilizzando l'opzione **Inactivate task** nel sottomenu **Edit > Display** o nel menu contestuale (clic destro).

Le attività inattive sono:

- Escluse dalla pianificazione — non influenzano il percorso critico né le altre attività
- Escluse dai riepiloghi delle attività di riepilogo per durata, lavoro, costo e % di completamento
- Escluse dal rilevamento della sovrallocazione delle risorse e dal livellamento automatico
- Escluse dai calcoli Earned Value

Le attività inattive rimangono visibili nell'elenco delle attività e nel diagramma di Gantt, ma appaiono con opacità ridotta e testo barrato. Le loro date vengono conservate per riferimento.

L'inattivazione di un'attività di riepilogo si propaga a tutte le sue sottoattività. La riattivazione di una sottoattività riattiva automaticamente la sua attività di riepilogo genitore se necessario. Le attività con avanzamento effettivo (% di completamento > 0) non possono essere inattivate.

> Usa le attività inattive per mantenere scenari "what-if" nel cronogramma senza influenzare il piano attivo.
