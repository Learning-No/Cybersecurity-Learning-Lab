---
title: "Week 07 — Linux Security & Permissions"
week: "WEEK 07"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Understand users, groups, file permissions, processes, services, updates, and security logs on a Linux lab machine."
date: 2026-10-24
---

## Mission
Learn how Linux decides who can read, change, execute, and administer resources. Work on a personal VM or classroom image, not a shared or production server.

## Access model
```text
User identity ──> Group membership ──> File / directory mode
      │                                      │
      └── privilege elevation (sudo)         └── read / write / execute
                    ↓
             audit trail + least privilege
```

## Concepts
- **User/group:** identities used to assign permissions.
- **Owner/group/other:** the three traditional permission classes.
- **Read/write/execute:** on files, read/modify/run; on directories, permissions affect listing and traversal.
- **Least privilege:** grant only access needed for a task.
- **sudo:** controlled privilege elevation; do not use it casually to bypass an error.
- **Service/process:** running software and the unit that may manage it.
- **Logs:** records of system events; access and retention matter.

## Guided lab
1. In your own Linux VM, run `whoami`, `id`, `pwd`, and `ls -la`. Record what each reveals; do not publish usernames or home paths.
2. Create a temporary practice directory and harmless text file. Use `stat` or `ls -l` to inspect ownership and permissions.
3. Change permissions only on that temporary file, observe which operations succeed or fail, then restore a sensible mode.
4. Use `ps` to view processes and `systemctl --type=service --state=running` to review services if your distro uses systemd.
5. Read a small non-sensitive sample log or permitted VM log. Identify timestamp, component, context, and event.
6. Review available updates using your distribution's normal package manager; don't blindly run commands copied from unknown sites.
7. Write one least-privilege recommendation. Do not change shared systems.

## What to track and identify
User/group identity; file owner and mode; reason for elevated permission; service name and purpose; package/version; update status; log timestamp/event; expected vs observed behavior; changes made and how to reverse them.

## Useful open-source tools
Core utilities such as `id`, `stat`, `find`, `ps`, `ss`, and `journalctl` (systemd systems); [Lynis](https://cisofy.com/lynis/) for guided auditing; [osquery](https://osquery.io/) for structured host inventory.

## Deliverable
Submit a permissions worksheet with five examples, a service inventory, and a least-privilege recommendation. Include before/after results from your disposable practice file.

## Self-check
- Why is world-writable permission risky?
- How do file and directory execute permissions differ?
- Why should sudo access be limited?
- What makes a log entry useful for investigation?

## Completion checklist
- [ ] I can explain owner/group/other permissions.
- [ ] I tested changes only on disposable lab files.
- [ ] I can identify a service and its purpose.
- [ ] I documented observations without sharing private logs.

## Further reading
- [GNU Coreutils manual](https://www.gnu.org/software/coreutils/manual/)
- [systemd documentation](https://systemd.io/)
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks)
