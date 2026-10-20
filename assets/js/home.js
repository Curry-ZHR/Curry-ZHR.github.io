(function () {
  "use strict";
  var dialog = document.getElementById("profile-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var panels = Array.from(dialog.querySelectorAll(".info-panel"));
  var closeButton = dialog.querySelector(".dialog-close");
  var scrollArea = dialog.querySelector(".dialog-scroll");
  var lastTrigger = null;
  var aliases = { work: "publications", experience: "about", educations: "about", awards: "about", journey: "about", internships: "about", research: "about", news: "publications" };

  function showPanel(id) {
    var panelId = aliases[id] || id;
    var selected = panels.find(function (panel) { return panel.id === panelId; });
    if (!selected) return false;
    panels.forEach(function (panel) { panel.hidden = panel !== selected; });
    dialog.setAttribute("aria-labelledby", selected.getAttribute("aria-labelledby"));
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");
    scrollArea.scrollTop = 0;
    var target = id !== panelId && document.getElementById(id);
    if (target && selected.contains(target)) target.scrollIntoView({ block: "start" });
    return true;
  }

  function readHash() {
    var id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (error) { return; }
    if (id) showPanel(id);
    else if (dialog.open) dialog.close();
  }

  document.querySelectorAll("a[data-panel], .skip-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      var id = link.getAttribute("href").slice(1);
      lastTrigger = link;
      if (!showPanel(id)) return;
      event.preventDefault();
      window.history.replaceState(null, "", "#" + id);
    });
  });
  closeButton.addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (event) {
    if (event.target !== dialog) return;
    var rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener("close", function () {
    document.body.classList.remove("dialog-open");
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  });
  window.addEventListener("hashchange", readHash);
  readHash();
})();
