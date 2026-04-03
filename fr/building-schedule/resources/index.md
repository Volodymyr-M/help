# Ressources

Ajoutez les personnes, les équipements et les matériaux qui effectueront le travail. Une fois les ressources affectées aux tâches, Ingantt peut calculer la charge de travail, détecter les suraffectations et prendre en compte la disponibilité de chaque personne.

## Type de ressource

Ingantt prend en charge trois types de ressources :

| Type de ressource | Description                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------|
| **Work**          | Quelqu'un ou quelque chose qui exécute votre tâche. Il peut s'agir d'une personne, d'une équipe, d'une entreprise sous-traitante ou d'un équipement. |
| **Material**      | Éléments utilisés pour réaliser votre tâche, tels que des matériaux, des ingrédients ou des composants. |
| **Cost**          | Coûts pouvant être appliqués à plusieurs tâches, tels que des frais de livraison, des frais de déploiement ou tout coût fixe. |

Seules les ressources de travail, lorsqu'elles sont affectées à des tâches, influencent la planification.

Tous les types de ressources affectent le calcul des coûts si le champ **Cost** de la ressource est renseigné.

## Unités maximales

Les ressources de travail possèdent une propriété **Max Units** (100 % par défaut) qui représente la capacité disponible de la ressource. Par exemple :

- **100 %** — Une ressource à temps plein
- **50 %** — Une ressource à temps partiel (disponible la moitié du temps)
- **300 %** — Une équipe de 3 membres à temps plein représentée comme une seule ressource

Les unités maximales sont utilisées par la [détection de surallocation](/fr/adjusting-schedule/leveling/index.md#overallocated-resources) et le [nivellement automatique](/fr/adjusting-schedule/leveling/index.md#auto-leveling) pour déterminer si une ressource a plus de travail qu'elle ne peut en gérer. Lors de l'affectation d'une ressource de travail à une tâche, les unités d'affectation par défaut correspondent aux unités maximales de la ressource.

## Périodes de disponibilité des ressources

La disponibilité d'une ressource de travail peut évoluer dans le temps. Par exemple, un membre de l'équipe peut être à temps plein pendant les trois premiers mois, puis passer à temps partiel.

Dans l'onglet **Availability** de la boîte de dialogue **Resource Properties**, vous pouvez définir plusieurs périodes de disponibilité, chacune avec une plage de dates et un pourcentage de disponibilité. Pour les dates comprises dans une période définie, les unités de la période remplacent les unités maximales de base de la ressource pour les calculs de capacité.

## Ressources génériques

Une ressource peut être marquée comme **Generic** à l'aide de la case à cocher dans la boîte de dialogue **Resource Properties**. Les ressources génériques sont des espaces réservés qui représentent un rôle (par ex., « Développeur », « Designer ») plutôt qu'une personne spécifique. Elles sont utiles lors de la planification initiale lorsque les membres spécifiques de l'équipe ne sont pas encore identifiés.

Les ressources génériques sont signalées par une icône de badge dans la liste des ressources. L'indicateur générique est purement informatif — il n'affecte ni la planification ni le calcul des coûts.

## Type de réservation

Chaque ressource possède un **Booking Type** qui peut être défini sur **Committed** (par défaut) ou **Proposed** dans la boîte de dialogue **Resource Properties**.

- **Committed** — La ressource est fermement réservée pour le projet.
- **Proposed** — La ressource est affectée à titre provisoire à des fins de planification.

Par défaut, le nivellement automatique exclut les ressources proposées. Vous pouvez les inclure en activant l'option « Level resources with the proposed booking type » dans la boîte de dialogue [Leveling Options](/fr/adjusting-schedule/leveling/index.md#leveling-options).
