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
- Désigner la référence utilisée pour les calculs de [valeur acquise](/fr/tracking/earned-value/index.md#gestion-de-la-valeur-acquise)

## Colonnes de référence et d'écart

Vous pouvez ajouter des colonnes de référence et d'écart à la liste des tâches via la boîte de dialogue **Options**. Il y a au total **55 colonnes de référence** et **5 colonnes d'écart**.

### Les 55 colonnes de référence

Ingantt stocke **11 références de base** : la référence **Baseline** non numérotée, plus **Baseline 1** à **Baseline 10**. Chacune expose les cinq mêmes colonnes de tâche :

- Baseline Start
- Baseline Finish
- Baseline Duration
- Baseline Work
- Baseline Cost

11 références × 5 champs = **55 colonnes de référence**, toutes disponibles depuis le sélecteur de colonnes du tableau des tâches. Le jeu non numéroté porte un nom simple (*Baseline Start*) ; les jeux numérotés portent leur numéro (*Baseline 3 Start*).

### Les 5 colonnes d'écart

Les colonnes d'écart sont calculées — planning actuel moins référence de base — et il y en a cinq :

- Start Variance
- Finish Variance
- Duration Variance
- Work Variance
- Cost Variance

Il n'existe qu'un seul jeu de cinq colonnes, et non un jeu par référence de base. Elles comparent le planning actuel à **une seule** référence de base — celle sélectionnée comme [référence de base pour la valeur acquise](/fr/tracking/earned-value/index.md#référence-de-base-pour-la-valeur-acquise) dans **Project → Earned Value Options**, qui est par défaut la référence Baseline non numérotée. Modifiez ce paramètre et chaque colonne d'écart est recalculée par rapport à la référence choisie. Une tâche dont la référence choisie n'a jamais été définie affiche un écart vide plutôt qu'un zéro.

## Où sont stockées les références de base

Les références de base sont stockées **dans le fichier de projet**, et non dans un fichier séparé. Enregistrer le projet enregistre ses références de base.

Si vous essayez de définir une douzième référence de base, Ingantt vous indique *All baseline slots are in use. Clear one in the Baselines dialog first.* Ouvrez **Project → Baselines** et effacez-en une.

Les références de base ne sont pas la même chose que l'[historique des versions](/fr/ui/version-history/index.md), qui enregistre le fichier lui-même au fil du temps. Utilisez l'historique des versions pour revenir à un plan antérieur ; utilisez les références de base pour mesurer à quel point le plan actuel a dérivé.

## Plans intermédiaires

Les plans intermédiaires stockent des instantanés allégés du planning (dates de **Start** et **Finish** uniquement) pour une comparaison rapide sans la lourdeur des références de base complètes. Ingantt prend en charge jusqu'à 10 plans intermédiaires (`Interim Plan 1` à `Interim Plan 10`).

Définissez et effacez les plans intermédiaires depuis l'élément **Interim Plans** dans le menu **Project**. Vous pouvez afficher les dates des plans intermédiaires sous forme de colonnes dans la liste des tâches.
