# Assegnazioni

Controlla come le risorse vengono allocate alle attività — chi lavora su cosa, per quanta parte del suo tempo e come è distribuito lo sforzo. Regola unità, profili di lavoro e straordinari in base a come il tuo team lavora effettivamente.

## Assegnazioni delle risorse e unità

Le risorse possono essere assegnate a un'attività nella scheda **Resources** della finestra **Task Properties**.

Per assegnare una risorsa, seleziona la casella di controllo nella riga della risorsa. Per rimuovere l'assegnazione di una risorsa, deseleziona la casella.

Le assegnazioni di risorse di tipo lavoro o materiale hanno delle **Units**, mostrate nella colonna corrispondente. Fai clic sul pulsante **Edit** per modificare il valore predefinito delle **Units** per l'assegnazione.

Per impostazione predefinita, le risorse di tipo lavoro vengono assegnate con unità corrispondenti alle [Max Units](/it/building-schedule/resources/index.md#unità-massime) della risorsa (100% per una risorsa a tempo pieno). Questo significa che la risorsa dedicherà tutto il suo tempo di calendario disponibile all'attività. Puoi modificare il valore con qualsiasi numero.

Per impostazione predefinita, le risorse di tipo materiale vengono assegnate con 1 unità. Questo significa che 1 unità di quel materiale verrà utilizzata per completare l'attività. L'unità rappresenta qualsiasi cosa tu abbia definito per il materiale (scatola, gallone, tonnellata, ecc.). Puoi modificare il valore predefinito e impostare qualsiasi numero di unità.

## Profili di lavoro

Quando una risorsa di tipo lavoro viene assegnata a un'attività, lo sforzo (lavoro) viene distribuito lungo la durata dell'attività secondo un **profilo di lavoro**. Per impostazione predefinita, il lavoro è distribuito uniformemente (profilo Flat), ma Ingantt supporta diversi schemi di profilo che modificano la distribuzione dello sforzo nel tempo:

| Profilo | Descrizione |
|---------|-------------|
| **Flat** | Sforzo uniforme per tutta la durata (predefinito) |
| **Back Loaded** | Lo sforzo aumenta verso la fine dell'attività |
| **Front Loaded** | Lo sforzo è maggiore all'inizio e diminuisce |
| **Double Peak** | Due picchi di intensità durante l'attività |
| **Early Peak** | Picco anticipato, poi calo graduale |
| **Late Peak** | Crescita fino a un picco verso la fine |
| **Bell** | Curva a campana — picco al centro |
| **Turtle** | Curva a campana più piatta — distribuzione più uniforme |

I profili di lavoro influenzano il modo in cui il lavoro viene distribuito nei periodi temporali e vengono conservati durante l'apertura e il salvataggio dei file di progetto.

## Ritardo dell'assegnazione

Ogni assegnazione di risorsa su un'attività ha una proprietà **Delay** che posticipa il momento in cui la risorsa inizia a lavorare rispetto alla data di inizio dell'attività. Ad esempio, se un'attività inizia lunedì e una risorsa ha un ritardo di 2 giorni, quella risorsa inizia a lavorare mercoledì.

Il ritardo viene impostato nella finestra **Edit Resource Assignment** e si applica solo alle assegnazioni di risorse di tipo lavoro. Può essere utilizzato per scaglionare i tempi di inizio delle risorse su un'attività.

## Lavoro straordinario

Per le risorse di tipo lavoro, puoi designare una parte del lavoro totale di un'assegnazione come straordinario. Il lavoro straordinario è un sottoinsieme del lavoro totale, non un'aggiunta: **Work = Regular Work + Overtime Work**.

Il costo dell'attività viene calcolato utilizzando separatamente le porzioni regolari e straordinarie:
**Cost = Regular Work × Standard Rate + Overtime Work × Overtime Rate + Cost Per Use**

Per le attività di tipo Fixed Units e Fixed Work, l'inserimento del lavoro straordinario riduce la durata dell'attività perché la durata si basa solo sul lavoro regolare.

Imposta il lavoro straordinario nella finestra **Edit Resource Assignment**. Tre colonne opzionali sono disponibili nella tabella delle attività: **Overtime Work**, **Overtime Cost** e **Regular Work**.
