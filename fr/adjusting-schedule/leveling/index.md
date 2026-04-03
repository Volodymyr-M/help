# Nivellement des ressources

Il est facile d'affecter accidentellement plus de travail qu'une personne ne peut en accomplir en une journée. Le nivellement décale automatiquement les tâches pour éviter toute surcharge, bien qu'il puisse repousser la date de fin de votre projet.

## Ressources surutilisées

Une ressource de travail peut être **surutilisée**, ce qui signifie qu'elle a plus de travail affecté qu'elle ne peut en accomplir selon son calendrier et sa disponibilité. Par exemple, si votre projet comporte deux tâches d'une durée d'un jour chacune, sans [dépendance](/fr/building-schedule/dependencies/index.md#predecessors-and-dependencies) entre elles, toutes deux affectées à la même ressource de travail, cette ressource est surutilisée. Elle doit effectuer deux jours de travail en un seul jour calendaire. Pour résoudre ce problème, il suffit de lier les deux tâches par une dépendance.

Si une tâche a des ressources surutilisées affectées, Ingantt affiche une icône spéciale dans la liste des tâches.

Si une ressource est surutilisée, Ingantt affiche une icône spéciale dans la vue **Resources** et la vue **Resource Usage**.

De plus, Ingantt comptabilise ces tâches et ressources et affiche les totaux dans le panneau de navigation.

## Nivellement automatique

Les dépendances entre les tâches contrôlent leur position sur la ligne temporelle. Dans les projets de grande envergure, il est facile d'oublier une dépendance — ce qui entraîne l'affectation de plusieurs tâches à la même ressource de travail au même moment. La ressource devient surutilisée, et Ingantt vous en informe par des icônes spéciales dans les listes de tâches et de ressources.

Vous pouvez résoudre la surutilisation manuellement en définissant des dépendances ou des contraintes pour décaler certaines tâches afin que le travail ne soit pas effectué simultanément.

Une autre façon de résoudre la surutilisation est le nivellement automatique. Si vous choisissez **Auto-level resources** dans le menu **Project**, Ingantt décale automatiquement certaines tâches plus loin sur la ligne temporelle pour éviter la surutilisation des ressources. Vous pouvez annuler ces ajustements automatiques en choisissant **Clear leveling** dans le menu **Project**.

La commande de nivellement automatique propose trois options de portée :

- **All tasks** — Nivelle toutes les tâches du projet
- **Selected tasks** — Nivelle uniquement les tâches actuellement sélectionnées
- **Selected resources** — Nivelle uniquement les conflits de surutilisation pour les ressources sélectionnées (disponible dans les vues Resources et Resource Usage)

### Fonctionnement du nivellement automatique

Lorsque vous exécutez **Auto-level resources**, Ingantt résout les surutilisations en **retardant ou fractionnant les tâches**. Il ne réaffecte pas les ressources et ne modifie pas les unités d'affectation.

L'algorithme identifie les jours où une ressource a plus de travail affecté que sa capacité ne le permet, puis détermine quelles tâches concurrentes retarder. Chaque tâche reçoit un score basé sur plusieurs facteurs — les tâches avec un score plus élevé sont protégées contre le retard :

| Facteur | Effet |
|---------|-------|
| **Dependencies** | Les tâches qui sont prédécesseurs d'autres tâches sont protégées |
| **Slack** | Les tâches critiques ou quasi critiques (moins de marge) sont protégées |
| **Priority** | Les tâches avec une valeur de priorité plus élevée sont protégées |
| **Constraints** | Les tâches avec des contraintes de planification sont protégées |
| **Start Date** | Les tâches qui commencent plus tôt sont quelque peu protégées |
| **Duration** | Les tâches plus longues sont quelque peu protégées |

La tâche avec le score le plus bas est retardée pour résoudre chaque conflit. Le processus se répète jusqu'à ce que toutes les surutilisations soient résolues ou qu'aucun retard supplémentaire ne puisse être appliqué.

> Le nivellement automatique peut repousser la date de fin du projet. Il résout autant de surutilisations que possible, mais certaines peuvent subsister si des contraintes empêchent tout retard supplémentaire.

### Options de nivellement

Configurez le comportement du nivellement dans la boîte de dialogue **Leveling Options**, accessible depuis le menu **Project** :

- **Leveling order** — Contrôle la priorité des tâches : ID Only (ID croissant), Standard (score multi-facteurs), ou Priority Standard (priorité d'abord, puis facteurs standard ; valeur par défaut)
- **Overallocation basis** — Contrôle la granularité de détection : minute, heure, jour, semaine ou mois. Les paramètres minute et heure détectent les conflits même lorsque les totaux journaliers sont dans les limites de capacité mais que les tâches se chevauchent au sein d'une même journée.
- **Adjust individual assignments** — Lorsque cette option est activée et qu'une tâche comporte plusieurs affectations de ressources, seule l'affectation de la ressource surutilisée est retardée au lieu de la tâche entière
- **Create splits in remaining work** — Lorsque cette option est activée, l'algorithme de nivellement peut fractionner le travail autour des conflits au lieu de retarder des tâches entières
- **Level only within available slack** — Limite les retards de nivellement à ne pas dépasser la marge totale d'une tâche, empêchant ainsi le report de la date de fin du projet
- **Leveling range** — Restreint le nivellement aux tâches comprises dans une fenêtre de dates spécifique

### Exemptions du nivellement

Les tâches et ressources suivantes ne sont jamais affectées par le nivellement automatique :

- Les tâches dont la [priorité](#priority) est définie à **1000**
- Les tâches dont **Can Level** est défini à **false** (dans l'onglet **Leveling** de la boîte de dialogue Task Properties)
- Les tâches avec une contrainte **Must start on** ou **Must finish on** [constraint](/fr/building-schedule/constraints/index.md#constraints)
- Les [tâches récapitulatives](/fr/building-schedule/tasks/index.md#summary-tasks)
- Les jalons de durée nulle
- Les tâches entièrement achevées (100 %)
- Les ressources dont **Can Level** est défini à **false** dans la boîte de dialogue Resource Properties
- Les ressources avec un [type de réservation](/fr/building-schedule/resources/index.md#booking-type) **Proposed** (sauf si l'option de nivellement pour inclure les ressources proposées est activée)

### Renivellement et suppression

Chaque fois que vous exécutez **Auto-level resources**, tout nivellement précédent est automatiquement supprimé au préalable. Le nivellement repart toujours d'un planning vierge, non nivelé, pour éviter l'accumulation des retards.

Si vous modifiez le planning après le nivellement (ajout de tâches, modification de dépendances, etc.), les retards de nivellement existants sont conservés mais peuvent ne plus résoudre toutes les surutilisations. Exécutez à nouveau **Auto-level resources** pour reniveler le planning mis à jour.

Pour supprimer tous les retards de nivellement et revenir au planning calculé par la méthode du chemin critique, choisissez **Clear leveling** dans le menu **Project**.

### Gantt de nivellement

Après avoir exécuté le nivellement automatique, un bouton bascule **Leveling Gantt** apparaît dans la zone du diagramme de Gantt. Lorsqu'il est activé, il affiche des barres vertes aux positions d'avant nivellement — là où se trouvaient les tâches avant le nivellement — tandis que les barres de tâches standard restent à leurs positions nivelées actuelles. Cela vous permet de comparer le planning initial avec le planning nivelé pour visualiser le décalage de chaque tâche.

Ce bouton bascule n'est visible que lorsque le projet contient des données de nivellement et il est automatiquement masqué lorsque vous supprimez le nivellement.

## Priorité

Le champ **Priority** est disponible dans l'onglet **Leveling** de la boîte de dialogue **Task Properties**. Il accepte une valeur entière de 0 à 1000, avec une valeur par défaut de 500.

La priorité est utilisée par l'algorithme de [nivellement automatique](#auto-leveling) pour déterminer quelles tâches retarder lors de la résolution des surutilisations de ressources. Les tâches avec une priorité plus élevée sont moins susceptibles d'être retardées :

- **0** — Priorité la plus basse, la tâche sera très probablement retardée
- **500** — Priorité par défaut
- **1000** — « Ne pas niveler » — la tâche n'est jamais retardée par le nivellement automatique

> Définissez la priorité à **1000** pour les tâches qui ne doivent jamais être déplacées par le nivellement automatique, comme les tâches liées à des échéances externes ou à des engagements fixes.
