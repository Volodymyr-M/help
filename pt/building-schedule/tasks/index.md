# Tarefas

Todo cronograma começa com tarefas. Defina o que precisa ser feito, quanto tempo vai levar e quando deve ser concluído. Com as tarefas definidas, você verá a linha do tempo do projeto ganhar forma no gráfico de Gantt.

## Tarefas Resumo

As tarefas resumo ajudam a organizar suas tarefas agrupando-as. Para criar uma tarefa resumo, selecione as tarefas que deseja agrupar e clique no botão **Increase Indent** na barra de ferramentas para recuá-las. Para converter uma tarefa resumo de volta em uma tarefa regular, selecione todas as suas subtarefas e clique no botão **Decrease Indent** para remover o recuo.

Como as tarefas resumo agrupam outras tarefas, suas propriedades são derivadas das subtarefas em vez de definidas diretamente. Sua duração representa a duração geral de todas as tarefas dentro do grupo: a data de término de uma tarefa resumo é a data de término mais tardia entre suas subtarefas.

Uma tarefa resumo também exibe o percentual concluído geral, o custo total e o trabalho total de suas subtarefas.

No gráfico de Gantt, as tarefas resumo são mostradas como barras pretas. Na lista de tarefas, você pode **expandir** ou **recolher** as tarefas resumo para mostrar ou ocultar suas subtarefas.

![Resumo](/images/building-schedule/tasks/summary.png)

## Tarefa Resumo Raiz

No Ingantt, sempre existe uma tarefa resumo para o projeto inteiro. Essa tarefa é a tarefa número 0, acima de todas as suas tarefas.

A tarefa resumo raiz pode não estar visível por padrão. Para alterar isso, marque **Show root summary task** no menu **View** ou na caixa de diálogo **Options**.

Assim como qualquer outra tarefa resumo, a tarefa resumo raiz mostra os dados gerais de suas subtarefas. Como todas as tarefas do seu cronograma são subtarefas dela, a tarefa resumo raiz mostra os dados gerais de todo o seu projeto.

O nome da tarefa resumo raiz é o mesmo que o nome do projeto.

![Tarefa Resumo Raiz](/images/building-schedule/tasks/root_summary.png)

## Tarefas Agendadas Manualmente

Por padrão, todas as tarefas no Ingantt são **agendadas automaticamente** — suas datas de início e término são calculadas pelo algoritmo de agendamento com base em dependências, restrições e calendários.

Você pode alternar uma tarefa para o modo **Manually scheduled** usando a caixa de seleção na caixa de diálogo **Task Properties**. Quando uma tarefa é agendada manualmente:

- Ela **não é afetada pelo algoritmo de agendamento** — suas datas são definidas por você
- Você pode inserir datas de **Start** e **Finish** usando os campos de data ou o seletor de datas
- Você pode digitar **valores em texto** (como "A definir", "início de março" ou "2-3 semanas") em vez de datas reais quando ainda não tem certeza sobre o cronograma
- Um ícone de alfinete é exibido para tarefas agendadas manualmente na lista de tarefas

> Use tarefas agendadas manualmente como marcadores de posição quando o cronograma exato é desconhecido, ou quando as datas são fixadas por fatores externos.

## Tarefas Recorrentes

As tarefas recorrentes representam atividades que se repetem em um cronograma regular, como reuniões diárias, revisões semanais ou relatórios mensais. Você pode criar tarefas recorrentes pelo menu **Insert** escolhendo **Add recurring task**.

Ao criar uma tarefa recorrente, você especifica:

- **Occurrence duration** — A duração de cada ocorrência individual
- **Recurrence pattern** — Padrão diário, semanal, mensal ou anual com data de início e condição de término (sem término, terminar por data ou terminar após N ocorrências)
- **Working days only** — Limita as ocorrências a dias úteis

As tarefas recorrentes aparecem como uma tarefa resumo contendo as ocorrências individuais. Cada ocorrência pode ser concluída independentemente. Ao excluir uma tarefa recorrente, você é solicitado a escolher entre excluir a série inteira ou apenas a ocorrência selecionada.

## Tarefas Divididas

Uma tarefa pode ser dividida em partes não contíguas, representando interrupções no trabalho. Para dividir uma tarefa, selecione-a e escolha **Split task** na barra de ferramentas ou no menu de contexto com clique direito. A caixa de diálogo **Split Task** oferece dois modos:

- **By duration** — Especifique um deslocamento a partir do início da tarefa e uma duração para a divisão
- **By dates** — Especifique as datas de parada e retomada da divisão

As tarefas divididas são exibidas como barras separadas com conectores pontilhados entre as partes no gráfico de Gantt. Cada parte dividida tem sua própria alça de redimensionamento, e arrastar uma parte até encontrar a parte adjacente mescla as duas. Para remover uma divisão, selecione a tarefa e escolha **Remove split** na barra de ferramentas.

## Tarefas Inativas

Uma tarefa pode ser marcada como **inativa** desmarcando a caixa de seleção **Active** na aba **General** da caixa de diálogo **Task Properties**, ou usando a opção **Inactivate task** no submenu **Edit > Display** ou no menu de contexto com clique direito.

As tarefas inativas são:

- Excluídas do agendamento — não afetam o caminho crítico ou outras tarefas
- Excluídas dos totais de tarefas resumo para duração, trabalho, custo e % Concluída
- Excluídas da detecção de superalocação de recursos e do nivelamento automático
- Excluídas dos cálculos de Valor Agregado

As tarefas inativas permanecem visíveis na lista de tarefas e no gráfico de Gantt, mas aparecem com opacidade reduzida e texto tachado. Suas datas são preservadas para referência.

Inativar uma tarefa resumo propaga para todas as suas subtarefas. Reativar uma subtarefa reativa automaticamente a tarefa resumo pai, se necessário. Tarefas com progresso real (% Concluída > 0) não podem ser inativadas.

> Use tarefas inativas para manter cenários hipotéticos no seu cronograma sem afetar o plano ativo.
