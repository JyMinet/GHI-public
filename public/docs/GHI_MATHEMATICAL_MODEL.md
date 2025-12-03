🚀 GHI MATHEMATICAL MODEL v1.0

Global Hashcost Index – Official Mathematical Specification

(FR + EN – Bilingual Institutional Release)

⸻

🇫🇷 PARTIE 1 — VERSION FRANÇAISE (officielle)

1. Objectif

Le Global Hashcost Index (GHI) est un indice institutionnel mesurant le coût réel de production d’un Bitcoin, pondéré par :
	•	la distribution mondiale du hashrate,
	•	les caractéristiques techniques des machines utilisées,
	•	les prix de l’électricité par région,
	•	les coûts opérationnels normés,
	•	la difficulté du réseau.

L’indice est publié en trois variantes :
GHI-min, GHI-avg, GHI-max.

⸻

2. Variables du modèle

2.1 Variables réseau
Symbole
Signification
D
Difficulté du réseau Bitcoin
HR
Hashrate total mondial (TH/s)
R
Récompense par bloc (BTC)
H_r
Part du hashrate de la région r

2.2 Variables régionales

Chaque région r possède un triplet (min / avg / max) :
Symbole
Signification
\eta_r
Efficacité machine (W/TH)
P_{e_r}
Prix électricité (USD/kWh)
\eta_r^{min/avg/max}
Mix machine régional
P_{e_r}^{min/avg/max}
Prix élec régional

3. Hashes nécessaires pour produire 1 BTC

3.1 Hashes par bloc

H_{block} = D \times 2^{32}

3.2 Hashes par BTC

H_{BTC} = \frac{H_{block}}{R}

⸻

4. Énergie consommée pour produire 1 BTC

L’efficacité machine (W/TH) convertie en kWh :

E_{BTC}(kWh) = H_{BTC} \times \eta_r \times 10^{-15}

⸻

5. Coût énergétique régional par BTC

C_{energy, r} = E_{BTC} \times P_{e_r}

⸻

6. Coût total standardisé (overheads)

Norme GHI, basée sur les publications CCAF et données industrielles :
	•	12% cooling + infrastructures
	•	8% maintenance indirecte
	•	5% divers (réseau, sécurité)

Soit un multiplicateur :

K_{overhead} = 1.25

Coût total :

C_{BTC,r} = C_{energy,r} \times K_{overhead}

⸻

7. Pondération mondiale

GHI = \sum_{r=1}^{N} H_r \times C_{BTC,r}

On obtient les trois variantes :

GHI_{min} = \sum H_r \times C_{BTC,r}^{min}
GHI_{avg} = \sum H_r \times C_{BTC,r}^{avg}
GHI_{max} = \sum H_r \times C_{BTC,r}^{max}

⸻

8. Formule institutionnelle finale

C_{BTC,r} =
\left(
\frac{D \times 2^{32}}{R}
\right)
\times \eta_r \times 10^{-15}
\times P_{e_r}
\times 1.25

GHI_{x} =
\sum_r H_r \times C_{BTC,r}^{x}
\quad \text{où } x \in \{min, avg, max\}

⸻

9. Hypothèses standards du modèle

✓ Mix machine basé sur :
	•	Antminer S19 XP
	•	Antminer S21
	•	Whatsminer M50 & M60

✓ Prix élec régionaux :
	•	Données publiques + bilans énergétiques

✓ Données réseau BTC :
	•	API GHI Engine
	•	Valeurs confirmées via plusieurs sources indépendantes

⸻

🇬🇧 PART 2 — ENGLISH VERSION (Official Institutional Text)

1. Objective
The Global Hashcost Index (GHI) measures the real production cost of one Bitcoin, weighted by:
	•	global hashrate distribution,
	•	regional machine efficiency profiles,
	•	electricity prices per region,
	•	standardized operational overhead,
	•	Bitcoin network difficulty.

Three variants exist: GHI-min, GHI-avg, GHI-max.

⸻

2. Model Variables

2.1 Network variables
Symbol
Meaning
D
Network difficulty
HR
Global hashrate (TH/s)
R
Block subsidy (BTC)
H_r
Regional hashrate share

2.2 Regional variables

Each region r exposes min/avg/max values :

3. Hashes required for 1 BTC

Hashes per block

H_{block} = D \times 2^{32}

Hashes per BTC

H_{BTC} = \frac{H_{block}}{R}

⸻

4. Energy consumption per BTC

E_{BTC}(kWh) = H_{BTC} \times \eta_r \times 10^{-15}

⸻

5. Energy cost per BTC

C_{energy,r} = E_{BTC} \times P_{e_r}

⸻

6. Total cost with standardized overhead

Industry-standard overhead multiplier :

K_{overhead} = 1.25

C_{BTC,r} = C_{energy,r} \times K_{overhead}

⸻

7. Global weighting

GHI = \sum_{r=1}^{N} H_r \times C_{BTC,r}

Min/avg/max variants:

GHI_x = \sum H_r \times C_{BTC,r}^{x}
\quad x \in \{min, avg, max\}

⸻

8. Final institutional formula

C_{BTC,r} =
\left(
\frac{D \times 2^{32}}{R}
\right)
\times \eta_r \times 10^{-15}
\times P_{e_r}
\times 1.25

GHI_x =
\sum_r H_r \times C_{BTC,r}^{x}
