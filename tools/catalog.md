---
layout: default
title: Open-source Cybersecurity Tool Catalog
description: A categorized, carefully labelled catalog of open-source cybersecurity tools for student labs and defensive workflows.
permalink: /tools/catalog/
---

<section class="hub-hero"><p class="eyebrow">REFERENCE LIBRARY · OPEN-SOURCE FIRST</p><h1>Find a tool. <em>Know what it is for.</em></h1><p class="lead">This is a curated starter catalog, not a claim to list every project in existence. Check the license, official documentation, supported platform, and maintenance status before adopting a tool. Run testing tools only against systems you own or are explicitly authorized to assess.</p></section>
<section class="section prose">
<h2>How to choose responsibly</h2>
<ol><li>Define the question and scope before selecting a tool.</li><li>Prefer official packages/releases and read the license.</li><li>Use a local sample, training dataset, or isolated lab first.</li><li>Understand what the output proves—and what it cannot prove.</li><li>Record versions, configuration, limitations, and cleanup.</li></ol>
<h2>Networking, DNS, and connectivity</h2>
<table><thead><tr><th>Tool</th><th>Use</th><th>Start / official docs</th></tr></thead><tbody>
<tr><td><a href="https://wiki.linuxfoundation.org/networking/iproute2" target="_blank" rel="noopener">iproute2</a></td><td>Linux addresses, interfaces, routes, neighbors</td><td><code>ip address show</code> · <code>ip route show</code></td></tr>
<tr><td><a href="https://bind9.readthedocs.io/" target="_blank" rel="noopener">BIND utilities (dig, host)</a></td><td>DNS record lookup and resolver behavior</td><td><code>dig example.org A</code></td></tr>
<tr><td><a href="https://curl.se/docs/" target="_blank" rel="noopener">curl</a></td><td>HTTP requests, headers, response status</td><td><code>curl -I https://example.org</code></td></tr>
<tr><td><a href="https://www.gnu.org/software/wget/" target="_blank" rel="noopener">GNU Wget</a></td><td>Retrieve files over supported protocols</td><td>Read usage and respect site policies.</td></tr>
<tr><td><a href="https://www.wireshark.org/" target="_blank" rel="noopener">Wireshark</a></td><td>Visual packet and protocol analysis</td><td>Use sample captures or your own lab traffic.</td></tr>
<tr><td><a href="https://www.tcpdump.org/" target="_blank" rel="noopener">tcpdump</a></td><td>CLI packet capture and inspection</td><td>Use only authorized interfaces/captures.</td></tr>
<tr><td><a href="https://nmap.org/" target="_blank" rel="noopener">Nmap</a></td><td>Authorized host and service inventory</td><td>Use its official guide on a lab target.</td></tr>
<tr><td><a href="https://github.com/robertdavidgraham/masscan" target="_blank" rel="noopener">Masscan</a></td><td>High-speed port scanner; advanced and easy to misuse</td><td>Do not point at public ranges; prefer small isolated labs.</td></tr>
<tr><td><a href="https://github.com/OWASP/Amass" target="_blank" rel="noopener">OWASP Amass</a></td><td>Attack-surface mapping and asset discovery</td><td>Use only for explicitly authorized scope.</td></tr>
<tr><td><a href="https://github.com/projectdiscovery/httpx" target="_blank" rel="noopener">httpx</a></td><td>HTTP service probing for approved inventories</td><td>Start with a local lab target only.</td></tr>
<tr><td><a href="https://github.com/ffuf/ffuf" target="_blank" rel="noopener">ffuf</a></td><td>Web content discovery for permitted test apps</td><td>Use a deliberately vulnerable local app and modest lab settings.</td></tr>
<tr><td><a href="https://github.com/OJ/gobuster" target="_blank" rel="noopener">Gobuster</a></td><td>Directory/DNS discovery in authorized labs</td><td>Do not enumerate domains or sites without permission.</td></tr>
</tbody></table>
<h2>Web application security and testing</h2>
<table><thead><tr><th>Tool</th><th>Use</th><th>Training note</th></tr></thead><tbody>
<tr><td><a href="https://www.zaproxy.org/" target="_blank" rel="noopener">OWASP ZAP</a></td><td>Intercepting proxy and web app testing</td><td>Start with ZAP's getting-started tutorial and Juice Shop.</td></tr>
<tr><td><a href="https://mitmproxy.org/" target="_blank" rel="noopener">mitmproxy</a></td><td>Inspect and debug HTTP(S) flows</td><td>Use only your own client and test app.</td></tr>
<tr><td><a href="https://www.sqlmap.org/" target="_blank" rel="noopener">sqlmap</a></td><td>Automated SQL injection testing</td><td>Advanced dual-use tool; use only a deliberately vulnerable local app with explicit permission.</td></tr>
<tr><td><a href="https://github.com/nikto/nikto" target="_blank" rel="noopener">Nikto</a></td><td>Web-server configuration checks</td><td>Can generate substantial traffic; use a lab target only.</td></tr>
<tr><td><a href="https://github.com/urbanadventurer/WhatWeb" target="_blank" rel="noopener">WhatWeb</a></td><td>Web technology fingerprinting</td><td>Fingerprint only approved hosts.</td></tr>
<tr><td><a href="https://github.com/digininja/DVWA" target="_blank" rel="noopener">DVWA</a></td><td>Deliberately vulnerable web application</td><td>Never deploy publicly; follow project setup and isolation instructions.</td></tr>
<tr><td><a href="https://owasp.org/www-project-juice-shop/" target="_blank" rel="noopener">OWASP Juice Shop</a></td><td>Modern web application security training</td><td>Use the local lab setup guide.</td></tr>
<tr><td><a href="https://owasp.org/www-project-webgoat/" target="_blank" rel="noopener">OWASP WebGoat</a></td><td>Guided lessons on common web weaknesses</td><td>Keep the training service isolated.</td></tr>
</tbody></table>
<h2>Code, dependency, secrets, and container security</h2>
<table><thead><tr><th>Tool</th><th>Use</th><th>Training note</th></tr></thead><tbody>
<tr><td><a href="https://semgrep.dev/" target="_blank" rel="noopener">Semgrep Community Edition</a></td><td>Static analysis and code-pattern checks</td><td>Check the license and feature differences for the exact edition.</td></tr>
<tr><td><a href="https://github.com/gitleaks/gitleaks" target="_blank" rel="noopener">Gitleaks</a></td><td>Find likely secrets in repositories/history</td><td>Run against your own repository; findings can include false positives.</td></tr>
<tr><td><a href="https://trivy.dev/" target="_blank" rel="noopener">Trivy</a></td><td>Scan images, filesystems, dependencies, and configs</td><td>Check local projects; verify advisories and affected versions.</td></tr>
<tr><td><a href="https://github.com/anchore/grype" target="_blank" rel="noopener">Grype</a></td><td>Vulnerability scanner for container images/filesystems</td><td>Pair with an SBOM and verify findings.</td></tr>
<tr><td><a href="https://github.com/anchore/syft" target="_blank" rel="noopener">Syft</a></td><td>Generate software bills of materials (SBOMs)</td><td>Inventory output is not a guarantee of vulnerability.</td></tr>
<tr><td><a href="https://google.github.io/osv-scanner/" target="_blank" rel="noopener">OSV-Scanner</a></td><td>Dependency vulnerability checks against OSV data</td><td>Use in a repository you control.</td></tr>
<tr><td><a href="https://github.com/returntocorp/semgrep" target="_blank" rel="noopener">Semgrep project</a></td><td>Code analysis rules and engine</td><td>Confirm current project licensing and edition before use.</td></tr>
<tr><td><a href="https://checkov.io/" target="_blank" rel="noopener">Checkov</a></td><td>Infrastructure-as-code policy checks</td><td>Run on your own Terraform/Kubernetes examples.</td></tr>
<tr><td><a href="https://github.com/zricethezav/gitleaks" target="_blank" rel="noopener">Gitleaks repository</a></td><td>Secret scanning for Git repositories</td><td>Do not put discovered secrets in reports; rotate any real exposed secret.</td></tr>
</tbody></table>
<h2>Blue team, endpoint, detection, and monitoring</h2>
<table><thead><tr><th>Tool</th><th>Use</th><th>Training note</th></tr></thead><tbody>
<tr><td><a href="https://zeek.org/" target="_blank" rel="noopener">Zeek</a></td><td>Network telemetry and structured protocol logs</td><td>Use supplied PCAPs or isolated lab traffic.</td></tr>
<tr><td><a href="https://suricata.io/" target="_blank" rel="noopener">Suricata</a></td><td>Network IDS/IPS and protocol analysis</td><td>Start in IDS mode on lab traffic.</td></tr>
<tr><td><a href="https://wazuh.com/" target="_blank" rel="noopener">Wazuh</a></td><td>Open-source security monitoring and endpoint telemetry platform</td><td>Plan resource needs and protect the management console.</td></tr>
<tr><td><a href="https://osquery.io/" target="_blank" rel="noopener">osquery</a></td><td>SQL-like endpoint inventory and state queries</td><td>Start with read-only queries on your own machine.</td></tr>
<tr><td><a href="https://www.velociraptor.com/" target="_blank" rel="noopener">Velociraptor</a></td><td>Digital forensics and endpoint visibility</td><td>Use a lab endpoint; validate project edition/license.</td></tr>
<tr><td><a href="https://www.openxcap.org/" target="_blank" rel="noopener">OpenXcap</a></td><td>Not recommended as a default tool without verifying project status</td><td>Check maintenance and suitability before adoption.</td></tr>
<tr><td><a href="https://www.elastic.co/beats/" target="_blank" rel="noopener">Beats</a></td><td>Telemetry shippers</td><td>Licensing differs across products; check the exact license.</td></tr>
<tr><td><a href="https://prometheus.io/" target="_blank" rel="noopener">Prometheus</a></td><td>Metrics collection and alerting</td><td>Operational monitoring, not a vulnerability scanner.</td></tr>
<tr><td><a href="https://grafana.com/oss/" target="_blank" rel="noopener">Grafana OSS</a></td><td>Dashboards and visualization</td><td>Protect dashboards and data sources; verify edition/licensing.</td></tr>
<tr><td><a href="https://opensearch.org/" target="_blank" rel="noopener">OpenSearch</a></td><td>Search and analytics for logs/security events</td><td>Use least privilege and secure network access.</td></tr>
<tr><td><a href="https://github.com/falcosecurity/falco" target="_blank" rel="noopener">Falco</a></td><td>Runtime threat detection for hosts/containers</td><td>Start with sample rules and synthetic events.</td></tr>
</tbody></table>
<h2>Host hardening, forensics, and incident response</h2>
<table><thead><tr><th>Tool</th><th>Use</th><th>Training note</th></tr></thead><tbody>
<tr><td><a href="https://cisofy.com/lynis/" target="_blank" rel="noopener">Lynis</a></td><td>Linux/macOS security auditing and hardening suggestions</td><td>Read each suggestion; not every check applies to every system.</td></tr>
<tr><td><a href="https://www.open-scap.org/" target="_blank" rel="noopener">OpenSCAP</a></td><td>Compliance assessment and security content</td><td>Choose a profile suitable for your OS and purpose.</td></tr>
<tr><td><a href="https://www.clamav.net/" target="_blank" rel="noopener">ClamAV</a></td><td>Open-source antivirus engine</td><td>Not a substitute for layered endpoint protection.</td></tr>
<tr><td><a href="https://www.autopsy.com/" target="_blank" rel="noopener">Autopsy / The Sleuth Kit</a></td><td>Digital forensics and filesystem analysis</td><td>Use training images or media you own; preserve originals.</td></tr>
<tr><td><a href="https://www.exiftool.org/" target="_blank" rel="noopener">ExifTool</a></td><td>Read and write file metadata</td><td>Metadata may contain personal details; sanitize before sharing.</td></tr>
<tr><td><a href="https://www.volatilityfoundation.org/" target="_blank" rel="noopener">Volatility 3</a></td><td>Memory forensics framework</td><td>Use provided training memory images with documented provenance.</td></tr>
<tr><td><a href="https://github.com/Velocidex/velociraptor" target="_blank" rel="noopener">Velociraptor source</a></td><td>Endpoint collection and forensic workflows</td><td>Check permissions and project license before deploying.</td></tr>
</tbody></table>
<h2>Identity, password auditing, and privacy</h2>
<table><thead><tr><th>Tool/service</th><th>Classification</th><th>Responsible use</th></tr></thead><tbody>
<tr><td><a href="https://www.openwall.com/john/" target="_blank" rel="noopener">John the Ripper</a></td><td>Open-source password auditing tool</td><td>Use only synthetic hashes or hashes you are authorized to audit. Never test other people's credentials.</td></tr>
<tr><td><a href="https://hashcat.net/hashcat/" target="_blank" rel="noopener">Hashcat</a></td><td>Open-source password recovery/auditing tool (license and components vary)</td><td>Use a small synthetic classroom hash set, not leaked credentials.</td></tr>
<tr><td><a href="https://haveibeenpwned.com/" target="_blank" rel="noopener">Have I Been Pwned (HIBP)</a></td><td>Third-party online service; **not open source**</td><td>Check only an address you own or have consent to check. Understand that an email address is personal data; don't submit classmates' addresses.</td></tr>
<tr><td><a href="https://who.is/" target="_blank" rel="noopener">who.is / WHOIS lookup</a></td><td>Online lookup service; **not an open-source tool**</td><td>Domain registration data may be redacted or privacy-protected. Use for authorized research.</td></tr>
<tr><td><a href="https://man7.org/linux/man-pages/man1/whoami.1.html" target="_blank" rel="noopener">whoami (command)</a></td><td>Standard system utility; open-source implementations are available</td><td>Prints the current effective username; it is not a breach-checking service.</td></tr>
<tr><td><a href="https://github.com/OWASP/Amass" target="_blank" rel="noopener">Amass</a></td><td>Open-source attack-surface mapping project</td><td>Use only for domains within explicit written scope.</td></tr>
<tr><td><a href="https://github.com/ffuf/ffuf" target="_blank" rel="noopener">ffuf</a></td><td>Open-source web fuzzer</td><td>Use a local training app; keep request volume modest.</td></tr>
</tbody></table>
<h2>Open datasets and vulnerability references</h2>
<ul>
<li><a href="https://nvd.nist.gov/" target="_blank" rel="noopener">NVD</a> — vulnerability records and CVSS information.</li>
<li><a href="https://osv.dev/" target="_blank" rel="noopener">OSV</a> — open-source ecosystem vulnerability database.</li>
<li><a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noopener">CISA KEV</a> — catalog of vulnerabilities known to be exploited in the wild.</li>
<li><a href="https://attack.mitre.org/" target="_blank" rel="noopener">MITRE ATT&CK</a> — knowledge base of adversary tactics and techniques.</li>
<li><a href="https://www.cve.org/" target="_blank" rel="noopener">CVE Program</a> — public vulnerability identifiers.</li>
<li><a href="https://www.first.org/cvss/" target="_blank" rel="noopener">FIRST CVSS</a> — severity scoring standard.</li>
</ul>
<h2>Important classification notes</h2>
<p><strong>Free is not the same as open source.</strong> HIBP, who.is, many cloud scanners, proprietary editions, and commercial security services may be useful but are not open-source software. Some projects use dual or changing licenses; verify the exact release and components before using them in a college lab. This catalog is a curated starting point and will need periodic maintenance as projects evolve.</p>
<p>Related guides: <a href="{{ '/labs/' | relative_url }}">Build your lab</a> · <a href="{{ '/practice/' | relative_url }}">Practice platforms</a> · <a href="{{ '/resources/' | relative_url }}">Resources and advisories</a></p>
</section>
