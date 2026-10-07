# WBS Codes

Every task has a **WBS** code — its address in the outline. Out of the box it is the plain outline number: `1`, `1.1`, `1.2`, `1.2.1`. Show it by turning on the **WBS** column in the task table.

A **WBS code mask** replaces those outline numbers with a structured code of your own design, so tasks come out as `PROJ-A-01` or `1.A.001` instead of `1.1.1`. Organizations with a numbering standard — a contract, a cost-code scheme, a client's reporting format — use this to make Ingantt's codes match it.

Open **Project → WBS Code Definition** to set one up.

## WBS Codes and Outline Codes Are Different

- A **WBS code** is structural. There is exactly one per task and it is derived from where the task sits in the outline. It renumbers itself when you move tasks around.
- An **[outline code](/en/adjusting-schedule/custom-fields/index.md)** is a tag. You define a lookup list — department, phase, cost centre — and assign values to tasks independently of the hierarchy. A task can carry several, from several outline codes.

## Defining the Mask

The dialog has three parts.

### Project Code Prefix

Fixed text put in front of every code in the project. With the prefix `PROJ`, codes come out as `PROJ.1.1` or `PROJ-A-01` depending on your separators. Leave it empty for no prefix.

### Code Mask

One row per outline level, added with **Add Level**. Each row sets:

| Field | What it does |
|-------|--------------|
| **Level** | The outline depth this row applies to. Level 1 is top-level tasks, level 2 their children, and so on. |
| **Sequence** | The characters used at this level: **Numbers** (1, 2, 3), **Uppercase Letters** (A, B, C … Z, AA), **Lowercase Letters** (a, b, c … z, aa), or **Characters**. |
| **Length** | Maximum characters at this level. Leave it empty — it shows *Any* — for no limit. |
| **Separator** | The character between this level and the next, such as `.` or `-`. |

Two things are worth knowing about how the fields behave:

- **Length pads numbers with leading zeros.** A length of `3` on a Numbers level turns the ninth task into `009`. It does not pad letter levels.
- **Characters** behaves the same as Numbers for codes Ingantt generates. It exists for compatibility with Microsoft Project, where it means a level you type yourself.

You do not have to define every level. **Levels deeper than your last mask row fall back to a number with a `.` separator**, so a three-row mask on a five-deep plan still produces a complete code.

### Options

**Generate WBS code for new task** and **Verify uniqueness of new WBS codes** are stored with the project and preserved through a Microsoft Project round trip. In Ingantt, a mask with at least one level is applied to every task automatically, and codes are unique by construction because they follow the outline.

## What Happens When You Save the Mask

Ingantt renumbers the whole project immediately. Codes are rebuilt from the outline every time the structure changes — when you add, delete, indent, outdent, or move a task — so they always describe where the task is now.

That is worth saying plainly: **a WBS code is not a permanent identifier for a task.** Move a task and its code changes. If you need a label that follows a task around, use an outline code or a [custom text field](/en/adjusting-schedule/custom-fields/index.md) instead.

## Import and Export

The mask is part of the Microsoft Project format and survives a round trip. A project imported with a mask keeps it, exports with it, and its task codes match what Microsoft Project produced.
