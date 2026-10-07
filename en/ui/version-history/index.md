# Version History

Ingantt keeps the full history of every plan stored in Google Drive. You can browse it, preview any past version in the Gantt chart, pin the ones that matter, and restore one as the current plan.

**The project must be open from Google Drive.** Version history is Google Drive's revision history, so the two version history menu items are hidden for a project opened from your device or one that has never been saved. Save it to [Drive](/en/ui/files/index.md) and they appear.

## Opening Version History

Choose **File → Version history → See version history**, or press `Ctrl` + `Alt` + `Shift` + `H`.

The panel opens down the side and Ingantt switches to full screen so the chart has room. Closing the panel puts everything back as it was.

## Browsing and Previewing

Versions are listed newest first and grouped by day — **Today**, **Yesterday**, then the date. The newest is labelled **Current version** and is selected for you when the panel opens.

Click any version and Ingantt loads it into the chart so you can look at it. The preview is a look, not an edit:

- Your open plan is held aside untouched, including its undo history and any unsaved changes.
- Close the panel and your plan comes back exactly as you left it.
- Nothing is written to Drive by previewing.

## Pinning a Version

Google Drive prunes old revisions of a file over time. Pinning a version marks it **keep forever**, so it survives that pruning and stays in the list.

There are two ways to pin:

- **File → Version history → Pin current version** pins the most recent version without opening the panel. Use it right after a save you want to keep — before a re-plan, at the end of a phase, or when a plan is signed off.
- In the panel, open the menu on any version and choose **Pin this version**.

Pinned versions are marked **Pinned** in the list. Choosing the same menu item again unpins.

## Restoring a Version

Select the version you want and choose **Restore this version**. Ingantt asks you to confirm:

> Restore this version? Your current version will be saved first.

Restoring does not throw your current plan away. It saves the restored content as a **new** version on top of the history, so the version you were on is still in the list and can itself be restored. The history only ever grows — restoring never deletes anything.

After you confirm, the restored plan becomes the open project and is saved to Drive immediately.

## Version History Is Not the Same as Baselines

The two are easy to confuse:

- **Version history** is a record of the *file* over time, kept by Google Drive. It answers "what did this plan look like last Tuesday?"
- **[Baselines](/en/tracking/baselines/index.md)** are snapshots of the *schedule* stored inside the plan, which you compare against in the same view — baseline bars in the Gantt chart, baseline and variance columns in the table. They answer "how far have we drifted from the approved plan?"

Use version history to go back. Use baselines to measure.
