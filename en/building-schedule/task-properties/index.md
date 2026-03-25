# Task Properties

Each task has properties that control how it is scheduled, how costs are calculated, and how it appears in the Gantt chart. Set these in the **Task Properties** dialog.

## Duration

While planning your project, you enter durations as estimates, meaning the duration is a reasonable guess of how much time a task will take for all resources involved.

Don't confuse **Duration** with **Work**. For example, if three people are working on your task, but they complete it in one hour, you set the **Duration** of the task to one hour. If these three people are assigned to the task, Ingantt calculates the **Work** property for you as three hours.

Duration can be changed using the **Duration** field in the **Task Properties** dialog.

When you're not yet confident with your estimate for the duration, you can mark it as an **Estimate** in the **Task Properties** dialog. This causes the duration to always display a question mark ("**?**"). Checking or unchecking this flag does not affect scheduling.

If at least one subtask of a summary task has **Estimate** checked, the summary task's duration is also marked as **Estimate** and thus also shows "**?**".

Duration can be set in Hours, Days, Weeks, or Months. By default, "1 Day" means 8 hours, "1 Week" means 5 days (40 hours), and "1 Month" means 20 days. These defaults can be changed on the **Duration** tab of the **Project Properties** dialog.

When you change resource assignments, work, or duration, one of these is recalculated according to the task's [Type](#type-and-effort-driven).

## Work

Once a task has a work resource assigned (such as a person performing the task), the **Work** property of the task becomes greater than 0. It shows the time all resources will spend working on the task. For example, if a task with a **Duration** of 5 hours has 2 assigned resources working on it, the task's **Work** is equal to 10 hours.

Work can be changed using the **Work** field in the **Task Properties** dialog.

Just like Duration, Work can be specified in Hours, Days, Weeks, or Months using definitions on the **Duration** tab of the **Project Properties** dialog. The default display format for work can be changed on the **Time** tab.

When you change resource assignments, work, or duration, one of these is recalculated according to the task's [Type](#type-and-effort-driven).

## Deadline

Sometimes you need to ensure a task is completed by a specific day, typically called a deadline.

The deadline of a task can be specified using the **Deadline** field in the **Task Properties** dialog.

Deadlines are for your reference only and do not affect scheduling.

Deadlines are shown in the Gantt chart as special icons.

> If your schedule shows that a task finishes later than its specified deadline, Ingantt shows an icon in the task list and counts such tasks in the navigation drawer.

![Deadline](images/tasks/deadline.png)

> You can set a deadline for the entire project by setting the deadline for the root summary task. Just make sure the root summary task is set to visible in the **Options** dialog.

## Milestone

Any task can be marked as a milestone by checking the **Milestone** checkbox in the **Task Properties** dialog. This doesn't change its duration or affect scheduling, but the task is shown in the Gantt chart as an icon.

![Milestone](images/tasks/milestone.png)

If you specify 0 as the **Duration** of a task, the task is automatically marked as a **Milestone** once you save the change.

## Type and Effort Driven

Work resource assignments (or units of assigned work resources), work, and duration depend on each other. When you change one of these, the others must be recalculated accordingly. The task's **Type** (with the help of the **Effort Driven** flag) defines which of the remaining two properties stays unchanged, so that only one of them is recalculated.

For example, you can set the **Type** to **Fixed units** (the default), in which case when you change Duration, Work is automatically recalculated.

| Type               | Description                                             |
|--------------------|---------------------------------------------------------|
| **Fixed units**    | When you change Duration: Work is recalculated.         |
|                    | When you change Work: Duration is recalculated.         |
|                    | When you change Units:                                  |
|                    | - If **Effort Driven** is set: Duration is recalculated. |
|                    | - If **Effort Driven** is not set: Work is recalculated. |
| **Fixed duration** | When you change Duration: Work is recalculated.         |
|                    | When you change Work: Units are recalculated.           |
|                    | When you change Units: Work is recalculated.            |
| **Fixed work**     | When you change Duration: Units are recalculated.       |
|                    | When you change Work: Duration is recalculated.         |
|                    | When you change Units: Duration is recalculated.        |

In other words, the **Type** allows you to freeze one of the three properties, while the **Effort Driven** flag defines whether Work should stay unchanged out of the remaining two.

> **Type** and **Effort Driven** settings are not available for [summary tasks](/en/building-schedule/tasks/index.md#summary-tasks), which are always Fixed duration and not effort driven.

## Notes

You can add any text to your task by filling in the **Notes** field on the **Notes** tab of the **Task Properties** dialog. Use it for task descriptions, contact information, ideas, or any other text data.

If a task has the **Notes** field filled in, a special icon is shown for the task in the task list. On Windows, macOS, and Web, hovering the mouse over the icon shows the note. On mobile, open the **Task Properties** dialog to view the full note.

## Hyperlink

You can attach a URL to your task using the **Hyperlink** field on the **Notes** tab of the **Task Properties** dialog. Tasks with a hyperlink display a link icon in the task list. Clicking the link icon opens the URL in your browser.

## Hide Bar and Rollup

On the **Visual** tab of the **Task Properties** dialog:

- **Hide bar** — Hides the task's bar in the Gantt chart while keeping the row visible in the task list. The invisible bar area still responds to clicks and context menus.
- **Rollup** — Displays the subtask's bar on its parent summary task's row in the Gantt chart. This provides a condensed view when summary tasks are collapsed.

These can also be toggled from the **Edit > Display** submenu or the right-click context menu.
