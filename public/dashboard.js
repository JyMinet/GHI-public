(function () {
  const LATEST_URL = "/api/latest.json";
  const HISTORY_URL = "/v1/ghi/history?region_id=global";

  function $(id) {
    return document.getElementById(id);
  }

  const dom = {
    fr: {
      price: $("ghi-price-btc"),
      avg: $("ghi-avg-cost-btc"),
      minmax: $("ghi-min-max-cost-btc"),
      marker: $("ghi-gauge-marker"),
      note: $("ghi-quick-note"),
      regionsTbody: $("ghi-regions-rows-fr"),
      historyBox: $("ghi-history-fr"),
    },
    en: {
      price: $("ghi-price-btc-en"),
      avg: $("ghi-avg-cost-btc-en"),
      minmax: $("ghi-min-max-cost-btc-en"),
      marker: $("ghi-gauge-marker-en"),
      note: $("ghi-quick-note-en"),
      regionsTbody: $("ghi-regions-rows-en"),
      historyBox: $("ghi-history-en"),
    },
  };

  // Pas sur la page dashboard -> sortie propre
  const onDashboard =
    !!(dom.fr.price || dom.en.price || dom.fr.regionsTbody || dom.en.regionsTbody);
  if (!onDashboard) return;

  function formatUSD(value) {
    if (!Number.isFinite(value)) return "–";
    return (
      "$" +
      value
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0")
    );
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function setNote(lang, premiumPct) {
    const el = dom[lang].note;
    if (!el || !Number.isFinite(premiumPct)) return;

    const abs = Math.abs(premiumPct).toFixed(1);

    if (lang === "fr") {
      if (premiumPct < 0) {
        el.textContent =
          "Le prix du Bitcoin est en dessous du coût estimé de production (~" +
          abs +
          " %).";
      } else if (premiumPct > 0) {
        el.textContent =
          "Le prix du Bitcoin est au-dessus du coût estimé de production (~" +
          abs +
          " %).";
      } else {
        el.textContent =
          "Le prix du Bitcoin est très proche du coût estimé de production.";
      }
    } else {
      if (premiumPct < 0) {
        el.textContent =
          "Bitcoin price is below the estimated production cost (~" +
          abs +
          " %).";
      } else if (premiumPct > 0) {
        el.textContent =
          "Bitcoin price is above the estimated production cost (~" +
          abs +
          " %).";
      } else {
        el.textContent =
          "Bitcoin price is very close to the estimated production cost.";
      }
    }
  }

  function showError(message) {
    console.error("[GHI sandbox] Dashboard error:", message);

    ["fr", "en"].forEach((lang) => {
      const note = dom[lang].note;
      if (note) note.textContent = "[GHI sandbox] " + message;
    });
  }

  function applyIndicator(price, cost, premiumPct) {
    const minCost = Math.round(cost * 0.91);
    const maxCost = Math.round(cost * 1.09);
    const gaugePos = clamp(50 + premiumPct, 0, 100);

    ["fr", "en"].forEach((lang) => {
      const view = dom[lang];

      if (view.price) view.price.textContent = formatUSD(price);
      if (view.avg) view.avg.textContent = formatUSD(cost);
      if (view.minmax) {
        view.minmax.textContent = formatUSD(minCost) + " / " + formatUSD(maxCost);
      }
      if (view.marker) view.marker.style.left = gaugePos.toFixed(1) + "%";

      setNote(lang, premiumPct);
    });
  }

  function renderRegionsTable(lang, regions) {
    const tbody = dom[lang].regionsTbody;
    if (!tbody) return;

    if (!Array.isArray(regions) || regions.length === 0) {
      tbody.innerHTML =
        `<tr><td colspan="6">${lang === "fr" ? "Aucune donnée." : "No data."}</td></tr>`;
      return;
    }

    const rows = regions
      .slice()
      .sort(
        (a, b) =>
          Number(b.share_of_hashrate_pct) - Number(a.share_of_hashrate_pct)
      )
      .map((r) => {
        const name = String(r.name || r.code || "–");
        const cost = Number(r.hashcost_usd);
        const share = Number(r.share_of_hashrate_pct);

        return `
          <tr>
            <td>${name}</td>
            <td>–</td>
            <td>${formatUSD(cost)}</td>
            <td>–</td>
            <td>${Number.isFinite(share) ? share.toFixed(1) + " %" : "–"}</td>
            <td>latest.json</td>
          </tr>
        `;
      })
      .join("");

    tbody.innerHTML = rows;
  }

  async function loadLatest() {
    const resp = await fetch(LATEST_URL, { cache: "no-store" });
    if (!resp.ok) throw new Error("HTTP " + resp.status + " on " + LATEST_URL);

    const data = await resp.json();
    if (!data || typeof data !== "object") {
      throw new Error("Invalid JSON structure (expected object).");
    }

    const price = Number(data.spot_price_usd);
    const cost = Number(data.global_hashcost_usd);
    const premium = Number(data.premium_vs_cost_pct);

    if (!Number.isFinite(price) || !Number.isFinite(cost) || !Number.isFinite(premium)) {
      throw new Error(
        "Missing or invalid numeric fields in latest.json (spot_price_usd / global_hashcost_usd / premium_vs_cost_pct)."
      );
    }

    applyIndicator(price, cost, premium);

    renderRegionsTable("fr", data.regions);
    renderRegionsTable("en", data.regions);
  }

  async function loadHistory() {
    async function setHistory(lang, html) {
      const el = dom[lang].historyBox;
      if (el) el.innerHTML = html;
    }

    // si le conteneur n’existe pas, pas besoin de fetch
    const hasBox = !!(dom.fr.historyBox || dom.en.historyBox);
    if (!hasBox) return;

    try {
      const resp = await fetch(HISTORY_URL, { cache: "no-store" });
      if (!resp.ok) throw new Error("HTTP " + resp.status);

      const payload = await resp.json();
      const points = Array.isArray(payload.points) ? payload.points : [];

      if (points.length === 0) {
        await setHistory("fr", "Historique indisponible.");
        await setHistory("en", "History unavailable.");
        return;
      }

      const last = points.slice(-10).map((p) => {
        const d = String(p.date || "–");
        const avg = formatUSD(Number(p.avg_cost_usd));
        return `<li><strong>${d}</strong> — ${avg}</li>`;
      }).join("");

      await setHistory("fr", `<ul>${last}</ul>`);
      await setHistory("en", `<ul>${last}</ul>`);
    } catch (e) {
      await setHistory("fr", `Historique non chargé (source: <code>${HISTORY_URL}</code>).`);
      await setHistory("en", `History not loaded (source: <code>${HISTORY_URL}</code>).`);
    }
  }

  async function boot() {
    try {
      await loadLatest();
      await loadHistory();
    } catch (err) {
      showError(err && err.message ? err.message : String(err));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();