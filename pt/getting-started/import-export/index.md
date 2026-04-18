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
- **Ingantt YAML** — YAML, YML
- E mais (SDEF e outros formatos)

Para importar um arquivo, clique no botão **+** na tela de Projetos ou use a opção **Import** no menu **File**. Se você fizer alterações em um arquivo importado, o Ingantt salva no formato XML.

> Para abrir arquivos de projeto que não são XML, o Ingantt os envia por meio de uma conexão segura ao serviço web do Ingantt para conversão. Seus arquivos não ficam armazenados no serviço. É necessária uma conexão com a internet. Arquivos YAML são processados localmente.

## Exportando Seu Projeto

O Ingantt oferece múltiplos formatos de exportação através da opção **Export** no menu **File** (ou **Download** na web). Ao escolher **Export**, uma caixa de diálogo aparece permitindo selecionar o formato desejado:

| Formato | Descrição |
|---------|-----------|
| **PDF** | Documento PDF imprimível do seu gráfico de Gantt |
| **PNG** | Arquivo de imagem do seu gráfico de Gantt (inclui o tema atual) |
| **CSV** | Arquivo de valores separados por vírgula com dados de tarefas para planilhas |
| **XML** | Formato XML de projeto para interoperabilidade |
| **YAML** | Definição de projeto compacta e legível por humanos, projetada para edição assistida por IA |
| **Markdown** | Formato de texto para documentação, READMEs ou wikis |

O arquivo exportado reflete as configurações atuais do seu gráfico de Gantt. Por exemplo, se os nomes das tarefas estiverem ocultos na caixa de diálogo **Options**, eles também não aparecerão na exportação. O nível de zoom também é preservado.

> As exportações em PDF sempre usam cores do tema claro, enquanto as exportações em PNG usam o tema atual da interface (claro ou escuro). Exportações em CSV, YAML e Markdown são em texto simples. Quando visíveis na interface, tarefas divididas, barras de linha de base e barras fantasma de nivelamento são renderizadas nas exportações PDF e PNG.

## Editando YAML com Agentes de IA

A exportação YAML foi projetada para ser editada com um assistente de codificação com IA (Claude Code, Codex ou qualquer ferramenta capaz de ler e escrever arquivos). Exporte o projeto, descreva as alterações desejadas em linguagem natural — _"adicionar uma fase de QA de duas semanas após o desenvolvimento"_, _"atribuir Alex a todas as tarefas de design"_ — e importe o resultado de volta.

O formato contém **apenas entradas** (durações, dependências, restrições, atribuições, calendários, taxas). Valores derivados — datas de início/término das tarefas, custo total, caminho crítico, folga, totais de resumo — são omitidos propositalmente; o Ingantt os recalcula na importação. O agente não deve tentar calcular as datas por conta própria.

Direcione o agente para a [referência do formato YAML](/yaml-reference.md) para que ele conheça o esquema.

> Para edição em tempo real sem o ciclo de exportação/importação, consulte [Editar com IA](/pt/getting-started/edit-with-ai/index.md) — a IA lê e escreve o mesmo esquema YAML por meio de uma sessão ao vivo, e você vê cada alteração aparecer no gráfico de Gantt no momento em que acontece.
