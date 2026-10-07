# Earned Value

L'Earned Value Management (EVM) combina le misurazioni di ambito, tempi e costi per valutare se il progetto è in linea con i tempi e il budget. Imposta una data di stato e una baseline, e Ingantt calcola le metriche EVM standard del settore.

## Data stato

La **Data stato** definisce la data utilizzata per il monitoraggio dell'avanzamento e i calcoli Earned Value. Quando impostata, una linea verticale verde viene visualizzata nel diagramma di Gantt a quella data.

Quando la data di stato non è impostata, per i calcoli viene utilizzata la data corrente. Puoi impostare la data di stato nella finestra **Opzioni Valore Acquisito**, accessibile dal menu **Progetto**.

## Earned Value Management

Ingantt supporta l'Earned Value Management — una tecnica di gestione dei progetti che integra dati di ambito, tempi e costi per valutare le prestazioni del progetto.

### Configurazione dell'Earned Value

1. Crea una [baseline](/it/tracking/baselines/index.md#impostare-una-baseline) per catturare il cronogramma pianificato e i costi.
2. Imposta la **Data stato** nella finestra **Opzioni Valore Acquisito** (accessibile dal menu **Progetto**) o lascia che utilizzi la data corrente per impostazione predefinita.
3. Aggiorna i valori di [% di completamento](/it/tracking/progress/index.md#-di-completamento) delle attività man mano che il lavoro avanza.

### Metriche EVM disponibili

Le seguenti colonne EVM possono essere aggiunte all'elenco delle attività tramite la finestra **Opzioni**:

| Metrica | Descrizione |
|---------|-------------|
| **BCWS** | Budgeted Cost of Work Scheduled (Planned Value) |
| **BCWP** | Budgeted Cost of Work Performed (Earned Value) |
| **ACWP** | Actual Cost of Work Performed |
| **BAC** | Budget at Completion |
| **EAC** | Estimate at Completion |
| **VAC** | Variance at Completion |
| **SV** | Schedule Variance |
| **CV** | Cost Variance |
| **SPI** | Schedule Performance Index |
| **CPI** | Cost Performance Index |
| **TCPI** | To-Complete Performance Index |
| **SV%** | Schedule Variance (percentuale) |
| **CV%** | Cost Variance (percentuale) |

### Metodo valore acquisito

Ogni attività può utilizzare uno dei due metodi per calcolare il BCWP (Earned Value):

- **% completato** (predefinito) — Utilizza la percentuale di completamento dell'attività per calcolare l'Earned Value.
- **% completamento fisico** — Utilizza una percentuale di completamento fisico monitorata separatamente. Utile per la misurazione dell'avanzamento basata sui deliverable.

Imposta il metodo per le singole attività nella scheda **Costo** della finestra **Proprietà del Compito**. Modifica il metodo predefinito per le nuove attività nella finestra **Opzioni Valore Acquisito**.

### Previsione per valore acquisito

I calcoli EVM utilizzano una baseline specifica. Puoi scegliere quale baseline (da `Baseline 0` a `Baseline 10`) viene utilizzata per l'Earned Value nella finestra **Opzioni Valore Acquisito**. L'impostazione predefinita è `Baseline 0`.
