# Entendendo os Custos

Atribua custos a tarefas e recursos para ver o preço total do seu projeto. A tarefa resumo raiz mostra o total geral — compare-o com recursos de orçamento para saber se o projeto cabe no orçamento aprovado.

## Como o Custo da Tarefa É Calculado

O custo de cada tarefa é uma combinação do seu próprio custo fixo e dos custos dos recursos atribuídos a ela. O Ingantt calcula o custo total de cada tarefa e o exibe na coluna **Cost** na lista de tarefas.

*O **Cost** da tarefa = **Fixed Cost** da tarefa + custos dos recursos atribuídos à tarefa*

> Se você não vê a coluna **Cost** na lista de tarefas, certifique-se de que a flag **Cost Column** esteja marcada na aba **Task Columns** da caixa de diálogo **Options**.

## Custos de Tarefas Resumo

No campo **Cost**, cada [tarefa resumo](/pt/building-schedule/tasks/index.md#tarefas-resumo) mostra o custo total de todas as suas subtarefas.

No entanto, assim como uma tarefa regular, uma tarefa resumo pode ter [recursos atribuídos](/pt/building-schedule/assignments/index.md#atribuições-de-recursos-e-unidades) e um **Fixed Cost**. Esses valores são adicionados ao custo total das subtarefas, aumentando o **Cost** da tarefa resumo.

*O **Cost** da tarefa resumo = custo total de todas as subtarefas + **Fixed Cost** da tarefa resumo + custos dos recursos atribuídos à tarefa resumo*

Use a [tarefa resumo raiz](/pt/building-schedule/tasks/index.md#tarefa-resumo-raiz) para visualizar e gerenciar o custo total de todo o seu projeto.

## Recursos de Orçamento

Um recurso pode ser marcado como recurso de **Budget** na caixa de diálogo **Resource Properties**. Os recursos de orçamento representam valores de orçamento alocados no nível do projeto e só podem ser atribuídos à [tarefa resumo raiz](/pt/building-schedule/tasks/index.md#tarefa-resumo-raiz).

Os recursos de orçamento são excluídos de:

- Agendamento
- Totais de custos
- Detecção de superalocação
- Nivelamento de recursos

Eles fornecem acompanhamento de orçamento de cima para baixo, separado dos cálculos de custos de baixo para cima.

## Moeda

Se o seu projeto usa uma moeda diferente do padrão do Ingantt, você pode alterá-la na aba **Regional** da caixa de diálogo **Project Properties**. Especifique a moeda como um símbolo (ex.: R$), abreviação (BRL) ou nome completo (real).

Na mesma aba, você também pode especificar a **Currency Position** — antes ou depois do valor, com ou sem espaço.

> Quando você altera a moeda, os valores de custo não são recalculados.
