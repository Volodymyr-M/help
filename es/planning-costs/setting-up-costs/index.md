# Configuración de costos

Establezca costos fijos en las tareas y tasas en los recursos. Ingantt los usa junto con el cronograma para calcular el costo de cada tarea y de todo el proyecto.

## Costo fijo de la tarea

Puede establecer un costo para la tarea independientemente de sus recursos completando el campo **Costo fijo** en la pestaña **Costo y VG** del diálogo **Propiedades de la tarea**. Por ejemplo, use esto cuando alguien ya haya proporcionado una estimación de costo total para la tarea, o cuando la tarea tiene un costo adicional más allá de los costos de sus recursos.

> Si necesita asignar el mismo costo fijo a múltiples tareas, considere crear un recurso de costo y asignarlo a esas tareas. Si el costo cambia en el futuro, solo necesita actualizarlo en un lugar.

## Costo del recurso de trabajo

Los recursos de **Trabajo** son el único tipo que tiene un calendario, por lo que su costo se especifica por hora, por día, por semana o por mes (ver [Horas por día, días por semana, días por mes](/es/setting-up-project/project/index.md#horas-por-día-días-por-semana-días-por-mes)).

Por ejemplo, cuando asigna un recurso de trabajo con una **Tasa estándar** de $100 por hora a una tarea con una **Duración** de 5 horas, $500 se agregan al **Costo** de la tarea.

Los recursos de trabajo también admiten una **Tasa de horas extra** para el trabajo más allá de las horas regulares del calendario. El costo total se calcula como:

> **Costo = Trabajo regular × Tasa estándar + Trabajo en horas extra × Tasa de horas extra + Costo por uso**

Cuando un recurso de trabajo se asigna a una tarea, puede especificar el valor de **Unidades** como un número diferente al predeterminado. Esto impacta los cálculos de costos. Por ejemplo, si las **Unidades** son 50%, el costo calculado para el recurso en la tarea es la mitad de lo que sería con 100% de Unidades.

## Costo del recurso de material

Para los recursos de **material**, el costo se especifica por unidad según cómo defina la unidad. Puede ser una medida de peso (por ejemplo, libra, kilogramo, tonelada), medida de longitud o volumen (por ejemplo, pie, metro, milla, galón, litro), o cualquier otra medida (por ejemplo, contenedor, caja, pieza, metro cuadrado). Puede establecer una **Etiqueta de material** en el diálogo **Propiedades del recurso** para describir la unidad.

Los recursos de material admiten dos modos de consumo:
- **Fijo** (predeterminado) — Una cantidad total independientemente de la duración de la tarea (por ejemplo, 5 toneladas de cemento)
- **Variable** — Una tasa por unidad de tiempo que escala con la duración de la tarea (por ejemplo, 10 litros por día de combustible)

Por ejemplo, si se usa combustible en su proyecto, puede agregar un recurso de material "combustible" y especificar el costo por galón en el diálogo **Propiedades del recurso**. Luego, al asignar el recurso a una tarea, especifica el número de galones como **Unidades**, e Ingantt agrega el costo calculado del combustible al **Costo** de la tarea.

## Recurso de costo

Un recurso de **costo** es un gasto fijo que podría querer asignar a múltiples tareas. Los recursos de costo admiten valores de costo por asignación — el mismo recurso de costo puede tener montos diferentes en diferentes asignaciones de tareas (por ejemplo, "Viaje" = $800 en la Tarea A y $1.200 en la Tarea B).

Use este tipo para gastos fijos que normalmente no se especifican en medidas, como costos de instalación. Si múltiples tareas tienen el mismo costo fijo por la misma razón, cree un recurso de costo y asígnelo a todas esas tareas en lugar de completar el campo **Costo fijo** para cada tarea por separado.

## Tablas de tasas

Cada recurso de trabajo y material admite hasta 5 tablas de tasas de costo (A a E), cada una con múltiples filas que entran en vigor en diferentes fechas. Esto le permite modelar cambios de tasas a lo largo del tiempo o mantener diferentes conjuntos de tasas para diferentes tipos de trabajo.

Las tablas de tasas se configuran en la pestaña **Costos** del diálogo **Propiedades del recurso**. Al asignar un recurso a una tarea, puede seleccionar qué tabla de tasas usar en el diálogo **Editar asignación de recurso**.

## Costo por uso

Los recursos admiten un campo **Costo por uso** — una tarifa fija que se cobra cada vez que el recurso se asigna a una tarea, independientemente de cuánto trabajo se realice. Para los recursos de trabajo, el **Costo por uso** se multiplica por las unidades de asignación (por ejemplo, 200% de unidades significa que el costo por uso se cobra dos veces). El **Costo por uso** siempre se acumula al inicio de la tarea.

## Acumulación de costos

La configuración de **Acumulación de costos** controla cuándo los costos se reconocen como costos reales a medida que avanza el trabajo:

| Acumulación | Cuándo se reconocen los costos |
|---------|--------------------------|
| **Inicio** | Costo completo tan pronto como se registra cualquier progreso (% completado > 0%) |
| **Prorrateado** | Proporcional al porcentaje completado (por ejemplo, 50% completado = 50% del costo) |
| **Fin** | Costo completo solo cuando la tarea alcanza el 100% de completado |

Los recursos tienen una configuración de **Acumulación de costos** en la pestaña **Costos** del diálogo **Propiedades del recurso**. Las tareas tienen una configuración de **Acumulación de costo fijo** en la pestaña **Costo y VG** del diálogo **Propiedades de la tarea**. El proyecto tiene una configuración de **Acumulación de costo fijo predeterminada** en la pestaña **Otros** del diálogo **Propiedades del proyecto**.
