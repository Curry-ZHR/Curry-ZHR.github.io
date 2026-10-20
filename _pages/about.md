---
permalink: /
layout: home
description: "MPhil researcher in humanoid robot loco-manipulation, vision-language-action models, and world models."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section id="about" class="intro" aria-labelledby="home-title">
  <div class="intro-copy">
    <p class="eyebrow">MPhil student · HKUST(GZ)</p>
    <h1 id="home-title">Huarui Zhang<span class="name-note">张华锐</span></h1>
    {% for paragraph in site.data.homepage.about %}
    <p>{{ paragraph | escape }}</p>
    {% endfor %}
    <div class="contact-links" aria-label="Contact and profiles">
      {% if site.author.email %}<a class="email-link" href="mailto:{{ site.author.email | escape }}">Email <span aria-hidden="true">↗</span></a>{% endif %}
      {% if site.author.googlescholar %}<a href="{{ site.author.googlescholar | escape }}" target="_blank" rel="noopener noreferrer">Scholar ↗</a>{% endif %}
      {% if site.author.github %}<a href="https://github.com/{{ site.author.github | escape }}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>{% endif %}
    </div>
  </div>
  <figure class="portrait-panel">
    <img src="{{ '/images/hero-huarui-manga.webp' | relative_url }}" alt="Illustration of Huarui working with a humanoid robot at a desk." width="1672" height="941" fetchpriority="high">
    <figcaption>A little curiosity. A lot of robots.</figcaption>
  </figure>
</section>

{% if site.data.homepage.news.size > 0 %}
<section id="news" class="content-section" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  <ul class="news-list">
    {% for item in site.data.homepage.news %}
    <li><span class="date">{{ item.date | escape }}</span><div>{{ item.text }}</div></li>
    {% endfor %}
  </ul>
</section>
{% endif %}

<section id="publications" class="content-section" aria-labelledby="work-title">
  <h2 id="work-title">Selected work</h2>
  {% if site.data.homepage.publications.size > 0 %}
  <div class="publication-list">
    {% for pub in site.data.homepage.publications %}
    <article class="publication">
      <h3>{{ pub.title | escape }}</h3>
      {% if pub.authors %}<p>{{ pub.authors }}</p>{% endif %}
      {% if pub.venue %}<p class="publication-venue">{{ pub.venue | escape }}</p>{% endif %}
      {% if pub.summary %}<p>{{ pub.summary | escape }}</p>{% endif %}
      {% if pub.links %}<div class="paper-links">{% for link in pub.links %}<a href="{{ link.url | escape }}" target="_blank" rel="noopener noreferrer">{{ link.label | escape }} ↗</a>{% endfor %}</div>{% endif %}
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p class="quiet-note">Selected projects and publications coming soon.</p>
  {% endif %}
</section>

<section id="experience" class="content-section" aria-labelledby="experience-title">
  <h2 id="experience-title">Experience</h2>
  <ul class="record-list">
    {% assign experience = site.data.homepage.internships | reverse %}
    {% for item in experience %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</section>

<section id="educations" class="content-section" aria-labelledby="education-title">
  <h2 id="education-title">Education</h2>
  <ul class="record-list">
    {% assign education = site.data.homepage.educations | reverse %}
    {% for item in education %}
    <li>{% if item.text %}{{ item.text | escape }}{% else %}{{ item | escape }}{% endif %}</li>
    {% endfor %}
  </ul>
</section>

<section id="awards" class="content-section" aria-labelledby="awards-title">
  <h2 id="awards-title">Awards</h2>
  <ul class="record-list awards-list">
    {% for item in site.data.homepage.awards %}
    <li>{{ item | escape }}</li>
    {% endfor %}
  </ul>
</section>
