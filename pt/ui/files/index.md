# Integração com Google Drive

O Ingantt armazena seus arquivos de projeto no Google Drive para que você possa acessá-los de qualquer dispositivo. Este artigo aborda o login, as permissões que o Ingantt solicita, como o Drive e o Ingantt se encaixam e o que fazer quando o login no Google não se comporta como esperado.

## Fazer Login no Google

Na tela de Projetos, clique em **Entrar com o Google**. Uma caixa de diálogo padrão do Google é aberta e solicita as permissões abaixo. Você pode sair a qualquer momento com **Sair do Google**.

O Ingantt solicita as seguintes permissões:

- **See your profile info** — Usado para identificar sua conta.
- **Connect itself to your Google Drive** — Apenas na versão **Web**. Permite criar ou abrir arquivos do Ingantt pela interface web do Google Drive (botão **Novo** ou menu **Open with**).
- **See, edit, create, and delete only the specific Google Drive files you use with this app** — Permite que o Ingantt crie e edite seus próprios arquivos no seu Google Drive. O Ingantt não pode acessar seus outros arquivos.

> A terceira permissão é o escopo restrito do Google Drive: o Ingantt só vê os arquivos que você criou no Ingantt ou abriu com ele. O restante do seu Drive permanece invisível para o Ingantt, e é também por isso que o Ingantt não consegue navegar pelas pastas do seu Drive para você.

## Criando e abrindo projetos no Google Drive

Depois de fazer login, a tela de Projetos é o seu Drive:

- **Projetos Recentes** — projetos que você abriu mais recentemente, agrupados por data.
- **Compartilhados comigo** — arquivos do Ingantt que outras pessoas compartilharam com você.
- **Favoritos** — projetos que você marcou com **Adicionar aos Favoritos**.
- **Lixeira** — projetos que você moveu para a Lixeira. Use **Restaurar** para trazer um de volta.

Use **Abrir** → **Abrir do Google Drive** para escolher um arquivo existente, ou a aba **Enviar** dessa caixa de diálogo para procurar um arquivo no seu dispositivo ou arrastá-lo para lá. Arquivos do Microsoft Project, Primavera e dos outros formatos compatíveis podem ser abertos dessa forma — consulte [Importar e Exportar](/pt/getting-started/import-export/index.md).

Novos projetos são criados a partir de **Novo** na tela de Projetos: **Novo projeto**, **Novo com IA** ou **Novo a partir de modelo**. Quando você está com login feito na web, um novo projeto é direcionado ao Google Drive imediatamente e salvo automaticamente a partir daí.

> **Está faltando um arquivo em "Shared with me"?** O Google exige que você abra um arquivo compartilhado primeiro a partir do Google Drive. Clique com o botão direito no arquivo lá e escolha **Open with** → **Ingantt**. Ele então aparece na lista.

## Usando o Ingantt a partir da própria interface do Google Drive (web)

Na web, o Ingantt pode ser iniciado a partir do Drive, e não apenas o contrário. É para isso que serve a permissão **Connect itself to your Google Drive**: ao concedê-la quando você faz login no Ingantt, o Ingantt é registrado como aplicativo do Drive para a sua conta e passa a aparecer no menu **Novo** do Drive e no menu **Open with** dos arquivos do Ingantt. Adicionar o Ingantt a partir do [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"} faz a mesma coisa; não é preciso fazer os dois.

- **Novo** → **More** → **Ingantt** cria um novo projeto do Ingantt na pasta do Drive em que você está.
- Clique com o botão direito em um arquivo do Ingantt → **Open with** → **Ingantt** para abri-lo no Ingantt para Web.

Em ambos os casos, o Drive abre `web.ingantt.com` e repassa a pasta ou o arquivo a ser usado, para que você chegue diretamente ao projeto certo.

## Solução de problemas de login no Google (Web)

**O Google Drive não oferece o Ingantt nos menus New ou Open with.** Saia do Google no Ingantt, faça login novamente e certifique-se de conceder a permissão **Connect itself to your Google Drive** na tela de consentimento; o Google só adiciona as entradas de menu do Drive depois que essa permissão é concedida, e é fácil pulá-la. Adicionar o Ingantt a partir do Google Workspace Marketplace concede a mesma permissão. Depois, recarregue o Drive. Se você usa uma conta do Google Workspace do trabalho ou da escola, o administrador pode ter desativado aplicativos de terceiros para o Drive ou restringido instalações pelo Marketplace.

**Um arquivo que alguém compartilhou com você não está em "Shared with me".** Abra-o uma vez a partir do Google Drive com **Open with** → **Ingantt**. Como o Ingantt só tem acesso aos arquivos que você usa com o Ingantt, um arquivo compartilhado fica invisível para ele até que você o tenha aberto dessa forma pelo menos uma vez.

**"Error saving file to Google Drive".** Verifique sua conexão primeiro. Se o problema persistir, saia do Google e faça login novamente — o login pode ter expirado ou perdido uma permissão.

**"Could not sign in to Google."** Se você usa mais de uma conta Google, certifique-se de que a janela pop-up esteja fazendo login com a conta que possui seus projetos. Extensões de navegador que bloqueiam cookies de terceiros ou pop-ups também podem impedir que a caixa de diálogo do Google seja concluída.

Ainda com problemas? [Entre em contato com o suporte](mailto:support@ingantt.com) e nos informe sua plataforma, seu navegador e a mensagem exata que você vê.

## Vídeo de demonstração

[Usando o Ingantt para Web com o Google Drive](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## Relacionados

- [Salvando Seu Projeto](/pt/getting-started/saving/index.md) — destinos, salvamento automático e trabalho offline.
- [Compartilhando um Projeto](/pt/ui/sharing/index.md) — dando a outras pessoas acesso a um plano.
