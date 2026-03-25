# Gantt Chart

The Gantt chart is your project's timeline. See leveling adjustments, progress lines, and how the schedule has changed since you baselined it.

## Available Views

Ingantt provides multiple views for working with your project, accessible from the navigation drawer or the **View** menu. All views are fully functional — perform any action available for tasks in any view.

**Task views:**

- **Tasks** — task list and Gantt chart
- **Tracking Gantt**
- **[Task Board](/en/views/task-views/index.md#task-board)**
- **[Network Diagram](/en/views/task-views/index.md#network-diagram)**
- **[Calendar View](/en/views/task-views/index.md#calendar-view)**
- **[Timeline](/en/views/task-views/index.md#timeline)**

**Resource views:**

- **[Resource Usage](/en/views/resource-views/index.md#resource-usage)**
- **[Task Usage](/en/views/resource-views/index.md#task-usage)**
- **[Team Planner](/en/views/resource-views/index.md#team-planner)**
- **[Resource Graph](/en/views/resource-views/index.md#resource-graph)**

## Tasks View

The **Tasks** view is the main view combining a task list and the Gantt chart (split view). You can configure which panels to show via the **View > Panels in Tasks** submenu: Task List and Gantt Chart can each be toggled independently.

## Task Inspector

The **Task Inspector** is a side panel that shows details of the selected task, including scheduling factors (what drives the task's dates), general properties, resources, predecessors, cost, and more. Toggle the Task Inspector from the toolbar.

The **Scheduling Factors** section at the top of the Inspector shows what is driving the task's scheduled dates: driving predecessors (shown in bold with a "Driving" badge), non-driving predecessors (with their relative float), constraints, leveling delays, calendars, and slack values. Critical tasks display a "Critical" badge.

## Leveling Gantt

When [auto-leveling](/en/adjusting-schedule/leveling/index.md#auto-leveling) has been applied to your project, a **Leveling Gantt** toggle button appears in the Gantt chart area.

When enabled, the Gantt chart shows **green bars** at each task's pre-leveled position (where the task was before auto-leveling). The standard task bars remain at their current leveled positions. This allows you to visually compare the original schedule with the leveled schedule and see how much each task was delayed.

When the toggle is off, only the standard task bars are shown.

> The Leveling Gantt toggle is only visible when leveling data exists. It is automatically hidden when you clear leveling. If you open a project file that already contains leveling data, the toggle is available but starts in the off position.

## Progress Lines

When enabled, the Gantt chart displays a **progress line** — a zigzag line that visually indicates whether tasks are behind or ahead of schedule relative to the status date. Tasks behind schedule cause the line to peak left; tasks ahead cause it to peak right; on-track tasks keep the line straight.

Toggle progress lines from the floating toolbar button on the Gantt chart or the **View** menu. The progress line is also included in PDF/print output when enabled.
