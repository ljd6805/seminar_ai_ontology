window.OntologyDeck.register([
  {
    id: "preview-01",
    section: "ENGINE PREVIEW",
    eyebrow: "ONTOLOGY · KNOWLEDGE MANAGEMENT",
    title: "의미를 연결하고,<br><span class=\"accent\">근거로 운영하는 지식</span>",
    lead: "검증된 75장 본문을 담기 위한 차세대 교안 엔진 미리보기입니다.",
    body: '<div class="hero-mark step" style="--step:1">16:10 · OFFLINE-FIRST · ACCESSIBLE</div>',
    sources: ["디자인 기준: seminar_ai_agent"],
    note: "엔진만 먼저 검증하는 비공개 미리보기입니다. 공개 진입점은 기존 교안을 유지합니다."
  },
  {
    id: "preview-02",
    section: "INTERACTION",
    title: "한 번은 자동으로,<br>필요하면 다시 재생",
    lead: "정보가 나타나는 순서를 학습 순서와 맞추되, 사용자가 언제든 통제할 수 있습니다.",
    body: `<div class="flow" style="--columns:3">
      <div class="flow-item step" style="--step:1"><b>01 · ENTER</b><span>자동 스태거</span><small>처음 볼 때만 순차 등장</small></div>
      <div class="flow-item step" style="--step:2"><b>02 · CONTROL</b><span>재생 버튼</span><small>현재 화면을 즉시 반복</small></div>
      <div class="flow-item step" style="--step:3"><b>03 · RESPECT</b><span>동작 줄이기</span><small>OS 접근성 설정을 우선</small></div>
    </div>`,
    sources: ["프로젝트 접근성 원칙 P02"],
    note: "R 키로 현재 슬라이드의 스태거를 다시 재생할 수 있습니다."
  },
  {
    id: "preview-03",
    section: "KNOWLEDGE GRAPH",
    title: "목록이 아니라 <span class=\"violet\">관계</span>를 본다",
    lead: "엔진은 개념, 관계, 제약, 질의를 단계적으로 드러내는 설명용 도식을 지원합니다.",
    body: `<div class="graph step" style="--step:1" aria-label="회귀 실패 지식 그래프 예시">
      <span class="node core">Regression<br>Failure</span><span class="node">Test</span><span class="node">Commit</span><span class="node">Owner</span><span class="node">Evidence</span>
    </div>`,
    sources: ["프로젝트 관통 사례 P01"],
    note: "다음 PR부터 75장 본문을 이 데이터 기반 엔진에 순차 등록합니다."
  }
]);
