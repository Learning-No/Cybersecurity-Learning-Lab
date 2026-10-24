---
title: "Week 07 — Linux Security & Permissions"
week: "WEEK 07"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Understand Linux users, groups, file permissions, services, updates, and secure configuration."
date: 2026-10-24
---

## Week overview
Linux security starts with understanding who can access a resource and which services a system needs. Use a disposable local VM or training environment.

## Learning objectives
- Explain users, groups, ownership, and read/write/execute permissions.
- Understand least privilege and timely updates.
- Identify basic defensive checks without changing a production system.

## Concepts to learn
- **Identity:** users and groups determine which permissions apply.
- **File permissions:** read, write, and execute rights differ for owner, group, and others.
- **Least privilege:** grant only the access required for a task.
- **Service management:** understand, update, and limit services to necessary functions.
- **Patch management:** updates address bugs and known security issues.
- **Audit trail:** logs help explain important events and support investigation.

## Guided safe exercise
1. In your own Linux VM, inspect your username and group membership with standard read-only commands.
2. Create a practice directory and harmless text file; inspect its owner and permissions.
3. Change permissions only on the practice file and observe the difference. Avoid broad recursive changes.
4. Review enabled services using the VM's service management interface and research their purpose.
5. Review update status and take a snapshot before configuration changes.

## Deliverable
Write a baseline checklist covering users, groups, file permissions, updates, services, firewall status, and logs. Record which checks were read-only and which changes you tested.

## Self-check
- What is the difference between file ownership and permission bits?
- Why is unnecessary administrator access risky?
- Why should changes be tested in a snapshot-backed lab?

## Completion checklist
- [ ] I can explain user/group/other permissions.
- [ ] I used a practice file rather than changing system files.
- [ ] I identified services for owner review.
- [ ] I recorded the VM state and changes.

## Further reading
- [Ubuntu Server — Security](https://ubuntu.com/server/docs/security-introduction)
- [Linux man-pages](https://man7.org/linux/man-pages/)
