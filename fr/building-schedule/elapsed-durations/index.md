# Durées écoulées

Une durée ordinaire se mesure en **temps de travail**. Une tâche de trois jours sur un calendrier du lundi au vendredi, à huit heures par jour, représente 24 heures de travail, et si elle commence le jeudi, elle se termine le lundi — le week-end ne compte pas.

Une durée **écoulée** se mesure en **temps calendaire**. Elle compte en continu, 24 heures sur 24, 7 jours sur 7, à travers les week-ends, les jours fériés et toutes les exceptions chômées du [calendrier](/fr/setting-up-project/calendars/index.md).

Utilisez-la pour tout ce qui ne dépend pas de la présence de votre équipe au travail : la cure du béton, le séchage de la peinture, un test d'endurance, un délai d'attente réglementaire ou une expédition en transit.

## Saisir une durée écoulée

Saisissez la durée avec un **`e`** devant l'unité :

| Vous saisissez | Vous obtenez |
|----------|---------|
| `3d` | 3 jours ouvrés |
| `3ed` | 3 jours écoulés — 72 heures calendaires |
| `2ew` | 2 semaines écoulées — 14 jours calendaires |
| `8eh` | 8 heures écoulées |

Les unités sont `min`, `h`, `d`, `w` et `m` — minutes, heures, jours, semaines, mois — et chacune d'elles accepte le `e`. Les abréviations sont traduites ; dans une interface non anglaise, utilisez donc les lettres d'unité de cette langue ; le marqueur `e` reste identique.

Vous pouvez également utiliser la case à cocher **Écoulé** au lieu de la saisie, dans l'éditeur de durée de la boîte de dialogue [Propriétés des tâches](/fr/building-schedule/task-properties/index.md). Son info-bulle en donne la définition :

> Elapsed. When checked, duration counts continuously (24/7) instead of only during working hours defined by the calendar.

Cocher ou décocher la case conserve le nombre affiché et change sa signification : `3d` devient `3ed`. Elle ne convertit pas silencieusement 3 jours ouvrés en un nombre équivalent de jours écoulés.

## Valeur d'une unité écoulée

Les unités écoulées ignorent le calendrier de votre projet et utilisent une arithmétique calendaire fixe :

| Unité | Valeur écoulée |
|------|---------------|
| 1 jour écoulé | 24 heures |
| 1 semaine écoulée | 7 jours = 168 heures |
| 1 mois écoulé | 30 jours = 720 heures |

Comparez avec les unités de travail, qui proviennent des [Propriétés du projet](/fr/setting-up-project/project/index.md) — par défaut 8 heures par jour, 5 jours par semaine, 20 jours par mois. Ainsi, `1w` représente 40 heures de travail tandis que `1ew` représente 168 heures calendaires.

## Décalage écoulé sur une dépendance

Le même principe s'applique au décalage d'une [dépendance](/fr/building-schedule/dependencies/index.md), et c'est là qu'il compte le plus. « Commencer la tâche suivante trois jours après la fin de celle-ci » signifie généralement trois jours *calendaires*, et non trois jours ouvrés — sinon une fin le vendredi repousse le successeur au mercredi.

Dans l'onglet **Prédécesseurs** de la boîte de dialogue Propriétés de la tâche, chaque lien possède sa propre case à cocher **Écoulé** à côté du décalage, avec la même signification :

> When checked, lag time counts continuously (24/7) instead of only during working hours defined by the calendar.

Vous pouvez aussi le saisir directement : un décalage de `3ed` correspond à trois jours calendaires.

## Import et export

Les durées et décalages écoulés font partie du format Microsoft Project et survivent à un aller-retour dans les deux sens. Une durée `3ed` importée depuis Microsoft Project reste `3ed`, et s'exporte à nouveau en tant que durée écoulée.
