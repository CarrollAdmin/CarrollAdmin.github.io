/* =========================
   📊 多榜单 + 多语言数据
========================= */
const datasets = {
  main: {
    All: [

      

      

    ],
    
    ESP32: [],
    Arduino: [],
    STM32: [],
    RIOT: [
      // GPT-4o
      { model: "Direct + GPT-4o", API: 47.6, Header: 48.5, Compliation: 12.4, Pass: 12.4, org: "", date: "" },
      { model: "Auto-CoT + GPT-4o", API: 60.2, Header: 46.9, Compliation: 3.6, Pass: 3.6, org: "", date: "" },
      { model: "MapCoder + GPT-4o", API: 69.2, Header: 53.8, Compliation: 62.2, Pass: 62.2, org: "", date: "" },
      { model: "IoTPilot + GPT-4o", API: 80.6, Header: 85.6, Compliation: 77.8, Pass: 77.8, org: "", date: "" },
      
      // DeepSeek-coder
      { model: "Direct + DeepSeek-coder", API: 41.7, Header: 43.5, Compliation: 8.9, Pass: 8.9, org: "", date: "" },
      { model: "Auto-CoT + DeepSeek-coder", API: 60.5, Header: 51.7, Compliation: 17.3, Pass: 17.3, org: "", date: "" },
      { model: "MapCoder + DeepSeek-coder", API: 69.2, Header: 56.3, Compliation: 62.7, Pass: 62.7, org: "", date: "" },
      { model: "IoTPilot + DeepSeek-coder", API: 82.0, Header: 81.9, Compliation: 80.0, Pass: 80.0, org: "", date: "" }
    ],
    Zephyr: [      // Zephyr (GPT-4o)
      { model: "Direct + GPT-4o", API: 57.1, Header: 53.3, Compliation: 31, Pass: 31, org: "", date: "" },
      { model: "Auto-CoT + GPT-4o", API: 58.4, Header: 56.7, Compliation: 25, Pass: 25, org: "", date: "" },
      { model: "MapCoder + GPT-4o", API: 57.9, Header: 82.7, Compliation: 65, Pass: 65, org: "", date: "" },
      { model: "IoTPilot + GPT-4o", API: 58.6, Header: 87.2, Compliation: 75, Pass: 75, org: "", date: "" },
      
      // Zephyr (DeepSeek-coder)
      { model: "Direct + DeepSeek-coder", API: 55.5, Header: 57.4, Compliation: 33, Pass: 33, org: "", date: "" },
      { model: "Auto-CoT + DeepSeek-coder", API: 47.2, Header: 51.3, Compliation: 33, Pass: 33, org: "", date: "" },
      { model: "MapCoder + DeepSeek-coder", API: 75.6, Header: 56.2, Compliation: 53, Pass: 53, org: "", date: "" },
      { model: "IoTPilot + DeepSeek-coder", API: 76.6, Header: 67.2, Compliation: 80, Pass: 80, org: "", date: "" },],

    Contiki: [      // Contiki (GPT-4o)
      { model: "Direct + GPT-4o", API: 66.2, Header: 42.2, Compliation: 0, Pass: 0, org: "", date: "" },
      { model: "Auto-CoT + GPT-4o", API: 80, Header: 31.1, Compliation: 4, Pass: 4, org: "", date: "" },
      { model: "MapCoder + GPT-4o", API: 72.3, Header: 48.9, Compliation: 52, Pass: 52, org: "", date: "" },
      { model: "IoTPilot + GPT-4o", API: 90.8, Header: 66.2, Compliation: 72, Pass: 72, org: "", date: "" },
      // Contiki (DeepSeek-coder)
      { model: "Direct + DeepSeek-coder", API: 44.6, Header: 33.3, Compliation: 0, Pass: 0, org: "", date: "" },
      { model: "Auto-CoT + DeepSeek-coder", API: 63.1, Header: 37.8, Compliation: 4, Pass: 4, org: "", date: "" },
      { model: "MapCoder + DeepSeek-coder", API: 50.6, Header: 31.1, Compliation: 20, Pass: 20, org: "", date: "" },
      { model: "IoTPilot + DeepSeek-coder", API: 84.6, Header: 71.1, Compliation: 52, Pass: 52, org: "", date: "" },],
    FreeRTOS: [      // FreeRTOS (GPT-4o)
      { model: "Direct + GPT-4o", API: 74.2, Header: 78.8, Compliation: 12, Pass: 12, org: "", date: "" },
      { model: "Auto-CoT + GPT-4o", API: 70.8, Header: 69.4, Compliation: 0, Pass: 0, org: "", date: "" },
      { model: "MapCoder + GPT-4o", API: 69.1, Header: 72.9, Compliation: 28, Pass: 28, org: "", date: "" },
      { model: "IoTPilot + GPT-4o", API: 84.1, Header: 91.8, Compliation: 68, Pass: 68, org: "", date: "" },
      
      // FreeRTOS (DeepSeek-coder)
      { model: "Direct + DeepSeek-coder", API: 74.6, Header: 83.5, Compliation: 36, Pass: 36, org: "", date: "" },
      { model: "Auto-CoT + DeepSeek-coder", API: 76.7, Header: 76.5, Compliation: 20, Pass: 20, org: "", date: "" },
      { model: "MapCoder + DeepSeek-coder", API: 65, Header: 70.6, Compliation: 40, Pass: 40, org: "", date: "" },
      { model: "IoTPilot + DeepSeek-coder", API: 84.2, Header: 92.9, Compliation: 76, Pass: 76, org: "", date: "" }],
    Sensing: [],
    IFTTT: [],
    Driver: []
  },

  flash: {
    All: [
      { model: "⚡ FlashAgent + GPT-4o-mini", API: 28.4, Header: 55.1, Compliation: 39.3, Pass: 15.0, org: "⚡", date: "2025-05-10" }
    ],
    ESP32: [
      { model: "⚡ ESP Flash + Claude", API: 31.2, Header: 60.4, Compliation: 41.9, Pass: 18.7, org: "⚡", date: "2025-05-12" }
    ]
  },

  mini: {
    All: [
      { model: "🟢 MiniAgent + GPT-4o", API: 12.5, Header: 28.1, Compliation: 17.0, Pass: 5.2, org: "🟢", date: "2025-05-08" }
    ]
  }
};

/* =========================
   状态
========================= */
let currentBench = "main";
let currentLang = "All";
let currentSort = { key: "API", asc: false };

const tbody = document.getElementById("leaderboard-body");

/* =========================
   渲染函数
========================= */
function renderTable() {
  let rows = datasets[currentBench][currentLang] || [];

  // Check if the current sort key exists in the dataset; if not, default to first available metric
  let effectiveSortKey = currentSort.key;
  if (rows.length > 0 && !(effectiveSortKey in rows[0])) {
    // Find first numeric metric to sort by
    const firstRow = rows[0];
    const availableMetrics = ['API', 'Header', 'Compliation', 'Pass', 'overall', 'easy', 'medium', 'hard'];
    effectiveSortKey = availableMetrics.find(metric => typeof firstRow[metric] === 'number') || 'API';
  }

  rows = [...rows].sort((a, b) => {
    if (typeof a[effectiveSortKey] === "number" && typeof b[effectiveSortKey] === "number") {
      return currentSort.asc
        ? a[effectiveSortKey] - b[effectiveSortKey]
        : b[effectiveSortKey] - a[effectiveSortKey];
    }
    return 0;
  });

  tbody.innerHTML = "";

  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10">No data available</td></tr>`;
    return;
  }

  rows.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.model}</td>
      <td>${(r.API || 0).toFixed(2)}</td>
      <td>${(r.Header || 0).toFixed(2)}</td>
      <td>${(r.Compliation || 0).toFixed(2)}</td>
      <td>${(r.Pass || 0).toFixed(2)}</td>
      <td>${r.org}</td>
      <td>${r.date}</td>
      <td>–</td>
      <td>–</td>
      <td>🔗</td>
    `;
    tbody.appendChild(tr);
  });
}

/* =========================
   语言切换
========================= */
document.querySelectorAll(".lang-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".lang-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    currentLang = tab.textContent.trim();
    renderTable();
  });
});

/* =========================
   Bench 切换
========================= */
// Uncomment and fix bench tabs functionality
document.querySelectorAll(".bench-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".bench-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentBench = btn.dataset.bench;
    renderTable();
  });
});

/* =========================
   排序功能
========================= */
const headers = document.querySelectorAll("thead tr:nth-child(2) th");

// Updated sort keys to match the actual data fields
const sortKeys = ["", "API", "Header", "Compliation", "Pass"];

headers.forEach((th, index) => {
  if (sortKeys[index]) {
    th.style.cursor = "pointer";
    th.addEventListener("click", () => {
      const key = sortKeys[index];

      if (currentSort.key === key) {
        currentSort.asc = !currentSort.asc;
      } else {
        currentSort.key = key;
        currentSort.asc = false; // Default to descending order
      }

      renderTable();
    });
  }
});

/* 初始渲染 */
renderTable();