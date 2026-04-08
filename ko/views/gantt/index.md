# Gantt 차트

Gantt 차트는 프로젝트의 타임라인입니다. 평준화 조정, 진행선, 기준선 이후 일정이 어떻게 변경되었는지 확인할 수 있습니다.

## 사용 가능한 보기

Ingantt는 탐색 서랍이나 **View** 메뉴에서 접근할 수 있는 프로젝트 작업을 위한 다양한 보기를 제공합니다. 모든 보기에서 작업에 대해 사용 가능한 모든 작업을 수행할 수 있습니다.

**작업 보기:**

- **Tasks** — 작업 목록 및 Gantt 차트
- **Tracking Gantt**
- **[Task Board](/ko/views/task-views/index.md#task-board)**
- **[Network Diagram](/ko/views/task-views/index.md#network-diagram)**
- **[Calendar View](/ko/views/task-views/index.md#calendar-view)**
- **[Timeline](/ko/views/task-views/index.md#timeline)**

**자원 보기:**

- **[Resource Usage](/ko/views/resource-views/index.md#resource-usage)**
- **[Task Usage](/ko/views/resource-views/index.md#task-usage)**
- **[Team Planner](/ko/views/resource-views/index.md#team-planner)**
- **[Resource Graph](/ko/views/resource-views/index.md#resource-graph)**

## Tasks 보기

**Tasks** 보기는 작업 목록과 Gantt 차트(분할 보기)를 결합한 기본 보기입니다. **View > Panels in Tasks** 하위 메뉴에서 표시할 패널을 구성할 수 있습니다: Task List와 Gantt Chart를 각각 독립적으로 전환할 수 있습니다.

## 작업 검사기

**Task Inspector**는 선택한 작업의 세부 정보를 보여주는 측면 패널로, 일정 결정 요인(작업 날짜를 결정하는 요소), 일반 속성, 자원, 선행 작업, 비용 등이 포함됩니다. 도구 모음에서 Task Inspector를 전환합니다.

상단의 **Scheduling Factors** 섹션은 작업의 예정 날짜를 결정하는 요소를 보여줍니다: 추진 선행 작업("Driving" 배지가 있는 굵은 글씨), 비추진 선행 작업(상대적 여유 포함), 제약 조건, 평준화 지연, 달력 및 여유 값. 주공정 작업에는 "Critical" 배지가 표시됩니다.

## 평준화 Gantt

[자동 평준화](/ko/adjusting-schedule/leveling/index.md#자동-평준화)가 프로젝트에 적용된 경우, Gantt 차트 영역에 **Leveling Gantt** 토글 버튼이 나타납니다.

활성화하면 Gantt 차트에 각 작업의 평준화 전 위치(자동 평준화 전 작업의 위치)에 **녹색 막대**가 표시됩니다. 표준 작업 막대는 현재 평준화된 위치에 유지됩니다. 이를 통해 원래 일정과 평준화된 일정을 시각적으로 비교하고 각 작업이 얼마나 지연되었는지 확인할 수 있습니다.

토글이 꺼져 있으면 표준 작업 막대만 표시됩니다.

> Leveling Gantt 토글은 평준화 데이터가 있을 때만 표시됩니다. 평준화를 지우면 자동으로 숨겨집니다. 이미 평준화 데이터가 포함된 프로젝트 파일을 열면 토글을 사용할 수 있지만 꺼진 상태로 시작됩니다.

## 진행선

활성화하면 Gantt 차트에 **진행선** — 작업이 상태 날짜 기준으로 일정보다 뒤처져 있는지 앞서 있는지를 시각적으로 나타내는 지그재그 선이 표시됩니다. 뒤처진 작업은 선을 왼쪽으로, 앞선 작업은 오른쪽으로, 정상 진행 작업은 선을 직선으로 유지합니다.

Gantt 차트의 플로팅 도구 모음 버튼이나 **View** 메뉴에서 진행선을 전환합니다. 진행선이 활성화되어 있으면 PDF/인쇄 출력에도 포함됩니다.
