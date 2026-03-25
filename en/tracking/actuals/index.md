# Actuals

As work progresses and you update [% Complete](/en/tracking/progress/index.md#-complete), Ingantt automatically calculates actual and remaining values for duration, work, cost, and dates. These fields let you see exactly what has been spent, what is left, and how the project is tracking against the plan.

The most common actual and remaining columns are **Actual Cost** / **Remaining Cost**, **Actual Work** / **Remaining Work**, and **Actual Duration** / **Remaining Duration**. By looking at these values on the [root summary task](/en/building-schedule/tasks/index.md#root-summary-task), you can see the totals for the entire project at a glance — how much has been spent, how much effort has gone in, and how much is left to go. Make sure the root summary task is visible: check **Show root summary task** in the **View** menu or the **Options** dialog.

## Showing Actual and Remaining Columns

Actual and remaining columns are not visible by default. To add them to the task list, open the **Options** dialog (**Task Columns** tab) and enable the columns you need. You can also right-click a column header in the task grid for quick access to the column settings.

### Duration

- **Actual Duration** — The amount of working time spent on a task so far. Calculated as the task's duration multiplied by its % Complete.
- **Remaining Duration** — The working time still needed to finish the task: Duration − Actual Duration.

For example, a 10-day task at 40% complete has an Actual Duration of 4 days and a Remaining Duration of 6 days.

### Work

- **Actual Work** — The total effort (in hours) that resources have spent on a task. When **Updating task status updates resource status** is enabled in the project settings (the default), Actual Work is updated proportionally when you change % Complete.
- **Remaining Work** — The effort still required to complete the task: Work − Actual Work.

### Cost

- **Actual Cost** — The costs incurred so far: the sum of accrued fixed costs and accrued resource costs. How costs accrue depends on each resource's **Cost Accrual** setting:
  - **Start** — The entire cost is recognized when Actual Start is set.
  - **Prorated** — Cost is recognized proportionally based on actual work progress.
  - **End** — Cost is recognized only when the task reaches 100% complete.
- **Remaining Cost** — The budget still needed to finish the task: Total Cost − Actual Cost.

### Dates

- **Actual Start** — The date when work actually began. Automatically set to the task's scheduled start date when % Complete goes above 0%.
- **Actual Finish** — The date when work actually completed. Automatically set to the task's scheduled finish date when % Complete reaches 100%.

### Overtime

- **Actual Overtime Work** — Overtime hours already worked on the task.
- **Remaining Overtime Work** — Overtime hours still expected.
- **Actual Overtime Cost** — Overtime costs already incurred.
- **Remaining Overtime Cost** — Overtime costs still expected.

## How Actuals Are Calculated

All actual and remaining fields maintain the relationship:

> **Total = Actual + Remaining**

When you change one value, Ingantt updates the others to keep them consistent. The most common workflow is to update **% Complete**, which automatically cascades to all actual and remaining fields:

1. **Actual Duration** and **Remaining Duration** are recalculated from the new percent.
2. **Actual Work** and **Remaining Work** are updated (if the project setting is enabled).
3. **Actual Start** and **Actual Finish** are set based on progress.
4. **Actual Cost** and **Remaining Cost** are recalculated based on the accrual method.

For summary tasks, **Actual Work**, **Remaining Work**, **Actual Cost**, and **Remaining Cost** are rolled up (summed) from all child tasks. **Actual Start** is the earliest actual start among children, and **Actual Finish** is the latest actual finish.

## Task Columns

Beyond actuals and remaining values, Ingantt supports a wide range of task columns — scheduling data, critical path information, cost, work, earned value metrics, baselines, custom fields, and outline codes. All columns can be turned on or off and rearranged using the **Options** dialog (**Task Columns** tab). You can also right-click a column header in the task grid to quickly access the column settings.
