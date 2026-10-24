---
title: "Week 04 — VAPT Notes"
week: "WEEK 04"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Practice a structured web application testing workflow in an authorized lab and document findings clearly."
date: 2026-10-24
---
## Learning objectives

- Follow a defined scope and testing checklist.
- Understand how to observe and document web application behavior.
- Describe a finding with evidence, impact, and remediation.

## Before you begin

Use only a local training application, a deliberately vulnerable lab, or a system for which you have explicit permission. Confirm the written scope and stop if an activity could disrupt a service or expose real user data.

## Testing workflow

1. **Scope:** record the approved target, allowed test types, and time window.
2. **Understand:** map the application's normal pages, roles, and expected behavior.
3. **Observe:** use browser Developer Tools to inspect requests and responses in the lab.
4. **Validate safely:** test one hypothesis at a time without accessing other people's data or disrupting the service.
5. **Document:** record reproducible steps, sanitized evidence, risk, and a practical fix.
6. **Retest:** confirm the fix in the authorized environment.

## Finding template

- **Title:**
- **Affected lab URL/component:**
- **Preconditions:**
- **Steps to reproduce:**
- **Expected result:**
- **Observed result:**
- **Impact:**
- **Severity and rationale:**
- **Recommended remediation:**
- **Retest result:**

## Personal learning log

- **Concepts learned:**
- **Tools used:**
- **What surprised me:**
- **Questions to revisit:**

## Completion checklist

- [ ] I confirmed the lab scope and permission.
- [ ] I documented observations without including credentials, tokens, or personal data.
- [ ] I explained impact and remediation, not just the tool used.
- [ ] I saved sanitized evidence and a short summary.

## Further reading

- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

**Safety rule:** never test public or third-party systems without explicit authorization.
