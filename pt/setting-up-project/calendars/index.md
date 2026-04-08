# Calendários

Feriados, férias, meio-expedientes, turnos noturnos — seu cronograma precisa refletir quando o trabalho realmente acontece. Configure calendários para que o Ingantt pule o tempo não útil e forneça datas realistas.

Calendários definem os dias e horários em que o trabalho pode ser realizado. Os calendários utilizam dois tipos de dados:

- **Dias da semana**: Horário de trabalho definido para cada dia da semana — estabelecendo o cronograma típico e rotineiro.
- **Exceções**: Datas em que o trabalho não é realizado ou é realizado em horários diferentes dos definidos no cronograma semanal.

## Calendário do Projeto

Um projeto tem um **Calendar** associado a ele, conforme especificado na caixa de diálogo **Project Properties**. Esse calendário define como as tarefas que não estão atribuídas a recursos de trabalho são agendadas. Os dias de folga, como finais de semana, também são exibidos no gráfico de Gantt com base nesse calendário.

## Calendário do Recurso

Cada [recurso de trabalho](/pt/building-schedule/resources/index.md#tipo-de-recurso) tem um calendário associado, conforme especificado no campo **Base Calendar** da caixa de diálogo **Resource Properties**. Uma vez que o recurso de trabalho é [atribuído](/pt/building-schedule/assignments/index.md#atribuições-de-recursos-e-unidades) a uma tarefa, seu calendário afeta o agendamento da tarefa.

Quando múltiplos recursos de trabalho são atribuídos a uma tarefa, seus calendários são **interseccionados** — o que significa que o trabalho só é agendado durante os horários em que **todos** os recursos atribuídos estão disponíveis. Por exemplo, se o Recurso A trabalha de segunda a quarta e o Recurso B trabalha de quarta a sexta, uma tarefa atribuída a ambos será agendada apenas às quartas-feiras.

> Se múltiplos recursos compartilham um horário de trabalho semelhante, crie um único calendário e atribua-o a todos eles. Você ainda pode especificar exceções para cada recurso separadamente em **Resource Properties** — por exemplo, férias ou períodos de trabalho ajustados em datas específicas.

## Calendário da Tarefa

Cada tarefa tem uma propriedade **Calendar** na caixa de diálogo **Task Properties**, definida como **NONE** por padrão. Quando definida como **NONE**:

- Se uma tarefa não está atribuída a nenhum recurso de trabalho, a tarefa é agendada de acordo com o calendário do projeto.
- Se uma tarefa está atribuída a recursos de trabalho, a tarefa é agendada de acordo com os calendários deles.

Se a propriedade **Calendar** da tarefa estiver definida como um calendário em vez de **NONE**:

- Se uma tarefa não está atribuída a nenhum recurso de trabalho, a tarefa é agendada de acordo com o calendário especificado.
- Se uma tarefa está atribuída a recursos de trabalho, a tarefa é agendada de acordo com a **interseção** do calendário da tarefa e dos calendários dos recursos — o trabalho só é agendado durante os horários que são úteis tanto no calendário da tarefa quanto em todos os calendários dos recursos. Para usar apenas o calendário da tarefa, ignorando totalmente os calendários dos recursos, marque a opção **Ignore resource calendars**.

## Calendários Predefinidos

O Ingantt possui 3 calendários predefinidos, sendo que um deles (**Standard**) é atribuído ao projeto por padrão.

| Calendário | Descrição                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| **Standard**     | O trabalho é realizado de segunda a sexta-feira, das 8h às 17h com intervalo de 1 hora (12h às 13h).       |
| **Night Shift**  | O trabalho é realizado da noite de segunda à manhã de sábado, das 23h às 8h com intervalo de 1 hora (3h às 4h). |
| **24 Hours**     | O trabalho é realizado 24 horas por dia, todos os dias.                                                         |

Você pode editar qualquer um dos calendários predefinidos usando a caixa de diálogo **Calendar Properties** ou criar seus próprios calendários baseados neles usando a caixa de diálogo **Add Calendar**.

## Semanas de Trabalho

As semanas de trabalho permitem definir alterações na programação semanal para períodos específicos. Por exemplo, você pode ter um período em que todos trabalham meio-expediente em vez das 8 horas padrão, ou um período em que o sábado se torna dia útil.

As semanas de trabalho são configuradas na aba **Work Weeks** da caixa de diálogo **Calendar Properties**. Cada semana de trabalho tem um nome, uma data de início e término, e definições de horário de trabalho por dia da semana.

> As exceções do calendário têm prioridade sobre as semanas de trabalho, que têm prioridade sobre o cronograma padrão dos dias da semana.

## Exceções do Calendário

As exceções do calendário são datas em que o trabalho difere do cronograma semanal regular — incluindo dias de folga.

As exceções do calendário podem ser especificadas:

- Na caixa de diálogo **Resource Properties** para um recurso específico.
- Em **Calendar Properties** para um calendário específico, fazendo com que projetos, recursos ou tarefas que usam esse calendário tenham essa exceção.

Por exemplo, se você deseja configurar férias para uma pessoa, adicione-as como exceção para esse recurso. Se você deseja configurar um feriado para todos, adicione-o como exceção ao calendário que todos utilizam.

Ao adicionar ou editar exceções do calendário, você especifica períodos de horário de trabalho para a exceção. Se não especificar nenhum, a exceção não possui horário de trabalho, ou seja, define um dia de folga.

Cada exceção pode receber um **Name** descritivo (como "Feriado de Natal" ou "Escritório Fechado") que é exibido na lista de exceções.

### Exceções Recorrentes

As exceções do calendário podem ser configuradas para se repetir em um padrão, em vez de apenas uma data única. Os padrões de recorrência disponíveis incluem:

- **Daily** — A cada N dias ou a cada N dias úteis
- **Weekly** — A cada N semanas em dias da semana especificados
- **Monthly** — Por dia do mês ou por posição (ex.: segunda terça-feira)
- **Yearly** — Por data ou por posição (ex.: última sexta-feira de novembro)

As exceções recorrentes têm uma condição de término: sem término, terminar por data ou terminar após N ocorrências.

## Calendários Vazios e Parciais

Se você não adicionar nenhum horário de trabalho a um calendário, ele ficará vazio e não poderá ser usado para agendamento. Esses calendários são marcados com um ícone de aviso na lista de calendários, e o número de calendários nessa situação é exibido no menu de navegação.

No entanto, há situações em que seu calendário não está vazio, mas ainda não tem horário de trabalho suficiente para agendar uma tarefa específica. Essas situações só podem ser detectadas quando o agendamento é realizado.

Se você atribuir um calendário vazio — ou um sem horário de trabalho suficiente — a um projeto, recurso ou tarefa e o agendamento não puder prosseguir, um erro é exibido e a última ação é revertida.
