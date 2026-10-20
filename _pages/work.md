---
layout: profile
title: Work
permalink: /work/
---

<p class="panel-kicker">Research &amp; projects</p>
<h1 class="content-title" id="work-title">Selected work</h1>
{% if site.data.homepage.publications.size > 0 %}
<div class="publication-list">
  {% for pub in site.data.homepage.publications %}
  <article class="publication">
    <h2>{{ pub.title | escape }}</h2>
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
  <h2>Updates</h2>
  <ul class="record-list">{% for item in site.data.homepage.news %}<li><span class="muted">{{ item.date | escape }}</span> {{ item.text }}</li>{% endfor %}</ul>
</section>
{% endif %}
{% if site.author.googlescholar %}<p class="section-link"><a href="{{ site.author.googlescholar | escape }}" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a></p>{% endif %}
