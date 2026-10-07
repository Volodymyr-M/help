# Linhas de Base

Salve um instantâneo do seu cronograma antes de o trabalho começar e depois compare-o com o estado atual para ver onde o projeto desviou.

Uma linha de base captura a data de início, data de término, duração, trabalho e custo de cada tarefa em um determinado momento.

## Definindo uma Linha de Base

Defina uma linha de base a partir do menu **Projeto** usando o submenu **Definir linha de base**:

- Você pode definir uma linha de base para todas as tarefas ou apenas para as tarefas selecionadas.
- O Ingantt suporta até 11 linhas de base.

## Visualizando Linhas de Base

Após uma linha de base ter sido salva, você pode visualizá-la no gráfico de Gantt alternando a visibilidade da linha de base na caixa de diálogo **Linhas de base**. As barras de linha de base aparecem como barras mais finas abaixo das barras de tarefa atuais, usando uma cor distinta por número de linha de base.

Para gerenciar as linhas de base, use o item **Linhas de base** no menu **Projeto**. A caixa de diálogo **Linhas de base** permite:

- Visualizar todas as linhas de base salvas
- Remover linhas de base que não são mais necessárias
- Designar qual linha de base é usada para os cálculos de [Valor Agregado](/pt/tracking/earned-value/index.md#gerenciamento-de-valor-agregado)

## Colunas de Linha de Base e Variação

Você pode adicionar colunas de linha de base e de variação à lista de tarefas pela caixa de diálogo **Opções**. Há **55 colunas de linha de base** e **5 colunas de variação** no total.

### As 55 Colunas de Linha de Base

O Ingantt armazena **11 linhas de base**: a **Linha de base** sem número, mais **Linha de base 1** a **Linha de base 10**. Cada uma expõe as mesmas cinco colunas de tarefa:

- Baseline Start
- Baseline Finish
- Baseline Duration
- Baseline Work
- Baseline Cost

11 linhas de base × 5 campos = **55 colunas de linha de base**, todas disponíveis no seletor de colunas da tabela de tarefas. O conjunto sem número tem nomes simples (*Início da linha de base*); os numerados carregam seu número (*Início da linha de base 3*).

### As 5 Colunas de Variação

As colunas de variação são calculadas — cronograma atual menos linha de base — e são cinco:

- Start Variance
- Finish Variance
- Duration Variance
- Work Variance
- Cost Variance

Há um único conjunto de cinco, não um conjunto por linha de base. Elas comparam o cronograma atual com **uma** linha de base — aquela selecionada como [linha de base de Valor Agregado](/pt/tracking/earned-value/index.md#linha-de-base-para-valor-agregado) em **Projeto → Opções de valor agregado**, que por padrão é a Baseline sem número. Altere essa configuração e todas as colunas de variação são recalculadas em relação à linha de base escolhida. Uma tarefa cuja linha de base escolhida nunca foi definida mostra uma variação vazia, e não zero.

## Onde as Linhas de Base São Armazenadas

As linhas de base são armazenadas **dentro do arquivo do projeto**, não em um arquivo separado. Salvar o projeto salva suas linhas de base.

Se você tentar definir uma décima segunda linha de base, o Ingantt informa *Todos os slots de linha de base estão em uso. Limpe um primeiro no diálogo de Linhas de Base.* Abra **Projeto → Linhas de base** e limpe uma.

Linhas de base não são a mesma coisa que o [histórico de versões](/pt/ui/version-history/index.md), que registra o próprio arquivo ao longo do tempo. Use o histórico de versões para voltar a um plano anterior; use linhas de base para medir quanto o plano atual desviou.

## Planos provisórios

Os planos provisórios armazenam instantâneos leves do cronograma (apenas datas de **Início** e **Término**) para comparação rápida sem a sobrecarga de linhas de base completas. O Ingantt suporta até 10 planos provisórios (`Interim Plan 1` a `Interim Plan 10`).

Defina e limpe planos provisórios a partir do item **Planos provisórios** no menu **Projeto**. Você pode exibir as datas dos planos provisórios como colunas na lista de tarefas.
