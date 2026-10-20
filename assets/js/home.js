(function () {
  "use strict";
  // Older shared hashes continue to point to sections of this same page.
  var aliases = { work: "publications", journey: "experience", internships: "experience", research: "about" };
  var target = aliases[window.location.hash.slice(1)];
  if (target) window.location.replace("#" + target);
})();
