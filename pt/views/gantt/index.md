# Gráfico de Gantt

O gráfico de Gantt é a linha do tempo do seu projeto. Visualize ajustes de nivelamento, linhas de progresso e como o cronograma mudou desde que você definiu a linha de base.

## Visualizações Disponíveis

O Ingantt oferece múltiplas visualizações para trabalhar com seu projeto, acessíveis pelo menu de navegação ou pelo menu **Visualizar**. Todas as visualizações são totalmente funcionais — realize qualquer ação disponível para tarefas em qualquer visualização.

**Visualizações de tarefas:**

- **Tarefas** — lista de tarefas e gráfico de Gantt
- **Gantt de acompanhamento**
- **[Quadro de tarefas](/pt/views/task-views/index.md#quadro-de-tarefas)**
- **[Diagrama de rede](/pt/views/task-views/index.md#diagrama-de-rede)**
- **[Visualização de calendário](/pt/views/task-views/index.md#visualização-de-calendário)**
- **[Linha do tempo](/pt/views/task-views/index.md#linha-do-tempo)**

**Visualizações de recursos:**

- **[Uso de Recursos](/pt/views/resource-views/index.md#uso-de-recursos)**
- **[Uso de Tarefas](/pt/views/resource-views/index.md#uso-de-tarefas)**
- **[Planejador de equipe](/pt/views/resource-views/index.md#planejador-de-equipe)**
- **[Gráfico de recursos](/pt/views/resource-views/index.md#gráfico-de-recursos)**

## Visualização Tasks

A visualização **Tarefas** é a visualização principal que combina a lista de tarefas e o gráfico de Gantt (tela dividida). Você pode configurar quais painéis exibir pelo submenu **Visualizar > Painéis em Tarefas**: Task List e Gantt Chart podem ser alternados independentemente.

## Inspetor de tarefas

O **Inspetor de tarefas** é um painel lateral que mostra detalhes da tarefa selecionada, incluindo fatores de agendamento (o que determina as datas da tarefa), propriedades gerais, recursos, predecessoras, custo e mais. Alterne o Task Inspector pela barra de ferramentas.

A seção **Fatores de agendamento** no topo do Inspector mostra o que está determinando as datas agendadas da tarefa: predecessoras determinantes (mostradas em negrito com um rótulo "Driving"), predecessoras não determinantes (com sua folga relativa), restrições, atrasos de nivelamento, calendários e valores de folga. Tarefas críticas exibem um rótulo "Critical".

## Gantt de nivelamento

Quando o [nivelamento automático](/pt/adjusting-schedule/leveling/index.md#nivelamento-automático) foi aplicado ao seu projeto, um botão de alternância **Gantt de nivelamento** aparece na área do gráfico de Gantt.

Quando ativado, o gráfico de Gantt mostra **barras verdes** na posição pré-nivelamento de cada tarefa (onde a tarefa estava antes do nivelamento automático). As barras de tarefa padrão permanecem nas posições niveladas atuais. Isso permite comparar visualmente o cronograma original com o cronograma nivelado e ver quanto cada tarefa foi atrasada.

Quando desativado, apenas as barras de tarefa padrão são exibidas.

> O botão de alternância Leveling Gantt só é visível quando existem dados de nivelamento. Ele é automaticamente ocultado quando você limpa o nivelamento. Se você abrir um arquivo de projeto que já contém dados de nivelamento, o botão fica disponível mas começa desativado.

## Linhas de Progresso

Quando ativadas, o gráfico de Gantt exibe uma **linha de progresso** — uma linha em ziguezague que indica visualmente se as tarefas estão atrasadas ou adiantadas em relação à data de status. Tarefas atrasadas fazem a linha formar um pico para a esquerda; tarefas adiantadas fazem a linha formar um pico para a direita; tarefas no prazo mantêm a linha reta.

Alterne as linhas de progresso pelo botão flutuante da barra de ferramentas no gráfico de Gantt ou pelo menu **Visualizar**. A linha de progresso também é incluída na saída de PDF/impressão quando ativada.
