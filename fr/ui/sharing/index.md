# Partager un projet

Un projet Ingantt stocké dans Google Drive peut être partagé de la même manière que n'importe quel autre fichier Drive — avec des personnes nommées, avec votre organisation, ou avec quiconque dispose du lien. Sur le web, vous faites tout cela depuis Ingantt.

## Avant de commencer

Le partage ne fonctionne que pour les fichiers Google Drive. Vous devez être connecté avec Google et le projet doit être enregistré dans Drive ; un projet qui se trouve dans un fichier local sur votre appareil n'a rien à partager. Voir [Enregistrer votre projet](/fr/getting-started/saving/index.md).

> Le bouton **Share** fait partie d'Ingantt pour Web. Sur Android, iOS, Windows et macOS, partagez plutôt le fichier depuis Google Drive — ouvrez Drive, trouvez le fichier Ingantt et utilisez la commande **Share** de Drive. Le résultat est identique, car les autorisations sont dans tous les cas portées par le fichier Drive.

## Partager avec des personnes spécifiques

1. Ouvrez le projet et cliquez sur **Share** dans l'en-tête, ou choisissez **Share** dans le menu **File**. La boîte de dialogue **Share on Google Drive** s'ouvre.
2. Sous **People with access**, vous voyez toutes les personnes qui ont déjà accès, les propriétaires en premier.
3. Cliquez sur **Add**, saisissez l'adresse e-mail de la personne, choisissez le rôle que vous souhaitez lui attribuer et confirmez.
4. Fermez la boîte de dialogue. Ingantt enregistre les nouvelles autorisations dans Drive et confirme avec *Access updated*.

Les rôles sont ceux de Google Drive :

| Rôle | Ce qu'il permet |
|------|------------------|
| **Viewer** | Ouvrir le projet et le consulter. Ne peut pas enregistrer de modifications. |
| **Commenter** | Comme Viewer, plus la possibilité de commenter le fichier dans Google Drive. Ne peut pas enregistrer de modifications. |
| **Editor** | Ouvrir le projet et y enregistrer des modifications. |
| **Owner** | Tout, y compris supprimer le fichier et transférer la propriété. |

Pour changer le rôle d'une personne, choisissez un autre rôle à côté de son nom. Pour la retirer, supprimez sa ligne.

> Saisissez une adresse avec laquelle la personne peut réellement se connecter à Google. Si Ingantt ne peut pas confirmer que l'adresse correspond à Gmail ou Google Workspace, il vous avertit, car un partage Drive vers une adresse sans compte Google derrière ne lui permettra pas d'ouvrir le projet.

## Accès général — liens et organisations

**General access** contrôle tous ceux que vous n'avez pas nommés individuellement :

- **Restricted** — uniquement les personnes listées sous **People with access**. C'est la valeur par défaut.
- **Anyone with the link** — toute personne disposant du lien, avec le rôle que vous choisissez (Viewer, Commenter ou Editor).
- **Domain** — toutes les personnes de votre organisation Google Workspace, avec le rôle que vous choisissez. Cette option n'apparaît que lorsque le propriétaire du projet est sur un domaine Workspace ; elle n'est pas proposée pour les comptes Gmail personnels.

**Copy link** copie le lien Google Drive du projet. Toute personne dont l'accès le permet peut ouvrir ce lien et modifier le planning dans Ingantt.

L'info-bulle du bouton **Share** vous indique l'état actuel d'un coup d'œil — *Private — only you can access*, *Shared with specific people*, *Anyone with the link can view/comment/edit*, ou l'équivalent pour votre domaine.

## Qui est autorisé à modifier l'accès

Seul le **propriétaire** du fichier peut toujours gérer l'accès. Un **éditeur** peut également gérer l'accès, sauf si le propriétaire a désactivé cette possibilité dans Google Drive.

Si vous ouvrez la boîte de dialogue sur un projet partagé avec vous en tant que lecteur ou commentateur, elle indique **You are a viewer and cannot manage access** et affiche l'accès général actuel sans vous permettre de le modifier. Demandez au propriétaire si vous avez besoin de davantage.

## Travailler sur un projet partagé

- Tout le monde ouvre le même fichier Drive, mais Ingantt n'est pas un outil d'édition collaborative en temps réel. Chaque enregistrement écrit le fichier de projet entier ; si deux personnes ont le planning ouvert et enregistrent toutes les deux, le dernier enregistrement l'emporte et les modifications de l'autre personne sont remplacées. Convenez de qui modifie avant de commencer, et consultez l'historique des versions du fichier dans Google Drive si vous pensez que quelque chose a été perdu.
- Un lecteur ou un commentateur qui tente d'enregistrer voit **You are a viewer and cannot save**. Utilisez plutôt **Save file as** pour conserver une copie personnelle.
- Chaque collaborateur a besoin de son propre abonnement ou essai Ingantt actif pour modifier — partager un planning ne partage pas votre abonnement. Voir [Abonnements et paiement](/fr/account/subscription/index.md).
- Le partage avec une adresse de **groupe** Google n'est pas pris en charge par la boîte de dialogue Share d'Ingantt. Partagez avec des adresses individuelles, ou gérez un partage de groupe depuis Google Drive.

## Voir aussi

- [Intégration Google Drive](/fr/ui/files/index.md) — connexion, autorisations et ouverture des fichiers partagés.
- [Enregistrer votre projet](/fr/getting-started/saving/index.md) — où un projet est stocké et quand il est enregistré.
