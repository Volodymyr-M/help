# Propriedades da Tarefa

Cada tarefa tem propriedades que controlam como ela é agendada, como os custos são calculados e como ela aparece no gráfico de Gantt. Defina-as na caixa de diálogo **Propriedades da Tarefa**.

## Duração

Ao planejar seu projeto, você insere as durações como estimativas, ou seja, a duração é uma previsão razoável de quanto tempo uma tarefa levará para todos os recursos envolvidos.

Não confunda **Duração** com **Trabalho**. Por exemplo, se três pessoas estão trabalhando na sua tarefa, mas a completam em uma hora, você define a **Duração** da tarefa como uma hora. Se essas três pessoas estiverem atribuídas à tarefa, o Ingantt calcula a propriedade **Trabalho** automaticamente como três horas.

A duração pode ser alterada usando o campo **Duração** na caixa de diálogo **Propriedades da Tarefa**.

Quando você ainda não está confiante com sua estimativa de duração, pode marcá-la como **Estimativa** na caixa de diálogo **Propriedades da Tarefa**. Isso faz com que a duração sempre exiba um ponto de interrogação ("**?**"). Marcar ou desmarcar essa opção não afeta o agendamento.

Se pelo menos uma subtarefa de uma tarefa resumo tiver **Estimativa** marcado, a duração da tarefa resumo também é marcada como **Estimativa** e, portanto, também mostra "**?**".

A duração pode ser definida em Horas, Dias, Semanas ou Meses. Por padrão, "1 Dia" significa 8 horas, "1 Semana" significa 5 dias (40 horas) e "1 Mês" significa 20 dias. Esses padrões podem ser alterados na aba **Duração** da caixa de diálogo **Propriedades do Projeto**.

Quando você altera atribuições de recursos, trabalho ou duração, um deles é recalculado de acordo com o [Tipo](#tipo-e-orientado-ao-esforço) da tarefa.

## Trabalho

Uma vez que uma tarefa tem um recurso de trabalho atribuído (como uma pessoa realizando a tarefa), a propriedade **Trabalho** da tarefa passa a ser maior que 0. Ela mostra o tempo que todos os recursos dedicarão à tarefa. Por exemplo, se uma tarefa com **Duração** de 5 horas tem 2 recursos atribuídos trabalhando nela, o **Trabalho** da tarefa é igual a 10 horas.

O trabalho pode ser alterado usando o campo **Trabalho** na caixa de diálogo **Propriedades da Tarefa**.

Assim como a Duração, o Trabalho pode ser especificado em Horas, Dias, Semanas ou Meses usando as definições na aba **Duração** da caixa de diálogo **Propriedades do Projeto**. O formato de exibição padrão do trabalho pode ser alterado na aba **Tempo**.

Quando você altera atribuições de recursos, trabalho ou duração, um deles é recalculado de acordo com o [Tipo](#tipo-e-orientado-ao-esforço) da tarefa.

## Prazo

Às vezes, você precisa garantir que uma tarefa seja concluída até uma data específica, geralmente chamada de prazo.

O prazo de uma tarefa pode ser especificado usando o campo **Prazo** na caixa de diálogo **Propriedades da Tarefa**.

Os prazos são apenas para sua referência e não afetam o agendamento.

Os prazos são exibidos no gráfico de Gantt como ícones especiais.

> Se o seu cronograma mostra que uma tarefa termina depois do prazo especificado, o Ingantt exibe um ícone na lista de tarefas e contabiliza essas tarefas no menu de navegação.

![Prazo](/images/building-schedule/tasks/deadline.png)

> Você pode definir um prazo para o projeto inteiro definindo o prazo da tarefa resumo raiz. Apenas certifique-se de que a tarefa resumo raiz esteja configurada como visível na caixa de diálogo **Opções**.

## Marco

Qualquer tarefa pode ser marcada como marco marcando a caixa de seleção **Marco** na caixa de diálogo **Propriedades da Tarefa**. Isso não altera sua duração nem afeta o agendamento, mas a tarefa é exibida no gráfico de Gantt como um ícone.

![Marco](/images/building-schedule/tasks/milestone.png)

Se você especificar 0 como a **Duração** de uma tarefa, ela é automaticamente marcada como **Marco** ao salvar a alteração.

## Tipo e Orientado ao Esforço

As atribuições de recursos de trabalho (ou unidades de recursos de trabalho atribuídos), trabalho e duração dependem uns dos outros. Quando você altera um deles, os outros precisam ser recalculados. O **Tipo** da tarefa (com a ajuda da opção **Controlada pelo esforço**) define qual das duas propriedades restantes permanece inalterada, de modo que apenas uma delas é recalculada.

Por exemplo, você pode definir o **Tipo** como **Unidades fixas** (o padrão), nesse caso, quando você altera a Duração, o Trabalho é recalculado automaticamente.

| Tipo               | Descrição                                             |
|--------------------|---------------------------------------------------------|
| **Unidades fixas**    | Ao alterar a Duração: o Trabalho é recalculado.         |
|                    | Ao alterar o Trabalho: a Duração é recalculada.         |
|                    | Ao alterar as Unidades:                                  |
|                    | - Se **Controlada pelo esforço** estiver ativada: a Duração é recalculada. |
|                    | - Se **Controlada pelo esforço** não estiver ativada: o Trabalho é recalculado. |
| **Duração fixa** | Ao alterar a Duração: o Trabalho é recalculado.         |
|                    | Ao alterar o Trabalho: as Unidades são recalculadas.           |
|                    | Ao alterar as Unidades: o Trabalho é recalculado.            |
| **Trabalho fixo**     | Ao alterar a Duração: as Unidades são recalculadas.       |
|                    | Ao alterar o Trabalho: a Duração é recalculada.         |
|                    | Ao alterar as Unidades: a Duração é recalculada.        |

Em outras palavras, o **Tipo** permite congelar uma das três propriedades, enquanto a opção **Controlada pelo esforço** define se o Trabalho deve permanecer inalterado entre as duas restantes.

> As configurações **Tipo** e **Controlada pelo esforço** não estão disponíveis para [tarefas resumo](/pt/building-schedule/tasks/index.md#tarefas-resumo), que são sempre do tipo Fixed duration e não orientadas ao esforço.

## Notas

Você pode adicionar qualquer texto à sua tarefa preenchendo o campo **Notas** na aba **Notas** da caixa de diálogo **Propriedades da Tarefa**. Use-o para descrições de tarefas, informações de contato, ideias ou quaisquer outros dados textuais.

Se uma tarefa tem o campo **Notas** preenchido, um ícone especial é exibido na lista de tarefas. No Windows, macOS e Web, passar o mouse sobre o ícone mostra a nota. Em dispositivos móveis, abra a caixa de diálogo **Propriedades da Tarefa** para ver a nota completa.

## Hiperlink

Você pode anexar uma URL à sua tarefa usando o campo **Hiperlink** na aba **Notas** da caixa de diálogo **Propriedades da Tarefa**. Tarefas com hiperlink exibem um ícone de link na lista de tarefas. Clicar no ícone de link abre a URL no seu navegador.

## Ocultar Barra e Rollup

Na aba **Visual** da caixa de diálogo **Propriedades da Tarefa**:

- **Ocultar barra** — Oculta a barra da tarefa no gráfico de Gantt, mantendo a linha visível na lista de tarefas. A área da barra invisível ainda responde a cliques e menus de contexto.
- **Acúmulo** — Exibe a barra da subtarefa na linha da tarefa resumo pai no gráfico de Gantt. Isso proporciona uma visualização condensada quando as tarefas resumo estão recolhidas.

Essas opções também podem ser alternadas no submenu **Editar > Exibição** ou no menu de contexto com clique direito.
