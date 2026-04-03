# Recursos

Agregue las personas, equipos y materiales que realizarán el trabajo. Una vez que los recursos estén asignados a las tareas, Ingantt puede calcular la carga de trabajo, detectar sobreasignaciones y considerar la disponibilidad de cada persona.

## Tipo de recurso

Ingantt admite tres tipos de recursos:

| Tipo de recurso | Descripción                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------|
| **Trabajo**      | Alguien o algo que realiza su tarea. Puede ser una persona, equipo, empresa contratista o equipamiento. |
| **Material**  | Elementos utilizados para completar su tarea, como materiales, ingredientes o componentes.                 |
| **Costo**      | Costos que pueden aplicarse a múltiples tareas, como costos de entrega, costos de implementación o cualquier costo fijo. |

Solo los recursos de trabajo, cuando se asignan a tareas, afectan la programación.

Todos los tipos de recursos afectan los cálculos de costos si el campo **Costo** del recurso está completado.

## Unidades máximas

Los recursos de trabajo tienen una propiedad **Unidades máximas** (100% por defecto) que representa la capacidad disponible del recurso. Por ejemplo:

- **100%** — Un recurso a tiempo completo
- **50%** — Un recurso a tiempo parcial (disponible la mitad del tiempo)
- **300%** — Un equipo de 3 miembros a tiempo completo representado como un solo recurso

Las Unidades máximas son utilizadas por la [detección de sobreasignación](/es/adjusting-schedule/leveling/index.md#recursos-sobreasignados) y la [nivelación automática](/es/adjusting-schedule/leveling/index.md#nivelación-automática) para determinar si un recurso tiene más trabajo del que puede manejar. Al asignar un recurso de trabajo a una tarea, las unidades de asignación predeterminadas coinciden con las Unidades máximas del recurso.

## Períodos de disponibilidad de recursos

La disponibilidad de un recurso de trabajo puede cambiar con el tiempo. Por ejemplo, un miembro del equipo podría estar a tiempo completo durante los primeros tres meses y luego cambiar a tiempo parcial.

En la pestaña **Disponibilidad** del diálogo **Propiedades del recurso**, puede definir múltiples períodos de disponibilidad, cada uno con un rango de fechas y un porcentaje de disponibilidad. Para las fechas que caen dentro de un período definido, las unidades del período anulan las Unidades máximas base del recurso para los cálculos de capacidad.

## Recursos genéricos

Un recurso puede marcarse como **Genérico** usando la casilla de verificación en el diálogo **Propiedades del recurso**. Los recursos genéricos son marcadores de posición que representan un rol (por ejemplo, "Desarrollador", "Diseñador") en lugar de una persona específica. Son útiles durante la planificación temprana cuando los miembros específicos del equipo aún no se han identificado.

Los recursos genéricos se indican con un icono de insignia en la lista de recursos. La marca de genérico es puramente informativa — no afecta la programación ni los cálculos de costos.

## Tipo de reserva

Cada recurso tiene un **Tipo de reserva** que puede establecerse como **Comprometido** (predeterminado) o **Propuesto** en el diálogo **Propiedades del recurso**.

- **Comprometido** — El recurso está firmemente reservado para el proyecto.
- **Propuesto** — El recurso está asignado provisionalmente para fines de planificación.

De forma predeterminada, la nivelación automática excluye los recursos propuestos. Puede incluirlos habilitando "Nivelar recursos con tipo de reserva propuesto" en el diálogo de [Opciones de nivelación](/es/adjusting-schedule/leveling/index.md#opciones-de-nivelación).
