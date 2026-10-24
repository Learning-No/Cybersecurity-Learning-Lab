---
title: "Week 01 — Lab Setup & Networking Basics"
week: "WEEK 01"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Build a safe lab, understand network addressing, and document exactly which systems are in scope."
date: 2026-10-24
---

## Week overview
Build the foundation before using security tools. Understand your environment first; no scanning of public addresses or networks is needed.

## Learning objectives
- Explain IP addresses, subnets, ports, TCP/UDP, DNS, HTTP and HTTPS.
- Identify the host, guest virtual machine, and virtual network in a lab diagram.
- Write a scope statement and keep practice isolated from systems you do not own.

## Concepts to learn
- **IP address:** identifies a network interface. [Open the IP diagram and lookup workflow →]({{ '/concepts/ip-address/' | relative_url }})
- **Subnet and gateway:** a subnet groups addresses; a gateway forwards traffic to other networks. [Open the network diagram and packet path →]({{ '/concepts/network-basics/' | relative_url }})
- **TCP vs UDP:** TCP provides ordered delivery; UDP sends datagrams without the same connection guarantees. [Compare protocols with a packet-flow diagram →]({{ '/concepts/tcp-udp/' | relative_url }})
- **Port:** a transport-layer endpoint used by a service; a port alone does not prove a vulnerability. [Understand ports and services →]({{ '/concepts/ports-and-services/' | relative_url }})
- **DNS:** translates names into records such as IP addresses. [Open the DNS resolution diagram and lookup steps →]({{ '/concepts/dns/' | relative_url }})
- **HTTP/HTTPS:** web communication; HTTPS uses TLS to protect traffic in transit. [Follow the browser request lifecycle →]({{ '/concepts/http-https/' | relative_url }})

## Set up the environment first
Follow the [step-by-step safe lab setup guide →]({{ '/labs/' | relative_url }}). Start with a local, loopback-only training application or a guided browser lab. Do not bridge vulnerable systems to a college/work network or expose them to the public internet.

## Network diagram

```text
Student host
  ├── Browser → 127.0.0.1:3000 → local training app
  └── Optional isolated VM network → analyst VM ↔ vulnerable training VM
                         X
                no bridge to campus/work LAN
```

## Guided safe exercise
1. Draw your lab: host computer, optional virtual machine, and virtual network.
2. In your own system settings, identify your IP address, gateway, and DNS resolver.
3. Look up private IPv4 ranges and mark which addresses your lab is allowed to use.
4. Write a scope statement covering owner, target, permitted actions, exclusions, and stop conditions.
5. Explain what happens after entering a website name in a browser.

## What to track and identify
Record the host/guest roles, private lab addresses, network mode, service bind address, target version, scope, expected result, observed result, and cleanup status. Identify which boundary prevents traffic from reaching unrelated systems. Never record home-network details or credentials in public notes.

## Deliverable
Save a one-page network diagram, a glossary of ten terms, and your written lab scope. Do not publish public IPs, credentials, or personal network details.

## Self-check
- What is the difference between an IP address and a port?
- Why is DNS not the same thing as HTTP?
- Why must authorization be confirmed before testing a target?

## Completion checklist
- [ ] I can explain IP, subnet, gateway, DNS, TCP/UDP and ports.
- [ ] I can describe HTTP vs HTTPS.
- [ ] I documented an isolated lab and its scope.
- [ ] I know to stop if a target or permission is unclear.

## Further reading
- [Cloudflare Learning Center — IP addresses](https://www.cloudflare.com/learning/network-layer/what-is-an-ip-address/)
- [MDN — How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
