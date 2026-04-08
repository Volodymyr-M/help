# Viste risorse

Visualizza la distribuzione del carico di lavoro nel tuo team. Le viste di utilizzo mostrano chi sta facendo cosa e quando, il Team Planner ti permette di riassegnare tramite trascinamento e il Resource Graph rivela la capacità a colpo d'occhio.

## Resource Usage

La vista **Resource Usage** ti permette di vedere tutte le assegnazioni delle risorse e la quantità di [lavoro](/it/building-schedule/task-properties/index.md#lavoro) che ogni risorsa di tipo lavoro svolge durante ogni periodo sulla linea temporale.

Come per il diagramma di Gantt, puoi ingrandire o ridurre la linea temporale per vedere una vista più o meno dettagliata.

Se una risorsa deve svolgere più lavoro di quanto i calendari consentano per il periodo di tempo dato, il **Work** corrispondente viene evidenziato in rosso.

Nella vista Resource Usage, puoi fare doppio clic sulle celle di lavoro a livello di assegnazione per modificare direttamente la distribuzione del lavoro. Quando modifichi una cella di lavoro, il profilo di lavoro dell'assegnazione cambia automaticamente in "Contoured" e i dati personalizzati del lavoro giornaliero vengono salvati.

## Task Usage

La vista **Task Usage** è l'inverso della Resource Usage — mostra una vista del lavoro incentrata sulle attività. Ogni attività appare come una riga di primo livello con le assegnazioni delle risorse rientrate sotto di essa.

Il pannello sinistro mostra i dettagli dell'attività e dell'assegnazione, mentre il pannello destro mostra i valori di lavoro distribuiti nei periodi temporali. I valori di lavoro a livello di attività sono mostrati in grassetto. I valori di lavoro delle assegnazioni sovrallocate sono evidenziati in rosso.

## Team Planner

La vista **Team Planner** è una vista di pianificazione incentrata sulle risorse in cui ogni riga rappresenta una risorsa di tipo lavoro. Le barre delle attività sono posizionate sulla riga di ogni risorsa lungo una scala temporale condivisa.

Funzionalità principali:

- **Trascina orizzontalmente** per ripianificare un'attività — l'attività riceve un vincolo Start No Earlier Than nella nuova posizione
- **Trascina verticalmente** per riassegnare un'attività a una risorsa diversa
- **Trascina diagonalmente** per ripianificare e riassegnare in un'unica operazione
- Trascina da o verso la sezione **Unassigned Tasks** per aggiungere o rimuovere assegnazioni di risorse
- Le risorse sovrallocate sono mostrate con testo rosso nel pannello sinistro
- Le attività completate al 100% non possono essere trascinate

## Resource Graph

La vista **Resource Graph** mostra un istogramma per risorsa dell'allocazione del carico di lavoro nel tempo. Mostra una risorsa di tipo lavoro alla volta con barre verticali per ogni periodo temporale. Naviga tra le risorse usando i pulsanti freccia nel pannello sinistro.

Sono disponibili sette tipi di grafico:

| Tipo di grafico | Descrizione |
|-----------------|-------------|
| **Peak Units** | Percentuale di capacità della risorsa utilizzata per periodo (predefinito) |
| **Work** | Ore di lavoro per periodo |
| **Overallocation** | Solo le ore in eccesso oltre la capacità |
| **Percent Allocation** | Come Peak Units con visualizzazione in percentuale |
| **Remaining Availability** | Capacità inutilizzata in ore |
| **Work Availability** | Capacità totale del calendario in ore |
| **Unit Availability** | Percentuale effettiva di unità massime |

Le barre blu rappresentano il lavoro entro la capacità; le barre rosse rappresentano la porzione sovrallocata che eccede la capacità.
