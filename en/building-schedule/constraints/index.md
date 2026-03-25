# Constraints

Some tasks must start or finish on specific dates — a delivery arrives on Tuesday, a permit expires Friday. Constraints let you lock dates where needed while keeping the rest of the schedule flexible.

## How Constraints Work

Together with task dependencies (predecessor links), a task's constraint defines how the task is scheduled.

Constraints are set on the **Advanced** tab of the **Task Properties** dialog. The default constraint is **As soon as possible**. This means that the task is set as close to the project's start date as possible with respect to dependencies with other tasks. In projects planned from the Finish date, the default is **As late as possible** instead.

There are two constraints that force the task to start or finish at the specified date regardless of dependencies. These constraints are called _inflexible constraints_ and are **Must start on** and **Must finish on**. Only use these constraints if you are certain they are necessary.

Other constraints (**Start no earlier than**, **Start no later than**, **Finish no earlier than**, and **Finish no later than**) are called _flexible_, as they respect task dependencies. If dependencies push the task beyond the constraint date, the dependency-driven date takes priority.

| Constraint                 | Description                                                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **As soon as possible**    | The task is scheduled as soon as the predecessors allow. If no predecessors are linked, the task starts at the beginning of the parent summary task. |
| **As late as possible**    | The task is scheduled as late as the predecessors allow. If no predecessors are linked, the task finishes at the end of the parent summary task.    |
| **Start no earlier than**  | If the task starts later than the specified date due to predecessors, nothing changes. Otherwise, the task is scheduled to start on the specified date. |
| **Start no later than**    | If predecessors push the task past the constraint date, the dependency-driven date takes priority. Otherwise, the task is scheduled to start by the specified date. |
| **Finish no earlier than** | If the task finishes later than the specified date due to predecessors, nothing changes. Otherwise, the task is scheduled to finish on the specified date.|
| **Finish no later than**   | If predecessors push the task past the constraint date, the dependency-driven date takes priority. Otherwise, the task is scheduled to finish by the specified date. |
| **Must start on**          | The task's start date is scheduled to be exactly as specified, regardless of predecessors.                                                   |
| **Must finish on**         | The task's finish date is scheduled to be exactly as specified, regardless of predecessors.                                                  |

Tasks with a flexible or inflexible constraint display a special icon in the task list.

> Keep most tasks set to **As soon as possible** and use flexible constraints only for tasks that must start or finish near a specific date.
