# Configuration des coûts

Définissez des coûts fixes sur les tâches et des taux sur les ressources. Ingantt les utilise conjointement avec le planning pour calculer le coût de chaque tâche et de l'ensemble du projet.

## Coût fixe de la tâche

Vous pouvez définir un coût pour la tâche indépendamment de ses ressources en renseignant le champ **Coût fixe** dans l'onglet **Coût et VA** de la boîte de dialogue **Propriétés de la tâche**. Utilisez-le par exemple lorsque quelqu'un a déjà fourni une estimation du coût total de la tâche, ou lorsque la tâche comporte un coût supplémentaire au-delà de ses coûts de ressources.

> Si vous devez affecter le même coût fixe à plusieurs tâches, envisagez de créer une ressource de coût et de l'affecter à ces tâches. Si le coût change ultérieurement, vous n'aurez besoin de le mettre à jour qu'à un seul endroit.

## Coût des ressources de travail

Les ressources de type **Travail** sont les seules à disposer d'un calendrier, leur coût est donc spécifié par heure, par jour, par semaine ou par mois (voir [Heures par jour, jours par semaine, jours par mois](/fr/setting-up-project/project/index.md#heures-par-jour-jours-par-semaine-jours-par-mois)).

Par exemple, lorsque vous affectez une ressource de travail avec un **Taux standard** de 100 $ par heure à une tâche d'une **Durée** de 5 heures, 500 $ sont ajoutés au **Coût** de la tâche.

Les ressources de travail prennent également en charge un **Taux heures sup** pour le travail effectué en dehors des heures normales du calendrier. Le coût total est calculé ainsi :

> **Coût = Travail normal × Taux standard + Heures supplémentaires × Taux des heures supplémentaires + Coût par utilisation**

Lorsqu'une ressource de travail est affectée à une tâche, vous pouvez spécifier la valeur **Unités** comme un nombre différent de la valeur par défaut. Cela impacte le calcul des coûts. Par exemple, si **Unités** est de 50 %, le coût calculé pour la ressource dans la tâche est la moitié de ce qu'il serait avec 100 % d'unités.

## Coût des ressources matérielles

Pour les ressources **Matériel**, le coût est spécifié par unité en fonction de la manière dont vous définissez l'unité. Il peut s'agir d'une unité de poids (par ex., livre, kilogramme, tonne), de longueur ou de volume (par ex., pied, mètre, mile, gallon, litre), ou de toute autre mesure (par ex., conteneur, boîte, pièce, mètre carré). Vous pouvez définir une **Étiquette matériau** dans la boîte de dialogue **Propriétés de la ressource** pour décrire l'unité.

Les ressources matérielles prennent en charge deux modes de consommation :
- **Fixed** (par défaut) — Une quantité totale indépendante de la durée de la tâche (par ex., 5 tonnes de ciment)
- **Variable** — Un taux par unité de temps proportionnel à la durée de la tâche (par ex., 10 litres de carburant par jour)

Par exemple, si du carburant est utilisé dans votre projet, vous pouvez ajouter une ressource matérielle « carburant » et spécifier le coût par gallon dans la boîte de dialogue **Propriétés de la ressource**. Ensuite, lors de l'affectation de la ressource à une tâche, vous indiquez le nombre de gallons dans **Unités**, et Ingantt ajoute le coût calculé du carburant au **Coût** de la tâche.

## Ressource de coût

Une ressource de type **Coût** est une dépense fixe que vous pouvez affecter à plusieurs tâches. Les ressources de coût prennent en charge des valeurs de coût par affectation — la même ressource de coût peut avoir des montants différents selon les affectations de tâches (par ex., « Déplacement » = 800 $ pour la tâche A et 1 200 $ pour la tâche B).

Utilisez ce type pour les dépenses fixes qui ne sont pas habituellement exprimées en unités de mesure, comme les frais d'installation. Si plusieurs tâches ont le même coût fixe pour la même raison, créez une ressource de coût et affectez-la à toutes ces tâches plutôt que de renseigner le champ **Coût fixe** pour chaque tâche séparément.

## Tables de taux

Chaque ressource de travail et matérielle prend en charge jusqu'à 5 tables de taux de coûts (A à E), chacune comportant plusieurs lignes qui entrent en vigueur à des dates différentes. Cela vous permet de modéliser les évolutions de taux dans le temps ou de maintenir différents ensembles de taux pour différents types de travail.

Les tables de taux sont configurées dans l'onglet **Coûts** de la boîte de dialogue **Propriétés de la ressource**. Lors de l'affectation d'une ressource à une tâche, vous pouvez sélectionner la table de taux à utiliser dans la boîte de dialogue **Modifier l'affectation de ressource**.

## Coût par utilisation

Les ressources prennent en charge un champ **Coût par utilisation** — un montant forfaitaire facturé chaque fois que la ressource est affectée à une tâche, quel que soit le volume de travail effectué. Pour les ressources de travail, le **Coût par utilisation** est multiplié par les unités d'affectation (par ex., 200 % d'unités signifie que le coût par utilisation est facturé deux fois). Le **Coût par utilisation** est toujours comptabilisé au début de la tâche.

## Comptabilisation des coûts

Le paramètre **Allocation des coûts** contrôle le moment où les coûts sont comptabilisés en tant que coûts réels à mesure que le travail progresse :

| Comptabilisation | Moment de la comptabilisation des coûts |
|---------|--------------------------|
| **Début** | Coût total dès qu'un avancement est enregistré (% d'achèvement > 0 %) |
| **Proportion** | Proportionnel au pourcentage d'achèvement (par ex., 50 % achevé = 50 % du coût) |
| **Fin** | Coût total uniquement lorsque la tâche atteint 100 % d'achèvement |

Les ressources disposent d'un paramètre **Allocation des coûts** dans l'onglet **Coûts** de la boîte de dialogue **Propriétés de la ressource**. Les tâches disposent d'un paramètre **Allocation de coût fixe** dans l'onglet **Coût et VA** de la boîte de dialogue **Propriétés de la tâche**. Le projet dispose d'un paramètre **Allocation des coûts fixes par défaut** dans l'onglet **Autre** de la boîte de dialogue **Propriétés du projet**.
