---
title: "Week 03 — OWASP Top 10 & Secure Design"
week: "WEEK 03"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Connect common application risk categories to threat scenarios, evidence, prevention, and secure design decisions."
date: 2026-10-24
---

## Mission and outcomes
Learn to reason about security weaknesses before choosing a tool. The OWASP Top 10 is an awareness document, not a complete test plan, severity calculator, or guarantee that an application is secure.

## Threat-to-control flow

```text
Asset / business goal
        ↓
Threat scenario → Weak control / trust boundary
        ↓
Possible impact → Evidence needed
        ↓
Preventive + detective control → Retest
```

## Risk categories to recognize
- **Broken access control:** a user can view or change another user's data or perform a role-restricted action. Prevent with server-side authorization checks, deny-by-default rules, and tests for each role.
- **Cryptographic failures:** sensitive data is exposed or inadequately protected. Identify the data classification and where it is stored/transmitted; use vetted libraries and key management.
- **Injection:** untrusted input changes the meaning of a query or command. Prefer parameterized queries, safe APIs, and context-aware output handling.
- **Insecure design:** requirements omit abuse cases or security controls. Use threat modeling, least privilege, and security acceptance criteria.
- **Security misconfiguration:** unnecessary features, unsafe defaults, or excessive permissions increase exposure. Harden defaults and review configuration.
- **Authentication failures:** identity proofing, credential handling, or session management is weak. Use appropriate MFA, rate limits, secure recovery, and session invalidation.
- **Software/data integrity failures:** updates, build artifacts, or deserialization trust assumptions are not verified. Protect build pipelines and verify sources.
- **Logging and monitoring failures:** useful events are missing, unreviewed, or unsafe to retain. Log relevant events while excluding secrets.
- **SSRF and related trust-boundary issues:** server-side components make requests based on untrusted input. Apply allowlists, egress controls, and safe URL handling.

Use the current official OWASP list for exact categories and version: [OWASP Top 10](https://owasp.org/www-project-top-ten/).

## Guided lab — make a risk map
1. Use a fictional shopping app with customer and administrator roles.
2. List assets: accounts, orders, addresses, payment references, and admin functions.
3. For each asset, write one threat scenario in plain language.
4. Identify the missing or weak control that would make it possible.
5. Record likely impact and evidence needed to validate the scenario.
6. Choose a preventive control and a detective control where useful.
7. Use an intentionally vulnerable training app only if you need to observe a prebuilt example. Do not test real shops or accounts.

## What to track and identify
For each scenario, record **asset, actor, preconditions, trust boundary, weakness, impact, evidence, existing controls, remediation, and residual risk**. Distinguish a theoretical scenario from an observed lab finding. Do not assign severity from a category name alone.

## Deliverable
Create a risk map for at least five scenarios. For each, include a fictional example, the affected asset, business impact, a prevention strategy, and a way to verify the fix.

## Self-check
- How do authentication and authorization differ?
- Why is “injection” not enough detail for a useful finding?
- Why might one issue be critical in one context and low impact in another?
- What should a report say when evidence is incomplete?

## Completion checklist
- [ ] I can explain five risk categories in plain language.
- [ ] I linked each scenario to impact and a control.
- [ ] I separated observed facts from assumptions.
- [ ] I used fictional examples or an authorized training lab.

## Further reading
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)
