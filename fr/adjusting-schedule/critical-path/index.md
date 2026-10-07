# Chemin critique

Ce sont les tâches que vous ne pouvez pas vous permettre de retarder — tout glissement repousse l'ensemble du projet. Identifiez-les tôt, surveillez-les de près, et vous saurez exactement où concentrer vos efforts pour respecter vos échéances.

## Tâches critiques

Une fois votre plan mis en œuvre, certaines tâches se terminent plus tôt que prévu — et d'autres non. Certaines tâches peuvent prendre plus de temps sans prolonger la durée globale du projet. Ces tâches disposent d'une marge de manœuvre, appelée _marge_.

D'autres tâches ont une marge nulle — tout retard décale la date de fin du projet. Ce sont les _tâches critiques_. Pour maintenir votre projet dans les délais, accordez-leur une attention particulière lors du suivi de l'avancement.

Une tâche est également critique si :
- Elle possède une [contrainte](/fr/building-schedule/constraints/index.md#contraintes) **Doit commencer le** ou **Doit finir le**
- Elle possède une [contrainte](/fr/building-schedule/constraints/index.md#contraintes) **Le plus tard possible** dans un projet planifié à partir de la date de début
- Sa date de fin atteint ou dépasse son [échéance](/fr/building-schedule/task-properties/index.md#échéance)
- Elle a une **marge négative** — un conflit de planification où les contraintes forcent la tâche à commencer avant ce que ses dépendances permettent

Les tâches achevées à 100 % ne sont jamais marquées comme critiques, quelles que soient les autres conditions.

Ingantt détecte automatiquement les tâches critiques. Si l'option **Mettre en évidence les tâches critiques** est activée (via le menu **Vue**, le menu **Graphique** dans la barre de menus, ou la boîte de dialogue **Options**), ces tâches sont affichées en rouge.

Les tâches avec une marge négative affichent également une icône d'avertissement dans la liste des tâches, signalant un conflit de planification. Cela se produit généralement lorsqu'une contrainte **Début pas après** ou **Fin pas après** entre en conflit avec les dépendances de la tâche.

![Critical](/images/building-schedule/tasks/critical.png)

## Options du chemin critique

Dans l'onglet **Autre** de la boîte de dialogue **Propriétés du projet**, vous pouvez configurer le mode de calcul du chemin critique :

- **Calculer les chemins critiques multiples** — Lorsque cette option est activée, chaque groupe déconnecté de tâches liées possède son propre chemin critique. Lorsqu'elle est désactivée (par défaut), les tâches sans successeur utilisent la date de fin du projet comme date de fin au plus tard.
- **Les tâches sont critiques si la marge est inférieure ou égale à** — Par défaut, les tâches avec une marge nulle ou négative sont critiques. Vous pouvez augmenter ce seuil afin que les tâches dont la marge ne dépasse pas le nombre de jours spécifié soient également considérées comme critiques.
