# Chemin critique

Ce sont les tâches que vous ne pouvez pas vous permettre de retarder — tout glissement repousse l'ensemble du projet. Identifiez-les tôt, surveillez-les de près, et vous saurez exactement où concentrer vos efforts pour respecter vos échéances.

## Tâches critiques

Une fois votre plan mis en œuvre, certaines tâches se terminent plus tôt que prévu — et d'autres non. Certaines tâches peuvent prendre plus de temps sans prolonger la durée globale du projet. Ces tâches disposent d'une marge de manœuvre, appelée _marge_.

D'autres tâches ont une marge nulle — tout retard décale la date de fin du projet. Ce sont les _tâches critiques_. Pour maintenir votre projet dans les délais, accordez-leur une attention particulière lors du suivi de l'avancement.

Une tâche est également critique si :
- Elle possède une contrainte **Must start on** ou **Must finish on** [constraint](/fr/building-schedule/constraints/index.md#constraints)
- Elle possède une contrainte **As late as possible** [constraint](/fr/building-schedule/constraints/index.md#constraints) dans un projet planifié à partir de la date de début
- Sa date de fin est égale ou dépasse son [échéance](/fr/building-schedule/task-properties/index.md#deadline)
- Elle a une **marge négative** — un conflit de planification où les contraintes forcent la tâche à commencer avant ce que ses dépendances permettent

Les tâches achevées à 100 % ne sont jamais marquées comme critiques, quelles que soient les autres conditions.

Ingantt détecte automatiquement les tâches critiques. Si l'option **Highlight critical tasks** est activée (via le menu **View**, le menu **Chart** dans la barre de menus, ou la boîte de dialogue **Options**), ces tâches sont affichées en rouge.

Les tâches avec une marge négative affichent également une icône d'avertissement dans la liste des tâches, signalant un conflit de planification. Cela se produit généralement lorsqu'une contrainte **Start no later than** ou **Finish no later than** entre en conflit avec les dépendances de la tâche.

![Critical](/images/building-schedule/tasks/critical.png)

## Options du chemin critique

Dans l'onglet **Other** de la boîte de dialogue **Project Properties**, vous pouvez configurer le mode de calcul du chemin critique :

- **Calculate multiple critical paths** — Lorsque cette option est activée, chaque groupe déconnecté de tâches liées possède son propre chemin critique. Lorsqu'elle est désactivée (par défaut), les tâches sans successeur utilisent la date de fin du projet comme date de fin au plus tard.
- **Critical slack limit** — Par défaut, les tâches avec une marge nulle ou négative sont critiques. Vous pouvez augmenter ce seuil afin que les tâches dont la marge ne dépasse pas le nombre de jours spécifié soient également considérées comme critiques.
