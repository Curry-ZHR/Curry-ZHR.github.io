(function () {
  var data = window.SITE_DATA;

  if (!data || !data.profile) {
    return;
  }

  function createLinkItem(link) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    var icon = document.createElement("i");
    var span = document.createElement("span");

    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    icon.className = link.icon;
    span.textContent = link.label;

    a.appendChild(icon);
    a.appendChild(span);
    li.appendChild(a);

    return li;
  }

  function renderSimpleList(id, items) {
    var list = document.getElementById(id);
    if (!list || !Array.isArray(items)) {
      return;
    }

    list.innerHTML = "";
    items.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

  var profile = data.profile;
  var avatar = document.getElementById("profile-avatar");
  var name = document.getElementById("profile-name");
  var org = document.getElementById("profile-org");
  var lab = document.getElementById("profile-lab");
  var links = document.getElementById("profile-links");

  avatar.src = profile.avatar;
  avatar.alt = profile.name + " avatar";
  name.textContent = profile.name;
  org.textContent = profile.organization;
  lab.textContent = profile.lab;

  if (Array.isArray(profile.links)) {
    profile.links.forEach(function (link) {
      links.appendChild(createLinkItem(link));
    });
  }

  if (profile.location) {
    links.insertAdjacentHTML(
      "afterbegin",
      '<li><span class="muted-line"><i class="fa-solid fa-location-dot"></i><span>' + profile.location + "</span></span></li>"
    );
  }

  var aboutContainer = document.getElementById("about-content");
  if (aboutContainer && Array.isArray(data.about)) {
    data.about.forEach(function (paragraph) {
      var p = document.createElement("p");
      p.textContent = paragraph;
      aboutContainer.appendChild(p);
    });
  }

  var newsList = document.getElementById("news-list");
  if (newsList && Array.isArray(data.news)) {
    data.news.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="timeline-date">[' + item.date + "]</span> " + item.text;
      newsList.appendChild(li);
    });
  }

  var publicationsList = document.getElementById("publications-list");
  if (publicationsList && Array.isArray(data.publications)) {
    data.publications.forEach(function (pub) {
      var li = document.createElement("li");
      var html =
        '<h3 class="pub-title">' + pub.title + "</h3>" +
        '<p class="pub-authors">' + pub.authors + "</p>" +
        '<p class="pub-venue">' + pub.venue + "</p>";

      if (Array.isArray(pub.links) && pub.links.length > 0) {
        html += '<p class="pub-links">' +
          pub.links
            .map(function (link) {
              return '<a href="' + link.href + '" target="_blank" rel="noopener noreferrer">' + link.label + "</a>";
            })
            .join(" ") +
          "</p>";
      }

      if (pub.summary) {
        html += '<p class="pub-summary">' + pub.summary + "</p>";
      }

      li.innerHTML = html;
      publicationsList.appendChild(li);
    });
  }

  renderSimpleList("awards-list", data.awards);
  renderSimpleList("educations-list", data.educations);
  renderSimpleList("talks-list", data.talks);
  renderSimpleList("internships-list", data.internships);
})();
