# Google Drive Integration

Ingantt stores your project files in Google Drive so you can access them from any device. This article covers signing in, the permissions Ingantt asks for, how Drive and Ingantt fit together, and what to do when Google sign-in does not behave.

## Working without signing in

You do not have to sign in. Without a Google account you can open and edit project files stored on your device, and save them back (on the web, saving a local file downloads a new copy — see [Saving Your Project](/en/getting-started/saving/index.md)).

Sign in with Google when you want your projects kept in the cloud, saved automatically as you work, available on your other devices, and shareable with other people.

## Sign in to Google

On the Projects screen, click **Sign in with Google**. A standard Google dialog opens and asks for the permissions below. You can sign out again at any time with **Sign out of Google**.

Ingantt requests the following permissions:

- **See your profile info** — Used to identify your account.
- **Connect itself to your Google Drive** — **Web** version only. Allows you to create or open Ingantt files from Google Drive's web interface (**New** button or **Open with** menu).
- **See, edit, create, and delete only the specific Google Drive files you use with this app** — Allows Ingantt to create and edit its own files in your Google Drive. Ingantt cannot access your other files.

> The third permission is the narrow Google Drive scope: Ingantt only ever sees files you created in Ingantt or opened with it. The rest of your Drive stays invisible to Ingantt, which is also why Ingantt cannot browse your Drive folders for you.

## Creating and opening projects in Google Drive

Once you are signed in, the Projects screen is your Drive:

- **Recent Projects** — projects you opened most recently, grouped by date.
- **Shared with me** — Ingantt files other people shared with you.
- **Starred** — projects you marked with **Add to Starred**.
- **Trash** — projects you moved to the Trash. Use **Restore** to bring one back.

Use **Open** → **Open from Google Drive** to pick an existing file, or the **Upload** tab of that dialog to browse for a file on your device or drag one in. Microsoft Project, Primavera, and the other supported formats can be opened this way — see [Import & Export](/en/getting-started/import-export/index.md).

New projects come from **New** on the Projects screen: **New project**, **New with AI**, or **New from template**. When you are signed in on the web, a new project is targeted at Google Drive straight away and autosaved from then on.

> **Missing a file in "Shared with me"?** Google requires you to open a shared file from Google Drive first. Right-click the file there and choose **Open with** → **Ingantt**. It then appears in the list.

## Using Ingantt from Google Drive's own interface (web)

On the web, Ingantt can be launched from Drive rather than the other way round. This is what the **Connect itself to your Google Drive** permission is for, and it only works once Ingantt has been added to your Drive from the [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gantt_chart_ai_project_planning_ingantt/286119906331){:target="_blank"}.

- **New** → **More** → **Ingantt** creates a new Ingantt project in the Drive folder you are in.
- Right-click an Ingantt file → **Open with** → **Ingantt** opens it in Ingantt for Web.

In both cases Drive opens `web.ingantt.com` and passes along the folder or file to use, so you land directly in the right project.

## Troubleshooting Sign in to Google (Web)

**Google Drive does not offer Ingantt in its New or Open with menus.** Sign out of Google in Ingantt, sign in again, and make sure you grant the **Connect itself to your Google Drive** permission. Google only adds the Drive menu entries once that permission has been granted, and it is easy to skip on the consent screen. If the entries are still missing, check that Ingantt is added to your account from the Google Workspace Marketplace.

**A file someone shared with you is not in "Shared with me".** Open it once from Google Drive with **Open with** → **Ingantt**. Because Ingantt only has access to files you use with Ingantt, a shared file is invisible to it until you have opened it that way at least once.

**"Error saving file to Google Drive".** Check your connection first. If it persists, sign out of Google and sign in again — the sign-in may have expired or lost a permission.

**"Could not sign in to Google."** If you use more than one Google account, make sure the popup is signing in as the account that owns your projects. Browser extensions that block third-party cookies or popups can also stop the Google dialog from completing.

Still stuck? [Contact support](mailto:support@ingantt.com) and tell us your platform, your browser, and the exact message you see.

## Video walkthrough

[Using Ingantt for Web with Google Drive](https://www.youtube.com/watch?v=sFg1a4tl4G4)

## Related

- [Saving Your Project](/en/getting-started/saving/index.md) — destinations, autosave, and working offline.
- [Sharing a Project](/en/ui/sharing/index.md) — giving other people access to a plan.
