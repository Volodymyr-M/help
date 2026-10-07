# Intégration Google Drive

Ingantt stocke vos fichiers de projet dans Google Drive afin que vous puissiez y accéder depuis n'importe quel appareil. Cet article couvre la connexion, les autorisations demandées par Ingantt, la manière dont Drive et Ingantt fonctionnent ensemble, et ce qu'il faut faire lorsque la connexion Google ne se comporte pas comme prévu.

## Se connecter à Google

Sur l'écran des projets, cliquez sur **Se connecter avec Google**. Une boîte de dialogue Google standard s'ouvre et demande les autorisations ci-dessous. Vous pouvez vous déconnecter à tout moment avec **Se déconnecter de Google**.

Ingantt demande les autorisations suivantes :

- **See your profile info** — Utilisé pour identifier votre compte.
- **Connect itself to your Google Drive** — Version **Web** uniquement. Vous permet de créer ou d'ouvrir des fichiers Ingantt depuis l'interface web de Google Drive (bouton **Nouveau** ou menu **Open with**).
- **See, edit, create, and delete only the specific Google Drive files you use with this app** — Permet à Ingantt de créer et de modifier ses propres fichiers dans votre Google Drive. Ingantt ne peut pas accéder à vos autres fichiers.

> La troisième autorisation correspond à la portée restreinte de Google Drive : Ingantt ne voit jamais que les fichiers que vous avez créés dans Ingantt ou ouverts avec lui. Le reste de votre Drive reste invisible pour Ingantt, ce qui explique aussi pourquoi Ingantt ne peut pas parcourir vos dossiers Drive à votre place.

## Créer et ouvrir des projets dans Google Drive

Une fois connecté, l'écran des projets est votre Drive :

- **Projets récents** — les projets que vous avez ouverts le plus récemment, regroupés par date.
- **Partagés avec moi** — les fichiers Ingantt que d'autres personnes ont partagés avec vous.
- **Favoris** — les projets que vous avez marqués avec **Ajouter aux Favoris**.
- **Corbeille** — les projets que vous avez placés dans la corbeille. Utilisez **Restaurer** pour en récupérer un.

Utilisez **Ouvrir** → **Ouvrir depuis Google Drive** pour choisir un fichier existant, ou l'onglet **Envoyer** de cette boîte de dialogue pour rechercher un fichier sur votre appareil ou en glisser un. Les fichiers Microsoft Project, Primavera et les autres formats pris en charge peuvent être ouverts de cette façon — voir [Import et export](/fr/getting-started/import-export/index.md).

Les nouveaux projets se créent depuis **Nouveau** sur l'écran des projets : **Nouveau projet**, **Nouveau avec IA** ou **Nouveau depuis modèle**. Lorsque vous êtes connecté sur le web, un nouveau projet est immédiatement destiné à Google Drive et enregistré automatiquement à partir de ce moment.

> **Un fichier manque dans « Shared with me » ?** Google exige que vous ouvriez d'abord un fichier partagé depuis Google Drive. Faites un clic droit sur le fichier à cet endroit et choisissez **Open with** → **Ingantt**. Il apparaît alors dans la liste.

## Utiliser Ingantt depuis l'interface de Google Drive (web)

Sur le web, Ingantt peut être lancé depuis Drive plutôt que l'inverse. C'est à cela que sert l'autorisation **Connect itself to your Google Drive** : en l'accordant lorsque vous vous connectez à Ingantt, vous enregistrez Ingantt comme application Drive pour votre compte, et il apparaît dans le menu **Nouveau** de Drive ainsi que dans le menu **Open with** des fichiers Ingantt. Ajouter Ingantt depuis le [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"} produit le même résultat ; les deux ne sont pas nécessaires.

- **Nouveau** → **More** → **Ingantt** crée un nouveau projet Ingantt dans le dossier Drive où vous vous trouvez.
- Clic droit sur un fichier Ingantt → **Open with** → **Ingantt** l'ouvre dans Ingantt pour Web.

Dans les deux cas, Drive ouvre `web.ingantt.com` et lui transmet le dossier ou le fichier à utiliser, de sorte que vous arrivez directement dans le bon projet.

## Résoudre les problèmes de connexion à Google (web)

**Google Drive ne propose pas Ingantt dans ses menus New ou Open with.** Déconnectez-vous de Google dans Ingantt, reconnectez-vous et assurez-vous d'accorder l'autorisation **Connect itself to your Google Drive** sur l'écran de consentement ; Google n'ajoute les entrées de menu Drive qu'une fois cette autorisation accordée, et il est facile de la sauter. Ajouter Ingantt depuis le Google Workspace Marketplace accorde la même autorisation. Rechargez ensuite Drive. Si vous utilisez un compte Google Workspace de votre entreprise ou de votre école, votre administrateur a peut-être désactivé les applications Drive tierces ou restreint les installations depuis le Marketplace.

**Un fichier que quelqu'un a partagé avec vous n'est pas dans « Shared with me ».** Ouvrez-le une fois depuis Google Drive avec **Open with** → **Ingantt**. Comme Ingantt n'a accès qu'aux fichiers que vous utilisez avec Ingantt, un fichier partagé lui reste invisible tant que vous ne l'avez pas ouvert de cette façon au moins une fois.

**« Erreur lors de l'enregistrement sur Google Drive ».** Vérifiez d'abord votre connexion. Si le problème persiste, déconnectez-vous de Google et reconnectez-vous — la connexion a peut-être expiré ou perdu une autorisation.

**« Could not sign in to Google. »** Si vous utilisez plusieurs comptes Google, assurez-vous que la fenêtre contextuelle se connecte avec le compte qui possède vos projets. Les extensions de navigateur qui bloquent les cookies tiers ou les fenêtres contextuelles peuvent également empêcher la boîte de dialogue Google d'aboutir.

Toujours bloqué ? [Contactez le support](mailto:support@ingantt.com) et indiquez-nous votre plateforme, votre navigateur et le message exact que vous voyez.

## Vidéo de présentation

[Utiliser Ingantt pour Web avec Google Drive](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## Voir aussi

- [Enregistrer votre projet](/fr/getting-started/saving/index.md) — destinations, enregistrement automatique et travail hors ligne.
- [Partager un projet](/fr/ui/sharing/index.md) — donner à d'autres personnes l'accès à un planning.
