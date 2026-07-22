(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const presentationMode = params.toString().includes("mode=presentation") || params.get("mode") === "presentation";
  const printMode = params.toString().includes("print=1") || params.get("print") === "1";
  const motionOff = params.get("motion") === "off";
  const reduceMotion = motionOff || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const allSlides = window.OntologyDeck.slides;
  const slides = (presentationMode ? allSlides.filter(slide => slide.mode !== "appendix") : allSlides).map(slide => ({
    ...slide,
    visualType: slide.visualType || "statement",
    motion: slide.motion || "hybrid",
    ariaSummary: slide.ariaSummary || slide.plainTitle || slide.title.replace(/<[^>]+>/g, "")
  }));

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
  const buildStates = new Map();
  let current = 0;
  let currentBuild = 0;
  let buildTimer = 0;
  let buildAnimating = false;

  if (presentationMode) document.body.classList.add("presentation-mode");
  if (printMode) document.body.classList.add("print-mode");
  if (reduceMotion) document.body.classList.add("reduce-motion");

  const escapeHtml = value => String(value ?? "").replace(/[&<>\"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"
  })[character]);

  const inferTheme = slide => {
    if (/검증|제약|SHACL/.test(slide.plainTitle || "")) return "constraint";
    if (/위험|실패|차단/.test(slide.plainTitle || "")) return "risk";
    if (/근거|사례|증거/.test(slide.plainTitle || "")) return "evidence";
    if (/운영|책임|거버넌스|생명주기/.test(slide.plainTitle || "")) return "governance";
    return "concept";
  };

  const sourceMarkup = slide => {
    const sources = (slide.sources || []).map(source => escapeHtml(source)).join(" · ");
    return `<footer class="source-line"><span>${sources || "프로젝트 교안 설계"}</span><span>${escapeHtml(slide.id)}</span></footer>`;
  };

  const render = () => {
    if (!slides.length) {
      stage.innerHTML = '<section class="slide is-active"><div class="slide-inner"><p class="eyebrow">EMPTY DECK</p><h1>등록된 슬라이드가 없습니다.</h1></div></section>';
      return;
    }
    stage.innerHTML = slides.map((slide, index) => {
      const theme = slide.theme || inferTheme(slide);
      return `
        <section class="slide layout-${escapeHtml(slide.visualType)} theme-${escapeHtml(theme)} motion-${escapeHtml(slide.motion)} ${slide.className || ""}"
          data-index="${index}" data-slide-id="${escapeHtml(slide.id)}" data-motion="${escapeHtml(slide.motion)}"
          aria-label="${escapeHtml(slide.ariaSummary)}" aria-hidden="true">
          <div class="slide-inner">
            <header class="slide-head">
              <p class="eyebrow">${escapeHtml(slide.eyebrow || slide.section)}</p>
              <h${index === 0 ? "1" : "2"}>${slide.title}</h${index === 0 ? "1" : "2"}>
              ${slide.lead ? `<p class="lead">${slide.lead}</p>` : ""}
            </header>
            <div class="slide-body">${slide.body || ""}</div>
          </div>
          ${sourceMarkup(slide)}
        </section>`;
    }).join("");
    overviewList.innerHTML = slides.map((slide, index) => `
      <li><button type="button" data-slide-target="${index}"><small>${String(index + 1).padStart(2, "0")} · ${escapeHtml(slide.section)}</small>${escapeHtml(slide.plainTitle || slide.title.replace(/<[^>]+>/g, ""))}</button></li>`).join("");
    totalNumber.textContent = String(slides.length);
    progressTrack.setAttribute("aria-valuemax", String(slides.length));
  };

  const readHash = () => {
    const match = window.location.hash.match(/#\/(\d+)/);
    return match ? Math.max(0, Math.min(slides.length - 1, Number(match[1]) - 1)) : 0;
  };

  const activeSlide = () => document.querySelector(".slide.is-active");
  const buildItems = element => [...(element?.querySelectorAll("[data-build]") || [])];
  const maxBuild = element => Math.max(0, ...buildItems(element).map(item => Number(item.dataset.build) || 0));

  const completeBuildAnimation = () => {
    if (!buildAnimating) return false;
    window.clearTimeout(buildTimer);
    buildAnimating = false;
    const element = activeSlide();
    element?.classList.add("skip-motion");
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => element?.classList.remove("skip-motion")));
    return true;
  };

  const updateControls = () => {
    const maximum = maxBuild(activeSlide());
    previousButton.disabled = current === 0 && currentBuild === 0;
    nextButton.disabled = current === slides.length - 1 && currentBuild >= maximum;
    const buildStatus = maximum ? ` · 단계 ${currentBuild}/${maximum}` : "";
    nextButton.setAttribute("aria-label", currentBuild < maximum ? `다음 의미 단계${buildStatus}` : "다음 슬라이드");
    previousButton.setAttribute("aria-label", currentBuild > 0 ? `이전 의미 단계${buildStatus}` : "이전 슬라이드");
  };

  const applyBuildState = (element, value, immediate = false) => {
    if (!element) return;
    if (immediate) element.classList.add("skip-motion");
    buildItems(element).forEach(item => {
      const visible = Number(item.dataset.build) <= value;
      item.classList.toggle("is-built", visible);
      item.setAttribute("aria-hidden", visible ? "false" : "true");
    });
    if (immediate) window.requestAnimationFrame(() => element.classList.remove("skip-motion"));
  };

  const setBuild = (value, options = {}) => {
    const element = activeSlide();
    const maximum = maxBuild(element);
    currentBuild = Math.max(0, Math.min(maximum, value));
    buildStates.set(slides[current].id, currentBuild);
    applyBuildState(element, currentBuild, options.immediate || reduceMotion || printMode);
    updateControls();
    if (!options.immediate && !reduceMotion && !printMode) {
      buildAnimating = true;
      window.clearTimeout(buildTimer);
      buildTimer = window.setTimeout(() => { buildAnimating = false; }, 340);
    }
  };

  const playedKey = slide => `ontology-deck-played:${slide.id}`;
  const markPlayed = slide => {
    try { window.sessionStorage.setItem(playedKey(slide), "1"); } catch (_error) { /* session storage is optional */ }
  };
  const wasPlayed = slide => {
    try { return window.sessionStorage.getItem(playedKey(slide)) === "1"; } catch (_error) { return false; }
  };

  const show = (index, options = {}) => {
    completeBuildAnimation();
    current = Math.max(0, Math.min(slides.length - 1, index));
    document.querySelectorAll(".slide").forEach((element, elementIndex) => {
      const active = elementIndex === current;
      element.classList.toggle("is-active", active);
      element.setAttribute("aria-hidden", active ? "false" : "true");
      if (active) {
        element.classList.toggle("played", reduceMotion || (!options.replay && wasPlayed(slides[current])));
        if (!reduceMotion && (options.replay || !wasPlayed(slides[current]))) window.setTimeout(() => markPlayed(slides[current]), 700);
      }
    });
    const element = activeSlide();
    const maximum = maxBuild(element);
    currentBuild = reduceMotion || printMode ? maximum : (options.reset ? 0 : buildStates.get(slides[current].id) || 0);
    applyBuildState(element, currentBuild, true);
    buildStates.set(slides[current].id, currentBuild);

    const number = current + 1;
    currentNumber.textContent = String(number);
    sectionLabel.textContent = slides[current].section;
    progressBar.style.width = `${(number / slides.length) * 100}%`;
    progressTrack.setAttribute("aria-valuenow", String(number));
    announcer.textContent = `${number}번 슬라이드, ${slides[current].ariaSummary}`;
    noteContent.innerHTML = `<p>${slides[current].note || "이 슬라이드의 발표자 노트가 아직 등록되지 않았습니다."}</p>`;
    updateControls();
    if (!printMode && window.location.hash !== `#/${number}`) history.replaceState(null, "", `#/${number}`);
  };

  const advanceBuild = () => {
    if (completeBuildAnimation()) return;
    const maximum = maxBuild(activeSlide());
    if (currentBuild < maximum) setBuild(currentBuild + 1);
    else if (current < slides.length - 1) show(current + 1);
  };

  const rewindBuild = () => {
    if (completeBuildAnimation()) return;
    if (currentBuild > 0) setBuild(currentBuild - 1);
    else if (current > 0) show(current - 1);
  };

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
    const element = activeSlide();
    if (!element) return;
    buildStates.set(slides[current].id, 0);
    element.classList.remove("played", "is-active");
    void element.offsetWidth;
    element.classList.add("is-active");
    show(current, { replay: true, reset: true });
  };

  render();
  current = readHash();
  if (printMode || reduceMotion) {
    document.querySelectorAll("[data-build]").forEach(item => item.classList.add("is-built"));
  }
  show(current);

  previousButton.addEventListener("click", rewindBuild);
  nextButton.addEventListener("click", advanceBuild);
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
    if (event.target.matches("input, textarea, select, [contenteditable]")) return;
    const forward = event.code === "Space" || ["ArrowRight", "ArrowDown", "PageDown"].includes(event.key);
    if (forward) { event.preventDefault(); advanceBuild(); }
    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); rewindBuild(); }
    if (event.key === "Home") { event.preventDefault(); show(0); }
    if (event.key === "End") { event.preventDefault(); show(slides.length - 1); }
    if (event.key.toLowerCase() === "o" || event.key === "Escape") { event.preventDefault(); overview.open ? closeOverview() : openOverview(); }
    if (event.key.toLowerCase() === "r") { event.preventDefault(); replay(); }
    if (event.key.toLowerCase() === "n") notes.hidden = !notes.hidden;
  });
})();
