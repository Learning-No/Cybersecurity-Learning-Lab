---
layout: default
title: Cybersecurity Roadmaps
description: Six distinct cybersecurity learning paths with detailed modules, safe practical work, milestones, and portfolio outcomes.
permalink: /roadmaps/
---
<section class="hub-hero">
  <p class="eyebrow">YOUR LEARNING PATH · BUILD IN LAYERS</p>
  <h1>Roadmaps that show <em>what comes next.</em></h1>
  <p class="lead">Choose one track and follow its sequence. Every track has its own subjects, practical work, milestones, and final portfolio outcome. You can explore another track whenever you are ready.</p>
</section>

<style>
/* Roadmap components use the shared light-theme tokens from executive.css. */
.roadmap-tabs{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,9rem),1fr));gap:.65rem;margin:1.5rem 0 1rem}
.roadmap-tab{width:100%;min-height:2.8rem;border:1px solid var(--line-strong);border-radius:999px;padding:.7rem .85rem;background:var(--card);color:var(--ink-soft);font:600 .92rem/1.3 var(--sans);cursor:pointer;text-align:center;transition:background .15s ease,border-color .15s ease,color .15s ease}
.roadmap-tab:hover{background:var(--accent-tint);border-color:var(--accent);color:var(--accent-dark)}
.roadmap-tab[aria-selected="true"]{background:var(--accent-tint);border-color:var(--accent);color:var(--accent-dark);font-weight:700;box-shadow:inset 0 0 0 1px var(--accent)}
.roadmap-tab:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.roadmap-panel{border:1px solid var(--line);border-radius:1rem;padding:clamp(1rem,3vw,2rem);background:var(--card);color:var(--text);box-shadow:var(--shadow-sm)}
.roadmap-panel[hidden]{display:none}
.roadmap-panel h2{margin-top:0;color:var(--ink)}
.roadmap-meta{display:flex;flex-wrap:wrap;gap:.5rem;margin:.8rem 0 1.25rem}
.roadmap-meta span{border:1px solid var(--line);border-radius:999px;padding:.35rem .7rem;background:var(--paper);color:var(--ink-soft);font-size:.85rem}
.roadmap-modules{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:1rem;margin:1.25rem 0}
.roadmap-module{border:1px solid var(--line);border-radius:.8rem;padding:1rem;background:var(--paper);color:var(--text)}
.roadmap-module h3{margin-top:0;color:var(--ink)}
.roadmap-module ul{padding-left:1.2rem}
.roadmap-module li{color:var(--ink-soft)}
.roadmap-outcome{border-left:3px solid var(--accent);border-radius:0 var(--radius-sm) var(--radius-sm) 0;padding:.8rem 1rem;margin:1.2rem 0;background:var(--accent-tint);color:var(--ink-soft)}
.roadmap-checklist{display:grid;gap:.65rem;margin:1rem 0}
.roadmap-checklist label{display:flex;gap:.6rem;align-items:flex-start;color:var(--ink-soft)}
.roadmap-checklist input{accent-color:var(--accent);flex:0 0 auto;margin-top:.25rem}
.roadmap-note{color:var(--muted)}
@media(max-width:560px){.roadmap-tabs{grid-template-columns:repeat(2,minmax(0,1fr))}.roadmap-tab{border-radius:10px;padding:.7rem .5rem}}
@media(prefers-reduced-motion:reduce){.roadmap-tab{transition:none}}
</style>

<section class="section" aria-labelledby="track-picker-title">
  <div class="section-head">
    <div><p class="eyebrow">Six separate learning tracks</p><h2 id="track-picker-title">Choose your roadmap.</h2></div>
  </div>
  <div class="roadmap-tabs" role="tablist" aria-label="Cybersecurity learning tracks">
    <button class="roadmap-tab" id="tab-foundations" type="button" role="tab" aria-selected="true" aria-controls="panel-foundations" tabindex="0" data-roadmap-tab="foundations">01 · Foundations</button>
    <button class="roadmap-tab" id="tab-vapt" type="button" role="tab" aria-selected="false" aria-controls="panel-vapt" tabindex="-1" data-roadmap-tab="vapt">02 · VAPT</button>
    <button class="roadmap-tab" id="tab-soc" type="button" role="tab" aria-selected="false" aria-controls="panel-soc" tabindex="-1" data-roadmap-tab="soc">03 · SOC</button>
    <button class="roadmap-tab" id="tab-appsec" type="button" role="tab" aria-selected="false" aria-controls="panel-appsec" tabindex="-1" data-roadmap-tab="appsec">04 · AppSec</button>
    <button class="roadmap-tab" id="tab-cloud" type="button" role="tab" aria-selected="false" aria-controls="panel-cloud" tabindex="-1" data-roadmap-tab="cloud">05 · Cloud</button>
    <button class="roadmap-tab" id="tab-architecture" type="button" role="tab" aria-selected="false" aria-controls="panel-architecture" tabindex="-1" data-roadmap-tab="architecture">06 · Architecture</button>
  </div>

  <section class="roadmap-panel" id="panel-foundations" role="tabpanel" aria-labelledby="tab-foundations" tabindex="0" data-roadmap-panel="foundations">
    <p class="eyebrow">01 · START HERE</p><h2>Cybersecurity foundations</h2>
    <p>Build the technical base needed to understand how computers, networks, users, and everyday services work before moving into a specialist role.</p>
    <div class="roadmap-meta"><span>Suggested pace: 6–8 weeks</span><span>Level: Beginner</span><span>Focus: Core IT knowledge</span></div>
    <div class="roadmap-modules">
      <article class="roadmap-module"><h3>Module 1 · Computer systems</h3><ul><li>Hardware, CPU, memory, storage, and firmware</li><li>Operating-system roles, processes, services, and filesystems</li><li>Virtual machines, snapshots, and isolated practice environments</li><li>Basic troubleshooting and system documentation</li></ul></article>
      <article class="roadmap-module"><h3>Module 2 · Networking essentials</h3><ul><li>LAN, WAN, routers, switches, and wireless networks</li><li>IPv4/IPv6, subnetting, gateways, and routing concepts</li><li>DNS, DHCP, TCP, UDP, ports, HTTP, and HTTPS</li><li>OSI and TCP/IP models; how data moves between devices</li></ul></article>
      <article class="roadmap-module"><h3>Module 3 · Linux and Windows</h3><ul><li>Command-line navigation and filesystem structure</li><li>Users, groups, permissions, and basic process management</li><li>Services, updates, firewall settings, and system logs</li><li>PowerShell and shell fundamentals for administration</li></ul></article>
      <article class="roadmap-module"><h3>Module 4 · Security principles</h3><ul><li>Confidentiality, integrity, and availability</li><li>Authentication, authorization, MFA, and least privilege</li><li>Encryption, hashing, backups, and patch management</li><li>Security awareness, privacy, and responsible handling of data</li></ul></article>
      <article class="roadmap-module"><h3>Module 5 · Visibility and practice</h3><ul><li>Read basic system and network logs</li><li>Understand timestamps, event sources, and common fields</li><li>Draw a small home-lab network and label trust boundaries</li><li>Write a baseline checklist for a personal test VM</li></ul></article>
    </div>
    <div class="roadmap-outcome"><strong>Portfolio project:</strong> Create a labelled network diagram, a short glossary of 30 core terms, and a security-baseline checklist for a disposable virtual machine.</div>
    <div class="roadmap-checklist"><strong>Milestones</strong><label><input type="checkbox" data-progress="rm-foundations-network"> Explain IP addressing, DNS, and routing in your own words</label><label><input type="checkbox" data-progress="rm-foundations-os"> Demonstrate basic Linux and Windows navigation</label><label><input type="checkbox" data-progress="rm-foundations-security"> Explain CIA, MFA, least privilege, and encryption</label><label><input type="checkbox" data-progress="rm-foundations-project"> Finish the network diagram and baseline checklist</label></div>
  </section>

  <section class="roadmap-panel" id="panel-vapt" role="tabpanel" aria-labelledby="tab-vapt" tabindex="0" data-roadmap-panel="vapt" hidden>
    <p class="eyebrow">02 · ASSESS RESPONSIBLY</p><h2>Vulnerability assessment and penetration testing</h2>
    <p>Learn a structured, permission-based assessment process: define scope, understand an application, validate issues in a safe training environment, and communicate fixes clearly.</p>
    <div class="roadmap-meta"><span>Suggested pace: 10–12 weeks</span><span>Level: Beginner to intermediate</span><span>Focus: Authorized assessment</span></div>
    <div class="roadmap-modules">
      <article class="roadmap-module"><h3>Module 1 · Scope and methodology</h3><ul><li>Written authorization, rules of engagement, and exclusions</li><li>Asset inventory and clear assessment objectives</li><li>Test planning, impact limits, and stop conditions</li><li>Evidence handling and reproducible note-taking</li></ul></article>
      <article class="roadmap-module"><h3>Module 2 · Web and network fundamentals</h3><ul><li>HTTP requests, responses, headers, cookies, and sessions</li><li>DNS, ports, services, TLS, and network boundaries</li><li>Client/server architecture and API basics</li><li>How to read documentation and identify expected behaviour</li></ul></article>
      <article class="roadmap-module"><h3>Module 3 · Vulnerability concepts</h3><ul><li>OWASP Top 10 risk categories and common root causes</li><li>Authentication, access-control, input-validation, and configuration risks</li><li>Dependency, patch, and exposed-information review</li><li>False positives, severity, likelihood, and business context</li></ul></article>
      <article class="roadmap-module"><h3>Module 4 · Safe validation workflow</h3><ul><li>Use intentionally vulnerable training applications only</li><li>Establish a baseline and compare expected versus observed behaviour</li><li>Capture minimal, non-sensitive evidence</li><li>Confirm findings without accessing real user data or disrupting services</li></ul></article>
      <article class="roadmap-module"><h3>Module 5 · Reporting and retesting</h3><ul><li>Write clear finding titles, summaries, impact, and evidence</li><li>Explain root cause and practical remediation</li><li>Prioritize a remediation register</li><li>Define retest criteria and record residual risk</li></ul></article>
    </div>
    <div class="roadmap-outcome"><strong>Portfolio project:</strong> Produce a sanitized report for a deliberately vulnerable local training app, with scope, methodology, a small set of validated findings, remediation advice, and retest notes.</div>
    <div class="roadmap-checklist"><strong>Milestones</strong><label><input type="checkbox" data-progress="rm-vapt-scope"> Write a sample scope and rules-of-engagement document</label><label><input type="checkbox" data-progress="rm-vapt-web"> Explain HTTP, sessions, and common web-risk categories</label><label><input type="checkbox" data-progress="rm-vapt-lab"> Complete a guided exercise in an authorized training lab</label><label><input type="checkbox" data-progress="rm-vapt-report"> Finish a sanitized assessment report and remediation register</label></div>
    <p class="roadmap-note">Practice only on systems you own or have explicit permission to assess. Keep training targets isolated and follow the lab's stated scope.</p>
  </section>

  <section class="roadmap-panel" id="panel-soc" role="tabpanel" aria-labelledby="tab-soc" tabindex="0" data-roadmap-panel="soc" hidden>
    <p class="eyebrow">03 · DETECT AND RESPOND</p><h2>Security operations centre (SOC)</h2>
    <p>Develop defensive skills for understanding telemetry, reviewing alerts, investigating suspicious activity, and documenting incidents in a calm and repeatable way.</p>
    <div class="roadmap-meta"><span>Suggested pace: 8–10 weeks</span><span>Level: Beginner to intermediate</span><span>Focus: Blue team operations</span></div>
    <div class="roadmap-modules">
      <article class="roadmap-module"><h3>Module 1 · SOC foundations</h3><ul><li>SOC roles, tiers, workflows, and escalation paths</li><li>Assets, threats, vulnerabilities, and security controls</li><li>Incident lifecycle and severity versus priority</li><li>Ticket quality, handovers, and analyst communication</li></ul></article>
      <article class="roadmap-module"><h3>Module 2 · Logs and telemetry</h3><ul><li>Windows event logs and Linux authentication/system logs</li><li>DNS, firewall, proxy, endpoint, and network records</li><li>Timestamps, time zones, event IDs, and normalization</li><li>Build a timeline from fictional sample events</li></ul></article>
      <article class="roadmap-module"><h3>Module 3 · SIEM and detection</h3><ul><li>SIEM purpose, data sources, parsing, and dashboards</li><li>Understand rules, thresholds, correlation, and alert context</li><li>Use a training dataset to filter and group events</li><li>Document detection gaps and likely false positives</li></ul></article>
      <article class="roadmap-module"><h3>Module 4 · Alert triage</h3><ul><li>Validate alert source, affected asset, user, and time window</li><li>Compare events with a known-good baseline</li><li>Use indicators as leads, not proof on their own</li><li>Record evidence, confidence, impact, and escalation reason</li></ul></article>
      <article class="roadmap-module"><h3>Module 5 · Incident response</h3><ul><li>Preparation, identification, containment, recovery, and lessons learned</li><li>Preserve evidence and maintain a clear event timeline</li><li>Coordinate with system owners using approved playbooks</li><li>Write an incident summary and follow-up actions</li></ul></article>
    </div>
    <div class="roadmap-outcome"><strong>Portfolio project:</strong> Investigate a fictional alert dataset, create a timestamped incident timeline, explain triage decisions, and write a short handover and lessons-learned report.</div>
    <div class="roadmap-checklist"><strong>Milestones</strong><label><input type="checkbox" data-progress="rm-soc-logs"> Identify useful fields in sample endpoint and network logs</label><label><input type="checkbox" data-progress="rm-soc-siem"> Explain how a SIEM turns events into searchable alerts</label><label><input type="checkbox" data-progress="rm-soc-triage"> Complete a documented alert-triage exercise with fictional data</label><label><input type="checkbox" data-progress="rm-soc-incident"> Finish an incident timeline and analyst handover</label></div>
  </section>

  <section class="roadmap-panel" id="panel-appsec" role="tabpanel" aria-labelledby="tab-appsec" tabindex="0" data-roadmap-panel="appsec" hidden>
    <p class="eyebrow">04 · BUILD SECURELY</p><h2>Application security (AppSec)</h2>
    <p>Understand how software risks arise throughout design, development, testing, release, and maintenance—and how developers and security reviewers can reduce them.</p>
    <div class="roadmap-meta"><span>Suggested pace: 8–10 weeks</span><span>Level: Beginner to intermediate</span><span>Focus: Secure software lifecycle</span></div>
    <div class="roadmap-modules">
      <article class="roadmap-module"><h3>Module 1 · Application foundations</h3><ul><li>Web architecture, browsers, servers, APIs, and databases</li><li>HTTP, sessions, cookies, and state management</li><li>Authentication versus authorization</li><li>Data classification and application trust boundaries</li></ul></article>
      <article class="roadmap-module"><h3>Module 2 · Secure design</h3><ul><li>Security requirements and abuse-case thinking</li><li>Threat modelling and data-flow diagrams</li><li>Least privilege, secure defaults, and defense in depth</li><li>Safe error handling and privacy-aware logging</li></ul></article>
      <article class="roadmap-module"><h3>Module 3 · Common application risks</h3><ul><li>OWASP Top 10 categories and their underlying causes</li><li>Input validation, output encoding, and data handling</li><li>Access-control checks and secure session design</li><li>File upload, dependency, and configuration risks</li></ul></article>
      <article class="roadmap-module"><h3>Module 4 · Secure development</h3><ul><li>Code review principles and readable security comments</li><li>Parameterized database queries and safe output handling</li><li>Secrets management and dependency updates</li><li>Security checks in build and release workflows</li></ul></article>
      <article class="roadmap-module"><h3>Module 5 · Verification and maintenance</h3><ul><li>Test cases for authentication and authorization requirements</li><li>Static and dynamic testing concepts</li><li>Dependency and configuration review</li><li>Track fixes, retest, and document accepted risks</li></ul></article>
    </div>
    <div class="roadmap-outcome"><strong>Portfolio project:</strong> Review a small demo application. Draw its data flow, list security requirements, identify design weaknesses, and propose code-level and configuration-level improvements.</div>
    <div class="roadmap-checklist"><strong>Milestones</strong><label><input type="checkbox" data-progress="rm-appsec-flow"> Draw an application data-flow diagram</label><label><input type="checkbox" data-progress="rm-appsec-threat"> Create a simple threat model with mitigations</label><label><input type="checkbox" data-progress="rm-appsec-code"> Explain safe input handling and parameterized queries</label><label><input type="checkbox" data-progress="rm-appsec-review"> Complete a secure design review and retest checklist</label></div>
  </section>

  <section class="roadmap-panel" id="panel-cloud" role="tabpanel" aria-labelledby="tab-cloud" tabindex="0" data-roadmap-panel="cloud" hidden>
    <p class="eyebrow">05 · SECURE AT SCALE</p><h2>Cloud security</h2>
    <p>Learn the shared-responsibility model and the controls used to protect identities, workloads, networks, data, and operations in cloud environments.</p>
    <div class="roadmap-meta"><span>Suggested pace: 8–10 weeks</span><span>Level: Beginner to intermediate</span><span>Focus: Cloud controls and governance</span></div>
    <div class="roadmap-modules">
      <article class="roadmap-module"><h3>Module 1 · Cloud concepts</h3><ul><li>IaaS, PaaS, SaaS, regions, zones, and managed services</li><li>Public, private, and hybrid cloud models</li><li>Shared responsibility and service ownership</li><li>Cloud accounts, subscriptions, projects, and resource hierarchy</li></ul></article>
      <article class="roadmap-module"><h3>Module 2 · Identity and access</h3><ul><li>Users, groups, roles, service identities, and federation</li><li>Least privilege and role-based access control</li><li>MFA, privileged access, and credential lifecycle</li><li>Review access grants and remove unused permissions</li></ul></article>
      <article class="roadmap-module"><h3>Module 3 · Network and workload security</h3><ul><li>Virtual networks, subnets, routing, and security groups</li><li>Public versus private endpoints and segmentation</li><li>Secure virtual machines, containers, and managed services</li><li>Patch management and hardened configuration baselines</li></ul></article>
      <article class="roadmap-module"><h3>Module 4 · Data protection</h3><ul><li>Storage permissions and data classification</li><li>Encryption at rest and in transit</li><li>Secrets, key management, and rotation concepts</li><li>Backup, retention, recovery, and deletion policies</li></ul></article>
      <article class="roadmap-module"><h3>Module 5 · Cloud operations</h3><ul><li>Audit logs, metrics, alerts, and configuration monitoring</li><li>Policy-as-code and configuration drift concepts</li><li>Incident response responsibilities in cloud services</li><li>Cost, resilience, and compliance considerations</li></ul></article>
    </div>
    <div class="roadmap-outcome"><strong>Portfolio project:</strong> Design a fictional cloud environment with an identity matrix, network diagram, data-protection checklist, logging plan, and recovery outline. Do not publish real credentials or account identifiers.</div>
    <div class="roadmap-checklist"><strong>Milestones</strong><label><input type="checkbox" data-progress="rm-cloud-model"> Explain shared responsibility for common cloud service models</label><label><input type="checkbox" data-progress="rm-cloud-iam"> Create a least-privilege access matrix for a fictional team</label><label><input type="checkbox" data-progress="rm-cloud-network"> Diagram public and private network boundaries</label><label><input type="checkbox" data-progress="rm-cloud-project"> Finish the cloud security baseline and recovery outline</label></div>
  </section>

  <section class="roadmap-panel" id="panel-architecture" role="tabpanel" aria-labelledby="tab-architecture" tabindex="0" data-roadmap-panel="architecture" hidden>
    <p class="eyebrow">06 · DESIGN WITH INTENT</p><h2>Security architecture</h2>
    <p>Learn to connect business needs with technical safeguards. This track focuses on system design, trust boundaries, risk decisions, resilience, and clear architecture documentation.</p>
    <div class="roadmap-meta"><span>Suggested pace: 8–12 weeks</span><span>Level: Intermediate</span><span>Focus: Secure system design</span></div>
    <div class="roadmap-modules">
      <article class="roadmap-module"><h3>Module 1 · Business and system context</h3><ul><li>Business goals, users, critical services, and dependencies</li><li>Asset inventory and data classification</li><li>System context diagrams and architecture views</li><li>Availability, privacy, compliance, and operational needs</li></ul></article>
      <article class="roadmap-module"><h3>Module 2 · Threat modelling</h3><ul><li>Data-flow diagrams, entry points, and trust boundaries</li><li>Threat identification and abuse-case analysis</li><li>STRIDE as a structured brainstorming framework</li><li>Prioritize threats using likelihood, impact, and assumptions</li></ul></article>
      <article class="roadmap-module"><h3>Module 3 · Architecture controls</h3><ul><li>Identity, authentication, authorization, and privileged access</li><li>Network segmentation and secure connectivity</li><li>Application, API, and data protection patterns</li><li>Logging, monitoring, secrets, and key-management design</li></ul></article>
      <article class="roadmap-module"><h3>Module 4 · Resilience and operations</h3><ul><li>High availability, backups, disaster recovery, and recovery objectives</li><li>Secure configuration and change management</li><li>Incident response ownership and operational handover</li><li>Third-party dependencies and supplier risk</li></ul></article>
      <article class="roadmap-module"><h3>Module 5 · Decisions and governance</h3><ul><li>Security requirements and control mapping</li><li>Architecture decision records and trade-offs</li><li>Residual risk, exceptions, owners, and review dates</li><li>Validate that controls meet the original requirements</li></ul></article>
    </div>
    <div class="roadmap-outcome"><strong>Portfolio project:</strong> Create a security architecture pack for a fictional web service: context and data-flow diagrams, threat model, control map, architecture decisions, and a concise risk register.</div>
    <div class="roadmap-checklist"><strong>Milestones</strong><label><input type="checkbox" data-progress="rm-arch-context"> Document assets, users, and system boundaries</label><label><input type="checkbox" data-progress="rm-arch-threat"> Complete a threat model and prioritize its risks</label><label><input type="checkbox" data-progress="rm-arch-controls"> Map threats to preventive, detective, and recovery controls</label><label><input type="checkbox" data-progress="rm-arch-pack"> Finish the architecture pack and decision record</label></div>
  </section>
  <p class="roadmap-note">Progress checkboxes are saved locally in this browser. Use fictional data for portfolio work and keep hands-on exercises within systems you own or are explicitly authorized to use.</p>
</section>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const tabs = [...document.querySelectorAll('[data-roadmap-tab]')];
  const panels = [...document.querySelectorAll('[data-roadmap-panel]')];
  if (!tabs.length || !panels.length) return;

  const activate = (name, updateHash = true, moveFocus = false) => {
    const selected = tabs.find(tab => tab.dataset.roadmapTab === name) || tabs[0];
    tabs.forEach(tab => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && moveFocus) tab.focus();
    });
    panels.forEach(panel => {
      panel.hidden = panel.dataset.roadmapPanel !== selected.dataset.roadmapTab;
    });
    if (updateHash && history.replaceState) history.replaceState(null, '', '#' + selected.dataset.roadmapTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.roadmapTab));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next].dataset.roadmapTab, true, true);
    });
  });

  const initial = window.location.hash.slice(1);
  activate(tabs.some(tab => tab.dataset.roadmapTab === initial) ? initial : 'foundations', false);
});
</script>
