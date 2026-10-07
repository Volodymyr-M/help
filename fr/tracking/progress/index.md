# Suivi de l'avancement

Une fois les travaux commencés, mettez à jour le **% complété** de chaque tâche pour comparer l'avancement réel au plan prévu. Utilisez **Mettre à jour le projet** pour mettre à jour l'avancement en masse. Au fur et à mesure que l'avancement est enregistré, Ingantt calcule automatiquement les [valeurs réelles](/fr/tracking/actuals/index.md) — valeurs réelles et restantes pour la durée, le travail, le coût et les dates.

## % Complete

Lorsque votre projet est en cours, vous devez suivre son avancement. Si vous maintenez le **% complété** à jour pour chaque tâche, vous pouvez visualiser le **% complété** global du projet dans sa tâche récapitulative racine.

Utilisez le champ **% complété** dans la boîte de dialogue **Propriétés de la tâche** pour définir le pourcentage d'achèvement d'une tâche particulière. Les tâches achevées à 100 % affichent une icône de coche verte dans la liste des tâches.

Lorsque vous mettez à jour le % Complete :

- Le définir au-dessus de 0 % entraîne l'affectation de la date de début planifiée de la tâche comme **Début réel**.
- Le définir à 100 % entraîne l'affectation de la date de fin planifiée de la tâche comme **Fin réelle**.
- **Durée réelle** et **Durée restante** sont calculées automatiquement en fonction du pourcentage d'achèvement.
- Si l'option **La mise à jour de l'état de la tâche met à jour l'état de la ressource** est activée dans les paramètres du projet (option par défaut), **Travail réel** et **Travail restant** sont également mis à jour proportionnellement.

Le **% complété** d'une tâche récapitulative est calculé comme une moyenne pondérée par la durée de toutes ses sous-tâches non récapitulatives descendantes.

> Vous pouvez également suivre l'avancement à l'aide de la commande [Mettre à jour le projet](#mettre-à-jour-le-projet) pour définir le % Complete de plusieurs tâches à la fois jusqu'à une date limite indiquée.

## Mettre à jour le projet

La commande **Mettre à jour le projet** permet des opérations de suivi de l'avancement en masse. Elle est accessible depuis le menu **Projet**.

### Marquer le travail comme achevé

Marquez les tâches comme achevées jusqu'à une date spécifiée :

- **Proportionnel (0% - 100%)** — Calcule le pourcentage d'achèvement en fonction de la part de la durée ouvrée de chaque tâche antérieure à la date limite indiquée.
- **Tout ou rien (0% ou 100%)** — Définit les tâches à 0 % ou 100 % selon qu'elles se terminent ou non avant la date limite indiquée.

### Replanifier le travail non achevé

Reporte le travail non achevé pour qu'il commence après une date spécifiée :

- Les tâches non encore commencées reçoivent une contrainte **Début pas avant**.
- Les tâches en cours sont fractionnées si l'option **Fractionner les tâches en cours** est activée dans les options de planification du projet.
- Les tâches achevées ne sont pas modifiées.
