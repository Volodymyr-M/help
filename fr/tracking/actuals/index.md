# Valeurs réelles

Au fur et à mesure de l'avancement des travaux et de la mise à jour du [% Complete](/fr/tracking/progress/index.md#-complete), Ingantt calcule automatiquement les valeurs réelles et restantes pour la durée, le travail, le coût et les dates. Ces champs vous permettent de voir précisément ce qui a été dépensé, ce qui reste et comment le projet se situe par rapport au plan.

Les colonnes réelles et restantes les plus courantes sont **Actual Cost** / **Remaining Cost**, **Actual Work** / **Remaining Work**, et **Actual Duration** / **Remaining Duration**. En consultant ces valeurs sur la [tâche récapitulative racine](/fr/building-schedule/tasks/index.md#root-summary-task), vous pouvez visualiser d'un coup d'œil les totaux de l'ensemble du projet — combien a été dépensé, quel effort a été fourni et combien il reste à faire. Assurez-vous que la tâche récapitulative racine est visible : cochez **Show root summary task** dans le menu **View** ou dans la boîte de dialogue **Options**.

## Afficher les colonnes réelles et restantes

Les colonnes réelles et restantes ne sont pas visibles par défaut. Pour les ajouter à la liste des tâches, ouvrez la boîte de dialogue **Options** (onglet **Task Columns**) et activez les colonnes souhaitées. Vous pouvez également faire un clic droit sur un en-tête de colonne dans la grille des tâches pour accéder rapidement aux paramètres des colonnes.

### Durée

- **Actual Duration** — Le temps de travail consacré à une tâche jusqu'à présent. Calculé comme la durée de la tâche multipliée par son % Complete.
- **Remaining Duration** — Le temps de travail encore nécessaire pour terminer la tâche : Durée − Actual Duration.

Par exemple, une tâche de 10 jours achevée à 40 % a une Actual Duration de 4 jours et une Remaining Duration de 6 jours.

### Travail

- **Actual Work** — L'effort total (en heures) que les ressources ont consacré à une tâche. Lorsque l'option **Updating task status updates resource status** est activée dans les paramètres du projet (option par défaut), l'Actual Work est mis à jour proportionnellement lorsque vous modifiez le % Complete.
- **Remaining Work** — L'effort encore nécessaire pour terminer la tâche : Work − Actual Work.

### Coût

- **Actual Cost** — Les coûts engagés jusqu'à présent : la somme des coûts fixes comptabilisés et des coûts de ressources comptabilisés. Le mode de comptabilisation des coûts dépend du paramètre **Cost Accrual** de chaque ressource :
  - **Start** — La totalité du coût est comptabilisée lorsque l'Actual Start est défini.
  - **Prorated** — Le coût est comptabilisé proportionnellement en fonction de l'avancement réel du travail.
  - **End** — Le coût n'est comptabilisé que lorsque la tâche atteint 100 % d'achèvement.
- **Remaining Cost** — Le budget encore nécessaire pour terminer la tâche : Total Cost − Actual Cost.

### Dates

- **Actual Start** — La date à laquelle le travail a réellement commencé. Automatiquement définie à la date de début planifiée de la tâche lorsque le % Complete dépasse 0 %.
- **Actual Finish** — La date à laquelle le travail a réellement été achevé. Automatiquement définie à la date de fin planifiée de la tâche lorsque le % Complete atteint 100 %.

### Heures supplémentaires

- **Actual Overtime Work** — Heures supplémentaires déjà effectuées sur la tâche.
- **Remaining Overtime Work** — Heures supplémentaires encore prévues.
- **Actual Overtime Cost** — Coûts des heures supplémentaires déjà engagés.
- **Remaining Overtime Cost** — Coûts des heures supplémentaires encore prévus.

## Comment les valeurs réelles sont calculées

Tous les champs réels et restants maintiennent la relation :

> **Total = Réel + Restant**

Lorsque vous modifiez une valeur, Ingantt met à jour les autres pour maintenir la cohérence. Le flux de travail le plus courant consiste à mettre à jour le **% Complete**, ce qui se répercute automatiquement sur tous les champs réels et restants :

1. **Actual Duration** et **Remaining Duration** sont recalculées à partir du nouveau pourcentage.
2. **Actual Work** et **Remaining Work** sont mis à jour (si le paramètre du projet est activé).
3. **Actual Start** et **Actual Finish** sont définis en fonction de l'avancement.
4. **Actual Cost** et **Remaining Cost** sont recalculés selon la méthode de comptabilisation.

Pour les tâches récapitulatives, **Actual Work**, **Remaining Work**, **Actual Cost** et **Remaining Cost** sont agrégés (sommés) à partir de toutes les tâches enfants. **Actual Start** correspond au début réel le plus précoce parmi les tâches enfants, et **Actual Finish** à la fin réelle la plus tardive.

## Colonnes de tâches

Au-delà des valeurs réelles et restantes, Ingantt prend en charge un large éventail de colonnes de tâches — données de planification, informations sur le chemin critique, coût, travail, métriques de valeur acquise, références de base, champs personnalisés et codes hiérarchiques. Toutes les colonnes peuvent être activées, désactivées et réorganisées via la boîte de dialogue **Options** (onglet **Task Columns**). Vous pouvez également faire un clic droit sur un en-tête de colonne dans la grille des tâches pour accéder rapidement aux paramètres des colonnes.
