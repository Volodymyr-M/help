# Valores Reais

Conforme o trabalho progride e você atualiza o [% Concluído](/pt/tracking/progress/index.md#-concluído), o Ingantt calcula automaticamente os valores reais e restantes para duração, trabalho, custo e datas. Esses campos permitem ver exatamente o que foi gasto, o que resta e como o projeto está se comparando ao plano.

As colunas de valores reais e restantes mais comuns são **Actual Cost** / **Remaining Cost**, **Actual Work** / **Remaining Work** e **Actual Duration** / **Remaining Duration**. Ao observar esses valores na [tarefa resumo raiz](/pt/building-schedule/tasks/index.md#tarefa-resumo-raiz), você pode ver os totais de todo o projeto de relance — quanto foi gasto, quanto esforço foi investido e quanto falta. Certifique-se de que a tarefa resumo raiz esteja visível: marque **Show root summary task** no menu **View** ou na caixa de diálogo **Options**.

## Exibindo Colunas de Valores Reais e Restantes

As colunas de valores reais e restantes não são visíveis por padrão. Para adicioná-las à lista de tarefas, abra a caixa de diálogo **Options** (aba **Task Columns**) e ative as colunas desejadas. Você também pode clicar com o botão direito no cabeçalho de uma coluna na grade de tarefas para acesso rápido às configurações de colunas.

### Duração

- **Actual Duration** — A quantidade de tempo útil gasto em uma tarefa até o momento. Calculado como a duração da tarefa multiplicada pelo seu % Concluído.
- **Remaining Duration** — O tempo útil ainda necessário para concluir a tarefa: Duração - Duração Real.

Por exemplo, uma tarefa de 10 dias com 40% concluída tem uma Duração Real de 4 dias e uma Duração Restante de 6 dias.

### Trabalho

- **Actual Work** — O esforço total (em horas) que os recursos gastaram em uma tarefa. Quando **Updating task status updates resource status** está ativado nas configurações do projeto (o padrão), o Trabalho Real é atualizado proporcionalmente quando você altera o % Concluído.
- **Remaining Work** — O esforço ainda necessário para concluir a tarefa: Trabalho - Trabalho Real.

### Custo

- **Actual Cost** — Os custos incorridos até o momento: a soma dos custos fixos acumulados e dos custos de recursos acumulados. Como os custos são acumulados depende da configuração **Cost Accrual** de cada recurso:
  - **Start** — O custo total é reconhecido quando o Início Real é definido.
  - **Prorated** — O custo é reconhecido proporcionalmente com base no progresso do trabalho real.
  - **End** — O custo é reconhecido somente quando a tarefa atinge 100% concluída.
- **Remaining Cost** — O orçamento ainda necessário para concluir a tarefa: Custo Total - Custo Real.

### Datas

- **Actual Start** — A data em que o trabalho realmente começou. Definida automaticamente como a data de início agendada da tarefa quando o % Concluído ultrapassa 0%.
- **Actual Finish** — A data em que o trabalho foi realmente concluído. Definida automaticamente como a data de término agendada da tarefa quando o % Concluído atinge 100%.

### Horas Extras

- **Actual Overtime Work** — Horas extras já trabalhadas na tarefa.
- **Remaining Overtime Work** — Horas extras ainda esperadas.
- **Actual Overtime Cost** — Custos de horas extras já incorridos.
- **Remaining Overtime Cost** — Custos de horas extras ainda esperados.

## Como os Valores Reais São Calculados

Todos os campos de valores reais e restantes mantêm a relação:

> **Total = Real + Restante**

Quando você altera um valor, o Ingantt atualiza os outros para mantê-los consistentes. O fluxo de trabalho mais comum é atualizar o **% Complete**, que automaticamente propaga para todos os campos de valores reais e restantes:

1. **Actual Duration** e **Remaining Duration** são recalculados a partir do novo percentual.
2. **Actual Work** e **Remaining Work** são atualizados (se a configuração do projeto estiver ativada).
3. **Actual Start** e **Actual Finish** são definidos com base no progresso.
4. **Actual Cost** e **Remaining Cost** são recalculados com base no método de acumulação.

Para tarefas resumo, **Actual Work**, **Remaining Work**, **Actual Cost** e **Remaining Cost** são acumulados (somados) de todas as tarefas filhas. **Actual Start** é o início real mais cedo entre as tarefas filhas, e **Actual Finish** é o término real mais tardio.

## Colunas de Tarefa

Além dos valores reais e restantes, o Ingantt suporta uma ampla variedade de colunas de tarefa — dados de agendamento, informações de caminho crítico, custo, trabalho, métricas de valor agregado, linhas de base, campos personalizados e códigos de estrutura. Todas as colunas podem ser ativadas ou desativadas e reorganizadas usando a caixa de diálogo **Options** (aba **Task Columns**). Você também pode clicar com o botão direito no cabeçalho de uma coluna na grade de tarefas para acessar rapidamente as configurações de colunas.
