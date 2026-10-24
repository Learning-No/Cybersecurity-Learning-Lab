---
title: "Week 12 — Final Report & Portfolio"
week: "WEEK 12"
track: "VAPT ROADMAP"
level: "Beginner → Intermediate"
summary: "Turn lab work into a clear assessment report and a safe public portfolio that demonstrates process, judgment, and remediation."
date: 2026-10-24
---

## Mission
Finish with a professional artifact, not just a list of tools used. A strong portfolio shows how you defined scope, reasoned about evidence, explained risk, recommended a fix, and learned from retesting.

## Report architecture
```text
Executive summary
   ↓
Scope + rules of engagement
   ↓
Methodology + limitations
   ↓
Findings (evidence → impact → remediation)
   ↓
Prioritized remediation plan
   ↓
Retest status + appendices
```

## Report sections
1. **Title and handling label:** clearly identify this as a training-lab report.
2. **Executive summary:** explain the overall situation in plain language, the main risks, and the most important next actions.
3. **Scope and authorization:** targets, date/time, test window, permitted techniques, exclusions, and data-handling boundaries.
4. **Methodology:** phases and tools used, versions, high-level settings, and why each method was appropriate.
5. **Limitations:** unavailable areas, assumptions, test-account limitations, and what was not assessed.
6. **Findings:** title, affected component, prerequisites, sanitized reproducible steps, expected/observed behavior, evidence, impact, severity rationale, root cause, remediation, and retest.
7. **Remediation plan:** priority, owner role, due date, dependencies, and acceptance criteria.
8. **Appendix:** glossary, sanitized evidence references, and source links.

## Guided capstone
1. Choose one local training application or a fictional case study. Write the scope and authorization first.
2. Reuse a finding from your lab notes; do not invent a real-world claim.
3. Ask a peer to reproduce it using only the documented steps and the same safe lab.
4. Revise the report to address gaps in evidence, impact, and remediation.
5. Include a “what I would do differently” section and list the concepts/tools you still need to learn.
6. Create a public version that contains no real IPs, credentials, tokens, cookies, personal data, private logs, or third-party target details.
7. Add a README explaining setup, prerequisites, safety boundaries, screenshots, known limitations, and cleanup instructions.
8. Check every link, spelling, heading, and code sample. Do not claim certifications or production experience you do not have.

## What to track and identify
Scope; report version; finding IDs; evidence references; severity rationale; remediation owners; retest status; limitations; peer-review comments; links and license; redactions; cleanup status; next learning goals.

## Portfolio rubric (score 0–2 each)
- Scope and safety are explicit.
- Evidence is reproducible and sanitized.
- Findings distinguish facts from assumptions.
- Impact and severity are justified.
- Remediation is practical and testable.
- Writing is clear to technical and non-technical readers.
- Repository is organized, licensed appropriately, and contains no secrets.

## Deliverable
Publish a sanitized report, a lab diagram, a remediation register, a README, and a short reflection. Label the work as an educational lab. Include only artifacts you have permission to publish.

## Self-check
- Can a reviewer reproduce the finding without asking you for missing steps?
- Does the report say what was not tested?
- Can a manager understand why the fix matters?
- Does the public repository contain secrets or personal data?

## Completion checklist
- [ ] Scope, methodology, and limitations are explicit.
- [ ] Evidence is sanitized and reproducible.
- [ ] Remediation has owners and retest criteria.
- [ ] Public artifacts contain no secrets or unauthorized data.
- [ ] I can explain every result honestly in an interview.

## Next steps
Choose a specialization: SOC and detection, application security, cloud security, digital forensics, governance/risk/compliance, or security architecture. Continue learning with the [career roadmaps]({{ '/roadmaps/' | relative_url }}) and [open-source tool catalog]({{ '/tools/catalog/' | relative_url }}).
