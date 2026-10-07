# Propriétés des tâches

Chaque tâche possède des propriétés qui déterminent comment elle est planifiée, comment les coûts sont calculés et comment elle apparaît dans le diagramme de Gantt. Définissez-les dans la boîte de dialogue **Propriétés de la tâche**.

## Durée

Lors de la planification de votre projet, vous saisissez les durées sous forme d'estimations, c'est-à-dire une approximation raisonnable du temps nécessaire pour qu'une tâche soit réalisée par l'ensemble des ressources impliquées.

Ne confondez pas **Durée** et **Travail**. Par exemple, si trois personnes travaillent sur votre tâche mais la terminent en une heure, vous définissez la **Durée** de la tâche à une heure. Si ces trois personnes sont affectées à la tâche, Ingantt calcule automatiquement la propriété **Travail** à trois heures.

La durée peut être modifiée à l'aide du champ **Durée** dans la boîte de dialogue **Propriétés de la tâche**.

Lorsque vous n'êtes pas encore confiant dans votre estimation de la durée, vous pouvez la marquer comme **Estimation** dans la boîte de dialogue **Propriétés de la tâche**. La durée affiche alors toujours un point d'interrogation (« **?** »). Cocher ou décocher cette option n'affecte pas la planification.

Si au moins une sous-tâche d'une tâche récapitulative a l'option **Estimation** cochée, la durée de la tâche récapitulative est également marquée comme **Estimation** et affiche donc aussi « **?** ».

La durée peut être définie en heures, jours, semaines ou mois. Par défaut, « 1 jour » correspond à 8 heures, « 1 semaine » correspond à 5 jours (40 heures) et « 1 mois » correspond à 20 jours. Ces valeurs par défaut peuvent être modifiées dans l'onglet **Durée** de la boîte de dialogue **Propriétés du projet**.

Lorsque vous modifiez les affectations de ressources, le travail ou la durée, l'une de ces valeurs est recalculée en fonction du [type](#type-et-pilotage-par-leffort) de la tâche.

## Travail

Une fois qu'une ressource de travail est affectée à une tâche (par exemple une personne effectuant la tâche), la propriété **Travail** de la tâche devient supérieure à 0. Elle indique le temps total que toutes les ressources consacreront à la tâche. Par exemple, si une tâche d'une **Durée** de 5 heures a 2 ressources affectées, le **Travail** de la tâche est égal à 10 heures.

Le travail peut être modifié à l'aide du champ **Travail** dans la boîte de dialogue **Propriétés de la tâche**.

Comme la durée, le travail peut être spécifié en heures, jours, semaines ou mois en utilisant les définitions de l'onglet **Durée** de la boîte de dialogue **Propriétés du projet**. Le format d'affichage par défaut du travail peut être modifié dans l'onglet **Temps**.

Lorsque vous modifiez les affectations de ressources, le travail ou la durée, l'une de ces valeurs est recalculée en fonction du [type](#type-et-pilotage-par-leffort) de la tâche.

## Échéance

Parfois, vous devez vous assurer qu'une tâche est terminée avant un jour précis, généralement appelé échéance.

L'échéance d'une tâche peut être spécifiée à l'aide du champ **Date limite** dans la boîte de dialogue **Propriétés de la tâche**.

Les échéances sont purement indicatives et n'affectent pas la planification.

Les échéances sont représentées par des icônes spéciales dans le diagramme de Gantt.

> Si votre planning indique qu'une tâche se termine après son échéance spécifiée, Ingantt affiche une icône dans la liste des tâches et comptabilise ces tâches dans le tiroir de navigation.

![Deadline](/images/building-schedule/tasks/deadline.png)

> Vous pouvez définir une échéance pour l'ensemble du projet en définissant l'échéance de la tâche récapitulative racine. Assurez-vous simplement que la tâche récapitulative racine est visible dans la boîte de dialogue **Options**.

## Jalon

Toute tâche peut être marquée comme jalon en cochant la case **Jalon** dans la boîte de dialogue **Propriétés de la tâche**. Cela ne modifie pas sa durée et n'affecte pas la planification, mais la tâche est représentée par une icône dans le diagramme de Gantt.

![Milestone](/images/building-schedule/tasks/milestone.png)

Si vous spécifiez 0 comme **Durée** d'une tâche, celle-ci est automatiquement marquée comme **Jalon** une fois la modification enregistrée.

## Type et pilotage par l'effort

Les affectations de ressources de travail (ou les unités des ressources de travail affectées), le travail et la durée dépendent les uns des autres. Lorsque vous modifiez l'un de ces éléments, les autres doivent être recalculés en conséquence. Le **Type** de la tâche (avec l'aide de l'indicateur **Piloté par l'effort**) définit laquelle des deux propriétés restantes ne change pas, de sorte qu'une seule soit recalculée.

Par exemple, vous pouvez définir le **Type** sur **Unités fixes** (la valeur par défaut), auquel cas lorsque vous modifiez la durée, le travail est automatiquement recalculé.

| Type               | Description                                                                       |
|--------------------|-----------------------------------------------------------------------------------|
| **Unités fixes**    | Lorsque vous modifiez la durée : le travail est recalculé.                        |
|                    | Lorsque vous modifiez le travail : la durée est recalculée.                       |
|                    | Lorsque vous modifiez les unités :                                                |
|                    | - Si **Piloté par l'effort** est activé : la durée est recalculée.                      |
|                    | - Si **Piloté par l'effort** n'est pas activé : le travail est recalculé.               |
| **Durée fixe** | Lorsque vous modifiez la durée : le travail est recalculé.                        |
|                    | Lorsque vous modifiez le travail : les unités sont recalculées.                   |
|                    | Lorsque vous modifiez les unités : le travail est recalculé.                      |
| **Travail fixe**     | Lorsque vous modifiez la durée : les unités sont recalculées.                     |
|                    | Lorsque vous modifiez le travail : la durée est recalculée.                       |
|                    | Lorsque vous modifiez les unités : la durée est recalculée.                       |

En d'autres termes, le **Type** vous permet de figer l'une des trois propriétés, tandis que l'indicateur **Piloté par l'effort** définit si le travail doit rester inchangé parmi les deux propriétés restantes.

> Les paramètres **Type** et **Piloté par l'effort** ne sont pas disponibles pour les [tâches récapitulatives](/fr/building-schedule/tasks/index.md#tâches-récapitulatives), qui sont toujours de type Durée fixe et non pilotées par l'effort.

## Notes

Vous pouvez ajouter du texte à votre tâche en remplissant le champ **Notes** dans l'onglet **Notes** de la boîte de dialogue **Propriétés de la tâche**. Utilisez-le pour des descriptions de tâches, des informations de contact, des idées ou toute autre donnée textuelle.

Si le champ **Notes** d'une tâche est rempli, une icône spéciale s'affiche pour la tâche dans la liste des tâches. Sur Windows, macOS et le web, survoler l'icône avec la souris affiche la note. Sur mobile, ouvrez la boîte de dialogue **Propriétés de la tâche** pour consulter la note complète.

## Lien hypertexte

Vous pouvez associer une URL à votre tâche à l'aide du champ **Lien hypertexte** dans l'onglet **Notes** de la boîte de dialogue **Propriétés de la tâche**. Les tâches possédant un lien hypertexte affichent une icône de lien dans la liste des tâches. Cliquer sur l'icône de lien ouvre l'URL dans votre navigateur.

## Masquer la barre et cumul

Dans l'onglet **Visuel** de la boîte de dialogue **Propriétés de la tâche** :

- **Masquer la barre** — Masque la barre de la tâche dans le diagramme de Gantt tout en conservant la ligne visible dans la liste des tâches. La zone de la barre invisible répond toujours aux clics et aux menus contextuels.
- **Report vers le haut** — Affiche la barre de la sous-tâche sur la ligne de sa tâche récapitulative parente dans le diagramme de Gantt. Cela offre une vue condensée lorsque les tâches récapitulatives sont réduites.

Ces options peuvent également être activées depuis le sous-menu **Modifier > Affichage** ou le menu contextuel du clic droit.
