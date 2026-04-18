# Editar com IA

Conecte seu projeto a um assistente de codificação com IA como Claude Code, Codex ou qualquer ferramenta com acesso HTTP, e deixe-o fazer alterações no seu cronograma em tempo real. Enquanto a sessão estiver em execução, a IA pode ler seu projeto atual, adicionar ou modificar tarefas, ajustar dependências, atribuir recursos e enviar atualizações de volta — você vê cada alteração no gráfico de Gantt no momento em que é aplicada.

> **Editar com IA está atualmente em beta.** O recurso está disponível na versão web do Ingantt.

## Iniciando uma Sessão de Edição com IA

1. Abra o projeto que deseja editar.
2. Clique no ícone **Editar com IA** (✨) no canto superior direito, ao lado do botão de histórico de versões.
3. A caixa de diálogo mostra um conjunto de instruções que descrevem como sua ferramenta de IA deve ler e escrever o projeto.
4. Clique em **Copiar instruções**. Isso inicia a sessão de edição e copia as instruções para a área de transferência.
5. Cole as instruções na sua ferramenta de IA (por exemplo, como a primeira mensagem em uma conversa do Claude Code ou Codex).
6. Peça à IA para fazer alterações em linguagem natural — por exemplo, _"adicionar uma fase de QA de duas semanas após o desenvolvimento"_ ou _"atribuir Alex a todas as tarefas de design"_.

A IA segue as instruções para obter o YAML atual, editá-lo e enviar o resultado de volta ao Ingantt. O Ingantt valida cada edição antes de aceitá-la.

## O Que Acontece Durante uma Sessão

- **O ponto verde** ao lado do ícone ✨ indica uma sessão ativa. O ponto fica âmbar quando a conexão está sendo restabelecida e vermelho quando a sessão encontrou um erro.
- **Cada alteração da IA é validada** contra as regras de projeto do Ingantt antes de ser aplicada. Se a IA enviar dados inválidos, o Ingantt rejeita a alteração e informa à IA o que deu errado para que ela possa se autocorrigir.
- **Suas próprias edições também são enviadas para a sessão.** Se você alterar algo na interface do Ingantt enquanto a sessão estiver ativa, a IA verá sua atualização na próxima leitura.
- **O agendador mantém a autoridade.** Quando a IA define datas ou durações, o Ingantt executa novamente o Método do Caminho Crítico para calcular o cronograma final, o que pode mover outras tarefas.

## Parando a Sessão

Clique no ícone ✨ enquanto uma sessão estiver ativa e escolha **Parar sessão**. Você também pode simplesmente fechar a aba do navegador — a sessão termina automaticamente após um período de inatividade.

## Ferramentas de IA Suportadas

Qualquer ferramenta de IA capaz de fazer solicitações HTTP funciona com Editar com IA. Opções comuns incluem:

- **Claude Code** — cole as instruções como a primeira mensagem em uma conversa.
- **Codex** — cole as instruções como a primeira mensagem em uma conversa.
- **Outras ferramentas** — qualquer assistente com acesso a `curl` ou a um cliente HTTP pode ler e escrever na sessão.

## Dicas

- Mantenha a aba do Ingantt aberta enquanto a sessão estiver ativa. Se a aba for fechada, a IA receberá um erro de "sessão não conectada" na próxima gravação.
- Se a IA enviar YAML inválido, você verá uma notificação na interface do Ingantt. A IA recebe os detalhes do erro e geralmente corrige o problema na tentativa seguinte.
- Para projetos grandes, comece com uma solicitação focada (_"reorganizar a fase de testes"_) em vez de mudanças abrangentes — a IA pode iterar em pequenos passos com feedback imediato.
- A IA não pode ver informações que não lhe são fornecidas. Se a sua solicitação depende de contexto — restrições, prazos ou regras de negócio — inclua isso no seu prompt.
