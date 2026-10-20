---
permalink: /
layout: home
description: "Harry Zhang — MPhil student at HKUST(GZ), researching humanoid robotics, vision-language-action models, and world models."
author_profile: false
redirect_from:
  - /about/
  - /about.html
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
      <a href="#about" data-panel="about" aria-haspopup="dialog">About</a>
      <a href="#publications" data-panel="publications" aria-haspopup="dialog">Work</a>
      <a href="#contact" data-panel="contact" aria-haspopup="dialog">Contact</a>
    </nav>
  </div>
</section>

<dialog class="info-dialog" id="profile-dialog" aria-labelledby="about-title">
  <button class="dialog-close" type="button" aria-label="Close and return to the scene"><span aria-hidden="true">×</span></button>
  <div class="dialog-scroll">
    <section class="info-panel" id="about" aria-labelledby="about-title">
      <p class="panel-kicker">A little about me</p>
      <h2 id="about-title">{{ site.name | escape }} <span lang="zh">张华锐</span></h2>
      <div class="bio">
        {% for paragraph in site.data.homepage.about %}<p>{{ paragraph | escape }}</p>{% endfor %}
      </div>
      <section class="detail-section" id="experience">
        <h3>Experience</h3>
        <ul class="record-list">
          {% assign experience = site.data.homepage.internships | reverse %}
          {% for item in experience %}<li>{{ item }}</li>{% endfor %}
        </ul>
      </section>
      <section class="detail-section" id="educations">
        <h3>Education</h3>
        <ul class="record-list">
          {% assign education = site.data.homepage.educations | reverse %}
          {% for item in education %}<li>{% if item.text %}{{ item.text | escape }}{% else %}{{ item | escape }}{% endif %}</li>{% endfor %}
        </ul>
      </section>
      <section class="detail-section" id="awards">
        <h3>Awards</h3>
        <ul class="record-list">
          {% for item in site.data.homepage.awards %}<li>{{ item | escape }}</li>{% endfor %}
        </ul>
      </section>
      <p class="panel-footer">&copy; {{ 'now' | date: '%Y' }} {{ site.name | escape }}</p>
    </section>

    <section class="info-panel" id="publications" aria-labelledby="work-title">
      <p class="panel-kicker">Research &amp; projects</p>
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
      <p class="work-note">I work on humanoid loco-manipulation, vision-language-action models, and world models.</p>
      <p class="muted">Selected projects and publications will be added here soon.</p>
      {% endif %}
      {% if site.data.homepage.news.size > 0 %}
      <section class="detail-section" id="news">
        <h3>Updates</h3>
        <ul class="record-list">{% for item in site.data.homepage.news %}<li><span class="muted">{{ item.date | escape }}</span> {{ item.text }}</li>{% endfor %}</ul>
      </section>
      {% endif %}
      {% if site.author.googlescholar %}<p class="section-link"><a href="{{ site.author.googlescholar | escape }}" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a></p>{% endif %}
    </section>

    <section class="info-panel" id="contact" aria-labelledby="contact-title">
      <p class="panel-kicker">Say hello</p>
      <h2 id="contact-title">Let's connect.</h2>
      <p class="muted">You can find me here.</p>
      <ul class="contact-list">
        {% if site.author.email %}<li><span>Email</span><a href="mailto:{{ site.author.email | escape }}">{{ site.author.email | escape }} ↗</a></li>{% endif %}
        {% if site.author.github %}<li><span>Code</span><a href="https://github.com/{{ site.author.github | escape }}" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>{% endif %}
        {% if site.author.googlescholar %}<li><span>Research</span><a href="{{ site.author.googlescholar | escape }}" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a></li>{% endif %}
      </ul>
    </section>
  </div>
</dialog>
