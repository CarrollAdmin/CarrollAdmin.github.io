(function () {
  const form = document.getElementById("submit-form");
  const fileInput = document.getElementById("method-zip");
  const scriptInput = document.getElementById("script-path");
  const benchmarkList = document.getElementById("benchmark-list");
  const selectAllButton = document.getElementById("select-all-benches");
  const submitButton = document.getElementById("submit-job");
  const message = document.getElementById("submit-message");
  const statusSection = document.getElementById("job-status");
  const jobState = document.getElementById("job-state");
  const jobMeta = document.getElementById("job-meta");
  const jobSummary = document.getElementById("job-summary");
  const resultList = document.getElementById("result-list");

  let benchmarks = [];
  let pollTimer = null;

  async function main() {
    try {
      const response = await fetch("/api/benchmarks");
      if (!response.ok) {
        throw new Error(`Failed to load benchmarks: HTTP ${response.status}`);
      }
      const payload = await response.json();
      benchmarks = payload.benchmarks || [];
      renderBenchmarks();
    } catch (error) {
      benchmarkList.innerHTML = `<p class="submit-error">${escapeHtml(error.message)}</p>`;
    }
  }

  function renderBenchmarks() {
    if (!benchmarks.length) {
      benchmarkList.innerHTML = '<p class="submit-help">No RIOT benchmarks found.</p>';
      return;
    }

    benchmarkList.innerHTML = benchmarks.map((bench, index) => `
      <label class="benchmark-option">
        <input type="checkbox" name="benchmark" value="${escapeAttr(bench.name)}" ${index === 0 ? "checked" : ""} />
        <span>
          <strong>${escapeHtml(bench.name)}</strong>
          <small>${escapeHtml(bench.description || "")}</small>
        </span>
      </label>
    `).join("");
  }

  selectAllButton.addEventListener("click", () => {
    const boxes = Array.from(document.querySelectorAll('input[name="benchmark"]'));
    const shouldCheck = boxes.some((box) => !box.checked);
    boxes.forEach((box) => {
      box.checked = shouldCheck;
    });
    selectAllButton.textContent = shouldCheck ? "Clear all" : "Select all";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const selected = Array.from(document.querySelectorAll('input[name="benchmark"]:checked')).map((box) => box.value);
    if (!fileInput.files.length) {
      setMessage("Please upload a method source zip.", true);
      return;
    }
    if (!selected.length) {
      setMessage("Please select at least one benchmark.", true);
      return;
    }

    const data = new FormData();
    data.append("method_zip", fileInput.files[0]);
    data.append("script_path", scriptInput.value.trim() || "run.py");
    data.append("benchmarks", JSON.stringify(selected));

    submitButton.disabled = true;
    setMessage("Submitting evaluation job...", false);

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        body: data,
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || `Submit failed: HTTP ${response.status}`);
      }
      statusSection.hidden = false;
      renderJob(payload);
      setMessage("Job submitted. Polling results...", false);
      startPolling(payload.id);
    } catch (error) {
      setMessage(error.message, true);
      submitButton.disabled = false;
    }
  });

  function startPolling(jobId) {
    if (pollTimer) {
      clearInterval(pollTimer);
    }
    pollJob(jobId);
    pollTimer = setInterval(() => pollJob(jobId), 3000);
  }

  async function pollJob(jobId) {
    try {
      const response = await fetch(`/api/jobs/${encodeURIComponent(jobId)}`);
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || `Poll failed: HTTP ${response.status}`);
      }
      renderJob(payload);
      if (payload.status === "success" || payload.status === "failed") {
        clearInterval(pollTimer);
        pollTimer = null;
        submitButton.disabled = false;
        setMessage(`Job finished with status: ${payload.status}`, payload.status === "failed");
      }
    } catch (error) {
      clearInterval(pollTimer);
      pollTimer = null;
      submitButton.disabled = false;
      setMessage(error.message, true);
    }
  }

  function renderJob(job) {
    jobState.textContent = job.status || "unknown";
    jobState.className = `status-pill status-pill--${job.status || "unknown"}`;
    jobMeta.textContent = `Job ${job.id || ""} · updated ${job.updated_at || ""}`;
    renderSummary(job.summary || calculateSummary(job.items || []));

    resultList.innerHTML = (job.items || []).map((item) => `
      <article class="result-card">
        <div class="submit-row">
          <h3>${escapeHtml(item.name)}</h3>
          <span class="status-pill status-pill--${escapeAttr(item.status || "pending")}">${escapeHtml(item.status || "pending")}</span>
        </div>
        <div class="result-metrics">
          <span>Compile: ${item.compile_success ? "success" : "pending/failed"}</span>
          <span>Run: ${item.run_success ? "success" : "pending/failed"}</span>
        </div>
        ${item.error ? `<p class="submit-error">${escapeHtml(item.error)}</p>` : ""}
        ${renderDetails("Generated application", item.generated_app)}
        ${renderDetails("Generator stderr", item.generator_stderr)}
        ${renderDetails("Judge output", item.judge_stdout)}
        ${renderDetails("Remote returns / logs", item.judge_stderr)}
        ${renderDetails("Extracted logs", item.logs)}
      </article>
    `).join("");
  }

  function renderSummary(summary) {
    const passAt1 = Number(summary.pass_at_1 || 0);
    jobSummary.innerHTML = `
      <div class="summary-card">
        <strong>pass@1</strong>
        <span>${(passAt1 * 100).toFixed(1)}%</span>
      </div>
      <div class="summary-card">
        <strong>Passed</strong>
        <span>${Number(summary.passed || 0)} / ${Number(summary.total || 0)}</span>
      </div>
      <div class="summary-card">
        <strong>Finished</strong>
        <span>${Number(summary.finished || 0)} / ${Number(summary.total || 0)}</span>
      </div>
    `;
  }

  function calculateSummary(items) {
    const total = items.length;
    const passed = items.filter((item) => item.compile_success && item.run_success).length;
    const failed = items.filter((item) => item.status === "failed").length;
    const finished = items.filter((item) => item.status === "success" || item.status === "failed").length;
    return {
      total,
      passed,
      failed,
      finished,
      pass_at_1: total ? passed / total : 0,
    };
  }

  function renderDetails(title, content) {
    if (!content) {
      return "";
    }
    return `
      <details class="result-details">
        <summary>${escapeHtml(title)}</summary>
        <pre>${escapeHtml(content)}</pre>
      </details>
    `;
  }

  function setMessage(text, isError) {
    message.textContent = text;
    message.classList.toggle("submit-error", Boolean(isError));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

  main();
})();
