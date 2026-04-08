# Visualizações de Tarefas

Além do gráfico de Gantt, visualize tarefas em um quadro Kanban, calendário mensal, diagrama de rede ou linha do tempo. Cada visualização destaca diferentes aspectos do seu cronograma.

## Quadro de Tarefas

A visualização **Task Board** exibe tarefas como cartões organizados em colunas que representam estágios do fluxo de trabalho (estilo Kanban).

Novos projetos começam com três colunas padrão: "Not Started" (0%), "In Progress" (50%) e "Complete" (100%). Cada coluna tem um mapeamento de % Concluído — quando você arrasta um cartão para uma coluna, o percentual concluído da tarefa é atualizado automaticamente.

Você pode adicionar, editar, renomear, reordenar e excluir colunas. Cada coluna tem um botão **Add Task** na parte inferior para criar tarefas diretamente naquele estágio.

Apenas tarefas que não são resumo, ativas e com "Show on board" ativado aparecem no quadro. A configuração "Show on board" está disponível na aba **Visual** da caixa de diálogo **Task Properties**.

> Arraste os cartões de tarefas entre colunas para alterar seu status. Quando o % Concluído de uma tarefa muda em outro lugar (via caixa de diálogo, edição inline ou Update Project), o cartão se move automaticamente para a coluna correspondente.

## Diagrama de Rede

A visualização **Network Diagram** exibe tarefas como nós retangulares dispostos em um layout de fluxograma da esquerda para a direita. Tarefas sem predecessoras aparecem na coluna mais à esquerda, e cada tarefa subsequente aparece após todas as suas predecessoras.

- Tarefas normais mostram ID, duração, datas de início/término e recursos
- Tarefas resumo mostram ID, duração, datas de início/término e percentual concluído
- Marcos mostram ID e data de início
- Tarefas do caminho crítico têm cabeçalhos e bordas vermelhas
- O progresso é indicado por sobreposições de linhas diagonais: uma linha para tarefas em andamento, linhas cruzadas para tarefas concluídas

Você pode recolher/expandir tarefas resumo, clicar para selecionar, clicar duas vezes para editar e clicar com o botão direito para o menu de contexto. As setas de dependência são desenhadas entre os nós para todos os quatro tipos de vínculo.

## Visualização de Calendário

A **Calendar View** exibe uma grade de calendário mensal com as tarefas mostradas como barras horizontais nas datas agendadas.

- Alterne entre as visualizações **Month** e **Week** usando o botão de alternância no cabeçalho
- Ative o modo **Work week** para mostrar apenas dias úteis (visualização de 5 dias)
- Navegue com os botões Anterior/Próximo ou pule para hoje
- Dias não úteis são mostrados com um fundo distinto
- Marcos aparecem como ícones de losango
- Clique duas vezes em um dia vazio para criar uma nova tarefa de 1 dia nessa data

Tarefas que se estendem além do limite de uma semana continuam na linha seguinte. Quando múltiplas tarefas se sobrepõem no mesmo dia, elas se empilham verticalmente.

## Linha do Tempo

A **Timeline** é um painel retrátil que aparece acima do gráfico de Gantt, mostrando uma visão simplificada das tarefas selecionadas pelo usuário em um eixo temporal horizontal.

Para adicionar uma tarefa à linha do tempo, clique com o botão direito e escolha **Display on Timeline**, ou marque a opção na aba **Visual** da caixa de diálogo Task Properties.

As tarefas na linha do tempo podem ser exibidas como barras ou chamadas (rótulos de texto com linhas conectoras verticais). Você pode alternar entre os modos arrastando uma barra de tarefa acima ou abaixo da linha separadora horizontal no painel da linha do tempo. A linha do tempo também mostra um marcador de hoje e uma sobreposição de viewport que pode ser arrastada para rolar o gráfico de Gantt.

Alterne a Timeline pelo menu **View**.

## Gantt de Acompanhamento

A visualização **Tracking Gantt** é semelhante à visualização Tasks padrão, mas com o destaque do caminho crítico sempre ativado e a Baseline 0 exibida se tiver sido salva. Quando você sai do Tracking Gantt, as configurações de visibilidade do caminho crítico e da linha de base são restauradas ao estado anterior.

Use o Tracking Gantt para monitorar o progresso do projeto em relação ao plano da linha de base.
