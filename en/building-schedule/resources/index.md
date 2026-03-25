# Resources

Add the people, equipment, and materials that will do the work. Once resources are assigned to tasks, Ingantt can calculate workload, detect overallocation, and factor in each person's availability.

## Resource Type

Ingantt supports three types of resources:

| Resource Type | Description                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------|
| **Work**      | Someone or something performing your task. This can be a person, team, contractor company, or equipment. |
| **Material**  | Items used to complete your task, such as materials, ingredients, or components.                 |
| **Cost**      | Costs that can be applied to multiple tasks, such as delivery costs, deployment costs, or any fixed costs. |

Only work resources, when assigned to tasks, affect scheduling.

All types of resources affect cost calculations if the resource's **Cost** field is filled in.

## Max Units

Work resources have a **Max Units** property (default 100%) that represents the resource's available capacity. For example:

- **100%** — A full-time resource
- **50%** — A part-time resource (available half the time)
- **300%** — A team of 3 full-time members represented as a single resource

Max Units is used by [overallocation detection](/en/adjusting-schedule/leveling/index.md#overallocated-resources) and [auto-leveling](/en/adjusting-schedule/leveling/index.md#auto-leveling) to determine whether a resource has more work than they can handle. When assigning a work resource to a task, the default assignment units match the resource's Max Units.

## Resource Availability Periods

A work resource's availability can change over time. For example, a team member might be full-time for the first three months and then switch to part-time.

On the **Availability** tab of the **Resource Properties** dialog, you can define multiple availability periods, each with a date range and an availability percentage. For dates that fall within a defined period, the period's units override the resource's base Max Units for capacity calculations.

## Generic Resources

A resource can be marked as **Generic** using the checkbox in the **Resource Properties** dialog. Generic resources are placeholders that represent a role (e.g., "Developer", "Designer") rather than a specific person. They are useful during early planning when specific team members are not yet identified.

Generic resources are indicated by a badge icon in the resource list. The generic flag is purely informational — it does not affect scheduling or cost calculations.

## Booking Type

Each resource has a **Booking Type** that can be set to either **Committed** (default) or **Proposed** in the **Resource Properties** dialog.

- **Committed** — The resource is firmly booked for the project.
- **Proposed** — The resource is tentatively assigned for planning purposes.

By default, auto-leveling excludes proposed resources. You can include them by enabling "Level resources with the proposed booking type" in the [Leveling Options](/en/adjusting-schedule/leveling/index.md#leveling-options) dialog.
