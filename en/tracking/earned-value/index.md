# Earned Value

Earned Value Management (EVM) combines scope, schedule, and cost measurements to assess whether your project is on track and on budget. Set a status date and baseline, and Ingantt calculates the industry-standard EVM metrics.

## Status Date

The **Status Date** defines the date used for progress tracking and Earned Value calculations. When set, a green vertical line is displayed on the Gantt chart at that date.

When the status date is not set, the current date is used for calculations. You can set the status date in the **Earned Value Options** dialog, accessible from the **Project** menu.

## Earned Value Management

Ingantt supports Earned Value Management — a project management technique that integrates scope, schedule, and cost data to assess project performance.

### Setting Up Earned Value

1. Create a [baseline](/en/tracking/baselines/index.md#setting-a-baseline) to capture the planned schedule and costs.
2. Set the **Status Date** in the **Earned Value Options** dialog (accessible from the **Project** menu) or let it default to the current date.
3. Update task [% Complete](/en/tracking/progress/index.md#-complete) values as work progresses.

### Available EVM Metrics

The following EVM columns can be added to the task list via the **Options** dialog:

| Metric | Description |
|--------|-------------|
| **BCWS** | Budgeted Cost of Work Scheduled (Planned Value) |
| **BCWP** | Budgeted Cost of Work Performed (Earned Value) |
| **ACWP** | Actual Cost of Work Performed |
| **BAC** | Budget at Completion |
| **EAC** | Estimate at Completion |
| **VAC** | Variance at Completion |
| **SV** | Schedule Variance |
| **CV** | Cost Variance |
| **SPI** | Schedule Performance Index |
| **CPI** | Cost Performance Index |
| **TCPI** | To-Complete Performance Index |
| **SV%** | Schedule Variance percentage |
| **CV%** | Cost Variance percentage |

### Earned Value Method

Each task can use one of two methods for calculating BCWP (Earned Value):

- **% Complete** (default) — Uses the task's percent complete to calculate earned value.
- **Physical % Complete** — Uses a separately tracked physical percent complete value. Useful for deliverable-based progress measurement.

Set the method for individual tasks on the **Cost and EV** tab of the **Task Properties** dialog. Change the default method for new tasks in the **Earned Value Options** dialog.

### Earned Value Baseline

EVM calculations use a specific baseline. You can choose which baseline (`Baseline 0` through `Baseline 10`) is used for earned value in the **Earned Value Options** dialog. The default is `Baseline 0`.
