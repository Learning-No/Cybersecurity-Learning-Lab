---
layout: default
title: Open-source Tool Catalog
description: A categorized directory of cybersecurity tools, with official documentation and safe learning notes.
permalink: /tools/catalog/
---
<section class="hub-hero">
  <p class="eyebrow">TOOL CATALOG · LEARN BEFORE YOU RUN</p>
  <h1>Explore tools with <em>purpose.</em></h1>
  <p class="lead">A curated starting point for networking, web application learning, defensive monitoring, and analysis. Confirm the current license and documentation before installing anything; only assess systems you own or are explicitly authorized to test.</p>
  <div class="resource-links"><a href="{{ '/tools/' | relative_url }}">← Browse the searchable tool directory</a><a href="{{ '/labs/' | relative_url }}">Prepare an isolated lab ↗</a></div>
</section>
<section class="section">
  <div class="section-head"><div><p class="eyebrow">01 / NETWORK FOUNDATIONS</p><h2>Understand the network</h2></div><p>Start with observation and protocol basics before attempting security testing.</p></div>
  <div class="hub-grid">
    <article class="hub-card"><p class="tag">NETWORK CONFIGURATION</p><h2>iproute2</h2><p>Inspect local interfaces, addresses, and routes on Linux.</p><a class="card-link" href="https://man7.org/linux/man-pages/man8/ip.8.html" target="_blank" rel="noopener noreferrer">Official manual ↗</a></article>
    <article class="hub-card"><p class="tag">DNS</p><h2>BIND utilities · dig</h2><p>Learn DNS record types and interpret resolver responses.</p><a class="card-link" href="https://bind9.readthedocs.io/" target="_blank" rel="noopener noreferrer">Documentation ↗</a></article>
    <article class="hub-card"><p class="tag">PACKET ANALYSIS</p><h2>Wireshark</h2><p>Study protocol behavior using sample captures or traffic from your own isolated lab.</p><a class="card-link" href="https://www.wireshark.org/docs/" target="_blank" rel="noopener noreferrer">Documentation ↗</a></article>
  </div>
</section>
<section class="section">
  <div class="section-head"><div><p class="eyebrow">02 / WEB APPLICATIONS</p><h2>Learn web security responsibly</h2></div><p>Use these tools only with your own applications, intentionally vulnerable training targets, or written authorization.</p></div>
  <div class="hub-grid">
    <article class="hub-card"><p class="tag">HTTP INSPECTION</p><h2>curl</h2><p>Inspect ordinary HTTP response headers and status codes.</p><a class="card-link" href="https://curl.se/docs/" target="_blank" rel="noopener noreferrer">Documentation ↗</a></article>
    <article class="hub-card"><p class="tag">WEB TESTING</p><h2>OWASP ZAP</h2><p>Learn web application testing in a local training environment; read the safe-use guidance first.</p><a class="card-link" href="https://www.zaproxy.org/getting-started/" target="_blank" rel="noopener noreferrer">Getting started ↗</a></article>
    <article class="hub-card"><p class="tag">SECURITY GUIDANCE</p><h2>OWASP Web Security Testing Guide</h2><p>A structured guide to test planning, evidence, and remediation.</p><a class="card-link" href="https://owasp.org/www-project-web-security-testing-guide/" target="_blank" rel="noopener noreferrer">Read the guide ↗</a></article>
  </div>
</section>
<section class="section">
  <div class="section-head"><div><p class="eyebrow">03 / DEFENSIVE SECURITY</p><h2>Observe, investigate, improve</h2></div><p>Use defensive tools to understand logs, events, and system behavior.</p></div>
  <div class="hub-grid">
    <article class="hub-card"><p class="tag">ENDPOINT VISIBILITY</p><h2>osquery</h2><p>Explore host state through SQL-style queries on machines you administer.</p><a class="card-link" href="https://osquery.io/" target="_blank" rel="noopener noreferrer">Official site ↗</a></article>
    <article class="hub-card"><p class="tag">LOG ANALYSIS</p><h2>CyberChef</h2><p>Decode and transform sample data in a controlled environment. Avoid submitting sensitive logs to public services.</p><a class="card-link" href="https://github.com/gchq/CyberChef" target="_blank" rel="noopener noreferrer">Source repository ↗</a></article>
    <article class="hub-card"><p class="tag">DETECTION ENGINEERING</p><h2>Sigma</h2><p>Study portable detection-rule formats and learn how rules map to your logging platform.</p><a class="card-link" href="https://sigmahq.io/" target="_blank" rel="noopener noreferrer">Project site ↗</a></article>
  </div>
</section>
<section class="ethics"><div><p class="eyebrow">BEFORE YOU START</p><h2>Scope first. Evidence second.</h2><p>Only use discovery and testing features on systems you own or have explicit permission to assess. Keep labs isolated, protect private data, and record findings with clear remediation steps.</p></div><a class="secondary" href="{{ '/labs/' | relative_url }}">Read lab safety guide ↗</a></section>
