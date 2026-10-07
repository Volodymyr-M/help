# Saving Your Project

Ingantt saves your project either as a file on your device or as a file in your Google Drive. Autosave then keeps that file up to date while you work. This article explains which destination you get, when autosave applies, and the one case where it cannot.

## Saving for the first time

Click the **Save** button in the toolbar, or use **Save file** in the **File** menu.

If the project has never been saved, Ingantt asks where it should go. **Save project as** offers two destinations:

- **Save to new local file** — a file on your device.
- **Save to new Google Drive file** — a file in your Google Drive. Requires signing in with Google.

You can change the destination later with **Save file as** in the **File** menu, which always creates a new file and continues working in it.

Your project is saved in an XML format that is fully compatible with Microsoft Project. Nothing about your plan is locked to Ingantt.

> On the web, if you are already signed in to Google when you create a project, Ingantt picks Google Drive for you and names the file after the project. You do not have to save once before autosave starts working, and renaming the project renames the Drive file.

## Autosave

When autosave is on, Ingantt writes every change to the project's existing file in the background, roughly every 20 seconds, and only when there is something unsaved. It always writes to the destination the project already has — it never picks a new one.

Whether it is on by default depends on the platform:

| Platform | Autosave by default | Where to change it |
|----------|--------------------|--------------------|
| **Web** | On | **File** menu → **Work offline (no autosave)** |
| **Android, iOS, Windows, macOS** | Off | **Enable autosave** in the **Options** dialog, or in the **File** menu |

The **Save** button doubles as the autosave indicator. It shows *Saving…*, *File saved*, *File saved to Google Drive*, *Autosave pending…*, or an error if a save did not go through.

Autosave cannot help in two situations:

- **The project has never been saved.** There is no file to update yet, so save it once yourself.
- **The project was opened from a local file while you are using Ingantt in a browser.** See below.

## Autosave and local files on the web

A browser cannot write back to a file you picked from your disk. When Ingantt for Web saves to "a local file" it downloads a new copy of the file instead — which is the right behaviour for an explicit **Save**, but not something you want happening every 20 seconds.

So: **Ingantt for Web does not autosave to local files.** If you opened a local project file in the browser and want your changes kept automatically, use **Save file as** → **Save to new Google Drive file** once. From then on, autosave keeps the Drive file current.

This affects [Edit with AI](/en/getting-started/edit-with-ai/index.md) in the same way: with no autosave, anything the AI changes stays unsaved until you save it yourself, and Ingantt warns you about that before the session starts.

## Working offline on the web

**Work offline (no autosave)** in the **File** menu turns autosave off for the current browser tab. Use it when you want to keep editing without every change going to Google Drive.

Two things to know about it:

- Nothing is saved while it is on, so save manually before you close the tab. Ingantt reminds you when you switch it on.
- The setting is per session. Reloading the page or opening a new tab starts with autosave on again. On Android, iOS, Windows, and macOS the **Enable autosave** setting is remembered instead.

## Downloading a copy

On the web, **File** → **Download** → **Download XML** saves a copy of the project to your computer without changing where the project itself is saved. Use it for a backup, or to hand the file to someone using Microsoft Project.

Other formats — PDF, PNG, CSV, XML, YAML, and Markdown — are covered in [Import & Export](/en/getting-started/import-export/index.md).

## Closing with unsaved changes

If you close a project that has unsaved changes, Ingantt asks **Save changes to** your project and warns that unsaved changes will be lost. The same prompt appears before moving a project to the Trash.

## If Ingantt will not let you save

- **"View only mode as trial ended"** or **"Subscription inactive"** — your projects are still there and still readable, but saving is off until your subscription is active. See [Free Trial](/en/account/trial/index.md) and [Subscriptions and Payment](/en/account/subscription/index.md).
- **"You are a viewer and cannot save"** — the Google Drive file was shared with you as a viewer or commenter. Ask the owner for edit access, or use **Save file as** to keep your own copy. See [Sharing a Project](/en/ui/sharing/index.md).
- **"Error saving file to Google Drive"** — usually a connection problem or an expired Google sign-in. Check your connection and sign in again; see [Google Drive Integration](/en/ui/files/index.md).
