# Valeurs réelles

Au fur et à mesure de l'avancement des travaux et de la mise à jour du [% Complete](/fr/tracking/progress/index.md#-complete), Ingantt calcule automatiquement les valeurs réelles et restantes pour la durée, le travail, le coût et les dates. Ces champs vous permettent de voir précisément ce qui a été dépensé, ce qui reste et comment le projet se situe par rapport au plan.

Les colonnes réelles et restantes les plus courantes sont **Coût réel** / **Coût restant**, **Travail réel** / **Travail restant**, et **Durée réelle** / **Durée restante**. En consultant ces valeurs sur la [tâche récapitulative racine](/fr/building-schedule/tasks/index.md#tâche-récapitulative-racine), vous pouvez visualiser d'un coup d'œil les totaux de l'ensemble du projet — combien a été dépensé, quel effort a été fourni et combien il reste à faire. Assurez-vous que la tâche récapitulative racine est visible : cochez **Afficher la tâche récapitulative racine** dans le menu **Vue** ou dans la boîte de dialogue **Options**.

## Afficher les colonnes réelles et restantes

Les colonnes réelles et restantes ne sont pas visibles par défaut. Pour les ajouter à la liste des tâches, ouvrez la boîte de dialogue **Options** (onglet **Colonnes de tâches**) et activez les colonnes souhaitées. Vous pouvez également faire un clic droit sur un en-tête de colonne dans la grille des tâches pour accéder rapidement aux paramètres des colonnes.

### Durée

- **Durée réelle** — Le temps de travail consacré à une tâche jusqu'à présent. Calculé comme la durée de la tâche multipliée par son % Complete.
- **Durée restante** — Le temps de travail encore nécessaire pour terminer la tâche : Durée − Durée réelle.

Par exemple, une tâche de 10 jours achevée à 40 % a une Durée réelle de 4 jours et une Durée restante de 6 jours.

### Travail

- **Travail réel** — L'effort total (en heures) que les ressources ont consacré à une tâche. Lorsque l'option **La mise à jour de l'état de la tâche met à jour l'état de la ressource** est activée dans les paramètres du projet (option par défaut), le Travail réel est mis à jour proportionnellement lorsque vous modifiez le % Complete.
- **Travail restant** — L'effort encore nécessaire pour terminer la tâche : Travail − Travail réel.

### Coût

- **Coût réel** — Les coûts engagés jusqu'à présent : la somme des coûts fixes comptabilisés et des coûts de ressources comptabilisés. Le mode de comptabilisation des coûts dépend du paramètre **Allocation des coûts** de chaque ressource :
  - **Début** — La totalité du coût est comptabilisée lorsque le Début réel est défini.
  - **Proportion** — Le coût est comptabilisé proportionnellement en fonction de l'avancement réel du travail.
  - **Fin** — Le coût n'est comptabilisé que lorsque la tâche atteint 100 % d'achèvement.
- **Coût restant** — Le budget encore nécessaire pour terminer la tâche : Coût total − Coût réel.

### Dates

- **Début réel** — La date à laquelle le travail a réellement commencé. Automatiquement définie à la date de début planifiée de la tâche lorsque le % Complete dépasse 0 %.
- **Fin réelle** — La date à laquelle le travail a réellement été achevé. Automatiquement définie à la date de fin planifiée de la tâche lorsque le % Complete atteint 100 %.

### Heures supplémentaires

- **Travail réel en heures sup** — Heures supplémentaires déjà effectuées sur la tâche.
- **Travail restant heures sup** — Heures supplémentaires encore prévues.
- **Coût réel des heures sup** — Coûts des heures supplémentaires déjà engagés.
- **Coût restant heures sup** — Coûts des heures supplémentaires encore prévus.

## Comment les valeurs réelles sont calculées

Tous les champs réels et restants maintiennent la relation :

> **Total = Réel + Restant**

Lorsque vous modifiez une valeur, Ingantt met à jour les autres pour maintenir la cohérence. Le flux de travail le plus courant consiste à mettre à jour le **% complété**, ce qui se répercute automatiquement sur tous les champs réels et restants :

1. **Durée réelle** et **Durée restante** sont recalculées à partir du nouveau pourcentage.
2. **Travail réel** et **Travail restant** sont mis à jour (si le paramètre du projet est activé).
3. **Début réel** et **Fin réelle** sont définis en fonction de l'avancement.
4. **Coût réel** et **Coût restant** sont recalculés selon la méthode de comptabilisation.

Pour les tâches récapitulatives, **Travail réel**, **Travail restant**, **Coût réel** et **Coût restant** sont agrégés (sommés) à partir de toutes les tâches enfants. **Début réel** correspond au début réel le plus précoce parmi les tâches enfants, et **Fin réelle** à la fin réelle la plus tardive.

## Colonnes de tâches

Au-delà des valeurs réelles et restantes, Ingantt prend en charge un large éventail de colonnes de tâches — données de planification, informations sur le chemin critique, coût, travail, métriques de valeur acquise, références de base, champs personnalisés et codes hiérarchiques. Toutes les colonnes peuvent être activées, désactivées et réorganisées via la boîte de dialogue **Options** (onglet **Colonnes de tâches**). Vous pouvez également faire un clic droit sur un en-tête de colonne dans la grille des tâches pour accéder rapidement aux paramètres des colonnes.
