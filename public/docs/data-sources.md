# 3. Data & Sources / Données & Sources  
*Global HashCost Index (GHI) — Documentation v1.0*

---

## 3.1 Overview / Présentation générale

**FR**  
Le modèle GHI repose sur un ensemble de données publiques, vérifiables, sélectionnées pour garantir la transparence et la reproductibilité.  
Les données couvrent quatre grandes dimensions :

- les tarifs de l’électricité,  
- le réseau Bitcoin,  
- le climat (pour le refroidissement),  
- le parc de machines ASIC.

**EN**  
The GHI model relies on public, verifiable datasets selected to ensure transparency and reproducibility.  
Data cover four main dimensions:

- electricity prices,  
- the Bitcoin network,  
- climate (for cooling),  
- the ASIC hardware fleet.

---

## 3.2 Electricity Prices / Tarifs électriques

**FR**  
Les tarifs électriques utilisés par région sont choisis selon trois critères principaux :

1. **Représentativité locale**  
   Niveaux de prix réellement observés pour des consommateurs industriels (puissance élevée, typiquement >1 MW).

2. **Disponibilité publique**  
   Données publiées par des autorités, des opérateurs de marché, des régulateurs ou des sources statistiques officielles.

3. **Stabilité statistique**  
   Exclusion des valeurs ponctuelles extrêmes ou des séries incomplètes.

Sources typiques :

- opérateurs de marché (par ex. NordPool, EEX, ERCOT),  
- ministères de l’énergie et agences publiques,  
- fournisseurs industriels documentant leurs grilles tarifaires,  
- bases de données OCDE / Eurostat,  
- rapports de régulateurs régionaux.

**EN**  
Electricity prices are chosen per region according to three main criteria:

1. **Local representativeness**  
   Price levels effectively observed for industrial-scale consumers (typically >1 MW).

2. **Public availability**  
   Data published by authorities, market operators, regulators, or official statistical sources.

3. **Statistical stability**  
   Outlier values and incomplete series are excluded.

Typical sources:

- market operators (e.g. NordPool, EEX, ERCOT),  
- energy ministries and public agencies,  
- industrial electricity providers publishing tariffs,  
- OECD / Eurostat databases,  
- regional regulators’ reports.

---

## 3.3 Bitcoin Network Data / Données réseau Bitcoin

**FR**  
Les variables réseau Bitcoin utilisées par le GHI comprennent notamment :

- la difficulté du réseau,  
- le hashrate total,  
- la récompense par bloc (subsidy),  
- les frais de transaction agrégés,  
- les horodatages de blocs,  
- les tailles de blocs (le cas échéant).

Sources possibles :

- APIs publiques (explorateurs de blocs, services d’indexation),  
- fournisseurs de données institutionnels (par ex. Kaiko, CoinMetrics),  
- extraction directe à partir d’un nœud Bitcoin Core (RPC / index).

**EN**  
Bitcoin network variables used by GHI include:

- network difficulty,  
- total hashrate,  
- block reward (subsidy),  
- aggregated transaction fees,  
- block timestamps,  
- block sizes (where relevant).

Potential sources:

- public APIs (block explorers, indexing services),  
- institutional-grade data providers (e.g. Kaiko, CoinMetrics),  
- direct extraction from a Bitcoin Core node (RPC / index).

---

## 3.4 Climate & Cooling / Climat et refroidissement

**FR**  
Les données climatiques interviennent lorsque le modèle applique un facteur de refroidissement.  
Les informations utilisées peuvent inclure :

- la température moyenne annuelle sur 10 ans,  
- les températures saisonnières typiques,  
- des indicateurs de climat local (zones chaudes / tempérées / froides).

Sources typiques :

- NOAA (National Oceanic and Atmospheric Administration),  
- services météorologiques nationaux,  
- bases de données climatiques régionales.

**EN**  
Climate data is used when the model applies a cooling factor.  
Relevant information may include:

- 10-year average annual temperature,  
- typical seasonal temperatures,  
- local climate classification (hot / temperate / cold zones).

Typical sources:

- NOAA (National Oceanic and Atmospheric Administration),  
- national meteorological services,  
- regional climate databases.

---

## 3.5 ASIC Hardware Data / Données matérielles ASIC

**FR**  
Les caractéristiques des machines ASIC sont essentielles pour modéliser l’efficience énergétique régionale.  
Pour chaque classe et parfois pour chaque modèle, le GHI collecte :

- la consommation médiane en J/TH ou W/TH,  
- le hashrate nominal,  
- la génération technologique (année / famille de puces),  
- la part estimée de ce modèle dans le mix régional.

Sources possibles :

- fiches techniques officielles des fabricants,  
- benchmarks indépendants,  
- bases publiques de suivi ASIC,  
- données de marché (prix, volumes, cycles de renouvellement).

**EN**  
ASIC hardware characteristics are critical to model regional energy efficiency.  
For each class, and sometimes per model, GHI collects:

- median consumption in J/TH or W/TH,  
- nominal hashrate,  
- technological generation (year / chip family),  
- estimated share of the model in the regional mix.

Possible sources:

- official manufacturer datasheets,  
- independent benchmarks,  
- public ASIC tracking databases,  
- market data (prices, volumes, upgrade cycles).

---

## 3.6 Regional Hashrate Estimates / Estimations de hashrate régional

**FR**  
Le hashrate régional est toujours une **estimation**. L’objectif n’est pas la précision absolue, mais une vision cohérente et stable dans le temps.  
Les éléments pris en compte peuvent inclure :

- études académiques sur la géographie du minage,  
- localisation de grandes fermes industrielles,  
- données de consommation électrique agrégée dans certaines zones,  
- analyses de flux réseau ou d’IP (avec prudence).

Ces estimations sont utilisées pour pondérer les coûts régionaux lors de l’agrégation globale.

**EN**  
Regional hashrate is always an **estimate**. The goal is not absolute precision, but a coherent and stable view over time.  
Inputs may include:

- academic studies on mining geography,  
- known locations of large industrial farms,  
- aggregated electrical consumption in specific regions,  
- network flow or IP-based analyses (with caution).

These estimates are used to weight regional costs in the global aggregation step.

---

## 3.7 Data Normalization & Cleaning / Normalisation et filtrage

**FR**  
Avant d’être utilisées dans le moteur GHI, les données passent par plusieurs étapes :

1. **Contrôle des valeurs aberrantes**  
   - détection de prix ou valeurs réseau hors plages raisonnables,  
   - vérification des ruptures brutales de séries.

2. **Tests de complétude**  
   - identification des trous de série,  
   - gestion des jours ou périodes manquantes.

3. **Normalisation des unités**  
   - conversion systématique en unités communes (USD, $/kWh, EH/s, etc.).

4. **Harmonisation temporelle**  
   - alignement des fréquences (quotidien, hebdomadaire, mensuel),  
   - application de méthodes de lissage si nécessaire (moyennes mobiles, etc.).

**EN**  
Before being used by the GHI engine, data goes through several steps:

1. **Outlier detection**  
   - identification of unreasonable price or network values,  
   - check for abrupt series breaks.

2. **Completeness checks**  
   - detection of missing periods,  
   - handling of missing days or intervals.

3. **Unit normalization**  
   - consistent conversion to shared units (USD, $/kWh, EH/s, etc.).

4. **Temporal harmonization**  
   - alignment of frequencies (daily, weekly, monthly),  
   - smoothing where appropriate (moving averages, etc.).

---

## 3.8 Update Process / Processus de mise à jour

**FR**  
Le processus d’actualisation des données suit un cycle répétitif :

- ingestion régulière (quotidienne ou périodique),  
- contrôles automatiques de cohérence,  
- validation manuelle par le mainteneur,  
- publication des nouvelles valeurs dans l’API et les snapshots.

Les changements méthodologiques majeurs sont versionnés séparément (voir chapitre Gouvernance & Standardisation).

**EN**  
The data update process follows a recurring cycle:

- regular ingestion (daily or periodic),  
- automatic consistency checks,  
- manual validation by the maintainer,  
- publication of updated values in the API and snapshots.

Major methodological changes are versioned separately (see Governance & Standardisation chapter).

---

## 3.9 Transparency & Auditability / Transparence et auditabilité

**FR**  
Pour permettre l’audit indépendant, le GHI met à disposition :

- la description complète de la méthodologie,  
- les jeux de données normalisés utilisés pour les calculs,  
- des exemples de recalcul (notebooks, scripts),  
- un journal des mises à jour majeures (changelog).

**EN**  
To enable independent audit, GHI provides:

- full methodological description,  
- normalized datasets used for calculations,  
- example recalculations (notebooks, scripts),  
- a log of major updates (changelog).

---