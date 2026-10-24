#!/usr/bin/env python3
"""Lightweight, dependency-free checks for the Cybersecurity Learning Lab curriculum."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
WEEKS = {
    1: "_notes/week-01-lab-setup.md",
    2: "_notes/week-02-http-basics.md",
    3: "_notes/week-03-owasp-overview.md",
    4: "_notes/week-04-VAPT-Notes.md",
    5: "_notes/week-05-network-discovery.md",
    6: "_notes/week-06-vulnerability-assessment.md",
    7: "_notes/week-07-linux-security.md",
    8: "_notes/week-08-windows-security.md",
    9: "_notes/week-09-active-directory.md",
    10: "_notes/week-10-evidence-collection.md",
    11: "_notes/week-11-risk-remediation.md",
    12: "_notes/week-12-final-report.md",
}
REQUIRED_SECTIONS = ("what to track", "deliverable", "self-check", "completion checklist")
errors = []

def fail(message):
    errors.append(message)

for number, relative in WEEKS.items():
    path = ROOT / relative
    if not path.is_file():
        fail(f"W{number:02}: missing file {relative}")
        continue
    text = path.read_text(encoding="utf-8")
    front_matter = text.split("---", 2)
    if len(front_matter) < 3:
        fail(f"W{number:02}: missing YAML front matter")
        continue
    header = front_matter[1]
    expected_week = f'week: "WEEK {number:02}"'
    for field in ("title:", "summary:", expected_week):
        if field not in header:
            fail(f"W{number:02}: missing front-matter field {field}")
    lowered = text.lower()
    for section in REQUIRED_SECTIONS:
        if section not in lowered:
            fail(f"W{number:02}: missing required section '{section}'")
    if len(text) < 1800:
        fail(f"W{number:02}: guide appears unusually short ({len(text)} characters)")

for relative in ("index.html", "_layouts/default.html", "labs/index.md", "tools/catalog.md", "instructors/index.md", "LICENSE"):
    if not (ROOT / relative).is_file():
        fail(f"Required project file missing: {relative}")

catalog = (ROOT / "tools/catalog.md").read_text(encoding="utf-8") if (ROOT / "tools/catalog.md").exists() else ""
for phrase in ("Have I Been Pwned", "whoami", "not open-source", "NVD", "OWASP ZAP"):
    if phrase.lower() not in catalog.lower():
        fail(f"Tool catalog is missing expected entry/label: {phrase}")

# Catch common accidental empty Markdown destinations, while ignoring Liquid links.
for path in [ROOT / "tools/catalog.md", ROOT / "labs/index.md", ROOT / "instructors/index.md"]:
    if path.exists():
        text = path.read_text(encoding="utf-8")
        if re.search(r"\]\(\s*\)", text):
            fail(f"Empty Markdown link found in {path.relative_to(ROOT)}")

if errors:
    print("Curriculum validation FAILED:")
    for error in errors:
        print(f" - {error}")
    sys.exit(1)

print(f"Curriculum validation passed: {len(WEEKS)} weekly guides and required hub pages checked.")
