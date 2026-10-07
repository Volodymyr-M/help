# Duraciones transcurridas

Una duración normal se mide en **tiempo de trabajo**. Una tarea de tres días en un calendario de lunes a viernes con ocho horas diarias toma 24 horas de trabajo, y si comienza el jueves termina el lunes — el fin de semana no cuenta.

Una duración **transcurrida** se mide en **tiempo de reloj**. Cuenta de forma continua, 24 horas al día, 7 días a la semana, a través de fines de semana, días festivos y cualquier excepción no laborable del [calendario](/es/setting-up-project/calendars/index.md).

Úsela para cualquier cosa a la que no le importe si su equipo está trabajando: el curado del hormigón, el secado de la pintura, una prueba de resistencia, un período de espera regulatorio o un envío en tránsito.

## Ingresar una duración transcurrida

Escriba la duración con una **`e`** antes de la unidad:

| Usted escribe | Obtiene |
|----------|---------|
| `3d` | 3 días de trabajo |
| `3ed` | 3 días transcurridos — 72 horas de reloj |
| `2ew` | 2 semanas transcurridas — 14 días calendario |
| `8eh` | 8 horas transcurridas |

Las unidades son `min`, `h`, `d`, `w` y `m` — minutos, horas, días, semanas, meses — y todas ellas admiten la `e`. Las abreviaturas están traducidas, así que en una interfaz que no esté en inglés use las letras de unidad de ese idioma; el marcador `e` se mantiene.

También puede usar la casilla **Transcurrida** en lugar de escribirla, en el editor de duración del diálogo [Propiedades de la tarea](/es/building-schedule/task-properties/index.md). Su información emergente es la definición:

> Transcurrida. Cuando está marcada, la duración cuenta de forma continua (24/7) en lugar de solo durante las horas de trabajo definidas por el calendario.

Marcar o desmarcar la casilla conserva el número que ve y cambia lo que significa: `3d` se convierte en `3ed`. No convierte silenciosamente 3 días de trabajo en el número equivalente de días transcurridos.

## Cuánto vale una unidad transcurrida

Las unidades transcurridas ignoran el calendario de su proyecto y usan una aritmética de calendario fija:

| Unidad | Valor transcurrido |
|------|---------------|
| 1 día transcurrido | 24 horas |
| 1 semana transcurrida | 7 días = 168 horas |
| 1 mes transcurrido | 30 días = 720 horas |

Compárelo con las unidades de trabajo, que provienen de [Propiedades del proyecto](/es/setting-up-project/project/index.md) — de forma predeterminada 8 horas al día, 5 días a la semana, 20 días al mes. Así, `1w` son 40 horas de trabajo mientras que `1ew` son 168 horas de reloj.

## Posposición transcurrida en una dependencia

La misma idea se aplica a la posposición de una [dependencia](/es/building-schedule/dependencies/index.md), y es aquí donde más importa. "Comenzar la siguiente tarea tres días después de que esta termine" normalmente significa tres días *calendario*, no tres días de trabajo — de lo contrario, un fin el viernes empuja la sucesora al miércoles.

En la pestaña **Predecesoras** de Propiedades de la tarea, cada vínculo tiene su propia casilla **Transcurrida** junto a la posposición, con el mismo significado:

> Cuando está marcada, el tiempo de posposición cuenta de forma continua (24/7) en lugar de solo durante las horas de trabajo definidas por el calendario.

También puede escribirla directamente: una posposición de `3ed` son tres días calendario.

## Importación y exportación

Las duraciones y posposiciones transcurridas forman parte del formato de Microsoft Project y sobreviven a un ciclo de ida y vuelta en ambas direcciones. Una duración de `3ed` importada desde Microsoft Project sigue siendo `3ed` y se exporta de nuevo como duración transcurrida.
