# Tâches

Tout planning commence par des tâches. Définissez ce qui doit être fait, combien de temps cela prendra et quand cela doit être terminé. Une fois vos tâches en place, la ligne temporelle de votre projet prend forme dans le diagramme de Gantt.

## Tâches récapitulatives

Les tâches récapitulatives vous aident à organiser vos tâches en les regroupant. Pour créer une tâche récapitulative, sélectionnez les tâches que vous souhaitez regrouper, puis cliquez sur le bouton **Increase Indent** dans la barre d'outils pour les indenter. Pour reconvertir une tâche récapitulative en tâche ordinaire, sélectionnez toutes ses sous-tâches et cliquez sur le bouton **Decrease Indent** pour supprimer leur indentation.

Puisque les tâches récapitulatives regroupent d'autres tâches, leurs propriétés sont dérivées de leurs sous-tâches plutôt que définies directement. Leur durée représente la durée globale de toutes les tâches du groupe : la date de fin d'une tâche récapitulative correspond à la date de fin la plus tardive parmi ses sous-tâches.

Une tâche récapitulative affiche également le pourcentage d'achèvement global, le coût total et le travail total de ses sous-tâches.

Dans le diagramme de Gantt, les tâches récapitulatives sont représentées par des barres noires. Dans la liste des tâches, vous pouvez **développer** ou **réduire** les tâches récapitulatives pour afficher ou masquer leurs sous-tâches.

![Summary](/images/building-schedule/tasks/summary.png)

## Tâche récapitulative racine

Dans Ingantt, il existe toujours une tâche récapitulative pour l'ensemble de votre projet. Cette tâche porte le numéro 0 et se situe au-dessus de toutes vos tâches.

La tâche récapitulative racine peut ne pas être visible par défaut. Pour modifier ce comportement, cochez **Show root summary task** dans le menu **View** ou dans la boîte de dialogue **Options**.

Comme toute autre tâche récapitulative, la tâche récapitulative racine affiche les données globales de ses sous-tâches. Puisque toutes les tâches de votre planning sont ses sous-tâches, elle affiche les données globales de l'ensemble de votre projet.

Le nom de la tâche récapitulative racine est identique au nom du projet.

![Root Summary Task](/images/building-schedule/tasks/root_summary.png)

## Tâches planifiées manuellement

Par défaut, toutes les tâches dans Ingantt sont **planifiées automatiquement** — leurs dates de début et de fin sont calculées par l'algorithme de planification en fonction des dépendances, des contraintes et des calendriers.

Vous pouvez basculer une tâche en mode **Manually scheduled** à l'aide de la case à cocher dans la boîte de dialogue **Task Properties**. Lorsqu'une tâche est planifiée manuellement :

- Elle **n'est pas affectée par l'algorithme de planification** — ses dates sont définies par vous
- Vous pouvez saisir les dates de **Start** et **Finish** à l'aide des champs de date ou du sélecteur de date
- Vous pouvez saisir des **valeurs textuelles** (telles que « À déterminer », « début mars » ou « 2-3 semaines ») au lieu de dates réelles lorsque vous n'êtes pas encore sûr du calendrier
- Une icône d'épingle est affichée pour les tâches planifiées manuellement dans la liste des tâches

> Utilisez les tâches planifiées manuellement comme espaces réservés lorsque le calendrier exact est inconnu, ou lorsque les dates sont imposées par des facteurs externes.

## Tâches récurrentes

Les tâches récurrentes représentent des activités qui se répètent selon un calendrier régulier, comme les réunions quotidiennes, les revues hebdomadaires ou les rapports mensuels. Vous pouvez créer des tâches récurrentes via le menu **Insert** en choisissant **Add recurring task**.

Lors de la création d'une tâche récurrente, vous spécifiez :

- **Occurrence duration** — La durée de chaque occurrence individuelle
- **Recurrence pattern** — Un schéma quotidien, hebdomadaire, mensuel ou annuel avec une date de début et une condition de fin (pas de fin, fin à une date donnée, ou fin après N occurrences)
- **Working days only** — Limite les occurrences aux jours ouvrés

Les tâches récurrentes apparaissent sous forme de tâche récapitulative contenant les occurrences individuelles. Chaque occurrence peut être complétée indépendamment. La suppression d'une tâche récurrente vous invite à choisir entre supprimer la série entière ou uniquement l'occurrence sélectionnée.

## Tâches fractionnées

Une tâche peut être fractionnée en parties non contiguës, représentant des interruptions de travail. Pour fractionner une tâche, sélectionnez-la et choisissez **Split task** dans la barre d'outils ou le menu contextuel du clic droit. La boîte de dialogue **Split Task** propose deux modes :

- **By duration** — Spécifiez un décalage à partir du début de la tâche et une durée de fractionnement
- **By dates** — Spécifiez les dates d'arrêt et de reprise du fractionnement

Les tâches fractionnées s'affichent sous forme de barres séparées reliées par des connecteurs en pointillés dans le diagramme de Gantt. Chaque partie fractionnée possède sa propre poignée de redimensionnement, et faire glisser une partie jusqu'à ce qu'elle rejoigne une partie adjacente fusionne les deux. Pour supprimer un fractionnement, sélectionnez la tâche et choisissez **Remove split** dans la barre d'outils.

## Tâches inactives

Une tâche peut être marquée comme **inactive** en décochant la case **Active** dans l'onglet **General** de la boîte de dialogue **Task Properties**, ou en utilisant l'option **Inactivate task** dans le sous-menu **Edit > Display** ou le menu contextuel du clic droit.

Les tâches inactives sont :

- Exclues de la planification — elles n'affectent ni le chemin critique ni les autres tâches
- Exclues des cumuls des tâches récapitulatives pour la durée, le travail, le coût et le % d'achèvement
- Exclues de la détection de surallocation des ressources et du nivellement automatique
- Exclues des calculs de Valeur acquise

Les tâches inactives restent visibles dans la liste des tâches et le diagramme de Gantt, mais apparaissent avec une opacité réduite et un texte barré. Leurs dates sont conservées à titre de référence.

L'inactivation d'une tâche récapitulative se propage à toutes ses sous-tâches. La réactivation d'une sous-tâche réactive automatiquement sa tâche récapitulative parente si nécessaire. Les tâches ayant un avancement réel (% d'achèvement > 0) ne peuvent pas être inactivées.

> Utilisez les tâches inactives pour conserver des scénarios hypothétiques dans votre planning sans affecter le plan actif.
