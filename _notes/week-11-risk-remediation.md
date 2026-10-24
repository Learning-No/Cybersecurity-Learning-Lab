---
title: "Week 11 — Risk Rating & Remediation"
week: "WEEK 11"
track: "VAPT ROADMAP"
level: "Beginner → Intermediate"
summary: "Translate technical findings into contextual business risk, practical fixes, clear ownership, and measurable retesting."
date: 2026-10-24
---

## Mission
A useful report helps a system owner make a decision. Risk is not just a scanner score: it depends on impact, likelihood, exposure, existing controls, affected assets, and business context.

## Decision flow
```text
Validated finding
      ↓
Affected asset + business process
      ↓
Impact × likelihood + exposure + controls
      ↓
Priority + owner + due date
      ↓
Fix / mitigate / accept with approval
      ↓
Retest evidence + residual risk
```

## Concepts
- **Severity:** technical seriousness of a weakness under defined assumptions.
- **Risk:** potential loss in a particular context; business impact and likelihood matter.
- **Remediation:** correcting the root cause.
- **Mitigation:** reducing risk without fully removing the root cause.
- **Risk acceptance:** a documented decision by an authorized owner, not an informal decision by the tester.
- **Residual risk:** risk remaining after controls or fixes.
- **Retest:** repeat the relevant safe verification after a change.

## Guided lab
1. Select three validated findings from your earlier lab report or a provided sample dataset.
2. For each, identify the asset, data/process affected, reachable users, prerequisites, and likely consequences.
3. Use CVSS when appropriate, record the vector/source, and explain environmental factors separately. Do not invent a score if evidence is missing.
4. Assign priority using your course's agreed scale. Explain why each item sits above or below another.
5. Recommend a root-cause fix, a temporary mitigation if necessary, and an owner role.
6. Define objective retest criteria before the fix is applied.
7. After the sample fix or simulated change, record pass/fail and remaining limitations.
8. For any accepted risk, document who approved it, why, expiration/review date, and compensating controls.

## What to track and identify
Finding ID; affected asset; business owner; data sensitivity; exposure; impact; likelihood assumptions; severity source/vector; priority rationale; root cause; fix/mitigation; owner; due date; dependencies; retest steps/result; residual risk; approval.

## Deliverable
Create a remediation register with three findings, a ranked queue, owner roles, target dates, retest criteria, and a short explanation of the trade-offs.

## Self-check
- Why is CVSS not identical to business risk?
- Why should a tester not silently accept risk on behalf of the owner?
- What makes a retest meaningful?
- When might temporary isolation be useful while a patch is prepared?

## Completion checklist
- [ ] Priority includes context and explicit assumptions.
- [ ] Fix addresses root cause where possible.
- [ ] Each item has an owner and due date.
- [ ] Retest criteria and residual risk are recorded.

## Further reading
- [FIRST CVSS](https://www.first.org/cvss/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
