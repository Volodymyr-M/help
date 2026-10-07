# Códigos EDT

Cada tarea tiene un código **EDT** (WBS, por sus siglas en inglés) — su dirección dentro del esquema. De forma predeterminada es el número de esquema simple: `1`, `1.1`, `1.2`, `1.2.1`. Para verlo, active la columna **EDT** en la tabla de tareas.

Una **máscara de código EDT** reemplaza esos números de esquema por un código estructurado de su propio diseño, de modo que las tareas resultan como `PROJ-A-01` o `1.A.001` en lugar de `1.1.1`. Las organizaciones con un estándar de numeración — un contrato, un esquema de códigos de costo, el formato de informes de un cliente — lo usan para que los códigos de Ingantt coincidan con él.

Abra **Proyecto → Definición de código EDT** para configurar una.

## Los códigos EDT y los códigos de esquema son diferentes

- Un **código EDT** es estructural. Hay exactamente uno por tarea y se deriva de la posición de la tarea en el esquema. Se renumera por sí solo cuando mueve tareas.
- Un **[código de esquema](/es/adjusting-schedule/custom-fields/index.md)** es una etiqueta. Usted define una lista de búsqueda — departamento, fase, centro de costo — y asigna valores a las tareas con independencia de la jerarquía. Una tarea puede llevar varios, de varios códigos de esquema.

## Definición de la máscara

El diálogo tiene tres partes.

### Prefijo de código del proyecto

Texto fijo que se antepone a cada código del proyecto. Con el prefijo `PROJ`, los códigos resultan como `PROJ.1.1` o `PROJ-A-01` según sus separadores. Déjelo vacío para no usar prefijo.

### Máscara de código

Una fila por nivel de esquema, que se agrega con **Agregar nivel**. Cada fila establece:

| Campo | Qué hace |
|-------|--------------|
| **Nivel** | La profundidad del esquema a la que se aplica esta fila. El nivel 1 son las tareas de nivel superior, el nivel 2 sus subtareas, y así sucesivamente. |
| **Secuencia** | Los caracteres que se usan en este nivel: **Números** (1, 2, 3), **Letras mayúsculas** (A, B, C … Z, AA), **Letras minúsculas** (a, b, c … z, aa) o **Caracteres**. |
| **Longitud** | Máximo de caracteres en este nivel. Déjelo vacío — muestra *Cualquiera* — para no establecer límite. |
| **Separador** | El carácter entre este nivel y el siguiente, como `.` o `-`. |

Vale la pena conocer dos detalles sobre el comportamiento de los campos:

- **La longitud rellena los números con ceros a la izquierda.** Una longitud de `3` en un nivel de Números convierte la novena tarea en `009`. No rellena los niveles de letras.
- **Caracteres** se comporta igual que Números para los códigos que genera Ingantt. Existe por compatibilidad con Microsoft Project, donde significa un nivel que usted escribe manualmente.

No tiene que definir todos los niveles. **Los niveles más profundos que la última fila de su máscara usan un número con el separador `.`**, por lo que una máscara de tres filas en un plan de cinco niveles sigue produciendo un código completo.

### Opciones

**Generar código EDT para nueva tarea** y **Verificar unicidad de los nuevos códigos EDT** se almacenan con el proyecto y se conservan en un ciclo de ida y vuelta con Microsoft Project. En Ingantt, una máscara con al menos un nivel se aplica automáticamente a todas las tareas, y los códigos son únicos por construcción porque siguen el esquema.

## Qué sucede al guardar la máscara

Ingantt renumera todo el proyecto de inmediato. Los códigos se reconstruyen a partir del esquema cada vez que cambia la estructura — cuando agrega, elimina, aplica o anula sangría, o mueve una tarea — de modo que siempre describen dónde está la tarea ahora.

Vale la pena decirlo claramente: **un código EDT no es un identificador permanente de una tarea.** Mueva una tarea y su código cambia. Si necesita una etiqueta que acompañe a una tarea allá donde vaya, use un código de esquema o un [campo de texto personalizado](/es/adjusting-schedule/custom-fields/index.md) en su lugar.

## Importación y exportación

La máscara forma parte del formato de Microsoft Project y sobrevive a un ciclo de ida y vuelta. Un proyecto importado con una máscara la conserva, se exporta con ella y sus códigos de tarea coinciden con los que produjo Microsoft Project.
