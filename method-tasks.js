const CSV_URL = "data/iotbench.csv";

async function loadCsvText() {
  const embedded =
    typeof window.__IOTBENCH_CSV__ === "string"
      ? window.__IOTBENCH_CSV__.trim()
      : "";

  if (location.protocol === "file:") {
    if (embedded) return embedded;
    throw new Error(
      "file:// cannot load CSV via fetch. Use a local server (e.g. python -m http.server) or ensure data/iotbench-inline.js is loaded."
    );
  }

  try {
    const res = await fetch(CSV_URL);
    if (res.ok) return await res.text();
  } catch (_) {
    /* CORS, offline, etc. */
  }

  if (embedded) return embedded;
  throw new Error("Failed to fetch " + CSV_URL + " and no embedded CSV.");
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length);
  if (!lines.length) return [];
  const header = lines[0].split(",").map((h) => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",").map((p) => p.trim());
    if (parts.every((p) => p === "")) continue;
    const o = {};
    header.forEach((h, j) => {
      o[h] = parts[j] ?? "";
    });
    if (!o.Method) continue;
    rows.push(o);
  }
  return rows;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function main() {
  const params = new URLSearchParams(location.search);
  const method = params.get("method");
  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const statsEl = document.getElementById("task-stats");
  const tbody = document.getElementById("task-body");

  if (!method) {
    titleEl.textContent = "No method selected";
    subtitleEl.textContent = "Open this page from the All leaderboard (click a method name) or add ?method=… to the URL.";
    statsEl.innerHTML = "";
    tbody.innerHTML = `<tr><td colspan="3" class="empty-cell">No data</td></tr>`;
    return;
  }

  titleEl.textContent = method;

  let rows;
  try {
    const text = await loadCsvText();
    rows = parseCsv(text).filter((r) => r.Method === method);
  } catch (e) {
    subtitleEl.textContent = "Could not load task data.";
    statsEl.innerHTML = `<p class="task-stat task-stat--error">${escapeHtml(String(e.message))}</p>`;
    tbody.innerHTML = `<tr><td colspan="3" class="empty-cell">Failed to load task CSV (try http:// or check <code>data/iotbench-inline.js</code>)</td></tr>`;
    return;
  }

  rows.sort((a, b) => a.Program.localeCompare(b.Program));

  const n = rows.length;
  const correct = rows.filter((r) => String(r.Result).trim() === "1").length;
  const acc = n > 0 ? (100 * correct) / n : 0;

  subtitleEl.textContent =
    "RIOT benchmark · task-level pass@1 (binary per task) · sourced from iotbench.csv";

  statsEl.innerHTML = `
    <div class="task-stat">Tasks: <strong>${n}</strong></div>
    <div class="task-stat">Passed: <strong>${correct}</strong></div>
    <div class="task-stat">Mean accuracy: <strong>${acc.toFixed(2)}%</strong></div>
  `;

  if (n === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="empty-cell">No rows for this method in CSV.</td></tr>`;
    return;
  }

  tbody.innerHTML = "";
  rows.forEach((r, idx) => {
    const ok = String(r.Result).trim() === "1";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="metric">${idx + 1}</td>
      <td class="td-task-name">${escapeHtml(r.Program)}</td>
      <td>${ok ? '<span class="result-pass">Pass</span>' : '<span class="result-fail">Fail</span>'}</td>
    `;
    tbody.appendChild(tr);
  });
}

main();
