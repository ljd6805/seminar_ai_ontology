(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const presentationMode = params.toString().includes("mode=presentation") || params.get("mode") === "presentation";
  const printMode = params.toString().includes("print=1") || params.get("print") === "1";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const allSlides = window.OntologyDeck.slides;
  const slides = presentationMode ? allSlides.filter(slide => slide.mode !== "appendix") : allSlides;
  const stage = document.querySelector("#slide-stage");
  const overview = document.querySelector("#overview-dialog");
  const overviewList = document.querySelector("#overview-list");
  const currentNumber = document.querySelector("#current-number");
  const totalNumber = document.querySelector("#total-number");
  const sectionLabel = document.querySelector("#section-label");
  const progressBar = document.querySelector("#progress-bar");
  const progressTrack = document.querySelector(".progress-track");
  const previousButton = document.querySelector("#previous-button");
  const nextButton = document.querySelector("#next-button");
  const announcer = document.querySelector("#deck-announcer");
  const notes = document.querySelector("#presenter-notes");
  const noteContent = document.querySelector("#presenter-note-content");
  let current = 0;

  if (presentationMode) document.body.classList.add("presentation-mode");
  if (printMode) document.body.classList.add("print-mode");
  if (reduceMotion) document.body.classList.add("reduce-motion");

  const escapeHtml = value => String(value ?? "").replace(/[&<>\"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;"
  })[character]);

  const sourceMarkup = slide => {
    const sources = (slide.sources || []).map(source => escapeHtml(source)).join(" · ");
    return `<footer class="source-line"><span>${sources || "프로젝트 교안 설계"}</span><span>${escapeHtml(slide.id)}</span></footer>`;
  };

  const render = () => {
    if (!slides.length) {
      stage.innerHTML = '<section class="slide is-active"><div class="slide-inner"><p class="eyebrow">EMPTY DECK</p><h1>등록된 슬라이드가 없습니다.</h1></div></section>';
      return;
    }
    stage.innerHTML = slides.map((slide, index) => `
      <section class="slide ${slide.className || ""}" data-index="${index}" data-slide-id="${escapeHtml(slide.id)}" aria-hidden="true">
        <div class="slide-inner">
          <header class="slide-head">
            <p class="eyebrow">${escapeHtml(slide.eyebrow || slide.section)}</p>
            <h${index === 0 ? "1" : "2"}>${slide.title}</h${index === 0 ? "1" : "2"}>
            ${slide.lead ? `<p class="lead">${slide.lead}</p>` : ""}
          </header>
          <div class="slide-body">${slide.body || ""}</div>
        </div>
        ${sourceMarkup(slide)}
      </section>`).join("");
    overviewList.innerHTML = slides.map((slide, index) => `
      <li><button type="button" data-slide-target="${index}"><small>${String(index + 1).padStart(2, "0")} · ${escapeHtml(slide.section)}</small>${slide.title.replace(/<[^>]+>/g, "")}</button></li>`).join("");
    totalNumber.textContent = String(slides.length);
    progressTrack.setAttribute("aria-valuemax", String(slides.length));
  };

  const readHash = () => {
    const match = window.location.hash.match(/#\/(\d+)/);
    return match ? Math.max(0, Math.min(slides.length - 1, Number(match[1]) - 1)) : 0;
  };

  const playedKey = slide => `ontology-deck-played:${slide.id}`;
  const markPlayed = slide => {
    try { window.sessionStorage.setItem(playedKey(slide), "1"); } catch (_error) { /* storage is optional */ }
  };
  const wasPlayed = slide => {
    try { return window.sessionStorage.getItem(playedKey(slide)) === "1"; } catch (_error) { return false; }
  };

  const show = (index, options = {}) => {
    current = Math.max(0, Math.min(slides.length - 1, index));
    document.querySelectorAll(".slide").forEach((element, elementIndex) => {
      const active = elementIndex === current;
      element.classList.toggle("is-active", active);
      element.setAttribute("aria-hidden", active ? "false" : "true");
      if (active) {
        element.classList.toggle("played", reduceMotion || (!options.replay && wasPlayed(slides[current])));
        if (!reduceMotion && (options.replay || !wasPlayed(slides[current]))) {
          window.setTimeout(() => markPlayed(slides[current]), 1600);
        }
      }
    });
    const number = current + 1;
    currentNumber.textContent = String(number);
    sectionLabel.textContent = slides[current].section;
    progressBar.style.width = `${(number / slides.length) * 100}%`;
    progressTrack.setAttribute("aria-valuenow", String(number));
    previousButton.disabled = current === 0;
    nextButton.disabled = current === slides.length - 1;
    announcer.textContent = `${number}번 슬라이드, ${slides[current].title.replace(/<[^>]+>/g, "")}`;
    noteContent.innerHTML = `<p>${slides[current].note || "이 슬라이드의 발표자 노트가 아직 등록되지 않았습니다."}</p>`;
    if (!printMode && window.location.hash !== `#/${number}`) history.replaceState(null, "", `#/${number}`);
  };

  const go = delta => show(current + delta);
  const openOverview = () => {
    if (typeof overview.showModal === "function") overview.showModal();
    else overview.setAttribute("open", "");
    const active = overviewList.querySelector(`[data-slide-target="${current}"]`);
    if (active) active.focus();
  };
  const closeOverview = () => {
    if (typeof overview.close === "function") overview.close();
    else overview.removeAttribute("open");
  };
  const replay = () => {
    const active = document.querySelector(".slide.is-active");
    if (!active || reduceMotion) return;
    active.classList.remove("played", "is-active");
    void active.offsetWidth;
    active.classList.add("is-active");
    show(current, { replay: true });
  };

  render();
  current = readHash();
  show(current);

  previousButton.addEventListener("click", () => go(-1));
  nextButton.addEventListener("click", () => go(1));
  document.querySelector("#overview-button").addEventListener("click", openOverview);
  document.querySelector("#overview-close").addEventListener("click", closeOverview);
  document.querySelector("#replay-button").addEventListener("click", replay);
  overviewList.addEventListener("click", event => {
    const button = event.target.closest("[data-slide-target]");
    if (!button) return;
    show(Number(button.dataset.slideTarget));
    closeOverview();
    stage.focus();
  });
  window.addEventListener("hashchange", () => show(readHash()));
  window.addEventListener("keydown", event => {
    if (event.target.matches("input, textarea, select")) return;
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) { event.preventDefault(); go(1); }
    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); go(-1); }
    if (event.key === "Home") { event.preventDefault(); show(0); }
    if (event.key === "End") { event.preventDefault(); show(slides.length - 1); }
    if (event.key.toLowerCase() === "o" || event.key === "Escape") { event.preventDefault(); overview.open ? closeOverview() : openOverview(); }
    if (event.key.toLowerCase() === "r") { event.preventDefault(); replay(); }
    if (event.key.toLowerCase() === "n") { notes.hidden = !notes.hidden; }
  });
})();
