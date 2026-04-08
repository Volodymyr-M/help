# Gráfico de Gantt

O gráfico de Gantt é a linha do tempo do seu projeto. Visualize ajustes de nivelamento, linhas de progresso e como o cronograma mudou desde que você definiu a linha de base.

## Visualizações Disponíveis

O Ingantt oferece múltiplas visualizações para trabalhar com seu projeto, acessíveis pelo menu de navegação ou pelo menu **View**. Todas as visualizações são totalmente funcionais — realize qualquer ação disponível para tarefas em qualquer visualização.

**Visualizações de tarefas:**

- **Tasks** — lista de tarefas e gráfico de Gantt
- **Tracking Gantt**
- **[Task Board](/pt/views/task-views/index.md#quadro-de-tarefas)**
- **[Network Diagram](/pt/views/task-views/index.md#diagrama-de-rede)**
- **[Calendar View](/pt/views/task-views/index.md#visualização-de-calendário)**
- **[Timeline](/pt/views/task-views/index.md#linha-do-tempo)**

**Visualizações de recursos:**

- **[Resource Usage](/pt/views/resource-views/index.md#uso-de-recursos)**
- **[Task Usage](/pt/views/resource-views/index.md#uso-de-tarefas)**
- **[Team Planner](/pt/views/resource-views/index.md#planejador-de-equipe)**
- **[Resource Graph](/pt/views/resource-views/index.md#gráfico-de-recursos)**

## Visualização Tasks

A visualização **Tasks** é a visualização principal que combina a lista de tarefas e o gráfico de Gantt (tela dividida). Você pode configurar quais painéis exibir pelo submenu **View > Panels in Tasks**: Task List e Gantt Chart podem ser alternados independentemente.

## Inspetor de Tarefas

O **Task Inspector** é um painel lateral que mostra detalhes da tarefa selecionada, incluindo fatores de agendamento (o que determina as datas da tarefa), propriedades gerais, recursos, predecessoras, custo e mais. Alterne o Task Inspector pela barra de ferramentas.

A seção **Scheduling Factors** no topo do Inspector mostra o que está determinando as datas agendadas da tarefa: predecessoras determinantes (mostradas em negrito com um rótulo "Driving"), predecessoras não determinantes (com sua folga relativa), restrições, atrasos de nivelamento, calendários e valores de folga. Tarefas críticas exibem um rótulo "Critical".

## Gantt de Nivelamento

Quando o [nivelamento automático](/pt/adjusting-schedule/leveling/index.md#nivelamento-automático) foi aplicado ao seu projeto, um botão de alternância **Leveling Gantt** aparece na área do gráfico de Gantt.

Quando ativado, o gráfico de Gantt mostra **barras verdes** na posição pré-nivelamento de cada tarefa (onde a tarefa estava antes do nivelamento automático). As barras de tarefa padrão permanecem nas posições niveladas atuais. Isso permite comparar visualmente o cronograma original com o cronograma nivelado e ver quanto cada tarefa foi atrasada.

Quando desativado, apenas as barras de tarefa padrão são exibidas.

> O botão de alternância Leveling Gantt só é visível quando existem dados de nivelamento. Ele é automaticamente ocultado quando você limpa o nivelamento. Se você abrir um arquivo de projeto que já contém dados de nivelamento, o botão fica disponível mas começa desativado.

## Linhas de Progresso

Quando ativadas, o gráfico de Gantt exibe uma **linha de progresso** — uma linha em ziguezague que indica visualmente se as tarefas estão atrasadas ou adiantadas em relação à data de status. Tarefas atrasadas fazem a linha inclinar para a esquerda; tarefas adiantadas fazem a linha inclinar para a direita; tarefas no prazo mantêm a linha reta.

Alterne as linhas de progresso pelo botão flutuante da barra de ferramentas no gráfico de Gantt ou pelo menu **View**. A linha de progresso também é incluída na saída de PDF/impressão quando ativada.
