# Integração com Google Drive

O Ingantt armazena seus arquivos de projeto no Google Drive para que você possa acessá-los de qualquer dispositivo. Este artigo aborda o login, as permissões que o Ingantt solicita, como o Drive e o Ingantt se encaixam e o que fazer quando o login no Google não se comporta como esperado.

## Trabalhando sem fazer login

Você não precisa fazer login. Sem uma conta Google, você pode abrir e editar arquivos de projeto armazenados no seu dispositivo e salvá-los de volta (na web, salvar um arquivo local baixa uma nova cópia — consulte [Salvando Seu Projeto](/pt/getting-started/saving/index.md)).

Faça login com o Google quando quiser que seus projetos fiquem na nuvem, sejam salvos automaticamente enquanto você trabalha, estejam disponíveis nos seus outros dispositivos e possam ser compartilhados com outras pessoas.

## Fazer Login no Google

Na tela de Projetos, clique em **Sign in with Google**. Uma caixa de diálogo padrão do Google é aberta e solicita as permissões abaixo. Você pode sair a qualquer momento com **Sign out of Google**.

O Ingantt solicita as seguintes permissões:

- **See your profile info** — Usado para identificar sua conta.
- **Connect itself to your Google Drive** — Apenas na versão **Web**. Permite criar ou abrir arquivos do Ingantt pela interface web do Google Drive (botão **New** ou menu **Open with**).
- **See, edit, create, and delete only the specific Google Drive files you use with this app** — Permite que o Ingantt crie e edite seus próprios arquivos no seu Google Drive. O Ingantt não pode acessar seus outros arquivos.

> A terceira permissão é o escopo restrito do Google Drive: o Ingantt só vê os arquivos que você criou no Ingantt ou abriu com ele. O restante do seu Drive permanece invisível para o Ingantt, e é também por isso que o Ingantt não consegue navegar pelas pastas do seu Drive para você.

## Criando e abrindo projetos no Google Drive

Depois de fazer login, a tela de Projetos é o seu Drive:

- **Recent Projects** — projetos que você abriu mais recentemente, agrupados por data.
- **Shared with me** — arquivos do Ingantt que outras pessoas compartilharam com você.
- **Starred** — projetos que você marcou com **Add to Starred**.
- **Trash** — projetos que você moveu para a Lixeira. Use **Restore** para trazer um de volta.

Use **Open** → **Open from Google Drive** para escolher um arquivo existente, ou a aba **Upload** dessa caixa de diálogo para procurar um arquivo no seu dispositivo ou arrastá-lo para lá. Arquivos do Microsoft Project, Primavera e dos outros formatos compatíveis podem ser abertos dessa forma — consulte [Importar e Exportar](/pt/getting-started/import-export/index.md).

Novos projetos são criados a partir de **New** na tela de Projetos: **New project**, **New with AI** ou **New from template**. Quando você está com login feito na web, um novo projeto é direcionado ao Google Drive imediatamente e salvo automaticamente a partir daí.

> **Está faltando um arquivo em "Shared with me"?** O Google exige que você abra um arquivo compartilhado primeiro a partir do Google Drive. Clique com o botão direito no arquivo lá e escolha **Open with** → **Ingantt**. Ele então aparece na lista.

## Usando o Ingantt a partir da própria interface do Google Drive (web)

Na web, o Ingantt pode ser iniciado a partir do Drive, e não apenas o contrário. É para isso que serve a permissão **Connect itself to your Google Drive**, e isso só funciona depois que o Ingantt foi adicionado ao seu Drive a partir do [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"}.

- **New** → **More** → **Ingantt** cria um novo projeto do Ingantt na pasta do Drive em que você está.
- Clique com o botão direito em um arquivo do Ingantt → **Open with** → **Ingantt** para abri-lo no Ingantt para Web.

Em ambos os casos, o Drive abre `web.ingantt.com` e repassa a pasta ou o arquivo a ser usado, para que você chegue diretamente ao projeto certo.

## Solução de problemas de login no Google (Web)

**O Google Drive não oferece o Ingantt nos menus New ou Open with.** Saia do Google no Ingantt, faça login novamente e certifique-se de conceder a permissão **Connect itself to your Google Drive**. O Google só adiciona as entradas de menu do Drive depois que essa permissão foi concedida, e é fácil pulá-la na tela de consentimento. Se as entradas ainda estiverem faltando, verifique se o Ingantt está adicionado à sua conta a partir do Google Workspace Marketplace.

**Um arquivo que alguém compartilhou com você não está em "Shared with me".** Abra-o uma vez a partir do Google Drive com **Open with** → **Ingantt**. Como o Ingantt só tem acesso aos arquivos que você usa com o Ingantt, um arquivo compartilhado fica invisível para ele até que você o tenha aberto dessa forma pelo menos uma vez.

**"Error saving file to Google Drive".** Verifique sua conexão primeiro. Se o problema persistir, saia do Google e faça login novamente — o login pode ter expirado ou perdido uma permissão.

**"Could not sign in to Google."** Se você usa mais de uma conta Google, certifique-se de que a janela pop-up esteja fazendo login com a conta que possui seus projetos. Extensões de navegador que bloqueiam cookies de terceiros ou pop-ups também podem impedir que a caixa de diálogo do Google seja concluída.

Ainda com problemas? [Entre em contato com o suporte](mailto:support@ingantt.com) e nos informe sua plataforma, seu navegador e a mensagem exata que você vê.

## Vídeo de demonstração

[Usando o Ingantt para Web com o Google Drive](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## Relacionados

- [Salvando Seu Projeto](/pt/getting-started/saving/index.md) — destinos, salvamento automático e trabalho offline.
- [Compartilhando um Projeto](/pt/ui/sharing/index.md) — dando a outras pessoas acesso a um plano.
