# Enregistrer votre projet

Ingantt enregistre votre projet soit dans un fichier sur votre appareil, soit dans un fichier de votre Google Drive. L'enregistrement automatique maintient ensuite ce fichier à jour pendant que vous travaillez. Cet article explique quelle destination vous obtenez, quand l'enregistrement automatique s'applique, et le seul cas où il ne le peut pas.

## Enregistrer pour la première fois

Cliquez sur le bouton **Save** dans la barre d'outils, ou utilisez **Save file** dans le menu **File**.

Si le projet n'a jamais été enregistré, Ingantt vous demande où il doit aller. **Save project as** propose deux destinations :

- **Save to new local file** — un fichier sur votre appareil.
- **Save to new Google Drive file** — un fichier dans votre Google Drive. Nécessite une connexion avec Google.

Vous pouvez changer de destination plus tard avec **Save file as** dans le menu **File**, qui crée toujours un nouveau fichier et continue à travailler dedans.

Votre projet est enregistré dans un format XML entièrement compatible avec Microsoft Project. Rien dans votre planning ne vous lie à Ingantt.

> Sur le web, si vous êtes déjà connecté à Google lorsque vous créez un projet, Ingantt choisit Google Drive pour vous et nomme le fichier d'après le projet. Vous n'avez pas besoin d'enregistrer une première fois pour que l'enregistrement automatique se mette en marche, et renommer le projet renomme le fichier Drive.

## Enregistrement automatique

Lorsque l'enregistrement automatique est activé, Ingantt écrit chaque modification dans le fichier existant du projet en arrière-plan, environ toutes les 20 secondes, et uniquement lorsqu'il y a quelque chose de non enregistré. Il écrit toujours vers la destination que le projet possède déjà — il n'en choisit jamais une nouvelle.

Son activation par défaut dépend de la plateforme :

| Plateforme | Enregistrement automatique par défaut | Où le modifier |
|----------|--------------------|--------------------|
| **Web** | Activé | Menu **File** → **Work offline (no autosave)** |
| **Android, iOS, Windows, macOS** | Désactivé | **Enable autosave** dans la boîte de dialogue **Options**, ou dans le menu **File** |

Le bouton **Save** sert aussi d'indicateur d'enregistrement automatique. Il affiche *Saving…*, *File saved*, *File saved to Google Drive*, *Autosave pending…*, ou une erreur si un enregistrement n'a pas abouti.

L'enregistrement automatique ne peut rien faire dans deux situations :

- **Le projet n'a jamais été enregistré.** Il n'y a pas encore de fichier à mettre à jour, enregistrez-le donc une première fois vous-même.
- **Le projet a été ouvert depuis un fichier local alors que vous utilisez Ingantt dans un navigateur.** Voir ci-dessous.

## Enregistrement automatique et fichiers locaux sur le web

Un navigateur ne peut pas réécrire dans un fichier que vous avez choisi sur votre disque. Lorsqu'Ingantt pour Web enregistre vers « un fichier local », il télécharge à la place une nouvelle copie du fichier — ce qui est le bon comportement pour un **Save** explicite, mais pas quelque chose que vous souhaitez voir se produire toutes les 20 secondes.

Donc : **Ingantt pour Web n'enregistre pas automatiquement dans les fichiers locaux.** Si vous avez ouvert un fichier de projet local dans le navigateur et souhaitez que vos modifications soient conservées automatiquement, utilisez une fois **Save file as** → **Save to new Google Drive file**. À partir de là, l'enregistrement automatique maintient le fichier Drive à jour.

Cela affecte [Modifier avec l'IA](/fr/getting-started/edit-with-ai/index.md) de la même manière : sans enregistrement automatique, tout ce que l'IA modifie reste non enregistré jusqu'à ce que vous l'enregistriez vous-même, et Ingantt vous en avertit avant le début de la session.

## Travailler hors ligne sur le web

**Work offline (no autosave)** dans le menu **File** désactive l'enregistrement automatique pour l'onglet de navigateur actuel. Utilisez-le lorsque vous souhaitez continuer à modifier sans que chaque changement parte vers Google Drive.

Deux choses à savoir à ce sujet :

- Rien n'est enregistré tant qu'il est activé, enregistrez donc manuellement avant de fermer l'onglet. Ingantt vous le rappelle lorsque vous l'activez.
- Le réglage est propre à la session. Recharger la page ou ouvrir un nouvel onglet redémarre avec l'enregistrement automatique activé. Sur Android, iOS, Windows et macOS, c'est le réglage **Enable autosave** qui est mémorisé.

## Télécharger une copie

Sur le web, **File** → **Download** → **Download XML** enregistre une copie du projet sur votre ordinateur sans changer l'emplacement où le projet lui-même est enregistré. Utilisez-le pour une sauvegarde, ou pour transmettre le fichier à quelqu'un qui utilise Microsoft Project.

Les autres formats — PDF, PNG, CSV, XML, YAML et Markdown — sont décrits dans [Import et export](/fr/getting-started/import-export/index.md).

## Fermer avec des modifications non enregistrées

Si vous fermez un projet contenant des modifications non enregistrées, Ingantt vous demande **Save changes to** votre projet et vous avertit que les modifications non enregistrées seront perdues. La même invite apparaît avant le déplacement d'un projet vers la corbeille.

## Si Ingantt refuse d'enregistrer

- **« View only mode as trial ended »** ou **« Subscription inactive »** — vos projets sont toujours là et toujours lisibles, mais l'enregistrement est désactivé jusqu'à ce que votre abonnement soit actif. Voir [Essai gratuit](/fr/account/trial/index.md) et [Abonnements et paiement](/fr/account/subscription/index.md).
- **« You are a viewer and cannot save »** — le fichier Google Drive a été partagé avec vous en tant que lecteur ou commentateur. Demandez au propriétaire un accès en modification, ou utilisez **Save file as** pour conserver votre propre copie. Voir [Partager un projet](/fr/ui/sharing/index.md).
- **« Error saving file to Google Drive »** — généralement un problème de connexion ou une session Google expirée. Vérifiez votre connexion et reconnectez-vous ; voir [Intégration Google Drive](/fr/ui/files/index.md).
