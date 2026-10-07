# Configurando Custos

Defina custos fixos nas tarefas e taxas nos recursos. O Ingantt os utiliza junto com o cronograma para calcular o custo de cada tarefa e de todo o projeto.

## Custo Fixo da Tarefa

Você pode definir um custo para a tarefa independentemente dos seus recursos, preenchendo o campo **Custo fixo** na aba **Custo** da caixa de diálogo **Propriedades da Tarefa**. Por exemplo, use isso quando alguém já forneceu uma estimativa de custo total para a tarefa, ou quando a tarefa tem um custo adicional além dos custos de recursos.

> Se você precisa atribuir o mesmo custo fixo a múltiplas tarefas, considere criar um recurso de custo e atribuí-lo a essas tarefas. Se o custo mudar no futuro, você só precisa atualizá-lo em um lugar.

## Custo de Recurso de Trabalho

Os recursos de **Trabalho** são o único tipo que possui calendário, então seu custo é especificado por hora, por dia, por semana ou por mês (veja [Horas por Dia, Dias por Semana, Dias por Mês](/pt/setting-up-project/project/index.md#horas-por-dia-dias-por-semana-dias-por-mês)).

Por exemplo, ao atribuir um recurso de trabalho com **Taxa padrão** de R$ 100 por hora a uma tarefa com **Duração** de 5 horas, R$ 500 são adicionados ao **Custo** da tarefa.

Os recursos de trabalho também suportam uma **Taxa de horas extras** para trabalho além do horário regular do calendário. O custo total é calculado como:

> **Cost = Regular Work × Standard Rate + Overtime Work × Overtime Rate + Cost Per Use**

Quando um recurso de trabalho é atribuído a uma tarefa, você pode especificar o valor de **Unidades** como um número diferente do padrão. Isso impacta os cálculos de custo. Por exemplo, se **Unidades** for 50%, o custo calculado para o recurso na tarefa é metade do que seria com 100% de Unidades.

## Custo de Recurso de Material

Para recursos de **material**, o custo é especificado por unidade com base em como você define a unidade. Pode ser uma medida de peso (ex.: libra, quilograma, tonelada), medida de comprimento ou volume (ex.: pé, metro, quilômetro, galão, litro) ou qualquer outra medida (ex.: contêiner, caixa, peça, metro quadrado). Você pode definir um **Rótulo de material** na caixa de diálogo **Propriedades do Recurso** para descrever a unidade.

Os recursos de material suportam dois modos de consumo:
- **Fixed** (padrão) — Uma quantidade total independente da duração da tarefa (ex.: 5 toneladas de cimento)
- **Variable** — Uma taxa por unidade de tempo que escala com a duração da tarefa (ex.: 10 litros por dia de combustível)

Por exemplo, se combustível é utilizado no seu projeto, você pode adicionar um recurso de material "combustível" e especificar o custo por litro na caixa de diálogo **Propriedades do Recurso**. Então, ao atribuir o recurso a uma tarefa, você especifica o número de litros como **Unidades**, e o Ingantt adiciona o custo calculado do combustível ao **Custo** da tarefa.

## Recurso de Custo

Um recurso de **cost** é uma despesa fixa que você pode querer atribuir a múltiplas tarefas. Recursos de custo suportam valores de custo por atribuição — o mesmo recurso de custo pode ter valores diferentes em atribuições de tarefas diferentes (ex.: "Viagem" = R$ 800 na Tarefa A e R$ 1.200 na Tarefa B).

Use esse tipo para despesas fixas que normalmente não são especificadas em medidas, como custos de instalação. Se múltiplas tarefas têm o mesmo custo fixo pelo mesmo motivo, crie um recurso de custo e atribua-o a todas essas tarefas em vez de preencher o campo **Custo fixo** de cada tarefa separadamente.

## Tabelas de Taxas

Cada recurso de trabalho e material suporta até 5 tabelas de taxas de custo (A a E), cada uma com múltiplas linhas que entram em vigor em datas diferentes. Isso permite modelar alterações de taxas ao longo do tempo ou manter conjuntos de taxas diferentes para tipos de trabalho diferentes.

As tabelas de taxas são configuradas na aba **Custos** da caixa de diálogo **Propriedades do Recurso**. Ao atribuir um recurso a uma tarefa, você pode selecionar qual tabela de taxas usar na caixa de diálogo **Editar Atribuição de Recurso**.

## Custo por uso

Os recursos suportam um campo **Custo por uso** — uma taxa fixa cobrada cada vez que o recurso é atribuído a uma tarefa, independentemente de quanto trabalho é realizado. Para recursos de trabalho, **Custo por uso** é multiplicado pelas unidades de atribuição (ex.: 200% de unidades significa que o custo por uso é cobrado duas vezes). **Custo por uso** sempre é acumulado no início da tarefa.

## Acumulação de custos

A configuração **Acumulação de custos** controla quando os custos são reconhecidos como custos reais conforme o trabalho progride:

| Acumulação | Quando os custos são reconhecidos |
|---------|--------------------------|
| **Início** | Custo total assim que qualquer progresso é feito (% concluído > 0%) |
| **Rateio** | Proporcional ao percentual concluído (ex.: 50% concluído = 50% do custo) |
| **Fim** | Custo total somente quando a tarefa atinge 100% concluída |

Os recursos possuem uma configuração **Acumulação de custos** na aba **Custos** da caixa de diálogo **Propriedades do Recurso**. As tarefas possuem uma configuração **Acúmulo de custo fixo** na aba **Custo** da caixa de diálogo **Propriedades da Tarefa**. O projeto possui uma configuração **Acumulação de custos fixos padrão** na aba **Outros** da caixa de diálogo **Propriedades do Projeto**.
