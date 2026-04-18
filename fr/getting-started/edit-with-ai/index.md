# Modifier avec l'IA

Connectez votre projet à un assistant de codage IA comme Claude Code, Codex ou tout outil disposant d'un accès HTTP, et laissez-le apporter des modifications à votre planning en temps réel. Pendant que la session est active, l'IA peut lire votre projet actuel, ajouter ou modifier des tâches, ajuster les dépendances, affecter des ressources et renvoyer les mises à jour — vous voyez chaque changement dans le diagramme de Gantt au moment même où il est appliqué.

> **Modifier avec l'IA est actuellement en bêta.** La fonctionnalité est disponible dans la version web d'Ingantt.

## Démarrer une session d'édition IA

1. Ouvrez le projet que vous souhaitez modifier.
2. Cliquez sur l'icône **Modifier avec l'IA** (✨) dans le coin supérieur droit, à côté du bouton d'historique des versions.
3. La boîte de dialogue affiche un ensemble d'instructions décrivant comment votre outil IA doit lire et écrire le projet.
4. Cliquez sur **Copier les instructions**. Cela démarre la session d'édition et copie les instructions dans votre presse-papiers.
5. Collez les instructions dans votre outil IA (par exemple, comme premier message dans une conversation Claude Code ou Codex).
6. Demandez à l'IA d'effectuer des modifications en langage naturel — par exemple, _« ajouter une phase de QA de deux semaines après le développement »_ ou _« affecter Alex à toutes les tâches de conception »_.

L'IA suit les instructions pour récupérer le YAML actuel, le modifier et renvoyer le résultat à Ingantt. Ingantt valide chaque modification avant de l'accepter.

## Ce qui se passe pendant une session

- **Le point vert** à côté de l'icône ✨ indique une session active. Le point devient ambre lorsque la connexion se rétablit, et rouge lorsque la session a rencontré une erreur.
- **Chaque modification de l'IA est validée** par rapport aux règles de projet d'Ingantt avant d'être appliquée. Si l'IA envoie des données invalides, Ingantt rejette la modification et indique à l'IA ce qui n'a pas fonctionné afin qu'elle puisse s'auto-corriger.
- **Vos propres modifications sont également transmises à la session.** Si vous modifiez quelque chose dans l'interface d'Ingantt pendant que la session est active, l'IA verra votre mise à jour lors de sa prochaine lecture.
- **Le planificateur reste l'autorité.** Lorsque l'IA définit des dates ou des durées, Ingantt relance la méthode du chemin critique pour calculer le planning final, ce qui peut décaler d'autres tâches.

## Arrêter la session

Cliquez sur l'icône ✨ pendant qu'une session est active et choisissez **Arrêter la session**. Vous pouvez également simplement fermer l'onglet du navigateur — la session se termine automatiquement après une période d'inactivité.

## Outils IA pris en charge

Tout outil IA capable d'effectuer des requêtes HTTP fonctionne avec Modifier avec l'IA. Les choix courants incluent :

- **Claude Code** — collez les instructions comme premier message dans une conversation.
- **Codex** — collez les instructions comme premier message dans une conversation.
- **Autres outils** — tout assistant ayant accès à `curl` ou à un client HTTP peut lire et écrire dans la session.

## Conseils

- Gardez l'onglet Ingantt ouvert pendant que la session est active. Si l'onglet est fermé, l'IA recevra une erreur « session non connectée » lors de sa prochaine écriture.
- Si l'IA envoie du YAML invalide, vous verrez une notification dans l'interface d'Ingantt. L'IA reçoit les détails de l'erreur et corrige généralement le problème lors de son prochain essai.
- Pour les grands projets, commencez par une demande ciblée (_« réorganiser la phase de tests »_) plutôt que par des changements globaux — l'IA peut itérer en petites étapes avec un retour immédiat.
- L'IA ne peut pas voir les informations qu'on ne lui donne pas. Si votre demande dépend du contexte — contraintes, échéances ou règles métier — incluez-le dans votre prompt.
