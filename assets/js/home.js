(function () {
  "use strict";
  // Keep previously shared section URLs working with the new content pages.
  var routes = {
    about: "about/", experience: "about/#experience", educations: "about/#educations",
    awards: "about/#awards", journey: "about/#experience", internships: "about/#experience",
    research: "about/", publications: "work/", work: "work/", news: "work/", contact: "contact/"
  };
  var target = routes[window.location.hash.slice(1)];
  if (target) window.location.replace(new URL(target, window.location.href).href);
})();
