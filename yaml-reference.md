## YAML Format Reference

### Top-level structure

```yaml
project:        # required
calendars:      # optional
resources:      # optional
tasks:          # required
```

Unknown top-level keys are rejected with a "did you mean?" suggestion. Unknown nested keys also fail validation.

### Project

```yaml
project:
  name: "Product Launch"          # required
  startDate: 2026-05-01           # required when direction is fromStart
  finishDate: 2026-08-31          # required when direction is fromFinish
  direction: fromStart            # fromStart | fromFinish (default: fromStart)
  defaultCalendar: project        # name of declared calendar (default: "standard")
  hoursPerDay: 8                  # default: 8
  daysPerWeek: 5                  # default: 5
  daysPerMonth: 20                # default: 20 (integer only)
  statusDate: 2026-06-15          # progress-tracking status date
  defaultFixedCostAccrual: prorated  # start | end | prorated
  defaultStartTime: 08:00         # HH:mm; applied when a task date is entered without a time. default: 08:00
  defaultFinishTime: 17:00        # HH:mm; applied when a task finish date is entered without a time. default: 17:00
  durationFormat: days            # minutes | hours | days | weeks | months. Display unit for task durations. default: days
  workFormat: hours               # minutes | hours | days | weeks | months. Display unit for work values. default: hours
  weekStartDay: sunday            # monday..sunday. First day of the week in timeline/calendar UI. default: sunday

  currency:
    code: USD                     # ISO 4217 code; stored for XML round-trip, not used in calculations
    digits: 2                     # decimal places for cost display; non-negative integer
    symbol: "$"                   # display symbol. default: "$"
    symbolPosition: before        # before | after | beforeWithSpace | afterWithSpace. default: before

  defaultTaskType: fixedUnits     # fixedUnits | fixedDuration | fixedWork. Type applied to newly-created tasks. default: unset
  newTaskStartDate: projectStart  # projectStart | currentDate. Default start date for newly-created tasks. default: unset
  defaultTaskEVMethod: percentComplete  # percentComplete | physicalPercentComplete. EV method for new tasks. default: percentComplete
  baselineForEarnedValue: 0       # 0-10; which baseline slot EV calculations compare against. default: 0
  autoAddNewResourcesAndTasks: true  # auto-add new resources to the pool. Nullable tri-state; omit to leave unset. MS Project round-trip field.
  taskUpdatesResource: true       # task changes update linked resource data. default: true
  editableActualCosts: false      # actual costs are user-editable instead of derived from rates × work. default: false
  spreadPercentComplete: true     # % complete spreads across task duration (and to children). default: true
  spreadActualCost: true          # actual cost spreads across task duration (and to children). default: true

  # Update-project / critical-path options (booleans unless noted)
  honorConstraintDates: true      # default: true. When true, SNLT/FNLT constraints take precedence over dependencies (dependencies can't produce negative slack by overriding constraints).
  splitsInProgressTasks: false    # When true, rescheduling uncompleted work splits in-progress (0 < %complete < 100) tasks at the status date.
  moveCompletedEndsBack: false    # Allow completed portions to shift backward during update-project.
  moveRemainingStartsBack: false  # Allow remaining-work starts to shift backward during update-project.
  moveRemainingStartsForward: false  # Allow remaining-work starts to shift forward from the status date.
  moveCompletedEndsForward: false # Allow completed portions to shift forward during update-project.
  criticalSlackLimit: 0           # integer days ≥ 0. Tasks with total slack ≤ this value are flagged as critical.
  multipleCriticalPaths: false    # When true, every independent chain with zero slack is critical; when false, only the overall critical chain is.

  leveling:
    order: standard               # idOnly | standard | priorityStandard
    overallocationBasis: day      # minute | hour | day | week | month
    clearBeforeLeveling: true
    canAdjustIndividualAssignments: false
    canCreateSplits: true
    onlyWithinAvailableSlack: false
    levelManuallyScheduledTasks: false
    levelProposedBookingType: false
    rangeFrom: 2026-05-01
    rangeTo: 2026-08-31

  baselineSaveDates:              # one per used baseline slot; both fields required
    - number: 0                   # 0-10
      date: 2026-05-01

  boardColumns:                   # kanban columns; if omitted, board view renders all tasks in one default area. Column names must be unique (case-sensitive).
    - name: "In Progress"
      percentCompleteMapping: 50  # 0-100; display-only label hint, not automatic task routing
      description: "Active work"

  customFields:                   # extended attributes
    - id: risk_level
      scope: task                 # task | resource
      type: text                  # text | number | flag | date | start | finish | cost | duration
      name: "Risk Level"
      # `date` / `start` / `finish` all hold a date value; the type name controls which MS Project
      # column group the field serializes into when exported to XML. Functionally equivalent for YAML.
```

Rules:
- Exactly one of `startDate`/`finishDate` must be present, matching `direction`.
- `fromStart` schedules forward from start; `fromFinish` schedules backward from finish.
- Dates are `YYYY-MM-DD`. Exception: `task.stop`, `task.resume`, and `splits[].start/finish` also accept `YYYY-MM-DDTHH:MM:SS` — datetime components are interpreted as local calendar wall-clock time (same frame as `calendars[].workHours`).
- Cost amounts (`costRate.amount`, `fixedCost`, `baseline.cost`, etc.) are raw numbers. The `currency` block controls display only; calculations always use the raw numeric values.
- `currency` block: every sub-key optional. Writer omits the whole block when `symbol == "$"`, `symbolPosition == before`, and `code`/`digits` are unset. `code` and `digits` round-trip as `null` when omitted.
- `defaultTaskType` / `newTaskStartDate` are tri-state (null | enum value) — omit the key to leave the project property unset; the writer only emits them when explicitly set.
- `autoAddNewResourcesAndTasks` is tri-state (null | true | false). Omit to leave unset; explicit `true`/`false` round-trips to MS Project XML.
- `durationFormat` / `workFormat` accept the 5 base period units only (`percentage` is not valid here).
- `leveling.order`: `idOnly` ranks tasks by their position in the list only; `standard` uses duration/start/float/priority (MS Project default); `priorityStandard` makes `task.priority` dominant and uses standard factors only as tiebreakers.

### Calendars

Calendars define working hours and exceptions. If omitted, the project uses the built-in `standard` preset (Mon-Fri, 08:00-12:00 + 13:00-17:00). The name `standard` is always resolvable as a calendar reference even when not explicitly declared in `calendars:`.

```yaml
calendars:
  - name: project                 # required; unique
    preset: standard              # standard | 24h | nightShift
    baseCalendar: "standard"      # inherit from another calendar by name
    workHours:                    # overrides preset for specific weekdays
      monday:    [{ from: "09:00", to: "12:00" }, { from: "13:00", to: "17:00" }]
      friday:    [{ from: "09:00", to: "12:00" }]   # half day
      saturday:  []               # empty = non-working
      sunday:    []
    exceptions:
      - from: 2026-07-01          # multi-day range (to defaults to from)
        to: 2026-07-14
        type: nonWorking
        name: "Summer shutdown"
      - from: 2026-12-24          # reduced-hours working day
        type: working
        name: "Half day"
        workHours: [{ from: "09:00", to: "13:00" }]
```

Rules:
- `workHours` inside an exception is required when `type: working`, forbidden when `type: nonWorking`.
- Precedence: `baseCalendar` (clone parent weekday hours, inherit exceptions at runtime) → `preset` (used only if no `baseCalendar`) → `workHours` (per-weekday override, applied last).
- Exception lookup order at runtime: specific-date exceptions (local, then inherited) → work weeks → weekday hours. An inherited exception on a given date wins over a child's `workHours` for that same date.
- Weekday keys: `monday` through `sunday`.
- Times are `HH:MM` in 24-hour format.

### Resources

```yaml
resources:
  - name: Alex                    # required; unique
    type: work                    # required; work | material | cost
    maxUnits: 100                 # percentage of full-time (100 = full-time, 300 = team of 3)
    calendar: project             # inherits the calendar's exceptions
    costRate: { amount: 75, per: hour }
    overtimeRate: { amount: 100, per: hour }  # work resources only
    costPerUse: 500
    accrueAt: prorated            # start | end | prorated
    notes: "Senior engineer"
    generic: false                # skill-based placeholder
    budget: false                 # budget-only tracking resource
    canLevel: true
    bookingType: committed        # committed | proposed
    exceptions:                   # personal calendar exceptions
      - from: 2026-05-01
        to: 2026-05-14
        type: nonWorking
        name: "Approved vacation"

    availability:                 # time-varying max units (percentage, same scale as maxUnits); dates outside any period fall back to maxUnits. If periods overlap, the first matching entry in list order wins.
      - from: 2026-05-01
        to: 2026-06-30
        units: 100
      - from: 2026-07-01
        to: 2026-07-14
        units: 0                  # unavailable

    rateTables:                   # up to 5 tables (A-E) per resource; tables A-E are independent (B may be declared without A)
      - table: A
        entries:                  # per-entry omitted `costPerUse` defaults to 0 (it does NOT fall back to the resource's top-level costPerUse)
          - from: 2026-01-01
            to: 2026-06-30
            standardRate: { amount: 75, per: hour }
            overtimeRate: { amount: 100, per: hour }
            costPerUse: 0
          - from: 2026-07-01
            to: 2026-12-31
            standardRate: { amount: 80, per: hour }

    baselines:                    # one per used slot (0-10)
      - number: 0
        work: 160h
        cost: 12000
        budgetWork: 160h
        budgetCost: 12000

    extendedAttributes:           # custom field values
      - field: risk_level
        value: "low"

  - name: "Aluminum sheet"
    type: material
    materialLabel: kg             # material resources only
    costRate: { amount: 12, per: hour }  # `per` is required syntactically but ignored for materials — cost = amount × quantity
    accrueAt: start

  - name: "Travel budget"
    type: cost
    costPerUse: 500
```

Rules:
- `maxUnits` is a **percentage**. 100 = one full-time person.
- `maxUnits` forbidden on cost and material resources.
- `overtimeRate` valid only on work resources.
- `materialLabel` valid only on material resources.
- `costRate.per`: `minute` | `hour` | `day` | `week` | `month` | `year`.
- Work resource `maxUnits` default: `100`.
- Resources are referenced by `name` (the unique lookup key). There is no separate id field for resources.
- A resource referencing a `calendar` inherits its exceptions at runtime. Local `exceptions` are checked first for a given date; if none match, the inherited calendar's exceptions are consulted. Local exceptions add to (not replace) the parent set.
- Use `rateTable` on individual assignments to pick a non-A table.
- Rate-table `entries` must be in chronological order with no overlaps. The `to` field is inclusive — `to: 2026-06-30` followed by `from: 2026-07-01` is valid (boundaries that touch don't overlap). Gaps between entries are allowed.

### Tasks

Tasks are a flat list. Hierarchy uses the `parent` field. Any task referenced as another's `parent` becomes a summary automatically.

```yaml
tasks:
  - id: design                    # required; unique
    name: "Design phase"          # required
    duration: 5d                  # required for leaf tasks; forbidden on summary tasks
    type: fixedUnits              # fixedUnits (default) | fixedDuration | fixedWork
    effortDriven: true            # default: false (forced true for fixedWork)
    constraint: snet              # default: asap
    constraintDate: 2026-05-10    # required for date-bearing constraints (mso/mfo/snet/snlt/fnet/fnlt)
    deadline: 2026-05-20          # soft deadline
    calendar: project             # task calendar override
    ignoreResourceCalendars: false
    parent: phase1                # id of parent (makes phase1 a summary)
    percentComplete: 50           # integer 0-100

    actualStart: 2026-05-04       # optional; `percentComplete > 0` without explicit `actualStart` defaults it to the scheduled start. Setting `percentComplete: 0` (from any nonzero) clears both actualStart and actualFinish.
    actualFinish: 2026-05-08       # optional; setting `percentComplete: 100` alone auto-fills actualFinish from the scheduled finish. Dropping below 100 (but above 0) clears only actualFinish.

    # Split tasks — use `splits` for multi-segment, OR `stop`+`resume` for a single gap (not both).
    # Example A — multi-segment:
    splits:
      - start: 2026-05-04
        finish: 2026-05-06
      - start: 2026-05-08T09:00:00
        finish: 2026-05-12T17:00:00
    # Example B — single gap (omit `splits` above if using these):
    # stop: 2026-05-06
    # resume: 2026-05-08

    manual: false                 # true bypasses CPM for this task
    manualAnchor: startAndDuration  # startAndDuration | startAndFinish | durationAndFinish
    manualDurationText: "about 5 days"  # display-only labels; require manual: true
    manualStartText: "early May"
    manualFinishText: "mid May"

    fixedCost: 5000
    fixedCostAccrual: start       # start | prorated | end

    priority: 500                 # integer 0-1000
    canLevel: true                # task-level; leveling also requires resource.canLevel = true (AND)
    levelAssignments: true
    levelingCanSplit: true
    levelingDelay: 0

    baselines:                    # one per used slot (0-10)
      - number: 0
        interim: false            # true = interim plan (captures start/finish only, ignores work/cost/duration)
        start: 2026-05-04
        finish: 2026-05-08
        duration: 5d
        estimatedDuration: false
        work: 40h
        cost: 3000
        fixedCost: 0
        fixedCostAccrual: prorated
        budgetCost: 3000
        budgetWork: 40h

    color: "#RRGGBB"              # leading `#` required, exactly 6 hex digits (case-insensitive). #RGB shorthand and #RRGGBBAA alpha are rejected. Accepted on any task (leaf, summary, milestone).
    notes: "Design notes"
    active: true                  # default: true
    milestone: false              # true marks a non-zero-duration task as a milestone
    boardStatus: "In Progress"    # exact case-sensitive match of a project.boardColumns[].name. Unmatched strings are silently accepted and stored as-is (no validation error).
    hyperlink:
      text: "Spec doc"
      address: "https://example.com/spec"
      subAddress: "section-2"

    # Recurring tasks — `occurrenceDuration` and `recurring` must be set together.
    # `duration` is FORBIDDEN on a recurring task — use `occurrenceDuration` instead. The template's span is derived from the pattern. Set `occurrenceDuration: 0` (or `0d`/`0h`/`0min`) to make each occurrence a milestone. If set, `recurring.calendar` overrides `task.calendar` for occurrence placement.
    occurrenceDuration: 2h
    recurring:
      type: weekly
      interval: 1
      daysOfWeek: [monday]
      startDate: 2026-05-04
      endRule: endAfterOccurrences
      occurrences: 10

    extendedAttributes:
      - field: risk_level
        value: "medium"

    dependsOn:
      - task: kickoff
        type: fs
    assignments:
      - resource: Alex
        units: 100
```

Key rules:
- **Leaf vs. summary:** Leaf tasks must have `duration`. Summary tasks must NOT have `duration` (rollup is computed). The moment another task declares `parent: X`, task `X` becomes a summary — remove any `duration` from it or validation fails. `assignments` and `dependsOn` ARE allowed on summary tasks.
- **Milestone:** default is `false`. Leaf task with `duration: 0` (or `0d`) is always a milestone — `milestone: false` is ignored. `milestone: true` on a non-zero-duration task renders it as a diamond at its start date but the task still consumes its full duration for scheduling and dependencies. `milestone: true` is rejected on summary tasks.
- **Task order = outline order** (position in YAML list).
- **Constraint values:** `asap` (As Soon As Possible — default), `alap` (As Late As Possible), `mso` (Must Start On), `mfo` (Must Finish On), `snet` (Start No Earlier Than), `snlt` (Start No Later Than), `fnet` (Finish No Earlier Than), `fnlt` (Finish No Later Than). `constraintDate` required for all except `asap`/`alap`.
- **Splits:** bare `YYYY-MM-DD` snaps to working-time boundaries; `YYYY-MM-DDTHH:MM:SS` preserves sub-day precision. Use either `splits` or `stop`+`resume` — don't set both on the same task. `stop` is the finish of the work segment before the gap; `resume` is the start of the next working segment.
- **Manual scheduling:** when `manual: true`, `manualAnchor` picks which two of start/duration/finish are authoritative; the third is derived. Default anchor when omitted: `startAndDuration`.
- **`ignoreResourceCalendars`:** when `true`, the task's calendar replaces resource calendars for this task's working time. When `false` (default), task and resource calendars are intersected.
- **`priority` default:** `500`.
- **`id` accepts any non-empty string** (no character or length restrictions). Same for `name` and `customFields.id`.
- **Task-level `work` is not an input field** — setting it at task level is rejected as an excluded key. Work is derived from `duration × assignment units`.
- **Summary tasks:** declarable `assignments` and `dependsOn` are allowed. Summary-level assignments contribute their own cost (computed as `summary-duration × units × rate`, added alongside the rollup from children) but are not scheduled or leveled — put work on leaf tasks.
- **Parent references must be declared earlier:** a child's `parent` must refer to a task that appears above it in the `tasks` list. Forward references are rejected.
- **Summary baselines:** accepted in YAML but overwritten at save-time by the child rollup (earliest start, latest finish, summed work/cost). Setting them on a summary has no persistent effect — put baselines on leaf tasks.

### Dependencies

Dependencies go on the successor task via `dependsOn`.

```yaml
dependsOn:
  - task: design                  # Finish-to-Start, no lag
    type: fs
  - task: procure                 # Start-to-Start with 2-day lag
    type: ss
    lag: 2d
  - task: review                  # Finish-to-Finish with 1-day lead
    type: ff
    lag: "-1d"
  - task: build                   # Start-to-Start at 25% progress of predecessor
    type: ss
    lag: "25%"
```

Rules:
- `task` references a leaf task's `id`.
- `type`: `fs` | `ss` | `ff` | `sf`. Default when omitted: `fs`.
- `lag` is optional (omit for zero). When present, always requires a unit suffix (`2d`, not `2`).
- Negative lag is a lead. Quote any lag starting with `-` (YAML syntax requires it): `lag: "-1d"`. Percentage lag (`"25%"`) is applied to the **predecessor's** duration and is valid only on lag, not duration.
- Self-dependencies and cycles are invalid.

### Assignments

The value key depends on resource type.

```yaml
assignments:
  - resource: Alex                # work resource — use units
    units: 100
    rateTable: A                  # A-E; picks cost rate table
    contour: flat                 # see Work Contours
  - resource: "Aluminum sheet"    # material resource — use quantity
    quantity: 25
  - resource: "Travel budget"     # cost resource — `cost` is the total one-time charge for this assignment
    cost: 1500

  - resource: Mei                 # custom work distribution
    units: 100
    contourPoints:
      - { offset: 0, duration: 2d, work: 8h }
      - { offset: 2d, duration: 3d, work: 24h }

  - resource: Alex                # assignment baselines
    units: 100
    baselines:
      - number: 0
        start: 2026-05-04
        finish: 2026-05-08
        work: 40h
        cost: 3000
        budgetCost: 3000
        budgetWork: 40h
```

Rules:
- **Work** resources use `units` (percentage, `100` = one full-time person). Default when omitted: `100`. No upper bound — values above the resource's `maxUnits` cause overallocation but are accepted. `quantity`/`cost` forbidden.
- **Material** resources use `quantity` — total amount consumed by the assignment, in units of the resource's `materialLabel` (e.g., `25` with `materialLabel: kg` means 25kg total). `units`/`cost` forbidden.
- **Cost** resources use `cost`. `units`/`quantity` forbidden.
- `rateTable` picks which rate table (A-E) applies. Omitting it is always valid. `rateTable: A` is accepted even if no `rateTables` are declared on the resource (falls back to the resource's top-level `costRate`). `rateTable: B`–`E` require that table to be declared.
- `contourPoints` require `contour: contoured`. Setting `contourPoints` with any other `contour` value is rejected by the validator.
- The same resource may appear only once in a task's `assignments` — duplicates are rejected.

### Work contours

Without a contour, work is distributed evenly (`flat`). Valid `contour` values (MS Project 10-segment shapes, normalized):

| Value | Shape |
|-------|-------|
| `flat` | Uniform across the task |
| `backLoaded` | Increases toward the end |
| `frontLoaded` | Heaviest at the start, tapers off |
| `doublePeak` | Two peaks with a dip in the middle |
| `earlyPeak` | Peaks early, then tapers |
| `latePeak` | Builds to a peak near the end |
| `bell` | Bell curve centered in duration |
| `turtle` | Flatter, wider bell |
| `contoured` | Custom distribution — requires `contourPoints` to define the shape |

For fully custom shapes, use `contourPoints` (see Assignments). Each point has these required fields:
- `offset` — working-time offset from assignment start
- `duration` — segment length
- `work` — total work in this segment (duration literal)

Segments should cover the full task duration contiguously. When `contour: contoured` with `contourPoints`, the points are the source of truth — the scheduler uses them verbatim and does not scale them to match `duration × units`. A `work` sum that differs from the nominal assignment work silently under- or over-counts effort rather than being rescaled.

### Recurring tasks

A recurring task generates a sequence of occurrences. Individual occurrences are not written to YAML.

```yaml
- id: standup
  name: "Daily standup"
  occurrenceDuration: 30min
  recurring:
    type: daily                 # daily | weekly | monthlyByDay | monthlyByPosition | yearlyByDay | yearlyByPosition
    interval: 1                 # every N periods (≥ 1); default: 1
    startDate: 2026-05-04
    endRule: endAfterOccurrences  # noEndDate (default) | endByDate | endAfterOccurrences
    occurrences: 30             # required if endRule: endAfterOccurrences
    endDate: 2026-06-15         # required if endRule: endByDate
    workingDaysOnly: true
    nonWorkingDayStrategy: rescheduleToNext  # skip = drop the occurrence entirely; rescheduleToNext = shift to the next working day
    calendar: project

    # Pattern-specific fields
    daysOfWeek: [monday, wednesday, friday]  # weekly
    monthDay: 15                # monthlyByDay | yearlyByDay
    month: 7                    # 1-12 (yearly patterns)
    monthPosition: first        # first | second | third | fourth | last (*ByPosition)
    monthItem: monday           # day | weekday | weekendDay | monday | tuesday | wednesday | thursday | friday | saturday | sunday (*ByPosition)
```

Pattern requirements:
- `daily` — no extra fields.
- `weekly` — `daysOfWeek`.
- `monthlyByDay` — `monthDay`.
- `monthlyByPosition` — `monthPosition` + `monthItem`.
- `yearlyByDay` — `month` + `monthDay`.
- `yearlyByPosition` — `month` + `monthPosition` + `monthItem`.

### Baselines

Up to 11 slots (`number: 0` through `10`). All fields except `number` are optional. Duplicate `number` values within a single `baselines[]` array are rejected. Baseline `work` / `cost` values are stored snapshots — independent of the live task's derived work, so a baseline can preserve a historical estimate even if the current schedule differs. `baselineSaveDates[].number` and task/resource/assignment `baselines[].number` are independent — a task can use slot N without a corresponding project-level save-date for that slot.

| Block                             | Accepted fields                                                                                                                                   |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `project.baselineSaveDates[]`     | `number`, `date`                                                                                                                                  |
| `task.baselines[]`                | `number`, `interim`, `start`, `finish`, `duration`, `estimatedDuration`, `work`, `cost`, `fixedCost`, `fixedCostAccrual`, `budgetCost`, `budgetWork` |
| `resource.baselines[]`            | `number`, `work`, `cost`, `budgetCost`, `budgetWork`                                                                                              |
| `assignment.baselines[]`          | `number`, `start`, `finish`, `work`, `cost`, `budgetCost`, `budgetWork`                                                                          |

### Custom fields

Declare at the project level, then set values via `extendedAttributes` on tasks or resources. The `field` key references the custom field `id` under `project.customFields`. The same `id` may be declared once per scope (once with `scope: task`, once with `scope: resource`). `type: number` and `type: cost` accept the same raw numeric value; they differ only in XML export grouping.

Value encoding per `type`:

| Type                     | `value` form                                      |
|--------------------------|---------------------------------------------------|
| `text`                   | string (`"high"`)                                 |
| `number` / `cost`        | raw number (`42`, `3.5`)                          |
| `flag`                   | strict YAML boolean (`true` / `false`). `yes`/`no`/`on`/`off`/`1`/`0` are rejected. |
| `date` / `start` / `finish` | `YYYY-MM-DD` string                            |
| `duration`               | duration literal string (`5d`, `40h`) or bare `0` |

### Duration literals

Used for `task.duration`, `dependsOn.lag`, `task.levelingDelay`, `task.occurrenceDuration`, contour fields, and baseline `work`/`budgetWork`. All duration fields accept both calendar-aware (`min`, `h`, `d`, `w`, `mo`) and elapsed (`emin`, `eh`, `ed`, `ew`, `emo`) suffixes unless a field's rule says otherwise.

| Suffix | Meaning          |
|--------|------------------|
| `min`  | minutes          |
| `h`    | hours            |
| `d`    | days             |
| `w`    | weeks            |
| `mo`   | months           |
| `emin` | elapsed minutes  |
| `eh`   | elapsed hours    |
| `ed`   | elapsed days     |
| `ew`   | elapsed weeks    |
| `emo`  | elapsed months   |

- Non-elapsed durations respect the calendar (skip weekends/holidays). Elapsed durations span real calendar time.
- Decimals allowed (`2.5d`, `0.5w`).
- Trailing `?` marks an estimated duration (valid only on `task.duration`): `5d?`.
- Unit suffix is optional for zero: both bare `0` and `0d`/`0h`/`0min`/… are accepted (all units collapse at zero). Non-zero values still require a suffix — `5` is rejected, `5d` is not. Writers emit the bare `0` form canonically.
- Single-unit only: `1d 4h` is rejected (no whitespace allowed in a literal). Use `1.5d` or expand to the desired single-unit form.
- `lag` also accepts quoted percentage: `"25%"`. Not valid on duration.

### Date formats

| Format                   | Used for                                                   |
|--------------------------|------------------------------------------------------------|
| `YYYY-MM-DD`             | all date fields                                            |
| `YYYY-MM-DDTHH:MM:SS`    | `task.stop`, `task.resume`, `splits[].start/finish` only   |

### Enums

Enums shown inline with their field definitions are not repeated here. Remaining:

| Field                             | Values                                                              |
|-----------------------------------|---------------------------------------------------------------------|
| `assignment.contour`              | `flat`, `backLoaded`, `frontLoaded`, `doublePeak`, `earlyPeak`, `latePeak`, `bell`, `turtle`, `contoured` |
| `rateTable.table`                 | `A`, `B`, `C`, `D`, `E`                                             |
| weekday keys / `daysOfWeek` / `weekStartDay` | `monday` through `sunday`                                |
| `durationFormat` / `workFormat`   | `minutes`, `hours`, `days`, `weeks`, `months`                       |
| `currency.symbolPosition`         | `before`, `after`, `beforeWithSpace`, `afterWithSpace`              |
| `defaultTaskType`                 | `fixedUnits`, `fixedDuration`, `fixedWork`                          |
| `newTaskStartDate`                | `projectStart`, `currentDate`                                       |
| `defaultTaskEVMethod`             | `percentComplete`, `physicalPercentComplete`                        |
