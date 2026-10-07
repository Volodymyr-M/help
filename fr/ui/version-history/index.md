# Historique des versions

Ingantt conserve l'historique complet de chaque planning stocké dans Google Drive. Vous pouvez le parcourir, prévisualiser n'importe quelle version passée dans le diagramme de Gantt, épingler celles qui comptent et en restaurer une comme planning actuel.

**Le projet doit être ouvert depuis Google Drive.** L'historique des versions est l'historique des révisions de Google Drive ; les deux entrées de menu de l'historique des versions sont donc masquées pour un projet ouvert depuis votre appareil ou qui n'a jamais été enregistré. Enregistrez-le dans [Drive](/fr/ui/files/index.md) et elles apparaissent.

## Ouvrir l'historique des versions

Choisissez **Fichier → Historique des versions → Voir l'historique des versions**, ou appuyez sur `Ctrl` + `Alt` + `Shift` + `H`.

Le panneau s'ouvre sur le côté et Ingantt passe en plein écran pour laisser de la place au diagramme. Fermer le panneau remet tout en place.

## Parcourir et prévisualiser

Les versions sont listées de la plus récente à la plus ancienne et regroupées par jour — **Aujourd'hui**, **Hier**, puis la date. La plus récente porte la mention **Version actuelle** et est sélectionnée pour vous à l'ouverture du panneau.

Cliquez sur n'importe quelle version et Ingantt la charge dans le diagramme pour que vous puissiez l'examiner. La prévisualisation est une consultation, pas une modification :

- Votre planning ouvert est mis de côté intact, y compris son historique d'annulation et toute modification non enregistrée.
- Fermez le panneau et votre planning revient exactement comme vous l'aviez laissé.
- Rien n'est écrit dans Drive par la prévisualisation.

## Épingler une version

Google Drive élague les anciennes révisions d'un fichier au fil du temps. Épingler une version la marque **keep forever**, de sorte qu'elle survit à cet élagage et reste dans la liste.

Il y a deux façons d'épingler :

- **Fichier → Historique des versions → Épingler la version actuelle** épingle la version la plus récente sans ouvrir le panneau. Utilisez-la juste après un enregistrement que vous souhaitez conserver — avant une replanification, à la fin d'une phase, ou lorsqu'un planning est validé.
- Dans le panneau, ouvrez le menu de n'importe quelle version et choisissez **Épingler cette version**.

Les versions épinglées sont marquées **Épinglée** dans la liste. Choisir à nouveau la même entrée de menu les désépingle.

## Restaurer une version

Sélectionnez la version souhaitée et choisissez **Restaurer cette version**. Ingantt vous demande de confirmer :

> Restaurer cette version ? Votre version actuelle sera d'abord enregistrée.

La restauration ne jette pas votre planning actuel. Elle enregistre le contenu restauré comme une **nouvelle** version par-dessus l'historique, de sorte que la version sur laquelle vous étiez reste dans la liste et peut elle-même être restaurée. L'historique ne fait que grandir — restaurer ne supprime jamais rien.

Après confirmation, le planning restauré devient le projet ouvert et est immédiatement enregistré dans Drive.

## L'historique des versions n'est pas la même chose que les références de base

Les deux sont faciles à confondre :

- L'**Historique des versions** est un enregistrement du *fichier* au fil du temps, conservé par Google Drive. Il répond à la question « à quoi ressemblait ce planning mardi dernier ? »
- **Les [références de base](/fr/tracking/baselines/index.md)** sont des instantanés du *planning* stockés dans le plan lui-même, auxquels vous vous comparez dans la même vue — barres de référence dans le diagramme de Gantt, colonnes de référence et d'écart dans le tableau. Elles répondent à la question « de combien avons-nous dérivé par rapport au plan approuvé ? »

Utilisez l'historique des versions pour revenir en arrière. Utilisez les références de base pour mesurer.
