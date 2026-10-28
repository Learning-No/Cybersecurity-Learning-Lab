---
layout: default
title: Student Portal
description: Student portal landing page for the Cybersecurity Learning Lab.
permalink: /student-portal/
---

<section class="portal-shell">
  <div class="portal-art">
    <img src="{{ '/assets/images/learner-portal-art.svg' | relative_url }}" alt="Illustration of a digital shield, secure connections, and cybersecurity learning panels">
    <div class="portal-art-copy">
      <p class="eyebrow">Your next chapter starts here</p>
      <h2>Learn with purpose. Practice with care.</h2>
      <p>Build strong foundations, keep useful notes, and turn lab work into evidence of your skills.</p>
    </div>
  </div>
  <div class="portal-card">
    <img class="brand-mark" src="{{ '/assets/images/brand-mark.svg' | relative_url }}" alt="Cybersecurity Learning Lab shield logo">
    <p class="eyebrow">Student learning space</p>
    <h1>Welcome to your <em>learning hub.</em></h1>
    <p class="portal-subtitle">Pick up your roadmap, explore open-source tools, and track your learning in your own browser.</p>
    <ul class="portal-feature-list">
      <li>12-week VAPT curriculum and practical learning outcomes</li>
      <li>Step-by-step isolated lab setup and safety checks</li>
      <li>Concept library, open-source tool catalog, and career roadmaps</li>
      <li>Print-friendly guides you can save as PDFs</li>
    </ul>
    <div class="portal-actions">
      <a class="primary" href="{{ '/' | relative_url }}#vapt-sprint">Continue learning <span aria-hidden="true">→</span></a>
      <a class="secondary" href="{{ '/tools/catalog/' | relative_url }}">Explore the tool catalog <span aria-hidden="true">↗</span></a>
      <a class="secondary" href="{{ '/novel/' | relative_url }}">Read the cybersecurity novel <span aria-hidden="true">→</span></a>
    </div>
    <div class="portal-note"><strong>Important:</strong> This project is a static GitHub Pages site and does not currently provide real account authentication. Do not enter or send passwords here. Learning progress is stored locally in your browser and is not shared with instructors.</div>
    <p class="portal-help">New here? Start with the <a href="{{ '/labs/' | relative_url }}">safe lab setup guide</a>.</p>
  </div>
</section>
