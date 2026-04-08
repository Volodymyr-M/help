# Calendari

Festività, ferie, mezze giornate, turni notturni — il tuo cronogramma deve riflettere quando si lavora effettivamente. Configura i calendari in modo che Ingantt salti i periodi non lavorativi e ti fornisca date realistiche.

I calendari definiscono i giorni e gli orari in cui è possibile lavorare. I calendari utilizzano due tipi di dati:

- **Giorni della settimana**: Orario lavorativo impostato per ogni giorno della settimana — definisce il programma tipico e regolare.
- **Eccezioni**: Date in cui non si lavora o si lavora in orari diversi rispetto a quelli definiti nel programma settimanale.

## Calendario del progetto

Un progetto ha un **Calendar** associato, come specificato nella finestra **Project Properties**. Questo calendario definisce come vengono pianificate le attività che non sono assegnate a risorse di tipo lavoro. I giorni non lavorativi come i fine settimana vengono mostrati nel diagramma di Gantt in base a questo calendario.

## Calendario della risorsa

Ogni [risorsa di tipo lavoro](/it/building-schedule/resources/index.md#tipo-di-risorsa) ha un calendario associato, come specificato nel campo **Base Calendar** della finestra **Resource Properties**. Quando la risorsa di tipo lavoro viene [assegnata](/it/building-schedule/assignments/index.md#assegnazioni-delle-risorse-e-unità) a un'attività, il suo calendario influenza la pianificazione dell'attività.

Quando più risorse di tipo lavoro sono assegnate a un'attività, i loro calendari vengono **intersecati** — il che significa che il lavoro viene pianificato solo negli orari in cui **tutte** le risorse assegnate sono disponibili. Ad esempio, se la Risorsa A lavora lun-mer e la Risorsa B lavora mer-ven, un'attività assegnata a entrambe verrà pianificata solo il mercoledì.

> Se più risorse condividono un programma di lavoro simile, crea un unico calendario e assegnalo a tutte. Puoi comunque specificare eccezioni per ogni risorsa separatamente nelle **Resource Properties** — ad esempio, ferie o periodi di lavoro modificati in date specifiche.

## Calendario dell'attività

Ogni attività ha una proprietà **Calendar** nella finestra **Task Properties**, impostata su **NONE** per impostazione predefinita. Quando è impostata su **NONE**:

- Se un'attività non è assegnata ad alcuna risorsa di tipo lavoro, l'attività viene pianificata secondo il calendario del progetto.
- Se un'attività è assegnata a risorse di tipo lavoro, l'attività viene pianificata secondo i loro calendari.

Se la proprietà **Calendar** dell'attività è impostata su un calendario anziché su **NONE**:

- Se un'attività non è assegnata ad alcuna risorsa di tipo lavoro, l'attività viene pianificata secondo il calendario specificato.
- Se un'attività è assegnata a risorse di tipo lavoro, l'attività viene pianificata secondo l'**intersezione** del calendario dell'attività e dei calendari delle risorse — il lavoro viene pianificato solo negli orari che sono lavorativi sia nel calendario dell'attività che in tutti i calendari delle risorse. Per utilizzare solo il calendario dell'attività, ignorando completamente i calendari delle risorse, seleziona il flag **Ignore resource calendars**.

## Calendari predefiniti

Ingantt dispone di 3 calendari predefiniti, uno dei quali (**Standard**) viene assegnato al progetto per impostazione predefinita.

| Calendario | Descrizione                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| **Standard**     | Si lavora dal lunedì al venerdì, dalle 8:00 alle 17:00 con una pausa di 1 ora (dalle 12:00 alle 13:00).       |
| **Night Shift**  | Si lavora dalla notte di lunedì alla mattina di sabato, dalle 23:00 alle 8:00 con una pausa di 1 ora (dalle 3:00 alle 4:00). |
| **24 Hours**     | Si lavora 24 ore al giorno, tutti i giorni.                                                         |

Puoi modificare qualsiasi calendario predefinito tramite la finestra **Calendar Properties** o creare calendari personalizzati basandoti su di essi tramite la finestra **Add Calendar**.

## Settimane lavorative

Le settimane lavorative consentono di definire modifiche al programma settimanale specifiche per un intervallo di date. Ad esempio, potresti avere un periodo in cui tutti lavorano 4 ore al giorno invece delle 8 standard, o un periodo in cui il sabato diventa un giorno lavorativo.

Le settimane lavorative vengono configurate nella scheda **Work Weeks** della finestra **Calendar Properties**. Ogni settimana lavorativa ha un nome, una data di inizio e fine, e definizioni degli orari di lavoro per ogni giorno della settimana.

> Le eccezioni del calendario hanno la priorità sulle settimane lavorative, che a loro volta hanno la priorità sul programma settimanale predefinito.

## Eccezioni del calendario

Le eccezioni del calendario sono date in cui il lavoro differisce dal programma settimanale regolare — inclusi i giorni non lavorativi.

Le eccezioni del calendario possono essere specificate:

- Nella finestra **Resource Properties** per una determinata risorsa.
- Nelle **Calendar Properties** per un determinato calendario, in modo che progetti, risorse o attività che utilizzano questo calendario abbiano questa eccezione.

Ad esempio, se vuoi configurare le ferie per una persona, aggiungile come eccezione per questa risorsa. Se vuoi configurare una festività per tutti, aggiungila come eccezione a un calendario utilizzato da tutti.

Quando aggiungi o modifichi le eccezioni del calendario, specifichi i periodi di orario lavorativo per l'eccezione. Se non ne specifichi nessuno, l'eccezione non ha orario lavorativo, il che significa che definisce un giorno non lavorativo.

A ogni eccezione può essere assegnato un **Name** descrittivo (come "Festività di Natale" o "Ufficio chiuso") che viene mostrato nell'elenco delle eccezioni.

### Eccezioni ricorrenti

Le eccezioni del calendario possono essere impostate per ricorrere secondo uno schema anziché su una singola data. Gli schemi di ricorrenza disponibili includono:

- **Giornaliera** — Ogni N giorni o ogni N giorni lavorativi
- **Settimanale** — Ogni N settimane nei giorni specificati
- **Mensile** — Per giorno del mese o per posizione (ad es., secondo martedì)
- **Annuale** — Per data o per posizione (ad es., ultimo venerdì di novembre)

Le eccezioni ricorrenti hanno una condizione di fine: nessuna fine, fine per data o fine dopo N occorrenze.

## Calendari vuoti e parziali

Se non aggiungi alcun orario lavorativo a un calendario, questo è vuoto e non può essere utilizzato per la pianificazione. Tali calendari sono contrassegnati con un'icona di avviso nell'elenco dei calendari e il numero di tali calendari viene mostrato nel menu di navigazione.

Tuttavia, ci sono situazioni in cui il calendario non è vuoto ma non ha comunque abbastanza orario lavorativo per pianificare una particolare attività. Queste situazioni possono essere rilevate solo durante la pianificazione.

Se assegni un calendario vuoto — o uno senza abbastanza orario lavorativo — a un progetto, risorsa o attività e la pianificazione non può procedere, viene mostrato un errore e l'ultima azione viene annullata.
