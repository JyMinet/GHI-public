// public/dashboard.js
// Quick view – GHI sandbox indicator (FR + EN)
// Lit /api/latest.json et met à jour les blocs FR/EN.

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
      marker: $("ghi-gauge-marker-fr"),
      note: $("ghi-quick-note-fr")
    },
    en: {
      price: $("ghi-price-btc-en"),
      avgCost: $("ghi-avg-cost-btc-en"),
      minMax: $("ghi-min-max-cost-btc-en"),
      marker: $("ghi-gauge-marker-en"),
      note: $("ghi-quick-note-en")
    }
  };

  function setText(el, value) {
    if (el) el.textContent = value;
  }

  function fmtUsd(value, locale) {
    if (value == null || isNaN(value)) return "–";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);
  }

  function fmtMinMax(min, max, locale) {
    if (
      min == null ||
      max == null ||
      isNaN(min) ||
      isNaN(max)
    ) {
      return "–";
    }
    const nf = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0
    });
    return nf.format(min) + " / " + nf.format(max);
  }

  function computeMinMaxFromRegions(regions, fallbackCost) {
    if (!Array.isArray(regions) || regions.length === 0) {
      return { min: fallbackCost, max: fallbackCost };
    }
    let min = Infinity;
    let max = -Infinity;
    for (const r of regions) {
      const c = Number(r.hashcost_usd);
      if (!isNaN(c)) {
        if (c < min) min = c;
        if (c > max) max = c;
      }
    }
    if (!isFinite(min) || !isFinite(max)) {
      return { min: fallbackCost, max: fallbackCost };
    }
    return { min, max };
  }

  function ratioToPosition(ratio) {
    // ratio = price / cost
    // 0.7 → fort dessous ; 1.0 → centre ; 1.4 → bien au-dessus.
    if (!ratio || !isFinite(ratio)) return 50;
    // map [0.5, 1.5] → [5, 95]
    const clamped = Math.max(0.5, Math.min(1.5, ratio));
    const pos = 5 + ((clamped - 0.5) / (1.5 - 0.5)) * 90;
    return Math.max(0, Math.min(100, pos));
  }

  function buildNoteFR(ratio) {
    if (!ratio || !isFinite(ratio)) {
      return "Impossible de calculer la position prix/coût (données incomplètes).";
    }
    const diffPct = (ratio - 1) * 100;
    if (diffPct < -10) {
      return (
        "Prix nettement sous le coût estimé (≈ " +
        diffPct.toFixed(1) +
        " % en dessous)."
      );
    }
    if (diffPct < 10) {
      return (
        "Prix proche du coût estimé (écart ≈ " +
        diffPct.toFixed(1) +
        " %)."
      );
    }
    return (
      "Prix nettement au-dessus du coût estimé (≈ +" +
      diffPct.toFixed(1) +
      " %)."
    );
  }

  function buildNoteEN(ratio) {
    if (!ratio || !isFinite(ratio)) {
      return "Could not compute the price/cost position (incomplete data).";
    }
    const diffPct = (ratio - 1) * 100;
    if (diffPct < -10) {
      return (
        "Bitcoin price is well below the estimated production cost (≈ " +
        diffPct.toFixed(1) +
        "% below)."
      );
    }
    if (diffPct < 10) {
      return (
        "Bitcoin price is close to the estimated production cost (diff ≈ " +
        diffPct.toFixed(1) +
        "%)."
      );
    }
    return (
      "Bitcoin price is well above the estimated production cost (≈ +" +
      diffPct.toFixed(1) +
      "%)."
    );
  }

  function updateFromData(data) {
    if (!data) throw new Error("Empty data from API");

    const price = Number(data.spot_price_usd);
    const avgCost = Number(data.global_hashcost_usd);
    const regions = data.regions || [];

    const { min, max } = computeMinMaxFromRegions(regions, avgCost);
    const ratio =
      price && avgCost && isFinite(price / avgCost)
        ? price / avgCost
        : null;

    // FR
    setText(els.fr.price, fmtUsd(price, "fr-FR"));
    setText(els.fr.avgCost, fmtUsd(avgCost, "fr-FR"));
    setText(els.fr.minMax, fmtMinMax(min, max, "fr-FR"));
    if (els.fr.marker) {
      els.fr.marker.style.left = ratioToPosition(ratio) + "%";
    }
    setText(els.fr.note, buildNoteFR(ratio));

    // EN
    setText(els.en.price, fmtUsd(price, "en-US"));
    setText(els.en.avgCost, fmtUsd(avgCost, "en-US"));
    setText(els.en.minMax, fmtMinMax(min, max, "en-US"));
    if (els.en.marker) {
      els.en.marker.style.left = ratioToPosition(ratio) + "%";
    }
    setText(els.en.note, buildNoteEN(ratio));
  }

  function showError(message) {
    console.error("[GHI dashboard] " + message);
    setText(
      els.fr.note,
      "Erreur lors du chargement des données sandbox (voir la console navigateur)."
    );
    setText(
      els.en.note,
      "Error while loading sandbox data (see browser console)."
    );
  }

  async function load() {
    try {
      const resp = await fetch(API_URL, { cache: "no-cache" });
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