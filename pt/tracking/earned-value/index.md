# Valor Agregado

O Gerenciamento de Valor Agregado (EVM) combina medições de escopo, cronograma e custo para avaliar se o seu projeto está no prazo e dentro do orçamento. Defina uma data de status e uma linha de base, e o Ingantt calcula as métricas EVM padrão da indústria.

## Data de Status

A **Status Date** define a data usada para acompanhamento de progresso e cálculos de Valor Agregado. Quando definida, uma linha vertical verde é exibida no gráfico de Gantt nessa data.

Quando a data de status não está definida, a data atual é usada para os cálculos. Você pode definir a data de status na caixa de diálogo **Earned Value Options**, acessível pelo menu **Project**.

## Gerenciamento de Valor Agregado

O Ingantt suporta o Gerenciamento de Valor Agregado — uma técnica de gerenciamento de projetos que integra dados de escopo, cronograma e custo para avaliar o desempenho do projeto.

### Configurando o Valor Agregado

1. Crie uma [linha de base](/pt/tracking/baselines/index.md#definindo-uma-linha-de-base) para capturar o cronograma e os custos planejados.
2. Defina a **Status Date** na caixa de diálogo **Earned Value Options** (acessível pelo menu **Project**) ou deixe o padrão como a data atual.
3. Atualize os valores de [% Concluído](/pt/tracking/progress/index.md#-concluído) das tarefas conforme o trabalho progride.

### Métricas EVM Disponíveis

As seguintes colunas EVM podem ser adicionadas à lista de tarefas pela caixa de diálogo **Options**:

| Métrica | Descrição |
|--------|-------------|
| **BCWS** | Custo Orçado do Trabalho Agendado (Valor Planejado) |
| **BCWP** | Custo Orçado do Trabalho Realizado (Valor Agregado) |
| **ACWP** | Custo Real do Trabalho Realizado |
| **BAC** | Orçamento no Término |
| **EAC** | Estimativa no Término |
| **VAC** | Variação no Término |
| **SV** | Variação de Cronograma |
| **CV** | Variação de Custo |
| **SPI** | Índice de Desempenho de Cronograma |
| **CPI** | Índice de Desempenho de Custo |
| **TCPI** | Índice de Desempenho para Término |
| **SV%** | Percentual de Variação de Cronograma |
| **CV%** | Percentual de Variação de Custo |

### Método de Valor Agregado

Cada tarefa pode usar um de dois métodos para calcular o BCWP (Valor Agregado):

- **% Complete** (padrão) — Usa o percentual concluído da tarefa para calcular o valor agregado.
- **Physical % Complete** — Usa um percentual concluído físico acompanhado separadamente. Útil para medição de progresso baseada em entregas.

Defina o método para tarefas individuais na aba **Cost and EV** da caixa de diálogo **Task Properties**. Altere o método padrão para novas tarefas na caixa de diálogo **Earned Value Options**.

### Linha de Base de Valor Agregado

Os cálculos EVM utilizam uma linha de base específica. Você pode escolher qual linha de base (`Baseline 0` a `Baseline 10`) é usada para o valor agregado na caixa de diálogo **Earned Value Options**. O padrão é `Baseline 0`.
