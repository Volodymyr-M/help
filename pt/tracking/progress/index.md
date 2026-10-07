# Acompanhamento do Progresso

Quando o trabalho começa, atualize o **% concluído** em cada tarefa para acompanhar como o progresso real se compara ao plano. Use **Atualizar projeto** para definir o progresso em massa. Conforme o progresso é registrado, o Ingantt calcula automaticamente os [valores reais](/pt/tracking/actuals/index.md) — valores reais e restantes para duração, trabalho, custo e datas.

## % concluído

Quando seu projeto está em andamento, você precisa acompanhar o progresso. Se mantiver o **% concluído** atualizado para cada tarefa, você pode ver o **% concluído** geral do projeto na tarefa resumo raiz.

Use o campo **% concluído** na caixa de diálogo **Propriedades da Tarefa** para definir o percentual concluído de uma tarefa específica. Tarefas 100% concluídas exibem um ícone de marca de verificação verde na lista de tarefas.

Quando você atualiza o % concluído:

- Definir acima de 0% define o **Início real** da tarefa como a data de início agendada da tarefa.
- Definir como 100% define o **Término real** da tarefa como a data de término agendada da tarefa.
- **Duração Real** e **Duração Restante** são calculados automaticamente com base no percentual concluído.
- Se **A atualização do estado da tarefa atualiza o estado do recurso** estiver ativada nas configurações do projeto (o padrão), **Trabalho Real** e **Trabalho Restante** também são atualizados proporcionalmente.

O **% concluído** de uma tarefa resumo é calculado como uma média ponderada pela duração de todas as subtarefas descendentes que não são tarefas resumo.

> Você também pode acompanhar o progresso usando o comando [Update Project](#atualizar-projeto) para definir o % concluído de múltiplas tarefas de uma vez com base em uma data de referência.

## Atualizar projeto

O comando **Atualizar projeto** fornece operações de acompanhamento de progresso em massa, acessível pelo menu **Projeto**.

### Atualizar Trabalho como Concluído

Marque tarefas como concluídas até uma data especificada:

- **Proporcional (0%–100%)** — Calcula o percentual concluído com base em quanto da duração útil de cada tarefa cai antes da data de referência.
- **Tudo ou nada (0% ou 100%)** — Define as tarefas como 0% ou 100% com base em se terminam até a data de referência.

### Reagendar Trabalho Não Concluído

Empurra o trabalho não concluído para começar após uma data especificada:

- Tarefas que não foram iniciadas recebem uma restrição **Começar não antes de**.
- Tarefas em andamento são divididas se **Dividir tarefas em andamento** estiver ativado nas opções de agendamento do projeto.
- Tarefas concluídas não são modificadas.
