# Vues des tâches

Au-delà du diagramme de Gantt, visualisez vos tâches sur un tableau Kanban, un calendrier mensuel, un diagramme réseau ou une chronologie. Chaque vue met en évidence différents aspects de votre planning.

## Task Board

La vue **Task Board** affiche les tâches sous forme de cartes organisées en colonnes représentant les étapes du flux de travail (style Kanban).

Les nouveaux projets démarrent avec trois colonnes par défaut : « Not Started » (0 %), « In Progress » (50 %) et « Complete » (100 %). Chaque colonne est associée à un pourcentage d'achèvement — lorsque vous faites glisser une carte vers une colonne, le pourcentage d'achèvement de la tâche est automatiquement mis à jour.

Vous pouvez ajouter, modifier, renommer, réorganiser et supprimer des colonnes. Chaque colonne dispose d'un bouton **Add Task** en bas pour créer des tâches directement à cette étape.

Seules les tâches actives non récapitulatives ayant l'option « Show on board » activée apparaissent sur le tableau. Le paramètre « Show on board » est disponible dans l'onglet **Visual** de la boîte de dialogue **Task Properties**.

> Faites glisser les cartes de tâches entre les colonnes pour modifier leur état. Lorsque le pourcentage d'achèvement d'une tâche change par un autre moyen (boîte de dialogue, modification en ligne ou Update Project), la carte se déplace automatiquement vers la colonne correspondante.

## Network Diagram

La vue **Network Diagram** affiche les tâches sous forme de nœuds rectangulaires disposés dans un organigramme de gauche à droite. Les tâches sans prédécesseur apparaissent dans la colonne la plus à gauche, et chaque tâche suivante apparaît après tous ses prédécesseurs.

- Les tâches normales affichent l'identifiant, la durée, les dates de début/fin et les ressources
- Les tâches récapitulatives affichent l'identifiant, la durée, les dates de début/fin et le pourcentage d'achèvement
- Les jalons affichent l'identifiant et la date de début
- Les tâches du chemin critique ont des en-têtes et des bordures rouges
- L'avancement est indiqué par des lignes diagonales superposées : une ligne pour les tâches en cours, des lignes croisées pour les tâches terminées

Vous pouvez réduire/développer les tâches récapitulatives, cliquer pour sélectionner, double-cliquer pour modifier et faire un clic droit pour accéder au menu contextuel. Des flèches de dépendance sont tracées entre les nœuds pour les quatre types de liens.

## Calendar View

La vue **Calendar View** affiche une grille de calendrier mensuel avec les tâches représentées sous forme de barres horizontales couvrant leurs dates planifiées.

- Basculez entre les vues **Month** et **Week** à l'aide du sélecteur dans l'en-tête
- Activez le mode **Work week** pour afficher uniquement les jours ouvrés (vue sur 5 jours)
- Naviguez avec les boutons Précédent/Suivant ou accédez directement à la date du jour
- Les jours non ouvrés sont affichés avec un arrière-plan distinct
- Les jalons apparaissent sous forme d'icônes en losange
- Double-cliquez sur un jour vide pour créer une nouvelle tâche d'un jour à cette date

Les tâches qui chevauchent une limite de semaine passent à la ligne suivante. Lorsque plusieurs tâches se superposent le même jour, elles s'empilent verticalement.

## Timeline

La **Timeline** est un volet rétractable qui apparaît au-dessus du diagramme de Gantt et affiche un aperçu simplifié des tâches sélectionnées par l'utilisateur sur un axe temporel horizontal.

Pour ajouter une tâche à la chronologie, faites un clic droit dessus et choisissez **Display on Timeline**, ou cochez l'option dans l'onglet **Visual** de la boîte de dialogue Task Properties.

Les tâches sur la chronologie peuvent être affichées sous forme de barres ou de légendes (libellés textuels avec des lignes de connexion verticales). Vous pouvez basculer entre les modes en faisant glisser une barre de tâche au-dessus ou en dessous de la ligne de séparation horizontale dans le volet de la chronologie. La chronologie affiche également un marqueur de la date du jour et une zone de vue que vous pouvez faire glisser pour faire défiler le diagramme de Gantt.

Activez ou désactivez la chronologie depuis le menu **View**.

## Tracking Gantt

La vue **Tracking Gantt** est similaire à la vue Tasks standard, mais avec la mise en évidence du chemin critique toujours activée et la référence de base 0 affichée si elle a été enregistrée. Lorsque vous quittez la vue Tracking Gantt, les paramètres de visibilité du chemin critique et de la référence de base sont rétablis à leur état précédent.

Utilisez le Tracking Gantt pour suivre l'avancement du projet par rapport au plan de référence.
