# Vues des ressources

Visualisez la répartition de la charge de travail au sein de votre équipe. Les vues d'utilisation montrent qui fait quoi et quand, le planificateur d'équipe permet de réaffecter par glisser-déposer, et le graphe des ressources révèle la capacité en un coup d'œil.

## Resource Usage

La vue **Resource Usage** vous permet de visualiser toutes les affectations de ressources et la quantité de [travail](/fr/building-schedule/task-properties/index.md#travail) que chaque ressource de travail effectue pendant chaque période sur la ligne temporelle.

Comme pour le diagramme de Gantt, vous pouvez zoomer en avant ou en arrière sur la ligne temporelle pour obtenir une vue plus ou moins détaillée.

Si une ressource doit effectuer plus de travail que ce que les calendriers autorisent pour une période donnée, le **travail** correspondant est mis en évidence en rouge.

Dans la vue Resource Usage, vous pouvez double-cliquer sur les cellules de travail au niveau des affectations pour modifier directement la répartition du travail. Lorsque vous modifiez une cellule de travail, le profil de charge de l'affectation passe automatiquement à « Contoured » et les données de travail personnalisées par jour sont enregistrées.

## Task Usage

La vue **Task Usage** est l'inverse de Resource Usage — elle offre une vue centrée sur les tâches de la répartition du travail. Chaque tâche apparaît en tant que ligne de niveau supérieur avec ses affectations de ressources indentées en dessous.

Le panneau de gauche affiche les détails des tâches et des affectations, tandis que le panneau de droite affiche les valeurs de travail réparties sur les périodes. Les valeurs de travail au niveau des tâches sont affichées en gras. Les valeurs de travail des affectations surutilisées sont mises en évidence en rouge.

## Team Planner

La vue **Team Planner** est une vue de planification centrée sur les ressources où chaque ligne représente une ressource de travail. Les barres de tâches sont positionnées sur la ligne de chaque ressource le long d'une échelle de temps partagée.

Fonctionnalités principales :

- **Glissez horizontalement** pour replanifier une tâche — la tâche reçoit une contrainte Début au plus tôt le à la nouvelle position
- **Glissez verticalement** pour réaffecter une tâche à une autre ressource
- **Glissez en diagonale** pour replanifier et réaffecter en une seule opération
- Glissez vers ou depuis la section **Unassigned Tasks** pour ajouter ou supprimer des affectations de ressources
- Les ressources surutilisées sont affichées en rouge dans le panneau de gauche
- Les tâches achevées à 100 % ne peuvent pas être déplacées

## Resource Graph

La vue **Resource Graph** affiche un histogramme par ressource de la répartition de la charge de travail dans le temps. Elle affiche une seule ressource de travail à la fois avec des barres verticales pour chaque période. Naviguez entre les ressources à l'aide des boutons fléchés dans le panneau de gauche.

Sept types de graphiques sont disponibles :

| Type de graphique | Description |
|-------------------|-------------|
| **Peak Units** | Pourcentage de capacité de la ressource utilisé par période (par défaut) |
| **Work** | Heures de travail par période |
| **Overallocation** | Uniquement les heures excédentaires au-delà de la capacité |
| **Percent Allocation** | Identique à Peak Units avec affichage en pourcentage |
| **Remaining Availability** | Capacité inutilisée en heures |
| **Work Availability** | Capacité totale du calendrier en heures |
| **Unit Availability** | Pourcentage effectif des unités maximales |

Les barres bleues représentent le travail dans les limites de la capacité ; les barres rouges représentent la portion surutilisée dépassant la capacité.
