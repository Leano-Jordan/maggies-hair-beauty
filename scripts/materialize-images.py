#!/usr/bin/env python3
from pathlib import Path
from urllib.request import Request, urlopen
from PIL import Image
from io import BytesIO
import re, json

ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets" / "images" / "editorial"
ASSET_DIR.mkdir(parents=True, exist_ok=True)

# Approved editorial image IDs already used by the site. These remain replaceable
# with client-owned photography before production handover.
IMAGE_IDS = [
    "20417319","7388963","3993453","25471958","7755454","8468036",
    "16363472","8789240","7506935","5938592","9545499","6774277",
    "5473284","7755542","7195808","7750117","6954970"
]

def source_url(photo_id):
    return f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg?auto=compress&cs=tinysrgb&w=1600"

def download(photo_id):
    target = ASSET_DIR / f"{photo_id}-1600.webp"
    if target.exists():
        return
    req = Request(source_url(photo_id), headers={"User-Agent":"Maggies-Image-Materializer/1.0"})
    with urlopen(req, timeout=45) as response:
        data = response.read()
    image = Image.open(BytesIO(data)).convert("RGB")
    image.save(target, "WEBP", quality=84, method=6)
    for width in (480, 768, 1200):
        out = ASSET_DIR / f"{photo_id}-{width}.webp"
        image.copy()
        ratio = width / image.width
        height = max(1, round(image.height * ratio))
        image.resize((width, height), Image.Resampling.LANCZOS).save(out, "WEBP", quality=80, method=6)

def rewrite_file(path):
    text = path.read_text(encoding="utf-8")
    original = text
    for photo_id in IMAGE_IDS:
        pattern = rf"https://images\.pexels\.com/photos/{photo_id}/pexels-photo-{photo_id}\.jpeg[^\"'<>\s]*"
        prefix = "../" if path.parent.name == "pages" else ""
        base = f"{prefix}assets/images/editorial/{photo_id}-"
        text = re.sub(pattern, base + "1200.webp", text, count=0)
        # Repair generated srcset values from any previous remote variants.
        text = re.sub(
            rf"{re.escape(base)}1200\.webp\s+srcset-placeholder",
            base + "1200.webp",
            text
        )
    # Add responsive srcsets to locally materialized image references.
    def srcset(m):
        prefix, photo_id, width = m.group(1), m.group(2), m.group(3)
        return f"{prefix}{photo_id}-{width}.webp"
    # Existing local src values are normalized to a 1200 default; add srcsets
    # only where an image has an alt attribute and does not already have one.
    def add_set(match):
        tag = match.group(0)
        if "srcset=" in tag:
            return tag
        m = re.search(r'(src="[^"]*/)(\d+)-1200\.webp"', tag)
        if not m:
            return tag
        folder, photo_id = m.group(1), m.group(2)
        return tag[:-1] + f' srcset="{folder}{photo_id}-480.webp 480w, {folder}{photo_id}-768.webp 768w, {folder}{photo_id}-1200.webp 1200w, {folder}{photo_id}-1600.webp 1600w"'
    text = re.sub(r"<img\b[^>]*>", add_set, text)
    # Gallery/lightbox links should use the largest local asset.
    for photo_id in IMAGE_IDS:
        prefix = "../" if path.parent.name == "pages" else ""
        text = re.sub(
            rf'href="{re.escape(prefix)}assets/images/editorial/{photo_id}-1200\.webp"',
            f'href="{prefix}assets/images/editorial/{photo_id}-1600.webp"',
            text
        )
    if text != original:
        path.write_text(text, encoding="utf-8")

for photo_id in IMAGE_IDS:
    download(photo_id)

for path in [ROOT/"index.html", *sorted((ROOT/"pages").glob("*.html"))]:
    rewrite_file(path)

print(f"Materialized {len(IMAGE_IDS)} editorial images locally.")
