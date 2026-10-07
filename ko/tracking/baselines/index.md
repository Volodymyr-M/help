# 기준선

작업이 시작되기 전에 일정의 스냅샷을 저장한 다음 현재 상태와 비교하여 프로젝트가 어디서 벗어났는지 확인합니다.

기준선은 특정 시점의 모든 작업의 시작 날짜, 완료 날짜, 기간, 작업량 및 비용을 캡처합니다.

## 기준선 설정

**Project** 메뉴의 **Set baseline** 하위 메뉴에서 기준선을 설정합니다:

- 모든 작업 또는 선택한 작업에 대해 기준선을 설정할 수 있습니다.
- Ingantt는 최대 11개의 기준선을 지원합니다.

## 기준선 보기

기준선이 저장되면 **Baselines** 대화 상자에서 기준선 표시를 전환하여 Gantt 차트에서 확인할 수 있습니다. 기준선 막대는 현재 작업 막대 아래에 가느다란 막대로 나타나며, 기준선 번호별로 고유한 색상을 사용합니다.

기준선을 관리하려면 **Project** 메뉴의 **Baselines** 항목을 사용하십시오. **Baselines** 대화 상자에서 다음을 수행할 수 있습니다:

- 저장된 모든 기준선 보기
- 더 이상 필요하지 않은 기준선 제거
- [획득가치](/ko/tracking/earned-value/index.md#획득가치-관리) 계산에 사용할 기준선 지정

## 기준선 및 차이 열

**Options** 대화 상자를 통해 작업 목록에 기준선 열과 차이 열을 추가할 수 있습니다. 총 **55개의 기준선 열**과 **5개의 차이 열**이 있습니다.

### 55개의 기준선 열

Ingantt는 **11개의 기준선**을 저장합니다: 번호 없는 **Baseline**과 **Baseline 1**부터 **Baseline 10**까지입니다. 각 기준선은 동일한 다섯 개의 작업 열을 제공합니다:

- Baseline Start
- Baseline Finish
- Baseline Duration
- Baseline Work
- Baseline Cost

기준선 11개 × 필드 5개 = **55개의 기준선 열**이며, 모두 작업 테이블의 열 선택기에서 사용할 수 있습니다. 번호 없는 세트는 그대로 이름이 붙고(*Baseline Start*), 번호가 있는 세트는 번호가 함께 표시됩니다(*Baseline 3 Start*).

### 5개의 차이 열

차이 열은 계산된 값 — 현재 일정에서 기준선을 뺀 값 — 이며 다섯 개가 있습니다:

- Start Variance
- Finish Variance
- Duration Variance
- Work Variance
- Cost Variance

차이 열은 기준선마다 한 세트씩이 아니라 다섯 개짜리 한 세트만 있습니다. 현재 일정을 **하나의** 기준선과 비교하는데, 이는 **Project → Earned Value Options**에서 [획득가치 기준선](/ko/tracking/earned-value/index.md#획득가치-기준선)으로 선택된 기준선이며 기본값은 번호 없는 Baseline입니다. 이 설정을 바꾸면 모든 차이 열이 선택한 기준선을 기준으로 다시 계산됩니다. 선택된 기준선이 설정된 적이 없는 작업은 0이 아니라 빈 차이 값을 표시합니다.

## 기준선이 저장되는 위치

기준선은 별도의 파일이 아니라 **프로젝트 파일 안에** 저장됩니다. 프로젝트를 저장하면 기준선도 함께 저장됩니다.

열두 번째 기준선을 설정하려고 하면 Ingantt는 <em>All baseline slots are in use. Clear one in the Baselines dialog first.</em>라고 알려 줍니다. **Project → Baselines**를 열어 하나를 지우십시오.

기준선은 파일 자체를 시간 순으로 기록하는 [버전 기록](/ko/ui/version-history/index.md)과 같지 않습니다. 이전 계획으로 돌아가려면 버전 기록을, 현재 계획이 얼마나 벗어났는지 측정하려면 기준선을 사용하십시오.

## 중간 계획

중간 계획은 전체 기준선의 부담 없이 빠른 비교를 위해 경량 일정 스냅샷(**Start** 및 **Finish** 날짜만)을 저장합니다. Ingantt는 최대 10개의 중간 계획(`Interim Plan 1`~`Interim Plan 10`)을 지원합니다.

**Project** 메뉴의 **Interim Plans** 항목에서 중간 계획을 설정하고 지울 수 있습니다. 작업 목록에 중간 계획 날짜를 열로 표시할 수 있습니다.
