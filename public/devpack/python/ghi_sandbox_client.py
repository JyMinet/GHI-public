"""
GHI Sandbox Client (Official)

Global HashCost Index Initiative
Sandbox Developer Guide – v0.2.0

This client provides a minimal, production-style interface to the
GHI sandbox API. It is intended for:

- Data analysts and researchers
- Risk / ESG / Quant teams
- Dashboard and BI integrations
- Prototyping before the production engine

Base URL (default): http://127.0.0.1:8000/v1/ghi
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, List, Optional

import requests


@dataclass
class GHIClientConfig:
    """
    Configuration for the GHI sandbox client.
    """
    base_url: str = "http://127.0.0.1:8000/v1/ghi"
    timeout: int = 10  # seconds


class GHISandboxClient:
    """
    Official Python client for the GHI sandbox API.

    Usage:
        cfg = GHIClientConfig(base_url="http://127.0.0.1:8000/v1/ghi")
        client = GHISandboxClient(cfg)

        snapshot = client.get_snapshot()
        history = client.get_history()
        regions = client.list_regions()
        na_region = client.get_region("north_america")
        stats = client.get_stats()
    """

    def __init__(self, config: Optional[GHIClientConfig] = None) -> None:
        self.config = config or GHIClientConfig()

    # ---------------------------------------------------------------------
    # Internal helpers
    # ---------------------------------------------------------------------

    def _url(self, path: str) -> str:
        """
        Build a full URL from a relative path.
        """
        return f"{self.config.base_url.rstrip('/')}/{path.lstrip('/')}"

    def _get(self, path: str) -> Any:
        """
        Perform a GET request on the sandbox API and return JSON.
        Raises requests.exceptions.RequestException on HTTP / network error.
        """
        url = self._url(path)
        response = requests.get(url, timeout=self.config.timeout)
        response.raise_for_status()
        return response.json()

    # ---------------------------------------------------------------------
    # Public API methods
    # ---------------------------------------------------------------------

    def get_snapshot(self) -> Dict[str, Any]:
        """
        Get the current GHI snapshot.

        Returns:
            dict: Snapshot object, conforming to GHI Data Model v1.0.
        """
        return self._get("snapshot")

    def get_history(self) -> List[Dict[str, Any]]:
        """
        Get the historical aggregated GHI values.

        Returns:
            list[dict]: List of HistoryPoint objects.
        """
        data = self._get("history")
        if not isinstance(data, list):
            raise TypeError("Expected list for history endpoint")
        return data

    def list_regions(self) -> List[Dict[str, Any]]:
        """
        List all regions in the sandbox dataset.

        Returns:
            list[dict]: Region objects with cost, energy, hardware and metadata.
        """
        data = self._get("regions")
        if not isinstance(data, list):
            raise TypeError("Expected list for regions endpoint")
        return data

    def get_region(self, region_id: str) -> Dict[str, Any]:
        """
        Get a single region by its identifier.

        Args:
            region_id (str): Region identifier (e.g. 'north_america', 'europe').

        Returns:
            dict: Region object.

        Raises:
            requests.exceptions.HTTPError: 404 if the region does not exist.
        """
        path = f"regions/{region_id}"
        return self._get(path)

    def get_stats(self) -> Dict[str, Any]:
        """
        Get global statistics on the sandbox dataset.

        Returns:
            dict: Stats object (regions_count, avg_hashrate_total_th, avg_cost_btc, notes).
        """
        return self._get("stats")


# -------------------------------------------------------------------------
# Convenience usage example (can be removed/commented in production)
# -------------------------------------------------------------------------

if __name__ == "__main__":
    cfg = GHIClientConfig()
    client = GHISandboxClient(cfg)

    print("== GHI Sandbox Client Demo ==")
    try:
        snapshot = client.get_snapshot()
        print("Snapshot timestamp:", snapshot.get("timestamp"))
        print("GHI avg cost (BTC):", snapshot.get("ghi", {}).get("avg_cost_btc"))

        stats = client.get_stats()
        print("Regions count:", stats.get("regions_count"))
        print("Average cost (BTC):", stats.get("avg_cost_btc"))

    except requests.exceptions.RequestException as exc:
        print("Error contacting GHI sandbox API:", exc)
