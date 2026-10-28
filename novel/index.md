---
layout: default
title: Cybersecurity Novel
description: A story-led cybersecurity learning series that teaches networking, security concepts, and responsible practice.
permalink: /novel/
---

<style>
.novel-page{max-width:980px;margin:0 auto;padding:24px 0 64px}
.novel-hero{padding:clamp(24px,5vw,52px);border:1px solid #dce6e2;border-radius:24px;background:linear-gradient(135deg,#eef8f2,#f5f7ff);color:#172b3a}
.novel-hero .eyebrow{color:#28644d;font-weight:800;letter-spacing:.12em;text-transform:uppercase;font-size:12px}
.novel-hero h1,.novel-hero p{color:#172b3a}
.novel-hero h1{font-size:clamp(32px,5vw,48px);line-height:1.1;margin:12px 0}
.novel-hero .lead{max-width:68ch;font-size:17px}
.novel-tablist{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0}
.novel-tab{appearance:none;border:1px solid #a9beb5;background:#fff;color:#174b38;padding:11px 15px;border-radius:10px;font-family:inherit;font-size:14px;font-weight:700;line-height:1.3;cursor:pointer}
.novel-tab:hover{background:#edf7f1;border-color:#2f8061}
.novel-tab[aria-selected=true]{background:#176548;border-color:#176548;color:#fff}
.novel-tab:focus-visible{outline:3px solid #7bc6a7;outline-offset:3px}
.novel-panel{border:1px solid #dce6e2;background:#fff;padding:clamp(18px,3vw,30px);border-radius:16px;margin-top:10px}
.novel-panel[hidden],.episode-panel[hidden]{display:none}
.novel-intro{max-width:78ch;line-height:1.75}
.novel-meta{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 22px}
.novel-meta span{border:1px solid #d7e2de;background:#f7faf8;border-radius:999px;padding:6px 10px;color:#304b40;font-size:12px;font-weight:700}
.novel-episode h2,.novel-episode h3{color:#172b3a;margin-top:28px}
.novel-episode p,.novel-episode li{line-height:1.8}
.novel-callout{border-left:4px solid #2f8061;background:#f0f7f3;color:#173c2d;padding:14px 18px;border-radius:0 10px 10px 0;margin:20px 0}
.novel-diagram{overflow-x:auto;border:1px solid #dce6e2;background:#f8faf9;border-radius:12px;padding:16px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;line-height:1.8;color:#203b30;white-space:pre-wrap}
.novel-notice{margin:18px 0;padding:14px 17px;border-left:4px solid #2f8061;background:#f0f7f3;color:#173c2d}
@media(max-width:600px){.novel-page{padding-top:12px}.novel-hero{border-radius:16px}.novel-tab{flex:1 1 auto;text-align:center}.novel-panel{padding:16px}}
</style>

<div class="novel-page">
  <header class="novel-hero">
    <p class="eyebrow">CSLL · Learn through story</p>
    <h1>Cybersecurity Learning Novel</h1>
    <p class="lead">A manga-inspired learning journey where a first-year engineering student discovers how computers communicate, how defenders reason, and why permission comes before testing.</p>
    <p><strong>Volume 1:</strong> Deep Core Based · <strong>Start here:</strong> Episode 01 — The First Packet</p>
  </header>

  <h2>Choose a novel</h2>
  <div class="novel-tablist" role="tablist" aria-label="Novel titles" data-tablist>
    <button class="novel-tab" id="title-tab-one" type="button" role="tab" aria-selected="true" aria-controls="title-panel-one">Cybersecurity Learning Novel Vol 1</button>
    <button class="novel-tab" id="title-tab-two" type="button" role="tab" aria-selected="false" aria-controls="title-panel-two" tabindex="-1">More titles</button>
  </div>

  <section class="novel-panel" id="title-panel-one" role="tabpanel" aria-labelledby="title-tab-one">
    <h2>Cybersecurity Learning Novel Vol 1 (Deep Core Based)</h2>
    <p class="novel-intro"><strong>Volume synopsis:</strong> Jayan, a first-year B.Tech student, enters the hidden world beneath everyday apps. Each episode starts with a story moment, then unpacks the technical ideas behind it—with diagrams, real-life analogies, and safe exercises. The goal is not to “hack anything”; it is to understand systems well enough to protect them.</p>
    <div class="novel-meta"><span>Foundations</span><span>Story + concepts</span><span>Beginner friendly</span><span>Ethical practice</span></div>
    <h3>Choose an episode</h3>
    <div class="novel-tablist episode-tabs" role="tablist" aria-label="Episodes in Volume 1" data-tablist>
      <button class="novel-tab" id="episode-tab-one" type="button" role="tab" aria-selected="true" aria-controls="episode-panel-one">Episode 01 · The First Packet</button>
      <button class="novel-tab" id="episode-tab-two" type="button" role="tab" aria-selected="false" aria-controls="episode-panel-two" tabindex="-1">Episode 02 · Names and Routes</button>
      <button class="novel-tab" id="episode-tab-three" type="button" role="tab" aria-selected="false" aria-controls="episode-panel-three" tabindex="-1">Episode 03 · The Door Called a Port</button>
    </div>
    <section class="episode-panel" id="episode-panel-one" role="tabpanel" aria-labelledby="episode-tab-one">
      <article class="novel-episode">
            <div class="novel-meta"><span>Network fundamentals</span><span>HTTP & DNS</span><span>Approx. 8–10 min read</span></div>
            <h2>The First Packet</h2>
            <p>The computer lab was almost empty when Jayan noticed the tiny Wi-Fi icon glowing in the corner of his laptop. Outside, campus life rushed between lectures, chai stalls, and noisy corridors. On his screen, a browser tab waited for him to open the college learning portal.</p>
            <p>“You use the internet every day,” said Mira, a senior from the cybersecurity club, pulling a chair beside him. “But can you explain what actually happens after you press Enter?”</p>
            <p>“The website opens,” Jayan answered.</p>
            <p>Mira grinned. “That is the result. Let’s trace the journey.”</p>

            <h3>01 · Before the journey: a name needs an address</h3>
            <p>Jayan typed a website name into the browser. Humans remember names more easily than strings of numbers, but networks need an address to route traffic. The Domain Name System (DNS) helps translate a domain name into records that can point a device toward the right service.</p>
            <p>“So DNS is like the contacts app on my phone?” Jayan asked.</p>
            <p>“That’s a useful analogy,” Mira said. “You look up a name to find a number. DNS performs a similar lookup for internet names, though the real system has caching, multiple record types, and many servers.”</p>
            <div class="novel-callout"><strong>Core concept — DNS:</strong> DNS is a distributed naming system. Common records include A (IPv4 address), AAAA (IPv6 address), CNAME (alias), and MX (mail routing). A cached answer may be used until its time-to-live expires.</div>

            <h3>02 · The network has layers</h3>
            <p>Mira drew four boxes on the whiteboard. “Network communication is easier to reason about when we separate responsibilities. Real-world networking models describe these responsibilities in layers.”</p>
            <div class="novel-diagram">Your browser / application
          │  HTTP or HTTPS
          ▼
Transport: TCP (or QUIC over UDP)
          │  ports, connections, delivery behavior
          ▼
Internet: IP addressing and routing
          │
          ▼
Link: Wi-Fi or Ethernet on the local network</div>
            <p>“Does every packet carry the whole website?” Jayan asked.</p>
            <p>“No. Data is divided and wrapped with information needed at each layer. The exact details depend on the protocol, but the key idea is encapsulation: each layer adds its own header or framing information so the data can travel to the destination.”</p>
            <p>IP addresses help route packets between networks. Transport ports help a device deliver data to the correct application endpoint. A port is not the same thing as an IP address: think of the IP address as the building and the port as a particular reception desk.</p>

            <h3>03 · The first packet leaves</h3>
            <p>Jayan opened the browser’s developer tools. Mira explained that a browser may establish a connection to a server, negotiate encryption for HTTPS, and send an HTTP request. Modern web traffic can use HTTP/1.1, HTTP/2, or HTTP/3, so the precise sequence varies.</p>
            <p>“What does a request look like?”</p>
            <div class="novel-diagram">GET /courses HTTP/1.1
Host: learning.example
Accept: text/html</div>
            <p>“That is a simplified HTTP/1.1 example,” Mira said. “It asks for a resource. The server checks the request, applies its rules, and returns a response. HTTPS protects traffic in transit using TLS, helping provide confidentiality and integrity and allowing the client to authenticate the server when certificate checks succeed.”</p>
            <div class="novel-callout"><strong>Core concept — HTTP:</strong> HTTP is an application-layer protocol for requests and responses. Methods such as GET and POST express different intentions; status codes such as 200, 301, 403, and 404 describe the response outcome. HTTPS is HTTP carried over a secure transport arrangement, typically TLS.</div>

            <h3>04 · What can defenders learn from traffic?</h3>
            <p>“If I can see a connection, can I see everything the person sends?” Jayan asked.</p>
            <p>“Not necessarily,” Mira replied. “With HTTPS, a passive observer can often see metadata such as IP addresses, timing, packet sizes, and some connection details, but should not be able to read the protected application content without access to the relevant endpoints or keys. Even metadata can be sensitive, so handle captures carefully.”</p>
            <p>Network defenders use logs and packet captures to investigate questions: Which host communicated with which service? When did the connection begin? Was the destination expected? Did the pattern repeat? A single packet rarely tells the whole story; reliable investigation combines evidence, context, and alternative explanations.</p>
            <p>Mira opened a diagram of a fictional lab network. “In a real assessment, you begin with scope. Which devices are yours to inspect? Which methods are permitted? What should you avoid collecting? A technical skill without authorization can become a real-world problem.”</p>

            <h3>05 · The small detail that matters: trust</h3>
            <p>Before leaving, Jayan asked why the college portal sometimes showed a warning about its certificate.</p>
            <p>“Your browser needs to verify that the secure connection is for the intended site,” Mira explained. “Certificate errors can have several causes—an expired certificate, a name mismatch, an untrusted issuer, or a misconfigured system. Never treat a warning as a button to dismiss automatically. Confirm the address and contact the service owner if you are unsure.”</p>
            <p>Jayan looked back at the portal. What seemed like a single click was actually a chain of decisions: resolve a name, route data, establish a connection, protect traffic, request a resource, and decide whether to trust the result.</p>
            <p>For the first time, the internet felt less like magic and more like a system he could learn to understand—one layer at a time.</p>

            <h3>06 · Your learning checkpoint</h3>
            <ol>
              <li><strong>DNS:</strong> Explain why a domain name lookup may happen before a browser connects to a website.</li>
              <li><strong>IP and port:</strong> Describe the difference between identifying a network destination and identifying an application endpoint.</li>
              <li><strong>HTTP:</strong> Name one request method and one response status code, and explain what each tells you.</li>
              <li><strong>HTTPS:</strong> Describe what TLS helps protect and why certificate warnings matter.</li>
              <li><strong>Ethics:</strong> Before capturing traffic or testing a system, identify the owner, written permission, scope, and data-handling rules.</li>
            </ol>
            <div class="novel-callout"><strong>Safe mini-exercise:</strong> On your own device, open browser developer tools and inspect the Network panel while visiting a public page you are permitted to access. Observe request methods, status codes, and resource types. Do not intercept other people’s traffic or collect credentials. Record only non-sensitive observations.</div>
            <h3>Episode takeaway</h3>
            <p>A website visit is a coordinated conversation between layers and services. Learn to ask what each layer is responsible for, what evidence actually proves, and what permission is required before investigating. That is the beginning of a defender’s mindset.</p>
          </article>
    </section>
    <section class="episode-panel" id="episode-panel-two" role="tabpanel" aria-labelledby="episode-tab-two" hidden>
      <h2>Episode 02 · Names, Numbers, and Routes</h2>
      <p class="novel-notice"><strong>Coming next:</strong> Follow a request from DNS resolution to IP routing, learn how private and public addresses differ, and map a small fictional network.</p>
      <p>This episode will include a routing diagram, a subnetting analogy, and a safe local-only practice task.</p>
    </section>
    <section class="episode-panel" id="episode-panel-three" role="tabpanel" aria-labelledby="episode-tab-three" hidden>
      <h2>Episode 03 · The Door Called a Port</h2>
      <p class="novel-notice"><strong>Coming next:</strong> Learn TCP, UDP, ports, listening services, and why an open port is evidence—not proof of a vulnerability.</p>
    </section>
  </section>

  <section class="novel-panel" id="title-panel-two" role="tabpanel" aria-labelledby="title-tab-two" hidden>
    <h2>More titles are on the roadmap</h2>
    <p>Volume 1 is the active title. Additional original stories will be added here when their episode content is ready.</p>
  </section>
  <p><a class="novel-tab" href="{{ '/student-portal/' | relative_url }}">← Back to Student Portal</a></p>
</div>

<script>
(() => {
  document.querySelectorAll('[data-tablist]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const activate = (tab, moveFocus = false) => {
      tabs.forEach(item => {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
        const panel = document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !active;
      });
      if (moveFocus) tab.focus();
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next = index;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(tabs[next], true);
      });
    });
    const hashTarget = location.hash.slice(1);
    const initial = tabs.find(tab => tab.getAttribute('aria-controls') === hashTarget) || tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0];
    if (initial) activate(initial);
  });
})();
</script>
