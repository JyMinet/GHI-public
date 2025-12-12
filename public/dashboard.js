(function () {
  const API_URL = "/api/latest.json";

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
  },
  en: {
    price: $("ghi-price-btc-en"),
    avg: $("ghi-avg-cost-btc-en"),
    minmax: $("ghi-min-max-cost-btc-en"),
    marker: $("ghi-gauge-marker-en"),
    note: $("ghi-quick-note-en"),
  },
};

  // Si on n'est pas sur la page dashboard, on sort proprement
  if (!dom.fr.price && !dom.en.price) {
    return;
  }

  function formatUSD(value) {
    if (!Number.isFinite(value)) return "–";
    return (
      "$" +
      value
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0") // espaces insécables
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
      if (note) {
        note.textContent = "[GHI sandbox] " + message;
      }
    });
  }

  function applySnapshot(price, cost, minCost, maxCost, premiumPct) {
    const gaugePos = clamp(50 + premiumPct, 0, 100);

    ["fr", "en"].forEach((lang) => {
      const view = dom[lang];
      if (!view) return;

      if (view.price) view.price.textContent = formatUSD(price);
      if (view.avg) view.avg.textContent = formatUSD(cost);
      if (view.minmax)
        view.minmax.textContent =
          formatUSD(minCost) + " / " + formatUSD(maxCost);
      if (view.marker) view.marker.style.left = gaugePos.toFixed(1) + "%";

      setNote(lang, premiumPct);
    });
  }

  async function loadIndicator() {
    try {
      const response = await fetch(API_URL, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("HTTP " + response.status + " on " + API_URL);
      }

      const data = await response.json();
      console.debug("[GHI sandbox] /api/latest.json payload:", data);

      if (!data || typeof data !== "object") {
        throw new Error("Invalid JSON structure (expected object).");
      }

      const price = Number(data.spot_price_usd);
      const cost = Number(data.global_hashcost_usd);
      const premium = Number(data.premium_vs_cost_pct);

      if (!Number.isFinite(price) || !Number.isFinite(cost)) {
        throw new Error(
          "Missing or invalid numeric fields 'spot_price_usd' / 'global_hashcost_usd'."
        );
      }

      const minCost = Math.round(cost * 0.91);
      const maxCost = Math.round(cost * 1.09);

      applySnapshot(price, cost, minCost, maxCost, premium);
    } catch (err) {
      showError(err && err.message ? err.message : String(err));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadIndicator);
  } else {
    loadIndicator();
  }
})();