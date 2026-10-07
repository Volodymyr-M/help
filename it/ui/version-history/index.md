# Cronologia versioni

Ingantt conserva la cronologia completa di ogni piano archiviato in Google Drive. Puoi sfogliarla, visualizzare in anteprima qualsiasi versione precedente nel diagramma di Gantt, fissare quelle importanti e ripristinarne una come piano corrente.

**Il progetto deve essere aperto da Google Drive.** La cronologia delle versioni è la cronologia delle revisioni di Google Drive, quindi le due voci di menu della cronologia delle versioni sono nascoste per un progetto aperto dal tuo dispositivo o mai salvato. Salvalo su [Drive](/it/ui/files/index.md) e compariranno.

## Aprire la cronologia delle versioni

Scegli **File → Cronologia versioni → Vedi cronologia versioni**, oppure premi `Ctrl` + `Alt` + `Shift` + `H`.

Il pannello si apre lateralmente e Ingantt passa a schermo intero per lasciare spazio al diagramma. Chiudendo il pannello tutto torna com'era.

## Sfogliare e visualizzare in anteprima

Le versioni sono elencate dalla più recente e raggruppate per giorno — **Oggi**, **Ieri**, poi la data. La più recente è contrassegnata come **Versione corrente** ed è selezionata automaticamente all'apertura del pannello.

Fai clic su una versione qualsiasi e Ingantt la carica nel diagramma così puoi esaminarla. L'anteprima è una consultazione, non una modifica:

- Il tuo piano aperto viene messo da parte intatto, inclusa la cronologia degli annullamenti e le eventuali modifiche non salvate.
- Chiudi il pannello e il tuo piano torna esattamente come lo avevi lasciato.
- L'anteprima non scrive nulla su Drive.

## Fissare una versione

Google Drive elimina nel tempo le vecchie revisioni di un file. Fissare una versione la contrassegna come **Conserva per sempre**, così sopravvive a quella pulizia e resta nell'elenco.

Ci sono due modi per fissare una versione:

- **File → Cronologia versioni → Fissa la versione corrente** fissa la versione più recente senza aprire il pannello. Usalo subito dopo un salvataggio che vuoi conservare — prima di una ripianificazione, alla fine di una fase o quando un piano viene approvato.
- Nel pannello, apri il menu di una versione qualsiasi e scegli **Fissa questa versione**.

Le versioni fissate sono contrassegnate come **Fissata** nell'elenco. Scegliendo di nuovo la stessa voce di menu si annulla il fissaggio.

## Ripristinare una versione

Seleziona la versione desiderata e scegli **Ripristina questa versione**. Ingantt ti chiede conferma:

> Ripristinare questa versione? La versione corrente verrà salvata prima.

Il ripristino non butta via il tuo piano corrente. Salva il contenuto ripristinato come **nuova** versione in cima alla cronologia, quindi la versione su cui ti trovavi è ancora nell'elenco e può a sua volta essere ripristinata. La cronologia non fa che crescere — il ripristino non elimina mai nulla.

Dopo la conferma, il piano ripristinato diventa il progetto aperto e viene salvato immediatamente su Drive.

## La cronologia delle versioni non è la stessa cosa delle baseline

Le due cose sono facili da confondere:

- La **Cronologia versioni** è una registrazione del *file* nel tempo, conservata da Google Drive. Risponde alla domanda "com'era questo piano martedì scorso?"
- Le **[Previsioni](/it/tracking/baselines/index.md)** sono istantanee del *cronogramma* memorizzate all'interno del piano, con cui fai il confronto nella stessa vista — barre di baseline nel diagramma di Gantt, colonne di baseline e di scostamento nella tabella. Rispondono alla domanda "quanto ci siamo allontanati dal piano approvato?"

Usa la cronologia delle versioni per tornare indietro. Usa le baseline per misurare.
