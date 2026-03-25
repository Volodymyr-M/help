# Resource Views

See workload distribution across your team. Usage views show who is doing what and when, the Team Planner lets you drag to reassign, and the Resource Graph reveals capacity at a glance.

## Resource Usage

The **Resource Usage** view allows you to see all resource assignments and the amount of [Work](/en/building-schedule/tasks/index.md#work) that each work resource performs during each period on the timeline.

Similar to the Gantt chart, you can zoom the timeline in or out to see a more or less detailed view.

If a resource has to perform more work than the calendars allow for the given time period, the corresponding **Work** is highlighted in red.

In the Resource Usage view, you can double-click assignment-level work cells to edit the work distribution directly. When you edit a work cell, the assignment's work contour automatically changes to "Contoured" and the custom per-day work data is saved.

## Task Usage

The **Task Usage** view is the inverse of Resource Usage — it shows a task-centric view of work distribution. Each task appears as a top-level row with its resource assignments indented below it.

The left panel shows task and assignment details, while the right panel shows work values distributed across time periods. Task-level work values are shown in bold. Overallocated assignment work values are highlighted in red.

## Team Planner

The **Team Planner** view is a resource-centric scheduling view where each row represents a work resource. Task bars are positioned on each resource's row along a shared timescale.

Key features:

- **Drag horizontally** to reschedule a task — the task receives a Start No Earlier Than constraint at the new position
- **Drag vertically** to reassign a task to a different resource
- **Drag diagonally** to reschedule and reassign in one operation
- Drag to or from the **Unassigned Tasks** section to add or remove resource assignments
- Overallocated resources are shown with red text in the left panel
- Tasks that are 100% complete cannot be dragged

## Resource Graph

The **Resource Graph** view shows a per-resource histogram of workload allocation over time. It displays one work resource at a time with vertical bars for each time period. Navigate between resources using the arrow buttons in the left panel.

Seven graph types are available:

| Graph Type | Description |
|------------|-------------|
| **Peak Units** | Percentage of resource capacity used per period (default) |
| **Work** | Hours of work per period |
| **Overallocation** | Only the excess hours beyond capacity |
| **Percent Allocation** | Same as Peak Units with percentage display |
| **Remaining Availability** | Unused capacity in hours |
| **Work Availability** | Total calendar capacity in hours |
| **Unit Availability** | Effective max units percentage |

Blue bars represent work within capacity; red bars represent the overallocated portion exceeding capacity.
