# Códigos WBS

Cada tarefa tem um código **WBS** — seu endereço na estrutura de tópicos. Por padrão, é o simples número da estrutura: `1`, `1.1`, `1.2`, `1.2.1`. Exiba-o ativando a coluna **WBS** na tabela de tarefas.

Uma **máscara de código WBS** substitui esses números da estrutura por um código estruturado criado por você, de modo que as tarefas apareçam como `PROJ-A-01` ou `1.A.001` em vez de `1.1.1`. Organizações com um padrão de numeração — um contrato, um esquema de códigos de custo, o formato de relatório de um cliente — usam isso para fazer os códigos do Ingantt corresponderem a esse padrão.

Abra **Project → WBS Code Definition** para configurar uma.

## Códigos WBS e Códigos de Estrutura São Diferentes

- Um **código WBS** é estrutural. Existe exatamente um por tarefa e ele é derivado da posição da tarefa na estrutura de tópicos. Ele se renumera quando você move tarefas de lugar.
- Um **[código de estrutura](/pt/adjusting-schedule/custom-fields/index.md)** é uma etiqueta. Você define uma lista de valores — departamento, fase, centro de custo — e atribui valores às tarefas independentemente da hierarquia. Uma tarefa pode ter vários, de vários códigos de estrutura.

## Definindo a Máscara

A caixa de diálogo tem três partes.

### Prefixo de Código do Projeto

Texto fixo colocado antes de todos os códigos do projeto. Com o prefixo `PROJ`, os códigos aparecem como `PROJ.1.1` ou `PROJ-A-01`, dependendo dos seus separadores. Deixe-o vazio para não usar prefixo.

### Máscara de Código

Uma linha por nível da estrutura, adicionada com **Add Level**. Cada linha define:

| Campo | O que faz |
|-------|-----------|
| **Level** | A profundidade da estrutura à qual esta linha se aplica. O nível 1 são as tarefas de nível superior, o nível 2 suas filhas, e assim por diante. |
| **Sequence** | Os caracteres usados neste nível: **Numbers** (1, 2, 3), **Uppercase Letters** (A, B, C … Z, AA), **Lowercase Letters** (a, b, c … z, aa) ou **Characters**. |
| **Length** | Número máximo de caracteres neste nível. Deixe-o vazio — ele mostra *Any* — para não haver limite. |
| **Separator** | O caractere entre este nível e o próximo, como `.` ou `-`. |

Vale a pena saber duas coisas sobre como os campos se comportam:

- **Length preenche os números com zeros à esquerda.** Um comprimento de `3` em um nível Numbers transforma a nona tarefa em `009`. Ele não preenche níveis de letras.
- **Characters** se comporta da mesma forma que Numbers para os códigos gerados pelo Ingantt. Ele existe por compatibilidade com o Microsoft Project, onde significa um nível digitado por você.

Você não precisa definir todos os níveis. **Níveis mais profundos que a última linha da sua máscara usam um número com separador `.`**, então uma máscara de três linhas em um plano com cinco níveis de profundidade ainda produz um código completo.

### Opções

**Generate WBS code for new task** e **Verify uniqueness of new WBS codes** são armazenados com o projeto e preservados em uma ida e volta pelo Microsoft Project. No Ingantt, uma máscara com pelo menos um nível é aplicada a todas as tarefas automaticamente, e os códigos são únicos por construção, porque seguem a estrutura de tópicos.

## O Que Acontece Quando Você Salva a Máscara

O Ingantt renumera o projeto inteiro imediatamente. Os códigos são reconstruídos a partir da estrutura de tópicos sempre que a estrutura muda — quando você adiciona, exclui, recua, avança ou move uma tarefa — de modo que sempre descrevem onde a tarefa está agora.

Vale dizer isso claramente: **um código WBS não é um identificador permanente de uma tarefa.** Mova uma tarefa e seu código muda. Se você precisa de um rótulo que acompanhe a tarefa, use um código de estrutura ou um [campo de texto personalizado](/pt/adjusting-schedule/custom-fields/index.md).

## Importação e Exportação

A máscara faz parte do formato do Microsoft Project e sobrevive a uma ida e volta. Um projeto importado com uma máscara a mantém, é exportado com ela, e seus códigos de tarefa correspondem ao que o Microsoft Project produziu.
