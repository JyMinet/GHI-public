MODEL OVERVIEW – Global HashCost Index (GHI)

1. Définition générale

Le Global HashCost Index (GHI) est un indicateur ouvert et neutre qui estime le coût technique de production d’un bitcoin à l’échelle mondiale et régionale.
Il s’appuie sur trois mesures complémentaires :
	•	Coût minimum (min) : conditions optimales, électricité la moins chère, machines les plus performantes.
	•	Coût moyen (avg) : conditions représentatives du marché régional.
	•	Coût maximum (max) : conditions défavorables, électricité chère ou machines anciennes.

Ces trois valeurs permettent de comprendre non seulement le niveau économique des mineurs, mais aussi leur tolérance financière, leur seuil de stress, et les zones de pression économique du réseau.

⸻

2. Objectif et raison d’être

Le GHI répond à un besoin majeur : disposer d’un référentiel public, transparent et reproductible sur les coûts du minage.
Les objectifs principaux sont :
	•	Quantifier le coût réel de production d’un bitcoin.
	•	Comparer les régions et analyser les migrations de hashrate.
	•	Identifier les zones de résilience ou de fragilité économique.
	•	Apporter un outil neutre aux institutions, régulateurs et analystes.
	•	Servir de base standardisée pour la recherche, les médias et le marché.

⸻

3. Structure régionale du modèle

Le GHI segmente le monde en grands blocs homogènes pour refléter les réalités industrielles du minage :
	•	Amérique du Nord (USA, Canada)
	•	Amérique latine
	•	Europe
	•	Afrique
	•	Russie
	•	Moyen-Orient / Afrique du Nord
	•	Chine
	•	Asie hors Chine
	•	Océanie

Chaque région est modélisé via :
	•	un coût min/avg/max,
	•	un pourcentage de hashrate mondial,
	•	un profil énergétique,
	•	un niveau moyen d’efficacité machines.

Cette granularité assure un équilibre entre précision et stabilité.

⸻

4. Principe de pondération

Le coût global GHI n’est pas une simple moyenne.
Il est calculé via une pondération par hashrate réel :
GHI_global = somme( coût_régional × hashrate_pct_régional )

Ainsi, une région très active influence davantage le coût global qu’une région marginale.

Cette méthode reflète la structure économique effective du réseau.

⸻

5. Données et hypothèses structurantes

Le GHI repose sur des données publiques et vérifiables :
	•	Prix régionaux de l’électricité (spot/wholesale lorsque possible).
	•	Configuration machine : rendement moyen en W/TH, adapté à chaque zone.
	•	Difficulté, hashrate global, temps par bloc et quantité de BTC par bloc.
	•	Mix énergétique régional lorsque disponible.

Principales hypothèses :
	•	Les mineurs d’une même région partagent des conditions économiques comparables.
	•	Les variations intra-régionales s’annulent à l’échelle moyenne.
	•	La dépréciation machine est exclue des coûts bruts (optionnel v1.1).
	•	Les données sont actualisées sur un rythme quotidien (snapshot + historique).

⸻

6. Les trois niveaux de coûts GHI

Coût minimum

Représente les acteurs les plus efficients :
	•	électricité ultra-compétitive,
	•	ASIC modernes,
	•	refroidissement optimisé.

Coût moyen

Représente l’état dominant du marché régional, utile pour les analyses institutionnelles.

Coût maximum

Représente les mineurs peu performants, infrastructures anciennes ou électricité chère.
Indicateur clé pour détecter :
	•	appels d’air pour migrations,
	•	zones sensibles lors des hausses de difficulté,
	•	risques de capitulation régionale.

⸻

7. Interprétation du GHI

Un GHI élevé → réseau sous pression économique.
Un GHI proche ou supérieur au prix du marché → risque de sorties ou migrations.
Un GHI faible → marge opérationnelle importante pour les mineurs les plus efficaces.

Le GHI sert donc de baromètre économique global du réseau Bitcoin.

⸻

8. Transparence et reproductibilité

Le modèle est intégralement documenté et ses calculs peuvent être reproduits à partir des sources ouvertes :
	•	formule d’énergie consommée pour miner 1 BTC,
	•	rendement machine régional,
	•	prix électricité régional,
	•	méthodologie identique pour toutes les régions.

C’est un standard ouvert, sans dépendance à des données propriétaires.

⸻

9. Positionnement par rapport au marché

Le GHI se distingue par :
	•	une approche purement économique (pas d’estimation CO₂ intégrée en v1.0),
	•	une pondération par hashrate réelle,
	•	trois niveaux de coût et non un coût unique,
	•	une transparence totale des formules.

Il complète et dépasse les approches centrées sur la seule énergie.

⸻

10. Rôle du GHI dans l’écosystème institutionnel

Le GHI fournit un indicateur stable pour :
	•	analyses économiques publiques,
	•	études sur la sécurité du réseau,
	•	évaluations de résilience régionale,
	•	travaux universitaires,
	•	rapports gouvernementaux,
	•	suivi de l’industrie minière.

Son ouverture et sa rigueur en font un candidat naturel à la standardisation.
