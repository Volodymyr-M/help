# Modifica con l'IA

Collega il tuo progetto a un assistente di codifica IA come Claude Code, Codex o qualsiasi strumento con accesso HTTP, e lascia che apporti modifiche al tuo cronoprogramma in tempo reale. Mentre la sessione è attiva, l'IA può leggere il tuo progetto corrente, aggiungere o modificare attività, regolare le dipendenze, assegnare risorse e inviare aggiornamenti di ritorno — vedi ogni modifica nel diagramma di Gantt nel momento in cui viene applicata.

> **Modifica con l'IA è attualmente in beta.** La funzionalità è disponibile nella versione web di Ingantt.

## Avviare una sessione di modifica IA

1. Apri il progetto che desideri modificare.
2. Fai clic sull'icona **Modifica con l'IA** (✨) nell'angolo in alto a destra, accanto al pulsante della cronologia delle versioni.
3. La finestra di dialogo mostra una serie di istruzioni che descrivono come il tuo strumento IA deve leggere e scrivere il progetto.
4. Fai clic su **Copia istruzioni**. Questo avvia la sessione di modifica e copia le istruzioni negli appunti.
5. Incolla le istruzioni nel tuo strumento IA (ad esempio, come primo messaggio in una conversazione di Claude Code o Codex).
6. Chiedi all'IA di apportare modifiche in linguaggio naturale — ad esempio, _"aggiungi una fase di QA di due settimane dopo lo sviluppo"_ oppure _"assegna Alex a tutte le attività di design"_.

L'IA segue le istruzioni per recuperare lo YAML corrente, modificarlo e inviare il risultato di ritorno a Ingantt. Ingantt convalida ogni modifica prima di accettarla.

## Cosa succede durante una sessione

- **Il punto verde** accanto all'icona ✨ indica una sessione attiva. Il punto diventa ambra quando la connessione si sta ripristinando e rosso quando la sessione ha riscontrato un errore.
- **Ogni modifica dell'IA viene convalidata** rispetto alle regole di progetto di Ingantt prima di essere applicata. Se l'IA invia dati non validi, Ingantt rifiuta la modifica e comunica all'IA cosa è andato storto in modo che possa auto-correggersi.
- **Anche le tue modifiche vengono inviate alla sessione.** Se cambi qualcosa nell'interfaccia di Ingantt mentre la sessione è attiva, l'IA vedrà il tuo aggiornamento alla lettura successiva.
- **Lo scheduler rimane l'autorità.** Quando l'IA imposta date o durate, Ingantt riesegue il Metodo del Percorso Critico per calcolare il cronoprogramma finale, che potrebbe spostare altre attività.

## Interrompere la sessione

Fai clic sull'icona ✨ mentre una sessione è attiva e scegli **Interrompi sessione**. Puoi anche semplicemente chiudere la scheda del browser — la sessione termina automaticamente dopo un periodo di inattività.

## Strumenti IA supportati

Qualsiasi strumento IA in grado di effettuare richieste HTTP funziona con Modifica con l'IA. Le scelte più comuni includono:

- **Claude Code** — incolla le istruzioni come primo messaggio in una conversazione.
- **Codex** — incolla le istruzioni come primo messaggio in una conversazione.
- **Altri strumenti** — qualsiasi assistente con accesso a `curl` o a un client HTTP può leggere e scrivere nella sessione.

## Suggerimenti

- Mantieni la scheda di Ingantt aperta mentre la sessione è attiva. Se la scheda viene chiusa, l'IA riceverà un errore "sessione non connessa" alla successiva scrittura.
- Se l'IA invia YAML non valido, vedrai una notifica nell'interfaccia di Ingantt. L'IA riceve i dettagli dell'errore e di solito risolve il problema al tentativo successivo.
- Per progetti grandi, inizia con una richiesta mirata (_"riorganizza la fase di test"_) anziché con modifiche generalizzate — l'IA può iterare in piccoli passi con feedback immediato.
- L'IA non può vedere informazioni che non le vengono fornite. Se la tua richiesta dipende dal contesto — vincoli, scadenze o regole di business — includilo nel tuo prompt.
