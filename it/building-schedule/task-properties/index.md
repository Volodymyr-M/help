# Proprietà del Compito

Ogni attività ha proprietà che controllano come viene pianificata, come vengono calcolati i costi e come appare nel diagramma di Gantt. Impostale nella finestra **Proprietà del Compito**.

## Durata

Durante la pianificazione del progetto, inserisci le durate come stime, ovvero la durata è una previsione ragionevole di quanto tempo impiegherà un'attività per tutte le risorse coinvolte.

Non confondere **Durata** con **Lavoro**. Ad esempio, se tre persone stanno lavorando alla tua attività, ma la completano in un'ora, imposti la **Durata** dell'attività a un'ora. Se queste tre persone sono assegnate all'attività, Ingantt calcola automaticamente la proprietà **Lavoro** come tre ore.

La durata può essere modificata usando il campo **Durata** nella finestra **Proprietà del Compito**.

Quando non sei ancora sicuro della tua stima per la durata, puoi contrassegnarla come **Stima** nella finestra **Proprietà del Compito**. Questo fa sì che la durata visualizzi sempre un punto interrogativo ("**?**"). Selezionare o deselezionare questo flag non influisce sulla pianificazione.

Se almeno una sottoattività di un'attività di riepilogo ha **Stima** selezionato, anche la durata dell'attività di riepilogo viene contrassegnata come **Stima** e quindi mostra anch'essa "**?**".

La durata può essere impostata in ore, giorni, settimane o mesi. Per impostazione predefinita, "1 giorno" equivale a 8 ore, "1 settimana" equivale a 5 giorni (40 ore) e "1 mese" equivale a 20 giorni. Questi valori predefiniti possono essere modificati nella scheda **Durata** della finestra **Proprietà del Progetto**.

Quando modifichi le assegnazioni delle risorse, il lavoro o la durata, uno di questi viene ricalcolato secondo il [Tipo](#tipo-e-guidato-dallo-sforzo) dell'attività.

## Lavoro

Quando un'attività ha una risorsa di tipo lavoro assegnata (come una persona che esegue l'attività), la proprietà **Lavoro** dell'attività diventa maggiore di 0. Mostra il tempo che tutte le risorse dedicheranno al lavoro sull'attività. Ad esempio, se un'attività con una **Durata** di 5 ore ha 2 risorse assegnate che ci lavorano, il **Lavoro** dell'attività è pari a 10 ore.

Il lavoro può essere modificato usando il campo **Lavoro** nella finestra **Proprietà del Compito**.

Come la durata, il lavoro può essere specificato in ore, giorni, settimane o mesi utilizzando le definizioni nella scheda **Durata** della finestra **Proprietà del Progetto**. Il formato di visualizzazione predefinito per il lavoro può essere modificato nella scheda **Tempo**.

Quando modifichi le assegnazioni delle risorse, il lavoro o la durata, uno di questi viene ricalcolato secondo il [Tipo](#tipo-e-guidato-dallo-sforzo) dell'attività.

## Scadenza

A volte è necessario assicurarsi che un'attività venga completata entro un giorno specifico, tipicamente chiamato scadenza.

La scadenza di un'attività può essere specificata usando il campo **Scadenza** nella finestra **Proprietà del Compito**.

Le scadenze sono solo a scopo informativo e non influiscono sulla pianificazione.

Le scadenze vengono mostrate nel diagramma di Gantt come icone speciali.

> Se il cronogramma mostra che un'attività termina dopo la scadenza specificata, Ingantt mostra un'icona nell'elenco delle attività e conta tali attività nel menu di navigazione.

![Deadline](/images/building-schedule/tasks/deadline.png)

> Puoi impostare una scadenza per l'intero progetto impostando la scadenza per l'attività di riepilogo radice. Assicurati che l'attività di riepilogo radice sia impostata come visibile nella finestra **Opzioni**.

## Milestone

Qualsiasi attività può essere contrassegnata come milestone selezionando la casella **Traguardo** nella finestra **Proprietà del Compito**. Questo non cambia la durata né influisce sulla pianificazione, ma l'attività viene mostrata nel diagramma di Gantt come un'icona.

![Milestone](/images/building-schedule/tasks/milestone.png)

Se specifichi 0 come **Durata** di un'attività, l'attività viene automaticamente contrassegnata come **Traguardo** una volta salvata la modifica.

## Tipo e guidato dallo sforzo

Le assegnazioni di risorse di tipo lavoro (o le unità delle risorse di tipo lavoro assegnate), il lavoro e la durata dipendono l'uno dall'altro. Quando ne modifichi uno, gli altri devono essere ricalcolati di conseguenza. Il **Tipo** dell'attività (con l'aiuto del flag **Basata sullo Sforzo**) definisce quale delle due proprietà rimanenti resta invariata, in modo che solo una venga ricalcolata.

Ad esempio, puoi impostare il **Tipo** su **Unità fisse** (l'impostazione predefinita), nel qual caso quando modifichi la durata, il lavoro viene ricalcolato automaticamente.

| Tipo               | Descrizione                                             |
|--------------------|---------------------------------------------------------|
| **Unità fisse**    | Quando modifichi la durata: il lavoro viene ricalcolato.         |
|                    | Quando modifichi il lavoro: la durata viene ricalcolata.         |
|                    | Quando modifichi le unità:                                  |
|                    | - Se **Basata sullo Sforzo** è impostato: la durata viene ricalcolata. |
|                    | - Se **Basata sullo Sforzo** non è impostato: il lavoro viene ricalcolato. |
| **Durata fissa** | Quando modifichi la durata: il lavoro viene ricalcolato.         |
|                    | Quando modifichi il lavoro: le unità vengono ricalcolate.           |
|                    | Quando modifichi le unità: il lavoro viene ricalcolato.            |
| **Lavoro fisso**     | Quando modifichi la durata: le unità vengono ricalcolate.       |
|                    | Quando modifichi il lavoro: la durata viene ricalcolata.         |
|                    | Quando modifichi le unità: la durata viene ricalcolata.        |

In altre parole, il **Tipo** consente di bloccare una delle tre proprietà, mentre il flag **Basata sullo Sforzo** definisce se il lavoro debba rimanere invariato tra le due proprietà rimanenti.

> **Tipo** ed **Basata sullo Sforzo** non sono disponibili per le [attività di riepilogo](/it/building-schedule/tasks/index.md#attività-di-riepilogo), che sono sempre di tipo Durata fissa e non guidate dallo sforzo.

## Note

Puoi aggiungere qualsiasi testo alla tua attività compilando il campo **Note** nella scheda **Note** della finestra **Proprietà del Compito**. Usalo per descrizioni dell'attività, informazioni di contatto, idee o qualsiasi altro dato testuale.

Se un'attività ha il campo **Note** compilato, un'icona speciale viene mostrata per l'attività nell'elenco delle attività. Su Windows, macOS e web, passando il mouse sull'icona si visualizza la nota. Su dispositivi mobili, apri la finestra **Proprietà del Compito** per visualizzare la nota completa.

## Collegamento

Puoi allegare un URL alla tua attività usando il campo **Collegamento** nella scheda **Note** della finestra **Proprietà del Compito**. Le attività con un collegamento ipertestuale mostrano un'icona a forma di link nell'elenco delle attività. Facendo clic sull'icona del link si apre l'URL nel browser.

## Nascondi barra e rollup

Nella scheda **Visuale** della finestra **Proprietà del Compito**:

- **Nascondi barra** — Nasconde la barra dell'attività nel diagramma di Gantt mantenendo la riga visibile nell'elenco delle attività. L'area della barra invisibile risponde comunque ai clic e ai menu contestuali.
- **Riepilogo** — Visualizza la barra della sottoattività sulla riga dell'attività di riepilogo genitore nel diagramma di Gantt. Fornisce una vista condensata quando le attività di riepilogo sono compresse.

Queste opzioni possono essere attivate anche dal sottomenu **Modifica > Visualizza** o dal menu contestuale (clic destro).
