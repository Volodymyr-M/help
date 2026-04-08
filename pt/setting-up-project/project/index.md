# Propriedades do Projeto

Configure a data de início, os horários de trabalho e as regras de agendamento do seu projeto. Essas configurações definem como cada tarefa do seu projeto é calculada e exibida.

## Nome do Projeto

Defina o nome do seu projeto no campo **Name** na aba **General** da caixa de diálogo **Project Properties**. Esse nome também é usado pela [tarefa resumo raiz](/pt/building-schedule/tasks/index.md#tarefa-resumo-raiz) do seu projeto.

Na web e no Windows, clicar no nome do projeto no cabeçalho também abre a caixa de diálogo **Project Properties**.

## Data de Início e Direção do Planejamento

Por padrão, seu projeto é planejado a partir da Data de Início, que pode ser definida no campo **Project Start Date** da caixa de diálogo **Project Properties**.

Para planejar o projeto a partir da Data de Término, mude para **Plan from Finish date** na caixa de diálogo **Project Properties** e defina a **Project Finish Date**.

A aba **General** da caixa de diálogo **Project Properties** mostra tanto a Data de Início quanto a Data de Término. Ao agendar a partir do início, a Data de Início é editável e a Data de Término mostra o valor calculado. Ao agendar a partir do término, a Data de Término é editável e a Data de Início mostra o valor calculado.

Tenha em mente:

- Para projetos planejados a partir da Data de Início, a [restrição](/pt/building-schedule/constraints/index.md#restrições) padrão para tarefas recém-criadas é **As soon as possible**.
- Para projetos planejados a partir da Data de Término, a restrição padrão para tarefas recém-criadas é **As late as possible**.

Ao alternar entre planejar do Início e do Término, as restrições das tarefas existentes não são alteradas, exceto para [tarefas resumo](/pt/building-schedule/tasks/index.md#tarefas-resumo), incluindo a [tarefa resumo raiz](/pt/building-schedule/tasks/index.md#tarefa-resumo-raiz).

Para tarefas resumo:

- A restrição **As soon as possible** é substituída por **As late as possible** ao mudar do planejamento a partir do Início para o Término.
- A restrição **As late as possible** é substituída por **As soon as possible** ao mudar do planejamento a partir do Término para o Início.

## Primeiro Dia da Semana

Dependendo do seu país, a semana pode começar no domingo ou na segunda-feira. Você pode atualizar o campo **First Day of Week** na aba **Regional** da caixa de diálogo **Project Properties** para alterar a configuração padrão do seu projeto.

Alterar essa propriedade atualiza a interface do usuário, incluindo o gráfico de Gantt em alguns níveis de zoom, mas não afeta o agendamento. Para ajustar o cronograma de acordo, atualize seus [Calendários](/pt/setting-up-project/calendars/index.md).

## Horas por Dia, Dias por Semana, Dias por Mês

No Ingantt, você pode especificar [Duração](/pt/building-schedule/task-properties/index.md#duração), [Trabalho](/pt/building-schedule/task-properties/index.md#trabalho) ou [Latência](/pt/building-schedule/dependencies/index.md#latência-e-antecipação) em Horas, Dias, Semanas e Meses.

Por exemplo, definir a duração de uma tarefa como 2 Dias significa 16 horas usando as configurações padrão.

Por padrão:

- 1 Dia equivale a 8 horas.
- 1 Semana equivale a 5 dias (40 horas).
- 1 Mês equivale a 20 dias (160 horas).

Você pode alterar essas configurações padrão na aba **Duration** da caixa de diálogo **Project Properties**.

> A maioria dos projetos deve usar os valores padrão. Altere essas configurações apenas se o seu projeto tiver um requisito específico para conversões diferentes.

## Formato de Exibição de Duração e Trabalho

Por padrão, as durações são exibidas em dias e os valores de trabalho em horas. Você pode alterar o formato de exibição de ambos na aba **Time** da caixa de diálogo **Project Properties**. As unidades disponíveis são minutos, horas, dias, semanas e meses.

Quando você altera qualquer formato, todos os valores existentes são atualizados para serem exibidos na nova unidade.

## Horário Padrão de Início e Término

O horário padrão de início (8:00) e término (17:00) controlam quando o trabalho começa e termina a cada dia. Você pode alterá-los na aba **Time** da caixa de diálogo **Project Properties**.

## Opções de Agendamento

A aba **Scheduling** da caixa de diálogo **Project Properties** contém opções que controlam como as tarefas são agendadas:

- **Honor constraint dates** — Quando ativada, restrições semiflexíveis (como Não Iniciar Depois De) têm prioridade sobre dependências, potencialmente criando folga negativa. Quando desativada (o padrão), as dependências sempre têm prioridade.
- **Split in-progress tasks** — Quando ativada (o padrão), o agendador pode dividir automaticamente tarefas que possuem progresso fora de sequência.
- **Move completed/remaining parts** — Quatro opções que controlam como as partes concluídas e restantes do trabalho são reposicionadas em relação à data de status. Isso ajuda a manter seu cronograma atualizado, movendo o trabalho concluído para antes da data de status ou empurrando o trabalho restante para frente.
