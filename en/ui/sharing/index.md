# Sharing a Project

An Ingantt project stored in Google Drive can be shared the same way any other Drive file is shared — with named people, with your organisation, or with anyone holding the link. On the web you do all of this from inside Ingantt.

## Before you start

Sharing works on Google Drive files only. The project must be signed in with Google and saved to Drive; a project that lives in a local file on your device has nothing to share. See [Saving Your Project](/en/getting-started/saving/index.md).

> The **Share** button is part of Ingantt for Web. On Android, iOS, Windows, and macOS, share the file from Google Drive instead — open Drive, find the Ingantt file, and use Drive's own **Share** command. The result is identical, because the permissions live on the Drive file either way.

## Sharing with specific people

1. Open the project and click **Share** in the header, or choose **Share** in the **File** menu. The **Share on Google Drive** dialog opens.
2. Under **People with access** you see everyone who already has access, owners first.
3. Click **Add**, enter the person's email address, pick the role you want them to have, and confirm.
4. Close the dialog. Ingantt saves the new permissions to Drive and confirms with *Access updated*.

The roles are Google Drive's roles:

| Role | What they can do |
|------|------------------|
| **Viewer** | Open the project and look at it. Cannot save changes. |
| **Commenter** | The same as Viewer, plus comment on the file in Google Drive. Cannot save changes. |
| **Editor** | Open the project and save changes to it. |
| **Owner** | Everything, including deleting the file and transferring ownership. |

To change someone's role, pick a different role next to their name. To remove them, delete their row.

> Enter an address the person can actually sign in to Google with. If Ingantt cannot confirm that the address belongs to Gmail or Google Workspace it warns you, because a Drive share to an address with no Google account behind it will not let them open the project.

## General access — links and organisations

**General access** controls everyone you have not named individually:

- **Restricted** — only the people listed under **People with access**. This is the default.
- **Anyone with the link** — anybody who has the link, with the role you choose (Viewer, Commenter, or Editor).
- **Domain** — everyone in your Google Workspace organisation, with the role you choose. This option appears only when the project's owner is on a Workspace domain; it is not offered for personal Gmail accounts.

**Copy link** copies the Google Drive link to the project. Anyone whose access allows it can open that link and edit the plan in Ingantt.

The **Share** button's tooltip tells you the current state at a glance — *Private — only you can access*, *Shared with specific people*, *Anyone with the link can view/comment/edit*, or the equivalent for your domain.

## Who is allowed to change access

Only the file's **owner** can always manage access. An **editor** can manage access too, unless the owner has turned that off in Google Drive.

If you open the dialog on a project shared with you as a viewer or commenter, it says **You are a viewer and cannot manage access** and shows the current general access without letting you change it. Ask the owner if you need more.

## Working on a shared project

- Everyone opens the same Drive file, but Ingantt is not a live co-editing tool. Each save writes the whole project file, so if two people have the plan open and both save, the last save wins and the other person's changes are replaced. Agree who is editing before you start, and check the file's version history in Google Drive if you think something was lost.
- A viewer or commenter who tries to save sees **You are a viewer and cannot save**. Use **Save file as** to keep a personal copy instead.
- Every collaborator needs their own active Ingantt subscription or trial to edit — sharing a plan does not share your subscription. See [Subscriptions and Payment](/en/account/subscription/index.md).
- Sharing with a Google **group** address is not supported by the Share dialog in Ingantt. Share with individual addresses, or manage a group share from Google Drive.

## Related

- [Google Drive Integration](/en/ui/files/index.md) — signing in, permissions, and opening shared files.
- [Saving Your Project](/en/getting-started/saving/index.md) — where a project is stored and when it is saved.
