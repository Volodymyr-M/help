# Codes WBS

Chaque tâche possède un code **WBS** — son adresse dans la hiérarchie. Par défaut, il s'agit du simple numéro hiérarchique : `1`, `1.1`, `1.2`, `1.2.1`. Affichez-le en activant la colonne **WBS** dans le tableau des tâches.

Un **masque de code WBS** remplace ces numéros hiérarchiques par un code structuré que vous concevez vous-même, de sorte que les tâches s'affichent comme `PROJ-A-01` ou `1.A.001` au lieu de `1.1.1`. Les organisations qui disposent d'une norme de numérotation — un contrat, un schéma de codes de coûts, le format de reporting d'un client — l'utilisent pour que les codes d'Ingantt s'y conforment.

Ouvrez **Project → WBS Code Definition** pour en configurer un.

## Codes WBS et codes hiérarchiques : deux choses différentes

- Un **code WBS** est structurel. Il y en a exactement un par tâche et il est dérivé de la position de la tâche dans la hiérarchie. Il se renumérote de lui-même lorsque vous déplacez des tâches.
- Un **[code hiérarchique](/fr/adjusting-schedule/custom-fields/index.md)** est une étiquette. Vous définissez une table de correspondance — département, phase, centre de coûts — et vous en attribuez les valeurs aux tâches indépendamment de la hiérarchie. Une tâche peut en porter plusieurs, issus de plusieurs codes hiérarchiques.

## Définir le masque

La boîte de dialogue comporte trois parties.

### Préfixe du code projet

Texte fixe placé devant chaque code du projet. Avec le préfixe `PROJ`, les codes s'affichent comme `PROJ.1.1` ou `PROJ-A-01` selon vos séparateurs. Laissez-le vide pour ne pas avoir de préfixe.

### Masque de code

Une ligne par niveau hiérarchique, ajoutée avec **Add Level**. Chaque ligne définit :

| Champ | Rôle |
|-------|--------------|
| **Level** | La profondeur hiérarchique à laquelle cette ligne s'applique. Le niveau 1 correspond aux tâches de premier niveau, le niveau 2 à leurs enfants, et ainsi de suite. |
| **Sequence** | Les caractères utilisés à ce niveau : **Numbers** (1, 2, 3), **Uppercase Letters** (A, B, C … Z, AA), **Lowercase Letters** (a, b, c … z, aa) ou **Characters**. |
| **Length** | Nombre maximal de caractères à ce niveau. Laissez-le vide — il affiche *Any* — pour ne pas imposer de limite. |
| **Separator** | Le caractère entre ce niveau et le suivant, par exemple `.` ou `-`. |

Deux points méritent d'être connus sur le comportement des champs :

- **La longueur complète les nombres avec des zéros à gauche.** Une longueur de `3` sur un niveau Numbers transforme la neuvième tâche en `009`. Elle ne complète pas les niveaux à base de lettres.
- **Characters** se comporte comme Numbers pour les codes générés par Ingantt. Cette option existe pour la compatibilité avec Microsoft Project, où elle désigne un niveau que vous saisissez vous-même.

Vous n'avez pas à définir chaque niveau. **Les niveaux plus profonds que la dernière ligne de votre masque reviennent à un nombre avec un séparateur `.`**, de sorte qu'un masque de trois lignes sur un planning à cinq niveaux produit tout de même un code complet.

### Options

**Generate WBS code for new task** et **Verify uniqueness of new WBS codes** sont stockés avec le projet et conservés lors d'un aller-retour avec Microsoft Project. Dans Ingantt, un masque comportant au moins un niveau est appliqué automatiquement à chaque tâche, et les codes sont uniques par construction puisqu'ils suivent la hiérarchie.

## Ce qui se passe lorsque vous enregistrez le masque

Ingantt renumérote immédiatement l'ensemble du projet. Les codes sont reconstruits à partir de la hiérarchie à chaque changement de structure — lorsque vous ajoutez, supprimez ou déplacez une tâche, ou que vous augmentez ou diminuez son indentation — de sorte qu'ils décrivent toujours la position actuelle de la tâche.

Il vaut la peine de le dire clairement : **un code WBS n'est pas un identifiant permanent d'une tâche.** Déplacez une tâche et son code change. Si vous avez besoin d'une étiquette qui suit une tâche, utilisez plutôt un code hiérarchique ou un [champ personnalisé de type texte](/fr/adjusting-schedule/custom-fields/index.md).

## Import et export

Le masque fait partie du format Microsoft Project et survit à un aller-retour. Un projet importé avec un masque le conserve, l'exporte avec lui, et ses codes de tâches correspondent à ceux produits par Microsoft Project.
