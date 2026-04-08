# Livellamento delle risorse

È facile assegnare accidentalmente più lavoro di quanto una persona possa gestire in un giorno. Il livellamento sposta automaticamente le attività in modo che nessuno sia sovraccaricato, anche se questo potrebbe allungare la data di fine del progetto.

## Risorse sovrallocate

Una risorsa di tipo lavoro può essere **sovrallocata**, il che significa che ha più lavoro assegnato di quanto possa completare in base al suo calendario e alla sua disponibilità. Ad esempio, se il tuo progetto ha due attività, ciascuna con una durata di un giorno e senza [dipendenza](/it/building-schedule/dependencies/index.md#predecessori-e-dipendenze) tra di esse, entrambe assegnate alla stessa risorsa di tipo lavoro, la risorsa è sovrallocata. La risorsa deve svolgere due giorni di lavoro in un solo giorno di calendario. Per risolvere il problema, basta collegare le due attività con una dipendenza.

Se un'attività ha risorse sovrallocate assegnate, Ingantt mostra un'icona speciale nell'elenco delle attività.

Se una risorsa è sovrallocata, Ingantt mostra un'icona speciale nella vista **Resources** e nella vista **Resource Usage**.

Inoltre, Ingantt conta tali attività e risorse e mostra i numeri nel menu di navigazione.

## Livellamento automatico

Le dipendenze tra attività controllano la loro posizione sulla linea temporale. Nei progetti più grandi, è facile dimenticare una dipendenza — con il risultato che più attività assegnate alla stessa risorsa di tipo lavoro vengono pianificate contemporaneamente. La risorsa diventa sovrallocata e Ingantt ti avvisa con icone speciali negli elenchi delle attività e delle risorse.

Puoi risolvere la sovrallocazione manualmente impostando dipendenze o vincoli per spostare alcune attività in modo che il lavoro non venga svolto simultaneamente.

Un modo alternativo per risolvere la sovrallocazione è il livellamento automatico. Se scegli **Auto-level resources** nel menu **Project**, Ingantt sposta automaticamente alcune attività più avanti nella linea temporale per prevenire la sovrallocazione delle risorse. Puoi annullare queste regolazioni automatiche scegliendo **Clear leveling** nel menu **Project**.

Il comando di livellamento automatico offre tre opzioni di ambito:

- **All tasks** — Livella tutte le attività del progetto
- **Selected tasks** — Livella solo le attività attualmente selezionate
- **Selected resources** — Livella solo i conflitti di sovrallocazione per le risorse selezionate (disponibile nelle viste Resources e Resource Usage)

### Come funziona il livellamento automatico

Quando esegui **Auto-level resources**, Ingantt risolve le sovrallocazioni **ritardando o suddividendo le attività**. Non riassegna le risorse né modifica le unità di assegnazione.

L'algoritmo identifica i giorni in cui una risorsa ha più lavoro assegnato di quanto la sua capacità consenta, poi decide quali attività in conflitto ritardare. Ogni attività riceve un punteggio basato su diversi fattori — le attività con punteggi più alti sono protette dal ritardo:

| Fattore | Effetto |
|---------|---------|
| **Dipendenze** | Le attività che sono predecessori di altre attività sono protette |
| **Margine** | Le attività critiche o quasi critiche (meno margine) sono protette |
| **Priorità** | Le attività con un valore di priorità più alto sono protette |
| **Vincoli** | Le attività con vincoli di pianificazione sono protette |
| **Data di inizio** | Le attività più precoci sono in parte protette |
| **Durata** | Le attività più lunghe sono in parte protette |

L'attività con il punteggio più basso viene ritardata per risolvere ogni conflitto. Il processo si ripete finché tutte le sovrallocazioni non vengono risolte o non è possibile applicare ulteriori ritardi.

> Il livellamento automatico potrebbe allungare la data di fine del progetto. Risolve il maggior numero possibile di sovrallocazioni, ma alcune potrebbero restare se i vincoli impediscono ulteriori ritardi.

### Opzioni di livellamento

Configura il comportamento del livellamento nella finestra **Leveling Options**, accessibile dal menu **Project**:

- **Leveling order** — Controlla come le attività vengono priorizzate: ID Only (ID crescente), Standard (punteggio multi-fattore) o Priority Standard (priorità prima, poi fattori standard; l'impostazione predefinita)
- **Overallocation basis** — Controlla la granularità del rilevamento: minuto, ora, giorno, settimana o mese. Le impostazioni per minuto e ora rilevano conflitti anche quando i totali giornalieri sono nella capacità ma le attività si sovrappongono all'interno di una giornata.
- **Adjust individual assignments** — Quando attivata e un'attività ha più assegnazioni di risorse, solo l'assegnazione della risorsa sovrallocata viene ritardata anziché l'intera attività
- **Create splits in remaining work** — Quando attivata, l'algoritmo di livellamento può suddividere il lavoro attorno ai conflitti anziché ritardare intere attività
- **Level only within available slack** — Limita i ritardi del livellamento a non superare il margine totale di un'attività, impedendo l'allungamento della data di fine del progetto
- **Leveling range** — Limita il livellamento alle attività all'interno di una finestra temporale specifica

### Esenti dal livellamento

Le seguenti attività e risorse non vengono mai influenzate dal livellamento automatico:

- Attività con [Priority](#priorità) impostata a **1000**
- Attività con **Can Level** impostato a **false** (nella scheda **Leveling** della finestra Task Properties)
- Attività con vincolo **Must start on** o **Must finish on** come [vincolo](/it/building-schedule/constraints/index.md#come-funzionano-i-vincoli)
- [Attività di riepilogo](/it/building-schedule/tasks/index.md#attività-di-riepilogo)
- Milestone con durata zero
- Attività completate al 100%
- Risorse con **Can Level** impostato a **false** nella finestra Resource Properties
- Risorse con tipo di prenotazione **Proposed** come [tipo di prenotazione](/it/building-schedule/resources/index.md#tipo-di-prenotazione) (a meno che l'opzione di livellamento per includere le risorse proposte sia abilitata)

### Ri-livellamento e cancellazione

Ogni volta che esegui **Auto-level resources**, qualsiasi livellamento precedente viene automaticamente cancellato prima. Il livellamento parte sempre da un cronogramma pulito e non livellato per evitare che i ritardi si accumulino.

Se modifichi il cronogramma dopo il livellamento (aggiungi attività, cambi dipendenze, ecc.), i ritardi di livellamento esistenti vengono preservati ma potrebbero non risolvere più tutte le sovrallocazioni. Esegui di nuovo **Auto-level resources** per ri-livellare il cronogramma aggiornato.

Per rimuovere tutti i ritardi di livellamento e tornare al cronogramma originale calcolato con il CPM, scegli **Clear leveling** dal menu **Project**.

### Leveling Gantt

Dopo aver eseguito il livellamento automatico, un pulsante **Leveling Gantt** appare nell'area del diagramma di Gantt. Quando attivato, disegna barre verdi nelle posizioni pre-livellamento — dove si trovavano le attività prima del livellamento — mentre le barre standard delle attività rimangono nelle posizioni livellate correnti. Questo ti permette di confrontare il cronogramma originale con quello livellato per vedere quanto ogni attività è stata ritardata.

Il pulsante è visibile solo quando il progetto ha dati di livellamento e viene automaticamente nascosto quando cancelli il livellamento.

## Priorità

Il campo **Priority** è disponibile nella scheda **Leveling** della finestra **Task Properties**. Accetta un valore intero da 0 a 1000, con un valore predefinito di 500.

La priorità viene utilizzata dall'algoritmo di [livellamento automatico](#livellamento-automatico) per decidere quali attività ritardare quando si risolvono le sovrallocazioni delle risorse. Le attività con una priorità più alta hanno meno probabilità di essere ritardate:

- **0** — Priorità più bassa, più probabile che venga ritardata
- **500** — Priorità predefinita
- **1000** — "Non livellare" — l'attività non viene mai ritardata dal livellamento automatico

> Imposta la priorità a **1000** per le attività che non devono mai essere spostate dal livellamento automatico, come attività legate a scadenze esterne o impegni fissi.
