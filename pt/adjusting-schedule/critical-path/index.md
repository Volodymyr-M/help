# Caminho Crítico

Essas são as tarefas que você não pode se dar ao luxo de atrasar — qualquer deslize atrasa o projeto inteiro. Identifique-as cedo, acompanhe-as de perto e você saberá exatamente onde focar para manter o prazo.

## Tarefas Críticas

Quando você coloca seu plano em ação, algumas tarefas terminam antes do previsto — e outras não. Algumas tarefas podem levar mais tempo sem estender a linha do tempo do projeto. Essas tarefas têm margem de sobra, conhecida como _folga_.

Outras tarefas têm folga zero — qualquer atraso desloca a data de término do projeto. Estas são chamadas de _tarefas críticas_. Para manter seu projeto no prazo, dê atenção especial a elas ao acompanhar o progresso.

Uma tarefa também é considerada crítica se:
- Possui uma [restrição](/pt/building-schedule/constraints/index.md#restrições) **Must start on** ou **Must finish on**
- Possui uma [restrição](/pt/building-schedule/constraints/index.md#restrições) **As late as possible** em um projeto planejado a partir da Data de Início
- Sua data de término é igual ou posterior ao seu [prazo](/pt/building-schedule/task-properties/index.md#prazo)
- Possui **folga negativa** — um conflito de agendamento onde restrições forçam a tarefa a ser antecipada em relação às suas dependências

Tarefas 100% concluídas nunca são marcadas como críticas, independentemente de outras condições.

O Ingantt detecta automaticamente as tarefas críticas. Se a opção **Highlight critical tasks** estiver ativada (via menu **View**, menu **Chart** na barra de menus ou caixa de diálogo **Options**), essas tarefas são exibidas em vermelho.

Tarefas com folga negativa também exibem um ícone de aviso na lista de tarefas, indicando um conflito de agendamento. Isso normalmente ocorre quando uma restrição **Start no later than** ou **Finish no later than** entra em conflito com as dependências da tarefa.

![Crítico](/images/building-schedule/tasks/critical.png)

## Opções do Caminho Crítico

Na aba **Other** da caixa de diálogo **Project Properties**, você pode configurar como o caminho crítico é calculado:

- **Calculate multiple critical paths** — Quando ativada, cada grupo desconectado de tarefas vinculadas recebe seu próprio caminho crítico. Quando desativada (o padrão), tarefas sem sucessoras derivam sua data de término mais tarde a partir da data de término do projeto.
- **Critical slack limit** — Por padrão, tarefas com folga zero ou negativa são críticas. Você pode aumentar esse limite para que tarefas com folga de até o número especificado de dias também sejam consideradas críticas.
