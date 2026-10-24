---
layout: default
title: Build a Safe Cybersecurity Lab
description: Step-by-step guide to an isolated, repeatable cybersecurity learning lab.
permalink: /labs/
---

<section class="hub-hero">
<p class="eyebrow">LAB OPERATIONS · START HERE</p>
<h1>Build a lab. <em>Keep it contained.</em></h1>
<p class="lead">A safe lab is an environment you control, can reset, and can explain. Start with a single local training application; add virtual machines only when you understand the network boundary.</p>
<div class="callout"><strong>Safety rule:</strong> use fictional data and intentionally vulnerable training targets. Do not expose vulnerable apps to the public internet, bridge them into a college/work network, or test third-party systems without written permission.</div>
</section>

<section class="section prose" markdown="1">
<h2>1. Choose your lab path</h2>
<ul>
<li><strong>Beginner — browser-only:</strong> use official guided lessons and their built-in practice environments. No local service is exposed.</li>
<li><strong>Local web app:</strong> run OWASP Juice Shop in a container bound to loopback, so only your own computer can connect.</li>
<li><strong>VM lab:</strong> use a hypervisor you understand, create an isolated/internal virtual network, take snapshots, and keep vulnerable guests off bridged networking.</li>
</ul>
<h2>2. Before installing anything</h2>
<ol>
<li>Update your host OS and download software only from its official project source.</li>
<li>Check hardware and disk space. A local container is lighter than multiple VMs.</li>
<li>Create a dedicated lab folder. Never store real passwords, work files, college records, or personal documents inside the vulnerable lab.</li>
<li>Decide the network boundary: loopback-only for a local app, or an isolated/internal VM network. Avoid port-forwarding from your router.</li>
<li>Write a scope note: purpose, target, allowed activities, excluded networks, reset method, and stop condition.</li>
</ol>

<h2>3. Option A — run OWASP Juice Shop locally with Docker or Podman</h2>
<p>Docker Engine and Podman are container tools; Juice Shop is a deliberately vulnerable training application. Follow their current official installation instructions for your OS first. Do not use this example on a shared machine without permission.</p>
<pre><code>docker run --rm -d --name juice-shop -p 127.0.0.1:3000:3000 bkimminich/juice-shop</code></pre>
<p>The <code>127.0.0.1</code> bind is intentional: it limits the published port to loopback on the host. Do not change it to <code>0.0.0.0</code> or expose it through a router. Use the image reference and instructions from the official project documentation, and review the image source before running it.</p>
<ol>
<li>Open <code>http://127.0.0.1:3000</code> in your browser.</li>
<li>Confirm that it loads locally. If it does not, check whether Docker/Podman is running and whether port 3000 is already in use.</li>
<li>Use the app's own learning guide and dummy data. Keep tests within its intended training challenges.</li>
<li>When finished, stop and remove the container: <code>docker stop juice-shop</code>. The <code>--rm</code> option removes the container after it stops; it does not remove downloaded images.</li>
<li>Verify the app no longer responds at the local address.</li>
</ol>
<p>Official resources: <a href="https://owasp.org/www-project-juice-shop/" target="_blank" rel="noopener">OWASP Juice Shop</a>, <a href="https://docs.docker.com/engine/" target="_blank" rel="noopener">Docker Engine docs</a>, <a href="https://podman.io/docs" target="_blank" rel="noopener">Podman docs</a>.</p>

<h2>4. Option B — isolated virtual machines</h2>
<ol>
<li>Choose a supported hypervisor such as KVM/libvirt on Linux or the open-source base edition of VirtualBox. Check current licensing and installation documentation; optional extensions may have different terms.</li>
<li>Create a dedicated internal/host-only network with no route to production networks. Network names and settings differ by hypervisor.</li>
<li>Use a supported, updated guest for your analyst workstation and a separate intentionally vulnerable training guest from a trusted source.</li>
<li>Do not use bridged networking for vulnerable guests. Do not configure router port forwarding. Disable shared folders/clipboard unless necessary for the lab.</li>
<li>Take a clean snapshot before exercises. Use dummy accounts and synthetic data.</li>
<li>After the exercise, revert the snapshot, check network settings, and remove lab-only accounts and files.</li>
</ol>
<p>Official references: <a href="https://www.libvirt.org/" target="_blank" rel="noopener">libvirt</a>, <a href="https://www.virtualbox.org/manual/" target="_blank" rel="noopener">VirtualBox manual</a>, <a href="https://owasp.org/www-project-webgoat/" target="_blank" rel="noopener">OWASP WebGoat</a>.</p>

<h2>5. Verify the boundary</h2>
<ul>
<li>Confirm the local app is bound to <code>127.0.0.1</code>, not all interfaces.</li>
<li>Check that no router port-forwarding rule points to the lab.</li>
<li>Confirm vulnerable VMs use the isolated network, not bridged mode.</li>
<li>Use only the lab target and the activity explicitly allowed by its guide.</li>
<li>Stop immediately if traffic appears to reach an unknown or external target.</li>
</ul>

<h2>6. Lab notebook template</h2>
<pre><code>Date/time + timezone:
Lab OS / app version:
Scope and owner:
Network boundary:
Exercise objective:
Steps performed:
Expected result:
Observed result:
Evidence (sanitized):
What I learned:
Cleanup performed:
Next question:</code></pre>

<h2>7. Common problems</h2>
<ul>
<li><strong>Port already in use:</strong> stop your own conflicting lab service or choose another unused local port; do not expose the app to solve the problem.</li>
<li><strong>Container command not found:</strong> install and start the chosen runtime using official docs, or use a browser-based guided lab.</li>
<li><strong>App reachable from another device:</strong> stop it immediately and review the bind address/firewall before restarting.</li>
<li><strong>VM has unexpected internet access:</strong> power it off and correct its network mode before continuing.</li>
<li><strong>Real sensitive data appears:</strong> stop, do not copy or publish it, and notify the owner/instructor.</li>
</ul>

<h2>Completion checklist</h2>
<ul>
<li>☐ I have a written scope and stop condition.</li>
<li>☐ My training app is loopback-only or my VMs are isolated.</li>
<li>☐ I can reset the environment to a known-good state.</li>
<li>☐ I used dummy data and kept secrets out of notes.</li>
<li>☐ I verified cleanup and can explain my network diagram.</li>
</ul>
</section>
