---
layout: profile
title: About
permalink: /about/
redirect_from:
  - /about.html
---

<p class="panel-kicker">A little about me</p>
<h1 class="content-title" id="about-title">{{ site.name | escape }} <span lang="zh">张华锐</span></h1>
<div class="bio">
  {% for paragraph in site.data.homepage.about %}<p>{{ paragraph | escape }}</p>{% endfor %}
</div>
<section class="detail-section" id="experience">
  <h2>Experience</h2>
  <ul class="record-list">
    {% assign experience = site.data.homepage.internships | reverse %}
    {% for item in experience %}<li>{{ item }}</li>{% endfor %}
  </ul>
</section>
<section class="detail-section" id="educations">
  <h2>Education</h2>
  <ul class="record-list">
    {% assign education = site.data.homepage.educations | reverse %}
    {% for item in education %}<li>{% if item.text %}{{ item.text | escape }}{% else %}{{ item | escape }}{% endif %}</li>{% endfor %}
  </ul>
</section>
<section class="detail-section" id="awards">
  <h2>Awards</h2>
  <ul class="record-list">
    {% for item in site.data.homepage.awards %}<li>{{ item | escape }}</li>{% endfor %}
  </ul>
</section>
