# Nivelamento de Recursos

É fácil atribuir acidentalmente mais trabalho do que uma pessoa consegue realizar em um dia. O nivelamento desloca automaticamente as tarefas para que ninguém fique sobrecarregado, embora possa estender a data de término do projeto.

## Recursos Superalocados

Um recurso de trabalho pode estar **superalocado**, ou seja, tem mais trabalho atribuído do que consegue realizar com base no seu calendário e disponibilidade. Por exemplo, se o seu projeto tem duas tarefas, cada uma com duração de um dia e sem [dependência](/pt/building-schedule/dependencies/index.md#predecessoras-e-dependências) entre elas, ambas atribuídas ao mesmo recurso de trabalho, o recurso está superalocado. O recurso precisa fazer dois dias de trabalho em um dia do calendário. Para resolver, basta vincular as duas tarefas com uma dependência.

Se uma tarefa tem recursos superalocados atribuídos, o Ingantt exibe um ícone especial na lista de tarefas.

Se um recurso está superalocado, o Ingantt exibe um ícone especial na visualização **Resources** e na visualização **Resource Usage**.

Além disso, o Ingantt contabiliza essas tarefas e recursos e exibe os números no menu de navegação.

## Nivelamento Automático

As dependências entre tarefas controlam sua posição na linha do tempo. Em projetos maiores, é fácil perder uma dependência — resultando em múltiplas tarefas atribuídas ao mesmo recurso de trabalho agendadas ao mesmo tempo. O recurso fica superalocado e o Ingantt notifica você com ícones especiais nas listas de tarefas e recursos.

Você pode resolver a superalocação manualmente definindo dependências ou restrições para mover algumas tarefas de forma que o trabalho não seja realizado simultaneamente.

Uma alternativa para resolver a superalocação é o nivelamento automático. Se você escolher **Auto-level resources** no menu **Project**, o Ingantt desloca automaticamente algumas tarefas adiante na linha do tempo para evitar a superalocação de recursos. Você pode limpar esses ajustes automáticos escolhendo **Clear leveling** no menu **Project**.

O comando de nivelamento automático oferece três opções de escopo:

- **All tasks** — Nivela todas as tarefas do projeto
- **Selected tasks** — Nivela apenas as tarefas selecionadas
- **Selected resources** — Nivela apenas os conflitos de superalocação para os recursos selecionados (disponível nas visualizações Resources e Resource Usage)

### Como o Nivelamento Automático Funciona

Quando você executa **Auto-level resources**, o Ingantt resolve as superalocações **atrasando ou dividindo tarefas**. Ele não reatribui recursos nem altera unidades de atribuição.

O algoritmo identifica os dias em que um recurso tem mais trabalho atribuído do que sua capacidade permite e então decide quais tarefas conflitantes atrasar. Cada tarefa recebe uma pontuação baseada em vários fatores — tarefas com pontuações mais altas são protegidas contra atrasos:

| Fator | Efeito |
|--------|--------|
| **Dependencies** | Tarefas que são predecessoras de outras tarefas são protegidas |
| **Slack** | Tarefas críticas ou quase críticas (menos folga) são protegidas |
| **Priority** | Tarefas com valor de Prioridade mais alto são protegidas |
| **Constraints** | Tarefas com restrições de agendamento são protegidas |
| **Start Date** | Tarefas mais antigas são parcialmente protegidas |
| **Duration** | Tarefas mais longas são parcialmente protegidas |

A tarefa com a menor pontuação é atrasada para resolver cada conflito. O processo se repete até que todas as superalocações sejam resolvidas ou nenhum atraso adicional possa ser aplicado.

> O nivelamento automático pode estender a data de término do projeto. Ele resolve o máximo possível de superalocações, mas algumas podem permanecer se as restrições impedirem atrasos adicionais.

### Opções de Nivelamento

Configure o comportamento do nivelamento na caixa de diálogo **Leveling Options**, acessível pelo menu **Project**:

- **Leveling order** — Controla como as tarefas são priorizadas: ID Only (ID ascendente), Standard (pontuação multifatorial) ou Priority Standard (prioridade primeiro, depois fatores padrão; o padrão)
- **Overallocation basis** — Controla a granularidade de detecção: minuto, hora, dia, semana ou mês. As configurações de minuto e hora detectam conflitos mesmo quando os totais diários estão dentro da capacidade, mas as tarefas se sobrepõem dentro de um dia.
- **Adjust individual assignments** — Quando ativada e uma tarefa tem múltiplas atribuições de recurso, apenas a atribuição do recurso superalocado é atrasada em vez da tarefa inteira
- **Create splits in remaining work** — Quando ativada, o algoritmo de nivelamento pode dividir o trabalho em torno de conflitos em vez de atrasar tarefas inteiras
- **Level only within available slack** — Restringe os atrasos de nivelamento para não exceder a folga total de uma tarefa, impedindo a extensão da data de término do projeto
- **Leveling range** — Restringe o nivelamento a tarefas dentro de uma janela de datas específica

### Isentos do Nivelamento

As seguintes tarefas e recursos nunca são afetados pelo nivelamento automático:

- Tarefas com [Priority](#prioridade) definida como **1000**
- Tarefas com **Can Level** definido como **false** (na aba **Leveling** da caixa de diálogo Task Properties)
- Tarefas com [restrição](/pt/building-schedule/constraints/index.md#restrições) **Must start on** ou **Must finish on**
- [Tarefas resumo](/pt/building-schedule/tasks/index.md#tarefas-resumo)
- Marcos com duração zero
- Tarefas totalmente concluídas (100%)
- Recursos com **Can Level** definido como **false** na caixa de diálogo Resource Properties
- Recursos com [tipo de reserva](/pt/building-schedule/resources/index.md#tipo-de-reserva) **Proposed** (a menos que a opção de nivelamento para incluir recursos propostos esteja ativada)

### Renivelamento e Limpeza

Cada vez que você executa **Auto-level resources**, qualquer nivelamento anterior é automaticamente limpo primeiro. O nivelamento sempre parte de um cronograma limpo e não nivelado para evitar que os atrasos se acumulem.

Se você modificar o cronograma após o nivelamento (adicionar tarefas, alterar dependências, etc.), os atrasos de nivelamento existentes são preservados, mas podem não resolver mais todas as superalocações. Execute **Auto-level resources** novamente para renivelar o cronograma atualizado.

Para remover todos os atrasos de nivelamento e retornar ao cronograma original calculado pelo CPM, escolha **Clear leveling** no menu **Project**.

### Gantt de Nivelamento

Após executar o nivelamento automático, um botão de alternância **Leveling Gantt** aparece na área do gráfico de Gantt. Quando ativado, ele desenha barras verdes nas posições pré-nivelamento — onde as tarefas estavam antes do nivelamento — enquanto as barras de tarefas padrão permanecem nas posições niveladas atuais. Isso permite comparar o cronograma original com o cronograma nivelado para ver quanto cada tarefa foi atrasada.

O botão de alternância só é visível quando o projeto possui dados de nivelamento e é automaticamente ocultado quando você limpa o nivelamento.

## Prioridade

O campo **Priority** está disponível na aba **Leveling** da caixa de diálogo **Task Properties**. Ele aceita um valor inteiro de 0 a 1000, com padrão de 500.

A Prioridade é usada pelo algoritmo de [nivelamento automático](#nivelamento-automático) para decidir quais tarefas atrasar ao resolver superalocações de recursos. Tarefas com prioridade mais alta têm menor probabilidade de serem atrasadas:

- **0** — Prioridade mais baixa, maior probabilidade de atraso
- **500** — Prioridade padrão
- **1000** — "Não Nivelar" — a tarefa nunca é atrasada pelo nivelamento automático

> Defina a Prioridade como **1000** para tarefas que nunca devem ser movidas pelo nivelamento automático, como tarefas vinculadas a prazos externos ou compromissos fixos.
