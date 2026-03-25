# Setting Up Costs

Set fixed costs on tasks and rates on resources. Ingantt uses them together with the schedule to calculate the cost of each task and the entire project.

## Task Fixed Cost

You can set a cost for the task regardless of its resources by filling in the **Fixed Cost** field on the **Cost and EV** tab of the **Task Properties** dialog. For example, use this when someone has already provided a total cost estimate for the task, or when the task has an additional cost beyond its resource costs.

> If you need to assign the same fixed cost to multiple tasks, consider creating a cost resource and assigning it to those tasks. If the cost changes in the future, you only need to update it in one place.

## Work Resource Cost

**Work** resources are the only type that has a calendar, so their cost is specified per hour, per day, per week, or per month (see [Hours per Day, Days per Week, Days per Month](/en/setting-up-project/project/index.md#hours-per-day-days-per-week-days-per-month)).

For example, when you assign a work resource with a **Standard Rate** of $100 per hour to a task with a 5-hour **Duration**, $500 is added to the **Cost** of the task.

Work resources also support an **Overtime Rate** for work beyond regular calendar hours. The total cost is calculated as:

> **Cost = Regular Work × Standard Rate + Overtime Work × Overtime Rate + Cost Per Use**

When a work resource is assigned to a task, you can specify the **Units** value as a number different from the default. This impacts cost calculations. For example, if **Units** is 50%, the calculated cost for the resource in the task is half of what it would be with 100% Units.

## Material Resource Cost

For **material** resources, the cost is specified per unit based on how you define the unit. It can be a weight measurement (e.g., pound, kilogram, ton), length or volume measurement (e.g., foot, meter, mile, gallon, liter), or any other measurement (e.g., container, box, piece, square foot). You can set a **Material Label** in the **Resource Properties** dialog to describe the unit.

Material resources support two consumption modes:
- **Fixed** (default) — A total quantity regardless of task duration (e.g., 5 tons of cement)
- **Variable** — A rate per time unit that scales with task duration (e.g., 10 liters per day of fuel)

For example, if fuel is used in your project, you can add a "fuel" material resource and specify the cost per gallon in the **Resource Properties** dialog. Then, when assigning the resource to a task, you specify the number of gallons as **Units**, and Ingantt adds the calculated cost of the fuel to the **Cost** of the task.

## Cost Resource

A **cost** resource is a fixed expense you might want to assign to multiple tasks. Cost resources support per-assignment cost values — the same cost resource can have different dollar amounts on different task assignments (e.g., "Travel" = $800 on Task A and $1,200 on Task B).

Use this type for fixed expenses not normally specified in measurements, like installation costs. If multiple tasks have the same fixed cost due to the same reason, create a cost resource and assign it to all these tasks instead of filling in the **Fixed Cost** field for each task separately.

## Rate Tables

Each work and material resource supports up to 5 cost rate tables (A through E), each with multiple rows that take effect at different dates. This allows you to model rate changes over time or maintain different rate sets for different types of work.

Rate tables are configured on the **Costs** tab of the **Resource Properties** dialog. When assigning a resource to a task, you can select which rate table to use in the **Edit Resource Assignment** dialog.

## Cost Per Use

Resources support a **Cost Per Use** field — a flat fee charged each time the resource is assigned to a task, regardless of how much work is performed. For work resources, **Cost Per Use** is multiplied by the assignment units (e.g., 200% units means the cost per use is charged twice). **Cost Per Use** always accrues at the start of the task.

## Cost Accrual

The **Cost Accrual** setting controls when costs are recognized as actual costs as work progresses:

| Accrual | When costs are recognized |
|---------|--------------------------|
| **Start** | Full cost as soon as any progress is made (% Complete > 0%) |
| **Prorated** | Proportional to percent complete (e.g., 50% complete = 50% of cost) |
| **End** | Full cost only when the task reaches 100% complete |

Resources have a **Cost Accrual** setting on the **Costs** tab of the **Resource Properties** dialog. Tasks have a **Fixed Cost Accrual** setting on the **Cost and EV** tab of the **Task Properties** dialog. The project has a **Default Fixed Cost Accrual** setting on the **Other** tab of the **Project Properties** dialog.
