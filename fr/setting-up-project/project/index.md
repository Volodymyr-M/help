# Propriétés du projet

Configurez la date de début de votre projet, les horaires de travail et les règles de planification. Ces paramètres déterminent la manière dont chaque tâche de votre projet est calculée et affichée.

## Nom du projet

Définissez le nom de votre projet dans le champ **Name** de l'onglet **General** de la boîte de dialogue **Project Properties**. Ce nom est également utilisé par la [tâche récapitulative racine](/fr/building-schedule/tasks/index.md#root-summary-task) de votre projet.

Sur le web et Windows, cliquer sur le nom du projet dans l'en-tête ouvre également la boîte de dialogue **Project Properties**.

## Date de début et sens de planification

Par défaut, votre projet est planifié à partir de la date de début, que vous pouvez définir dans le champ **Project Start Date** de la boîte de dialogue **Project Properties**.

Pour planifier votre projet à partir de la date de fin, basculez vers **Plan from Finish date** dans la boîte de dialogue **Project Properties** et définissez la **Project Finish Date**.

L'onglet **General** de la boîte de dialogue **Project Properties** affiche à la fois la date de début et la date de fin. Lors de la planification depuis le début, la date de début est modifiable et la date de fin affiche la valeur calculée. Lors de la planification depuis la fin, la date de fin est modifiable et la date de début affiche la valeur calculée.

Points importants :

- Pour les projets planifiés depuis la date de début, la [contrainte](/fr/building-schedule/constraints/index.md#constraints) par défaut des tâches nouvellement créées est **As soon as possible**.
- Pour les projets planifiés depuis la date de fin, la contrainte par défaut des tâches nouvellement créées est **As late as possible**.

Lors du basculement entre la planification depuis le début et depuis la fin, les contraintes des tâches existantes ne sont pas modifiées, à l'exception des [tâches récapitulatives](/fr/building-schedule/tasks/index.md#summary-tasks), y compris la [tâche récapitulative racine](/fr/building-schedule/tasks/index.md#root-summary-task).

Pour les tâches récapitulatives :

- La contrainte **As soon as possible** est remplacée par **As late as possible** lors du passage de la planification depuis le début à la planification depuis la fin.
- La contrainte **As late as possible** est remplacée par **As soon as possible** lors du passage de la planification depuis la fin à la planification depuis le début.

## Premier jour de la semaine

Selon votre pays, la semaine peut commencer le dimanche ou le lundi. Vous pouvez modifier le champ **First Day of Week** dans l'onglet **Regional** de la boîte de dialogue **Project Properties** pour changer le paramètre par défaut de votre projet.

La modification de cette propriété met à jour l'interface utilisateur, y compris le diagramme de Gantt à certains niveaux de zoom, mais n'affecte pas la planification. Pour ajuster le planning en conséquence, mettez à jour vos [calendriers](/fr/setting-up-project/calendars/index.md).

## Heures par jour, jours par semaine, jours par mois

Dans Ingantt, vous pouvez spécifier la [durée](/fr/building-schedule/task-properties/index.md#duration), le [travail](/fr/building-schedule/task-properties/index.md#work) ou le [décalage](/fr/building-schedule/dependencies/index.md#lag-and-lead-time) en heures, jours, semaines et mois.

Par exemple, définir la durée d'une tâche à 2 jours signifie 16 heures avec les paramètres par défaut.

Par défaut :

- 1 jour équivaut à 8 heures.
- 1 semaine équivaut à 5 jours (40 heures).
- 1 mois équivaut à 20 jours (160 heures).

Vous pouvez modifier ces paramètres par défaut dans l'onglet **Duration** de la boîte de dialogue **Project Properties**.

> La plupart des projets devraient utiliser les valeurs par défaut. Ne modifiez ces paramètres que si votre projet nécessite des conversions différentes.

## Format d'affichage de la durée et du travail

Par défaut, les durées sont affichées en jours et les valeurs de travail en heures. Vous pouvez modifier le format d'affichage de ces deux grandeurs dans l'onglet **Time** de la boîte de dialogue **Project Properties**. Les unités disponibles sont les minutes, les heures, les jours, les semaines et les mois.

Lorsque vous changez l'un ou l'autre format, toutes les valeurs existantes sont mises à jour pour s'afficher dans la nouvelle unité.

## Heure de début et de fin par défaut

L'heure de début par défaut (8 h 00) et l'heure de fin par défaut (17 h 00) définissent quand le travail commence et se termine chaque jour. Vous pouvez les modifier dans l'onglet **Time** de la boîte de dialogue **Project Properties**.

## Options de planification

L'onglet **Scheduling** de la boîte de dialogue **Project Properties** contient des options qui contrôlent la planification des tâches :

- **Honor constraint dates** — Lorsque cette option est activée, les contraintes semi-flexibles (comme Start No Later Than) ont la priorité sur les dépendances, pouvant créer une marge négative. Lorsqu'elle est désactivée (par défaut), les dépendances ont toujours la priorité.
- **Split in-progress tasks** — Lorsque cette option est activée (par défaut), le planificateur peut automatiquement fractionner les tâches dont l'avancement est hors séquence.
- **Move completed/remaining parts** — Quatre options qui contrôlent la manière dont les parties terminées et restantes du travail sont repositionnées par rapport à la date d'état. Elles permettent de maintenir votre planning à jour en déplaçant le travail terminé avant la date d'état ou en repoussant le travail restant après celle-ci.
