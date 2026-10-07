# Durações Decorridas

Uma duração comum é medida em **tempo de trabalho**. Uma tarefa de três dias em um calendário de segunda a sexta, oito horas por dia, leva 24 horas de trabalho e, se começa na quinta-feira, termina na segunda-feira — o fim de semana não conta.

Uma duração **decorrida** é medida em **tempo corrido**. Ela conta continuamente, 24 horas por dia, 7 dias por semana, atravessando fins de semana, feriados e todas as exceções não úteis do [calendário](/pt/setting-up-project/calendars/index.md).

Use-a para qualquer coisa que não dependa de sua equipe estar trabalhando: cura de concreto, secagem de tinta, um teste de longa duração (soak test), um período de espera regulatório ou uma remessa em trânsito.

## Inserindo uma Duração Decorrida

Digite a duração com um **`e`** antes da unidade:

| Você digita | Você obtém |
|-------------|------------|
| `3d` | 3 dias úteis |
| `3ed` | 3 dias decorridos — 72 horas corridas |
| `2ew` | 2 semanas decorridas — 14 dias corridos |
| `8eh` | 8 horas decorridas |

As unidades são `min`, `h`, `d`, `w` e `m` — minutos, horas, dias, semanas, meses — e todas elas aceitam o `e`. As abreviações são traduzidas, então em uma interface que não esteja em inglês use as letras de unidade desse idioma; o marcador `e` permanece.

Você também pode usar a caixa de seleção **Elapsed** em vez de digitar, no editor de duração da caixa de diálogo [Propriedades da Tarefa](/pt/building-schedule/task-properties/index.md). Sua dica de ferramenta é a definição:

> Elapsed. When checked, duration counts continuously (24/7) instead of only during working hours defined by the calendar. (Decorrida. Quando marcada, a duração conta continuamente, 24/7, em vez de apenas durante o horário de trabalho definido pelo calendário.)

Marcar ou desmarcar a caixa mantém o número que você vê e muda o que ele significa: `3d` se torna `3ed`. Ela não converte silenciosamente 3 dias úteis no número equivalente de dias decorridos.

## Quanto Vale uma Unidade Decorrida

As unidades decorridas ignoram o calendário do seu projeto e usam aritmética fixa de calendário:

| Unidade | Valor decorrido |
|---------|-----------------|
| 1 dia decorrido | 24 horas |
| 1 semana decorrida | 7 dias = 168 horas |
| 1 mês decorrido | 30 dias = 720 horas |

Compare com as unidades de trabalho, que vêm das [Propriedades do Projeto](/pt/setting-up-project/project/index.md) — por padrão, 8 horas por dia, 5 dias por semana, 20 dias por mês. Assim, `1w` são 40 horas de trabalho, enquanto `1ew` são 168 horas corridas.

## Latência Decorrida em uma Dependência

A mesma ideia se aplica à latência de uma [dependência](/pt/building-schedule/dependencies/index.md), e é aí que ela mais importa. "Iniciar a próxima tarefa três dias depois que esta terminar" normalmente significa três dias *corridos*, não três dias úteis — caso contrário, um término na sexta-feira empurra a sucessora para a quarta-feira.

Na aba **Predecessors** de Task Properties, cada vínculo tem sua própria caixa de seleção **Elapsed** ao lado da latência, com o mesmo significado:

> When checked, lag time counts continuously (24/7) instead of only during working hours defined by the calendar. (Quando marcada, a latência conta continuamente, 24/7, em vez de apenas durante o horário de trabalho definido pelo calendário.)

Você também pode digitá-la diretamente: uma latência de `3ed` são três dias corridos.

## Importação e Exportação

Durações e latências decorridas fazem parte do formato do Microsoft Project e sobrevivem a uma ida e volta em ambas as direções. Uma duração `3ed` importada do Microsoft Project permanece `3ed` e é exportada de volta como duração decorrida.
