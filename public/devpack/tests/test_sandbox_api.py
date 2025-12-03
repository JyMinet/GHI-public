"""
Tests institutionnels – GHI Sandbox API

Global HashCost Index Initiative
Developer Pack v0.2.0

Ces tests vérifient :

- la disponibilité de la sandbox,
- la structure de base des réponses,
- la présence de régions,
- la cohérence minimale de l'historique.

Ils peuvent être exécutés :

- en local (sandbox FastAPI),
- sur un environnement distant (en définissant BASE_URL).
"""

import os
from typing import Any, Dict, List

import requests

BASE_URL = os.getenv("BASE_URL", "http://127.0.0.1:8000/v1/ghi")


def _get(path: str) -> Any:
    url = f"{BASE_URL.rstrip('/')}/{path.lstrip('/')}"
    resp = requests.get(url, timeout=10)
    resp.raise_for_status()
    return resp.json()


def test_snapshot_basic_structure():
    """Le snapshot doit contenir les champs principaux du modèle GHI."""
    data = _get("snapshot")

    assert "timestamp" in data
    assert "ghi" in data
    assert "difficulty" in data
    assert "hashrate_total_th" in data
    assert "block_reward_btc" in data
    assert "regions" in data

    ghi = data["ghi"]
    assert "min_cost_btc" in ghi
    assert "avg_cost_btc" in ghi
    assert "max_cost_btc" in ghi


def test_regions_non_empty():
    """Il doit y avoir au moins une région exposée par la sandbox."""
    data = _get("regions")
    assert isinstance(data, list)
    assert len(data) > 0

    first = data[0]
    assert "region_id" in first
    assert "name" in first
    assert "hashrate_pct" in first
    assert "cost" in first


def test_single_region_detail():
    """Les détails d'une région doivent respecter le Data Model."""
    regions: List[Dict[str, Any]] = _get("regions")
    region_id = regions[0]["region_id"]

    detail = _get(f"regions/{region_id}")

    assert detail["region_id"] == region_id
    assert "cost" in detail
    assert "energy" in detail
    assert "hardware" in detail
    assert "metadata" in detail

    cost = detail["cost"]
    assert "min_cost_btc" in cost
    assert "avg_cost_btc" in cost
    assert "max_cost_btc" in cost


def test_history_monotonic_timestamps():
    """L'historique doit être trié par timestamp croissant."""
    history: List[Dict[str, Any]] = _get("history")
    assert isinstance(history, list)
    assert len(history) > 0

    timestamps = [h["timestamp"] for h in history]
    # simple check: l'ordre doit être non décroissant
    assert timestamps == sorted(timestamps)


def test_stats_object():
    """L'endpoint /stats doit renvoyer un objet avec quelques métriques clés."""
    stats = _get("stats")
    assert "regions_count" in stats
    assert "avg_hashrate_total_th" in stats
    assert "avg_cost_btc" in stats
    assert "notes" in stats

