---
title: "Week 05 — Network Discovery & Service Review"
week: "WEEK 05"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Learn asset inventories, service exposure, and safe discovery using a small lab you own."
date: 2026-10-24
---

## Week overview
Discovery means understanding which assets exist and what they are intended to do. Professional work always uses written authorization and a defined scope.

## Learning objectives
- Explain asset inventory, service, port, and exposure.
- Distinguish expected services from services needing owner review.
- Document scope, timestamps, and limitations without probing unknown systems.

## Concepts to learn
- **Asset inventory:** systems, owners, purpose, environment, and criticality.
- **Service exposure:** a service reachable from a network boundary.
- **Attack surface:** interfaces and components that may need security review.
- **False positive:** an observation that looks concerning but needs context.
- **Least exposure:** disable or restrict services that are not needed.

## Guided safe exercise
1. Create an inventory for your own lab: asset name, private lab address, owner, purpose, expected services, and permitted tests.
2. Review a service list from your own virtual machine or a training dataset.
3. For each service, record why it exists, who needs it, and what access restriction is appropriate.
4. Compare the inventory with lab documentation.
5. Do not scan public IP ranges or systems you do not own or have permission to assess.

## Deliverable
Create an asset-and-service inventory and a list of questions for the system owner. Unknown services are items to investigate—not proof of a vulnerability.

## Self-check
- Why is an open port not automatically a security issue?
- What belongs in an asset inventory?
- How does limiting exposure reduce risk?

## Completion checklist
- [ ] I defined the lab scope first.
- [ ] I recorded owners and expected services.
- [ ] I separated observations from conclusions.
- [ ] I suggested reasonable restrictions for unnecessary services.

## Further reading
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CISA — Secure by Design](https://www.cisa.gov/securebydesign)
