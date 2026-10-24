---
title: "Week 08 — Windows Security Fundamentals"
week: "WEEK 08"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Learn Windows accounts, updates, firewall, event logs, and baseline hardening in a local test environment."
date: 2026-10-24
---

## Week overview
Focus on Windows defensive fundamentals and the evidence an analyst can gather from a system they administer.

## Learning objectives
- Explain standard users, administrators, groups, and least privilege.
- Find Windows Update, Windows Security, firewall status, and Event Viewer.
- Describe why logs and configuration baselines matter.

## Concepts to learn
- **Local accounts and groups:** identity and group membership influence access.
- **UAC:** helps limit the impact of actions requiring elevated privileges.
- **Windows Defender Firewall:** controls traffic according to rules and profiles.
- **Event logs:** record system, application, and security events.
- **Updates:** reduce exposure to known vulnerabilities.
- **Baseline:** a documented expected configuration reviewed over time.

## Guided safe exercise
1. On your own Windows computer or disposable VM, review account type and group membership in system settings.
2. Open Windows Security and record whether protection and firewall indicators are enabled.
3. Open Event Viewer and inspect a few ordinary system events; do not export sensitive logs.
4. Check update status and note pending updates.
5. Compare observations with a simple baseline. Ask an administrator before changing managed-device settings.

## Deliverable
Create a one-page baseline covering account types, updates, firewall, protection status, event-log review, and follow-up actions. Do not publish usernames, machine identifiers, or private logs.

## Self-check
- Why use a standard account for daily work when possible?
- What can a firewall do, and what can it not guarantee?
- Why must logs be protected from unauthorized access?

## Completion checklist
- [ ] I reviewed the main security settings.
- [ ] I understand standard vs administrator access.
- [ ] I recorded relevant observations.
- [ ] I kept personal and organizational details private.

## Further reading
- [Microsoft Security documentation](https://learn.microsoft.com/en-us/windows/security/)
- [Microsoft — Windows event logging](https://learn.microsoft.com/en-us/windows/win32/eventlog/event-logging)
