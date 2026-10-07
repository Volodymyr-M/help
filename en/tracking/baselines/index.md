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

You can add baseline and variance columns to the task list via the **Options** dialog. There are **55 baseline columns** and **5 variance columns** in total.

### The 55 Baseline Columns

Ingantt stores **11 baselines**: the unnumbered **Baseline**, plus **Baseline 1** through **Baseline 10**. Each one exposes the same five task columns:

- Baseline Start
- Baseline Finish
- Baseline Duration
- Baseline Work
- Baseline Cost

11 baselines × 5 fields = **55 baseline columns**, all available from the column chooser in the task table. The unnumbered set is named plainly (*Baseline Start*); the numbered ones carry their number (*Baseline 3 Start*).

### The 5 Variance Columns

Variance columns are computed — current schedule minus baseline — and there are five:

- Start Variance
- Finish Variance
- Duration Variance
- Work Variance
- Cost Variance

There is one set of five, not one set per baseline. They compare the current schedule against **one** baseline — whichever is selected as the [Earned Value baseline](/en/tracking/earned-value/index.md#earned-value-baseline) in **Project → Earned Value Options**, which defaults to the unnumbered Baseline. Change that setting and every variance column recomputes against the baseline you picked. A task whose chosen baseline was never set shows an empty variance rather than a zero.

## Where Baselines Are Stored

Baselines are stored **inside the project file**, not in a separate file. Saving the project saves its baselines.

If you try to set a twelfth baseline, Ingantt tells you *All baseline slots are in use. Clear one in the Baselines dialog first.* Open **Project → Baselines** and clear one.

Baselines are not the same thing as [version history](/en/ui/version-history/index.md), which records the file itself over time. Use version history to go back to an earlier plan; use baselines to measure how far the current plan has drifted.

## Interim Plans

Interim plans store lightweight schedule snapshots (**Start** and **Finish** dates only) for quick comparison without the overhead of full baselines. Ingantt supports up to 10 interim plans (`Interim Plan 1` through `Interim Plan 10`).

Set and clear interim plans from the **Interim Plans** item in the **Project** menu. You can display interim plan dates as columns in the task list.
