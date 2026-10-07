# Proprietà del Progetto

Configura la data di inizio, gli orari di lavoro e le regole di pianificazione del tuo progetto. Queste impostazioni determinano il modo in cui ogni attività del progetto viene calcolata e visualizzata.

## Nome del progetto

Imposta il nome del progetto nel campo **Nome** della scheda **Generale** della finestra **Proprietà del Progetto**. Questo nome viene utilizzato anche dall'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice) del progetto.

Su web e Windows, facendo clic sul nome del progetto nell'intestazione si apre anche la finestra **Proprietà del Progetto**.

## Data di inizio e direzione di pianificazione

Per impostazione predefinita, il progetto viene pianificato dalla data di inizio, che puoi impostare nel campo **Data di Inizio del Progetto** della finestra **Proprietà del Progetto**.

Per pianificare il progetto dalla data di fine, passa a **Pianifica dalla data di fine** nella finestra **Proprietà del Progetto** e imposta la **Data di Fine del Progetto**.

La scheda **Generale** della finestra **Proprietà del Progetto** mostra sia la data di inizio che la data di fine. Quando si pianifica dalla data di inizio, la data di inizio è modificabile e la data di fine mostra il valore calcolato. Quando si pianifica dalla data di fine, la data di fine è modificabile e la data di inizio mostra il valore calcolato.

Tieni presente che:

- Per i progetti pianificati dalla data di inizio, il [vincolo](/it/building-schedule/constraints/index.md#come-funzionano-i-vincoli) predefinito per le attività appena create è **Il prima possibile**.
- Per i progetti pianificati dalla data di fine, il vincolo predefinito per le attività appena create è **Il più tardi possibile**.

Quando si passa dalla pianificazione per data di inizio a quella per data di fine, i vincoli delle attività esistenti non vengono modificati, ad eccezione delle [attività di riepilogo](/it/building-schedule/tasks/index.md#attività-di-riepilogo), inclusa l'[attività di riepilogo radice](/it/building-schedule/tasks/index.md#attività-di-riepilogo-radice).

Per le attività di riepilogo:

- Il vincolo **Il prima possibile** viene sostituito con **Il più tardi possibile** quando si passa dalla pianificazione per data di inizio a quella per data di fine.
- Il vincolo **Il più tardi possibile** viene sostituito con **Il prima possibile** quando si passa dalla pianificazione per data di fine a quella per data di inizio.

## Primo giorno della settimana

A seconda del paese, la settimana può iniziare di domenica o di lunedì. Puoi aggiornare il campo **Primo giorno della settimana** nella scheda **Regionale** della finestra **Proprietà del Progetto** per modificare l'impostazione predefinita del tuo progetto.

La modifica di questa proprietà aggiorna l'interfaccia utente, incluso il diagramma di Gantt ad alcuni livelli di zoom, ma non influisce sulla pianificazione. Per adeguare il cronogramma di conseguenza, aggiorna i tuoi [Calendari](/it/setting-up-project/calendars/index.md).

## Ore per giorno, giorni per settimana, giorni per mese

In Ingantt puoi specificare la [Durata](/it/building-schedule/task-properties/index.md#durata), il [Lavoro](/it/building-schedule/task-properties/index.md#lavoro) o il [Ritardo](/it/building-schedule/dependencies/index.md#ritardo-e-anticipo) in ore, giorni, settimane e mesi.

Ad esempio, impostare la durata di un'attività a 2 giorni equivale a 16 ore con le impostazioni predefinite.

Per impostazione predefinita:

- 1 giorno equivale a 8 ore.
- 1 settimana equivale a 5 giorni (40 ore).
- 1 mese equivale a 20 giorni (160 ore).

Puoi modificare queste impostazioni predefinite nella scheda **Durata** della finestra **Proprietà del Progetto**.

> La maggior parte dei progetti dovrebbe utilizzare i valori predefiniti. Modifica queste impostazioni solo se il tuo progetto ha un requisito specifico per conversioni diverse.

## Formato di visualizzazione di durata e lavoro

Per impostazione predefinita, le durate vengono visualizzate in giorni e i valori di lavoro in ore. Puoi cambiare il formato di visualizzazione per entrambi nella scheda **Tempo** della finestra **Proprietà del Progetto**. Le unità disponibili sono minuti, ore, giorni, settimane e mesi.

Quando modifichi uno dei formati, tutti i valori esistenti vengono aggiornati per essere visualizzati nella nuova unità.

## Orario di inizio e fine predefinito

L'orario di inizio predefinito (8:00) e l'orario di fine predefinito (17:00) controllano quando il lavoro inizia e termina ogni giorno. Puoi modificarli nella scheda **Tempo** della finestra **Proprietà del Progetto**.

## Opzioni di pianificazione

La scheda **Pianificazione** della finestra **Proprietà del Progetto** contiene le opzioni che controllano come vengono pianificate le attività:

- **Honor constraint dates** — Quando attivata, i vincoli semi-flessibili (come Start No Later Than) hanno la priorità sulle dipendenze, potenzialmente creando margine negativo. Quando disattivata (impostazione predefinita), le dipendenze hanno sempre la priorità.
- **Dividi attività in corso** — Quando attivata (impostazione predefinita), il pianificatore può suddividere automaticamente le attività che presentano avanzamento fuori sequenza.
- **Move completed/remaining parts** — Quattro opzioni che controllano come le parti di lavoro completato e rimanente vengono riposizionate rispetto alla data di stato. Queste aiutano a mantenere aggiornato il cronogramma spostando il lavoro completato indietro alla data di stato o posticipando il lavoro rimanente.
