# Baselines

Save a snapshot of your schedule before work begins, then compare it against the current state to see where the project has drifted.

A baseline captures the start date, finish date, duration, work, and cost of every task at a point in time.

## Setting a Baseline

Set a baseline from the **Project** menu using the **Set baseline** submenu:

- You can set a baseline for all tasks or only selected tasks.
- Ingantt supports up to 11 baselines.

## Viewing Baselines

Once a baseline has been saved, you can view it in the Gantt chart by toggling baseline visibility in the **Baselines** dialog. Baseline bars appear as thinner bars below the current task bars, using a distinct color per baseline number.

To manage baselines, use the **Baselines** item in the **Project** menu. The **Baselines** dialog lets you:

- View all saved baselines
- Remove baselines you no longer need
- Designate which baseline is used for [Earned Value](/en/tracking/earned-value/index.md#earned-value-management) calculations

## Baseline and Variance Columns

You can add baseline columns (**Start**, **Finish**, **Duration**, **Work**, **Cost**) and variance columns (**Start Variance**, **Finish Variance**, etc.) to the task list via the **Options** dialog. Variance columns show the difference between the current schedule and the [Earned Value baseline](/en/tracking/earned-value/index.md#earned-value-baseline).

## Interim Plans

Interim plans store lightweight schedule snapshots (**Start** and **Finish** dates only) for quick comparison without the overhead of full baselines. Ingantt supports up to 10 interim plans (`Interim Plan 1` through `Interim Plan 10`).

Set and clear interim plans from the **Interim Plans** item in the **Project** menu. You can display interim plan dates as columns in the task list.
