# Edit with AI

Connect your project to an AI coding assistant like Claude Code, Codex, or any tool with HTTP access, and let it make changes to your schedule in real time. While the session is running, the AI can read your current project, add or modify tasks, adjust dependencies, assign resources, and push updates back — you see each change in the Gantt chart the moment it's applied.

> **Edit with AI is currently in beta.** The feature is available on the web version of Ingantt.

## Starting an AI Editing Session

1. Open the project you want to edit.
2. Click the **Edit with AI** icon (✨) in the top-right corner, next to the version history button.
3. The dialog shows a set of instructions that describe how your AI tool should read and write the project.
4. Click **Copy instructions**. This starts the editing session and copies the instructions to your clipboard.
5. Paste the instructions into your AI tool (e.g., as the first message in a Claude Code or Codex conversation).
6. Ask the AI to make changes in natural language — for example, _"Add a two-week QA phase after development"_ or _"Assign Alex to all design tasks"_.

The AI follows the instructions to fetch the current YAML, edit it, and push the result back to Ingantt. Ingantt validates every edit before accepting it.

## What Happens During a Session

- **The green dot** next to the ✨ icon indicates an active session. The dot turns amber when the connection is reconnecting, and red when the session has encountered an error.
- **Every AI change is validated** against Ingantt's project rules before it's applied. If the AI sends invalid data, Ingantt rejects the change and tells the AI what went wrong so it can self-correct.
- **Your own edits are pushed to the session** too. If you change something in the Ingantt UI while the session is active, the AI will see your update on its next read.
- **The scheduler stays authoritative.** When the AI sets dates or durations, Ingantt re-runs the Critical Path Method to compute the final schedule, which may shift other tasks.

## Stopping the Session

Click the ✨ icon while a session is active and choose **Stop session**. You can also simply close the browser tab — the session ends automatically after a period of inactivity.

## Supported AI Tools

Any AI tool that can make HTTP requests works with Edit with AI. Common choices include:

- **Claude Code** — paste the instructions as the first message in a conversation.
- **Codex** — paste the instructions as the first message in a conversation.
- **Other tools** — any assistant with access to `curl` or an HTTP client can read and write the session.

## Tips

- Keep the Ingantt tab open while the session is active. If the tab is closed, the AI will get a "session not connected" error on its next write.
- If the AI sends invalid YAML, you'll see a notification in the Ingantt UI. The AI receives the error details and usually fixes the problem on its next attempt.
- For large projects, start with a focused request (_"rearrange the testing phase"_) rather than sweeping changes — the AI can iterate in small steps with immediate feedback.
- The AI can't see information it isn't given. If your request depends on context — constraints, deadlines, or business rules — include that in your prompt.
