/* VS Code Mobile Cheat Sheet — renderer + UI behavior */
(function () {
  "use strict";

  const data = window.CHEATSHEET;
  const main = document.getElementById("main");
  const tocList = document.getElementById("toc-list");
  const drawer = document.getElementById("toc-drawer");
  const overlay = document.getElementById("toc-overlay");
  const menuBtn = document.getElementById("menu-btn");
  const tocClose = document.getElementById("toc-close");

  // ---------- Render sections ----------
  const escapeHTML = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  // Render an inline "key" chip OR fall back to plain text for command-palette style hints.
  function renderShortcutToken(text) {
    const t = String(text).trim();
    // Heuristic: treat short tokens (and ones containing modifier symbols) as keychips,
    // longer/descriptive ones (e.g. "Palette: Git: Stage All Changes") as plain text.
    // Render as plain text when the value is descriptive prose; otherwise use a
    // monospace key chip. Pre-checks cover the small set of "prose" entries in data.
    const proseRx = /^(Palette:|Click |Drag |Settings:|GitLens:|vs |code |WSL |window\.|workbench\.|Touch Bar|High DPI|Finder integration)/i;
    const isKeyish = !proseRx.test(t);
    return isKeyish
      ? `<span class="key">${escapeHTML(t)}</span>`
      : `<span class="desc">${escapeHTML(t)}</span>`;
  }

  function renderShortcutCell(section, row) {
    // "Extensions" section: column 0 = name, column 1 = id
    if (section.id === "extensions") {
      return `
        <div class="shortcut">
          <div class="row"><span class="key">${escapeHTML(row[0])}</span></div>
          <div class="row"><span class="plat">id</span><span class="key">${escapeHTML(row[1])}</span></div>
        </div>`;
    }

    // Platform-only sections: row[0] = the shortcut/action, row[1] = optional cross-ref note
    if (section.id === "mac" || section.id === "windows") {
      const platLabel = section.id === "mac" ? "Mac" : "Win";
      const main = row[0];
      const note = row[1];
      const parts = [`<div class="row"><span class="plat">${platLabel}</span>${renderShortcutToken(main)}</div>`];
      if (note && String(note).trim() && note !== "\u2014") {
        parts.push(`<div class="row note"><span class="desc">${escapeHTML(note)}</span></div>`);
      }
      return `<div class="shortcut">${parts.join("")}</div>`;
    }

    const h = section.headers.map((s) => String(s).toLowerCase());
    const macIdx = h.findIndex((x) => x.includes("mac"));
    const winIdx = h.findIndex((x) => x.includes("windows"));
    const mac = macIdx >= 0 ? row[macIdx] : null;
    const win = winIdx >= 0 ? row[winIdx] : null;

    const parts = [];
    if (mac && String(mac).trim() && mac !== "\u2014") {
      parts.push(`<div class="row"><span class="plat">Mac</span>${renderShortcutToken(mac)}</div>`);
    }
    if (win && String(win).trim() && win !== "\u2014") {
      parts.push(`<div class="row"><span class="plat">Win</span>${renderShortcutToken(win)}</div>`);
    }
    return `<div class="shortcut">${parts.join("")}</div>`;
  }

  function renderTable(section) {
    // We always render a 2-column table: "Shortcut" + last header (the description).
    const descHeader = section.headers[section.headers.length - 1];
    const headHTML = `<th>Shortcut</th><th>${escapeHTML(descHeader)}</th>`;

    const rows = section.rows
      .map((row) => {
        const shortcutCell = renderShortcutCell(section, row);
        const desc = row[row.length - 1];
        return `
          <tr>
            <td data-label="Shortcut">${shortcutCell}</td>
            <td data-label="${escapeHTML(descHeader)}"><span class="desc">${escapeHTML(desc)}</span></td>
          </tr>
        `;
      })
      .join("");

    return `
      <table class="cheat-table">
        <thead><tr>${headHTML}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function renderCode(section) {
    return `<pre class="codeblock"><code>${escapeHTML(section.code)}</code></pre>`;
  }

  function renderSection(section, idx) {
    const body =
      section.kind === "code" ? renderCode(section) : renderTable(section);
    // First section opens by default; the rest start collapsed.
    const open = idx === 0 ? " open" : "";
    return `
      <section class="cheat" id="${section.id}" aria-labelledby="${section.id}-title">
        <details class="sec-details"${open}>
          <summary class="sec-summary">
            <h2 id="${section.id}-title">${escapeHTML(section.title)}</h2>
            <span class="sec-chevron" aria-hidden="true">›</span>
          </summary>
          <div class="section-rule" aria-hidden="true"></div>
          <div class="sec-body">
            ${body}
            <div class="takeaway">
              <strong>Takeaway / gotcha:</strong> ${escapeHTML(section.takeaway)}
            </div>
          </div>
        </details>
      </section>
    `;
  }

  main.innerHTML = data.sections.map(renderSection).join("");

  // ---------- TOC ----------
  tocList.innerHTML = data.sections
    .map(
      (s) =>
        `<li><a href="#${s.id}" data-toc>${escapeHTML(s.title)}</a></li>`
    )
    .join("");

  // ---------- Drawer behavior ----------
  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  menuBtn.addEventListener("click", () => {
    drawer.classList.contains("open") ? closeDrawer() : openDrawer();
  });
  overlay.addEventListener("click", closeDrawer);
  tocClose.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
  });
  // TOC click: auto-expand the target section, then close the drawer.
  // Use the click event (vs. just hash navigation) so we can run before the jump.
  tocList.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-toc]");
    if (!a) return;
    const id = a.getAttribute("href").replace(/^#/, "");
    const target = document.getElementById(id);
    if (target) {
      const det = target.querySelector(".sec-details");
      if (det && !det.open) det.open = true;
    }
    closeDrawer();
  });

  // If the page loads with a hash (or the user changes it), expand that section.
  function expandFromHash() {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const det = target.querySelector(".sec-details");
    if (det && !det.open) det.open = true;
    // Re-scroll after expand so the section lands at the top.
    requestAnimationFrame(() => {
      target.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }
  window.addEventListener("hashchange", expandFromHash);
  expandFromHash();

  // ---------- Service worker ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .catch((err) => console.warn("SW registration failed", err));
    });
  }

  // No custom install banner — modern browsers expose a native install affordance
  // in the address bar once the manifest + service worker are valid, and we don't
  // want to obscure cheat-sheet content.

  // ---------- Scroll-to-top FAB ----------
  const fab = document.getElementById("scroll-top");
  if (fab) {
    const onScroll = () => {
      if (window.scrollY > 600) fab.classList.add("show");
      else fab.classList.remove("show");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    fab.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
