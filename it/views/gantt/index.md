# Diagramma di Gantt

Il diagramma di Gantt è la linea temporale del tuo progetto. Visualizza le regolazioni del livellamento, le linee di avanzamento e come il cronogramma è cambiato rispetto alla baseline.

## Viste disponibili

Ingantt offre molteplici viste per lavorare con il progetto, accessibili dal menu di navigazione o dal menu **View**. Tutte le viste sono completamente funzionali — esegui qualsiasi azione disponibile per le attività in qualsiasi vista.

**Viste attività:**

- **Tasks** — elenco attività e diagramma di Gantt
- **Tracking Gantt**
- **[Task Board](/it/views/task-views/index.md#task-board)**
- **[Network Diagram](/it/views/task-views/index.md#network-diagram)**
- **[Calendar View](/it/views/task-views/index.md#calendar-view)**
- **[Timeline](/it/views/task-views/index.md#timeline)**

**Viste risorse:**

- **[Resource Usage](/it/views/resource-views/index.md#resource-usage)**
- **[Task Usage](/it/views/resource-views/index.md#task-usage)**
- **[Team Planner](/it/views/resource-views/index.md#team-planner)**
- **[Resource Graph](/it/views/resource-views/index.md#resource-graph)**

## Vista Tasks

La vista **Tasks** è la vista principale che combina un elenco attività e il diagramma di Gantt (vista divisa). Puoi configurare quali pannelli mostrare tramite il sottomenu **View > Panels in Tasks**: l'elenco attività e il diagramma di Gantt possono essere attivati indipendentemente.

## Task Inspector

Il **Task Inspector** è un pannello laterale che mostra i dettagli dell'attività selezionata, inclusi i fattori di pianificazione (cosa determina le date dell'attività), le proprietà generali, le risorse, i predecessori, il costo e altro. Attiva il Task Inspector dalla barra degli strumenti.

La sezione **Scheduling Factors** nella parte superiore dell'Inspector mostra cosa determina le date pianificate dell'attività: predecessori determinanti (mostrati in grassetto con un badge "Driving"), predecessori non determinanti (con il relativo margine), vincoli, ritardi di livellamento, calendari e valori di margine. Le attività critiche mostrano un badge "Critical".

## Leveling Gantt

Quando il [livellamento automatico](/it/adjusting-schedule/leveling/index.md#livellamento-automatico) è stato applicato al progetto, un pulsante **Leveling Gantt** appare nell'area del diagramma di Gantt.

Quando attivato, il diagramma di Gantt mostra **barre verdi** nella posizione pre-livellamento di ogni attività (dove si trovava l'attività prima del livellamento automatico). Le barre standard delle attività rimangono nelle posizioni livellate correnti. Questo ti permette di confrontare visivamente il cronogramma originale con quello livellato e vedere di quanto ogni attività è stata ritardata.

Quando il pulsante è disattivato, vengono mostrate solo le barre standard delle attività.

> Il pulsante Leveling Gantt è visibile solo quando esistono dati di livellamento. Viene automaticamente nascosto quando cancelli il livellamento. Se apri un file di progetto che contiene già dati di livellamento, il pulsante è disponibile ma inizia nella posizione disattivata.

## Linee di avanzamento

Quando attivate, il diagramma di Gantt mostra una **linea di avanzamento** — una linea a zig-zag che indica visivamente se le attività sono in ritardo o in anticipo rispetto alla data di stato. Le attività in ritardo fanno piegare la linea a sinistra; le attività in anticipo la fanno piegare a destra; le attività in linea mantengono la linea dritta.

Attiva le linee di avanzamento dal pulsante flottante della barra degli strumenti nel diagramma di Gantt o dal menu **View**. La linea di avanzamento è inclusa anche nell'output PDF/stampa quando attivata.
