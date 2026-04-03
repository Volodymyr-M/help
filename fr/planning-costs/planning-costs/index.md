# Comprendre les coûts

Affectez des coûts aux tâches et aux ressources pour connaître le prix total de votre projet. La tâche récapitulative racine affiche le total général — comparez-le aux ressources budgétaires pour savoir si votre projet respecte le budget approuvé.

## Comment le coût d'une tâche est calculé

Le coût de chaque tâche est une combinaison de son propre coût fixe et des coûts de ses ressources affectées. Ingantt calcule le coût total de chaque tâche et l'affiche dans la colonne **Cost** de la liste des tâches.

*Tâche **Cost** = **Fixed Cost** de la tâche + coûts des ressources affectées à la tâche*

> Si vous ne voyez pas la colonne **Cost** dans la liste des tâches, vérifiez que l'option **Cost Column** est cochée dans l'onglet **Task Columns** de la boîte de dialogue **Options**.

## Coûts des tâches récapitulatives

Dans son champ **Cost**, chaque [tâche récapitulative](/fr/building-schedule/tasks/index.md#summary-tasks) affiche le coût total de toutes ses sous-tâches.

Cependant, tout comme une tâche ordinaire, une tâche récapitulative peut avoir des [ressources affectées](/fr/building-schedule/assignments/index.md#resource-assignments-and-units) et un **Fixed Cost**. Ceux-ci s'ajoutent au coût total des sous-tâches, augmentant ainsi le **Cost** de la tâche récapitulative.

*Tâche récapitulative **Cost** = coût total de toutes les sous-tâches + **Fixed Cost** de la tâche récapitulative + coûts des ressources affectées à la tâche récapitulative*

Utilisez la [tâche récapitulative racine](/fr/building-schedule/tasks/index.md#root-summary-task) pour visualiser et gérer le coût total de l'ensemble de votre projet.

## Ressources budgétaires

Une ressource peut être marquée comme ressource **Budget** dans la boîte de dialogue **Resource Properties**. Les ressources budgétaires représentent les montants budgétaires globaux alloués au niveau du projet et ne peuvent être affectées qu'à la [tâche récapitulative racine](/fr/building-schedule/tasks/index.md#root-summary-task).

Les ressources budgétaires sont exclues :

- De la planification
- Des totaux de coûts
- De la détection de surallocation
- Du nivellement des ressources

Elles permettent un suivi budgétaire descendant, distinct des calculs de coûts ascendants.

## Devise

Si votre projet utilise une devise différente de celle par défaut d'Ingantt, vous pouvez la modifier dans l'onglet **Regional** de la boîte de dialogue **Project Properties**. Spécifiez la devise sous forme de symbole (par ex., €), d'abréviation (EUR) ou de nom complet (euro).

Dans le même onglet, vous pouvez également spécifier la **Currency Position** — avant ou après la valeur, avec ou sans espace.

> Lorsque vous changez la devise, les valeurs de coût ne sont pas recalculées.
