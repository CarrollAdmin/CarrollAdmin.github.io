/* =========================
   📊 多榜单 + 多语言数据
========================= */
/** RIOT 结果来自 data/iotbench.csv（22 tasks/method）任务级平均 pass@1；其余 benchmark 暂无数据 */
const datasets = {
  main: {
    All: [],
    ESP32: [],
    Arduino: [],
    STM32: [],
    RIOT: [
      { model: "AutoIoT + GPT-5.4", pass1: 90.91, org: "", date: "" },
      { model: "AutoIoT + DeepSeek V3.2", pass1: 90.91, org: "", date: "" },
      { model: "IoTPilot + DeepSeek V3.2", pass1: 90.91, org: "", date: "" },
      { model: "IoTPilot+ GPT-5.4", pass1: 81.82, org: "", date: "" },
      { model: "SELF-DEBUG + GPT-5.4", pass1: 81.82, org: "", date: "" },
      { model: "Cursor + Composer 2 Fast", pass1: 59.09, org: "", date: "" },
      { model: "SELF-DEBUG + DeepSeek V3.2", pass1: 59.09, org: "", date: "" },
      { model: "Claude + Claude Sonnet 4.6", pass1: 50.0, org: "", date: "" },
      { model: "Cursor + GPT-5.4", pass1: 50.0, org: "", date: "" },
      { model: "ChatIoT + DeepSeek V3.2", pass1: 45.45, org: "", date: "" },
      { model: "ChatIoT + GPT-5.4", pass1: 40.91, org: "", date: "" },
      { model: "Claude Code + GPT5.4", pass1: 40.91, org: "", date: "" }
    ],
    Zephyr: [],
    Contiki: [],
    FreeRTOS: [],
    Kernel: [],
    Sensing: [],
    IFTTT: [],
    Driver: []
  }
};

/** Normalize rows: pass@1 / pass@5 / pass@10; legacy `Pass` → pass1 */
function normalizeRow(r) {
  const pass1 =
    typeof r.pass1 === "number"
      ? r.pass1
      : typeof r.Pass === "number"
        ? r.Pass
        : null;
  const pass5 = typeof r.pass5 === "number" ? r.pass5 : null;
  const pass10 = typeof r.pass10 === "number" ? r.pass10 : null;
  return {
    model: r.model,
    pass1,
    pass5,
    pass10,
    org: r.org ?? "",
    date: r.date ?? ""
  };
}

function normalizeDatasetSlab(slab) {
  if (!slab || typeof slab !== "object") return;
  for (const k of Object.keys(slab)) {
    if (Array.isArray(slab[k])) {
      slab[k] = slab[k].map(normalizeRow);
    }
  }
}

for (const name of Object.keys(datasets)) {
  normalizeDatasetSlab(datasets[name]);
}

/**
 * “All” pivot 列顺序：Embedded IoT（含 Contiki / FreeRTOS）→ OS: Kernel & Driver → Sensing → IFTTT
 * （与首页 tab、数据集页 tab 一致）
 */
const BENCHMARK_COLUMNS = [
  "ESP32",
  "Arduino",
  "STM32",
  "RIOT",
  "Zephyr",
  "Contiki",
  "FreeRTOS",
  "Kernel",
  "Driver",
  "Sensing",
  "IFTTT"
];

/** 与 CSS `data-theme` / 表头 `th-bench--*` 一致，用于表头色条与标签同色 */
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

function benchColumnTheme(b) {
  return BENCH_KEY_THEME[b] || "all";
}

/** UI labels (data keys above stay stable for datasets + JSON `category`) */
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
  return BENCH_LABELS[key] || key;
}

const DETAIL_METRICS = ["pass1", "pass5", "pass10"];

/** All 视图：按「跨 benchmark 的 pass@1 平均」排序时使用 */
const PIVOT_SORT_AVG = "__avg__";

/* =========================
   状态
========================= */
let currentBench = "main";
let currentLang = "All";
let currentSort = { key: PIVOT_SORT_AVG, asc: false };

const tbody = document.getElementById("leaderboard-body");
const thead = document.getElementById("leaderboard-thead");
const tableEl = document.getElementById("leaderboard-table");
const hintEl = document.getElementById("leaderboard-hint");

function normalizeSortKey() {
  if (currentLang === "All") {
    const ok =
      currentSort.key === PIVOT_SORT_AVG ||
      BENCHMARK_COLUMNS.includes(currentSort.key);
    if (!ok) {
      currentSort = { key: PIVOT_SORT_AVG, asc: false };
    }
  } else if (!DETAIL_METRICS.includes(currentSort.key)) {
    currentSort = { key: "pass1", asc: false };
  }
}

function fmtPassMetric(v) {
  return typeof v === "number" ? v.toFixed(2) : '<span class="empty-cell">—</span>';
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** 前三名：金 / 银 / 铜奖牌 SVG（绶带 + 圆牌） */
function medalSvg(fillDisk, fillRibbonDark, fillRibbonLight, stroke) {
  return `<svg class="rank-medal-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5.5 3.5 7.5 11h9l2-7.5h-3L12 8.5 8.5 3.5z" fill="${fillRibbonDark}" stroke="${stroke}" stroke-width="0.9" stroke-linejoin="round"/>
  <path d="M7.5 11 9.5 3.5h5L16.5 11" fill="none" stroke="${stroke}" stroke-width="0.75" stroke-linecap="round" opacity="0.5"/>
  <circle cx="12" cy="15.5" r="5.2" fill="${fillDisk}" stroke="${stroke}" stroke-width="1"/>
  <circle cx="12" cy="15.5" r="2.5" fill="none" stroke="${fillRibbonLight}" stroke-width="0.85" opacity="0.9"/>
</svg>`;
}

function rankBadgeHtml(rankIndex) {
  if (rankIndex === 0) {
    return `<span class="rank-badge rank-badge--medal" title="金牌">${medalSvg("#fcd34d", "#b45309", "#fef3c7", "#92400e")}</span>`;
  }
  if (rankIndex === 1) {
    return `<span class="rank-badge rank-badge--medal" title="银牌">${medalSvg("#f1f5f9", "#475569", "#e2e8f0", "#334155")}</span>`;
  }
  if (rankIndex === 2) {
    return `<span class="rank-badge rank-badge--medal" title="铜牌">${medalSvg("#fdba74", "#9a3412", "#ffedd5", "#7c2d12")}</span>`;
  }
  return "";
}

/** @param {string} [detailHref] If set (All view), method name links to per-task page */
function fmtModelCell(model, rowIndex, detailHref) {
  const nameEscaped = escapeHtml(model);
  const nameInner =
    detailHref != null && detailHref !== ""
      ? `<a class="model-link" href="${escapeHtml(detailHref)}">${nameEscaped}</a>`
      : nameEscaped;
  const badge = rowIndex < 3 ? rankBadgeHtml(rowIndex) : "";
  if (!badge) return nameInner;
  return `<span class="model-cell">${badge}<span class="model-cell__name">${nameInner}</span></span>`;
}

/** model -> { RIOT: pass@1, ... } per benchmark */
function buildPassPivot(slab) {
  const byModel = new Map();
  for (const bench of BENCHMARK_COLUMNS) {
    for (const r of slab[bench] || []) {
      if (!byModel.has(r.model)) byModel.set(r.model, {});
      const v = r.pass1;
      byModel.get(r.model)[bench] = typeof v === "number" ? v : null;
    }
  }
  return byModel;
}

/** 仅对已有数值的 benchmark 求算术平均 pass@1；全无则 null */
function computeMethodPass1Average(byModel, method) {
  const row = byModel.get(method);
  if (!row) return null;
  let sum = 0;
  let n = 0;
  for (const b of BENCHMARK_COLUMNS) {
    const v = row[b];
    if (typeof v === "number") {
      sum += v;
      n += 1;
    }
  }
  return n > 0 ? sum / n : null;
}

function renderTheadDetail() {
  thead.innerHTML = `
    <tr>
      <th>Model</th>
      <th colspan="3">Metrics (%)</th>
      <th>Org</th>
      <th>Date</th>
      <th>Logs</th>
      <th>Trajs</th>
      <th>Site</th>
    </tr>
    <tr class="subhead">
      <th></th>
      <th class="sortable" data-sort-key="pass1">pass@1</th>
      <th class="sortable" data-sort-key="pass5">pass@5</th>
      <th class="sortable" data-sort-key="pass10">pass@10</th>
      <th colspan="5"></th>
    </tr>
  `;
}

function renderTheadPivot() {
  const benchHeaders = BENCHMARK_COLUMNS.map(
    (b) =>
      `<th class="sortable th-bench-col th-bench--${benchColumnTheme(b)}" data-sort-key="${b}" data-theme="${benchColumnTheme(b)}">${escapeHtml(benchLabel(b))}</th>`
  ).join("");
  const subRow = [
    `<th class="sub-metric-pivot">mean</th>`,
    ...BENCHMARK_COLUMNS.map(() => `<th class="sub-metric-pivot">pass@1</th>`)
  ].join("");
  thead.innerHTML = `
    <tr>
      <th rowspan="2" class="th-method">Method</th>
      <th class="sortable" data-sort-key="${PIVOT_SORT_AVG}">Avg</th>
      ${benchHeaders}
    </tr>
    <tr class="subhead pivot-sub">
      ${subRow}
    </tr>
  `;
}

function pivotSortCompare(byModel, a, b, sortKey) {
  let va;
  let vb;
  if (sortKey === PIVOT_SORT_AVG) {
    va = computeMethodPass1Average(byModel, a);
    vb = computeMethodPass1Average(byModel, b);
  } else {
    va = byModel.get(a)?.[sortKey];
    vb = byModel.get(b)?.[sortKey];
  }
  const aOk = typeof va === "number";
  const bOk = typeof vb === "number";
  if (!aOk && !bOk) return a.localeCompare(b);
  if (!aOk) return 1;
  if (!bOk) return -1;
  return currentSort.asc ? va - vb : vb - va;
}

/* =========================
   渲染
========================= */
function renderTable() {
  normalizeSortKey();

  const isAllView = currentLang === "All";
  tableEl.classList.toggle("pivot", isAllView);

  if (hintEl) {
    hintEl.textContent = isAllView
      ? "All: Avg = mean pass@1 over benchmarks with data · default sort by Avg (desc). Click a method name for RIOT per-task breakdown (iotbench.csv). Click Avg or a platform to re-sort."
      : "Single benchmark: pass@1, pass@5, pass@10 (%). Click a metric header to sort.";
  }

  if (isAllView) {
    renderTheadPivot();
    const slab = datasets[currentBench];
    const byModel = buildPassPivot(slab);
    const methods = Array.from(byModel.keys()).sort((a, b) =>
      pivotSortCompare(byModel, a, b, currentSort.key)
    );

    tbody.innerHTML = "";
    const emptyCols = 2 + BENCHMARK_COLUMNS.length;

    if (methods.length === 0) {
      tbody.innerHTML = `<tr><td colspan="${emptyCols}">No data available</td></tr>`;
      return;
    }

    methods.forEach((m, rowIndex) => {
      const tr = document.createElement("tr");
      const avg = computeMethodPass1Average(byModel, m);
      const avgCell = `<td class="metric metric-avg">${fmtPassMetric(avg)}</td>`;
      const cells = BENCHMARK_COLUMNS.map((bench) => {
        const v = byModel.get(m)[bench];
        return `<td class="metric">${fmtPassMetric(v)}</td>`;
      }).join("");
      const detailHref = `method-tasks.html?method=${encodeURIComponent(m)}`;
      tr.innerHTML = `<td class="td-model">${fmtModelCell(m, rowIndex, detailHref)}</td>${avgCell}${cells}`;
      tbody.appendChild(tr);
    });
    return;
  }

  renderTheadDetail();
  let rows = datasets[currentBench][currentLang] || [];

  let effectiveSortKey = currentSort.key;
  if (rows.length > 0 && !(effectiveSortKey in rows[0])) {
    const firstRow = rows[0];
    effectiveSortKey =
      DETAIL_METRICS.find((metric) => typeof firstRow[metric] === "number") ||
      "pass1";
  }

  rows = [...rows].sort((a, b) => {
    const va = a[effectiveSortKey];
    const vb = b[effectiveSortKey];
    const aOk = typeof va === "number";
    const bOk = typeof vb === "number";
    if (!aOk && !bOk) return 0;
    if (!aOk) return 1;
    if (!bOk) return -1;
    return currentSort.asc ? va - vb : vb - va;
  });

  tbody.innerHTML = "";

  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9">No data available</td></tr>`;
    return;
  }

  const siteIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  rows.forEach((r, rowIndex) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="td-model">${fmtModelCell(r.model, rowIndex)}</td>
      <td class="metric">${fmtPassMetric(r.pass1)}</td>
      <td class="metric">${fmtPassMetric(r.pass5)}</td>
      <td class="metric">${fmtPassMetric(r.pass10)}</td>
      <td>${r.org || '<span class="empty-cell">—</span>'}</td>
      <td>${r.date || '<span class="empty-cell">—</span>'}</td>
      <td class="empty-cell">—</td>
      <td class="empty-cell">—</td>
      <td><a href="#" class="table-link" aria-label="Open site">${siteIcon}</a></td>
    `;
    tbody.appendChild(tr);
  });
}

/* =========================
   平台切换
========================= */
document.querySelectorAll(".lang-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".lang-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const lang = tab.dataset.lang;
    currentLang = lang != null && lang !== "" ? lang : tab.textContent.trim();
    if (currentLang === "All") {
      currentSort = { key: PIVOT_SORT_AVG, asc: false };
    } else {
      currentSort = { key: "pass1", asc: false };
    }
    renderTable();
  });
});

document.querySelectorAll(".bench-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".bench-tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    currentBench = btn.dataset.bench;
    if (currentLang === "All") {
      currentSort = { key: PIVOT_SORT_AVG, asc: false };
    } else {
      currentSort = { key: "pass1", asc: false };
    }
    renderTable();
  });
});

/* =========================
   表头排序（委托）
========================= */
tableEl.addEventListener("click", (e) => {
  const th = e.target.closest("th.sortable");
  if (!th) return;
  const key = th.dataset.sortKey;
  if (!key) return;

  if (currentLang === "All") {
    if (key !== PIVOT_SORT_AVG && !BENCHMARK_COLUMNS.includes(key)) return;
  } else if (!DETAIL_METRICS.includes(key)) return;

  if (currentSort.key === key) {
    currentSort.asc = !currentSort.asc;
  } else {
    currentSort.key = key;
    currentSort.asc = false;
  }
  renderTable();
});

renderTable();
