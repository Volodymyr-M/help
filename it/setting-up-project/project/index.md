# Proprietà del progetto

Configura la data di inizio, gli orari di lavoro e le regole di pianificazione del tuo progetto. Queste impostazioni determinano il modo in cui ogni attività del progetto viene calcolata e visualizzata.

## Nome del progetto

Imposta il nome del progetto nel campo **Name** della scheda **General** della finestra **Project Properties**. Questo nome viene utilizzato anche dall'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice) del progetto.

Su web e Windows, facendo clic sul nome del progetto nell'intestazione si apre la finestra **Project Properties**.

## Data di inizio e direzione di pianificazione

Per impostazione predefinita, il progetto viene pianificato dalla data di inizio, che puoi impostare nel campo **Project Start Date** della finestra **Project Properties**.

Per pianificare il progetto dalla data di fine, passa a **Plan from Finish date** nella finestra **Project Properties** e imposta la **Project Finish Date**.

La scheda **General** della finestra **Project Properties** mostra sia la data di inizio che la data di fine. Quando si pianifica dalla data di inizio, la data di inizio è modificabile e la data di fine mostra il valore calcolato. Quando si pianifica dalla data di fine, la data di fine è modificabile e la data di inizio mostra il valore calcolato.

Tieni presente che:

- Per i progetti pianificati dalla data di inizio, il [vincolo](/it/building-schedule/constraints/index.md#come-funzionano-i-vincoli) predefinito per le attività appena create è **As soon as possible**.
- Per i progetti pianificati dalla data di fine, il vincolo predefinito per le attività appena create è **As late as possible**.

Quando si passa dalla pianificazione per data di inizio a quella per data di fine, i vincoli delle attività esistenti non vengono modificati, ad eccezione delle [attività di riepilogo](/it/building-schedule/tasks/index.md#attività-di-riepilogo), inclusa l'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice).

Per le attività di riepilogo:

- Il vincolo **As soon as possible** viene sostituito con **As late as possible** quando si passa dalla pianificazione per data di inizio a quella per data di fine.
- Il vincolo **As late as possible** viene sostituito con **As soon as possible** quando si passa dalla pianificazione per data di fine a quella per data di inizio.

## Primo giorno della settimana

A seconda del paese, la settimana può iniziare di domenica o di lunedì. Puoi aggiornare il campo **First Day of Week** nella scheda **Regional** della finestra **Project Properties** per modificare l'impostazione predefinita del tuo progetto.

La modifica di questa proprietà aggiorna l'interfaccia utente, incluso il diagramma di Gantt ad alcuni livelli di zoom, ma non influisce sulla pianificazione. Per adeguare il cronogramma di conseguenza, aggiorna i tuoi [Calendari](/it/setting-up-project/calendars/index.md).

## Ore per giorno, giorni per settimana, giorni per mese

In Ingantt puoi specificare la [Durata](/it/building-schedule/task-properties/index.md#durata), il [Lavoro](/it/building-schedule/task-properties/index.md#lavoro) o il [Ritardo](/it/building-schedule/dependencies/index.md#ritardo-e-anticipo) in ore, giorni, settimane e mesi.

Ad esempio, impostare la durata di un'attività a 2 giorni equivale a 16 ore con le impostazioni predefinite.

Per impostazione predefinita:

- 1 giorno equivale a 8 ore.
- 1 settimana equivale a 5 giorni (40 ore).
- 1 mese equivale a 20 giorni (160 ore).

Puoi modificare queste impostazioni predefinite nella scheda **Duration** della finestra **Project Properties**.

> La maggior parte dei progetti dovrebbe utilizzare i valori predefiniti. Modifica queste impostazioni solo se il tuo progetto ha un requisito specifico per conversioni diverse.

## Formato di visualizzazione di durata e lavoro

Per impostazione predefinita, le durate vengono visualizzate in giorni e i valori di lavoro in ore. Puoi cambiare il formato di visualizzazione per entrambi nella scheda **Time** della finestra **Project Properties**. Le unità disponibili sono minuti, ore, giorni, settimane e mesi.

Quando modifichi uno dei formati, tutti i valori esistenti vengono aggiornati per essere visualizzati nella nuova unità.

## Orario di inizio e fine predefinito

L'orario di inizio predefinito (8:00) e l'orario di fine predefinito (17:00) controllano quando il lavoro inizia e termina ogni giorno. Puoi modificarli nella scheda **Time** della finestra **Project Properties**.

## Opzioni di pianificazione

La scheda **Scheduling** della finestra **Project Properties** contiene le opzioni che controllano come vengono pianificate le attività:

- **Honor constraint dates** — Quando attivata, i vincoli semi-flessibili (come Start No Later Than) hanno la priorità sulle dipendenze, potenzialmente creando margine negativo. Quando disattivata (impostazione predefinita), le dipendenze hanno sempre la priorità.
- **Split in-progress tasks** — Quando attivata (impostazione predefinita), il pianificatore può suddividere automaticamente le attività che presentano avanzamento fuori sequenza.
- **Move completed/remaining parts** — Quattro opzioni che controllano come le parti di lavoro completato e rimanente vengono riposizionate rispetto alla data di stato. Queste aiutano a mantenere aggiornato il cronogramma spostando il lavoro completato indietro alla data di stato o posticipando il lavoro rimanente.
