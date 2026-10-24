---
layout: default
title: Instructor & College Training Guide
description: A faculty-friendly plan for delivering the Cybersecurity Learning Lab as a safe, measurable student training program.
permalink: /instructors/
---

<section class="hub-hero"><p class="eyebrow">FACULTY GUIDE · CLASSROOM DELIVERY</p><h1>Teach the method. <em>Measure the learning.</em></h1><p class="lead">A practical delivery plan for colleges, clubs, and beginner-to-intermediate cohorts. The site is a static educational resource; it is not a student-management system and does not provide instructor accounts or server-side progress reporting.</p></section>
<section class="section prose" markdown="1">
## What students should be able to do
By the end of the 12-week sequence, a student should be able to:
- Explain essential networking, web, operating-system, and identity concepts.
- Create and document an isolated practice environment.
- Read basic network/web/host evidence and distinguish observations from assumptions.
- Assess lab findings against reliable references, explain impact, and recommend remediation.
- Produce a sanitized, reproducible technical report and communicate it to a non-specialist.
- Describe scope, authorization, privacy, and safety boundaries before choosing tools.

## Suggested weekly classroom rhythm
A flexible 4–5 hour model; adjust to your timetable and students' prior experience.

| Segment | Suggested time | Instructor activity | Student evidence |
|---|---:|---|---|
| Concept briefing | 45–60 min | Explain vocabulary, architecture, and common misconceptions | Short concept map |
| Demonstration | 30–45 min | Show normal behavior and how to read outputs | Annotated notes |
| Guided lab | 90–120 min | Supervise an approved local lab or supplied dataset | Lab notebook |
| Review | 30 min | Compare expected vs observed results | Peer review |
| Reflection | 20–30 min | Ask students to explain limitations and next steps | Exit ticket / self-check |

## Suggested 12-week delivery plan

1. **Lab setup and networking:** safety scope, IP addressing, DNS, TCP/UDP, ports, and environment diagram.
2. **HTTP and web fundamentals:** request/response, headers, cookies, sessions, TLS, and sanitized browser inspection.
3. **OWASP concepts:** threat scenarios, access control, injection concepts, configuration, impact, and prevention.
4. **Authorized web testing:** rules of engagement, baseline behavior, hypothesis, safe validation, and report writing.
5. **Network discovery:** asset inventory, expected services, local sockets, exposure, and evidence confidence.
6. **Vulnerability assessment:** advisory matching, applicability, false positives, risk context, and remediation queue.
7. **Linux security:** users/groups, file permissions, services, logs, updates, and least privilege.
8. **Windows security:** baseline state, firewall profiles, Defender, ACLs, updates, and Event Viewer.
9. **Active Directory concepts:** domains, directory objects, group policy, delegation, and identity lifecycle.
10. **Evidence collection:** minimal evidence, sanitization, timestamps, reproducibility, and handling rules.
11. **Risk and remediation:** priority, ownership, due dates, retest criteria, and residual risk.
12. **Capstone:** written report, remediation register, peer reproduction, safe portfolio, and reflection.

## Assessment rubric (100 points)

| Area | Points | Evidence expected |
|---|---:|---|
| Scope and safe practice | 15 | Clear authorization, target boundary, exclusions, and cleanup |
| Technical understanding | 15 | Correct concepts and a readable architecture/flow diagram |
| Lab execution and observations | 20 | Repeatable steps, expected vs observed results, tool/version notes |
| Evidence quality | 15 | Relevant, sanitized, timestamped, and reproducible evidence |
| Risk reasoning | 15 | Impact, likelihood assumptions, limitations, and severity rationale |
| Remediation and retest | 10 | Practical fix, owner role, measurable acceptance criteria |
| Communication and reflection | 10 | Clear report, honest limitations, lessons learned, and next steps |

**Automatic safety gate:** any work outside approved scope, collection of real credentials/personal data, or public exposure of a vulnerable lab must be stopped and reviewed before the assignment can pass. Apply institutional policy consistently and use the event as a safety learning opportunity.

## Instructor pre-flight checklist
- [ ] Approve the target, techniques, time window, and stop conditions in writing.
- [ ] Test the exact lab image/container and version before class.
- [ ] Confirm vulnerable services are loopback-only or on a dedicated isolated network.
- [ ] Disable router port-forwarding and avoid bridged networking for vulnerable VMs.
- [ ] Provide dummy accounts and synthetic data; never distribute real student or staff data.
- [ ] Prepare a reset/snapshot procedure and a fallback offline dataset.
- [ ] Check resource requirements, software licensing, accessibility, and network policy.
- [ ] Explain where students may store notes and what must never be uploaded publicly.

## Tool selection and licensing
The tool catalog is curated, not exhaustive. Verify each project's current license, maintenance status, platform support, dependencies, and terms before teaching it. “Free to use” does not always mean “open source.” Online services (for example, Have I Been Pwned) are labelled separately and must be used only with the data owner's consent.

## Deployment and privacy limitations
This website is built as a static GitHub Pages site. Progress checkboxes are saved in the student's own browser and do not sync to an instructor. Do not ask students to enter grades, personal records, passwords, or sensitive organizational details into the site. If the institution needs authenticated accounts, central progress tracking, or protected submissions, that requires a separately designed backend, privacy review, access controls, backups, and institutional approval.

## Capstone submission checklist
- [ ] Lab scope and network diagram
- [ ] Sanitized lab notes and evidence
- [ ] At least one well-reasoned finding (or explicitly fictional scenario)
- [ ] Risk/remediation register with retest criteria
- [ ] Final report and repository README
- [ ] Reflection describing limitations and next learning goals
- [ ] No secrets, real personal data, or unauthorized target details

## Helpful links
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CISA Secure by Design](https://www.cisa.gov/securebydesign)
- [Lab setup guide]({{ '/labs/' | relative_url }}) · [Tool catalog]({{ '/tools/catalog/' | relative_url }}) · [12-week plan]({{ '/' | relative_url }}#vapt-sprint)
</section>
