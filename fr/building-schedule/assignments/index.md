# Affectations

Contrôlez la manière dont les ressources sont allouées aux tâches — qui travaille sur quoi, quelle proportion de leur temps, et comment l'effort est réparti. Ajustez les unités, les profils de charge de travail et les heures supplémentaires pour refléter le fonctionnement réel de votre équipe.

## Affectations de ressources et unités

Les ressources peuvent être affectées à une tâche dans l'onglet **Ressources** de la boîte de dialogue **Propriétés de la tâche**.

Pour affecter une ressource, cochez la case dans la ligne correspondant à la ressource. Pour retirer l'affectation d'une ressource, décochez la case.

Les affectations de ressources de travail ou matérielles possèdent des **Unités**, affichées dans la colonne correspondante. Cliquez sur le bouton **Modifier** pour modifier la valeur par défaut des **Unités** de l'affectation.

Par défaut, les ressources de travail sont affectées avec des unités correspondant aux [unités maximales](/fr/building-schedule/resources/index.md#unités-maximales) de la ressource (100 % pour une ressource à temps plein). Cela signifie que la ressource consacrera la totalité de son temps calendaire disponible à la tâche. Vous pouvez modifier cette valeur à votre convenance.

Par défaut, les ressources matérielles sont affectées avec 1 unité. Cela signifie qu'une unité de ce matériau sera utilisée lors de la réalisation de la tâche. L'unité représente ce que vous avez défini pour le matériau (boîte, litre, tonne, etc.). Vous pouvez modifier la valeur par défaut et définir n'importe quel nombre d'unités.

## Profils de charge de travail

Lorsqu'une ressource de travail est affectée à une tâche, l'effort (travail) est réparti sur la durée de la tâche selon un **profil de charge de travail**. Par défaut, le travail est réparti uniformément (profil Flat), mais Ingantt prend en charge plusieurs profils qui modifient la distribution de l'effort dans le temps :

| Profil | Description |
|--------|-------------|
| **Plat** | Effort uniforme sur toute la durée (par défaut) |
| **Chargé en fin** | L'effort augmente vers la fin de la tâche |
| **Chargé en début** | L'effort est le plus important au début et diminue progressivement |
| **Double pic** | Deux pics d'intensité pendant la tâche |
| **Pic initial** | Pic en début de tâche, puis décroissance progressive |
| **Pic final** | Montée progressive vers un pic en fin de tâche |
| **Cloche** | Courbe en cloche — pic au milieu |
| **Tortue** | Courbe en cloche aplatie — distribution plus lissée |
| **Personnalisé** | Votre propre répartition jour par jour. Défini automatiquement lorsque vous modifiez le travail dans une vue d'utilisation ; il ne peut pas être choisi dans la liste déroulante. |

Les profils de charge de travail affectent la répartition du travail sur les différentes périodes et sont préservés lors de l'ouverture et de l'enregistrement des fichiers de projet.

### Le profil Personnalisé

**Personnalisé** est le profil personnalisé, et il se comporte différemment des huit autres. Vous ne pouvez pas le choisir dans la liste déroulante pour une affectation qui ne l'a pas déjà — l'option est désactivée. Vous l'obtenez en **modifiant directement le travail dans une cellule de la vue [Resource Usage ou Task Usage](/fr/views/resource-views/index.md)** : dès que vous saisissez une valeur de travail pour un jour, le profil de cette affectation devient *Personnalisé* et c'est la répartition que vous avez saisie qui est utilisée.

Deux conséquences méritent d'être connues :

- **Quitter le profil Personnalisé efface la répartition saisie à la main.** Choisissez l'un des huit autres profils et les valeurs journalières que vous aviez saisies sont effacées. Elles ne sont pas conservées ni restaurées si vous revenez à Personnalisé.
- **Le travail Personnalisé survit à un aller-retour avec le format Microsoft Project.** L'import lit le travail chronologique jour par jour dans l'affectation, et l'export le réécrit. Un planning venant de Microsoft Project avec un profil modifié à la main le conserve.

## Délai d'affectation

Chaque affectation de ressource sur une tâche possède une propriété **Retard** qui décale le moment où la ressource commence à travailler par rapport à la date de début de la tâche. Par exemple, si une tâche commence le lundi et qu'une ressource a un délai de 2 jours, cette ressource commence à travailler le mercredi.

Le délai est défini dans la boîte de dialogue **Modifier l'affectation de ressource** et ne s'applique qu'aux affectations de ressources de travail. Il peut être utilisé pour échelonner les dates de début des ressources sur une tâche.

## Heures supplémentaires

Pour les ressources de travail, vous pouvez désigner une partie du travail total d'une affectation comme heures supplémentaires. Les heures supplémentaires sont un sous-ensemble du travail total, et non un ajout : **Travail = Travail normal + Heures supplémentaires**.

L'impact des heures supplémentaires sur les coûts est traité dans [Configuration des coûts](/fr/planning-costs/setting-up-costs/index.md#coût-des-ressources-de-travail).

Pour les tâches de type Fixed Units et Fixed Work, la saisie d'heures supplémentaires réduit la durée de la tâche car la durée est basée uniquement sur le travail normal.

Définissez les heures supplémentaires dans la boîte de dialogue **Modifier l'affectation de ressource**. Trois colonnes optionnelles sont disponibles dans le tableau des tâches : **Travail en heures sup**, **Coût des heures sup** et **Travail régulier**.
