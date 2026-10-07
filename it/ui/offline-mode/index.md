# Lavorare offline

Disattiva il salvataggio automatico così nulla viene scritto su Google Drive finché non salvi deliberatamente — utile quando stai per perdere la connessione.

Nella versione **Web** la voce di menu è **File → Work offline (no autosave)**. Su Windows, macOS, Android e iOS lo stesso interruttore si chiama **Enable autosave**.

## Cosa fa Work offline

**File → Work offline** disattiva il salvataggio automatico per la scheda corrente. Tutto qui. Mentre è attivo, Ingantt smette di scrivere il progetto su Google Drive ogni 20 secondi, e nulla lascia il tuo browser finché non salvi.

Attivandolo compare un promemoria una tantum:

> La modalità offline è attiva. Ricordati di salvare manualmente le modifiche prima di chiudere la scheda.

Prendilo alla lettera. **Ingantt non mette in coda le tue modifiche e non le invia quando torni online.** Non esiste alcuna sincronizzazione in background. Se chiudi o ricarichi la scheda senza salvare, il lavoro svolto dall'ultimo salvataggio è perso.

## Salvare mentre sei offline

Non puoi salvare su Google Drive senza connessione, quindi la sequenza che funziona è:

1. Apri il piano mentre hai ancora la connessione.
2. Attiva **File → Work offline**.
3. Modifica normalmente. Tutto avviene nel browser — il cronogramma viene ricalcolato, annulla e ripeti funzionano, nulla viene inviato da nessuna parte.
4. Quando sei di nuovo online, disattiva **Work offline** e poi premi **Save** (oppure `Ctrl`/`Cmd` + `S`). È questo il passaggio che mette il tuo lavoro su Drive.
5. Il salvataggio automatico riprende da quel momento.

Se preferisci non dover ricordare il passaggio 4, esporta una copia prima di perdere la connessione: **File → Export → XML** scarica il piano sul tuo dispositivo, e potrai riaprire quel file in seguito.

## Il pulsante Save ti dice a che punto sei

Il pulsante Save nella barra degli strumenti è l'indicatore da tenere d'occhio:

| Cosa mostra | Cosa significa |
|-------------|----------------|
| **File saved to Google Drive** | Tutto è su Drive. |
| **Autosave pending…** | Ci sono modifiche non salvate; il salvataggio automatico le prenderà a breve. |
| **Saving…** | Un salvataggio è in corso. |
| **Save file to Google Drive** | Ci sono modifiche non salvate e il salvataggio automatico è disattivato — devi salvare. |
| **Error saving file to Google Drive** | È stato tentato un salvataggio ed è fallito. Le tue modifiche sono ancora nella scheda e ancora non salvate. |

Lo stato di errore è ciò che vedi se il salvataggio automatico viene eseguito mentre la connessione è assente: il salvataggio fallisce, il pulsante diventa rosso e il progetto resta non salvato nella scheda. In quel momento nulla è perso, ma nulla è nemmeno al sicuro — riconnettiti e salva.

## Differenze tra piattaforme

- **Sul Web l'impostazione non viene conservata.** Vale per scheda e per sessione. Apri una nuova scheda o ricarica, e il salvataggio automatico è di nuovo attivo. È voluto — il salvataggio automatico attivo è l'impostazione predefinita più sicura, così un interruttore offline dimenticato non può seguirti. Su Windows, macOS, Android e iOS l'impostazione del salvataggio automatico *viene* ricordata.
- **Le impostazioni predefinite sono diverse.** Sul Web, il salvataggio automatico è attivo fin dall'inizio. Nelle versioni desktop e mobile è disattivato fin dall'inizio, e la stessa voce di menu si chiama **Enable autosave**.
- **Un progetto che non hai ancora salvato non viene mai salvato automaticamente**, modalità offline o meno. Il salvataggio automatico può solo aggiornare un file che esiste già su Drive. Salva una volta, e il salvataggio automatico prende il sopravvento.
- **Un file aperto dal tuo dispositivo nella versione Web non viene mai salvato automaticamente.** Ingantt per Web non può scrivere di nuovo in un file sul tuo disco. Salvalo su [Google Drive](/it/ui/files/index.md) per ottenere il salvataggio automatico.

## Lavorare offline e Modifica con l'IA

Se usi [Modifica con l'IA](/it/getting-started/edit-with-ai/index.md) mentre il salvataggio automatico è disattivato, Ingantt ti avvisa. Le modifiche dell'IA vengono applicate al progetto aperto come normali modifiche annullabili — non vengono salvate da sole. Chiudi la scheda senza salvare e il lavoro dell'IA se ne va con essa, esattamente come qualsiasi modifica manuale.

## Cosa non è supportato

Per essere chiari sulle aspettative:

- Ingantt non rileva se sei andato offline o se sei tornato online.
- Ingantt non mette in coda le modifiche fatte offline per riprodurle alla riconnessione.
- Non esiste una risoluzione dei conflitti di sincronizzazione, perché non esiste sincronizzazione. Se tu e un collega modificate entrambi lo stesso file su Drive, vince l'ultimo salvataggio — l'intero file, non un'unione attività per attività.
- Aprire un piano per la prima volta richiede una connessione. Lavorare offline mantiene modificabile un piano che hai già aperto; non ti permette di aprirne uno nuovo.
