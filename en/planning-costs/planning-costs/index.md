# Understanding Costs

Assign costs to tasks and resources to see the total price of your project. The root summary task shows the grand total — compare it against budget resources to know if your project fits the approved budget.

## How Task Cost Is Calculated

Each task's cost is a combination of its own fixed cost and the costs of its assigned resources. Ingantt calculates the total cost of each task and displays it in the **Cost** column in the list of tasks.

*Task **Cost** = task **Fixed Cost** + costs of resources assigned to the task*

> If you don't see the **Cost** column in the list of tasks, make sure the **Cost Column** flag is checked on the **Task Columns** tab of the **Options** dialog.

## Summary Task Costs

In its **Cost** field, each [summary task](/en/building-schedule/tasks/index.md#summary-tasks) shows the total cost of all its subtasks.

However, just like a regular task, a summary task can have [assigned resources](/en/building-schedule/assignments/index.md#resource-assignments-and-units) and a **Fixed Cost**. These are added on top of the subtasks' total cost, increasing the summary task's **Cost**.

*Summary task **Cost** = total cost of all subtasks + summary task **Fixed Cost** + costs of resources assigned to the summary task*

Use the [root summary task](/en/building-schedule/tasks/index.md#root-summary-task) to view and manage the total cost of your entire project.

## Budget Resources

A resource can be marked as a **Budget** resource in the **Resource Properties** dialog. Budget resources represent overall allocated budget amounts at the project level and can only be assigned to the [root summary task](/en/building-schedule/tasks/index.md#root-summary-task).

Budget resources are excluded from:

- Scheduling
- Cost totals
- Overallocation detection
- Resource leveling

They provide top-down budget tracking that is separate from bottom-up cost calculations.

## Currency

If your project uses a currency different from the Ingantt default, you can change it on the **Regional** tab of the **Project Properties** dialog. Specify the currency as a symbol (e.g., €), abbreviation (EUR), or full name (euro).

On the same tab, you can also specify the **Currency Position** — before or after the value, with or without a space.

> When you change the currency, cost values are not recalculated.
