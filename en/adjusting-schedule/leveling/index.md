# Resource Leveling

It's easy to accidentally assign more work than a person can handle in a day. Leveling automatically shifts tasks so no one is overloaded, though it may extend your project's finish date.

## Overallocated Resources

A work resource can be **overallocated**, meaning it has more work assigned than it can complete based on its calendar and availability. For example, if your project has two tasks, each with a duration of one day and no [dependency](/en/building-schedule/dependencies/index.md#predecessors-and-dependencies) between them, both assigned to the same work resource, the resource is overallocated. The resource has to do two days of work in one calendar day. To resolve this, simply link the two tasks with a dependency.

If a task has overallocated resources assigned, Ingantt shows a special icon for it in the list of tasks.

If a resource is overallocated, Ingantt shows a special icon for it in the **Resources** view and the **Resource Usage** view.

Additionally, Ingantt counts such tasks and resources and shows the numbers in the navigation drawer.

## Auto-Leveling

Dependencies between tasks control their position on the timeline. In larger projects, it's easy to miss a dependency — resulting in multiple tasks assigned to the same work resource being scheduled at the same time. The resource becomes overallocated, and Ingantt notifies you with special icons in the task and resource lists.

You can resolve overallocation manually by setting dependencies or constraints to move some tasks so that work is not done simultaneously.

An alternative way to resolve overallocation is auto-leveling. If you choose to **Auto-level resources** in the **Project** menu, Ingantt automatically shifts some tasks further on the timeline to prevent resource overallocation. You can clear these automatic adjustments by choosing **Clear leveling** in the **Project** menu.

The auto-level command offers three scope options:

- **All tasks** — Levels all tasks in the project
- **Selected tasks** — Levels only the currently selected tasks
- **Selected resources** — Levels only the overallocation conflicts for the selected resources (available in Resources and Resource Usage views)

### How Auto-Leveling Works

When you run **Auto-level resources**, Ingantt resolves overallocations by **delaying or splitting tasks**. It does not reassign resources or change assignment units.

The algorithm identifies days where a resource has more assigned work than its capacity allows, then decides which competing tasks to delay. Each task is scored based on several factors — tasks with higher scores are protected from delay:

| Factor | Effect |
|--------|--------|
| **Dependencies** | Tasks that are predecessors to other tasks are protected |
| **Slack** | Critical or near-critical tasks (less slack) are protected |
| **Priority** | Tasks with a higher Priority value are protected |
| **Constraints** | Tasks with scheduling constraints are protected |
| **Start Date** | Earlier tasks are somewhat protected |
| **Duration** | Longer tasks are somewhat protected |

The task with the lowest score is delayed to resolve each conflict. The process repeats until all overallocations are resolved or no further delays can be applied.

> Auto-leveling may extend the project's finish date. It resolves as many overallocations as possible, but some may remain if constraints prevent further delays.

### Leveling Options

Configure leveling behavior in the **Leveling Options** dialog, accessible from the **Project** menu:

- **Leveling order** — Controls how tasks are prioritized: ID Only (ascending ID), Standard (multi-factor scoring), or Priority Standard (priority first, then standard factors; the default)
- **Overallocation basis** — Controls detection granularity: minute, hour, day, week, or month. The minute and hour settings detect conflicts even when daily totals are within capacity but tasks overlap within a day.
- **Adjust individual assignments** — When enabled and a task has multiple resource assignments, only the overallocated resource's assignment is delayed instead of the entire task
- **Create splits in remaining work** — When enabled, the leveling algorithm can split work around conflicts instead of delaying entire tasks
- **Level only within available slack** — Restricts leveling delays to not exceed a task's total slack, preventing project finish date extension
- **Leveling range** — Restricts leveling to tasks within a specific date window

### Exempt from Leveling

The following tasks and resources are never affected by auto-leveling:

- Tasks with [Priority](#priority) set to **1000**
- Tasks with **Can Level** set to **false** (on the **Leveling** tab of the Task Properties dialog)
- Tasks with a **Must start on** or **Must finish on** [constraint](/en/building-schedule/constraints/index.md#constraints)
- [Summary tasks](/en/building-schedule/tasks/index.md#summary-tasks)
- Milestones with zero duration
- Fully complete tasks (100%)
- Resources with **Can Level** set to **false** in the Resource Properties dialog
- Resources with **Proposed** [booking type](/en/building-schedule/resources/index.md#booking-type) (unless the leveling option to include proposed resources is enabled)

### Re-Leveling and Clearing

Each time you run **Auto-level resources**, any previous leveling is automatically cleared first. Leveling always starts from a clean, unleveled schedule to prevent delays from stacking.

If you modify the schedule after leveling (add tasks, change dependencies, etc.), the existing leveling delays are preserved but may no longer resolve all overallocations. Run **Auto-level resources** again to re-level the updated schedule.

To remove all leveling delays and return to the original CPM-calculated schedule, choose **Clear leveling** from the **Project** menu.

### Leveling Gantt

After you run auto-leveling, a **Leveling Gantt** toggle button appears in the Gantt chart area. When enabled, it draws green bars at the pre-leveled positions — where tasks were before leveling — while the standard task bars remain at their current leveled positions. This lets you compare the original schedule with the leveled schedule to see how much each task was delayed.

The toggle is only visible when the project has leveling data and is automatically hidden when you clear leveling.

## Priority

The **Priority** field is available on the **Leveling** tab of the **Task Properties** dialog. It accepts an integer value from 0 to 1000, with a default of 500.

Priority is used by the [auto-leveling](#auto-leveling) algorithm to decide which tasks to delay when resolving resource overallocations. Tasks with a higher priority are less likely to be delayed:

- **0** — Lowest priority, most likely to be delayed
- **500** — Default priority
- **1000** — "Do Not Level" — the task is never delayed by auto-leveling

> Set Priority to **1000** for tasks that must never be moved by auto-leveling, such as tasks tied to external deadlines or fixed commitments.
