# Códigos WBS

Cada tarefa tem um código **WBS** — seu endereço na estrutura de tópicos. Por padrão, é o simples número da estrutura: `1`, `1.1`, `1.2`, `1.2.1`. Exiba-o ativando a coluna **WBS** na tabela de tarefas.

Uma **máscara de código WBS** substitui esses números da estrutura por um código estruturado criado por você, de modo que as tarefas apareçam como `PROJ-A-01` ou `1.A.001` em vez de `1.1.1`. Organizações com um padrão de numeração — um contrato, um esquema de códigos de custo, o formato de relatório de um cliente — usam isso para fazer os códigos do Ingantt corresponderem a esse padrão.

Abra **Projeto → Definição de código WBS** para configurar uma.

## Códigos WBS e Códigos de Estrutura São Diferentes

- Um **código WBS** é estrutural. Existe exatamente um por tarefa e ele é derivado da posição da tarefa na estrutura de tópicos. Ele se renumera quando você move tarefas de lugar.
- Um **[código de estrutura](/pt/adjusting-schedule/custom-fields/index.md)** é uma etiqueta. Você define uma lista de valores — departamento, fase, centro de custo — e atribui valores às tarefas independentemente da hierarquia. Uma tarefa pode ter vários, de vários códigos de estrutura.

## Definindo a Máscara

A caixa de diálogo tem três partes.

### Prefixo de código do projeto

Texto fixo colocado antes de todos os códigos do projeto. Com o prefixo `PROJ`, os códigos aparecem como `PROJ.1.1` ou `PROJ-A-01`, dependendo dos seus separadores. Deixe-o vazio para não usar prefixo.

### Máscara de código

Uma linha por nível da estrutura, adicionada com **Adicionar nível**. Cada linha define:

| Campo | O que faz |
|-------|-----------|
| **Nível** | A profundidade da estrutura à qual esta linha se aplica. O nível 1 são as tarefas de nível superior, o nível 2 suas filhas, e assim por diante. |
| **Sequência** | Os caracteres usados neste nível: **Números** (1, 2, 3), **Letras maiúsculas** (A, B, C … Z, AA), **Letras minúsculas** (a, b, c … z, aa) ou **Caracteres**. |
| **Comprimento** | Número máximo de caracteres neste nível. Deixe-o vazio — ele mostra *Qualquer* — para não haver limite. |
| **Separador** | O caractere entre este nível e o próximo, como `.` ou `-`. |

Vale a pena saber duas coisas sobre como os campos se comportam:

- **Length preenche os números com zeros à esquerda.** Um comprimento de `3` em um nível Numbers transforma a nona tarefa em `009`. Ele não preenche níveis de letras.
- **Caracteres** se comporta da mesma forma que Numbers para os códigos gerados pelo Ingantt. Ele existe por compatibilidade com o Microsoft Project, onde significa um nível digitado por você.

Você não precisa definir todos os níveis. **Níveis mais profundos que a última linha da sua máscara usam um número com separador `.`**, então uma máscara de três linhas em um plano com cinco níveis de profundidade ainda produz um código completo.

### Opções

**Gerar código WBS para nova tarefa** e **Verificar unicidade de novos códigos WBS** são armazenados com o projeto e preservados em uma ida e volta pelo Microsoft Project. No Ingantt, uma máscara com pelo menos um nível é aplicada a todas as tarefas automaticamente, e os códigos são únicos por construção, porque seguem a estrutura de tópicos.

## O Que Acontece Quando Você Salva a Máscara

O Ingantt renumera o projeto inteiro imediatamente. Os códigos são reconstruídos a partir da estrutura de tópicos sempre que a estrutura muda — quando você adiciona, exclui, recua, avança ou move uma tarefa — de modo que sempre descrevem onde a tarefa está agora.

Vale dizer isso claramente: **um código WBS não é um identificador permanente de uma tarefa.** Mova uma tarefa e seu código muda. Se você precisa de um rótulo que acompanhe a tarefa, use um código de estrutura ou um [campo de texto personalizado](/pt/adjusting-schedule/custom-fields/index.md).

## Importação e Exportação

A máscara faz parte do formato do Microsoft Project e sobrevive a uma ida e volta. Um projeto importado com uma máscara a mantém, é exportado com ela, e seus códigos de tarefa correspondem ao que o Microsoft Project produziu.
