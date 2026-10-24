# Cybersecurity Learning Lab

A GitHub Pages-compatible knowledge base for learning cybersecurity responsibly.

## Included
- Cybersecurity career roadmap and 12-week VAPT learning plan.
- Markdown notes in `_notes/`, automatically listed by Jekyll.
- Browser-local progress tracking and note search.
- Responsive dark interface and responsible-use reminders.

## Add a note
Create a Markdown file in `_notes/`, such as `_notes/week-04-lab-practice.md`, and add front matter at the top:

```yaml
---
title: "Week 04 — Lab Practice"
week: "WEEK 04"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "A short description shown on the notes card."
date: 2026-10-24
---
```

Write your note below the second `---`. GitHub Pages rebuilds the site and lists it automatically. Use lowercase filenames with hyphens.

## Publish with GitHub Pages
1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/(root)`, then save.
4. Wait for the Pages build and open the URL shown in Settings → Pages.

The intended project URL is `https://learning-no.github.io/Cybersecurity-Learning-Lab/`; verify the exact URL and build status in Settings → Pages.

## Responsible-use rules
Only test systems you own or have explicit permission to assess. Follow written scope, use isolated labs, avoid disruption, and never commit passwords, API keys, session tokens, personal data, or sensitive logs.

The existing MIT license is retained.


## Learning hub pages
- **Concept library:** diagrams, definitions, guided steps, and links between networking concepts.
- **Open-source tool directory:** task-based catalog with descriptions, starter examples, and official documentation.
- **Roadmaps:** foundations, VAPT, SOC, application security, cloud, and security architecture.
- **Security architecture:** data-flow diagrams, trust boundaries, threat modelling, controls, and trade-offs.
- **Practice lab:** safe exercises, free training platforms, and portfolio ideas.
- **Resources:** free guides and publications, security news, advisories, and vulnerability databases.

Most learning pages include a **Print / Save as PDF** button. Choose “Save as PDF” in your browser's print dialog to keep a personal copy. Respect each source's license and do not redistribute copyrighted material without permission.

The tool directory prioritizes open-source tools. Only use discovery or testing features on systems you own or have explicit authorization to assess.
