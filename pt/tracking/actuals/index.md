# Valores Reais

Conforme o trabalho progride e você atualiza o [% concluído](/pt/tracking/progress/index.md#-concluído), o Ingantt calcula automaticamente os valores reais e restantes para duração, trabalho, custo e datas. Esses campos permitem ver exatamente o que foi gasto, o que resta e como o projeto está se comparando ao plano.

As colunas de valores reais e restantes mais comuns são **Custo Real** / **Custo Restante**, **Trabalho Real** / **Trabalho Restante** e **Duração Real** / **Duração Restante**. Ao observar esses valores na [tarefa resumo raiz](/pt/building-schedule/tasks/index.md#tarefa-resumo-raiz), você pode ver os totais de todo o projeto de relance — quanto foi gasto, quanto esforço foi investido e quanto falta. Certifique-se de que a tarefa resumo raiz esteja visível: marque **Mostrar tarefa raiz de resumo** no menu **Visualizar** ou na caixa de diálogo **Opções**.

## Exibindo Colunas de Valores Reais e Restantes

As colunas de valores reais e restantes não são visíveis por padrão. Para adicioná-las à lista de tarefas, abra a caixa de diálogo **Opções** (aba **Colunas de Tarefas**) e ative as colunas desejadas. Você também pode clicar com o botão direito no cabeçalho de uma coluna na grade de tarefas para acesso rápido às configurações de colunas.

### Duração

- **Duração Real** — A quantidade de tempo útil gasto em uma tarefa até o momento. Calculado como a duração da tarefa multiplicada pelo seu % concluído.
- **Duração Restante** — O tempo útil ainda necessário para concluir a tarefa: Duração − Duração Real.

Por exemplo, uma tarefa de 10 dias com 40% concluída tem uma Duração Real de 4 dias e uma Duração Restante de 6 dias.

### Trabalho

- **Trabalho Real** — O esforço total (em horas) que os recursos gastaram em uma tarefa. Quando **A atualização do estado da tarefa atualiza o estado do recurso** está ativada nas configurações do projeto (o padrão), o Trabalho Real é atualizado proporcionalmente quando você altera o % concluído.
- **Trabalho Restante** — O esforço ainda necessário para concluir a tarefa: Trabalho − Trabalho Real.

### Custo

- **Custo Real** — Os custos incorridos até o momento: a soma dos custos fixos acumulados e dos custos de recursos acumulados. Como os custos são acumulados depende da configuração **Acumulação de custos** de cada recurso:
  - **Início** — O custo total é reconhecido quando o Início Real é definido.
  - **Rateio** — O custo é reconhecido proporcionalmente com base no progresso do trabalho real.
  - **Fim** — O custo é reconhecido somente quando a tarefa atinge 100% concluída.
- **Custo Restante** — O orçamento ainda necessário para concluir a tarefa: Custo Total − Custo Real.

### Datas

- **Início real** — A data em que o trabalho realmente começou. Definida automaticamente como a data de início agendada da tarefa quando o % concluído ultrapassa 0%.
- **Término real** — A data em que o trabalho foi realmente concluído. Definida automaticamente como a data de término agendada da tarefa quando o % concluído atinge 100%.

### Horas Extras

- **Trabalho extra real** — Horas extras já trabalhadas na tarefa.
- **Trabalho extra restante** — Horas extras ainda esperadas.
- **Custo real de hora extra** — Custos de horas extras já incorridos.
- **Custo restante de hora extra** — Custos de horas extras ainda esperados.

## Como os Valores Reais São Calculados

Todos os campos de valores reais e restantes mantêm a relação:

> **Total = Real + Restante**

Quando você altera um valor, o Ingantt atualiza os outros para mantê-los consistentes. O fluxo de trabalho mais comum é atualizar o **% concluído**, que automaticamente propaga para todos os campos de valores reais e restantes:

1. **Duração Real** e **Duração Restante** são recalculados a partir do novo percentual.
2. **Trabalho Real** e **Trabalho Restante** são atualizados (se a configuração do projeto estiver ativada).
3. **Início real** e **Término real** são definidos com base no progresso.
4. **Custo Real** e **Custo Restante** são recalculados com base no método de acumulação.

Para tarefas resumo, **Trabalho Real**, **Trabalho Restante**, **Custo Real** e **Custo Restante** são acumulados (somados) de todas as tarefas filhas. **Início real** é o início real mais cedo entre as tarefas filhas, e **Término real** é o término real mais tardio.

## Colunas de Tarefas

Além dos valores reais e restantes, o Ingantt suporta uma ampla variedade de colunas de tarefa — dados de agendamento, informações de caminho crítico, custo, trabalho, métricas de valor agregado, linhas de base, campos personalizados e códigos de estrutura. Todas as colunas podem ser ativadas ou desativadas e reorganizadas usando a caixa de diálogo **Opções** (aba **Colunas de Tarefas**). Você também pode clicar com o botão direito no cabeçalho de uma coluna na grade de tarefas para acessar rapidamente as configurações de colunas.
