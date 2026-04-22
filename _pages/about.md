---
permalink: /
title: "Homepage"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Welcome to my homepage.

<section id="about">
  <h2>🙋 About Me</h2>
  {% if site.data.homepage.about == empty %}
  <p>To be updated.</p>
  {% else %}
  {% for paragraph in site.data.homepage.about %}
  <p>{{ paragraph }}</p>
  {% endfor %}
  {% endif %}
</section>

<section id="news">
  <h2>🔥 News</h2>
  {% if site.data.homepage.news == empty %}
  <p>To be updated.</p>
  {% else %}
  <ul class="home-list">
  {% for item in site.data.homepage.news %}
    <li><strong>[{{ item.date }}]</strong> {{ item.text }}</li>
  {% endfor %}
  </ul>
  {% endif %}
</section>

<section id="publications">
  <h2>📚 Publications</h2>
  {% if site.data.homepage.publications == empty %}
  <p>To be updated.</p>
  {% else %}
  <ul class="home-list">
  {% for pub in site.data.homepage.publications %}
    <li>
      <div><strong>{{ pub.title }}</strong></div>
      <div>{{ pub.authors }}</div>
      <div><em>{{ pub.venue }}</em></div>
      {% if pub.links %}
      <div class="home-links">
        {% for link in pub.links %}
        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </li>
  {% endfor %}
  </ul>
  {% endif %}
</section>

<section id="awards">
  <h2>🏆 Awards</h2>
  {% if site.data.homepage.awards == empty %}
  <p>To be updated.</p>
  {% else %}
  <ul class="home-list">
  {% for item in site.data.homepage.awards %}
    <li>{{ item }}</li>
  {% endfor %}
  </ul>
  {% endif %}
</section>

<section id="educations">
  <h2>🎓 Educations</h2>
  {% if site.data.homepage.educations == empty %}
  <p>To be updated.</p>
  {% else %}
  <ul class="home-list">
  {% for item in site.data.homepage.educations %}
    <li>{{ item }}</li>
  {% endfor %}
  </ul>
  {% endif %}
</section>

<section id="internships">
  <h2>💼 Internships</h2>
  {% if site.data.homepage.internships == empty %}
  <p>To be updated.</p>
  {% else %}
  <ul class="home-list">
  {% for item in site.data.homepage.internships %}
    <li>{{ item }}</li>
  {% endfor %}
  </ul>
  {% endif %}
</section>
