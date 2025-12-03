# Présentation générale du Global HashCost Index (GHI)

## Pourquoi un HashCost Index ?
Le marché du Bitcoin repose sur une réalité physique :
miner 1 BTC nécessite de l’énergie, des machines spécialisées (ASICs)  
et des coûts d’exploitation. Le prix du Bitcoin est donc profondément lié :

- au coût marginal de minage,
- à la répartition mondiale du hashrate,
- à la performance des machines,
- au prix de l'électricité,
- au réseau (difficulté, block reward).

Le **Global HashCost Index (GHI)** propose :
- une **estimation ouverte** du coût par BTC (min / avg / max)
- une **segmentation par région géopolitique**
- une **pondération par hashrate réel**
- une **lecture dynamique** (signaux, stress, compression)

Ce n’est **ni un prix plancher**, ni une prédiction :  
c’est une **cartographie économique du réseau Bitcoin**.

---

## Structure du projet

Le projet comprend :

### 1. Un moteur Python (`ghi_engine.py`)
- Lit la configuration (`ghi_config.json`)
- Calcule les coûts par région
- Calcule les agrégations globales
- Génère les signaux d’interprétation
- Fournit les snapshots

### 2. Une API FastAPI (`api_ghi.py`)
Expose :
- `/v1/ghi/snapshot`
- `/v1/ghi/regions`
- `/v1/ghi/regions/{id}`
- `/v1/ghi/history`
- `/v1/ghi/stats`
- `/v1/status`

### 3. Un Dashboard web (`/dashboard`)
Design minimaliste, type Apple, affichant :
- prix BTC
- coût moyen GHI
- bande min–max
- signaux
- graphiques historiques
- cartes régionales

---

## Versions

- **API Version :** v1.0  
- **Engine Version :** 1.0  
- **Dashboard Version :** 1.0  
- **Méthodologie :** 1.0

---
