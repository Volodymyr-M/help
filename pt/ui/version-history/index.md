# Histórico de Versões

O Ingantt mantém o histórico completo de todos os planos armazenados no Google Drive. Você pode navegar por ele, pré-visualizar qualquer versão anterior no gráfico de Gantt, fixar as que importam e restaurar uma como o plano atual.

**O projeto precisa estar aberto a partir do Google Drive.** O histórico de versões é o histórico de revisões do Google Drive, então os dois itens de menu de histórico de versões ficam ocultos para um projeto aberto do seu dispositivo ou que nunca foi salvo. Salve-o no [Drive](/pt/ui/files/index.md) e eles aparecem.

## Abrindo o Histórico de Versões

Escolha **File → Version history → See version history** ou pressione `Ctrl` + `Alt` + `Shift` + `H`.

O painel é aberto na lateral e o Ingantt muda para tela cheia para que o gráfico tenha espaço. Fechar o painel coloca tudo de volta como estava.

## Navegando e Pré-visualizando

As versões são listadas da mais recente para a mais antiga e agrupadas por dia — **Today**, **Yesterday** e depois a data. A mais recente é identificada como **Current version** e é selecionada para você quando o painel é aberto.

Clique em qualquer versão e o Ingantt a carrega no gráfico para que você possa examiná-la. A pré-visualização é apenas uma olhada, não uma edição:

- Seu plano aberto é guardado à parte, intacto, incluindo o histórico de desfazer e quaisquer alterações não salvas.
- Feche o painel e seu plano volta exatamente como você o deixou.
- Nada é gravado no Drive ao pré-visualizar.

## Fixando uma Versão

O Google Drive remove revisões antigas de um arquivo com o tempo. Fixar uma versão a marca como **keep forever**, de modo que ela sobrevive a essa limpeza e permanece na lista.

Há duas maneiras de fixar:

- **File → Version history → Pin current version** fixa a versão mais recente sem abrir o painel. Use-o logo após um salvamento que você quer preservar — antes de um replanejamento, ao final de uma fase ou quando um plano é aprovado.
- No painel, abra o menu de qualquer versão e escolha **Pin this version**.

As versões fixadas são marcadas como **Pinned** na lista. Escolher o mesmo item de menu novamente desafixa.

## Restaurando uma Versão

Selecione a versão desejada e escolha **Restore this version**. O Ingantt pede confirmação:

> Restore this version? Your current version will be saved first.

Restaurar não descarta seu plano atual. Ele salva o conteúdo restaurado como uma **nova** versão no topo do histórico, então a versão em que você estava continua na lista e também pode ser restaurada. O histórico só cresce — restaurar nunca exclui nada.

Após a confirmação, o plano restaurado se torna o projeto aberto e é salvo no Drive imediatamente.

## Histórico de Versões Não É o Mesmo que Linhas de Base

Os dois são fáceis de confundir:

- **Histórico de versões** é um registro do *arquivo* ao longo do tempo, mantido pelo Google Drive. Ele responde "como estava este plano na terça-feira passada?"
- **[Linhas de base](/pt/tracking/baselines/index.md)** são instantâneos do *cronograma* armazenados dentro do plano, com os quais você compara na mesma visualização — barras de linha de base no gráfico de Gantt, colunas de linha de base e variação na tabela. Elas respondem "quanto nos desviamos do plano aprovado?"

Use o histórico de versões para voltar atrás. Use as linhas de base para medir.
