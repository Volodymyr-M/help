# Salvando Seu Projeto

O Ingantt salva seu projeto como um arquivo no seu dispositivo ou como um arquivo no seu Google Drive. O salvamento automático então mantém esse arquivo atualizado enquanto você trabalha. Este artigo explica qual destino você obtém, quando o salvamento automático se aplica e o único caso em que ele não é possível.

## Salvando pela primeira vez

Clique no botão **Save** na barra de ferramentas ou use **Save file** no menu **File**.

Se o projeto nunca foi salvo, o Ingantt pergunta onde ele deve ficar. **Save project as** oferece dois destinos:

- **Save to new local file** — um arquivo no seu dispositivo.
- **Save to new Google Drive file** — um arquivo no seu Google Drive. Requer login com o Google.

Você pode alterar o destino mais tarde com **Save file as** no menu **File**, que sempre cria um novo arquivo e continua trabalhando nele.

Seu projeto é salvo em um formato XML totalmente compatível com o Microsoft Project. Nada no seu plano fica preso ao Ingantt.

> Na web, se você já estiver com login feito no Google ao criar um projeto, o Ingantt escolhe o Google Drive para você e dá ao arquivo o nome do projeto. Você não precisa salvar uma vez antes que o salvamento automático comece a funcionar, e renomear o projeto renomeia o arquivo no Drive.

## Salvamento automático

Quando o salvamento automático está ativado, o Ingantt grava cada alteração no arquivo existente do projeto em segundo plano, aproximadamente a cada 20 segundos, e apenas quando há algo não salvo. Ele sempre grava no destino que o projeto já tem — nunca escolhe um novo.

Se ele está ativado por padrão depende da plataforma:

| Plataforma | Salvamento automático por padrão | Onde alterar |
|------------|----------------------------------|--------------|
| **Web** | Ativado | Menu **File** → **Work offline (no autosave)** |
| **Android, iOS, Windows, macOS** | Desativado | **Enable autosave** na caixa de diálogo **Options** ou no menu **File** |

O botão **Save** também funciona como indicador do salvamento automático. Ele mostra *Saving…*, *File saved*, *File saved to Google Drive*, *Autosave pending…* ou um erro se um salvamento não foi concluído.

O salvamento automático não pode ajudar em duas situações:

- **O projeto nunca foi salvo.** Ainda não há arquivo para atualizar, então salve-o uma vez você mesmo.
- **O projeto foi aberto de um arquivo local enquanto você usa o Ingantt em um navegador.** Veja abaixo.

## Salvamento automático e arquivos locais na web

Um navegador não pode gravar de volta em um arquivo que você escolheu do seu disco. Quando o Ingantt para Web salva em "um arquivo local", ele baixa uma nova cópia do arquivo — o que é o comportamento correto para um **Save** explícito, mas não algo que você quer que aconteça a cada 20 segundos.

Portanto: **o Ingantt para Web não salva automaticamente em arquivos locais.** Se você abriu um arquivo de projeto local no navegador e quer que suas alterações sejam mantidas automaticamente, use **Save file as** → **Save to new Google Drive file** uma vez. A partir daí, o salvamento automático mantém o arquivo do Drive atualizado.

Isso afeta o [Editar com IA](/pt/getting-started/edit-with-ai/index.md) da mesma forma: sem salvamento automático, tudo o que a IA altera permanece não salvo até que você salve, e o Ingantt avisa sobre isso antes de a sessão começar.

## Trabalhando offline na web

**Work offline (no autosave)** no menu **File** desativa o salvamento automático para a aba atual do navegador. Use-o quando quiser continuar editando sem que cada alteração vá para o Google Drive.

Duas coisas a saber sobre ele:

- Nada é salvo enquanto está ativado, então salve manualmente antes de fechar a aba. O Ingantt lembra você disso ao ativá-lo.
- A configuração é por sessão. Recarregar a página ou abrir uma nova aba começa com o salvamento automático ativado novamente. No Android, iOS, Windows e macOS, por outro lado, a configuração **Enable autosave** é lembrada.

## Baixando uma cópia

Na web, **File** → **Download** → **Download XML** salva uma cópia do projeto no seu computador sem alterar onde o projeto em si é salvo. Use-o para um backup ou para entregar o arquivo a alguém que usa o Microsoft Project.

Outros formatos — PDF, PNG, CSV, XML, YAML e Markdown — são abordados em [Importar e Exportar](/pt/getting-started/import-export/index.md).

## Fechando com alterações não salvas

Se você fechar um projeto com alterações não salvas, o Ingantt pergunta **Save changes to** seu projeto e avisa que as alterações não salvas serão perdidas. O mesmo aviso aparece antes de mover um projeto para a Lixeira.

## Se o Ingantt não permitir salvar

- **"View only mode as trial ended"** ou **"Subscription inactive"** — seus projetos ainda estão lá e continuam legíveis, mas salvar fica desativado até que sua assinatura esteja ativa. Consulte [Avaliação Gratuita](/pt/account/trial/index.md) e [Assinaturas e Pagamento](/pt/account/subscription/index.md).
- **"You are a viewer and cannot save"** — o arquivo do Google Drive foi compartilhado com você como leitor ou comentarista. Peça acesso de edição ao proprietário ou use **Save file as** para manter sua própria cópia. Consulte [Compartilhando um Projeto](/pt/ui/sharing/index.md).
- **"Error saving file to Google Drive"** — geralmente um problema de conexão ou um login do Google expirado. Verifique sua conexão e faça login novamente; consulte [Integração com Google Drive](/pt/ui/files/index.md).
