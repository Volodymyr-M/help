# Acompanhamento do Progresso

Quando o trabalho começa, atualize o **% Complete** em cada tarefa para acompanhar como o progresso real se compara ao plano. Use **Update Project** para definir o progresso em massa. Conforme o progresso é registrado, o Ingantt calcula automaticamente os [valores reais](/pt/tracking/actuals/index.md) — valores reais e restantes para duração, trabalho, custo e datas.

## % Concluído

Quando seu projeto está em andamento, você precisa acompanhar o progresso. Se mantiver o **% Complete** atualizado para cada tarefa, você pode ver o **% Complete** geral do projeto na tarefa resumo raiz.

Use o campo **% Complete** na caixa de diálogo **Task Properties** para definir o percentual concluído de uma tarefa específica. Tarefas 100% concluídas exibem um ícone de marca de verificação verde na lista de tarefas.

Quando você atualiza o % Concluído:

- Definir acima de 0% define o **Actual Start** da tarefa como a data de início agendada da tarefa.
- Definir como 100% define o **Actual Finish** da tarefa como a data de término agendada da tarefa.
- **Actual Duration** e **Remaining Duration** são calculados automaticamente com base no percentual concluído.
- Se **Updating task status updates resource status** estiver ativado nas configurações do projeto (o padrão), **Actual Work** e **Remaining Work** também são atualizados proporcionalmente.

O **% Complete** de uma tarefa resumo é calculado como uma média ponderada pela duração de todas as subtarefas descendentes que não são tarefas resumo.

> Você também pode acompanhar o progresso usando o comando [Update Project](#atualizar-projeto) para definir o % Concluído de múltiplas tarefas de uma vez com base em uma data de referência.

## Atualizar Projeto

O comando **Update Project** fornece operações de acompanhamento de progresso em massa, acessível pelo menu **Project**.

### Atualizar Trabalho como Concluído

Marque tarefas como concluídas até uma data especificada:

- **Proporcional (0%–100%)** — Calcula o percentual concluído com base em quanto da duração útil de cada tarefa cai antes da data de referência.
- **Tudo ou nada (0% ou 100%)** — Define as tarefas como 0% ou 100% com base em se terminam até a data de referência.

### Reagendar Trabalho Não Concluído

Empurra o trabalho não concluído para começar após uma data especificada:

- Tarefas que não foram iniciadas recebem uma restrição **Start No Earlier Than**.
- Tarefas em andamento são divididas se **Split in-progress tasks** estiver ativado nas opções de agendamento do projeto.
- Tarefas concluídas não são modificadas.
