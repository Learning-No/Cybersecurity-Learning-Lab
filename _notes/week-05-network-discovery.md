---
title: "Week 05 — Network Discovery & Service Review"
week: "WEEK 05"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Build an asset inventory, interpret service exposure, and distinguish observations from security conclusions."
date: 2026-10-24
---

## Mission and outcomes
Discovery is the disciplined process of learning what assets exist and what they are intended to do. This module uses your own host, a local VM, or a supplied training dataset—not public scanning.

## Concept diagram

```text
Approved scope
   ↓
Asset inventory → Expected services → Observed services
                                          ↓
                               Owner / purpose check
                                          ↓
                          Keep · restrict · patch · investigate
```

A port is a transport endpoint, not a vulnerability verdict. An unexpected service is a question to investigate with the owner; it is not proof of compromise.

## Step-by-step lab
1. Write a scope statement: lab VM names/private addresses, owner, allowed observation, excluded networks, and stop conditions.
2. Record each asset's hostname, role, operating system/version if known, owner, environment, criticality, and expected services.
3. On your own Linux lab VM, inspect interfaces and routes using the read-only commands `ip address show` and `ip route show`.
4. Review local listening sockets with `ss -lnt` (TCP) and `ss -lnu` (UDP). These show local listening sockets, not every service reachable from other machines.
5. Compare each observed listener with the lab's intended configuration. Ask what process owns it and why it is needed; don't assume the port number proves the service identity.
6. If the course explicitly provides an isolated target and permission to use Nmap, follow the official beginner guide and use only that target. Never expand a target range or scan a public address without written authorization.
7. Record gaps and recommendations: disable unnecessary services, bind to loopback where appropriate, restrict access with firewall rules, patch, or request owner confirmation.

## What to track and identify
Asset ID, owner, purpose, environment, private lab address, expected vs observed service, protocol, listening interface, exposure boundary, software/version confidence, evidence source, date, uncertainty, and recommended next step.

## Open-source tools
- `iproute2`: local interfaces and routes.
- `ss`: local socket inventory on Linux.
- `Nmap`: authorized asset/service inventory in an isolated lab.
- `Wireshark` / `tcpdump`: inspect only your own lab traffic or approved captures.
- `dig` / `host`: understand DNS records.

## Deliverable
Create an asset inventory with at least three lab assets or three rows from a supplied dataset. Include expected services, observations, and an owner question for anything unexpected.

## Self-check
- Why is an open port not automatically a vulnerability?
- Why can a host-based socket list differ from what another host can reach?
- What information belongs in an asset inventory?
- What is the safe next step when an unknown service appears?

## Completion checklist
- [ ] I defined scope and owner before discovery.
- [ ] I separated expected from observed services.
- [ ] I documented evidence and confidence.
- [ ] I recommended least exposure without making unsupported claims.

## Further reading
- [Nmap Reference Guide](https://nmap.org/book/man.html)
- [iproute2 manual](https://man7.org/linux/man-pages/man8/ip.8.html)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
