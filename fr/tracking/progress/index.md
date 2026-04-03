# Suivi de l'avancement

Une fois les travaux commencés, mettez à jour le **% Complete** de chaque tâche pour comparer l'avancement réel au plan prévu. Utilisez **Update Project** pour mettre à jour l'avancement en masse. Au fur et à mesure que l'avancement est enregistré, Ingantt calcule automatiquement les [valeurs réelles](/fr/tracking/actuals/index.md) — valeurs réelles et restantes pour la durée, le travail, le coût et les dates.

## % Complete

Lorsque votre projet est en cours, vous devez suivre son avancement. Si vous maintenez le **% Complete** à jour pour chaque tâche, vous pouvez visualiser le **% Complete** global du projet dans sa tâche récapitulative racine.

Utilisez le champ **% Complete** dans la boîte de dialogue **Task Properties** pour définir le pourcentage d'achèvement d'une tâche particulière. Les tâches achevées à 100 % affichent une icône de coche verte dans la liste des tâches.

Lorsque vous mettez à jour le % Complete :

- Le définir au-dessus de 0 % entraîne l'affectation de la date de début planifiée de la tâche comme **Actual Start**.
- Le définir à 100 % entraîne l'affectation de la date de fin planifiée de la tâche comme **Actual Finish**.
- **Actual Duration** et **Remaining Duration** sont calculées automatiquement en fonction du pourcentage d'achèvement.
- Si l'option **Updating task status updates resource status** est activée dans les paramètres du projet (option par défaut), **Actual Work** et **Remaining Work** sont également mis à jour proportionnellement.

Le **% Complete** d'une tâche récapitulative est calculé comme une moyenne pondérée par la durée de toutes ses sous-tâches non récapitulatives descendantes.

> Vous pouvez également suivre l'avancement à l'aide de la commande [Update Project](#update-project) pour définir le % Complete de plusieurs tâches à la fois en fonction d'une date de référence.

## Update Project

La commande **Update Project** permet des opérations de suivi de l'avancement en masse. Elle est accessible depuis le menu **Project**.

### Marquer le travail comme achevé

Marquez les tâches comme achevées jusqu'à une date spécifiée :

- **Proportionnel (0 %–100 %)** — Calcule le pourcentage d'achèvement en fonction de la part de la durée ouvrée de chaque tâche antérieure à la date de référence.
- **Tout ou rien (0 % ou 100 %)** — Définit les tâches à 0 % ou 100 % selon qu'elles se terminent ou non avant la date de référence.

### Replanifier le travail non achevé

Reporte le travail non achevé pour qu'il commence après une date spécifiée :

- Les tâches non encore commencées reçoivent une contrainte **Start No Earlier Than**.
- Les tâches en cours sont fractionnées si l'option **Split in-progress tasks** est activée dans les options de planification du projet.
- Les tâches achevées ne sont pas modifiées.
