---
permalink: /
layout: home
description: "Harry Zhang — MPhil student at HKUST(GZ), researching humanoid robotics, vision-language-action models, and world models."
author_profile: false
---

<section id="top" class="scene" aria-labelledby="home-title">
  <picture class="scene-art" aria-hidden="true">
    <source media="(max-width: 700px), (max-aspect-ratio: 1/1)" srcset="{{ '/images/harry-evening-lab-mobile.webp' | relative_url }}">
    <img src="{{ '/images/harry-evening-lab.webp' | relative_url }}" alt="" width="1672" height="941" fetchpriority="high">
  </picture>
  <div class="scene-copy">
    <h1 id="home-title">{{ site.name | escape }}</h1>
    <p class="scene-subtitle">Robotics &amp; Embodied AI</p>
    <nav class="scene-nav" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#publications">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</section>

<nav class="section-navigation" aria-label="Section navigation">
  <div class="section-nav-inner">
    <a class="wordmark" href="#top">{{ site.name | escape }}</a>
    <div class="section-links">
      <a href="#about">About</a>
      <a href="#publications">Work</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>
<div class="page-content">
  <section class="content-section" id="about" aria-labelledby="about-title">
    {% include home/about.html %}
  </section>
  <section class="content-section" id="publications" aria-labelledby="work-title">
    {% include home/work.html %}
  </section>
  <section class="content-section contact-section" id="contact" aria-labelledby="contact-title">
    {% include home/contact.html %}
  </section>
  <footer class="content-footer">
    <a href="#top">↑ Back to top</a>
    <span>&copy; {{ 'now' | date: '%Y' }} {{ site.name | escape }}</span>
  </footer>
</div>
