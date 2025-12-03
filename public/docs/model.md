# Modèle GHI : Description synthétique

Ce document décrit les principes fondamentaux du modèle du Global HashCost Index.

---

## 1. Entrées du modèle

### 1.1. Réseau Bitcoin
- Difficulty  
- Block reward  
- BTC/TH/day (direct ou calculé)
- Prix du Bitcoin (spot)

### 1.2. Régions
Une région contient :
- son hashrate (%)  
- son mix de machines  
- son prix de l’énergie  
- ses OPEX

### 1.3. Classes de machines ASIC
Chaque classe est définie par :
- J/TH médian
- Gain énergétique par génération
- Part dans le mix régional

---

## 2. Calculs régionaux

Pour chaque région :

### 2.1. Consommation énergétique

KWh/TH/day = (J/TH × 24h) / 1000

### 2.2. Coûts énergie
Cost_TH_min  = KWh × price_min
Cost_TH_avg  = KWh × price_avg
Cost_TH_max  = KWh × price_max

### 2.3. OPEX
Cost_TH_total = Cost_TH + OPEX

### 2.4. Coût par BTC
Cost_BTC = Cost_TH_total / (BTC_per_TH_per_day)

---

## 3. Agrégation globale
Pondération par hashrate :
Global_avg = Σ(region_avg × hashrate%)

De même pour min et max.

---

## 4. Signaux dérivés
Le dashboard utilise trois signaux :

- **BTC vs coût moyen global**
- **Bande de compression (max – min)**
- **Stress régional (région la plus chère)**

---

## 5. Limites connues
- Prix énergie simplifiés
- Mix machine statique
- Hashrate régional estimé
- Block-reward fixe (hors halving)

---

## 6. Roadmap du modèle
- Intégration Kaiko / MiningMap
- Prix énergie en temps réel
- Mix machine dynamique
- Hashrate par data-centers
- Coût capex amorti
