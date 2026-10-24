---
title: "Week 04 — Web Testing in an Authorized Lab"
week: "WEEK 04"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Use a scoped, repeatable web assessment workflow and learn to validate findings without damaging systems or exposing data."
date: 2026-10-24
---

## Mission and outcomes
Practice the process used in a responsible assessment: define scope, understand normal behavior, form a testable hypothesis, validate safely, record evidence, and explain remediation. Tools do not grant permission.

## Assessment workflow

```text
Written authorization + scope
          ↓
Map app and user roles
          ↓
Record baseline behavior
          ↓
Question / hypothesis
          ↓
Safe lab validation
          ↓
Evidence → impact → remediation
          ↓
Retest and close out
```

## Before touching the application
Write down the owner, exact target, permitted test window, allowed methods, excluded systems, test accounts, rate/volume limits, data-handling rules, emergency contact, and stop conditions. If any detail is unclear, pause and ask the instructor or owner.

## Step-by-step guided lab
1. Launch a local deliberately vulnerable training application using the [lab setup guide]({{ '/labs/' | relative_url }}), or use a training platform that explicitly authorizes the exercise.
2. Create a map of pages, forms, user roles, and key workflows using dummy data.
3. Record normal behavior for each workflow before testing anything.
4. Pick one lesson built into the training application. Write the question you are testing and the expected secure behavior.
5. Follow the lab's guided instructions. Avoid destructive tests, denial-of-service actions, persistence, real accounts, and real personal data.
6. Capture the smallest evidence needed to demonstrate the behavior. Redact cookies, tokens, email addresses, and other identifiers.
7. Explain impact in terms of affected role/data/workflow, not dramatic speculation.
8. Recommend a fix that addresses the root cause, then describe how a retest would verify it.
9. Stop and report if real sensitive data appears or the target differs from the approved scope.

## Evidence template
- **Finding title and affected component:**
- **Scope / authorization reference:**
- **Preconditions and test account role:**
- **Reproduction steps (lab only):**
- **Expected vs observed result:**
- **Sanitized evidence:**
- **Impact and affected users:**
- **Severity rationale and uncertainty:**
- **Root cause / remediation:**
- **Retest criteria and result:**

## What to track and identify
Track the date/time and timezone, lab version, browser/tool versions, target identifier, account role, relevant configuration, steps taken, exact observed behavior, and test limitations. Never store secrets just to make a report reproducible.

## Deliverable
Write a short lab report with an executive summary, scope, methodology, two normal workflows, one simulated finding, evidence, impact, remediation, and retest criteria. Label all simulated findings clearly as training-lab results.

## Self-check
- Why must scope precede tool selection?
- What makes evidence reproducible but still safe to share?
- How do you distinguish impact from exploitability?
- What do you do when a real secret appears unexpectedly?

## Completion checklist
- [ ] I wrote scope and stop conditions first.
- [ ] I mapped normal behavior before validation.
- [ ] I sanitized evidence and explained uncertainty.
- [ ] I included root-cause remediation and a retest plan.

## Further reading
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP ZAP Getting Started](https://www.zaproxy.org/getting-started/)
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
