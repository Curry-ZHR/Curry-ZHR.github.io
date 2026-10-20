---
permalink: /
layout: home
description: "MPhil researcher in humanoid robot loco-manipulation, vision-language-action models, and world models."
author_profile: false
header:
  image: hero-huarui-manga.webp
redirect_from:
  - /about/
  - /about.html
---

<div id="home-antd-root">
  <div class="home-fallback">
    <section class="home-hero" style="background-image: url('{{ '/images/hero-huarui-manga.webp' | relative_url }}');" aria-labelledby="home-title">
      <div class="home-inner home-hero__inner">
        <div class="home-hero__copy">
          <p class="home-kicker">MPhil Researcher · Embodied AI</p>
          <h1 id="home-title">Huarui Zhang</h1>
          <p class="home-hero__lead">Teaching humanoid robots to move, see, and make sense of the world.</p>
          <div class="home-chip-row" aria-label="Research interests">
            <span>Humanoid Robotics</span>
            <span>Vision-Language-Action</span>
            <span>World Models</span>
          </div>
          <div class="home-actions">
            <a class="home-button home-button--primary" href="mailto:{{ site.author.email }}"><i class="fas fa-envelope" aria-hidden="true"></i> Email me</a>
            <a class="home-button" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar" aria-hidden="true"></i> Scholar</a>
          </div>
        </div>
      </div>
      <a class="home-scroll-cue" href="#about" aria-label="Scroll to about section"><span></span></a>
    </section>

    <section id="about" class="home-band home-about">
      <div class="home-inner home-about__grid">
        <div>
          <p class="home-section-kicker">About</p>
          <h2>Research, with a human pulse.</h2>
        </div>
        <div class="home-about__copy">
          {% for paragraph in site.data.homepage.about %}<p>{{ paragraph }}</p>{% endfor %}
        </div>
      </div>
    </section>

    <section id="research" class="home-band home-research">
      <div class="home-inner">
        <p class="home-section-kicker">Research focus</p>
        <h2>Building intelligence that can act.</h2>
        <div class="home-focus-grid">
          <article><span>01</span><h3>Humanoid Loco-Manipulation</h3><p>Coordinated motion and interaction for capable whole-body robots.</p></article>
          <article><span>02</span><h3>Vision-Language-Action</h3><p>Connecting visual understanding and language to grounded robot behavior.</p></article>
          <article><span>03</span><h3>World Models</h3><p>Learning predictive representations that help agents reason before they act.</p></article>
        </div>
      </div>
    </section>

    <section id="news" class="home-band home-updates">
      <div class="home-inner home-split">
        <div>
          <p class="home-section-kicker">Updates</p>
          <h2>What is happening now.</h2>
        </div>
        <div class="home-empty">New research notes are on the way.</div>
      </div>
    </section>

    <section id="publications" class="home-band home-work">
      <div class="home-inner home-split">
        <div>
          <p class="home-section-kicker">Selected work</p>
          <h2>Ideas moving toward the real world.</h2>
        </div>
        <div class="home-empty">Research in motion. Publications will appear here.</div>
      </div>
    </section>

    <section id="journey" class="home-band home-journey">
      <div class="home-inner">
        <p class="home-section-kicker">Journey</p>
        <h2>Learning across labs and teams.</h2>
        <div class="home-journey__grid">
          <div id="internships"><h3>Experience</h3><ul>{% for item in site.data.homepage.internships %}<li>{{ item }}</li>{% endfor %}</ul></div>
          <div id="educations"><h3>Education</h3><ul>{% for item in site.data.homepage.educations %}<li>{% if item.text %}{{ item.text }}{% else %}{{ item }}{% endif %}</li>{% endfor %}</ul></div>
        </div>
      </div>
    </section>

    <section id="awards" class="home-band home-awards">
      <div class="home-inner home-split">
        <div>
          <p class="home-section-kicker">Recognition</p>
          <h2>Moments worth keeping.</h2>
        </div>
        <ol>{% for item in site.data.homepage.awards %}<li>{{ item }}</li>{% endfor %}</ol>
      </div>
    </section>
  </div>
</div>

<script id="home-page-data" type="application/json">
{
  "author": {
    "name": {{ site.name | jsonify }},
    "email": {{ site.author.email | jsonify }},
    "github": {{ site.author.github | jsonify }},
    "scholar": {{ site.author.googlescholar | jsonify }},
    "location": {{ site.author.location | jsonify }},
    "employer": {{ site.author.employer | jsonify }}
  },
  "heroImage": {{ '/images/hero-huarui-manga.webp' | relative_url | jsonify }},
  "about": {{ site.data.homepage.about | jsonify }},
  "news": {{ site.data.homepage.news | jsonify }},
  "publications": {{ site.data.homepage.publications | jsonify }},
  "awards": {{ site.data.homepage.awards | jsonify }},
  "educations": {{ site.data.homepage.educations | jsonify }},
  "internships": {{ site.data.homepage.internships | jsonify }}
}
</script>
