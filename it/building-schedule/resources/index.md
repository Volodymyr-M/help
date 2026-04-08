# Risorse

Aggiungi le persone, le attrezzature e i materiali che svolgeranno il lavoro. Una volta assegnate le risorse alle attività, Ingantt può calcolare il carico di lavoro, rilevare la sovrallocazione e tenere conto della disponibilità di ogni persona.

## Tipo di risorsa

Ingantt supporta tre tipi di risorse:

| Tipo di risorsa | Descrizione                                                                                      |
|-----------------|--------------------------------------------------------------------------------------------------|
| **Work**        | Qualcuno o qualcosa che esegue la tua attività. Può essere una persona, un team, un'azienda appaltatrice o un'attrezzatura. |
| **Material**    | Elementi utilizzati per completare l'attività, come materiali, ingredienti o componenti.                 |
| **Cost**        | Costi che possono essere applicati a più attività, come costi di consegna, costi di distribuzione o qualsiasi costo fisso. |

Solo le risorse di tipo lavoro, quando assegnate alle attività, influiscono sulla pianificazione.

Tutti i tipi di risorse influiscono sul calcolo dei costi se il campo **Cost** della risorsa è compilato.

## Unità massime

Le risorse di tipo lavoro hanno una proprietà **Max Units** (predefinita 100%) che rappresenta la capacità disponibile della risorsa. Ad esempio:

- **100%** — Una risorsa a tempo pieno
- **50%** — Una risorsa a tempo parziale (disponibile metà del tempo)
- **300%** — Un team di 3 membri a tempo pieno rappresentato come una singola risorsa

Le unità massime vengono utilizzate dal [rilevamento della sovrallocazione](/it/adjusting-schedule/leveling/index.md#risorse-sovrallocate) e dal [livellamento automatico](/it/adjusting-schedule/leveling/index.md#livellamento-automatico) per determinare se una risorsa ha più lavoro di quanto possa gestire. Quando si assegna una risorsa di tipo lavoro a un'attività, le unità di assegnazione predefinite corrispondono alle unità massime della risorsa.

## Periodi di disponibilità delle risorse

La disponibilità di una risorsa di tipo lavoro può cambiare nel tempo. Ad esempio, un membro del team potrebbe essere a tempo pieno per i primi tre mesi e poi passare a tempo parziale.

Nella scheda **Availability** della finestra **Resource Properties**, puoi definire più periodi di disponibilità, ciascuno con un intervallo di date e una percentuale di disponibilità. Per le date che ricadono in un periodo definito, le unità del periodo sostituiscono le unità massime base della risorsa per i calcoli di capacità.

## Risorse generiche

Una risorsa può essere contrassegnata come **Generic** usando la casella di controllo nella finestra **Resource Properties**. Le risorse generiche sono segnaposto che rappresentano un ruolo (ad es., "Sviluppatore", "Designer") anziché una persona specifica. Sono utili nelle fasi iniziali della pianificazione quando i membri specifici del team non sono ancora identificati.

Le risorse generiche sono indicate da un'icona distintiva nell'elenco delle risorse. Il flag generico è puramente informativo — non influisce sulla pianificazione né sul calcolo dei costi.

## Tipo di prenotazione

Ogni risorsa ha un **Booking Type** che può essere impostato su **Committed** (predefinito) o **Proposed** nella finestra **Resource Properties**.

- **Committed** — La risorsa è prenotata in modo definitivo per il progetto.
- **Proposed** — La risorsa è assegnata provvisoriamente a fini di pianificazione.

Per impostazione predefinita, il livellamento automatico esclude le risorse proposte. Puoi includerle abilitando "Level resources with the proposed booking type" nelle [opzioni di livellamento](/it/adjusting-schedule/leveling/index.md#opzioni-di-livellamento).
