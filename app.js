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

  function renderTable(section) {
    const headers = section.headers
      .map((h) => `<th>${escapeHTML(h)}</th>`)
      .join("");
    const rows = section.rows
      .map((r) => {
        const tds = r
          .map((cell, i) => {
            const label = section.headers[i];
            const isKey = i < 2; // first two columns = command/action style
            const inner = isKey
              ? `<span class="key">${escapeHTML(cell)}</span>`
              : `<span class="desc">${escapeHTML(cell)}</span>`;
            return `<td data-label="${escapeHTML(label)}">${inner}</td>`;
          })
          .join("");
        return `<tr>${tds}</tr>`;
      })
      .join("");

    return `
      <table class="cheat-table">
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function renderCode(section) {
    return `<pre class="codeblock"><code>${escapeHTML(section.code)}</code></pre>`;
  }

  function renderSection(section) {
    const body =
      section.kind === "code" ? renderCode(section) : renderTable(section);
    return `
      <section class="cheat" id="${section.id}" aria-labelledby="${section.id}-title">
        <h2 id="${section.id}-title">${escapeHTML(section.title)}</h2>
        <div class="section-rule" aria-hidden="true"></div>
        ${body}
        <div class="takeaway">
          <strong>Takeaway / gotcha:</strong> ${escapeHTML(section.takeaway)}
        </div>
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
  tocList.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-toc]");
    if (!a) return;
    closeDrawer();
  });

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
})();
