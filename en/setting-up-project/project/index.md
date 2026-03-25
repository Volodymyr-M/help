# Project Properties

Configure your project's start date, working hours, and scheduling rules. These settings shape how every task in your project is calculated and displayed.

## Project Name

Set your project name in the **Name** field on the **General** tab of the **Project Properties** dialog. This name is also used by your project's [root summary task](/en/building-schedule/tasks/index.md#root-summary-task).

On web and Windows, clicking the project name in the header also opens the **Project Properties** dialog.

## Start Date and Planning Direction

By default, your project is planned from the Start Date, which you can set in the **Project Start Date** field of the **Project Properties** dialog.

To plan your project from the Finish Date instead, switch to **Plan from Finish date** in the **Project Properties** dialog and set the **Project Finish Date**.

The **General** tab of the **Project Properties** dialog shows both the Start Date and Finish Date. When scheduling from start, the Start Date is editable and the Finish Date shows the calculated value. When scheduling from finish, the Finish Date is editable and the Start Date shows the calculated value.

Keep in mind:

- For projects planned from the Start Date, the default [constraint](/en/building-schedule/constraints/index.md#constraints) for newly created tasks is **As soon as possible**.
- For projects planned from the Finish Date, the default constraint for newly created tasks is **As late as possible**.

When switching between planning from Start and Finish, constraints of existing tasks are not changed except for [summary tasks](/en/building-schedule/tasks/index.md#summary-tasks), including the [root summary task](/en/building-schedule/tasks/index.md#root-summary-task).

For summary tasks:

- The **As soon as possible** constraint is replaced with **As late as possible** when switching from planning from Start to Finish.
- The **As late as possible** constraint is replaced with **As soon as possible** when switching from planning from Finish to Start.

## First Day of the Week

Depending on your country, a week may start on Sunday or Monday. You can update the **First Day of Week** field on the **Regional** tab of the **Project Properties** dialog to change the default setting for your project.

Changing this property updates the user interface, including the Gantt chart on some zoom levels, but does not affect scheduling. To adjust the schedule accordingly, update your [Calendars](/en/setting-up-project/calendars/index.md).

## Hours per Day, Days per Week, Days per Month

In Ingantt, you can specify [Duration](/en/building-schedule/task-properties/index.md#duration), [Work](/en/building-schedule/task-properties/index.md#work), or [Lag](/en/building-schedule/dependencies/index.md#lag-and-lead-time) in Hours, Days, Weeks, and Months.

For example, setting a task's duration to 2 Days means 16 hours using the default settings.

By default:

- 1 Day equals 8 hours.
- 1 Week equals 5 days (40 hours).
- 1 Month equals 20 days (160 hours).

You can change these default settings on the **Duration** tab of the **Project Properties** dialog.

> Most projects should use the default values. Only change these settings if your project has a specific requirement for different conversions.

## Duration and Work Display Format

By default, durations are displayed in days and work values in hours. You can change the display format for both on the **Time** tab of the **Project Properties** dialog. Available units are minutes, hours, days, weeks, and months.

When you change either format, all existing values are updated to display in the new unit.

## Default Start and Finish Time

The default start time (8:00 AM) and finish time (5:00 PM) control when work begins and ends each day. You can change these on the **Time** tab of the **Project Properties** dialog.

## Scheduling Options

The **Scheduling** tab of the **Project Properties** dialog contains options that control how tasks are scheduled:

- **Honor constraint dates** — When enabled, semi-flexible constraints (such as Start No Later Than) take priority over dependencies, potentially creating negative slack. When disabled (the default), dependencies always take priority.
- **Split in-progress tasks** — When enabled (the default), the scheduler can automatically split tasks that have out-of-sequence progress.
- **Move completed/remaining parts** — Four options that control how completed and remaining work portions are repositioned relative to the status date. These help keep your schedule current by moving completed work backward to the status date or pushing remaining work forward.
