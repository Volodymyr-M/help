# Salvare il progetto

Ingantt salva il tuo progetto come file sul tuo dispositivo oppure come file nel tuo Google Drive. Il salvataggio automatico mantiene poi quel file aggiornato mentre lavori. Questo articolo spiega quale destinazione ottieni, quando si applica il salvataggio automatico e l'unico caso in cui non può farlo.

## Salvare per la prima volta

Fai clic sul pulsante **Save** nella barra degli strumenti, oppure usa **Save file** nel menu **File**.

Se il progetto non è mai stato salvato, Ingantt ti chiede dove salvarlo. **Save project as** offre due destinazioni:

- **Save to new local file** — un file sul tuo dispositivo.
- **Save to new Google Drive file** — un file nel tuo Google Drive. Richiede l'accesso con Google.

Puoi cambiare la destinazione in seguito con **Save file as** nel menu **File**, che crea sempre un nuovo file e continua a lavorare in quello.

Il tuo progetto viene salvato in un formato XML pienamente compatibile con Microsoft Project. Nulla del tuo piano è vincolato a Ingantt.

> Sul web, se hai già effettuato l'accesso a Google quando crei un progetto, Ingantt sceglie Google Drive per te e assegna al file il nome del progetto. Non devi salvare una prima volta perché il salvataggio automatico inizi a funzionare, e rinominando il progetto viene rinominato anche il file su Drive.

## Salvataggio automatico

Quando il salvataggio automatico è attivo, Ingantt scrive ogni modifica nel file esistente del progetto in background, all'incirca ogni 20 secondi e solo quando c'è qualcosa di non salvato. Scrive sempre nella destinazione che il progetto ha già — non ne sceglie mai una nuova.

Che sia attivo per impostazione predefinita dipende dalla piattaforma:

| Piattaforma | Salvataggio automatico predefinito | Dove modificarlo |
|-------------|------------------------------------|------------------|
| **Web** | Attivo | Menu **File** → **Work offline (no autosave)** |
| **Android, iOS, Windows, macOS** | Disattivato | **Enable autosave** nella finestra **Options** o nel menu **File** |

Il pulsante **Save** funge anche da indicatore del salvataggio automatico. Mostra *Saving…*, *File saved*, *File saved to Google Drive*, *Autosave pending…* oppure un errore se un salvataggio non è andato a buon fine.

Il salvataggio automatico non può aiutarti in due situazioni:

- **Il progetto non è mai stato salvato.** Non c'è ancora alcun file da aggiornare, quindi salvalo una volta tu stesso.
- **Il progetto è stato aperto da un file locale mentre usi Ingantt in un browser.** Vedi sotto.

## Salvataggio automatico e file locali sul web

Un browser non può scrivere di nuovo in un file che hai scelto dal tuo disco. Quando Ingantt per Web salva in "un file locale", scarica invece una nuova copia del file — che è il comportamento giusto per un **Save** esplicito, ma non qualcosa che vuoi che accada ogni 20 secondi.

Quindi: **Ingantt per Web non esegue il salvataggio automatico nei file locali.** Se hai aperto un file di progetto locale nel browser e vuoi che le tue modifiche vengano conservate automaticamente, usa una volta **Save file as** → **Save to new Google Drive file**. Da quel momento, il salvataggio automatico mantiene aggiornato il file su Drive.

Questo riguarda allo stesso modo [Modifica con l'IA](/it/getting-started/edit-with-ai/index.md): senza salvataggio automatico, tutto ciò che l'IA modifica resta non salvato finché non lo salvi tu stesso, e Ingantt ti avvisa di questo prima dell'inizio della sessione.

## Lavorare offline sul web

**Work offline (no autosave)** nel menu **File** disattiva il salvataggio automatico per la scheda corrente del browser. Usalo quando vuoi continuare a modificare senza che ogni modifica venga inviata a Google Drive.

Due cose da sapere:

- Mentre è attivo non viene salvato nulla, quindi salva manualmente prima di chiudere la scheda. Ingantt te lo ricorda quando lo attivi.
- L'impostazione vale per la sessione. Ricaricando la pagina o aprendo una nuova scheda, il salvataggio automatico è di nuovo attivo. Su Android, iOS, Windows e macOS, invece, l'impostazione **Enable autosave** viene ricordata.

## Scaricare una copia

Sul web, **File** → **Download** → **Download XML** salva una copia del progetto sul tuo computer senza cambiare dove è salvato il progetto stesso. Usalo per un backup o per consegnare il file a chi usa Microsoft Project.

Gli altri formati — PDF, PNG, CSV, XML, YAML e Markdown — sono descritti in [Importazione ed esportazione](/it/getting-started/import-export/index.md).

## Chiudere con modifiche non salvate

Se chiudi un progetto con modifiche non salvate, Ingantt ti chiede di salvare le modifiche al progetto (**Save changes to**) e ti avvisa che le modifiche non salvate andranno perse. La stessa richiesta compare prima di spostare un progetto nel Cestino.

## Se Ingantt non ti permette di salvare

- **"View only mode as trial ended"** oppure **"Subscription inactive"** — i tuoi progetti sono ancora lì e ancora leggibili, ma il salvataggio è disattivato finché il tuo abbonamento non è attivo. Vedi [Prova gratuita](/it/account/trial/index.md) e [Abbonamenti e pagamento](/it/account/subscription/index.md).
- **"You are a viewer and cannot save"** — il file di Google Drive è stato condiviso con te come visualizzatore o commentatore. Chiedi al proprietario l'accesso in modifica, oppure usa **Save file as** per conservare una tua copia. Vedi [Condividere un progetto](/it/ui/sharing/index.md).
- **"Error saving file to Google Drive"** — di solito un problema di connessione o un accesso a Google scaduto. Controlla la connessione ed effettua di nuovo l'accesso; vedi [Integrazione con Google Drive](/it/ui/files/index.md).
