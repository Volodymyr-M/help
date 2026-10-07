# Diagramma di Gantt

Il diagramma di Gantt è la linea temporale del tuo progetto. Visualizza le regolazioni del livellamento, le linee di avanzamento e come il cronogramma è cambiato rispetto alla baseline.

## Viste disponibili

Ingantt offre molteplici viste per lavorare con il progetto, accessibili dal menu di navigazione o dal menu **Visualizza**. Tutte le viste sono completamente funzionali — esegui qualsiasi azione disponibile per le attività in qualsiasi vista.

**Viste attività:**

- **Compiti** — elenco attività e diagramma di Gantt
- **Gantt di Tracciamento**
- **[Board Attivita](/it/views/task-views/index.md#board-attivita)**
- **[Diagramma Reticolare](/it/views/task-views/index.md#diagramma-reticolare)**
- **[Vista Calendario](/it/views/task-views/index.md#vista-calendario)**
- **[Sequenza temporale](/it/views/task-views/index.md#sequenza-temporale)**

**Viste risorse:**

- **[Utilizzo delle Risorse](/it/views/resource-views/index.md#utilizzo-delle-risorse)**
- **[Utilizzo delle Attività](/it/views/resource-views/index.md#utilizzo-delle-attività)**
- **[Pianificatore Team](/it/views/resource-views/index.md#pianificatore-team)**
- **[Grafico Risorse](/it/views/resource-views/index.md#grafico-risorse)**

## Vista Compiti

La vista **Compiti** è la vista principale che combina un elenco attività e il diagramma di Gantt (vista divisa). Puoi configurare quali pannelli mostrare tramite il sottomenu **Visualizza > Pannelli nelle Attività**: l'elenco attività e il diagramma di Gantt possono essere attivati o disattivati indipendentemente.

## Ispettore attività

L'**Ispettore attività** è un pannello laterale che mostra i dettagli dell'attività selezionata, inclusi i fattori di pianificazione (cosa determina le date dell'attività), le proprietà generali, le risorse, i predecessori, il costo e altro. Attiva l'Ispettore attività dalla barra degli strumenti.

La sezione **Fattori di Pianificazione** nella parte superiore dell'Inspector mostra cosa determina le date pianificate dell'attività: predecessori determinanti (mostrati in grassetto con un badge "Driving"), predecessori non determinanti (con il loro margine relativo), vincoli, ritardi di livellamento, calendari e valori di margine. Le attività critiche mostrano un badge "Critical".

## Gantt livellamento

Quando il [livellamento automatico](/it/adjusting-schedule/leveling/index.md#livellamento-automatico) è stato applicato al progetto, un pulsante **Gantt livellamento** appare nell'area del diagramma di Gantt.

Quando attivato, il diagramma di Gantt mostra **barre verdi** nella posizione pre-livellamento di ogni attività (dove si trovava l'attività prima del livellamento automatico). Le barre standard delle attività rimangono nelle posizioni livellate correnti. Questo ti permette di confrontare visivamente il cronogramma originale con quello livellato e vedere di quanto ogni attività è stata ritardata.

Quando il pulsante è disattivato, vengono mostrate solo le barre standard delle attività.

> Il pulsante Gantt livellamento è visibile solo quando esistono dati di livellamento. Viene automaticamente nascosto quando cancelli il livellamento. Se apri un file di progetto che contiene già dati di livellamento, il pulsante è disponibile ma inizia nella posizione disattivata.

## Linee di avanzamento

Quando attivate, il diagramma di Gantt mostra una **linea di avanzamento** — una linea a zig-zag che indica visivamente se le attività sono in ritardo o in anticipo rispetto alla data di stato. Le attività in ritardo fanno piegare la linea a sinistra; le attività in anticipo la fanno piegare a destra; le attività in linea mantengono la linea dritta.

Attiva le linee di avanzamento dal pulsante flottante della barra degli strumenti nel diagramma di Gantt o dal menu **Visualizza**. La linea di avanzamento è inclusa anche nell'output PDF/stampa quando attivata.
