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
- **Ingantt YAML** — YAML, YML
- E altri (SDEF e altri formati)

Per importare un file, fai clic sul pulsante **+** nella schermata Progetti, oppure usa l'opzione **Import** nel menu **File**. Se apporti modifiche a un file importato, Ingantt le salva in formato XML.

> Per aprire file di progetto non XML, Ingantt li invia tramite una connessione sicura al servizio web di Ingantt per la conversione. I tuoi file non vengono archiviati nel servizio. È necessaria una connessione a Internet. I file YAML vengono analizzati localmente.

## Esportazione del progetto

Ingantt offre diversi formati di esportazione tramite l'opzione **Export** nel menu **File** (oppure **Download** sulla versione web). Quando scegli **Export**, appare una finestra di dialogo che consente di selezionare il formato desiderato:

| Formato | Descrizione |
|---------|-------------|
| **PDF** | Documento PDF stampabile del diagramma di Gantt |
| **PNG** | File immagine del diagramma di Gantt (include il tema corrente) |
| **CSV** | File di valori separati da virgola con i dati delle attività per fogli di calcolo |
| **XML** | Formato XML di progetto per l'interoperabilità |
| **YAML** | Definizione di progetto compatta e leggibile dall'uomo, pensata per la modifica assistita dall'IA |
| **Markdown** | Formato di testo per documentazione, README o wiki |

Il file esportato riflette le impostazioni correnti del diagramma di Gantt. Ad esempio, se i nomi delle attività sono nascosti nella finestra **Options**, non appariranno nemmeno nell'esportazione. Anche il livello di zoom viene preservato.

> Le esportazioni PDF utilizzano sempre i colori del tema chiaro, mentre le esportazioni PNG utilizzano il tema corrente dell'interfaccia (chiaro o scuro). Le esportazioni CSV, YAML e Markdown sono in testo semplice. Quando visibili nell'interfaccia, le attività suddivise, le barre di baseline e le barre fantasma del livellamento vengono tutte renderizzate nelle esportazioni PDF e PNG.

## Modifica di YAML con agenti IA

L'esportazione YAML è progettata per essere modificata con un assistente di codifica IA (Claude Code, Codex o qualsiasi strumento in grado di leggere e scrivere file). Esporta il progetto, descrivi le modifiche desiderate in linguaggio naturale — _"aggiungi una fase di QA di due settimane dopo lo sviluppo"_, _"assegna Alex a tutte le attività di design"_ — e reimporta il risultato.

Il formato contiene **solo gli input** (durate, dipendenze, vincoli, assegnazioni, calendari, tariffe). I valori derivati — date di inizio/fine delle attività, costo totale, percorso critico, scorrimento, totali di riepilogo — sono volutamente omessi; Ingantt li ricalcola all'importazione. L'agente non deve provare a calcolare le date da solo.

Indirizza l'agente al [riferimento del formato YAML](/yaml-reference.md) affinché conosca lo schema.

> Per la modifica in tempo reale senza il ciclo esporta/importa, consulta [Modifica con l'IA](/it/getting-started/edit-with-ai/index.md) — l'IA legge e scrive lo stesso schema YAML tramite una sessione in tempo reale e tu vedi ogni modifica comparire nel diagramma di Gantt nel momento in cui avviene.
