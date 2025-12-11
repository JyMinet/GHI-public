from datetime import datetime
from typing import Any, Dict, List

import requests

# Base URL of the local GHI sandbox engine
BASE_URL = "http://127.0.0.1:8000/v1/ghi"


def _get(endpoint: str) -> Dict[str, Any]:
    """
    Helper: GET /v1/ghi/{endpoint} and return parsed JSON.
    All endpoints in v1.1 return a JSON object at top-level.
    """
    url = f"{BASE_URL}/{endpoint}"
    resp = requests.get(url, timeout=5)
    resp.raise_for_status()
    return resp.json()


def test_snapshot_basic_structure() -> None:
    """
    /snapshot (API v1.1) doit exposer:
      - les métadonnées v1.1
      - une liste de régions avec coûts min / moyen / max
      - des agrégats globaux.
    """
    data = _get("snapshot")

    # Métadonnées de base
    assert data.get("version") == "1.1"
    assert "timestamp_utc" in data
    assert "engine_sandbox_version" in data

    # Liste de régions
    assert "regions" in data
    assert isinstance(data["regions"], list)
    assert data["region_count"] == len(data["regions"])

    # Agrégats globaux
    for key in ("global_min_cost_usd", "global_avg_cost_usd", "global_max_cost_usd"):
        assert key in data


def test_regions_non_empty() -> None:
    """
    /regions (API v1.1) doit renvoyer un objet contenant:
      - version, timestamp_utc
      - region_count
      - une liste 'regions' non vide avec id + name.
    """
    data = _get("regions")

    assert isinstance(data, dict)
    assert data.get("version") == "1.1"
    assert "timestamp_utc" in data

    regions = data.get("regions")
    assert isinstance(regions, list)
    assert len(regions) > 0
    assert data.get("region_count") == len(regions)

    for region in regions:
        assert "id" in region
        assert "name" in region


def test_single_region_detail() -> None:
    """
    Les détails d'au moins une région doivent être cohérents dans /snapshot:
      - id, name
      - min_cost_usd, avg_cost_usd, max_cost_usd.
    """
    data = _get("snapshot")
    regions: List[Dict[str, Any]] = data["regions"]

    assert len(regions) > 0
    r0 = regions[0]

    for key in ("id", "name", "min_cost_usd", "avg_cost_usd", "max_cost_usd"):
        assert key in r0


def test_history_monotonic_timestamps() -> None:
    """
    /history (API v1.1) renvoie un objet avec:
      - region_id
      - points: liste de {date, min/avg/max_cost_usd}
    Les dates doivent être triées par ordre croissant.
    """
    data = _get("history")

    assert data.get("version") == "1.1"
    assert "region_id" in data
    assert "points" in data

    points: List[Dict[str, Any]] = data["points"]
    assert isinstance(points, list)
    assert len(points) > 0

    dates = [datetime.fromisoformat(p["date"]) for p in points]
    assert dates == sorted(dates)


def test_metadata_object() -> None:
    """
    /metadata (API v1.1) remplace l'ancien /stats:
      - version, timestamp_utc, engine_sandbox_version, environment
      - api_current, api_supported
      - available_endpoints (doit inclure /snapshot).
    """
    meta = _get("metadata")

    assert meta.get("version") == "1.1"
    assert meta.get("environment") == "sandbox"
    assert "timestamp_utc" in meta
    assert "engine_sandbox_version" in meta

    assert meta.get("api_current") in meta.get("api_supported", [])
    assert "/v1/ghi/snapshot" in meta.get("available_endpoints", [])
    