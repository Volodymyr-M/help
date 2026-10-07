# Compartilhando um Projeto

Um projeto do Ingantt armazenado no Google Drive pode ser compartilhado da mesma forma que qualquer outro arquivo do Drive — com pessoas específicas, com sua organização ou com qualquer pessoa que tenha o link. Na web, você faz tudo isso de dentro do Ingantt.

## Antes de começar

O compartilhamento funciona apenas com arquivos do Google Drive. Você precisa estar com login feito no Google e o projeto precisa estar salvo no Drive; um projeto que fica em um arquivo local no seu dispositivo não tem nada a compartilhar. Consulte [Salvando Seu Projeto](/pt/getting-started/saving/index.md).

> O botão **Compartilhar** faz parte do Ingantt para Web. No Android, iOS, Windows e macOS, compartilhe o arquivo pelo Google Drive — abra o Drive, localize o arquivo do Ingantt e use o comando **Compartilhar** do próprio Drive. O resultado é idêntico, porque as permissões ficam no arquivo do Drive de qualquer forma.

## Compartilhando com pessoas específicas

1. Abra o projeto e clique em **Compartilhar** no cabeçalho, ou escolha **Compartilhar** no menu **Arquivo**. A caixa de diálogo **Compartilhar no Google Drive** é aberta.
2. Em **Pessoas com acesso**, você vê todos que já têm acesso, com os proprietários primeiro.
3. Clique em **Adicionar**, insira o endereço de e-mail da pessoa, escolha a função que ela deve ter e confirme.
4. Feche a caixa de diálogo. O Ingantt salva as novas permissões no Drive e confirma com *Acesso atualizado*.

As funções são as funções do Google Drive:

| Função | O que pode fazer |
|--------|------------------|
| **Visualizador** | Abrir o projeto e visualizá-lo. Não pode salvar alterações. |
| **Comentarista** | O mesmo que Viewer, além de comentar no arquivo no Google Drive. Não pode salvar alterações. |
| **Editor** | Abrir o projeto e salvar alterações nele. |
| **Proprietário** | Tudo, incluindo excluir o arquivo e transferir a propriedade. |

Para alterar a função de alguém, escolha uma função diferente ao lado do nome da pessoa. Para removê-la, exclua a linha dela.

> Insira um endereço com o qual a pessoa realmente consiga fazer login no Google. Se o Ingantt não conseguir confirmar que o endereço pertence ao Gmail ou ao Google Workspace, ele avisa, porque um compartilhamento do Drive para um endereço sem uma conta Google por trás não permitirá que a pessoa abra o projeto.

## Acesso geral — links e organizações

**Acesso geral** controla todos que você não nomeou individualmente:

- **Restrito** — apenas as pessoas listadas em **Pessoas com acesso**. Este é o padrão.
- **Qualquer pessoa com o link** — qualquer pessoa que tenha o link, com a função que você escolher (Viewer, Commenter ou Editor).
- **Domínio** — todos na sua organização do Google Workspace, com a função que você escolher. Esta opção aparece apenas quando o proprietário do projeto está em um domínio do Workspace; ela não é oferecida para contas pessoais do Gmail.

**Copiar link** copia o link do Google Drive para o projeto. Qualquer pessoa cujo acesso permita pode abrir esse link e editar o plano no Ingantt.

A dica de ferramenta do botão **Compartilhar** informa o estado atual de relance — *Private — only you can access*, *Compartilhado com pessoas específicas*, *Anyone with the link can view/comment/edit* ou o equivalente para o seu domínio.

## Quem pode alterar o acesso

Apenas o **proprietário** do arquivo pode sempre gerenciar o acesso. Um **editor** também pode gerenciar o acesso, a menos que o proprietário tenha desativado isso no Google Drive.

Se você abrir a caixa de diálogo em um projeto compartilhado com você como leitor ou comentarista, ela informa **Você é um visualizador e não pode gerenciar o acesso** e mostra o acesso geral atual sem permitir que você o altere. Peça ao proprietário se precisar de mais.

## Trabalhando em um projeto compartilhado

- Todos abrem o mesmo arquivo do Drive, mas o Ingantt não é uma ferramenta de coedição em tempo real. Cada salvamento grava o arquivo de projeto inteiro, então, se duas pessoas estiverem com o plano aberto e ambas salvarem, o último salvamento vence e as alterações da outra pessoa são substituídas. Combinem quem vai editar antes de começar e verifiquem o histórico de versões do arquivo no Google Drive se acharem que algo foi perdido.
- Um leitor ou comentarista que tenta salvar vê **Você é um visualizador e não pode salvar**. Use **Salvar arquivo como** para manter uma cópia pessoal.
- Cada colaborador precisa da sua própria assinatura ou avaliação ativa do Ingantt para editar — compartilhar um plano não compartilha sua assinatura. Consulte [Assinaturas e Pagamento](/pt/account/subscription/index.md).
- Compartilhar com um endereço de **grupo** do Google não é suportado pela caixa de diálogo Share no Ingantt. Compartilhe com endereços individuais ou gerencie um compartilhamento de grupo pelo Google Drive.

## Relacionados

- [Integração com Google Drive](/pt/ui/files/index.md) — login, permissões e abertura de arquivos compartilhados.
- [Salvando Seu Projeto](/pt/getting-started/saving/index.md) — onde um projeto é armazenado e quando ele é salvo.
