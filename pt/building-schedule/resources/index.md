# Recursos

Adicione as pessoas, equipamentos e materiais que realizarão o trabalho. Uma vez que os recursos são atribuídos às tarefas, o Ingantt pode calcular a carga de trabalho, detectar superalocação e considerar a disponibilidade de cada pessoa.

## Tipo de Recurso

O Ingantt suporta três tipos de recursos:

| Tipo de Recurso | Descrição                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------|
| **Work**      | Alguém ou algo que realiza sua tarefa. Pode ser uma pessoa, equipe, empresa terceirizada ou equipamento. |
| **Material**  | Itens usados para completar sua tarefa, como materiais, ingredientes ou componentes.                 |
| **Cost**      | Custos que podem ser aplicados a múltiplas tarefas, como custos de entrega, custos de implantação ou quaisquer custos fixos. |

Apenas recursos de trabalho, quando atribuídos a tarefas, afetam o agendamento.

Todos os tipos de recursos afetam o cálculo de custos se o campo **Cost** do recurso estiver preenchido.

## Unidades Máximas

Os recursos de trabalho possuem uma propriedade **Max Units** (padrão 100%) que representa a capacidade disponível do recurso. Por exemplo:

- **100%** — Um recurso em tempo integral
- **50%** — Um recurso em meio período (disponível metade do tempo)
- **300%** — Uma equipe de 3 membros em tempo integral representada como um único recurso

As Unidades Máximas são usadas pela [detecção de superalocação](/pt/adjusting-schedule/leveling/index.md#recursos-superalocados) e pelo [nivelamento automático](/pt/adjusting-schedule/leveling/index.md#nivelamento-automático) para determinar se um recurso tem mais trabalho do que consegue realizar. Ao atribuir um recurso de trabalho a uma tarefa, as unidades de atribuição padrão correspondem às Unidades Máximas do recurso.

## Períodos de Disponibilidade do Recurso

A disponibilidade de um recurso de trabalho pode mudar ao longo do tempo. Por exemplo, um membro da equipe pode trabalhar em tempo integral nos primeiros três meses e depois passar para meio período.

Na aba **Availability** da caixa de diálogo **Resource Properties**, você pode definir múltiplos períodos de disponibilidade, cada um com um intervalo de datas e um percentual de disponibilidade. Para datas que estão dentro de um período definido, as unidades do período substituem as Unidades Máximas base do recurso para cálculos de capacidade.

## Recursos Genéricos

Um recurso pode ser marcado como **Generic** usando a caixa de seleção na caixa de diálogo **Resource Properties**. Recursos genéricos são marcadores de posição que representam uma função (ex.: "Desenvolvedor", "Designer") em vez de uma pessoa específica. São úteis durante o planejamento inicial, quando os membros específicos da equipe ainda não foram identificados.

Os recursos genéricos são indicados por um ícone de crachá na lista de recursos. A flag de genérico é puramente informativa — não afeta o agendamento ou os cálculos de custo.

## Tipo de Reserva

Cada recurso tem um **Booking Type** que pode ser definido como **Committed** (padrão) ou **Proposed** na caixa de diálogo **Resource Properties**.

- **Committed** — O recurso está firmemente reservado para o projeto.
- **Proposed** — O recurso está provisoriamente atribuído para fins de planejamento.

Por padrão, o nivelamento automático exclui recursos propostos. Você pode incluí-los ativando "Level resources with the proposed booking type" na caixa de diálogo [Leveling Options](/pt/adjusting-schedule/leveling/index.md#opções-de-nivelamento).
