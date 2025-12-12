# Global HashCost Index – API v1.1 Specification  
# (ENGLISH VERSION)

Version: API v1.1  
Status: Stable  
Compatibility: 100% compatible with API v1.0  
Last update: YYYY-MM-DD

------------------------------------------------------------
1. Objectives of API v1.1
------------------------------------------------------------
API v1.1 provides a minor but useful evolution over v1.0:
• additional metadata in all responses,
• increased consistency with the GHI v1.0 Standard,
• new transversal endpoints (/metadata, /regions),
• optional beta endpoints (/network, /forecast),
• no breaking changes for existing v1.0 clients.

------------------------------------------------------------
2. Global response format changes
------------------------------------------------------------
All responses now include:

• version: "1.1"  
• timestamp_utc: ISO 8601 timestamp  
• engine_sandbox_version: string  
• region_count (when applicable)  
• optional global stats:
  – global_min_cost_usd  
  – global_avg_cost_usd  
  – global_max_cost_usd

------------------------------------------------------------
3. New endpoints in API v1.1
------------------------------------------------------------

3.1 GET /v1/ghi/metadata  
Returns global metadata about the API and engine.

Response example:
{
  "version": "1.1",
  "timestamp_utc": "2025-01-01T12:00:00Z",
  "engine_sandbox_version": "0.4.2-sandbox",
  "available_endpoints": [
    "/v1/ghi/snapshot",
    "/v1/ghi/history",
    "/v1/ghi/regions",
    "/v1/ghi/network",
    "/v1/ghi/forecast"
  ]
}

------------------------------------------------------------
3.2 GET /v1/ghi/regions  
Returns the list of standard GHI regions.

Response example:
{
  "version": "1.1",
  "timestamp_utc": "...",
  "regions": [
    {"id": "us", "name": "United States"},
    {"id": "eu", "name": "Europe"},
    {"id": "cn", "name": "China"}
  ],
  "region_count": 3
}

------------------------------------------------------------
3.3 GET /v1/ghi/network  (beta)
Synthetic network metrics (sandbox only).

Response example:
{
  "version": "1.1",
  "timestamp_utc": "...",
  "engine_sandbox_version": "0.4.2-sandbox",
  "hashrate_eh": 554,
  "difficulty": 89e12,
  "avg_fee_usd": 4.2
}

------------------------------------------------------------
3.4 GET /v1/ghi/forecast (beta)
Simple synthetic forecast values.

Response example:
{
  "version": "1.1",
  "timestamp_utc": "...",
  "engine_sandbox_version": "0.4.2-sandbox",
  "forecast_days": 7,
  "predicted_avg_cost_usd": 62300
}

------------------------------------------------------------
4. Backward compatibility
------------------------------------------------------------
All existing v1.0 endpoints remain unchanged.  
Every v1.1 field is optional for clients to read.  
No deleted field. No renamed field.

------------------------------------------------------------
5. Version mapping
------------------------------------------------------------
API v1.1 ↔ Engine Sandbox v0.4.3  
API v1.1 ↔ Public Documentation Bundle v1.1  
Standard GHI remains v1.0 (no structural change).

------------------------------------------------------------
END OF ENGLISH VERSION
------------------------------------------------------------



# Spécification API v1.1 – Global HashCost Index  
# (VERSION FRANÇAISE)

Version : API v1.1  
Statut : Stable  
Compatibilité : 100 % compatible avec API v1.0  
Dernière mise à jour : YYYY-MM-DD

------------------------------------------------------------
1. Objectifs de l’API v1.1
------------------------------------------------------------
Cette version apporte :
• des métadonnées étendues dans toutes les réponses,  
• une cohérence accrue avec le Standard GHI v1.0,  
• deux endpoints transverses (/metadata, /regions),  
• deux endpoints en bêta (/network, /forecast),  
• aucune rupture de compatibilité.

------------------------------------------------------------
2. Évolutions globales du format des réponses
------------------------------------------------------------
Toutes les réponses incluent désormais :

• version: "1.1"  
• timestamp_utc: horodatage ISO 8601  
• engine_sandbox_version: chaîne  
• region_count si pertinent  
• statistiques globales optionnelles :
  – global_min_cost_usd  
  – global_avg_cost_usd  
  – global_max_cost_usd

------------------------------------------------------------
3. Nouveaux endpoints API v1.1
------------------------------------------------------------

3.1 GET /v1/ghi/metadata  
Retourne les informations globales de l’API et du moteur.

3.2 GET /v1/ghi/regions  
Retourne la liste complète des régions GHI standard.

3.3 GET /v1/ghi/network (bêta)  
Données réseau synthétiques (sandbox).

3.4 GET /v1/ghi/forecast (bêta)  
Prévision synthétique simple (sandbox).

------------------------------------------------------------
4. Compatibilité ascendante
------------------------------------------------------------
Les endpoints v1.0 restent strictement identiques.  
Aucun champ supprimé. Aucun champ renommé.  
Tous les ajouts sont optionnels.

------------------------------------------------------------
5. Mapping des versions
------------------------------------------------------------
API v1.1 ↔ Moteur Sandbox v0.4.3  
API v1.1 ↔ Documentation publique v1.1  
Standard GHI : toujours v1.0.

------------------------------------------------------------
FIN DE LA VERSION FRANÇAISE
------------------------------------------------------------