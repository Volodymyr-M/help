# Working Offline

Turn autosave off so nothing is written to Google Drive until you save deliberately — useful when you are about to lose your connection.

On the **Web** version the menu item is **File → Work offline (no autosave)**. On Windows, macOS, Android, and iOS the same switch is named **Enable autosave**.

## What Work Offline Does

**File → Work offline** turns autosave off for the current tab. That is the whole of it. While it is on, Ingantt stops writing your project to Google Drive every 20 seconds, and nothing leaves your browser until you save.

Turning it on shows a one-off reminder:

> Offline mode is on. Remember to save your changes manually before closing the tab.

Take that literally. **Ingantt does not queue your edits and does not send them when you come back online.** There is no background sync. If you close or reload the tab without saving, the work done since the last save is gone.

## Saving While You Are Offline

You cannot save to Google Drive without a connection, so the sequence that works is:

1. Open the plan while you still have a connection.
2. Turn on **File → Work offline**.
3. Edit as normal. Everything happens in the browser — the schedule recalculates, undo and redo work, nothing is sent anywhere.
4. When you are back online, turn **Work offline** back off, then press **Save** (or `Ctrl`/`Cmd` + `S`). This is the step that puts your work in Drive.
5. Autosave resumes from that point.

If you would rather not rely on remembering step 4, export a copy before you lose the connection: **File → Export → XML** downloads the plan to your device, and you can open that file again later.

## The Save Button Tells You Where You Stand

The Save button in the toolbar is the indicator to watch:

| What it shows | What it means |
|---------------|---------------|
| **File saved to Google Drive** | Everything is in Drive. |
| **Autosave pending…** | There are unsaved edits; autosave will take them shortly. |
| **Saving…** | A save is in flight. |
| **Save file to Google Drive** | There are unsaved edits and autosave is off — you must save. |
| **Error saving file to Google Drive** | A save was attempted and failed. Your edits are still in the tab and still unsaved. |

The error state is what you see if autosave runs while the connection is down: the save fails, the button turns red, and the project stays unsaved in the tab. Nothing is lost at that moment, but nothing is safe either — reconnect and save.

## Platform Differences

- **The setting does not persist on Web.** It is per tab and per session. Open a new tab or reload, and autosave is back on. This is deliberate — autosave on is the safer default, so a forgotten offline switch cannot follow you around. On Windows, macOS, Android, and iOS the autosave setting *is* remembered.
- **Defaults differ.** On Web, autosave is on out of the box. On the desktop and mobile builds it is off out of the box, and the same menu item reads **Enable autosave**.
- **A project you have not saved yet does not autosave at all**, offline mode or not. Autosave can only update a file that already exists in Drive. Save once, and autosave takes over.
- **A file opened from your device on the Web version never autosaves.** Ingantt for Web cannot write back to a file on your disk. Save it to [Google Drive](/en/ui/files/index.md) to get autosave.

## Working Offline and Edit with AI

If you use [Edit with AI](/en/getting-started/edit-with-ai/index.md) while autosave is off, Ingantt warns you. The AI's changes are applied to the open project as ordinary, undoable edits — they are not saved on their own. Close the tab without saving and the AI's work goes with it, exactly like any manual edit.

## What Is Not Supported

To set expectations plainly:

- Ingantt does not detect that you have gone offline or come back.
- Ingantt does not queue edits made offline and replay them on reconnect.
- There is no sync-conflict resolution, because there is no sync. If you and a colleague both edit the same Drive file, the last save wins — the whole file, not merged task by task.
- Opening a plan for the first time needs a connection. Working offline keeps a plan you already have open editable; it does not let you open a new one.
