# Calendriers

Jours fériés, vacances, demi-journées, équipes de nuit — votre planning doit refléter les périodes où le travail est réellement effectué. Configurez les calendriers pour qu'Ingantt ignore les périodes non ouvrées et vous fournisse des dates réalistes.

Les calendriers définissent les jours et les horaires pendant lesquels le travail peut être effectué. Les calendriers utilisent deux types de données :

- **Jours de la semaine** : horaires de travail définis pour chaque jour de la semaine, représentant le planning habituel et récurrent.
- **Exceptions** : dates où le travail n'est pas effectué ou est effectué à des horaires différents de ceux du planning hebdomadaire.

## Calendrier du projet

Un projet possède un **Calendar** qui lui est associé, tel que spécifié dans la boîte de dialogue **Project Properties**. Ce calendrier détermine comment les tâches non affectées à des ressources de travail sont planifiées. Les jours chômés tels que les week-ends sont également affichés dans le diagramme de Gantt en fonction de ce calendrier.

## Calendrier des ressources

Chaque [ressource de travail](/fr/building-schedule/resources/index.md#resource-type) possède un calendrier qui lui est associé, tel que spécifié dans le champ **Base Calendar** de la boîte de dialogue **Resource Properties**. Une fois la ressource de travail [affectée](/fr/building-schedule/assignments/index.md#resource-assignments-and-units) à une tâche, son calendrier influence la planification de la tâche.

Lorsque plusieurs ressources de travail sont affectées à une tâche, leurs calendriers sont **croisés** — ce qui signifie que le travail n'est planifié que pendant les périodes où **toutes** les ressources affectées sont disponibles. Par exemple, si la ressource A travaille du lundi au mercredi et la ressource B du mercredi au vendredi, une tâche affectée aux deux ne sera planifiée que le mercredi.

> Si plusieurs ressources partagent un planning de travail similaire, créez un seul calendrier et attribuez-le à toutes. Vous pouvez néanmoins spécifier des exceptions pour chaque ressource individuellement dans **Resource Properties** — par exemple, des vacances ou des périodes de travail ajustées à des dates spécifiques.

## Calendrier des tâches

Chaque tâche possède une propriété **Calendar** dans la boîte de dialogue **Task Properties**, définie sur **NONE** par défaut. Lorsqu'elle est définie sur **NONE** :

- Si la tâche n'est affectée à aucune ressource de travail, elle est planifiée selon le calendrier du projet.
- Si la tâche est affectée à des ressources de travail, elle est planifiée selon leurs calendriers.

Si la propriété **Calendar** de la tâche est définie sur un calendrier au lieu de **NONE** :

- Si la tâche n'est affectée à aucune ressource de travail, elle est planifiée selon le calendrier spécifié.
- Si la tâche est affectée à des ressources de travail, elle est planifiée selon le **croisement** du calendrier de la tâche et des calendriers des ressources — le travail n'est planifié que pendant les périodes ouvrées à la fois dans le calendrier de la tâche et dans tous les calendriers des ressources. Pour utiliser uniquement le calendrier de la tâche en ignorant les calendriers des ressources, cochez l'option **Ignore resource calendars**.

## Calendriers prédéfinis

Ingantt dispose de 3 calendriers prédéfinis, dont l'un (**Standard**) est attribué au projet par défaut.

| Calendrier | Description                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| **Standard**     | Le travail est effectué du lundi au vendredi, de 8 h à 17 h avec une pause d'une heure (de 12 h à 13 h).       |
| **Night Shift**  | Le travail est effectué du lundi soir au samedi matin, de 23 h à 8 h avec une pause d'une heure (de 3 h à 4 h). |
| **24 Hours**     | Le travail est effectué 24 heures sur 24, tous les jours.                                                         |

Vous pouvez modifier n'importe quel calendrier prédéfini via la boîte de dialogue **Calendar Properties** ou créer vos propres calendriers à partir de ceux-ci via la boîte de dialogue **Add Calendar**.

## Semaines de travail

Les semaines de travail permettent de définir des modifications du planning hebdomadaire sur une plage de dates donnée. Par exemple, vous pourriez avoir une période où tout le monde travaille des journées de 4 heures au lieu des 8 heures habituelles, ou une période où le samedi devient un jour ouvré.

Les semaines de travail sont configurées dans l'onglet **Work Weeks** de la boîte de dialogue **Calendar Properties**. Chaque semaine de travail possède un nom, une date de début et de fin, ainsi que des horaires de travail définis pour chaque jour de la semaine.

> Les exceptions de calendrier ont la priorité sur les semaines de travail, qui elles-mêmes ont la priorité sur le planning hebdomadaire par défaut.

## Exceptions de calendrier

Les exceptions de calendrier sont des dates où le travail diffère du planning hebdomadaire habituel, y compris les jours chômés.

Les exceptions de calendrier peuvent être spécifiées :

- Dans la boîte de dialogue **Resource Properties** pour une ressource particulière.
- Dans la boîte de dialogue **Calendar Properties** pour un calendrier particulier, afin que les projets, ressources ou tâches utilisant ce calendrier bénéficient de cette exception.

Par exemple, si vous souhaitez configurer des vacances pour une personne, ajoutez-les comme exception pour cette ressource. Si vous souhaitez configurer un jour férié pour tout le monde, ajoutez-le comme exception au calendrier utilisé par tous.

Lors de l'ajout ou de la modification d'exceptions de calendrier, vous spécifiez les périodes de travail pour l'exception. Si vous n'en spécifiez aucune, l'exception ne comporte pas de temps de travail, ce qui signifie qu'elle définit un jour chômé.

Chaque exception peut recevoir un **Name** descriptif (comme « Vacances de Noël » ou « Bureau fermé ») qui s'affiche dans la liste des exceptions.

### Exceptions récurrentes

Les exceptions de calendrier peuvent être configurées pour se répéter selon un schéma plutôt que sur une seule date. Les schémas de récurrence disponibles sont :

- **Daily** — Tous les N jours ou tous les N jours ouvrables
- **Weekly** — Toutes les N semaines les jours spécifiés
- **Monthly** — Par jour du mois ou par position (par ex., le deuxième mardi)
- **Yearly** — Par date ou par position (par ex., le dernier vendredi de novembre)

Les exceptions récurrentes ont une condition de fin : pas de fin, fin à une date donnée, ou fin après N occurrences.

## Calendriers vides et partiels

Si vous n'ajoutez aucun temps de travail à un calendrier, celui-ci est vide et ne peut pas être utilisé pour la planification. Ces calendriers sont signalés par une icône d'avertissement dans la liste des calendriers, et leur nombre est affiché dans le tiroir de navigation.

Cependant, il existe des situations où votre calendrier n'est pas vide mais ne dispose pas de suffisamment de temps de travail pour planifier une tâche donnée. Ces situations ne peuvent être détectées qu'au moment de la planification.

Si vous attribuez un calendrier vide — ou ne disposant pas de suffisamment de temps de travail — à un projet, une ressource ou une tâche et que la planification ne peut pas s'effectuer, une erreur s'affiche et la dernière action est annulée.
