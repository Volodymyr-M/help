# Tracking Progress

Once work begins, update **% Complete** on each task to track how actual progress compares to the plan. Use **Update Project** to set progress in bulk. As progress is recorded, Ingantt automatically calculates [actuals](/en/tracking/actuals/index.md) — actual and remaining values for duration, work, cost, and dates.

## % Complete

Once your project is running, you need to track its progress. If you keep **% Complete** up to date for each task, you can see the overall **% Complete** of the project in its root summary task.

Use the **% Complete** field in the **Task Properties** dialog to set the % complete of a particular task. Tasks that are 100% complete display a green checkmark icon in the task list.

When you update % Complete:

- Setting it above 0% sets the task's **Actual Start** to the task's scheduled start date.
- Setting it to 100% sets the task's **Actual Finish** to the task's scheduled finish date.
- **Actual Duration** and **Remaining Duration** are calculated automatically based on the percent complete.
- If **Updating task status updates resource status** is enabled in the project settings (the default), **Actual Work** and **Remaining Work** are also updated proportionally.

A summary task's **% Complete** is calculated as a duration-weighted average of all its descendant non-summary tasks.

> You can also track progress using the [Update Project](#update-project) command to set % Complete for multiple tasks at once based on a through-date.

## Update Project

The **Update Project** command provides bulk progress-tracking operations, accessible from the **Project** menu.

### Update Work as Complete

Mark tasks as complete through a specified date:

- **Proportional (0%–100%)** — Calculates percent complete based on how much of each task's working duration falls before the through-date.
- **All-or-nothing (0% or 100%)** — Sets tasks to either 0% or 100% based on whether they finish by the through-date.

### Reschedule Uncompleted Work

Pushes uncompleted work to start after a specified date:

- Tasks that have not started receive a **Start No Earlier Than** constraint.
- In-progress tasks are split if **Split in-progress tasks** is enabled in the project scheduling options.
- Completed tasks are not modified.
