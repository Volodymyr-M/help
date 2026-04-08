# Percorso critico

Queste sono le attività che non puoi permetterti di ritardare — qualsiasi slittamento posticipa l'intero progetto. Identificale in anticipo, monitorale attentamente e saprai esattamente dove concentrarti per rispettare la scadenza.

## Attività critiche

Una volta messo in pratica il piano, alcune attività terminano prima del previsto — e altre no. Alcune attività possono impiegare più tempo senza allungare la durata del progetto. Queste attività hanno un margine di tempo disponibile, noto come _margine_.

Altre attività hanno margine zero — qualsiasi ritardo sposta la data di fine del progetto. Queste sono chiamate _attività critiche_. Per mantenere il progetto nei tempi previsti, presta particolare attenzione a queste attività durante il monitoraggio dell'avanzamento.

Un'attività è anche critica se:
- Ha un vincolo **Must start on** o **Must finish on** come [vincolo](/it/building-schedule/constraints/index.md#come-funzionano-i-vincoli)
- Ha un vincolo **As late as possible** come [vincolo](/it/building-schedule/constraints/index.md#come-funzionano-i-vincoli) in un progetto pianificato dalla data di inizio
- La sua data di fine è uguale o supera la sua [scadenza](/it/building-schedule/task-properties/index.md#scadenza)
- Ha **margine negativo** — un conflitto di pianificazione in cui i vincoli forzano l'attività prima di quanto le dipendenze consentano

Le attività completate al 100% non vengono mai contrassegnate come critiche, indipendentemente dalle altre condizioni.

Ingantt rileva automaticamente le attività critiche. Se l'opzione **Highlight critical tasks** è attivata (tramite il menu **View**, il menu **Chart** nella barra dei menu o la finestra **Options**), queste attività vengono visualizzate in rosso.

Le attività con margine negativo mostrano anche un'icona di avviso nell'elenco delle attività, che indica un conflitto di pianificazione. Questo si verifica tipicamente quando un vincolo **Start no later than** o **Finish no later than** è in conflitto con le dipendenze dell'attività.

![Critical](/images/building-schedule/tasks/critical.png)

## Opzioni del percorso critico

Nella scheda **Other** della finestra **Project Properties**, puoi configurare come viene calcolato il percorso critico:

- **Calculate multiple critical paths** — Quando attivata, ogni gruppo disconnesso di attività collegate ottiene il proprio percorso critico. Quando disattivata (impostazione predefinita), le attività senza successori derivano la data di fine al più tardi dalla data di fine del progetto.
- **Critical slack limit** — Per impostazione predefinita, le attività con margine zero o negativo sono critiche. Puoi aumentare questa soglia in modo che anche le attività con margine fino al numero di giorni specificato siano considerate critiche.
