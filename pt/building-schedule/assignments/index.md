# Atribuições

Controle como os recursos são alocados às tarefas — quem trabalha em quê, quanto do seu tempo e como o esforço é distribuído. Ajuste unidades, contornos de trabalho e horas extras para corresponder a como sua equipe realmente trabalha.

## Atribuições de Recursos e Unidades

Os recursos podem ser atribuídos a uma tarefa na aba **Resources** da caixa de diálogo **Task Properties**.

Para atribuir um recurso, marque a caixa de seleção na linha do recurso. Para desatribuir um recurso, desmarque a caixa de seleção.

As atribuições de recursos de trabalho ou material possuem **Units**, mostradas na coluna correspondente. Clique no botão **Edit** para alterar o valor padrão de **Units** da atribuição.

Por padrão, os recursos de trabalho são atribuídos com unidades correspondentes às [Max Units](/pt/building-schedule/resources/index.md#unidades-máximas) do recurso (100% para um recurso em tempo integral). Isso significa que o recurso dedicará todo o seu tempo disponível no calendário à tarefa. Você pode alterar o valor para qualquer número.

Por padrão, os recursos de material são atribuídos com 1 unidade. Isso significa que 1 unidade desse material será utilizada ao completar a tarefa. A unidade representa o que você definiu para o material (caixa, galão, tonelada, etc.). Você pode alterar o valor padrão e definir qualquer número de unidades.

## Contornos de Trabalho

Quando um recurso de trabalho é atribuído a uma tarefa, o esforço (trabalho) é distribuído ao longo da duração da tarefa de acordo com um **contorno de trabalho**. Por padrão, o trabalho é distribuído uniformemente (contorno Flat), mas o Ingantt suporta vários padrões de contorno que alteram como o esforço é distribuído ao longo do tempo:

| Contorno | Descrição |
|---------|-------------|
| **Flat** | Esforço uniforme durante toda a duração (padrão) |
| **Back Loaded** | O esforço aumenta no final da tarefa |
| **Front Loaded** | O esforço é mais pesado no início e diminui |
| **Double Peak** | Dois picos de intensidade durante a tarefa |
| **Early Peak** | Atinge o pico cedo e depois diminui |
| **Late Peak** | Aumenta até um pico próximo ao final |
| **Bell** | Curva em sino — pico no meio |
| **Turtle** | Curva em sino mais achatada — distribuição mais suave |

Os contornos de trabalho afetam como o trabalho é distribuído entre os períodos de tempo e são preservados ao abrir e salvar arquivos de projeto.

## Atraso de Atribuição

Cada atribuição de recurso em uma tarefa tem uma propriedade **Delay** que define um deslocamento de quando o recurso começa a trabalhar em relação à data de início da tarefa. Por exemplo, se uma tarefa começa na segunda-feira e um recurso tem um atraso de 2 dias, esse recurso começa a trabalhar na quarta-feira.

O atraso é definido na caixa de diálogo **Edit Resource Assignment** e se aplica apenas a atribuições de recursos de trabalho. Pode ser usado para escalonar os horários de início dos recursos em uma tarefa.

## Trabalho com Horas Extras

Para recursos de trabalho, você pode designar uma parte do trabalho total de uma atribuição como horas extras. O trabalho com horas extras é um subconjunto do trabalho total, não um adicional: **Work = Regular Work + Overtime Work**.

O custo da tarefa é calculado usando as partes regular e de horas extras separadamente:
**Cost = Regular Work × Standard Rate + Overtime Work × Overtime Rate + Cost Per Use**

Para tarefas do tipo Fixed Units e Fixed Work, inserir trabalho com horas extras reduz a duração da tarefa porque a duração é baseada apenas no trabalho regular.

Defina o trabalho com horas extras na caixa de diálogo **Edit Resource Assignment**. Três colunas opcionais estão disponíveis na tabela de tarefas: **Overtime Work**, **Overtime Cost** e **Regular Work**.
