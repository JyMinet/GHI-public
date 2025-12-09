#!/usr/bin/env python3
import os
import pathlib
import shutil

ROOT = pathlib.Path(__file__).resolve().parent
PUBLIC = ROOT / "public"

def build_page(content_path: pathlib.Path):
    """Compile a .content.html → .html using the layout."""
    layout_path = PUBLIC / "layout.html"
    output_path = content_path.with_suffix("").with_suffix(".html")

    with open(layout_path, "r", encoding="utf-8") as f:
        layout = f.read()

    with open(content_path, "r", encoding="utf-8") as f:
        content = f.read()

    html = layout.replace("{{content}}", content)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"[OK] Built {output_path.relative_to(PUBLIC)}")


def build_all():
    """
    Build all pages in 'public/' AND in ALL subfolders.
    Previously the script only handled the root 'public/' folder.
    """
    print("Building pages...")

    # Parcourt public + sous-dossiers
    for path in PUBLIC.rglob("*.content.html"):
        build_page(path)

    print("Done.")


if __name__ == "__main__":
    build_all()