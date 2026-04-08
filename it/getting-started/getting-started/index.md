# Per iniziare

Inizia da qui per creare il tuo primo cronogramma di progetto. In pochi minuti avrai attività su una linea temporale, collegate tra loro, con risorse assegnate — abbastanza per vedere quando il tuo progetto dovrebbe concludersi.

> Sui dispositivi mobili, usa il tocco al posto del clic, il doppio tocco al posto del doppio clic e la pressione prolungata al posto del clic destro.

## Creare un cronogramma di base

Supponiamo che tu abbia un piccolo progetto di ristrutturazione domestica con due attività, una successiva all'altra.

Dopo aver fatto clic su **Create new**, ti troverai di fronte a una schermata divisa con l'elenco delle attività a sinistra e il diagramma di Gantt a destra. Aggiungi le attività una dopo l'altra facendo clic sul grande pulsante **+** in basso a destra. Nella finestra **Add Task**, specifica il **Name** e la **Duration** prevista di ogni attività.

![Add task](/images/getting-started/add_task.png)

Seleziona entrambe le attività nell'elenco a sinistra, poi fai clic sul pulsante **Link tasks** nella barra degli strumenti. Questo collega le attività e aggiorna il diagramma di Gantt.

- Per selezionare più attività su Android e iOS, tieni il dito premuto un po' più a lungo toccando ogni attività nell'elenco o nel diagramma di Gantt.
- Sulle altre piattaforme, fai clic sulle attività nell'elenco o nel diagramma di Gantt tenendo premuto `Ctrl` o `Shift` sulla tastiera.

![Link](/images/getting-started/link.png)

Ora che le attività sono collegate, prova ad aggiornare la durata della prima attività. Fai doppio clic su di essa nell'elenco o nel diagramma di Gantt e modifica il campo **Duration** nella finestra **Task Properties**. Vedrai come questa modifica influenza il cronogramma, spostando la seconda attività.

![Gantt](/images/getting-started/gantt.png)

## Impostare il nome e la data di inizio del progetto

Il tuo progetto potrebbe iniziare in un giorno diverso da quello predefinito utilizzato da Ingantt.

Apri **Project Properties** dal menu di navigazione oppure, su web e Windows, facendo clic sul nome del progetto nell'intestazione.

Imposta la nuova data di inizio del progetto nel campo **Project Start Date** e, già che ci sei, modifica il **Name** del progetto.

![Project name](/images/getting-started/project_name.png)

> Con la semplicità del cronogramma di base, puoi già capire quando il progetto dovrebbe concludersi guardando il diagramma di Gantt.

## Aggiungere e assegnare le risorse

Supponiamo che una persona diversa si occuperà di ogni attività del tuo progetto.

Apri il menu di navigazione e passa alla vista **Resources**.

![Nav](/images/getting-started/nav.png)

Fai clic sul grande pulsante **+** per aprire la finestra **Add Resource**, inserisci un **Name** per la risorsa e salva. Ripeti questi passaggi per aggiungere un'altra risorsa di tipo lavoro.

![Add resource](/images/getting-started/add_resource.png)

![Resources](/images/getting-started/resources.png)

Usando il menu di navigazione, torna alla vista **Tasks**. Fai doppio clic sulla prima attività nell'elenco o nel diagramma di Gantt per aprire la finestra **Task Properties**.

Passa alla scheda **Resources**, seleziona la prima risorsa per assegnare questa persona all'attività e salva.

![Assignments](/images/getting-started/assignments.png)

Ripeti gli stessi passaggi per la seconda attività e la seconda risorsa.

![Resources gantt](/images/getting-started/resources_gantt.png)

## Impostare le ferie

Le persone possono avere impegni diversi durante il corso del progetto che ne influenzano la tempistica.

Supponiamo che la risorsa che svolge la prima attività del progetto abbia bisogno di un giorno libero durante quella attività.

Per configurarlo, usa il menu di navigazione per andare alla vista **Resources**.

Fai doppio clic sulla risorsa per vedere le **Resource Properties**. Vai alla scheda **Calendar** e fai clic sul pulsante **Add exception**. Scegli uno dei giorni durante il progetto, lascia vuoto l'elenco degli orari di lavoro e salva.

![Day off](/images/getting-started/day_off.png)

Usando il menu di navigazione, torna a **Tasks** e osserva come il cronogramma è cambiato. La seconda attività si è spostata a causa della dipendenza dalla prima.

![Vacation](/images/getting-started/vacation.png)

> Puoi configurare non solo le ferie ma anche altre modifiche al calendario di una persona. Ad esempio, aggiungendo orari di lavoro all'eccezione, puoi specificare che la risorsa lavora solo durante orari specifici in quel particolare giorno.

## Impostare le festività

Immagina che ci sia una festività durante il tuo progetto, un giorno in cui non si lavora.

Le ferie vengono configurate attraverso il calendario di ogni risorsa. I giorni che riguardano tutti, invece, vengono configurati nel calendario del progetto. Il calendario predefinito del progetto si chiama **Standard** e indica già che non si lavora nei fine settimana.

Per configurare le festività, usa il menu di navigazione per andare alla vista **Calendars**. Fai doppio clic su **Standard** per vedere le **Calendar Properties**. Fai clic sul pulsante **Add exception**. Scegli uno dei giorni durante il progetto, lascia vuoto l'elenco degli orari di lavoro e salva.

![Holiday](/images/getting-started/holiday.png)

Usando il menu di navigazione, torna alla vista **Tasks** e osserva come il progetto è cambiato. Le attività si sono spostate e la festività viene visualizzata in modo simile ai fine settimana nel diagramma di Gantt.

![Final](/images/getting-started/final.png)

> Usando lo stesso approccio, puoi configurare non solo le festività ma anche altre modifiche al calendario di tutti. Ad esempio, aggiungendo orari di lavoro all'eccezione, puoi specificare che tutti lavorano solo durante orari specifici in quel particolare giorno.
>
> Puoi anche controllare le schede che rappresentano ogni giorno della settimana nelle **Calendar Properties**. Se tutto il team esce prima il venerdì o lavora il sabato, puoi configurarlo nelle schede corrispondenti.
