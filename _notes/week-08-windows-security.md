---
title: "Week 08 — Windows Security Fundamentals"
week: "WEEK 08"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Learn Windows identity, permissions, firewall profiles, updates, Defender, and event logs using a personal test machine."
date: 2026-10-24
---

## Mission
Understand Windows security building blocks and how to collect basic defensive evidence. Use a personal computer or disposable VM. Do not disable antivirus, bypass organizational controls, or change a managed device without the owner's approval.

## Windows security layers
```text
Identity (local / Microsoft / domain account)
           ↓
Groups + ACL permissions + UAC
           ↓
Applications / services / files
           ↓
Defender + Firewall + Updates + Event Logs
```

## Concepts to learn
- **Account and group:** determine identity and assigned privileges.
- **NTFS ACL:** describes which users/groups can access a file or directory and what actions are allowed.
- **UAC:** helps limit unintended elevation; a prompt is not a reason to approve unknown software.
- **Firewall profile:** domain, private, and public profiles apply different network rules.
- **Microsoft Defender:** built-in protection on supported Windows configurations.
- **Event Viewer:** lets you inspect event channels and timestamps; logs may contain personal information.
- **Patch management:** updates address security issues but should follow normal supported processes.

## Guided lab
1. Open Windows Security and record the visible protection status without turning anything off.
2. Open Settings → Windows Update and record whether updates are pending; install only through the normal supported update path when appropriate.
3. In PowerShell, run read-only commands: `whoami`, `Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, OsBuildNumber`, and `Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction, DefaultOutboundAction`.
4. Open Event Viewer → Windows Logs → System and Application. Choose a non-sensitive event and record provider, event ID, timestamp, level, and a short sanitized description.
5. Inspect permissions on a disposable test folder through Properties → Security. Do not alter system folders.
6. Review startup applications and installed apps through Settings. Ask whether each is needed before making changes.
7. Compare your observations with Microsoft's baseline guidance; distinguish a recommendation from a confirmed weakness.

## What to track and identify
Windows edition/build; update state; firewall profile state; Defender status; account type and group membership; ACL entries on the test folder; event ID/provider/time; baseline reference; observed facts vs assumptions.

## Open-source tools and references
- [Sysinternals](https://learn.microsoft.com/sysinternals/) is a useful Microsoft-maintained suite but is **not open source**; it is listed here as a clearly labelled proprietary reference, not an open-source tool.
- [osquery](https://osquery.io/) is open source and can query selected Windows host state.
- [Wazuh](https://wazuh.com/) is an open-source security monitoring platform that can collect endpoint telemetry when properly configured.
- Microsoft [Windows security documentation](https://learn.microsoft.com/windows/security/) is official documentation, not an open-source tool.

## Deliverable
Create a Windows baseline worksheet with build, update status, firewall profiles, Defender state, one sanitized event record, and three practical hardening questions.

## Self-check
- Why should a public Wi-Fi profile usually be treated differently from a private trusted network?
- What does an ACL control?
- Why is an event ID not meaningful without provider and context?
- Why should you not turn off security controls just to run a lab?

## Completion checklist
- [ ] I captured read-only baseline facts.
- [ ] I inspected a disposable folder and sanitized log details.
- [ ] I did not weaken system protections.
- [ ] I compared observations with an official reference.

## Further reading
- [Windows Security documentation](https://learn.microsoft.com/windows/security/)
- [Windows Event Log documentation](https://learn.microsoft.com/windows/win32/wes/windows-event-log)
