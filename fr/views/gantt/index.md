# Diagramme de Gantt

Le diagramme de Gantt représente la ligne temporelle de votre projet. Visualisez les ajustements de nivellement, les lignes d'avancement et l'évolution du planning depuis l'enregistrement de la référence de base.

## Vues disponibles

Ingantt propose plusieurs vues pour travailler avec votre projet, accessibles depuis le tiroir de navigation ou le menu **Vue**. Toutes les vues sont entièrement fonctionnelles — vous pouvez effectuer toute action disponible pour les tâches dans n'importe quelle vue.

**Vues des tâches :**

- **Tâches** — liste des tâches et diagramme de Gantt
- **Gantt de suivi**
- **[Tableau des tâches](/fr/views/task-views/index.md#tableau-des-tâches)**
- **[Diagramme de réseau](/fr/views/task-views/index.md#diagramme-de-réseau)**
- **[Vue calendrier](/fr/views/task-views/index.md#vue-calendrier)**
- **[Chronologie](/fr/views/task-views/index.md#chronologie)**

**Vues des ressources :**

- **[Utilisation des ressources](/fr/views/resource-views/index.md#utilisation-des-ressources)**
- **[Utilisation des tâches](/fr/views/resource-views/index.md#utilisation-des-tâches)**
- **[Planificateur d'équipe](/fr/views/resource-views/index.md#planificateur-déquipe)**
- **[Graphique des ressources](/fr/views/resource-views/index.md#graphique-des-ressources)**

## Vue Tâches

La vue **Tâches** est la vue principale combinant une liste de tâches et le diagramme de Gantt (vue divisée). Vous pouvez configurer les panneaux affichés via le sous-menu **Vue > Panneaux dans Tâches** : la liste des tâches et le diagramme de Gantt peuvent être activés ou désactivés indépendamment.

## Inspecteur de tâche

L'**Inspecteur de tâches** est un panneau latéral qui affiche les détails de la tâche sélectionnée, notamment les facteurs de planification (ce qui détermine les dates de la tâche), les propriétés générales, les ressources, les prédécesseurs, le coût, et bien plus encore. Activez ou désactivez l'inspecteur de tâche depuis la barre d'outils.

La section **Facteurs de planification** en haut de l'inspecteur indique ce qui détermine les dates planifiées de la tâche : prédécesseurs déterminants (affichés en gras avec un badge « Driving »), prédécesseurs non déterminants (avec leur marge relative), contraintes, retards de nivellement, calendriers et valeurs de marge. Les tâches critiques affichent un badge « Critical ».

## Gantt de nivellement

Lorsque le [nivellement automatique](/fr/adjusting-schedule/leveling/index.md#nivellement-automatique) a été appliqué à votre projet, un bouton bascule **Gantt de nivellement** apparaît dans la zone du diagramme de Gantt.

Lorsqu'il est activé, le diagramme de Gantt affiche des **barres vertes** à la position pré-nivellement de chaque tâche (là où elle se trouvait avant le nivellement automatique). Les barres de tâches standard restent à leur position nivelée actuelle. Cela vous permet de comparer visuellement le planning initial avec le planning nivelé et de constater le décalage de chaque tâche.

Lorsque la bascule est désactivée, seules les barres de tâches standard sont affichées.

> La bascule Gantt de nivellement n'est visible que lorsque des données de nivellement existent. Elle est automatiquement masquée lorsque vous effacez le nivellement. Si vous ouvrez un fichier de projet contenant déjà des données de nivellement, la bascule est disponible mais démarre en position désactivée.

## Lignes d'avancement

Lorsqu'elles sont activées, le diagramme de Gantt affiche une **ligne d'avancement** — une ligne en zigzag qui indique visuellement si les tâches sont en retard ou en avance par rapport à la date d'état. Les tâches en retard provoquent un pic vers la gauche ; les tâches en avance provoquent un pic vers la droite ; les tâches dans les temps maintiennent la ligne droite.

Activez ou désactivez les lignes d'avancement depuis le bouton de la barre d'outils flottante du diagramme de Gantt ou le menu **Vue**. La ligne d'avancement est également incluse dans l'export PDF et l'impression lorsqu'elle est activée.
