---
title: "Week 01 — Lab Setup & Networking Basics"
week: "WEEK 01"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Build a safe lab, understand basic network addressing, and document exactly which systems are in scope."
date: 2026-10-24
---

## Week overview
This week builds the foundation for every later VAPT topic. Your goal is to understand the environment before using security tools. No scanning of public addresses or networks is needed.

## Learning objectives
- Explain IP addresses, subnets, ports, TCP/UDP, DNS, HTTP and HTTPS.
- Identify the host, guest virtual machine, and virtual network in a lab diagram.
- Write a clear scope statement and keep practice isolated from systems you do not own.

## Concepts to learn
- **IP address:** identifies a network interface; private addresses are commonly used inside home and lab networks.
- **Subnet and gateway:** a subnet groups addresses; a gateway forwards traffic to other networks.
- **TCP vs UDP:** TCP provides an ordered connection; UDP sends datagrams without the same connection guarantees.
- **Port:** a transport-layer endpoint used by a service. A port number alone does not prove a service is vulnerable.
- **DNS:** translates names into records such as IP addresses.
- **HTTP/HTTPS:** web communication; HTTPS uses TLS to protect traffic in transit.

## Guided safe exercise
1. Draw your lab: host computer, optional virtual machine, and virtual network.
2. Use your operating system's network settings to identify your own IP address, gateway, and DNS resolver.
3. Look up the private IPv4 ranges and mark which addresses your lab is allowed to use.
4. Write a scope statement: owner, target, permitted actions, excluded systems, and stop conditions.
5. Explain in your own words what happens after entering a website name in a browser.

## Deliverable
Save a one-page network diagram, a glossary of ten terms, and your written lab scope. Do not publish public IPs, credentials, or personal network details.

## Self-check
- What is the difference between an IP address and a port?
- Why is DNS not the same thing as HTTP?
- Why must you confirm authorization before testing a target?

## Completion checklist
- [ ] I can explain IP, subnet, gateway, DNS, TCP/UDP and ports.
- [ ] I can describe HTTP vs HTTPS.
- [ ] I documented an isolated lab and its scope.
- [ ] I know to stop if a target or permission is unclear.

## Further reading
- [Cloudflare Learning Center — What is an IP address?](https://www.cloudflare.com/learning/network-layer/what-is-an-ip-address/)
- [MDN — How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
