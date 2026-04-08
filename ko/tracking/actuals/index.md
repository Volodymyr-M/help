# 실적

작업이 진행되고 [완료율](/ko/tracking/progress/index.md#완료율)을 업데이트하면 Ingantt가 기간, 작업량, 비용 및 날짜에 대한 실적 및 잔여 값을 자동으로 계산합니다. 이 필드를 통해 지출된 금액, 남은 금액, 계획 대비 프로젝트 진행 상황을 정확히 확인할 수 있습니다.

가장 일반적인 실적 및 잔여 열은 **Actual Cost** / **Remaining Cost**, **Actual Work** / **Remaining Work**, **Actual Duration** / **Remaining Duration**입니다. [루트 요약 작업](/ko/building-schedule/tasks/index.md#루트-요약-작업)에서 이 값을 확인하면 전체 프로젝트의 총합을 한눈에 볼 수 있습니다 — 얼마나 지출했는지, 얼마나 노력을 투입했는지, 얼마나 남았는지. 루트 요약 작업이 표시되는지 확인하십시오: **View** 메뉴 또는 **Options** 대화 상자에서 **Show root summary task**를 체크합니다.

## 실적 및 잔여 열 표시

실적 및 잔여 열은 기본적으로 표시되지 않습니다. 작업 목록에 추가하려면 **Options** 대화 상자(**Task Columns** 탭)를 열고 필요한 열을 활성화하십시오. 작업 그리드의 열 헤더를 마우스 우클릭하면 열 설정에 빠르게 접근할 수도 있습니다.

### 기간

- **Actual Duration** — 작업에 지금까지 소요된 근무 시간입니다. 작업 기간에 완료율을 곱하여 계산됩니다.
- **Remaining Duration** — 작업을 완료하는 데 아직 필요한 근무 시간입니다: Duration - Actual Duration.

예를 들어, 10일 작업이 40% 완료되면 Actual Duration은 4일이고 Remaining Duration은 6일입니다.

### 작업량

- **Actual Work** — 자원이 작업에 투입한 총 노력(시간)입니다. 프로젝트 설정에서 **Updating task status updates resource status**가 활성화(기본값)되어 있으면 완료율을 변경할 때 Actual Work가 비례적으로 업데이트됩니다.
- **Remaining Work** — 작업을 완료하는 데 아직 필요한 노력입니다: Work - Actual Work.

### 비용

- **Actual Cost** — 지금까지 발생한 비용: 발생된 고정 비용과 발생된 자원 비용의 합입니다. 비용 발생 방식은 각 자원의 **Cost Accrual** 설정에 따라 다릅니다:
  - **Start** — Actual Start가 설정되면 전체 비용이 인식됩니다.
  - **Prorated** — 실제 작업 진행 상황에 비례하여 비용이 인식됩니다.
  - **End** — 작업이 100% 완료될 때만 비용이 인식됩니다.
- **Remaining Cost** — 작업을 완료하는 데 아직 필요한 예산입니다: Total Cost - Actual Cost.

### 날짜

- **Actual Start** — 작업이 실제로 시작된 날짜입니다. 완료율이 0%를 초과하면 자동으로 작업의 예정 시작 날짜로 설정됩니다.
- **Actual Finish** — 작업이 실제로 완료된 날짜입니다. 완료율이 100%에 도달하면 자동으로 작업의 예정 완료 날짜로 설정됩니다.

### 초과 근무

- **Actual Overtime Work** — 작업에 이미 수행된 초과 근무 시간입니다.
- **Remaining Overtime Work** — 아직 예상되는 초과 근무 시간입니다.
- **Actual Overtime Cost** — 이미 발생한 초과 근무 비용입니다.
- **Remaining Overtime Cost** — 아직 예상되는 초과 근무 비용입니다.

## 실적 계산 방법

모든 실적 및 잔여 필드는 다음 관계를 유지합니다:

> **Total = Actual + Remaining**

하나의 값을 변경하면 Ingantt가 일관성을 유지하기 위해 나머지를 업데이트합니다. 가장 일반적인 워크플로우는 **% Complete**를 업데이트하는 것이며, 이는 모든 실적 및 잔여 필드에 자동으로 연쇄적으로 적용됩니다:

1. **Actual Duration** 및 **Remaining Duration**이 새 완료율에서 재계산됩니다.
2. **Actual Work** 및 **Remaining Work**가 업데이트됩니다 (프로젝트 설정이 활성화된 경우).
3. **Actual Start** 및 **Actual Finish**가 진행 상황에 따라 설정됩니다.
4. **Actual Cost** 및 **Remaining Cost**가 발생 방식에 따라 재계산됩니다.

요약 작업의 경우 **Actual Work**, **Remaining Work**, **Actual Cost**, **Remaining Cost**는 모든 하위 작업에서 롤업(합산)됩니다. **Actual Start**는 하위 작업 중 가장 이른 실제 시작일이고, **Actual Finish**는 가장 늦은 실제 완료일입니다.

## 작업 열

실적 및 잔여 값 외에도 Ingantt는 일정 데이터, 주공정경로 정보, 비용, 작업량, 획득가치 지표, 기준선, 사용자 정의 필드, 개요 코드 등 다양한 작업 열을 지원합니다. 모든 열은 **Options** 대화 상자(**Task Columns** 탭)를 사용하여 켜거나 끄고 재배열할 수 있습니다. 작업 그리드의 열 헤더를 마우스 우클릭하면 열 설정에 빠르게 접근할 수도 있습니다.
