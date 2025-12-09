#!/usr/bin/env python3
"""
GHI – Simple static builder

- Prend public/layout.html comme template global.
- Cherche tous les fichiers *.content.html dans public/ (récursif).
- Remplace le placeholder <!-- PAGE_CONTENT --> par le contenu.
- Remplace le token {{ROOT}} par un préfixe relatif en fonction de la profondeur :
    - fichier à la racine      -> ROOT = ""
    - fichier dans /api/       -> ROOT = "../"
    - fichier dans /x/y/       -> ROOT = "../../"
- Écrit le fichier .html correspondant (même chemin, sans .content).
"""

from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent
PUBLIC_DIR = ROOT_DIR / "public"
LAYOUT_PATH = PUBLIC_DIR / "layout.html"

PLACEHOLDER = "<!-- PAGE_CONTENT -->"
ROOT_TOKEN = "{{ROOT}}"


def compute_root_prefix(content_path: Path) -> str:
    """
    Calcule le préfixe relatif (../) en fonction de la profondeur
    du fichier par rapport à public/.
    """
    rel = content_path.relative_to(PUBLIC_DIR)  # ex: "api/api-v1.1.content.html"
    # nombre de sous-dossiers = nb de parties - 1 (le fichier lui-même)
    depth = max(len(rel.parts) - 1, 0)
    return "../" * depth


def build_page(content_path: Path) -> None:
    """
    Génère le .html correspondant à un fichier *.content.html.
    """
    layout_html = LAYOUT_PATH.read_text(encoding="utf-8")
    page_content = content_path.read_text(encoding="utf-8")

    root_prefix = compute_root_prefix(content_path)

    # Remplacement du token ROOT puis du contenu de page
    final_html = (
        layout_html
        .replace(ROOT_TOKEN, root_prefix)
        .replace(PLACEHOLDER, page_content)
    )

    rel = content_path.relative_to(PUBLIC_DIR)
    # ex: "api/api-v1.1.content.html" -> "api/api-v1.1.html"
    out_name = rel.name.replace(".content.html", ".html")
    out_path = PUBLIC_DIR / rel.parent / out_name
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(final_html, encoding="utf-8")
    print(f"[GHI build] Built {out_path.relative_to(PUBLIC_DIR)}")


def main() -> None:
    if not LAYOUT_PATH.exists():
        raise SystemExit(f"Layout not found: {LAYOUT_PATH}")

    # Recherche récursive de tous les *.content.html sous public/
    content_files = sorted(PUBLIC_DIR.rglob("*.content.html"))

    if not content_files:
        print("[GHI build] No *.content.html files found.")
        return

    print(f"[GHI build] Using layout: {LAYOUT_PATH}")
    for content_path in content_files:
        build_page(content_path)

    print("[GHI build] Done.")


if __name__ == "__main__":
    main()