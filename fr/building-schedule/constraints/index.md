# Contraintes

Certaines tâches doivent commencer ou se terminer à des dates précises — une livraison arrive mardi, un permis expire vendredi. Les contraintes vous permettent de verrouiller les dates là où c'est nécessaire tout en gardant le reste du planning flexible.

## Fonctionnement des contraintes

Conjointement avec les dépendances entre tâches (liens de prédécesseurs), la contrainte d'une tâche définit comment celle-ci est planifiée.

Les contraintes sont définies dans l'onglet **Avancé** de la boîte de dialogue **Propriétés de la tâche**. La contrainte par défaut est **Dès que possible**. Cela signifie que la tâche est placée aussi près que possible de la date de début du projet, en tenant compte des dépendances avec les autres tâches. Pour les projets planifiés à partir de la date de fin, la contrainte par défaut est **Le plus tard possible**.

Il existe deux contraintes qui forcent la tâche à commencer ou à se terminer à la date spécifiée, indépendamment des dépendances. Ces contraintes sont appelées _contraintes strictes_ et sont **Doit commencer le** et **Doit finir le**. N'utilisez ces contraintes que si vous êtes certain qu'elles sont nécessaires.

Les autres contraintes (**Début pas avant**, **Début pas après**, **Fin pas avant** et **Fin pas après**) sont dites _flexibles_, car elles respectent les dépendances entre tâches. Si les dépendances repoussent la tâche au-delà de la date de contrainte, la date imposée par la dépendance prévaut.

| Contrainte                 | Description                                                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **Dès que possible**    | La tâche est planifiée dès que les prédécesseurs le permettent. Si aucun prédécesseur n'est lié, la tâche commence au début de sa tâche récapitulative parente. |
| **Le plus tard possible**    | La tâche est planifiée aussi tard que les prédécesseurs le permettent. Si aucun prédécesseur n'est lié, la tâche se termine à la fin de sa tâche récapitulative parente. |
| **Début pas avant**  | Si la tâche commence plus tard que la date spécifiée en raison des prédécesseurs, rien ne change. Sinon, la tâche est planifiée pour commencer à la date spécifiée. |
| **Début pas après**    | Si les prédécesseurs repoussent la tâche au-delà de la date de contrainte, la date imposée par la dépendance prévaut. Sinon, la tâche est planifiée pour commencer au plus tard à la date spécifiée. |
| **Fin pas avant** | Si la tâche se termine plus tard que la date spécifiée en raison des prédécesseurs, rien ne change. Sinon, la tâche est planifiée pour se terminer à la date spécifiée. |
| **Fin pas après**   | Si les prédécesseurs repoussent la tâche au-delà de la date de contrainte, la date imposée par la dépendance prévaut. Sinon, la tâche est planifiée pour se terminer au plus tard à la date spécifiée. |
| **Doit commencer le**          | La date de début de la tâche est planifiée exactement comme spécifié, indépendamment des prédécesseurs.                                      |
| **Doit finir le**         | La date de fin de la tâche est planifiée exactement comme spécifié, indépendamment des prédécesseurs.                                        |

Les tâches avec une contrainte flexible ou stricte affichent une icône spéciale dans la liste des tâches.

> Conservez la plupart des tâches avec la contrainte **Dès que possible** et n'utilisez les contraintes flexibles que pour les tâches qui doivent commencer ou se terminer à proximité d'une date précise.
