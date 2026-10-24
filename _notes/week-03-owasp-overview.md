---
title: "Week 03 — OWASP Top 10 Concepts"
week: "WEEK 03"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Understand common web application risk categories and connect each one to prevention, impact, and secure design."
date: 2026-10-24
---

## Week overview
The OWASP Top 10 is an awareness resource for discussing common web application risks. It is not a complete checklist or a replacement for a defined testing methodology.

## Learning objectives
- Recognize common web application risk categories.
- Explain authentication, authorization, least privilege, and input validation.
- Describe a risk using conditions, impact, evidence, and remediation.

## Concepts to learn
- **Broken access control:** users can perform actions outside their intended permissions.
- **Cryptographic failures:** sensitive information is not adequately protected.
- **Injection:** untrusted input is interpreted as part of a command or query.
- **Insecure design:** risks were not addressed in requirements or architecture.
- **Security misconfiguration:** unsafe defaults or unnecessary features increase exposure.
- **Authentication failures:** identity or session handling is weak.
- **Vulnerable components:** dependencies are outdated or contain known weaknesses.
- **Logging and monitoring failures:** important security events are not recorded or reviewed.

## Guided safe exercise
1. Read the official OWASP Top 10 overview.
2. Make a table: category, fictional example, impact, prevention, and evidence needed.
3. Imagine a fictional app with ordinary and administrator roles; describe what each role should be allowed to do.
4. Choose three categories and explain how secure design or code review could reduce risk.

## Deliverable
Create a one-page risk map with at least five categories, plain-language explanations, and a defensive control for each.

## Self-check
- How are authentication and authorization different?
- Why is a vulnerability category not enough to assign severity?
- Why should remediation be included in a report?

## Completion checklist
- [ ] I can explain five risk categories in plain language.
- [ ] I linked each example to impact and prevention.
- [ ] I used fictional examples or an authorized training lab.
- [ ] I can find the official OWASP reference.

## Further reading
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
