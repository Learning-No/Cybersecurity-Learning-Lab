---
title: "Week 09 — Active Directory Concepts in a Lab"
week: "WEEK 09"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Understand domains, directory objects, authentication, group policy, delegation, and identity protection through diagrams and a safe lab."
date: 2026-10-24
---

## Mission
Learn the enterprise identity model before using assessment tools. Active Directory is central to many organizations; only use a deliberately created training domain or instructor-provided diagrams/data.

## Concept diagram
```text
User / workstation
       │ domain authentication
       ▼
Domain Controller ── directory: users, groups, computers
       │
       ├── Group Policy → settings applied to users/computers
       └── Groups / delegated rights → access to resources
                         │
                         ▼
                File server / application
```

## Key terms
- **Domain:** an administrative and identity boundary for directory-managed resources.
- **Domain controller (DC):** server role that provides directory and authentication services.
- **Directory object:** a user, group, computer, or other managed object.
- **Group Policy:** centrally managed configuration for domain users/computers.
- **Privilege / delegation:** rights assigned to a user or group; excessive privilege increases blast radius.
- **Service account:** identity used by an application/service; should have minimal required rights and managed credentials.
- **Tiering:** separation of high-privilege administrative tasks from ordinary user activity.

## Guided lab (diagram-first option)
1. Draw a fictional company with one domain, two ordinary users, one help-desk group, one server, and one administrator role.
2. Mark which identities can sign in to which systems and which resources each role should access.
3. Define three access rules in plain language and identify where they should be enforced.
4. Review an instructor-provided sanitized group membership or policy report. Identify nested groups and unexpected privilege paths; do not query real organization directories.
5. Discuss secure onboarding, role change, and offboarding: how are accounts approved, reviewed, disabled, and audited?
6. If using a lab domain, document the isolated network and reset plan before creating accounts. Never connect a vulnerable lab domain to a production network.
7. Suggest two detective signals: privileged group membership changes and unusual authentication patterns, for example.

## What to track and identify
Domain and lab boundary; object type; owner; group membership; effective permission; administrative tier; policy scope; service-account purpose; lifecycle status; evidence source; expected vs observed access; remediation owner.

## Defensive tools and references
- [Samba](https://www.samba.org/) is open-source software with directory/domain capabilities; use official docs for a lab.
- [BloodHound Community Edition](https://github.com/SpecterOps/BloodHound) can visualize directory relationships; use only on an isolated lab dataset you are authorized to analyze.
- [PingCastle](https://www.pingcastle.com/) is **not open source**; do not treat it as part of the open-source catalogue.
- [Microsoft AD security guidance](https://learn.microsoft.com/windows-server/identity/ad-ds/) is reference documentation.

## Deliverable
Create an identity map showing at least six fictional objects, role-based access rules, one excessive-privilege scenario, a remediation, and two audit signals.

## Self-check
- Why should daily accounts not normally be domain administrators?
- What does a nested group change about access review?
- Why are service accounts easy to overlook?
- How do preventive controls and detective signals complement each other?

## Completion checklist
- [ ] I can explain domain, DC, object, group, GPO, and delegation.
- [ ] I mapped a fictional or isolated lab only.
- [ ] I identified least-privilege and lifecycle controls.
- [ ] I included detection and remediation ideas.

## Further reading
- [Microsoft AD DS documentation](https://learn.microsoft.com/windows-server/identity/ad-ds/)
- [Samba documentation](https://www.samba.org/samba/docs/)
