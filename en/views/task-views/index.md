# Task Views

Beyond the Gantt chart, view tasks on a Kanban board, monthly calendar, network diagram, or timeline. Each view highlights different aspects of your schedule.

## Task Board

The **Task Board** view displays tasks as cards organized into columns representing workflow stages (Kanban-style).

New projects start with three default columns: "Not Started" (0%), "In Progress" (50%), and "Complete" (100%). Each column has a % Complete mapping — when you drag a card to a column, the task's percent complete is automatically updated.

You can add, edit, rename, reorder, and delete columns. Each column has an **Add Task** button at the bottom for creating tasks directly in that stage.

Only non-summary, active tasks with "Show on board" enabled appear on the board. The "Show on board" setting is available on the **Visual** tab of the **Task Properties** dialog.

> Drag task cards between columns to change their status. When a task's % Complete changes elsewhere (via dialog, inline edit, or Update Project), the card automatically moves to the matching column.

## Network Diagram

The **Network Diagram** view displays tasks as rectangular nodes arranged in a left-to-right flowchart layout. Tasks with no predecessors appear in the leftmost column, and each subsequent task appears after all its predecessors.

- Normal tasks show ID, duration, start/finish dates, and resources
- Summary tasks show ID, duration, start/finish dates, and percent complete
- Milestones show ID and start date
- Critical path tasks have red headers and borders
- Progress is indicated by diagonal line overlays: one line for in-progress tasks, crossed lines for completed tasks

You can collapse/expand summary tasks, click to select, double-click to edit, and right-click for the context menu. Dependency arrows are drawn between nodes for all four link types.

## Calendar View

The **Calendar View** displays a monthly calendar grid with tasks shown as horizontal bars spanning their scheduled dates.

- Switch between **Month** and **Week** views using the toggle in the header
- Enable **Work week** mode to show only weekdays (5-day view)
- Navigate with Previous/Next buttons or jump to today
- Non-working days are shown with a distinct background
- Milestones appear as diamond icons
- Double-click an empty day to create a new 1-day task on that date

Tasks that span across a week boundary wrap to the next row. When multiple tasks overlap on the same day, they stack vertically.

## Timeline

The **Timeline** is a collapsible pane that appears above the Gantt chart, showing a simplified overview of user-selected tasks on a horizontal time axis.

To add a task to the timeline, right-click it and choose **Display on Timeline**, or check the option on the **Visual** tab of the Task Properties dialog.

Tasks on the timeline can be displayed as bars or callouts (text labels with vertical connector lines). You can switch between modes by dragging a task bar above or below the horizontal separator line in the timeline pane. The timeline also shows a today marker and a viewport overlay that you can drag to scroll the Gantt chart.

Toggle the Timeline from the **View** menu.

## Tracking Gantt

The **Tracking Gantt** view is similar to the standard Tasks view but with critical path highlighting always enabled and Baseline 0 shown if it has been saved. When you navigate away from the Tracking Gantt, the critical path and baseline visibility settings are restored to their previous state.

Use the Tracking Gantt for monitoring project progress against the baseline plan.
