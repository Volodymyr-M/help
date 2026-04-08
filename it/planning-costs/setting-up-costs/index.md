# Configurazione dei costi

Imposta i costi fissi sulle attività e le tariffe sulle risorse. Ingantt li utilizza insieme al cronogramma per calcolare il costo di ogni attività e dell'intero progetto.

## Costo fisso dell'attività

Puoi impostare un costo per l'attività indipendentemente dalle sue risorse compilando il campo **Fixed Cost** nella scheda **Cost and EV** della finestra **Task Properties**. Ad esempio, usalo quando qualcuno ha già fornito una stima del costo totale per l'attività, o quando l'attività ha un costo aggiuntivo oltre ai costi delle risorse.

> Se devi assegnare lo stesso costo fisso a più attività, considera la possibilità di creare una risorsa di tipo costo e di assegnarla a quelle attività. Se il costo cambia in futuro, dovrai aggiornarlo in un solo punto.

## Costo della risorsa di tipo lavoro

Le risorse di tipo **Work** sono l'unico tipo che ha un calendario, quindi il loro costo è specificato per ora, per giorno, per settimana o per mese (vedi [Ore per giorno, giorni per settimana, giorni per mese](/it/setting-up-project/project/index.md#ore-per-giorno-giorni-per-settimana-giorni-per-mese)).

Ad esempio, quando assegni una risorsa di tipo lavoro con una **Standard Rate** di 100 $/ora a un'attività con una **Duration** di 5 ore, 500 $ vengono aggiunti al **Cost** dell'attività.

Le risorse di tipo lavoro supportano anche una **Overtime Rate** per il lavoro oltre l'orario di calendario regolare. Il costo totale viene calcolato come:

> **Cost = Regular Work x Standard Rate + Overtime Work x Overtime Rate + Cost Per Use**

Quando una risorsa di tipo lavoro viene assegnata a un'attività, puoi specificare il valore delle **Units** come un numero diverso da quello predefinito. Questo influisce sui calcoli dei costi. Ad esempio, se le **Units** sono al 50%, il costo calcolato per la risorsa nell'attività è la metà di quello che sarebbe con le Units al 100%.

## Costo della risorsa di tipo materiale

Per le risorse di tipo **materiale**, il costo è specificato per unità in base a come definisci l'unità. Può essere un'unità di peso (ad es., libbra, chilogrammo, tonnellata), di lunghezza o volume (ad es., piede, metro, miglio, gallone, litro) o qualsiasi altra unità di misura (ad es., contenitore, scatola, pezzo, metro quadro). Puoi impostare un **Material Label** nella finestra **Resource Properties** per descrivere l'unità.

Le risorse di tipo materiale supportano due modalità di consumo:
- **Fixed** (predefinita) — Una quantità totale indipendente dalla durata dell'attività (ad es., 5 tonnellate di cemento)
- **Variable** — Una tariffa per unità di tempo che scala con la durata dell'attività (ad es., 10 litri al giorno di carburante)

Ad esempio, se il carburante viene utilizzato nel tuo progetto, puoi aggiungere una risorsa materiale "carburante" e specificare il costo per litro nella finestra **Resource Properties**. Poi, quando assegni la risorsa a un'attività, specifichi il numero di litri come **Units**, e Ingantt aggiunge il costo calcolato del carburante al **Cost** dell'attività.

## Risorsa di tipo costo

Una risorsa di tipo **costo** è una spesa fissa che potresti voler assegnare a più attività. Le risorse di tipo costo supportano valori di costo per assegnazione — la stessa risorsa di tipo costo può avere importi diversi su assegnazioni di attività diverse (ad es., "Viaggio" = 800 $ sull'Attività A e 1.200 $ sull'Attività B).

Usa questo tipo per spese fisse normalmente non specificate in unità di misura, come i costi di installazione. Se più attività hanno lo stesso costo fisso per la stessa ragione, crea una risorsa di tipo costo e assegnala a tutte queste attività anziché compilare il campo **Fixed Cost** per ogni attività separatamente.

## Tabelle tariffarie

Ogni risorsa di tipo lavoro e materiale supporta fino a 5 tabelle tariffarie (da A a E), ciascuna con più righe che entrano in vigore a date diverse. Questo ti permette di modellare variazioni tariffarie nel tempo o mantenere set di tariffe diverse per tipi diversi di lavoro.

Le tabelle tariffarie vengono configurate nella scheda **Costs** della finestra **Resource Properties**. Quando assegni una risorsa a un'attività, puoi selezionare quale tabella tariffaria utilizzare nella finestra **Edit Resource Assignment**.

## Costo per utilizzo

Le risorse supportano un campo **Cost Per Use** — una tariffa fissa addebitata ogni volta che la risorsa viene assegnata a un'attività, indipendentemente da quanto lavoro viene svolto. Per le risorse di tipo lavoro, il **Cost Per Use** viene moltiplicato per le unità di assegnazione (ad es., unità al 200% significa che il costo per utilizzo viene addebitato due volte). Il **Cost Per Use** matura sempre all'inizio dell'attività.

## Maturazione dei costi

L'impostazione **Cost Accrual** controlla quando i costi vengono riconosciuti come costi effettivi man mano che il lavoro avanza:

| Maturazione | Quando vengono riconosciuti i costi |
|-------------|-------------------------------------|
| **Start** | Costo intero non appena viene registrato un avanzamento (% Complete > 0%) |
| **Prorated** | Proporzionale alla percentuale di completamento (ad es., 50% completato = 50% del costo) |
| **End** | Costo intero solo quando l'attività raggiunge il 100% di completamento |

Le risorse hanno un'impostazione **Cost Accrual** nella scheda **Costs** della finestra **Resource Properties**. Le attività hanno un'impostazione **Fixed Cost Accrual** nella scheda **Cost and EV** della finestra **Task Properties**. Il progetto ha un'impostazione **Default Fixed Cost Accrual** nella scheda **Other** della finestra **Project Properties**.
