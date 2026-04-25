// VS Code Cheat Sheet data — extracted & verified from
// https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
// https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
// https://code.visualstudio.com/docs/getstarted/tips-and-tricks
window.CHEATSHEET = {
  symbols: "⌘ Cmd · ⌥ Option/Alt · ⌃ Control · ⇧ Shift · ↑↓←→ arrows",
  sections: [
    {
      id: "essentials",
      title: "1. Essentials",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⇧⌘P  /  F1", "Ctrl+Shift+P  /  F1", "Open the Command Palette — every command, by name."],
        ["⌘P", "Ctrl+P", "Quick Open — jump to any file by typing part of its name."],
        ["⌘,", "Ctrl+,", "Open the Settings UI."],
        ["⇧⌘P → Open User Settings (JSON)", "Ctrl+Shift+P → same", "Edit settings.json directly."],
        ["⌘K ⌘S", "Ctrl+K Ctrl+S", "Open the Keyboard Shortcuts editor."],
        ["⌘S", "Ctrl+S", "Save the current file."],
        ["⇧⌘S", "Ctrl+Shift+S", "Save As…"],
        ["⌥⌘S", "Ctrl+K S", "Save all open files."],
        ["⇧⌘N", "Ctrl+Shift+N", "Open a new VS Code window."],
        ["⌘W", "Ctrl+F4  /  Ctrl+W", "Close the current editor tab."],
        ["⇧⌘T", "Ctrl+Shift+T", "Reopen the last closed tab."],
        ["⌘K Enter", "Ctrl+K Enter", "Pin a preview tab open permanently."],
        ["⌃R", "Ctrl+R", "Open a recent folder or workspace."],
        ["⌘K M", "Ctrl+K M", "Change the file’s language mode."],
        ["⌘K ⌘T", "Ctrl+K Ctrl+T", "Switch color theme."]
      ],
      takeaway: "⌘P is Quick Open for files — but type > inside it for the Command Palette, @ to jump to a symbol, : for a line number, and ? to see every mode. One box, many tools."
    },
    {
      id: "editing",
      title: "2. Editing Basics",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌘X (no selection)", "Ctrl+X (no selection)", "Cut the whole line without selecting it."],
        ["⌘C (no selection)", "Ctrl+C (no selection)", "Copy the whole line without selecting it."],
        ["⌥↓  /  ⌥↑", "Alt+↓  /  Alt+↑", "Move the current line down or up."],
        ["⇧⌥↓  /  ⇧⌥↑", "Shift+Alt+↓  /  Shift+Alt+↑", "Duplicate the line down or up."],
        ["⇧⌘K", "Ctrl+Shift+K", "Delete the entire current line."],
        ["⌘Enter", "Ctrl+Enter", "Insert a blank line below."],
        ["⇧⌘Enter", "Ctrl+Shift+Enter", "Insert a blank line above."],
        ["⌘]  /  ⌘[", "Ctrl+]  /  Ctrl+[", "Indent or outdent."],
        ["⌘/", "Ctrl+/", "Toggle a line comment."],
        ["⇧⌥A", "Shift+Alt+A", "Toggle a block comment."],
        ["⇧⌘\\", "Ctrl+Shift+\\", "Jump to the matching bracket."],
        ["Home  /  End", "Home  /  End", "Beginning / end of line."],
        ["⌘↑  /  ⌘↓", "Ctrl+Home  /  Ctrl+End", "Top / bottom of file."],
        ["⌘K ⌘X", "Ctrl+K Ctrl+X", "Trim trailing whitespace."],
        ["⌥Z", "Alt+Z", "Toggle word wrap."]
      ],
      takeaway: "⌥↓ to move a line is one of the highest-payoff shortcuts in the editor. Pair it with ⇧⌥↓ to duplicate-then-tweak — you’ll never cut-and-paste to reorder lines again."
    },
    {
      id: "multicursor",
      title: "3. Multi-Cursor & Selection",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌥+click", "Alt+click", "Add an extra cursor at the click position."],
        ["⌥⌘↓  /  ⌥⌘↑", "Ctrl+Alt+↓  /  Ctrl+Alt+↑", "Add a cursor below or above."],
        ["⌘D", "Ctrl+D", "Select the next occurrence of the current word."],
        ["⌘K ⌘D", "Ctrl+K Ctrl+D", "Skip the current match, jump to the next."],
        ["⇧⌘L", "Ctrl+Shift+L", "Select every occurrence at once."],
        ["⌘F2", "Ctrl+F2", "Select all occurrences of the current word."],
        ["⌘U", "Ctrl+U", "Undo the last cursor operation."],
        ["⇧⌥I", "Shift+Alt+I", "Add a cursor at the end of every selected line."],
        ["⌘L", "Ctrl+L", "Select the entire current line."],
        ["⌃⇧⌘→  /  ⌃⇧⌘←", "Shift+Alt+→  /  Shift+Alt+←", "Expand or shrink selection by scope."],
        ["⇧⌥+drag", "Shift+Alt+drag", "Column (box) select with the mouse."],
        ["⇧⌥⌘↑  /  ⇧⌥⌘↓", "Ctrl+Shift+Alt+↑  /  Ctrl+Shift+Alt+↓", "Column select up / down."],
        ["⇧⌥⌘←  /  ⇧⌥⌘→", "Ctrl+Shift+Alt+←  /  Ctrl+Shift+Alt+→", "Column select left / right."]
      ],
      takeaway: "⌘D feels magical — until you discover ⌘K ⌘D. It skips the current match and selects the next one, letting you cherry-pick exactly which occurrences to edit. That skip is the real superpower."
    },
    {
      id: "navigation",
      title: "4. Navigation",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌘P", "Ctrl+P", "Go to File — fuzzy search any file in the workspace."],
        ["⌃G", "Ctrl+G", "Go to Line — type a number, jump."],
        ["⇧⌘O", "Ctrl+Shift+O", "Go to Symbol in file (use : to group by type)."],
        ["⌘T", "Ctrl+T", "Go to Symbol across the whole workspace."],
        ["F12", "F12", "Go to Definition."],
        ["⌥F12", "Alt+F12", "Peek Definition inline."],
        ["⌘K F12", "Ctrl+K F12", "Open Definition in a side panel."],
        ["⌃F12", "Ctrl+F12", "Go to Implementation."],
        ["⇧F12", "Shift+F12", "Show all References."],
        ["⌃-  /  ⌃⇧-", "Alt+←  /  Alt+→", "Navigate back / forward in edit history."],
        ["⌃⇧Tab", "Ctrl+Shift+Tab", "Cycle through open editors (history order)."],
        ["F8  /  ⇧F8", "F8  /  Shift+F8", "Next / previous error or warning."],
        ["⇧⌘M", "Ctrl+Shift+M", "Open the Problems panel."],
        ["⌃⇧.", "Ctrl+Shift+.", "Focus the breadcrumbs bar."],
        ["⌃⇧;", "Ctrl+Shift+;", "Focus breadcrumbs without the dropdown."]
      ],
      takeaway: "⌃- (Go Back) is the unsung hero of navigation. After diving into a definition deep in some library, it teleports you right back to where you were. Treat it like a browser’s Back button."
    },
    {
      id: "search",
      title: "5. Search & Replace",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌘F", "Ctrl+F", "Find in the current file."],
        ["⌥⌘F", "Ctrl+H", "Find & Replace in the current file."],
        ["⌘G  /  ⇧⌘G", "F3  /  Shift+F3", "Find next / previous match."],
        ["⌥Enter", "Alt+Enter", "Select all occurrences of the current find match."],
        ["⌘D", "Ctrl+D", "Add the next occurrence to a multi-cursor selection."],
        ["⇧⌘F", "Ctrl+Shift+F", "Find in all files (workspace search)."],
        ["⇧⌘H", "Ctrl+Shift+H", "Replace in all files (workspace)."],
        ["⇧⌘J", "Ctrl+Shift+J", "Toggle search details (include / exclude filters)."],
        ["Alt+C in search box", "Alt+C", "Toggle case-sensitive search."],
        ["Alt+W in search box", "Alt+W", "Toggle whole-word match."],
        ["Alt+R in search box", "Alt+R", "Toggle regex search."],
        ["$1, $2 in replace field", "$1, $2", "Use regex capture groups in Replace."],
        ["\\U$1 / \\L$1", "\\U$1 / \\L$1", "Upper / lowercase a captured group."]
      ],
      takeaway: "Regex replace with capture groups — (.+) → \"$1\" — plus Alt+Enter to grab every match means you can do complex multi-line reformats in seconds, no plugin required."
    },
    {
      id: "folding",
      title: "6. Code Folding & Display",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌥⌘[  /  ⌥⌘]", "Ctrl+Shift+[  /  Ctrl+Shift+]", "Fold / unfold the current region."],
        ["⌘K ⌘[  /  ⌘K ⌘]", "Ctrl+K Ctrl+[  /  Ctrl+K Ctrl+]", "Fold / unfold all subregions."],
        ["⌘K ⌘0", "Ctrl+K Ctrl+0", "Fold ALL regions in the file."],
        ["⌘K ⌘J", "Ctrl+K Ctrl+J", "Unfold ALL regions in the file."],
        ["⌘K ⌘1 … ⌘K ⌘9", "Ctrl+K Ctrl+1 … Ctrl+K Ctrl+9", "Fold to indentation level 1 through 9."],
        ["⌘K Z", "Ctrl+K Z", "Toggle Zen Mode (Esc Esc to exit)."],
        ["⌃⌘F", "F11", "Toggle full screen."],
        ["⌥⌘0", "Shift+Alt+0", "Toggle horizontal ↔ vertical editor split."],
        ["⌘=  /  ⇧⌘-", "Ctrl+=  /  Ctrl+-", "Zoom the entire UI in / out."],
        ["⌘K ⌘\\", "Ctrl+K Ctrl+\\", "Split the editor into a new group."],
        ["Palette: View: Toggle Minimap", "same", "Show / hide the right-side minimap."],
        ["Palette: View: Toggle Breadcrumbs", "same", "Show / hide breadcrumbs."],
        ["⌘J", "Ctrl+J", "Toggle the bottom panel (Terminal / Output / Problems)."]
      ],
      takeaway: "⌘K ⌘0 to collapse everything, then ⌘K ⌘1–3 to control depth, is the fastest way to get a bird’s-eye view of a large file. It’s like outline levels in a document editor."
    },
    {
      id: "intellisense",
      title: "7. IntelliSense & Refactoring",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌃Space  /  ⌘I", "Ctrl+Space  /  Ctrl+I", "Trigger the suggestion list manually."],
        ["⇧⌘Space", "Ctrl+Shift+Space", "Trigger parameter hints (function signature)."],
        ["⇧⌥F", "Shift+Alt+F", "Format the entire document."],
        ["⌘K ⌘F", "Ctrl+K Ctrl+F", "Format only the selection."],
        ["F12", "F12", "Go to Definition."],
        ["⌥F12", "Alt+F12", "Peek Definition (inline popup)."],
        ["⌘K F12", "Ctrl+K F12", "Open Definition in a side editor."],
        ["⌘.", "Ctrl+.", "Quick Fix / Code Actions (the lightbulb)."],
        ["F2", "F2", "Rename Symbol across every file in the workspace."],
        ["⇧F12", "Shift+F12", "Show all References."],
        ["⌘K ⌘I", "Ctrl+K Ctrl+I", "Show hover info for the symbol under the cursor."],
        ["Palette: Refactor…", "same", "Extract method / variable, inline variable, more."],
        ["Palette: Go to Type Definition", "same", "Jump to the type behind a variable."]
      ],
      takeaway: "F2 Rename Symbol is refactoring-grade — it updates every reference across every file, not just the current one. ⌘. Quick Fix is often smarter than you think: it auto-imports modules, applies ESLint fixes, and generates boilerplate."
    },
    {
      id: "terminal",
      title: "8. Integrated Terminal",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌃`", "Ctrl+`", "Toggle the terminal panel open / closed."],
        ["⌃⇧`", "Ctrl+Shift+`", "Create a new terminal instance."],
        ["⌃⇧5", "Ctrl+Shift+5", "Split the current terminal pane."],
        ["⌥←  /  ⌥→", "Alt+←  /  Alt+→", "Move between panes in a split terminal."],
        ["⌃PgUp  /  ⌃PgDn", "Ctrl+PgUp  /  Ctrl+PgDn", "Switch terminal tabs."],
        ["⌘↑  /  ⌘↓", "Ctrl+↑  /  Ctrl+↓", "Scroll terminal output one line."],
        ["PgUp  /  PgDn", "Shift+PgUp  /  Shift+PgDn", "Scroll one page."],
        ["⌘Home  /  ⌘End", "Ctrl+Home  /  Ctrl+End", "Top / bottom of the terminal buffer."],
        ["⌃⇧C", "Ctrl+Shift+C", "Open an external terminal at the workspace root."],
        ["Palette: Terminal: Kill the Active Terminal", "same", "Kill the focused terminal."],
        ["Palette: Terminal: Clear", "same", "Clear the terminal buffer."],
        ["Palette: Terminal: Rename", "same", "Give a terminal tab a custom name."],
        ["⌃⌘I", "Ctrl+Alt+I", "Open the Copilot Chat panel."],
        ["⌘I (in terminal)", "Ctrl+I (in terminal)", "Start Copilot Inline Chat in the terminal."]
      ],
      takeaway: "Shell Integration (on by default) puts a tiny gutter icon next to every command — click it to jump between command outputs. Indispensable when you’re scrolling a 10,000-line build log."
    },
    {
      id: "git",
      title: "9. Git & Source Control",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌃⇧G", "Ctrl+Shift+G", "Open the Source Control panel."],
        ["Palette: Git: Stage All Changes", "same", "Stage every changed file at once."],
        ["Palette: Git: Stage Selected Ranges", "same", "Stage only highlighted lines from the diff."],
        ["Palette: Git: Commit", "same", "Commit staged changes."],
        ["Palette: Git: Push", "same", "Push commits to the remote."],
        ["Palette: Git: Pull", "same", "Pull from the remote."],
        ["Palette: Git: Create Branch", "same", "Create and switch to a new branch."],
        ["Palette: Git: Checkout to…", "same", "Switch branches via Quick Pick."],
        ["Palette: Git: Stash  /  Pop Stash", "same", "Stash uncommitted changes / restore them."],
        ["⌘K ⌘C in diff editor", "Ctrl+K Ctrl+C", "Accept the current change in a merge conflict."],
        ["Click the gutter indicator", "same", "Inline diff and a one-click Stage Hunk button."],
        ["⇧⌥B (with GitLens)", "Shift+Alt+B", "Toggle per-line Git blame annotations."],
        ["Palette: Timeline: Open Timeline", "same", "Full commit history for the current file."]
      ],
      takeaway: "Those colored bars in the gutter are clickable. One click → an inline diff + a Stage Hunk button. It’s git add -p without leaving the editor."
    },
    {
      id: "debug",
      title: "10. Debugging",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["F9", "F9", "Toggle a breakpoint on the current line."],
        ["F5", "F5", "Start debugging / Continue to the next breakpoint."],
        ["⇧F5", "Shift+F5", "Stop the debug session."],
        ["⌃⇧F5", "Ctrl+Shift+F5", "Restart the debug session."],
        ["F10", "F10", "Step Over — next line, don’t enter functions."],
        ["F11", "F11", "Step Into — enter the next function."],
        ["⇧F11", "Shift+F11", "Step Out — finish current function and return."],
        ["⌘K ⌘I", "Ctrl+K Ctrl+I", "Show the value of the hovered expression."],
        ["Palette: Debug: Add Conditional Breakpoint", "same", "Pause only when an expression is true."],
        ["Palette: Debug: Add Logpoint", "same", "Log a message without pausing or editing code."],
        ["Palette: Debug: Inline Breakpoint", "Shift+F9", "Breakpoint mid-line — great for minified code."],
        ["⇧⌘D", "Ctrl+Shift+D", "Open the Run and Debug sidebar."],
        ["code --goto file.js:42:5", "same", "Open a file at a specific line + column from the CLI."]
      ],
      takeaway: "Logpoints are debugging cheat codes. They inject console.log-style messages into a running process without modifying or restarting your code. Perfect when you can’t pause execution."
    },
    {
      id: "layout",
      title: "11. Window & Layout",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["⌘\\", "Ctrl+\\", "Split the editor into a side-by-side group."],
        ["⌘1  /  ⌘2  /  ⌘3", "Ctrl+1  /  Ctrl+2  /  Ctrl+3", "Focus into editor group 1, 2, or 3."],
        ["⌘K ⌘←  /  ⌘K ⌘→", "Ctrl+K Ctrl+←  /  Ctrl+K Ctrl+→", "Move focus between editor groups."],
        ["⌘K ⇧⌘←  /  ⌘K ⇧⌘→", "Ctrl+Shift+PgUp  /  Ctrl+Shift+PgDn", "Move the active tab left / right."],
        ["⌘K ←  /  ⌘K →", "Ctrl+K ←  /  Ctrl+K →", "Move the entire editor group left / right."],
        ["⌘B", "Ctrl+B", "Toggle the primary sidebar."],
        ["⌘J", "Ctrl+J", "Toggle the bottom panel."],
        ["⇧⌘E", "Ctrl+Shift+E", "Show the Explorer sidebar."],
        ["⇧⌘X", "Ctrl+Shift+X", "Show the Extensions sidebar."],
        ["⌥⌘0", "Shift+Alt+0", "Toggle horizontal ↔ vertical layout."],
        ["⌘K Z", "Ctrl+K Z", "Zen Mode (Esc Esc to exit)."],
        ["Drag a tab out of the window", "same", "Pop the editor into a floating window."],
        ["Palette: View: Move Terminal into New Window", "same", "Detach the terminal as a floating window."]
      ],
      takeaway: "Pair split editors with ⌘1 / ⌘2: source on the left, tests on the right, flip with one key. Once the muscle memory sticks you’ll never go back to tabs-only."
    },
    {
      id: "extensions",
      title: "12. Extensions Worth Knowing",
      kind: "table",
      headers: ["Extension", "—", "What it does"],
      rows: [
        ["GitLens", "eamodio.gitlens", "Inline blame, file history, hunk staging, last-commit-per-function CodeLens."],
        ["GitHub Copilot", "GitHub.copilot", "AI code completions; pairs with Copilot Chat for conversational edits."],
        ["Prettier", "esbenp.prettier-vscode", "Opinionated formatter for JS/TS/CSS/HTML. Set as default + format on save."],
        ["ESLint", "dbaeumer.vscode-eslint", "Live ESLint rules in the editor with Quick Fix integration."],
        ["Error Lens", "usernamehw.errorlens", "Errors and warnings shown inline on the offending line."],
        ["Path IntelliSense", "christian-kohler.path-intellisense", "Autocompletes file paths in imports and require()."],
        ["Tailwind CSS IntelliSense", "bradlc.vscode-tailwindcss", "Class completions, hover docs, and linting for Tailwind."],
        ["REST Client", "humao.rest-client", "Send HTTP requests from .http files — a tiny Postman."],
        ["Live Share", "ms-vsliveshare.vsliveshare", "Real-time collaborative editing and debugging."],
        ["Project Manager", "alefragnani.project-manager", "Save and switch between projects in one keystroke."],
        ["Todo Tree", "gruntfuggly.todo-tree", "Aggregates TODO / FIXME comments into a tree view."],
        ["Peacock", "johnpapa.vscode-peacock", "Color the window frame to tell open VS Code instances apart."],
        ["Bookmarks", "alefragnani.bookmarks", "Mark lines and jump between them across files."],
        ["Remote – SSH", "ms-vscode-remote.remote-ssh", "Edit code on a remote server as if it were local."],
        ["Docker", "ms-azuretools.vscode-docker", "Manage containers, images, and compose files from the sidebar."]
      ],
      takeaway: "Don’t install an extension until you’ve felt the pain it solves. A bloated list slows startup and causes keybinding conflicts. Type @recommended in the Extensions search to see what a project’s maintainers suggest."
    },
    {
      id: "settings",
      title: "13. settings.json Power Tips",
      kind: "code",
      language: "jsonc",
      code: `{
  // 1. Auto-format and auto-fix on every save
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },

  // 2. Sticky Scroll — keeps the class/function header pinned as you scroll
  "editor.stickyScroll.enabled": true,
  "editor.stickyScroll.maxLineCount": 5,

  // 3. Inlay hints — shows inferred types and parameter names inline
  "editor.inlayHints.enabled": "on",
  "typescript.inlayHints.parameterNames.enabled": "all",
  "typescript.inlayHints.variableTypes.enabled": true,

  // 4. Linked editing — rename an HTML opening tag, the closing tag follows
  "editor.linkedEditing": true,

  // 5. Bracket pair colorization (built in — no extension needed)
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",

  // 6. Font ligatures (requires a ligature font like Fira Code)
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,

  // 7. Smooth cursor animation
  "editor.cursorSmoothCaretAnimation": "on",

  // 8. Don't collapse single-child folders into one long path
  "explorer.compactFolders": false,

  // 9. Tidy whitespace on save
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "files.insertFinalNewline": true,

  // 10. Vertical rulers at columns 80 and 120
  "editor.rulers": [80, 120],

  // 11. Per-language overrides
  "[python]":  { "editor.tabSize": 4, "editor.insertSpaces": true },
  "[go]":      { "editor.insertSpaces": false },

  // 12. Terminal command-output decorations
  "terminal.integrated.shellIntegration.decorationsEnabled": "both"
}`,
      takeaway: "editor.linkedEditing is the hidden gem most HTML devs miss — Auto Rename Tag is built into VS Code now. Enable it and uninstall the extension."
    },
    {
      id: "hidden",
      title: "14. Hidden Gems & Rare Tips",
      kind: "table",
      headers: ["Mac", "Windows", "What it does"],
      rows: [
        ["Palette: Profiles: Switch Profile", "same", "Different extensions, settings, and keybindings per project."],
        ["Palette: Preferences: Open Keyboard Shortcuts (JSON)", "same", "Bind any workbench.action.* command ID to a key."],
        ["⌘P then type >edt", "Ctrl+P then type >edt", "Quick-pick between open editors (try term for terminals)."],
        ["⌘P then type ?", "Ctrl+P then type ?", "See every Quick Open mode inline."],
        ["⌘K ⌘P", "Ctrl+K Ctrl+P", "Show all pinned editors in the active group."],
        ["⌃R", "Ctrl+R", "Open Recent — switch workspaces without leaving the keyboard."],
        ["Palette: Emmet: Wrap with Abbreviation", "same", "Wrap selection in an Emmet expression."],
        ["Tab in HTML / JSX", "Tab", "Expand an Emmet abbreviation (e.g. ul>li*3>a)."],
        ["⌘I in editor", "Ctrl+I in editor", "Copilot Inline Chat — edit code in plain English."],
        ["⌃⌘I", "Ctrl+Alt+I", "Open the Copilot Chat panel for multi-turn chats."],
        ["⇧⌥⌘L", "Ctrl+Shift+Alt+L", "Copilot Quick Chat — lightweight overlay."],
        ["Palette: Developer: Reload Window", "same", "Reload VS Code without restarting it."],
        ["Palette: Workbench: Open Multiple Root Folders", "same", "Multi-root workspace across several repos."],
        ["Palette: Tasks: Run Task", "same", "Run any tasks.json task from the keyboard."],
        ["code --diff a b", "same", "Diff any two files from the terminal."],
        ["Palette: View: Toggle Sticky Scroll", "same", "Toggle sticky scroll for the session only."],
        ["workbench.tree.enableStickyScroll", "same", "Sticky scroll in the file Explorer too."],
        ["Palette: Terminal: Create New Terminal in Editor Area", "same", "Open a terminal as an editor tab."],
        ["//#region  …  //#endregion", "same", "Custom foldable regions in any // language."]
      ],
      takeaway: "Profiles are the most underused power feature. Build a Minimal Writing profile (no extensions, distraction-free font) and a Python ML profile loaded with tooling. Switch in two seconds. Profiles can even auto-bind to specific folders."
    },
    {
      id: "mac",
      title: "15. Mac-Only Quirks",
      kind: "table",
      headers: ["Mac", "—", "Description"],
      rows: [
        ["⌃⌘F", "vs F11", "True macOS full screen (Windows uses F11 for VS Code-level full screen)."],
        ["⌘H", "—", "Hides the entire VS Code window — that’s macOS, not Replace In File."],
        ["Touch Bar", "—", "On supported MacBook Pros, debug controls and Git status render on the Touch Bar."],
        ["⌥⌘S", "vs Ctrl+K S", "Save All — only on macOS."],
        ["⌃⇧⌘→  /  ⌃⇧⌘←", "—", "Expand / shrink selection by scope (no system collision)."],
        ["⌘K R", "—", "Reveal active file in Finder."],
        ["⌃-  /  ⌃⇧-", "vs Alt+←  /  Alt+→", "Go Back / Forward in nav history."],
        ["⌘↑  /  ⌘↓", "vs Ctrl+Home  /  Ctrl+End", "Top / bottom of file."],
        ["⌥←  /  ⌥→ in terminal", "—", "Move word left / right — matches macOS shell behavior."],
        ["⌘Delete in file tree", "—", "Move file to Trash from the Explorer."]
      ],
      takeaway: "The classic Mac gotcha is ⌘H. Press it inside VS Code and the entire app vanishes. If your editor seems gone, check the Dock or press ⌘H again. Rebind it in keybindings.json if it bites you regularly."
    },
    {
      id: "windows",
      title: "16. Windows-Only Quirks",
      kind: "table",
      headers: ["Windows", "—", "Description"],
      rows: [
        ["Ctrl+Shift+W", "—", "Closes the entire VS Code window. On Mac ⌘W only closes a tab."],
        ["Alt+F4", "—", "Quit VS Code via the Windows system shortcut."],
        ["Ctrl+V in terminal", "vs ⌘V on Mac", "Paste into the active terminal."],
        ["Ctrl+Shift+5", "vs ⌃⇧5 on Mac", "Split the terminal."],
        ["Shift+Alt+↓ / ↑", "—", "Copy line down / up. Note: unbound on Linux due to a system conflict."],
        ["Win+.", "—", "Windows emoji picker — works inside VS Code editors and comments."],
        ["F11", "vs ⌃⌘F on Mac", "Toggle full screen."],
        ["Alt+←  /  Alt+→", "vs ⌃-  /  ⌃⇧- on Mac", "Go Back / Forward in nav history."],
        ["WSL integration", "—", "Run code . from inside a WSL terminal — VS Code Server runs in Linux."],
        ["Ctrl+Shift+C", "—", "Open an external Command Prompt or PowerShell at the workspace root."],
        ["Ctrl+K Ctrl+W", "—", "Close all editor tabs."],
        ["window.zoomLevel", "—", "Fine-tune rendering on 4K Windows displays from settings.json."]
      ],
      takeaway: "WSL + VS Code Remote SSH is the most powerful Windows dev setup, period. Native Linux toolchains, native file-system speed for Node/Python, full VS Code UI on Windows. Run code . in your WSL shell and the bridge is automatic."
    }
  ]
};
