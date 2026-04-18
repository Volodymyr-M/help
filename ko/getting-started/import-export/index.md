# 가져오기 및 내보내기

다양한 일정 관리 애플리케이션의 프로젝트 파일을 열고 프로젝트를 PDF, PNG, CSV 등의 형식으로 내보냅니다.

## 프로젝트 파일 가져오기

Ingantt는 Microsoft Project뿐만 아니라 다양한 일정 관리 애플리케이션의 프로젝트 파일을 열 수 있습니다. 지원되는 가져오기 형식은 다음과 같습니다:

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
- 기타 (SDEF 및 기타 형식)

파일을 가져오려면 프로젝트 화면에서 **+** 버튼을 클릭하거나 **File** 메뉴의 **Import** 옵션을 사용하십시오. 가져온 파일을 변경하면 Ingantt는 XML 형식으로 저장합니다.

> 비 XML 프로젝트 파일을 열기 위해 Ingantt는 보안 연결을 통해 Ingantt 웹 서비스로 파일을 전송하여 변환합니다. 파일은 서비스에 저장되지 않습니다. 인터넷 연결이 필요합니다. YAML 파일은 로컬에서 처리됩니다.

## 프로젝트 내보내기

Ingantt는 **File** 메뉴(또는 웹에서 **Download**)의 **Export** 옵션을 통해 여러 내보내기 형식을 제공합니다. **Export**를 선택하면 원하는 형식을 선택할 수 있는 대화 상자가 나타납니다:

| 형식 | 설명 |
|--------|-------------|
| **PDF** | Gantt 차트의 인쇄 가능한 PDF 문서 |
| **PNG** | Gantt 차트의 이미지 파일 (현재 테마 포함) |
| **CSV** | 스프레드시트용 작업 데이터의 쉼표 구분 값 파일 |
| **XML** | 상호 운용성을 위한 프로젝트 XML 형식 |
| **YAML** | AI 지원 편집을 위해 설계된 간결하고 사람이 읽기 쉬운 프로젝트 정의 |
| **Markdown** | 문서화, README 또는 위키용 텍스트 형식 |

내보낸 파일은 현재 Gantt 차트 설정을 반영합니다. 예를 들어, **Options** 대화 상자에서 작업 이름이 숨겨져 있으면 내보내기에도 표시되지 않습니다. 확대/축소 수준도 유지됩니다.

> PDF 내보내기는 항상 라이트 테마 색상을 사용하고, PNG 내보내기는 현재 UI 테마(라이트 또는 다크)를 사용합니다. CSV, YAML 및 Markdown 내보내기는 일반 텍스트입니다. UI에서 표시되는 경우 분할 작업, 기준선 막대 및 평준화 고스트 막대가 모두 PDF 및 PNG 내보내기에 렌더링됩니다.

## AI 에이전트로 YAML 편집하기

YAML 내보내기는 AI 코딩 도우미(Claude Code, Codex 또는 파일을 읽고 쓸 수 있는 모든 도구)로 편집할 수 있도록 설계되었습니다. 프로젝트를 내보내고, 원하는 변경 사항을 자연어로 설명한 다음 — _"개발 후 2주간의 QA 단계를 추가해 줘"_, _"Alex를 모든 디자인 작업에 배정해 줘"_ — 결과를 다시 가져옵니다.

이 형식은 **입력만** (기간, 종속성, 제약 조건, 배정, 달력, 요율) 담고 있습니다. 파생된 값 — 작업 시작/종료 날짜, 총 비용, 임계 경로, 여유 시간, 요약 집계 — 은 의도적으로 생략되어 있으며, Ingantt가 가져오기 시 이를 다시 계산합니다. 에이전트는 날짜를 스스로 계산하려고 해서는 안 됩니다.

에이전트가 스키마를 알 수 있도록 [YAML 형식 참조](/yaml-reference.md)로 안내하십시오.

> 내보내기/가져오기 왕복 없이 실시간으로 편집하려면 [AI로 편집하기](/ko/getting-started/edit-with-ai/index.md)를 참조하십시오 — AI는 실시간 세션을 통해 동일한 YAML 스키마를 읽고 쓰며, 각 변경 사항이 발생하는 즉시 Gantt 차트에 나타나는 것을 볼 수 있습니다.
