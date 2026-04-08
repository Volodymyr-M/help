# Restrições

Algumas tarefas precisam iniciar ou terminar em datas específicas — uma entrega chega na terça-feira, uma licença vence na sexta-feira. As restrições permitem fixar datas onde necessário, mantendo o restante do cronograma flexível.

## Como as Restrições Funcionam

Junto com as dependências de tarefas (vínculos com predecessoras), a restrição de uma tarefa define como ela é agendada.

As restrições são definidas na aba **Advanced** da caixa de diálogo **Task Properties**. A restrição padrão é **As soon as possible**. Isso significa que a tarefa é posicionada o mais próximo possível da data de início do projeto, respeitando as dependências com outras tarefas. Em projetos planejados a partir da Data de Término, o padrão é **As late as possible**.

Existem duas restrições que forçam a tarefa a iniciar ou terminar na data especificada, independentemente das dependências. Essas restrições são chamadas de _restrições inflexíveis_ e são **Must start on** e **Must finish on**. Use essas restrições somente se tiver certeza de que são necessárias.

Outras restrições (**Start no earlier than**, **Start no later than**, **Finish no earlier than** e **Finish no later than**) são chamadas de _flexíveis_, pois respeitam as dependências entre tarefas. Se as dependências empurrarem a tarefa além da data da restrição, a data determinada pela dependência tem prioridade.

| Restrição                 | Descrição                                                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **As soon as possible**    | A tarefa é agendada assim que as predecessoras permitirem. Se nenhuma predecessora estiver vinculada, a tarefa inicia no início da tarefa resumo pai. |
| **As late as possible**    | A tarefa é agendada o mais tarde que as predecessoras permitirem. Se nenhuma predecessora estiver vinculada, a tarefa termina no final da tarefa resumo pai.    |
| **Start no earlier than**  | Se a tarefa iniciar depois da data especificada devido a predecessoras, nada muda. Caso contrário, a tarefa é agendada para iniciar na data especificada. |
| **Start no later than**    | Se as predecessoras empurrarem a tarefa além da data da restrição, a data determinada pela dependência tem prioridade. Caso contrário, a tarefa é agendada para iniciar até a data especificada. |
| **Finish no earlier than** | Se a tarefa terminar depois da data especificada devido a predecessoras, nada muda. Caso contrário, a tarefa é agendada para terminar na data especificada.|
| **Finish no later than**   | Se as predecessoras empurrarem a tarefa além da data da restrição, a data determinada pela dependência tem prioridade. Caso contrário, a tarefa é agendada para terminar até a data especificada. |
| **Must start on**          | A data de início da tarefa é agendada exatamente como especificado, independentemente das predecessoras.                                                   |
| **Must finish on**         | A data de término da tarefa é agendada exatamente como especificado, independentemente das predecessoras.                                                  |

Tarefas com restrição flexível ou inflexível exibem um ícone especial na lista de tarefas.

> Mantenha a maioria das tarefas definida como **As soon as possible** e use restrições flexíveis apenas para tarefas que precisem iniciar ou terminar próximo a uma data específica.
