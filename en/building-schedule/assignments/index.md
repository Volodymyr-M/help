# Assignments

Control how resources are allocated to tasks — who works on what, how much of their time, and how the effort is distributed. Adjust units, work contours, and overtime to match how your team actually works.

## Resource Assignments and Units

Resources can be assigned to a task on the **Resources** tab of the **Task Properties** dialog.

To assign a resource, check the checkbox in the row with the resource. To unassign a resource, uncheck the checkbox.

Assignments of work or material resources have **Units**, shown in the corresponding column. Click the **Edit** button to change the default **Units** value for the assignment.

By default, work resources are assigned with units matching the resource's [Max Units](/en/building-schedule/resources/index.md#max-units) (100% for a full-time resource). This means the resource will dedicate all of its available calendar time to the task. You can change the value to any number.

By default, material resources are assigned with 1 unit. This means 1 unit of that material will be used when completing the task. The unit represents whatever you defined for the material (box, gallon, ton, etc.). You can change the default value and set any number of units.

## Work Contours

When a work resource is assigned to a task, the effort (work) is distributed across the task's duration according to a **work contour**. By default, work is spread evenly (Flat contour), but Ingantt supports several contour patterns that change how effort is distributed over time:

| Contour | Description |
|---------|-------------|
| **Flat** | Uniform effort across the entire duration (default) |
| **Back Loaded** | Effort increases toward the end of the task |
| **Front Loaded** | Effort is heaviest at the beginning and decreases |
| **Double Peak** | Two peaks of intensity during the task |
| **Early Peak** | Peaks early, then tapers off |
| **Late Peak** | Builds to a peak near the end |
| **Bell** | Bell curve — peaks in the middle |
| **Turtle** | Flatter bell curve — smoother distribution |

Work contours affect how work is distributed across time periods and are preserved when opening and saving project files.

## Assignment Delay

Each resource assignment on a task has a **Delay** property that offsets when the resource begins work relative to the task start date. For example, if a task starts on Monday and a resource has a 2-day delay, that resource begins work on Wednesday.

The delay is set in the **Edit Resource Assignment** dialog and only applies to work resource assignments. It can be used to stagger resource start times on a task.

## Overtime Work

For work resources, you can designate a portion of an assignment's total work as overtime. Overtime work is a subset of total work, not additive: **Work = Regular Work + Overtime Work**.

Task cost is calculated using the regular and overtime portions separately:
**Cost = Regular Work × Standard Rate + Overtime Work × Overtime Rate + Cost Per Use**

For Fixed Units and Fixed Work tasks, entering overtime work reduces the task duration because duration is based on regular work only.

Set overtime work in the **Edit Resource Assignment** dialog. Three optional columns are available in the task table: **Overtime Work**, **Overtime Cost**, and **Regular Work**.
