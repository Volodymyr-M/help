# Affectations

Contrôlez la manière dont les ressources sont allouées aux tâches — qui travaille sur quoi, quelle proportion de leur temps, et comment l'effort est réparti. Ajustez les unités, les profils de charge de travail et les heures supplémentaires pour refléter le fonctionnement réel de votre équipe.

## Affectations de ressources et unités

Les ressources peuvent être affectées à une tâche dans l'onglet **Resources** de la boîte de dialogue **Task Properties**.

Pour affecter une ressource, cochez la case dans la ligne correspondant à la ressource. Pour retirer l'affectation d'une ressource, décochez la case.

Les affectations de ressources de travail ou matérielles possèdent des **Units**, affichées dans la colonne correspondante. Cliquez sur le bouton **Edit** pour modifier la valeur par défaut des **Units** de l'affectation.

Par défaut, les ressources de travail sont affectées avec des unités correspondant aux [Max Units](/fr/building-schedule/resources/index.md#max-units) de la ressource (100 % pour une ressource à temps plein). Cela signifie que la ressource consacrera la totalité de son temps calendaire disponible à la tâche. Vous pouvez modifier cette valeur à votre convenance.

Par défaut, les ressources matérielles sont affectées avec 1 unité. Cela signifie qu'une unité de ce matériau sera utilisée lors de la réalisation de la tâche. L'unité représente ce que vous avez défini pour le matériau (boîte, litre, tonne, etc.). Vous pouvez modifier la valeur par défaut et définir n'importe quel nombre d'unités.

## Profils de charge de travail

Lorsqu'une ressource de travail est affectée à une tâche, l'effort (travail) est réparti sur la durée de la tâche selon un **profil de charge de travail**. Par défaut, le travail est réparti uniformément (profil Flat), mais Ingantt prend en charge plusieurs profils qui modifient la distribution de l'effort dans le temps :

| Profil | Description |
|--------|-------------|
| **Flat** | Effort uniforme sur toute la durée (par défaut) |
| **Back Loaded** | L'effort augmente vers la fin de la tâche |
| **Front Loaded** | L'effort est le plus important au début et diminue progressivement |
| **Double Peak** | Deux pics d'intensité pendant la tâche |
| **Early Peak** | Pic en début de tâche, puis décroissance progressive |
| **Late Peak** | Montée progressive vers un pic en fin de tâche |
| **Bell** | Courbe en cloche — pic au milieu |
| **Turtle** | Courbe en cloche aplatie — distribution plus lissée |

Les profils de charge de travail affectent la répartition du travail sur les différentes périodes et sont préservés lors de l'ouverture et de l'enregistrement des fichiers de projet.

## Délai d'affectation

Chaque affectation de ressource sur une tâche possède une propriété **Delay** qui décale le moment où la ressource commence à travailler par rapport à la date de début de la tâche. Par exemple, si une tâche commence le lundi et qu'une ressource a un délai de 2 jours, cette ressource commence à travailler le mercredi.

Le délai est défini dans la boîte de dialogue **Edit Resource Assignment** et ne s'applique qu'aux affectations de ressources de travail. Il peut être utilisé pour échelonner les dates de début des ressources sur une tâche.

## Heures supplémentaires

Pour les ressources de travail, vous pouvez désigner une partie du travail total d'une affectation comme heures supplémentaires. Les heures supplémentaires sont un sous-ensemble du travail total, et non un ajout : **Travail = Travail normal + Heures supplémentaires**.

Le coût de la tâche est calculé séparément pour les parties normales et supplémentaires :
**Coût = Travail normal × Taux standard + Heures supplémentaires × Taux des heures supplémentaires + Coût par utilisation**

Pour les tâches de type Fixed Units et Fixed Work, la saisie d'heures supplémentaires réduit la durée de la tâche car la durée est basée uniquement sur le travail normal.

Définissez les heures supplémentaires dans la boîte de dialogue **Edit Resource Assignment**. Trois colonnes optionnelles sont disponibles dans le tableau des tâches : **Overtime Work**, **Overtime Cost** et **Regular Work**.
