# Importar e Exportar

Abra arquivos de projeto de diversos aplicativos de agendamento e exporte seu projeto para PDF, PNG, CSV ou outros formatos.

## Importando Arquivos de Projeto

O Ingantt pode abrir arquivos de projeto de diversos aplicativos de agendamento, não apenas o Microsoft Project. Os formatos de importação compatíveis incluem:

- **Microsoft Project** — MPP, MPT, MPX
- **Primavera P6** — XER, PMXML
- **GanttProject** — GAN
- **Asta Powerproject** — PP
- **ConceptDraw** — CDPX
- **FastTrack Schedule** — FTS
- **ProjectLibre** — POD
- **GNOME Planner** — Planner
- **Phoenix Project Manager** — PPX
- **Synchro** — SP
- **TurboProject** — PEP
- E mais (SDEF e outros formatos)

Para importar um arquivo, clique no botão **+** na tela de Projetos ou use a opção **Import** no menu **File**. Se você fizer alterações em um arquivo importado, o Ingantt salva no formato XML.

> Para abrir arquivos de projeto que não são XML, o Ingantt os envia por meio de uma conexão segura ao serviço web do Ingantt para conversão. Seus arquivos não ficam armazenados no serviço. É necessária uma conexão com a internet.

## Exportando Seu Projeto

O Ingantt oferece múltiplos formatos de exportação através da opção **Export** no menu **File** (ou **Download** na web). Ao escolher **Export**, uma caixa de diálogo aparece permitindo selecionar o formato desejado:

| Formato | Descrição |
|---------|-----------|
| **PDF** | Documento PDF imprimível do seu gráfico de Gantt |
| **PNG** | Arquivo de imagem do seu gráfico de Gantt (inclui o tema atual) |
| **CSV** | Arquivo de valores separados por vírgula com dados de tarefas para planilhas |
| **XML** | Formato XML de projeto para interoperabilidade |
| **Markdown** | Formato de texto para documentação, READMEs ou wikis |

O arquivo exportado reflete as configurações atuais do seu gráfico de Gantt. Por exemplo, se os nomes das tarefas estiverem ocultos na caixa de diálogo **Options**, eles também não aparecerão na exportação. O nível de zoom também é preservado.

> As exportações em PDF sempre usam cores do tema claro, enquanto as exportações em PNG usam o tema atual da interface (claro ou escuro). Exportações em CSV e Markdown são em texto simples. Quando visíveis na interface, tarefas divididas, barras de linha de base e barras fantasma de nivelamento são renderizadas nas exportações PDF e PNG.
