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
| **Contoured** | Your own per-day distribution. Set automatically when you edit work in a usage view; it cannot be chosen from the dropdown. |

Work contours affect how work is distributed across time periods and are preserved when opening and saving project files.

### The Contoured Contour

**Contoured** is the custom contour, and it behaves differently from the other eight. You cannot pick it from the dropdown on an assignment that does not already have it — the option is disabled. You get it by **editing work directly in a [Resource Usage or Task Usage](/en/views/resource-views/index.md) cell**: the moment you type a per-day work value, that assignment's contour becomes *Contoured* and your typed distribution is what it uses.

Two consequences are worth knowing:

- **Switching away from Contoured discards the hand-entered distribution.** Pick any of the other eight contours and the per-day values you typed are cleared. They are not kept and restored if you switch back.
- **Contoured work round-trips through the Microsoft Project format.** Import reads the per-day timephased work into the assignment, and export writes it back out. A plan that arrives from Microsoft Project with a hand-edited contour keeps it.

## Assignment Delay

Each resource assignment on a task has a **Delay** property that offsets when the resource begins work relative to the task start date. For example, if a task starts on Monday and a resource has a 2-day delay, that resource begins work on Wednesday.

The delay is set in the **Edit Resource Assignment** dialog and only applies to work resource assignments. It can be used to stagger resource start times on a task.

## Overtime Work

For work resources, you can designate a portion of an assignment's total work as overtime. Overtime work is a subset of total work, not additive: **Work = Regular Work + Overtime Work**.

The cost impact of overtime is covered in [Setting Up Costs](/en/planning-costs/setting-up-costs/index.md#work-resource-cost).

For Fixed Units and Fixed Work tasks, entering overtime work reduces the task duration because duration is based on regular work only.

Set overtime work in the **Edit Resource Assignment** dialog. Three optional columns are available in the task table: **Overtime Work**, **Overtime Cost**, and **Regular Work**.
