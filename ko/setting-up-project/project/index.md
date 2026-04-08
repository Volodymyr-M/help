# 프로젝트 속성

프로젝트의 시작 날짜, 근무 시간 및 일정 규칙을 구성합니다. 이 설정은 프로젝트의 모든 작업이 계산되고 표시되는 방식에 영향을 미칩니다.

## 프로젝트 이름

**Project Properties** 대화 상자의 **General** 탭에 있는 **Name** 필드에서 프로젝트 이름을 설정합니다. 이 이름은 프로젝트의 [루트 요약 작업](/ko/building-schedule/tasks/index.md#루트-요약-작업)에서도 사용됩니다.

웹 및 Windows에서는 헤더의 프로젝트 이름을 클릭하면 **Project Properties** 대화 상자가 열립니다.

## 시작 날짜 및 계획 방향

기본적으로 프로젝트는 시작 날짜 기준으로 계획되며, **Project Properties** 대화 상자의 **Project Start Date** 필드에서 설정할 수 있습니다.

완료 날짜 기준으로 프로젝트를 계획하려면 **Project Properties** 대화 상자에서 **Plan from Finish date**로 전환하고 **Project Finish Date**를 설정하십시오.

**Project Properties** 대화 상자의 **General** 탭에는 시작 날짜와 완료 날짜가 모두 표시됩니다. 시작일 기준으로 일정을 잡으면 시작 날짜가 편집 가능하고 완료 날짜는 계산된 값으로 표시됩니다. 완료일 기준으로 일정을 잡으면 완료 날짜가 편집 가능하고 시작 날짜는 계산된 값으로 표시됩니다.

유의 사항:

- 시작 날짜 기준으로 계획된 프로젝트의 경우, 새로 생성되는 작업의 기본 [제약 조건](/ko/building-schedule/constraints/index.md#제약-조건)은 **As soon as possible**입니다.
- 완료 날짜 기준으로 계획된 프로젝트의 경우, 새로 생성되는 작업의 기본 제약 조건은 **As late as possible**입니다.

시작 기준과 완료 기준 사이를 전환할 때 기존 작업의 제약 조건은 [요약 작업](/ko/building-schedule/tasks/index.md#요약-작업)([루트 요약 작업](/ko/building-schedule/tasks/index.md#루트-요약-작업) 포함)을 제외하고 변경되지 않습니다.

요약 작업의 경우:

- 시작 기준에서 완료 기준으로 전환 시 **As soon as possible** 제약 조건이 **As late as possible**로 대체됩니다.
- 완료 기준에서 시작 기준으로 전환 시 **As late as possible** 제약 조건이 **As soon as possible**로 대체됩니다.

## 주의 시작 요일

국가에 따라 주의 시작이 일요일 또는 월요일일 수 있습니다. **Project Properties** 대화 상자의 **Regional** 탭에서 **First Day of Week** 필드를 업데이트하여 프로젝트의 기본 설정을 변경할 수 있습니다.

이 속성을 변경하면 일부 확대/축소 수준에서의 Gantt 차트를 포함하여 사용자 인터페이스가 업데이트되지만, 일정에는 영향을 미치지 않습니다. 일정을 그에 맞게 조정하려면 [달력](/ko/setting-up-project/calendars/index.md)을 업데이트하십시오.

## 일당 시간, 주당 일수, 월당 일수

Ingantt에서는 [기간](/ko/building-schedule/task-properties/index.md#기간), [작업량](/ko/building-schedule/task-properties/index.md#작업량) 또는 [지연](/ko/building-schedule/dependencies/index.md#지연-및-선행-시간)을 시간, 일, 주, 월 단위로 지정할 수 있습니다.

예를 들어, 작업 기간을 2일로 설정하면 기본 설정에서 16시간을 의미합니다.

기본값:

- 1일 = 8시간
- 1주 = 5일 (40시간)
- 1개월 = 20일 (160시간)

**Project Properties** 대화 상자의 **Duration** 탭에서 이 기본 설정을 변경할 수 있습니다.

> 대부분의 프로젝트는 기본값을 사용하는 것이 좋습니다. 다른 변환이 필요한 특정 요구 사항이 있는 경우에만 이 설정을 변경하십시오.

## 기간 및 작업량 표시 형식

기본적으로 기간은 일 단위로, 작업량은 시간 단위로 표시됩니다. **Project Properties** 대화 상자의 **Time** 탭에서 두 가지 모두의 표시 형식을 변경할 수 있습니다. 사용 가능한 단위는 분, 시간, 일, 주, 월입니다.

형식을 변경하면 모든 기존 값이 새 단위로 업데이트되어 표시됩니다.

## 기본 시작 및 완료 시간

기본 시작 시간(오전 8:00)과 완료 시간(오후 5:00)은 매일 작업이 시작되고 끝나는 시간을 제어합니다. **Project Properties** 대화 상자의 **Time** 탭에서 변경할 수 있습니다.

## 일정 옵션

**Project Properties** 대화 상자의 **Scheduling** 탭에는 작업 일정 방식을 제어하는 옵션이 포함되어 있습니다:

- **Honor constraint dates** — 활성화하면 반유연 제약 조건(예: Start No Later Than)이 종속성보다 우선하여 음의 여유가 발생할 수 있습니다. 비활성화(기본값)하면 종속성이 항상 우선합니다.
- **Split in-progress tasks** — 활성화(기본값)하면 스케줄러가 순서에 맞지 않는 진행 상황이 있는 작업을 자동으로 분할할 수 있습니다.
- **Move completed/remaining parts** — 완료된 작업과 남은 작업 부분이 상태 날짜를 기준으로 어떻게 재배치되는지를 제어하는 네 가지 옵션입니다. 완료된 작업을 상태 날짜 이전으로 이동하거나 남은 작업을 앞으로 밀어서 일정을 최신 상태로 유지하는 데 도움이 됩니다.
