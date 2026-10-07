# Integrazione con Google Drive

Ingantt archivia i file di progetto in Google Drive così puoi accedervi da qualsiasi dispositivo. Questo articolo spiega come accedere, quali autorizzazioni richiede Ingantt, come Drive e Ingantt lavorano insieme e cosa fare quando l'accesso a Google non funziona come previsto.

## Lavorare senza accedere

Non sei obbligato ad accedere. Senza un account Google puoi aprire e modificare i file di progetto archiviati sul tuo dispositivo e salvarli di nuovo (sul web, salvare un file locale scarica una nuova copia — vedi [Salvare il progetto](/it/getting-started/saving/index.md)).

Accedi con Google quando vuoi che i tuoi progetti siano conservati nel cloud, salvati automaticamente mentre lavori, disponibili sugli altri tuoi dispositivi e condivisibili con altre persone.

## Accesso a Google

Nella schermata dei progetti, fai clic su **Sign in with Google**. Si apre una finestra standard di Google che richiede le autorizzazioni elencate di seguito. Puoi uscire in qualsiasi momento con **Sign out of Google**.

Ingantt richiede le seguenti autorizzazioni:

- **Visualizzare le informazioni del profilo** — Utilizzato per identificare il tuo account.
- **Collegarsi al tuo Google Drive** — Solo versione **Web**. Consente di creare o aprire file Ingantt dall'interfaccia web di Google Drive (pulsante **Nuovo** o menu **Apri con**).
- **Visualizzare, modificare, creare ed eliminare solo i file specifici di Google Drive che utilizzi con questa app** — Consente a Ingantt di creare e modificare i propri file nel tuo Google Drive. Ingantt non può accedere agli altri tuoi file.

> La terza autorizzazione è l'ambito ristretto di Google Drive: Ingantt vede soltanto i file che hai creato in Ingantt o aperto con esso. Il resto del tuo Drive resta invisibile a Ingantt, ed è anche per questo che Ingantt non può sfogliare le cartelle del tuo Drive per te.

## Creare e aprire progetti in Google Drive

Una volta effettuato l'accesso, la schermata dei progetti è il tuo Drive:

- **Recent Projects** — i progetti che hai aperto più di recente, raggruppati per data.
- **Shared with me** — i file Ingantt che altre persone hanno condiviso con te.
- **Starred** — i progetti che hai contrassegnato con **Add to Starred**.
- **Trash** — i progetti che hai spostato nel Cestino. Usa **Restore** per recuperarne uno.

Usa **Open** → **Open from Google Drive** per scegliere un file esistente, oppure la scheda **Upload** della stessa finestra per cercare un file sul tuo dispositivo o trascinarlo al suo interno. Microsoft Project, Primavera e gli altri formati supportati possono essere aperti in questo modo — vedi [Importazione ed esportazione](/it/getting-started/import-export/index.md).

I nuovi progetti si creano da **New** nella schermata dei progetti: **New project**, **New with AI** oppure **New from template**. Quando hai effettuato l'accesso sul web, un nuovo progetto viene destinato subito a Google Drive e da quel momento salvato automaticamente.

> **Manca un file in "Shared with me"?** Google richiede che un file condiviso venga aperto prima da Google Drive. Fai clic destro sul file in Drive e scegli **Apri con** → **Ingantt**. A quel punto compare nell'elenco.

## Usare Ingantt dall'interfaccia di Google Drive (web)

Sul web, Ingantt può essere avviato da Drive anziché il contrario. È a questo che serve l'autorizzazione **Collegarsi al tuo Google Drive**, e funziona solo dopo che Ingantt è stato aggiunto al tuo Drive dal [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"}.

- **Nuovo** → **Altro** → **Ingantt** crea un nuovo progetto Ingantt nella cartella di Drive in cui ti trovi.
- Fai clic destro su un file Ingantt → **Apri con** → **Ingantt** per aprirlo in Ingantt per Web.

In entrambi i casi Drive apre `web.ingantt.com` e gli passa la cartella o il file da usare, così arrivi direttamente nel progetto giusto.

## Risoluzione dei problemi di accesso a Google (Web)

**Google Drive non offre Ingantt nei menu Nuovo o Apri con.** Esci da Google in Ingantt, accedi di nuovo e assicurati di concedere l'autorizzazione **Collegarsi al tuo Google Drive**. Google aggiunge le voci ai menu di Drive solo dopo che quell'autorizzazione è stata concessa, ed è facile saltarla nella schermata di consenso. Se le voci mancano ancora, verifica che Ingantt sia stato aggiunto al tuo account dal Google Workspace Marketplace.

**Un file che qualcuno ha condiviso con te non è in "Shared with me".** Aprilo una volta da Google Drive con **Apri con** → **Ingantt**. Poiché Ingantt ha accesso solo ai file che usi con Ingantt, un file condiviso gli resta invisibile finché non lo hai aperto in quel modo almeno una volta.

**"Error saving file to Google Drive".** Controlla prima la connessione. Se il problema persiste, esci da Google e accedi di nuovo — l'accesso potrebbe essere scaduto o aver perso un'autorizzazione.

**"Could not sign in to Google."** Se usi più di un account Google, assicurati che la finestra popup stia accedendo con l'account che possiede i tuoi progetti. Anche le estensioni del browser che bloccano i cookie di terze parti o i popup possono impedire alla finestra di Google di completare l'accesso.

Ancora bloccato? [Contatta l'assistenza](mailto:support@ingantt.com) e indicaci la tua piattaforma, il tuo browser e il messaggio esatto che vedi.

## Video dimostrativo

[Usare Ingantt per Web con Google Drive](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## Argomenti correlati

- [Salvare il progetto](/it/getting-started/saving/index.md) — destinazioni, salvataggio automatico e lavoro offline.
- [Condividere un progetto](/it/ui/sharing/index.md) — dare ad altre persone l'accesso a un piano.
