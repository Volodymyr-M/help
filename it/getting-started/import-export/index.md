# Importazione ed esportazione

Apri file di progetto da molte applicazioni di pianificazione ed esporta il tuo progetto in PDF, PNG, CSV o altri formati.

## Importazione di file di progetto

Ingantt può aprire file di progetto da molte applicazioni di pianificazione, non solo Microsoft Project. I formati di importazione supportati includono:

- **Microsoft Project** — MPP, MPT, MPX
- **Primavera P6** — XER, PMXML
- **GanttProject** — GAN
- **Asta Powerproject** — PP
- **ConceptDraw** — CDPX
- **FastTrack Schedule** — FTS
- **ProjectLibre** — POD
- **GNOME Planner** — Planner
- **Phoenix Project Manager** — PPX
- **Synchro** — SP
- **TurboProject** — PEP
- E altri (SDEF e altri formati)

Per importare un file, fai clic sul pulsante **+** nella schermata Progetti, oppure usa l'opzione **Import** nel menu **File**. Se apporti modifiche a un file importato, Ingantt le salva in formato XML.

> Per aprire file di progetto non XML, Ingantt li invia tramite una connessione sicura al servizio web di Ingantt per la conversione. I tuoi file non vengono archiviati nel servizio. È necessaria una connessione a Internet.

## Esportazione del progetto

Ingantt offre diversi formati di esportazione tramite l'opzione **Export** nel menu **File** (oppure **Download** sulla versione web). Quando scegli **Export**, appare una finestra di dialogo che consente di selezionare il formato desiderato:

| Formato | Descrizione |
|---------|-------------|
| **PDF** | Documento PDF stampabile del diagramma di Gantt |
| **PNG** | File immagine del diagramma di Gantt (include il tema corrente) |
| **CSV** | File di valori separati da virgola con i dati delle attività per fogli di calcolo |
| **XML** | Formato XML di progetto per l'interoperabilità |
| **Markdown** | Formato di testo per documentazione, README o wiki |

Il file esportato riflette le impostazioni correnti del diagramma di Gantt. Ad esempio, se i nomi delle attività sono nascosti nella finestra **Options**, non appariranno nemmeno nell'esportazione. Anche il livello di zoom viene preservato.

> Le esportazioni PDF utilizzano sempre i colori del tema chiaro, mentre le esportazioni PNG utilizzano il tema corrente dell'interfaccia (chiaro o scuro). Le esportazioni CSV e Markdown sono in testo semplice. Quando visibili nell'interfaccia, le attività suddivise, le barre di baseline e le barre fantasma del livellamento vengono tutte renderizzate nelle esportazioni PDF e PNG.
