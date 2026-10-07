# Trabalhando Offline

Desative o salvamento automático para que nada seja gravado no Google Drive até que você salve deliberadamente — útil quando você está prestes a perder a conexão.

Na versão **Web**, o item de menu é **File → Work offline (no autosave)**. No Windows, macOS, Android e iOS, a mesma opção se chama **Enable autosave**.

## O Que o Work Offline Faz

**File → Work offline** desativa o salvamento automático para a aba atual. É só isso. Enquanto está ativado, o Ingantt para de gravar seu projeto no Google Drive a cada 20 segundos, e nada sai do seu navegador até que você salve.

Ativá-lo mostra um lembrete único:

> Offline mode is on. Remember to save your changes manually before closing the tab.

Leve isso ao pé da letra. **O Ingantt não enfileira suas edições e não as envia quando você volta a ficar online.** Não há sincronização em segundo plano. Se você fechar ou recarregar a aba sem salvar, o trabalho feito desde o último salvamento é perdido.

## Salvando Enquanto Está Offline

Você não pode salvar no Google Drive sem conexão, então a sequência que funciona é:

1. Abra o plano enquanto ainda tem conexão.
2. Ative **File → Work offline**.
3. Edite normalmente. Tudo acontece no navegador — o cronograma é recalculado, desfazer e refazer funcionam, nada é enviado a lugar algum.
4. Quando estiver online novamente, desative **Work offline** e então pressione **Save** (ou `Ctrl`/`Cmd` + `S`). Este é o passo que coloca seu trabalho no Drive.
5. O salvamento automático é retomado a partir desse ponto.

Se preferir não depender de lembrar do passo 4, exporte uma cópia antes de perder a conexão: **File → Export → XML** baixa o plano para o seu dispositivo, e você pode abrir esse arquivo novamente mais tarde.

## O Botão Save Mostra Sua Situação

O botão Save na barra de ferramentas é o indicador a observar:

| O que ele mostra | O que significa |
|------------------|-----------------|
| **File saved to Google Drive** | Tudo está no Drive. |
| **Autosave pending…** | Há edições não salvas; o salvamento automático as gravará em breve. |
| **Saving…** | Um salvamento está em andamento. |
| **Save file to Google Drive** | Há edições não salvas e o salvamento automático está desativado — você precisa salvar. |
| **Error saving file to Google Drive** | Um salvamento foi tentado e falhou. Suas edições ainda estão na aba e continuam não salvas. |

O estado de erro é o que você vê se o salvamento automático for executado enquanto a conexão está fora: o salvamento falha, o botão fica vermelho e o projeto permanece não salvo na aba. Nada se perde nesse momento, mas nada está seguro também — reconecte e salve.

## Diferenças entre Plataformas

- **A configuração não persiste na Web.** Ela é por aba e por sessão. Abra uma nova aba ou recarregue, e o salvamento automático volta a ficar ativado. Isso é intencional — salvamento automático ativado é o padrão mais seguro, para que uma opção offline esquecida não acompanhe você. No Windows, macOS, Android e iOS, a configuração de salvamento automático *é* lembrada.
- **Os padrões são diferentes.** Na Web, o salvamento automático vem ativado de fábrica. Nas versões desktop e móveis, ele vem desativado, e o mesmo item de menu aparece como **Enable autosave**.
- **Um projeto que você ainda não salvou não é salvo automaticamente de forma alguma**, com ou sem modo offline. O salvamento automático só pode atualizar um arquivo que já existe no Drive. Salve uma vez, e o salvamento automático assume.
- **Um arquivo aberto do seu dispositivo na versão Web nunca é salvo automaticamente.** O Ingantt para Web não consegue gravar de volta em um arquivo no seu disco. Salve-o no [Google Drive](/pt/ui/files/index.md) para ter o salvamento automático.

## Trabalhando Offline e Editar com IA

Se você usar [Editar com IA](/pt/getting-started/edit-with-ai/index.md) enquanto o salvamento automático está desativado, o Ingantt avisa. As alterações da IA são aplicadas ao projeto aberto como edições comuns, que podem ser desfeitas — elas não são salvas por conta própria. Feche a aba sem salvar e o trabalho da IA vai junto, exatamente como qualquer edição manual.

## O Que Não É Suportado

Para deixar as expectativas claras:

- O Ingantt não detecta que você ficou offline ou voltou a ficar online.
- O Ingantt não enfileira edições feitas offline para reproduzi-las ao reconectar.
- Não há resolução de conflitos de sincronização, porque não há sincronização. Se você e um colega editarem o mesmo arquivo do Drive, o último salvamento vence — o arquivo inteiro, não mesclado tarefa por tarefa.
- Abrir um plano pela primeira vez exige conexão. Trabalhar offline mantém editável um plano que você já tem aberto; não permite abrir um novo.
