# Dependências

Projetos reais têm uma ordem — você não pode testar antes de construir. Vincule tarefas para que o Ingantt calcule a sequência correta e desloque tudo automaticamente quando uma tarefa mudar.

## Predecessoras e Dependências

Quando você vincula tarefas usando o botão **Link selected tasks** na barra de ferramentas, você cria uma dependência entre as tarefas. A dependência é chamada de **Fim para Início**, e é uma das quatro dependências disponíveis:

| Tipo                | Descrição                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| **Fim para Início** | A segunda tarefa pode iniciar quando a primeira tarefa terminar.                       |
| **Fim para Fim**| A segunda tarefa termina quando a primeira tarefa terminar.                        |
| **Início para Fim** | A segunda tarefa termina quando a primeira tarefa iniciar.                          |
| **Início para Início**  | A segunda tarefa inicia quando a primeira tarefa iniciar.                            |

![Dependências](/images/building-schedule/tasks/dependencies.png)

Para atribuir predecessoras e editar dependências, use a aba **Predecessores** da caixa de diálogo **Propriedades da Tarefa**.

## Latência e Antecipação

Às vezes, pode ser necessário definir um tempo de espera entre duas tarefas dependentes.

Digamos que sua primeira tarefa é "Pintar a parede" e a segunda tarefa é "Pendurar quadros na parede". Essas tarefas estão vinculadas (têm uma dependência **Fim para Início**). Não é possível pendurar quadros até a tinta secar, então você precisa esperar. Para refletir isso no seu cronograma, defina o **Atraso** (por exemplo, 2 dias) para a dependência entre as duas tarefas.

![Latência](/images/building-schedule/tasks/lag.png)

As latências também podem representar o cenário oposto — quando uma tarefa dependente deve começar antes que sua predecessora termine. Para definir isso, torne o **Atraso** negativo (por exemplo, -1 dia). Isso é chamado de _antecipação_.

Para definir latência ou antecipação, selecione a predecessora na aba **Predecessores** da caixa de diálogo **Propriedades da Tarefa** e clique no botão **Editar**.

> As latências podem ser definidas em horas, dias, semanas, meses ou como uma fração da duração da tarefa predecessora (por exemplo, 50%).

## Dependências Circulares

Se você criar acidentalmente uma dependência circular — por exemplo, tornando duas tarefas predecessoras uma da outra — o Ingantt detecta e reverte a última ação. Isso se aplica a cadeias circulares complexas também.

Quando você abre um arquivo de projeto que contém dependências circulares, o Ingantt remove automaticamente os vínculos problemáticos para que o projeto possa ser agendado. Uma mensagem de aviso mostra quantos vínculos de dependência circular foram removidos durante a importação.
