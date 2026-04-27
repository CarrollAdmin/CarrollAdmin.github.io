/**
 * Internal keys: same as leaderboard `data-lang` / JSON `category`.
 * Order: Embedded IoT（含 Contiki / FreeRTOS）→ 第二行：OS: Kernel & Driver、Sensing、IFTTT
 */
const DATASET_PLATFORM_KEYS_ROW1 = [
  "All",
  "ESP32",
  "Arduino",
  "STM32",
  "RIOT",
  "Zephyr",
  "Contiki",
  "FreeRTOS"
];

const DATASET_PLATFORM_KEYS_ROW2 = ["Kernel", "Driver", "Sensing", "IFTTT"];

const DATASET_PLATFORM_KEYS = [...DATASET_PLATFORM_KEYS_ROW1, ...DATASET_PLATFORM_KEYS_ROW2];

/** 与 `script.js` 中 `BENCH_KEY_THEME` 一致，用于 `data-theme` 与 dataset 徽章 */
const BENCH_KEY_THEME = {
  ESP32: "embed",
  Arduino: "embed",
  STM32: "embed",
  RIOT: "embed",
  Zephyr: "embed",
  Contiki: "embed",
  FreeRTOS: "embed",
  Kernel: "os",
  Driver: "os",
  Sensing: "sensing",
  IFTTT: "ifttt"
};

/** 第一行 All 后 Embedded；第二行 Sensing、IFTTT 前加分隔（Kernel 由换行与第一行分开） */
const TAB_CLUSTER_START = new Set(["ESP32", "Sensing", "IFTTT"]);

function platformKeyTheme(key) {
  if (key === "All") return "all";
  return BENCH_KEY_THEME[key] || "all";
}

/** UI labels (must stay in sync with script.js `BENCH_LABELS`) */
const BENCH_LABELS = {
  ESP32: "Embedded IoT: ESP32",
  Arduino: "Embedded IoT: Arduino",
  STM32: "Embedded IoT: STM32",
  RIOT: "Embedded IoT: RIOT",
  Zephyr: "Embedded IoT: Zephyr",
  Contiki: "Embedded IoT: Contiki",
  FreeRTOS: "Embedded IoT: FreeRTOS",
  Kernel: "OS: Kernel",
  Sensing: "Sensing",
  IFTTT: "IFTTT",
  Driver: "OS: Driver"
};

function benchLabel(key) {
  if (key === "All") return "All";
  return BENCH_LABELS[key] || key;
}

function categoryDisplayName(raw) {
  const k = String(raw || "").trim();
  if (!k) return "Unknown";
  return benchLabel(k);
}

function categoryThemeClass(raw) {
  const k = String(raw || "").trim();
  const t = k ? BENCH_KEY_THEME[k] : null;
  return t ? `dataset-badge--${t}` : "dataset-badge--all";
}

/** Sort order for category section headers when viewing "All" (unknown names sort after these). */
const DATASET_CATEGORY_ORDER = DATASET_PLATFORM_KEYS.filter((t) => t !== "All");

function datasetEscapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripDependencyText(description) {
  return String(description || "").replace(/\s*Dependent files:\s*.*$/i, "").trim();
}

function extractDependencyFiles(description) {
  const match = String(description || "").match(/Dependent files:\s*(.*)$/i);
  if (!match) return [];
  return match[1]
    .split(";")
    .map((p) => p.trim().replace(/\.$/, ""))
    .filter(Boolean);
}

function dependencyFileContent(file) {
  const files = window.__IFTTT_DEPENDENCY_FILES__ || {};
  if (!Object.prototype.hasOwnProperty.call(files, file)) return null;
  const value = files[file];
  if (typeof value === "string") return value;
  return JSON.stringify(value, null, 2);
}

function dependencyFileHtml(file) {
  const content = dependencyFileContent(file);
  const body = content === null
    ? `<p class="dataset-file-missing">File content is not bundled for this path.</p>`
    : `<pre class="dataset-file-content"><code>${datasetEscapeHtml(content)}</code></pre>`;
  return `
    <li>
      <details class="dataset-file-item">
        <summary><code>${datasetEscapeHtml(file)}</code></summary>
        ${body}
      </details>
    </li>
  `;
}

function normalizeAnswer(answer) {
  if (Array.isArray(answer)) return answer;
  if (typeof answer === "string" && answer.trim()) return [answer];
  return [];
}

function normalizeTestPoints(points) {
  if (!Array.isArray(points)) return [];
  return points.filter((point) => point && typeof point === "object");
}

function normalizeDependencies(deps) {
  if (!Array.isArray(deps)) return [];
  return deps.filter(Boolean).map(String);
}

function sourceLinksHtml(item) {
  const links = [
    item.source_repository,
    item.source_url,
    item.source_dataset_url
  ].filter(Boolean);
  const unique = Array.from(new Set(links));
  if (!unique.length && !item.source) return "";
  return `
    <div class="dataset-card__source">
      ${item.source ? `<span>Source: <strong>${datasetEscapeHtml(item.source)}</strong></span>` : ""}
      ${item.modality ? `<span>Modality: <strong>${datasetEscapeHtml(item.modality)}</strong></span>` : ""}
      ${unique.map((url) => `<a href="${datasetEscapeHtml(url)}" target="_blank" rel="noopener noreferrer">${datasetEscapeHtml(url)}</a>`).join("")}
    </div>
  `;
}

function categoryRank(name) {
  const n = String(name || "").trim().toLowerCase();
  const i = DATASET_CATEGORY_ORDER.findIndex((t) => t.toLowerCase() === n);
  return i === -1 ? 1000 : i;
}

function summarizeCategories(items) {
  const counts = new Map();
  for (const item of items) {
    const key = item.category || "Unknown";
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
}

function renderStats(totalAll, visibleItems) {
  const statsEl = document.getElementById("dataset-stats");
  const categories = summarizeCategories(visibleItems);
  const taskLine =
    visibleItems.length === totalAll
      ? `Tasks: <strong>${visibleItems.length}</strong>`
      : `Tasks: <strong>${visibleItems.length}</strong> of ${totalAll}`;
  statsEl.innerHTML = `
    <div class="task-stat">${taskLine}</div>
    <div class="task-stat">Categories (in view): <strong>${categories.length}</strong></div>
    <div class="task-stat">Track: <strong>${categories.map(([name]) => datasetEscapeHtml(categoryDisplayName(name))).join(", ") || "—"}</strong></div>
  `;
}

function cardHtml(item, index) {
  const answer = normalizeAnswer(item.answer);
  const testPoints = normalizeTestPoints(item.test_points);
  const dependencies = normalizeDependencies(item.dependencies);
  const deps = Array.isArray(item.dependencyFiles) && item.dependencyFiles.length
    ? item.dependencyFiles
    : extractDependencyFiles(item.description);
  const desc = stripDependencyText(item.description);
  const expectedHtml = item.expected_output
    ? `<p class="dataset-card__expected"><strong>Expected output:</strong> ${datasetEscapeHtml(item.expected_output)}</p>`
    : "";
  const testPointsHtml = testPoints.length
    ? `
      <details class="dataset-card__details">
        <summary>Test points (${testPoints.length})</summary>
        <ol class="dataset-answer-list">
          ${testPoints.map((point) => `<li><strong>${datasetEscapeHtml(point.metric || point.id || "check")}:</strong> ${datasetEscapeHtml(point.expected || "")}</li>`).join("")}
        </ol>
      </details>
    `
    : "";
  const dependencyHtml = dependencies.length
    ? `
      <details class="dataset-card__details">
        <summary>Source dependencies (${dependencies.length})</summary>
        <ul class="dataset-file-list">
          ${dependencies.map((dep) => `<li><code>${datasetEscapeHtml(dep)}</code></li>`).join("")}
        </ul>
      </details>
    `
    : "";
  const answerHtml = answer.length
    ? `
      <details class="dataset-card__details">
        <summary>Correct TAP answer (${answer.length})</summary>
        <ol class="dataset-answer-list">
          ${answer.map((rule) => `<li><code>${datasetEscapeHtml(rule)}</code></li>`).join("")}
        </ol>
      </details>
    `
    : "";
  const depsHtml = deps.length
    ? `
      <details class="dataset-card__details">
        <summary>Dependent files (${deps.length})</summary>
        <ul class="dataset-file-list">
          ${deps.map(dependencyFileHtml).join("")}
        </ul>
      </details>
    `
    : "";
  return `
    <article class="dataset-card">
      <div class="dataset-card__head">
        <div class="dataset-card__meta">
          <span class="dataset-badge ${categoryThemeClass(item.category)}">${datasetEscapeHtml(categoryDisplayName(item.category))}</span>
          <span class="dataset-index">#${index}</span>
        </div>
        <h2 class="dataset-card__title">${datasetEscapeHtml(item.name || "Untitled task")}</h2>
      </div>
      <p class="dataset-card__desc">${datasetEscapeHtml(desc || "No description.")}</p>
      ${sourceLinksHtml(item)}
      ${expectedHtml}
      ${testPointsHtml}
      ${answerHtml}
      ${dependencyHtml}
      ${depsHtml}
    </article>
  `;
}

function renderFlatList(listEl, items) {
  listEl.className = "dataset-list";
  if (!items.length) {
    listEl.innerHTML = `
      <div class="dataset-empty">
        No tasks match this category and search.
      </div>
    `;
    return;
  }
  let i = 0;
  listEl.innerHTML = items.map((item) => cardHtml(item, ++i)).join("");
}

function slugCategory(cat) {
  const s = String(cat || "unknown")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return s || "cat";
}

function renderGroupedList(listEl, items) {
  listEl.className = "dataset-groups";
  if (!items.length) {
    listEl.innerHTML = `
      <div class="dataset-empty">
        No tasks match your search.
      </div>
    `;
    return;
  }

  const byCat = new Map();
  for (const item of items) {
    const c = item.category || "Unknown";
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(item);
  }

  const keys = Array.from(byCat.keys()).sort((a, b) => {
    const ra = categoryRank(a);
    const rb = categoryRank(b);
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b);
  });

  let index = 0;
  listEl.innerHTML = keys
    .map((key) => {
      const groupItems = byCat
        .get(key)
        .slice()
        .sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
      const sid = `dataset-group-${slugCategory(key)}`;
      const cards = groupItems.map((item) => cardHtml(item, ++index)).join("");
      return `
        <section class="dataset-group" aria-labelledby="${sid}">
          <h3 class="dataset-group__title" id="${sid}">
            ${datasetEscapeHtml(categoryDisplayName(key))}
            <span class="dataset-group__count">(${groupItems.length})</span>
          </h3>
          <div class="dataset-list dataset-list--inner">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function normalizeItems(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => ({
    category: item.category || "",
    name: item.name || "",
    description: item.description || "",
    answer: item.answer || "",
    dependencyFiles: Array.isArray(item.dependencyFiles) ? item.dependencyFiles : [],
    source: item.source || "",
    source_url: item.source_url || "",
    source_repository: item.source_repository || "",
    source_dataset_url: item.source_dataset_url || "",
    modality: item.modality || "",
    expected_output: item.expected_output || "",
    test_points: normalizeTestPoints(item.test_points),
    dependencies: normalizeDependencies(item.dependencies)
  }));
}

function applySearch(items, keyword) {
  const query = keyword.trim().toLowerCase();
  if (!query) return items;
  return items.filter((item) =>
    [
      item.category,
      item.name,
      item.description,
      item.source,
      item.modality,
      item.expected_output,
      ...normalizeAnswer(item.answer),
      ...normalizeTestPoints(item.test_points).map((point) => [point.id, point.metric, point.expected].join(" ")),
      ...normalizeDependencies(item.dependencies),
      ...(item.dependencyFiles || [])
    ]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );
}

function filterByPlatformTab(items, tab) {
  if (tab === "All") return items;
  const t = tab.trim().toLowerCase();
  return items.filter((item) => (item.category || "").trim().toLowerCase() === t);
}

function buildTabButton(key, activeCat) {
  const active = key === activeCat;
  return `
    <button type="button" class="lang-tab${active ? " active" : ""}${TAB_CLUSTER_START.has(key) ? " lang-tab--cluster" : ""}" role="tab" aria-selected="${active}" data-cat="${datasetEscapeHtml(key)}" data-theme="${platformKeyTheme(key)}">
      ${datasetEscapeHtml(benchLabel(key))}
    </button>
  `;
}

function initCategoryTabs(container, getTab, setTab, refresh) {
  const active = getTab() || "All";
  const row1 = DATASET_PLATFORM_KEYS_ROW1.map((key) => buildTabButton(key, active)).join("");
  const row2 = DATASET_PLATFORM_KEYS_ROW2.map((key) => buildTabButton(key, active)).join("");
  container.innerHTML = `
    ${row1}
    <div class="lang-tabs__row-break" role="presentation" aria-hidden="true"></div>
    ${row2}
  `;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    const cat = btn.getAttribute("data-cat");
    if (!cat || cat === getTab()) return;
    setTab(cat);
    container.querySelectorAll(".lang-tab").forEach((t) => {
      const on = t.getAttribute("data-cat") === cat;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
    });
    refresh();
  });
}

function main() {
  const rawItems = window.__IOTBENCH_DATA__ || [];
  const items = normalizeItems(rawItems);
  const searchEl = document.getElementById("dataset-search");
  const listEl = document.getElementById("dataset-list");
  const tabsEl = document.getElementById("dataset-cat-tabs");

  let currentTab = "All";

  function refresh() {
    const visible = applySearch(filterByPlatformTab(items, currentTab), searchEl.value);
    renderStats(items.length, visible);
    if (currentTab === "All") {
      renderGroupedList(listEl, visible);
    } else {
      renderFlatList(listEl, visible);
    }
  }

  initCategoryTabs(
    tabsEl,
    () => currentTab,
    (c) => {
      currentTab = c;
    },
    refresh
  );

  searchEl.addEventListener("input", refresh);

  refresh();
}

main();
