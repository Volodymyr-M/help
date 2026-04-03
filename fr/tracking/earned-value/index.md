# Valeur acquise

La gestion de la valeur acquise (Earned Value Management, EVM) combine des mesures de périmètre, de délais et de coûts pour évaluer si votre projet respecte le calendrier et le budget. Définissez une date d'état et une référence de base, et Ingantt calcule les métriques EVM conformes aux standards de l'industrie.

## Date d'état

La **Status Date** définit la date utilisée pour le suivi de l'avancement et les calculs de valeur acquise. Lorsqu'elle est définie, une ligne verticale verte est affichée sur le diagramme de Gantt à cette date.

Lorsque la date d'état n'est pas définie, la date du jour est utilisée pour les calculs. Vous pouvez définir la date d'état dans la boîte de dialogue **Earned Value Options**, accessible depuis le menu **Project**.

## Gestion de la valeur acquise

Ingantt prend en charge la gestion de la valeur acquise (Earned Value Management) — une technique de gestion de projet qui intègre les données de périmètre, de délais et de coûts pour évaluer la performance du projet.

### Configurer la valeur acquise

1. Créez une [référence de base](/fr/tracking/baselines/index.md#setting-a-baseline) pour capturer le planning et les coûts prévus.
2. Définissez la **Status Date** dans la boîte de dialogue **Earned Value Options** (accessible depuis le menu **Project**) ou laissez-la à la date du jour par défaut.
3. Mettez à jour les valeurs de [% Complete](/fr/tracking/progress/index.md#-complete) des tâches au fur et à mesure de l'avancement des travaux.

### Métriques EVM disponibles

Les colonnes EVM suivantes peuvent être ajoutées à la liste des tâches via la boîte de dialogue **Options** :

| Métrique | Description |
|----------|-------------|
| **BCWS** | Coût budgété du travail prévu (Valeur planifiée) |
| **BCWP** | Coût budgété du travail effectué (Valeur acquise) |
| **ACWP** | Coût réel du travail effectué |
| **BAC** | Budget à l'achèvement |
| **EAC** | Estimation à l'achèvement |
| **VAC** | Écart à l'achèvement |
| **SV** | Écart de délais |
| **CV** | Écart de coûts |
| **SPI** | Indice de performance des délais |
| **CPI** | Indice de performance des coûts |
| **TCPI** | Indice de performance pour achèvement |
| **SV%** | Pourcentage d'écart de délais |
| **CV%** | Pourcentage d'écart de coûts |

### Méthode de valeur acquise

Chaque tâche peut utiliser l'une des deux méthodes pour calculer le BCWP (valeur acquise) :

- **% Complete** (par défaut) — Utilise le pourcentage d'achèvement de la tâche pour calculer la valeur acquise.
- **Physical % Complete** — Utilise un pourcentage d'achèvement physique suivi séparément. Utile pour une mesure de l'avancement basée sur les livrables.

Définissez la méthode pour chaque tâche dans l'onglet **Cost and EV** de la boîte de dialogue **Task Properties**. Modifiez la méthode par défaut pour les nouvelles tâches dans la boîte de dialogue **Earned Value Options**.

### Référence de base pour la valeur acquise

Les calculs EVM utilisent une référence de base spécifique. Vous pouvez choisir quelle référence (`Baseline 0` à `Baseline 10`) est utilisée pour la valeur acquise dans la boîte de dialogue **Earned Value Options**. La référence par défaut est `Baseline 0`.
