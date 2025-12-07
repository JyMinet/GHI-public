2. Model & Methodology — Full Version / Modèle & Méthodologie — Version complète

Global HashCost Index (GHI) — Documentation v1.0

⸻

2.1 Methodological Principles / Principes méthodologiques

FR

La méthodologie du GHI repose sur quatre piliers fondamentaux qui garantissent sa robustesse :
	1.	Transparence
Toutes les hypothèses (prix, efficience, segmentation) sont documentées, publiquement accessibles et vérifiables.
	2.	Reproductibilité
Chaque résultat peut être recalculé à partir des données et scripts fournis.
	3.	Neutralité
Le modèle n’introduit pas de biais intentionnel : pas de région favorisée, pas d’hypothèse optimisée pour un acteur.
	4.	Simplicité contrôlée
Le modèle est volontairement simple afin d’éviter la sur-interprétation des données et le sur-ajustement.

EN

The GHI methodology relies on four core pillars:
	1.	Transparency
All assumptions (pricing, efficiency, segmentation) are documented, accessible, and verifiable.
	2.	Reproducibility
Outputs can be recomputed using the provided data and scripts.
	3.	Neutrality
The model introduces no intentional bias: no region is favored, no variable is tuned for a particular actor.
	4.	Controlled Simplicity
The model remains intentionally simple to avoid data overfitting or excessive interpretation.

⸻

2.2 Global Structure / Structure générale

FR

Le modèle GHI est structuré en trois niveaux :

Niveau 1 — Inputs
	•	Tarifs électriques représentatifs
	•	Mix ASIC (moderne / intermédiaire / ancien)
	•	Profils horaires (si disponibles)
	•	Variables réseau (difficulté, hashrate, récompenses)

Niveau 2 — Calcul régional

Pour chaque région :
	•	efficience énergétique du parc (J/TH → kWh/PH),
	•	coût kWh ajusté,
	•	scénarios min/avg/max,
	•	coût final d’un bitcoin.

Niveau 3 — Agrégation globale
	•	normalisation des résultats,
	•	pondération régionale,
	•	création de l’indice global GHI.

EN

The GHI model is structured across three layers:

Layer 1 — Inputs
	•	Representative electricity prices
	•	ASIC mix (modern / mid-range / legacy)
	•	Hourly profiles (if available)
	•	Network variables (difficulty, hashrate, rewards)

Layer 2 — Regional Calculation

For each region:
	•	fleet energy efficiency (J/TH → kWh/PH),
	•	adjusted electricity cost,
	•	min/avg/max scenarios,
	•	final BTC production cost.

Layer 3 — Global Aggregation
	•	normalization of outputs,
	•	regional weighting,
	•	creation of the GHI global index.

⸻

2.3 Core Assumptions / Hypothèses centrales

FR

Les hypothèses centrales sont :
	•	Le GHI mesure uniquement le coût électrique.
	•	Le parc ASIC est simplifié en trois catégories :
	•	Moderne (<25 J/TH),
	•	Intermédiaire (25–33 J/TH),
	•	Ancien (>33 J/TH).
	•	Les tarifs électriques sont représentatifs, non extrêmes.
	•	Chaque région suit un mix cohérent en fonction de sa réalité économique et énergétique.
	•	Les données réseau Bitcoin proviennent de sources publiques reconnues.

EN

Core assumptions:
	•	GHI measures electricity cost only.
	•	The ASIC fleet is simplified into three categories:
	•	Modern (<25 J/TH),
	•	Mid-range (25–33 J/TH),
	•	Legacy (>33 J/TH).
	•	Electricity prices are representative, not extreme.
	•	Each region uses a mix aligned with real-world local conditions.
	•	Bitcoin network data is sourced from established public APIs.

⸻

2.4 Regional Model / Modèle régional

FR

Pour chaque région :
	1.	Définition d’un mix ASIC pondéré.
	2.	Calcul de l’efficience énergétique régionale (J/TH en kWh/PH).
	3.	Sélection du tarif électrique représentatif.
	4.	Génération des scénarios min/avg/max.
	5.	Calcul du coût final d’un bitcoin.

EN

For each region:
	1.	Definition of a weighted ASIC mix.
	2.	Computation of regional efficiency (J/TH → kWh/PH).
	3.	Selection of the representative electricity price.
	4.	Modeling of min/avg/max scenarios.
	5.	Computation of the final BTC cost.

⸻

2.5 ASIC Mix Definition / Définition du mix ASIC

FR

La construction du mix ASIC par région est basée sur :
	•	disponibilité locale des modèles,
	•	cycles de renouvellement observés,
	•	données d’import/export,
	•	amortissement énergétique réel,
	•	typologie des fermes (industrielles, moyennes, petites).

Pondérations usuelles (indicatives)
	•	Moderne : 20–50 %
	•	Intermédiaire : 30–50 %
	•	Ancien : 10–40 %

EN

Regional ASIC mix is built using:
	•	local model availability,
	•	observed upgrade cycles,
	•	import/export activity,
	•	real-world energy amortization,
	•	farm typology (industrial, mid-size, small).

Typical weight ranges
	•	Modern: 20–50%
	•	Mid-range: 30–50%
	•	Legacy: 10–40%

⸻

2.6 Electricity Pricing / Tarification électrique

FR

Le tarif électrique utilisé dépend :
	•	du marché local,
	•	de la transparence du spot,
	•	de la disponibilité de contrats industriels.

Règles GHI
	1.	Sélection du tarif le plus représentatif.
	2.	Exclusion des valeurs extrêmes ou non disponibles.
	3.	Priorité aux tarifs industriels documentés (>1 MW).
	4.	Les tarifs spot sont utilisés uniquement lorsque fiables.

EN

Electricity pricing depends on:
	•	the local market structure,
	•	transparency of spot pricing,
	•	industrial contract availability.

GHI Rules
	1.	Select the most representative price.
	2.	Exclude extreme or undocumented values.
	3.	Prefer documented industrial tariffs (>1 MW).
	4.	Use spot prices only when reliable.

⸻

2.7 Energy-to-Bitcoin Calculation / Calcul énergie → bitcoin

FR

La quantité d’énergie nécessaire pour miner 1 BTC repose sur :
	1.	Difficulté du réseau
	2.	Hashrate total
	3.	Efficience du mix ASIC
	4.	Énergie par bloc
	5.	Blocs nécessaires pour atteindre 1 BTC
	6.	Récompense par bloc (subsidy + frais)

2.7.1 Formule générale simplifiée

\text{kWh par BTC} =
\frac{
(\text{Difficulté} \times 2^{32})
}{
\text{Hashrate\_eff}}
\times
\frac{1}{\text{BTC par bloc}}
\times
\text{kWh par TH}

2.7.2 Normalisation

Les unités sont harmonisées :
	•	J/TH → kWh/TH
	•	TH/s → PH/s

2.7.3 Version complète

Documentée dans l’annexe technique du moteur GHI.

EN

Energy to mine 1 BTC is based on:
	1.	Network difficulty
	2.	Total hashrate
	3.	ASIC mix efficiency
	4.	Energy per block
	5.	Blocks required for 1 BTC
	6.	Block reward (subsidy + fees)

2.7.1 Simplified formula

\text{kWh per BTC} =
\frac{
(\text{Difficulty} \times 2^{32})
}{
\text{Hashrate\_eff}}
\times
\frac{1}{\text{BTC per block}}
\times
\text{kWh per TH}

2.7.2 Normalization

Units harmonized:
	•	J/TH → kWh/TH
	•	TH/s → PH/s

2.7.3 Full version

Available in the GHI Engine technical annex.

⸻

2.8 Scenario Modeling — Min / Avg / Max

Modélisation des scénarios — min / moyen / max

FR

Trois scénarios permettent d’encadrer la variabilité mondiale :
	•	Min :
	•	ASIC modernes,
	•	prix bas documentés,
	•	stabilité réseau maximale.
	•	Avg :
	•	mix médian,
	•	tarif médian,
	•	conditions normales.
	•	Max :
	•	machines anciennes,
	•	prix élevés,
	•	conditions moins favorables.

EN

Three scenarios frame global variability:
	•	Min:
	•	modern ASICs,
	•	low documented prices,
	•	high network stability.
	•	Avg:
	•	median mix,
	•	median price,
	•	typical conditions.
	•	Max:
	•	older hardware,
	•	high prices,
	•	less favorable conditions.

⸻

2.9 Regional Aggregation / Agrégation régionale

FR

Chaque région est agrégée via :
	1.	Normalisation des résultats
	2.	Vérification des valeurs extrêmes
	3.	Pondération selon :
	•	part estimée du hashrate,
	•	poids économique local,
	•	disponibilité énergétique.

Aucune région n’est exclue sauf absence totale de données.

EN

Regions are aggregated through:
	1.	Normalization
	2.	Extreme-value checks
	3.	Weighting based on:
	•	estimated share of hashrate,
	•	local economic weight,
	•	energy availability.

No region is excluded unless no data exists.

⸻

2.10 Global Aggregation / Agrégation globale

FR

L’indice GHI mondial est obtenu via :
	•	moyenne pondérée,
	•	cohérence interrégionale,
	•	distribution trilatérale min/avg/max.

EN

The global GHI index is built using:
	•	weighted averaging,
	•	cross-regional coherence,
	•	trilateral min/avg/max distribution.

⸻

2.11 Quality Assurance & Stability / Assurance qualité & stabilité

FR

Le moteur GHI inclut :
	•	tests internes de cohérence,
	•	contrôle de stabilité,
	•	verrouillage des versions,
	•	auditabilité du code,
	•	publication d’un jeu de tests par release.

EN

The GHI Engine includes:
	•	internal consistency tests,
	•	stability checks,
	•	version locking,
	•	code-level auditability,
	•	test dataset per release.

⸻

2.12 Model Limitations / Limites du modèle

FR

Le modèle GHI v1.0 ne couvre pas :
	•	OPEX hors électricité,
	•	amortissement matériel,
	•	coûts de refroidissement,
	•	variations fines intra-région,
	•	optimisation fiscale,
	•	configuration des fermes.

Ces éléments pourront être introduits dans GHI v2 ou v3.

EN

GHI v1.0 does not include:
	•	non-electric OPEX,
	•	hardware depreciation,
	•	cooling costs,
	•	fine intra-regional variation,
	•	tax optimization,
	•	farm configuration.

These may be incorporated in GHI v2 or v3.