# Dépendances

Les projets réels ont un ordre — vous ne pouvez pas tester avant d'avoir construit. Liez les tâches entre elles pour qu'Ingantt calcule la bonne séquence et décale automatiquement tout le reste lorsqu'une tâche change.

## Prédécesseurs et dépendances

Lorsque vous liez des tâches à l'aide du bouton **Link selected tasks** dans la barre d'outils, vous créez une dépendance entre les tâches. La dépendance créée est de type **Finish to Start**, et c'est l'une des quatre dépendances disponibles :

| Type                | Description                                                                       |
|---------------------|-----------------------------------------------------------------------------------|
| **Finish to Start** | La seconde tâche peut commencer une fois que la première est terminée.            |
| **Finish to Finish**| La seconde tâche se termine lorsque la première se termine.                       |
| **Start to Finish** | La seconde tâche se termine lorsque la première commence.                         |
| **Start to Start**  | La seconde tâche commence lorsque la première commence.                           |

![Dependencies](/images/building-schedule/tasks/dependencies.png)

Pour assigner des prédécesseurs et modifier les dépendances, utilisez l'onglet **Predecessors** de la boîte de dialogue **Task Properties**.

## Décalage positif et négatif

Parfois, vous pouvez avoir besoin de définir un temps d'attente entre deux tâches dépendantes.

Imaginons que votre première tâche soit « Peindre le mur » et votre seconde tâche « Accrocher des tableaux au mur ». Ces tâches sont liées (elles ont une dépendance **Finish to Start**). Il n'est pas possible d'accrocher des tableaux tant que la peinture n'est pas sèche, vous devez donc attendre. Pour refléter cela dans votre planning, définissez le **Lag** (par exemple, 2 jours) pour la dépendance entre les deux tâches.

![Lag](/images/building-schedule/tasks/lag.png)

Les décalages peuvent également représenter le scénario inverse — lorsqu'une tâche dépendante doit commencer avant que son prédécesseur ne soit terminé. Pour cela, rendez le **Lag** négatif (par exemple, -1 jour). C'est ce qu'on appelle le _décalage négatif_ (ou avance).

Pour définir un décalage positif ou négatif, sélectionnez le prédécesseur dans l'onglet **Predecessors** de la boîte de dialogue **Task Properties** et cliquez sur le bouton **Edit**.

> Les décalages peuvent être définis en heures, jours, semaines, mois, ou sous forme de fraction de la durée de la tâche prédécesseur (par exemple, 50 %).

## Dépendances circulaires

Si vous créez accidentellement une dépendance circulaire — par exemple, en rendant deux tâches prédécesseurs l'une de l'autre — Ingantt la détecte et annule la dernière action. Cela s'applique également aux chaînes circulaires complexes.

Lorsque vous ouvrez un fichier de projet contenant des dépendances circulaires, Ingantt supprime automatiquement les liens problématiques afin que le projet puisse être planifié. Un message d'avertissement indique le nombre de liens de dépendance circulaire supprimés lors de l'importation.
