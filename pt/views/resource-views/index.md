# Visualizações de Recursos

Veja a distribuição da carga de trabalho em toda a sua equipe. As visualizações de uso mostram quem está fazendo o quê e quando, o Planejador de Equipe permite arrastar para reatribuir, e o Gráfico de Recursos revela a capacidade de relance.

## Uso de Recursos

A visualização **Resource Usage** permite ver todas as atribuições de recursos e a quantidade de [Trabalho](/pt/building-schedule/task-properties/index.md#trabalho) que cada recurso de trabalho realiza durante cada período na linha do tempo.

Semelhante ao gráfico de Gantt, você pode aumentar ou diminuir o zoom da linha do tempo para ver uma visualização mais ou menos detalhada.

Se um recurso precisa realizar mais trabalho do que os calendários permitem para o período de tempo dado, o **Work** correspondente é destacado em vermelho.

Na visualização Resource Usage, você pode clicar duas vezes nas células de trabalho no nível de atribuição para editar a distribuição de trabalho diretamente. Quando você edita uma célula de trabalho, o contorno de trabalho da atribuição muda automaticamente para "Contoured" e os dados personalizados de trabalho por dia são salvos.

## Uso de Tarefas

A visualização **Task Usage** é o inverso do Resource Usage — mostra uma visualização centrada em tarefas da distribuição de trabalho. Cada tarefa aparece como uma linha de nível superior com suas atribuições de recursos recuadas abaixo.

O painel esquerdo mostra detalhes de tarefas e atribuições, enquanto o painel direito mostra valores de trabalho distribuídos entre os períodos de tempo. Os valores de trabalho no nível da tarefa são mostrados em negrito. Valores de trabalho de atribuições superalocadas são destacados em vermelho.

## Planejador de Equipe

A visualização **Team Planner** é uma visualização de agendamento centrada em recursos onde cada linha representa um recurso de trabalho. As barras de tarefas são posicionadas na linha de cada recurso ao longo de uma escala de tempo compartilhada.

Principais funcionalidades:

- **Arraste horizontalmente** para reagendar uma tarefa — a tarefa recebe uma restrição Start No Earlier Than na nova posição
- **Arraste verticalmente** para reatribuir uma tarefa a um recurso diferente
- **Arraste diagonalmente** para reagendar e reatribuir em uma operação
- Arraste para ou da seção **Unassigned Tasks** para adicionar ou remover atribuições de recursos
- Recursos superalocados são mostrados com texto vermelho no painel esquerdo
- Tarefas 100% concluídas não podem ser arrastadas

## Gráfico de Recursos

A visualização **Resource Graph** mostra um histograma por recurso da alocação de carga de trabalho ao longo do tempo. Exibe um recurso de trabalho por vez com barras verticais para cada período de tempo. Navegue entre recursos usando os botões de seta no painel esquerdo.

Sete tipos de gráfico estão disponíveis:

| Tipo de Gráfico | Descrição |
|------------|-------------|
| **Peak Units** | Percentual da capacidade do recurso utilizada por período (padrão) |
| **Work** | Horas de trabalho por período |
| **Overallocation** | Apenas as horas excedentes além da capacidade |
| **Percent Allocation** | Igual a Peak Units com exibição percentual |
| **Remaining Availability** | Capacidade não utilizada em horas |
| **Work Availability** | Capacidade total do calendário em horas |
| **Unit Availability** | Percentual efetivo de unidades máximas |

Barras azuis representam trabalho dentro da capacidade; barras vermelhas representam a parte superalocada que excede a capacidade.
