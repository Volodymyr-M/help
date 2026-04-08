# Primeiros Passos

Comece aqui para criar seu primeiro cronograma de projeto. Em poucos minutos, você terá tarefas em uma linha do tempo, vinculadas entre si, com recursos atribuídos — o suficiente para ver quando seu projeto deve terminar.

> Em dispositivos móveis, use toques em vez de cliques, toques duplos em vez de cliques duplos e toque longo em vez de clique com botão direito.

## Criando um Cronograma Básico

Digamos que você tem um pequeno projeto de reforma residencial com duas tarefas, uma após a outra.

Após clicar em **Create new**, você é levado a uma tela dividida com a lista de tarefas à esquerda e o gráfico de Gantt à direita. Adicione suas tarefas uma após a outra clicando no botão grande **+** no canto inferior direito. Na caixa de diálogo **Add Task**, especifique o **Name** e a **Duration** prevista de cada tarefa.

![Adicionar tarefa](/images/getting-started/add_task.png)

Selecione ambas as tarefas na lista à esquerda e depois clique no botão **Link tasks** na barra de ferramentas. Isso vincula as tarefas e atualiza o gráfico de Gantt.

- Para selecionar múltiplas tarefas no Android e iOS, mantenha o dedo pressionado um pouco mais ao tocar em cada tarefa na lista ou no gráfico de Gantt.
- Em outras plataformas, clique nas tarefas na lista ou no gráfico de Gantt enquanto mantém pressionado `Ctrl` ou `Shift` no teclado.

![Vincular](/images/getting-started/link.png)

Agora que as tarefas estão vinculadas, tente atualizar a duração da primeira tarefa. Dê um clique duplo nela na lista ou no gráfico de Gantt e edite o campo **Duration** na caixa de diálogo **Task Properties**. Você verá como essa alteração afeta o cronograma, deslocando a segunda tarefa.

![Gantt](/images/getting-started/gantt.png)

## Definindo o Nome e a Data de Início do Projeto

Seu projeto pode começar em um dia diferente do padrão usado pelo Ingantt.

Abra **Project Properties** usando o menu de navegação ou, na web e no Windows, clicando no nome do projeto no cabeçalho.

Defina a nova data de início do projeto no campo **Project Start Date** e aproveite para alterar o **Name** do projeto.

![Nome do projeto](/images/getting-started/project_name.png)

> Com a simplicidade do cronograma básico, você já consegue saber quando o projeto deve terminar olhando o gráfico de Gantt.

## Adicionando e Atribuindo Recursos

Digamos que uma pessoa diferente vai cuidar de cada tarefa no seu projeto.

Abra o menu de navegação e mude para a visualização **Resources**.

![Nav](/images/getting-started/nav.png)

Clique no botão grande **+** para abrir a caixa de diálogo **Add Resource**, insira um **Name** para o recurso e salve. Repita esses passos para adicionar outro recurso de trabalho.

![Adicionar recurso](/images/getting-started/add_resource.png)

![Recursos](/images/getting-started/resources.png)

Usando o menu de navegação, volte para a visualização **Tasks**. Dê um clique duplo na primeira tarefa na lista ou no gráfico de Gantt para abrir a caixa de diálogo **Task Properties**.

Mude para a aba **Resources**, marque o primeiro recurso para atribuir essa pessoa à tarefa e salve.

![Atribuições](/images/getting-started/assignments.png)

Repita os mesmos passos para a segunda tarefa e o segundo recurso.

![Gantt com recursos](/images/getting-started/resources_gantt.png)

## Configurando Férias

As pessoas podem ter diferentes eventos durante o andamento do seu projeto que afetam sua linha do tempo.

Suponha que o recurso responsável pela primeira tarefa do seu projeto precise de um dia de folga durante essa tarefa.

Para configurar isso, use o menu de navegação para ir à visualização **Resources**.

Dê um clique duplo no recurso para ver **Resource Properties**. Vá para a aba **Calendar** e clique no botão **Add exception**. Escolha um dos dias durante o seu projeto, deixe a lista de horários de trabalho vazia e salve.

![Dia de folga](/images/getting-started/day_off.png)

Usando o menu de navegação, volte para **Tasks** e veja como o cronograma mudou. A segunda tarefa foi deslocada devido à sua dependência da primeira.

![Férias](/images/getting-started/vacation.png)

> Você pode configurar não apenas férias, mas também outras alterações no horário de uma pessoa. Por exemplo, ao adicionar horários de trabalho à exceção, você pode especificar que o recurso trabalha apenas em horários específicos naquele dia em particular.

## Configurando Feriados

Imagine que há um feriado durante o seu projeto, um dia em que nenhum trabalho é realizado.

As férias são configuradas através do calendário de cada recurso. Dias que afetam todos, no entanto, são configurados no calendário do projeto. O calendário padrão do projeto é chamado **Standard** e já indica que nenhum trabalho é realizado nos finais de semana.

Para configurar feriados, use o menu de navegação para ir à visualização **Calendars**. Dê um clique duplo em **Standard** para ver **Calendar Properties**. Clique no botão **Add exception**. Escolha um dos dias durante o seu projeto, deixe a lista de horários de trabalho vazia e salve.

![Feriado](/images/getting-started/holiday.png)

Usando o menu de navegação, volte para a visualização **Tasks** e veja como o projeto mudou. As tarefas foram deslocadas e o feriado é exibido de forma semelhante aos finais de semana no gráfico de Gantt.

![Final](/images/getting-started/final.png)

> Usando a mesma abordagem, você pode configurar não apenas feriados, mas também outras alterações no horário de todos. Por exemplo, ao adicionar horários de trabalho à exceção, você pode especificar que todos trabalham apenas em horários específicos naquele dia em particular.
>
> Você também pode verificar as abas que representam cada dia da semana em **Calendar Properties**. Se toda a equipe sai mais cedo às sextas-feiras ou trabalha aos sábados, você pode configurar isso nas abas correspondentes.
