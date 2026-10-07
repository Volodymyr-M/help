# Premiers pas

Commencez ici pour créer votre premier planning de projet. En quelques minutes, vous aurez des tâches sur une ligne temporelle, reliées entre elles, avec des ressources affectées — suffisamment pour savoir quand votre projet devrait se terminer.

> Sur les appareils mobiles, utilisez des appuis au lieu de clics, des doubles appuis au lieu de doubles clics, et un appui prolongé au lieu du clic droit.

## Créer un planning de base

Supposons que vous ayez un petit projet de rénovation avec deux tâches, l'une à la suite de l'autre.

Après avoir cliqué sur **Créer nouveau**, vous accédez à un écran divisé avec la liste des tâches à gauche et le diagramme de Gantt à droite. Ajoutez vos tâches l'une après l'autre en cliquant sur le gros bouton **+** en bas à droite. Dans la boîte de dialogue **Ajouter une tâche**, indiquez le **Nom** et la **Durée** estimée de chaque tâche.

![Ajouter une tâche](/images/getting-started/add_task.png)

Sélectionnez les deux tâches dans la liste à gauche, puis cliquez sur le bouton **Lier les tâches** dans la barre d'outils. Cela relie les tâches et met à jour le diagramme de Gantt.

- Pour sélectionner plusieurs tâches sur Android et iOS, maintenez votre doigt un peu plus longtemps en appuyant sur chaque tâche dans la liste ou le diagramme de Gantt.
- Sur les autres plateformes, cliquez sur les tâches dans la liste ou le diagramme de Gantt tout en maintenant `Ctrl` ou `Shift` sur le clavier.

![Lier](/images/getting-started/link.png)

Maintenant que les tâches sont liées, essayez de modifier la durée de la première tâche. Double-cliquez dessus dans la liste ou le diagramme de Gantt et modifiez le champ **Durée** dans la boîte de dialogue **Propriétés de la tâche**. Vous verrez comment ce changement affecte le planning en décalant la seconde tâche.

![Gantt](/images/getting-started/gantt.png)

## Définir le nom et la date de début du projet

Votre projet peut commencer un jour différent de la date par défaut utilisée par Ingantt.

Ouvrez **Propriétés du projet** via le tiroir de navigation ou, sur le web et Windows, en cliquant sur le nom du projet dans l'en-tête.

Définissez la nouvelle date de début du projet dans le champ **Date de début du projet** et modifiez le **Nom** du projet par la même occasion.

![Nom du projet](/images/getting-started/project_name.png)

> Avec la simplicité du planning de base, vous pouvez déjà savoir quand le projet devrait se terminer en regardant le diagramme de Gantt.

## Ajouter et affecter des ressources

Supposons qu'une personne différente se charge de chaque tâche de votre projet.

Ouvrez le tiroir de navigation et passez à la vue **Ressources**.

![Nav](/images/getting-started/nav.png)

Cliquez sur le gros bouton **+** pour ouvrir la boîte de dialogue **Ajouter une ressource**, saisissez un **Nom** pour la ressource, et enregistrez. Répétez ces étapes pour ajouter une autre ressource de travail.

![Ajouter une ressource](/images/getting-started/add_resource.png)

![Ressources](/images/getting-started/resources.png)

Via le tiroir de navigation, revenez à la vue **Tâches**. Double-cliquez sur votre première tâche dans la liste ou le diagramme de Gantt pour ouvrir la boîte de dialogue **Propriétés de la tâche**.

Passez à l'onglet **Ressources**, cochez la première ressource pour affecter cette personne à la tâche, et enregistrez.

![Affectations](/images/getting-started/assignments.png)

Répétez les mêmes étapes pour votre seconde tâche et la seconde ressource.

![Gantt des ressources](/images/getting-started/resources_gantt.png)

## Configurer les congés

Les personnes peuvent avoir différents événements au cours de votre projet qui affectent son déroulement.

Supposons que la ressource effectuant la première tâche de votre projet ait besoin d'un jour de repos pendant cette tâche.

Pour configurer cela, utilisez le tiroir de navigation pour accéder à la vue **Ressources**.

Double-cliquez sur la ressource pour afficher **Propriétés de la ressource**. Allez dans l'onglet **Calendrier** et cliquez sur le bouton **Ajouter une exception**. Choisissez l'un des jours pendant votre projet, laissez la liste des horaires de travail vide, et enregistrez.

![Jour de repos](/images/getting-started/day_off.png)

Via le tiroir de navigation, retournez à **Tâches** et observez comment votre planning a changé. La seconde tâche s'est décalée en raison de sa dépendance à la première.

![Congé](/images/getting-started/vacation.png)

> Vous pouvez configurer non seulement les congés, mais aussi d'autres modifications de l'emploi du temps d'une personne. Par exemple, en ajoutant des horaires de travail à l'exception, vous pouvez spécifier que la ressource ne travaille que pendant certaines heures ce jour-là.

## Configurer les jours fériés

Imaginez qu'un jour férié tombe pendant votre projet, un jour où aucun travail n'est effectué.

Les congés sont configurés via le calendrier de chaque ressource. Les jours qui concernent tout le monde, en revanche, sont configurés dans le calendrier du projet. Le calendrier par défaut du projet s'appelle **Standard** et indique déjà que le travail n'est pas effectué les week-ends.

Pour configurer les jours fériés, utilisez le tiroir de navigation pour accéder à la vue **Calendriers**. Double-cliquez sur **Standard** pour afficher **Propriétés du calendrier**. Cliquez sur le bouton **Ajouter une exception**. Choisissez l'un des jours pendant votre projet, laissez la liste des horaires de travail vide, et enregistrez.

![Jour férié](/images/getting-started/holiday.png)

Via le tiroir de navigation, retournez à la vue **Tâches** et observez comment votre projet a changé. Les tâches sont décalées, et le jour férié est affiché de manière similaire aux week-ends dans le diagramme de Gantt.

![Final](/images/getting-started/final.png)

> En utilisant la même approche, vous pouvez configurer non seulement les jours fériés, mais aussi d'autres modifications de l'emploi du temps de toute l'équipe. Par exemple, en ajoutant des horaires de travail à l'exception, vous pouvez spécifier que tout le monde ne travaille que pendant certaines heures ce jour-là.
>
> Vous pouvez également consulter les onglets représentant chaque jour de la semaine dans **Propriétés du calendrier**. Si toute votre équipe part plus tôt le vendredi ou travaille le samedi, vous pouvez le configurer dans les onglets correspondants.
