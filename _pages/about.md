---
permalink: /
layout: home
description: "Harry Zhang — MPhil student at HKUST(GZ), researching humanoid robotics, vision-language-action models, and world models."
author_profile: false
---

<section class="scene" aria-labelledby="home-title">
  <picture class="scene-art" aria-hidden="true">
    <source media="(max-width: 700px), (max-aspect-ratio: 1/1)" srcset="{{ '/images/harry-evening-lab-mobile.webp' | relative_url }}">
    <img src="{{ '/images/harry-evening-lab.webp' | relative_url }}" alt="" width="1672" height="941" fetchpriority="high">
  </picture>
  <div class="scene-copy">
    <h1 id="home-title">{{ site.name | escape }}</h1>
    <p class="scene-subtitle">Robotics &amp; Embodied AI</p>
    <nav class="scene-nav" aria-label="Main navigation">
      <a href="{{ '/about/' | relative_url }}">About</a>
      <a href="{{ '/work/' | relative_url }}">Work</a>
      <a href="{{ '/contact/' | relative_url }}">Contact</a>
    </nav>
  </div>
</section>
