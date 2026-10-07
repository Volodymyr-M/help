# Travailler hors ligne

Désactivez l'enregistrement automatique pour que rien ne soit écrit dans Google Drive tant que vous n'enregistrez pas délibérément — utile lorsque vous êtes sur le point de perdre votre connexion.

Sur la version **Web**, l'entrée de menu est **Fichier → Travailler hors ligne (sans enregistrement automatique)**. Sur Windows, macOS, Android et iOS, le même interrupteur s'appelle **Activer l'enregistrement automatique**.

## Ce que fait Travailler hors ligne

**Fichier → Travailler hors ligne** désactive l'enregistrement automatique pour l'onglet actuel. C'est tout. Tant qu'il est activé, Ingantt cesse d'écrire votre projet dans Google Drive toutes les 20 secondes, et rien ne quitte votre navigateur tant que vous n'enregistrez pas.

Son activation affiche un rappel unique :

> Offline mode is on. Remember to save your changes manually before closing the tab.

Prenez-le au pied de la lettre. **Ingantt ne met pas vos modifications en file d'attente et ne les envoie pas lorsque vous revenez en ligne.** Il n'y a pas de synchronisation en arrière-plan. Si vous fermez ou rechargez l'onglet sans enregistrer, le travail effectué depuis le dernier enregistrement est perdu.

## Enregistrer pendant que vous êtes hors ligne

Vous ne pouvez pas enregistrer dans Google Drive sans connexion, la séquence qui fonctionne est donc la suivante :

1. Ouvrez le planning tant que vous avez encore une connexion.
2. Activez **Fichier → Travailler hors ligne**.
3. Modifiez normalement. Tout se passe dans le navigateur — le planning se recalcule, annuler et rétablir fonctionnent, rien n'est envoyé nulle part.
4. Une fois de retour en ligne, désactivez **Travailler hors ligne**, puis appuyez sur **Enregistrer** (ou `Ctrl`/`Cmd` + `S`). C'est cette étape qui place votre travail dans Drive.
5. L'enregistrement automatique reprend à partir de là.

Si vous préférez ne pas compter sur votre mémoire pour l'étape 4, exportez une copie avant de perdre la connexion : **Fichier → Exporter → XML** télécharge le planning sur votre appareil, et vous pourrez rouvrir ce fichier plus tard.

## Le bouton Save vous indique où vous en êtes

Le bouton Save de la barre d'outils est l'indicateur à surveiller :

| Ce qu'il affiche | Ce que cela signifie |
|---------------|---------------|
| **Fichier enregistré sur Google Drive** | Tout est dans Drive. |
| **Enregistrement automatique en attente…** | Il y a des modifications non enregistrées ; l'enregistrement automatique s'en chargera sous peu. |
| **Enregistrement…** | Un enregistrement est en cours. |
| **Enregistrer le fichier sur Google Drive** | Il y a des modifications non enregistrées et l'enregistrement automatique est désactivé — vous devez enregistrer. |
| **Erreur lors de l'enregistrement sur Google Drive** | Un enregistrement a été tenté et a échoué. Vos modifications sont toujours dans l'onglet et toujours non enregistrées. |

L'état d'erreur est ce que vous voyez si l'enregistrement automatique s'exécute alors que la connexion est coupée : l'enregistrement échoue, le bouton devient rouge et le projet reste non enregistré dans l'onglet. Rien n'est perdu à cet instant, mais rien n'est en sécurité non plus — reconnectez-vous et enregistrez.

## Différences entre plateformes

- **Le réglage n'est pas conservé sur le Web.** Il est propre à l'onglet et à la session. Ouvrez un nouvel onglet ou rechargez, et l'enregistrement automatique est de nouveau activé. C'est voulu — l'enregistrement automatique activé est le choix par défaut le plus sûr, afin qu'un interrupteur hors ligne oublié ne puisse pas vous suivre. Sur Windows, macOS, Android et iOS, le réglage d'enregistrement automatique *est* mémorisé.
- **Les valeurs par défaut diffèrent.** Sur le Web, l'enregistrement automatique est activé d'emblée. Sur les versions de bureau et mobiles, il est désactivé d'emblée, et la même entrée de menu s'intitule **Activer l'enregistrement automatique**.
- **Un projet que vous n'avez pas encore enregistré n'est pas enregistré automatiquement du tout**, mode hors ligne ou non. L'enregistrement automatique ne peut mettre à jour qu'un fichier qui existe déjà dans Drive. Enregistrez une fois, et l'enregistrement automatique prend le relais.
- **Un fichier ouvert depuis votre appareil sur la version Web n'est jamais enregistré automatiquement.** Ingantt pour Web ne peut pas réécrire dans un fichier sur votre disque. Enregistrez-le dans [Google Drive](/fr/ui/files/index.md) pour bénéficier de l'enregistrement automatique.

## Travailler hors ligne et Modifier avec l'IA

Si vous utilisez [Modifier avec l'IA](/fr/getting-started/edit-with-ai/index.md) alors que l'enregistrement automatique est désactivé, Ingantt vous avertit. Les modifications de l'IA sont appliquées au projet ouvert comme des modifications ordinaires, annulables — elles ne sont pas enregistrées d'elles-mêmes. Fermez l'onglet sans enregistrer et le travail de l'IA disparaît avec lui, exactement comme toute modification manuelle.

## Ce qui n'est pas pris en charge

Pour être clair sur ce à quoi vous attendre :

- Ingantt ne détecte pas que vous êtes passé hors ligne ou revenu en ligne.
- Ingantt ne met pas en file d'attente les modifications effectuées hors ligne pour les rejouer à la reconnexion.
- Il n'y a pas de résolution des conflits de synchronisation, car il n'y a pas de synchronisation. Si un collègue et vous modifiez tous deux le même fichier Drive, le dernier enregistrement l'emporte — le fichier entier, pas une fusion tâche par tâche.
- Ouvrir un planning pour la première fois nécessite une connexion. Travailler hors ligne garde modifiable un planning que vous avez déjà ouvert ; cela ne vous permet pas d'en ouvrir un nouveau.
