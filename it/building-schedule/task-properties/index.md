# Proprietà delle attività

Ogni attività ha proprietà che controllano come viene pianificata, come vengono calcolati i costi e come appare nel diagramma di Gantt. Impostale nella finestra **Task Properties**.

## Durata

Durante la pianificazione del progetto, inserisci le durate come stime, ovvero la durata è una previsione ragionevole di quanto tempo impiegherà un'attività per tutte le risorse coinvolte.

Non confondere **Duration** con **Work**. Ad esempio, se tre persone stanno lavorando alla tua attività, ma la completano in un'ora, imposti la **Duration** dell'attività a un'ora. Se queste tre persone sono assegnate all'attività, Ingantt calcola automaticamente la proprietà **Work** come tre ore.

La durata può essere modificata usando il campo **Duration** nella finestra **Task Properties**.

Quando non sei ancora sicuro della tua stima per la durata, puoi contrassegnarla come **Estimate** nella finestra **Task Properties**. Questo fa sì che la durata visualizzi sempre un punto interrogativo ("**?**"). Selezionare o deselezionare questo flag non influisce sulla pianificazione.

Se almeno una sottoattività di un'attività di riepilogo ha **Estimate** selezionato, anche la durata dell'attività di riepilogo viene contrassegnata come **Estimate** e quindi mostra anch'essa "**?**".

La durata può essere impostata in ore, giorni, settimane o mesi. Per impostazione predefinita, "1 giorno" equivale a 8 ore, "1 settimana" equivale a 5 giorni (40 ore) e "1 mese" equivale a 20 giorni. Questi valori predefiniti possono essere modificati nella scheda **Duration** della finestra **Project Properties**.

Quando modifichi le assegnazioni delle risorse, il lavoro o la durata, uno di questi viene ricalcolato secondo il [Tipo](#tipo-e-guidato-dallo-sforzo) dell'attività.

## Lavoro

Quando un'attività ha una risorsa di tipo lavoro assegnata (come una persona che esegue l'attività), la proprietà **Work** dell'attività diventa maggiore di 0. Mostra il tempo che tutte le risorse dedicheranno al lavoro sull'attività. Ad esempio, se un'attività con una **Duration** di 5 ore ha 2 risorse assegnate che ci lavorano, il **Work** dell'attività è pari a 10 ore.

Il lavoro può essere modificato usando il campo **Work** nella finestra **Task Properties**.

Come la durata, il lavoro può essere specificato in ore, giorni, settimane o mesi utilizzando le definizioni nella scheda **Duration** della finestra **Project Properties**. Il formato di visualizzazione predefinito per il lavoro può essere modificato nella scheda **Time**.

Quando modifichi le assegnazioni delle risorse, il lavoro o la durata, uno di questi viene ricalcolato secondo il [Tipo](#tipo-e-guidato-dallo-sforzo) dell'attività.

## Scadenza

A volte è necessario assicurarsi che un'attività venga completata entro un giorno specifico, tipicamente chiamato scadenza.

La scadenza di un'attività può essere specificata usando il campo **Deadline** nella finestra **Task Properties**.

Le scadenze sono solo a scopo informativo e non influiscono sulla pianificazione.

Le scadenze vengono mostrate nel diagramma di Gantt come icone speciali.

> Se il cronogramma mostra che un'attività termina dopo la scadenza specificata, Ingantt mostra un'icona nell'elenco delle attività e conta tali attività nel menu di navigazione.

![Deadline](/images/building-schedule/tasks/deadline.png)

> Puoi impostare una scadenza per l'intero progetto impostando la scadenza per l'attività di riepilogo radice. Assicurati che l'attività di riepilogo radice sia impostata come visibile nella finestra **Options**.

## Milestone

Qualsiasi attività può essere contrassegnata come milestone selezionando la casella **Milestone** nella finestra **Task Properties**. Questo non cambia la durata né influisce sulla pianificazione, ma l'attività viene mostrata nel diagramma di Gantt come un'icona.

![Milestone](/images/building-schedule/tasks/milestone.png)

Se specifichi 0 come **Duration** di un'attività, l'attività viene automaticamente contrassegnata come **Milestone** una volta salvata la modifica.

## Tipo e guidato dallo sforzo

Le assegnazioni di risorse di tipo lavoro (o le unità delle risorse di tipo lavoro assegnate), il lavoro e la durata dipendono l'uno dall'altro. Quando ne modifichi uno, gli altri devono essere ricalcolati di conseguenza. Il **Type** dell'attività (con l'aiuto del flag **Effort Driven**) definisce quale delle due proprietà rimanenti resta invariata, in modo che solo una venga ricalcolata.

Ad esempio, puoi impostare il **Type** su **Fixed units** (l'impostazione predefinita), nel qual caso quando modifichi la durata, il lavoro viene ricalcolato automaticamente.

| Tipo               | Descrizione                                             |
|--------------------|---------------------------------------------------------|
| **Fixed units**    | Quando modifichi la durata: il lavoro viene ricalcolato.         |
|                    | Quando modifichi il lavoro: la durata viene ricalcolata.         |
|                    | Quando modifichi le unità:                                  |
|                    | - Se **Effort Driven** è impostato: la durata viene ricalcolata. |
|                    | - Se **Effort Driven** non è impostato: il lavoro viene ricalcolato. |
| **Fixed duration** | Quando modifichi la durata: il lavoro viene ricalcolato.         |
|                    | Quando modifichi il lavoro: le unità vengono ricalcolate.           |
|                    | Quando modifichi le unità: il lavoro viene ricalcolato.            |
| **Fixed work**     | Quando modifichi la durata: le unità vengono ricalcolate.       |
|                    | Quando modifichi il lavoro: la durata viene ricalcolata.         |
|                    | Quando modifichi le unità: la durata viene ricalcolata.        |

In altre parole, il **Type** consente di bloccare una delle tre proprietà, mentre il flag **Effort Driven** definisce se il lavoro debba rimanere invariato tra le due proprietà rimanenti.

> **Type** ed **Effort Driven** non sono disponibili per le [attività di riepilogo](/it/building-schedule/tasks/index.md#attività-di-riepilogo), che sono sempre di tipo Fixed duration e non guidate dallo sforzo.

## Note

Puoi aggiungere qualsiasi testo alla tua attività compilando il campo **Notes** nella scheda **Notes** della finestra **Task Properties**. Usalo per descrizioni dell'attività, informazioni di contatto, idee o qualsiasi altro dato testuale.

Se un'attività ha il campo **Notes** compilato, un'icona speciale viene mostrata per l'attività nell'elenco delle attività. Su Windows, macOS e web, passando il mouse sull'icona si visualizza la nota. Su dispositivi mobili, apri la finestra **Task Properties** per visualizzare la nota completa.

## Collegamento ipertestuale

Puoi allegare un URL alla tua attività usando il campo **Hyperlink** nella scheda **Notes** della finestra **Task Properties**. Le attività con un collegamento ipertestuale mostrano un'icona a forma di link nell'elenco delle attività. Facendo clic sull'icona del link si apre l'URL nel browser.

## Nascondi barra e riepilogo visivo

Nella scheda **Visual** della finestra **Task Properties**:

- **Hide bar** — Nasconde la barra dell'attività nel diagramma di Gantt mantenendo la riga visibile nell'elenco delle attività. L'area della barra invisibile risponde comunque ai clic e ai menu contestuali.
- **Rollup** — Visualizza la barra della sottoattività sulla riga dell'attività di riepilogo genitore nel diagramma di Gantt. Fornisce una vista condensata quando le attività di riepilogo sono compresse.

Queste opzioni possono essere attivate anche dal sottomenu **Edit > Display** o dal menu contestuale (clic destro).
