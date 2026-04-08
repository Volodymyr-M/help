# Linhas de Base

Salve uma fotografia do seu cronograma antes de o trabalho começar e depois compare-a com o estado atual para ver onde o projeto desviou.

Uma linha de base captura a data de início, data de término, duração, trabalho e custo de cada tarefa em um determinado momento.

## Definindo uma Linha de Base

Defina uma linha de base a partir do menu **Project** usando o submenu **Set baseline**:

- Você pode definir uma linha de base para todas as tarefas ou apenas para as tarefas selecionadas.
- O Ingantt suporta até 11 linhas de base.

## Visualizando Linhas de Base

Após uma linha de base ter sido salva, você pode visualizá-la no gráfico de Gantt alternando a visibilidade da linha de base na caixa de diálogo **Baselines**. As barras de linha de base aparecem como barras mais finas abaixo das barras de tarefa atuais, usando uma cor distinta por número de linha de base.

Para gerenciar as linhas de base, use o item **Baselines** no menu **Project**. A caixa de diálogo **Baselines** permite:

- Visualizar todas as linhas de base salvas
- Remover linhas de base que não são mais necessárias
- Designar qual linha de base é usada para os cálculos de [Valor Agregado](/pt/tracking/earned-value/index.md#gerenciamento-de-valor-agregado)

## Colunas de Linha de Base e Variação

Você pode adicionar colunas de linha de base (**Start**, **Finish**, **Duration**, **Work**, **Cost**) e colunas de variação (**Start Variance**, **Finish Variance**, etc.) à lista de tarefas pela caixa de diálogo **Options**. As colunas de variação mostram a diferença entre o cronograma atual e a [linha de base de Valor Agregado](/pt/tracking/earned-value/index.md#linha-de-base-de-valor-agregado).

## Planos Provisórios

Os planos provisórios armazenam fotografias leves do cronograma (apenas datas de **Start** e **Finish**) para comparação rápida sem a sobrecarga de linhas de base completas. O Ingantt suporta até 10 planos provisórios (`Interim Plan 1` a `Interim Plan 10`).

Defina e limpe planos provisórios a partir do item **Interim Plans** no menu **Project**. Você pode exibir as datas dos planos provisórios como colunas na lista de tarefas.
