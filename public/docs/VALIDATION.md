Validation Framework — Global HashCost Index (GHI)

⸻

1. Purpose / Objet

FR
Ce document décrit le cadre de validation du standard Global HashCost Index (GHI).
L’objectif est de permettre à des tiers indépendants (chercheurs, analystes, institutions)
d’évaluer la cohérence, la robustesse et la reproductibilité du standard, sans accès aux données privées.

EN
This document defines the validation framework of the Global HashCost Index (GHI) standard.
Its purpose is to enable independent third parties (researchers, analysts, institutions)
to assess the consistency, robustness, and reproducibility of the standard without access to private data.

⸻

2. Scope of validation / Périmètre de validation

FR
La validation porte exclusivement sur les éléments publics du standard GHI :
	•	Méthodologie publiée
	•	Modèle conceptuel et hypothèses
	•	Structure des données publiques
	•	Processus de génération des snapshots
	•	Mécanismes de traçabilité et d’intégrité (hash, index)

Les données sources privées, les pipelines internes et les jeux de données bruts
ne font pas partie du périmètre de validation publique.

EN
Validation strictly applies to the public components of the GHI standard:
	•	Published methodology
	•	Conceptual model and assumptions
	•	Public data structures
	•	Snapshot generation process
	•	Traceability and integrity mechanisms (hashes, index)

Private source data, internal pipelines, and raw datasets
are explicitly out of scope for public validation.

⸻

3. Public validation artifacts / Artefacts publics de validation

FR
Les validateurs disposent des artefacts publics suivants :
	•	Documentation méthodologique (repository GHI-public)
	•	Spécifications de versioning
	•	Index public des snapshots :
data/index/snapshots_index.jsonl

Chaque entrée de snapshot inclut les métadonnées suivantes :
	•	snapshot_id
	•	sha256
	•	indexed_at
	•	schema_version

Ces éléments permettent de vérifier :
	•	La continuité temporelle des publications
	•	L’absence de réécriture a posteriori
	•	La stabilité des formats publiés

EN
Validators have access to the following public artifacts:
	•	Methodology documentation (repository GHI-public)
	•	Versioning specifications
	•	Public snapshot index:
data/index/snapshots_index.jsonl

Each snapshot entry includes the following metadata:
	•	snapshot_id
	•	sha256
	•	indexed_at
	•	schema_version

These elements allow verification of:
	•	Temporal continuity
	•	Absence of retroactive rewriting
	•	Stability of published formats

⸻

4. Validation dimensions / Axes de validation

FR
Les travaux de validation peuvent couvrir, sans s’y limiter, les dimensions suivantes :

4.1 Cohérence méthodologique
	•	Cohérence interne des hypothèses
	•	Stabilité des définitions dans le temps
	•	Alignement entre documentation et structure des données

4.2 Intégrité temporelle
	•	Vérification de la séquence des snapshot_id
	•	Absence de modification rétroactive non déclarée
	•	Correspondance entre date, hash et index public

4.3 Reproductibilité conceptuelle
	•	Capacité à reproduire la logique du modèle à partir de la méthodologie
	•	Vérification que les règles publiées sont suffisantes pour comprendre les résultats

4.4 Discipline de versioning
	•	Respect du versioning annoncé
	•	Identification claire des changements majeurs / mineurs
	•	Absence de rupture silencieuse de série

EN
Validation efforts may cover, but are not limited to, the following dimensions:

4.1 Methodological consistency
	•	Internal consistency of assumptions
	•	Stability of definitions over time
	•	Alignment between documentation and data structures

4.2 Temporal integrity
	•	Verification of snapshot_id sequencing
	•	Absence of undeclared retroactive modifications
	•	Consistency between date, hash, and public index

4.3 Conceptual reproducibility
	•	Ability to reconstruct the model logic from the methodology
	•	Verification that published rules are sufficient to understand outputs

4.4 Versioning discipline
	•	Compliance with declared versioning rules
	•	Clear identification of major / minor changes
	•	Absence of silent series breaks

⸻

5. Validation process / Processus de validation

FR
	1.	Le validateur s’appuie exclusivement sur les ressources publiques.
	2.	Les observations sont formulées sous forme :
	•	d’issues GitHub, ou
	•	de commentaires écrits transmis au maintainer.
	3.	Les retours peuvent concerner :
	•	la méthodologie,
	•	la documentation,
	•	la gouvernance,
	•	ou le cadre de publication.

Aucune validation ne constitue une approbation commerciale ni un endorsement.

EN
	1.	Validators rely exclusively on public resources.
	2.	Observations are submitted as:
	•	GitHub issues, or
	•	written feedback sent to the maintainer.
	3.	Feedback may relate to:
	•	methodology,
	•	documentation,
	•	governance,
	•	or the publication framework.

No validation constitutes commercial approval or endorsement.

⸻

6. Publication of validation feedback / Publication des retours

FR
Les retours de validation peuvent être :
	•	Résumés dans la documentation publique (avec accord explicite du validateur)
	•	Référencés de manière anonymisée
	•	Utilisés pour améliorer le standard dans des versions ultérieures

Le standard GHI ne revendique aucune certification externe à ce stade.

EN
Validation feedback may be:
	•	Summarized in public documentation (with explicit validator consent)
	•	Referenced in anonymized form
	•	Used to improve future versions of the standard

At this stage, the GHI standard claims no external certification.

⸻

7. Independence and limitations / Indépendance et limites

FR
	•	Les validateurs restent entièrement indépendants.
	•	Le GHI ne fournit aucune donnée privée dans le cadre de la validation publique.
	•	Les conclusions relèvent de la seule responsabilité des validateurs.

EN
	•	Validators remain fully independent.
	•	GHI provides no private data as part of public validation.
	•	Conclusions are solely the responsibility of the validators.

⸻

8. Status / Statut

FR
Ce cadre de validation est volontairement minimal et évolutif.
Il pourra être enrichi à mesure que le standard GHI atteindra des niveaux
d’adoption institutionnelle plus avancés.

EN
This validation framework is intentionally minimal and evolving.
It may be extended as the GHI standard reaches higher levels
of institutional adoption.

⸻

9. License / Licence

FR
Ce document fait partie du standard ouvert GHI
et est publié sous licence MIT, conformément au fichier LICENSE.md du dépôt.

EN
This document is part of the GHI open standard
and is released under the MIT license, in accordance with the repository’s LICENSE.md.