# Calendars

Holidays, vacations, half-days, night shifts — your schedule needs to reflect when work actually happens. Set up calendars so Ingantt skips non-working time and gives you realistic dates.

Calendars define days and times when work can be done. Calendars use two types of data:

- **Weekdays**: Working time set for each day of the week — defining the typical, routine schedule.
- **Exceptions**: Dates where work is not done or is done at different times than the weekday schedule defines.

## Project Calendar

A project has a **Calendar** associated with it as specified in the **Project Properties** dialog. This calendar defines how tasks that are not assigned to work resources are scheduled. Days off such as weekends are also shown in the Gantt chart based on this calendar.

## Resource Calendar

Each [work resource](/en/building-schedule/resources/index.md#resource-type) has a calendar associated with it as specified in the **Base Calendar** field of the **Resource Properties** dialog. Once the work resource is [assigned](/en/building-schedule/assignments/index.md#resource-assignments-and-units) to a task, its calendar affects the scheduling of the task.

When multiple work resources are assigned to a task, their calendars are **intersected** - meaning work is only scheduled during times when **all** assigned resources are available. For example, if Resource A works Mon-Wed and Resource B works Wed-Fri, a task assigned to both will only be scheduled on Wednesdays.

> If multiple resources share a similar work schedule, create a single calendar and assign it to all of them. You can still specify exceptions for each resource separately in **Resource Properties** — for example, vacations or adjusted work periods on specific dates.

## Task Calendar

Each task has a **Calendar** property in the **Task Properties** dialog, set to **NONE** by default. When set to **NONE**:

- If a task is not assigned to any work resources, the task is scheduled according to the project's calendar.
- If a task is assigned to work resources, the task is scheduled according to their calendars.

If the task's **Calendar** property is set to a calendar instead of **NONE**:

- If a task is not assigned to any work resources, the task is scheduled according to the specified calendar.
- If a task is assigned to work resources, the task is scheduled according to the **intersection** of the task calendar and the resource calendars — work is only scheduled during times that are working in both the task calendar and all resource calendars. To use the task calendar alone, ignoring resource calendars entirely, check the **Ignore resource calendars** flag.

## Predefined Calendars

Ingantt has 3 predefined calendars, one of which (**Standard**) is assigned to the project by default.

| Calendar | Description                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| **Standard**     | Work is done each day Monday to Friday, 8 AM to 5 PM with a 1-hour (12 PM to 1 PM) break.       |
| **Night Shift**  | Work is done Monday night through Saturday morning, 11 PM to 8 AM with a 1-hour (3 AM to 4 AM) break. |
| **24 Hours**     | Work is done 24 hours a day, every day.                                                         |

You can edit any of the predefined calendars using the **Calendar Properties** dialog or create your own calendars based on them using the **Add Calendar** dialog.

## Work Weeks

Work weeks let you define date-range-specific changes to the weekly schedule. For example, you might have a period where everyone works 4-hour days instead of the standard 8, or a period where Saturday becomes a working day.

Work weeks are configured on the **Work Weeks** tab of the **Calendar Properties** dialog. Each work week has a name, a start and end date, and per-weekday working time definitions.

> Calendar exceptions take priority over work weeks, which take priority over the default weekday schedule.

## Calendar Exceptions

Calendar exceptions are dates where work differs from the regular weekday schedule — including days off.

Calendar exceptions can be specified:

- In the **Resource Properties** dialog for a particular resource.
- In the **Calendar Properties** for a particular calendar to make projects, resources, or tasks using this calendar have this exception.

For example, if you want to configure a vacation for a person, add it as an exception for this resource. If you want to configure a holiday for everyone, add it as an exception to a calendar that everyone uses.

When adding or editing calendar exceptions, you specify working time periods for the exception. If you don't specify any, the exception has no working time, meaning it defines a day off.

Each exception can be given a descriptive **Name** (such as "Christmas Holiday" or "Office Closed") which is shown in the exceptions list.

### Recurring Exceptions

Calendar exceptions can be set to recur on a pattern rather than just a single date. Available recurrence patterns include:

- **Daily** — Every N days or every N weekdays
- **Weekly** — Every N weeks on specified weekdays
- **Monthly** — By day of month or by position (e.g., second Tuesday)
- **Yearly** — By date or by position (e.g., last Friday of November)

Recurring exceptions have an end condition: no end, end by date, or end after N occurrences.

## Empty and Partial Calendars

If you do not add any working time to a calendar, it is empty and cannot be used for scheduling. Such calendars are marked with a warning icon in the list of calendars, and the number of such calendars is shown in the navigation drawer.

However, there are situations when your calendar is not empty but still doesn't have enough working time to schedule a particular task. These situations can only be detected when scheduling is done.

If you assign an empty calendar — or one without enough working time — to a project, resource, or task and scheduling cannot proceed, an error is shown and the last action is reverted.
