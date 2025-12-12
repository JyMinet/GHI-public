#!/usr/bin/env python3
"""
GHI – Simple static builder (clean version)

- Uses public/layout.html as the global template.
- Recursively finds all *.content.html files under public/.
- Replaces the placeholder <!-- PAGE_CONTENT --> with page content.
- Replaces {{ROOT}} with the correct relative prefix based on depth:
    - root file          -> ""
    - /api/file.html     -> "../"
    - /x/y/file.html     -> "../../"
- Writes the corresponding .html file (same path, without .content).
"""

from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent
PUBLIC_DIR = ROOT_DIR / "public"
LAYOUT_PATH = PUBLIC_DIR / "layout.html"

PLACEHOLDER = "<!-- PAGE_CONTENT -->"
ROOT_TOKEN = "{{ROOT}}"


def compute_root_prefix(content_path: Path) -> str:
    """
    Compute relative prefix (../) depending on file depth from public/.
    """
    rel = content_path.relative_to(PUBLIC_DIR)
    depth = max(len(rel.parts) - 1, 0)
    return "../" * depth


def build_page(content_path: Path, layout_html: str) -> None:
    """
    Generate the .html file corresponding to a *.content.html file.
    """
    page_content = content_path.read_text(encoding="utf-8")

    root_prefix = compute_root_prefix(content_path)

    if PLACEHOLDER not in layout_html:
        raise SystemExit(f"Placeholder not found in layout.html: {PLACEHOLDER}")

    final_html = (
        layout_html
        .replace(ROOT_TOKEN, root_prefix)
        .replace(PLACEHOLDER, page_content)
    )

    rel = content_path.relative_to(PUBLIC_DIR)
    out_name = rel.name.replace(".content.html", ".html")
    out_path = PUBLIC_DIR / rel.parent / out_name

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(final_html, encoding="utf-8")

    print(f"[GHI build] Built {out_path.relative_to(PUBLIC_DIR)}")


def main() -> None:
    if not LAYOUT_PATH.exists():
        raise SystemExit(f"Layout not found: {LAYOUT_PATH}")

    layout_html = LAYOUT_PATH.read_text(encoding="utf-8")

    content_files = sorted(PUBLIC_DIR.rglob("*.content.html"))

    if not content_files:
        print("[GHI build] No *.content.html files found.")
        return

    print(f"[GHI build] Using layout: {LAYOUT_PATH}")

    for content_path in content_files:
        build_page(content_path, layout_html)

    print("[GHI build] Done.")


if __name__ == "__main__":
    main()