# Références de base

Enregistrez un instantané de votre planning avant le début des travaux, puis comparez-le à l'état actuel pour identifier les écarts du projet.

Une référence de base capture la date de début, la date de fin, la durée, le travail et le coût de chaque tâche à un instant donné.

## Définir une référence de base

Définissez une référence de base depuis le menu **Project** en utilisant le sous-menu **Set baseline** :

- Vous pouvez définir une référence de base pour toutes les tâches ou uniquement pour les tâches sélectionnées.
- Ingantt prend en charge jusqu'à 11 références de base.

## Afficher les références de base

Une fois qu'une référence de base a été enregistrée, vous pouvez la visualiser dans le diagramme de Gantt en activant la visibilité des références dans la boîte de dialogue **Baselines**. Les barres de référence apparaissent sous forme de barres plus fines sous les barres de tâches actuelles, avec une couleur distincte pour chaque numéro de référence.

Pour gérer les références de base, utilisez l'élément **Baselines** dans le menu **Project**. La boîte de dialogue **Baselines** vous permet de :

- Afficher toutes les références de base enregistrées
- Supprimer les références dont vous n'avez plus besoin
- Désigner la référence utilisée pour les calculs de [valeur acquise](/fr/tracking/earned-value/index.md#earned-value-management)

## Colonnes de référence et d'écart

Vous pouvez ajouter des colonnes de référence (**Start**, **Finish**, **Duration**, **Work**, **Cost**) et des colonnes d'écart (**Start Variance**, **Finish Variance**, etc.) à la liste des tâches via la boîte de dialogue **Options**. Les colonnes d'écart affichent la différence entre le planning actuel et la [référence de valeur acquise](/fr/tracking/earned-value/index.md#earned-value-baseline).

## Plans intermédiaires

Les plans intermédiaires stockent des instantanés allégés du planning (dates de **Start** et **Finish** uniquement) pour une comparaison rapide sans la lourdeur des références de base complètes. Ingantt prend en charge jusqu'à 10 plans intermédiaires (`Interim Plan 1` à `Interim Plan 10`).

Définissez et effacez les plans intermédiaires depuis l'élément **Interim Plans** dans le menu **Project**. Vous pouvez afficher les dates des plans intermédiaires sous forme de colonnes dans la liste des tâches.
