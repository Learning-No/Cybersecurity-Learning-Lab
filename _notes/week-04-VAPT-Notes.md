---
title: "Week 04 — Web Testing in an Authorized Lab"
week: "WEEK 04"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Follow a structured web testing workflow: confirm scope, map normal behavior, validate safely, and report findings."
date: 2026-10-24
---

## Week overview
Turn the first three weeks into a repeatable process. Work only in a local deliberately vulnerable application or a training lab that explicitly permits the activity.

## Learning objectives
- Confirm scope, rules of engagement, and stop conditions before testing.
- Map normal pages, features, and user roles.
- Capture sanitized evidence and explain impact and remediation.

## Testing workflow
1. **Confirm scope:** record approved hosts, application areas, allowed techniques, test window, and contacts.
2. **Map the app:** list pages, forms, roles, and important workflows.
3. **Establish a baseline:** note normal behavior using a lab account and dummy data.
4. **Form a hypothesis:** state one security question and expected secure behavior.
5. **Validate safely:** use the lab's intended exercises; avoid destructive tests, real personal data, and denial-of-service activity.
6. **Document:** record reproducible steps, expected vs observed results, impact, and a practical fix.
7. **Retest:** repeat the same safe steps after a fix.

## Evidence template
- **Finding title:**
- **Affected lab component:**
- **Scope/permission reference:**
- **Preconditions:**
- **Steps to reproduce:**
- **Expected behavior:**
- **Observed behavior:**
- **Impact and affected users:**
- **Severity rationale:**
- **Remediation:**
- **Retest result:**

## Guided safe exercise
Use a guided lab with a fictional application and test accounts. Document two normal workflows and one lesson from the lab's built-in challenge. Remove cookies, tokens, personal data, and unrelated headers from screenshots.

## Deliverable
Write a practice report with executive summary, scope, methodology, observations, and recommended fixes. Label simulated findings as lab findings.

## Self-check
- Why do scope and authorization come before tool selection?
- What makes evidence useful and reproducible?
- What should you do if sensitive real data appears unexpectedly?

## Completion checklist
- [ ] I wrote down the permitted scope.
- [ ] I separated observed facts from assumptions.
- [ ] I included impact and remediation.
- [ ] I sanitized evidence and recorded a retest plan.

## Further reading
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

**Safety rule:** never test public or third-party systems without explicit authorization.
