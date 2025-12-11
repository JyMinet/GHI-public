// public/dashboard.js
// GHI Dashboard – Price vs Cost indicator (FR + EN)

(function () {
  const API_URL = "/api/latest.json";

  function $(id) {
    return document.getElementById(id);
  }

  const els = {
    fr: {
      price: $("ghi-price-btc-fr"),
      avgCost: $("ghi-avg-cost-btc-fr"),
      minMax: $("ghi-min-max-cost-btc-fr"),
      gaugeMarker: $("ghi-gauge-marker-fr"),
      quickNote: $("ghi-quick-note-fr"),
    },
    en: {
      price: $("ghi-price-btc-en"),
      avgCost: $("ghi-avg-cost-btc-en"),
      minMax: $("ghi-min-max-cost-btc-en"),
      gaugeMarker: $("ghi-gauge-marker-en"),
      quickNote: $("ghi-quick-note-en"),
    },
  };

  function sideReady(side) {
    const dom = els[side];
    return dom && dom.price && dom.avgCost && dom.minMax && dom.gaugeMarker && dom.quickNote;
  }

  function formatUSD(value) {
    if (typeof value !== "number" || !isFinite(value)) {
      return "–";
    }
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  }

  function parseNumber(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }

  function updateSide(side, price, costAvg, costMin, costMax) {
    if (!sideReady(side)) {
      return;
    }

    const dom = els[side];
    const priceNum = parseNumber(price);
    const avgNum = parseNumber(costAvg);
    const minNum = parseNumber(costMin);
    const maxNum = parseNumber(costMax);

    if (
      priceNum === null ||
      avgNum === null ||
      minNum === null ||
      maxNum === null ||
      avgNum <= 0
    ) {
      showError("Invalid numeric data from API.");
      return;
    }

    dom.price.textContent = formatUSD(priceNum);
    dom.avgCost.textContent = formatUSD(avgNum);
    dom.minMax.textContent = `${formatUSD(minNum)} / ${formatUSD(maxNum)}`;

    const ratio = priceNum / avgNum;
    let position;
    if (ratio <= 0.5) {
      position = 0;
    } else if (ratio >= 1.5) {
      position = 100;
    } else {
      position = ((ratio - 0.5) / 1.0) * 100;
    }

    dom.gaugeMarker.style.left = `${position}%`;
    dom.gaugeMarker.classList.remove(
      "ghi-zone-below",
      "ghi-zone-near",
      "ghi-zone-above"
    );

    if (ratio < 0.9) {
      dom.gaugeMarker.classList.add("ghi-zone-below");
    } else if (ratio <= 1.2) {
      dom.gaugeMarker.classList.add("ghi-zone-near");
    } else {
      dom.gaugeMarker.classList.add("ghi-zone-above");
    }

    let note;
    if (ratio < 0.9) {
      note =
        side === "fr"
          ? "Prix significativement sous le coût moyen estimé."
          : "Price significantly below estimated average cost.";
    } else if (ratio <= 1.2) {
      note =
        side === "fr"
          ? "Prix dans la zone proche du coût moyen estimé."
          : "Price in the area around estimated average cost.";
    } else {
      note =
        side === "fr"
          ? "Prix significativement au-dessus du coût moyen estimé."
          : "Price significantly above estimated average cost.";
    }
    dom.quickNote.textContent = note;
  }

  function updateFromData(data) {
    if (!data || typeof data !== "object") {
      showError("Invalid API payload (not an object).");
      return;
    }

    const snapshot = data.snapshot;
    if (!snapshot) {
      showError("Missing snapshot in /api/latest.json.");
      return;
    }

    const regions = Array.isArray(snapshot.regions) ? snapshot.regions : [];
    const globalRegion =
      regions.find((r) => r.id === "global") ||
      regions.find((r) => r.id === "world") ||
      regions[0];

    if (!globalRegion) {
      showError("No global region found in snapshot.");
      return;
    }

    const price = snapshot.price_usd ?? snapshot.price ?? null;
    const costAvg =
      globalRegion.avg_cost_usd ?? globalRegion.cost_avg_usd ?? null;
    const costMin =
      globalRegion.min_cost_usd ?? globalRegion.cost_min_usd ?? null;
    const costMax =
      globalRegion.max_cost_usd ?? globalRegion.cost_max_usd ?? null;

    if (price == null || costAvg == null || costMin == null || costMax == null) {
      showError("Missing cost/price fields in snapshot.");
      return;
    }

    // Même valeurs pour FR et EN
    updateSide("fr", price, costAvg, costMin, costMax);
    updateSide("en", price, costAvg, costMin, costMax);
  }

  function showError(message) {
    const msg = "[GHI sandbox] " + message;
    if (els.fr.quickNote) {
      els.fr.quickNote.textContent = msg;
    }
    if (els.en.quickNote) {
      els.en.quickNote.textContent = msg;
    }
    console.error(msg);
  }

  async function load() {
    if (
      !document.getElementById("fr-dashboard") &&
      !document.getElementById("en-dashboard")
    ) {
      return;
    }

    if (!sideReady("fr") && !sideReady("en")) {
      showError("Dashboard DOM elements missing.");
      return;
    }

    try {
      const resp = await fetch(API_URL, { cache: "no-store" });
      if (!resp.ok) {
        throw new Error("HTTP " + resp.status + " on " + API_URL);
      }
      const data = await resp.json();
      updateFromData(data);
    } catch (err) {
      showError(err.message || String(err));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", load);
  } else {
    load();
  }
})();