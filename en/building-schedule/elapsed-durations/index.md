# Elapsed Durations

An ordinary duration is measured in **working time**. A three-day task on a Monday-to-Friday, eight-hours-a-day calendar takes 24 working hours, and if it starts on Thursday it finishes on Monday — the weekend does not count.

An **elapsed** duration is measured in **clock time**. It counts continuously, 24 hours a day, 7 days a week, through weekends, holidays, and every non-working exception on the [calendar](/en/setting-up-project/calendars/index.md).

Use it for anything that does not care whether your team is at work: concrete curing, paint drying, a test soak, a regulatory waiting period, or shipping in transit.

## Entering an Elapsed Duration

Type the duration with an **`e`** before the unit:

| You type | You get |
|----------|---------|
| `3d` | 3 working days |
| `3ed` | 3 elapsed days — 72 clock hours |
| `2ew` | 2 elapsed weeks — 14 calendar days |
| `8eh` | 8 elapsed hours |

The units are `min`, `h`, `d`, `w`, and `m` — minutes, hours, days, weeks, months — and every one of them takes the `e`. The abbreviations are translated, so in a non-English interface use that language's unit letters; the `e` marker stays.

You can also use the **Elapsed** checkbox instead of typing, in the duration editor of the [Task Properties](/en/building-schedule/task-properties/index.md) dialog. Its tooltip is the definition:

> Elapsed. When checked, duration counts continuously (24/7) instead of only during working hours defined by the calendar.

Ticking or unticking the box keeps the number you can see and changes what it means: `3d` becomes `3ed`. It does not silently convert 3 working days into the equivalent number of elapsed days.

## What an Elapsed Unit Is Worth

Elapsed units ignore your project calendar and use fixed calendar arithmetic:

| Unit | Elapsed value |
|------|---------------|
| 1 elapsed day | 24 hours |
| 1 elapsed week | 7 days = 168 hours |
| 1 elapsed month | 30 days = 720 hours |

Compare that with working units, which come from [Project Properties](/en/setting-up-project/project/index.md) — by default 8 hours a day, 5 days a week, 20 days a month. So `1w` is 40 working hours while `1ew` is 168 clock hours.

## Elapsed Lag on a Dependency

The same idea applies to the lag on a [dependency](/en/building-schedule/dependencies/index.md), and this is where it matters most. "Start the next task three days after this one finishes" usually means three *calendar* days, not three working days — otherwise a Friday finish pushes the successor to Wednesday.

In the **Predecessors** tab of Task Properties, each link has its own **Elapsed** checkbox next to the lag, with the same meaning:

> When checked, lag time counts continuously (24/7) instead of only during working hours defined by the calendar.

You can type it directly too: a lag of `3ed` is three calendar days.

## Import and Export

Elapsed durations and lags are part of the Microsoft Project format and survive a round trip in both directions. A `3ed` duration imported from Microsoft Project stays `3ed`, and exports back as an elapsed duration.
