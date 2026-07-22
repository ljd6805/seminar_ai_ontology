(() => {
  "use strict";

  const escapeHtml = value => String(value ?? "").replace(/[&<>\"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"
  })[character]);

  const svgFigure = (name, label, viewBox, content) => `
    <figure class="visual visual-${name}" role="img" aria-label="${escapeHtml(label)}">
      <svg viewBox="${viewBox}" aria-hidden="true" focusable="false">${content}</svg>
      <figcaption class="sr-only">${escapeHtml(label)}</figcaption>
    </figure>`;

  const node = (x, y, width, height, label, detail, classes = "", build = 1) => `
    <g class="diagram-node ${classes}" data-build="${build}">
      <g transform="translate(${x} ${y})">
        <rect width="${width}" height="${height}" rx="4"></rect>
        <text class="node-label" x="${width / 2}" y="${detail ? height / 2 - 5 : height / 2 + 5}" text-anchor="middle">${escapeHtml(label)}</text>
        ${detail ? `<text class="node-detail" x="${width / 2}" y="${height / 2 + 18}" text-anchor="middle">${escapeHtml(detail)}</text>` : ""}
      </g>
    </g>`;

  const edge = (path, label, x, y, build = 1, classes = "") => `
    <g class="diagram-edge ${classes}" data-build="${build}">
      <path d="${path}" marker-end="url(#arrow)"></path>
      ${label ? `<text x="${x}" y="${y}" text-anchor="middle">${escapeHtml(label)}</text>` : ""}
    </g>`;

  const semanticMap = () => svgFigure(
    "semantic-map",
    "서로 다른 용어, 데이터, 규칙, 근거가 공유 의미를 중심으로 연결되는 지도",
    "0 0 1040 410",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     <g class="map-axis" data-build="1"><line x1="98" y1="205" x2="942" y2="205"></line><text x="98" y="184">흩어진 표현</text><text x="942" y="184" text-anchor="end">검증 가능한 지식</text></g>
     ${node(62, 246, 156, 78, "용어", "팀마다 다른 이름", "is-source", 1)}
     ${node(255, 246, 156, 78, "데이터", "스키마가 다른 기록", "is-source", 1)}
     ${node(448, 246, 156, 78, "규칙", "암묵적인 판단", "is-source", 1)}
     ${node(641, 246, 156, 78, "근거", "분리된 문서", "is-source", 1)}
     ${edge("M140 246 C140 176 374 138 455 138", "정의", 276, 154, 2)}
     ${edge("M333 246 C333 192 415 172 472 164", "매핑", 389, 190, 2)}
     ${edge("M526 246 L526 174", "형식화", 568, 215, 2)}
     ${edge("M719 246 C719 192 637 172 580 164", "추적", 665, 190, 2)}
     ${node(435, 88, 184, 86, "공유 의미", "식별자 · 관계 · 제약", "is-core", 3)}
     ${edge("M619 131 C748 131 824 116 864 94", "질의", 746, 118, 4)}
     ${node(838, 40, 160, 74, "결정", "검색 · 추론 · 검증", "is-outcome", 4)}
     <g class="diagram-legend" data-build="4"><line x1="62" y1="374" x2="112" y2="374"></line><text x="124" y="379">선은 의미 변환 또는 의존성을 나타낸다</text></g>`
  );

  const methodMatrix = () => {
    const methods = [
      ["Ontology 101", "구축", "●", "", "●", "", "", "실용적인 첫 순서"],
      ["Grüninger & Fox", "질문", "", "●", "", "", "●", "질문으로 범위와 평가 연결"],
      ["METHONTOLOGY", "생명주기", "●", "", "●", "●", "●", "활동·산출물·평가 구조"],
      ["NeOn", "재사용", "●", "●", "●", "●", "", "재사용 시나리오와 네트워크"],
      ["OBO Foundry", "운영", "", "●", "●", "●", "●", "IRI·버전·책임 원칙"]
    ];
    return `
      <figure class="visual visual-method-matrix" role="img" aria-label="다섯 온톨로지 방법론이 범위, 질문, 모델링, 운영, 평가에 기여하는 정도를 비교한 행렬">
        <div class="matrix-key" data-build="1"><span class="matrix-dot"></span> 주된 강점 <span class="matrix-dash"></span> 보완 영역</div>
        <div class="method-matrix" data-build="1">
          <div class="matrix-row matrix-head"><span>방법론</span><span>초점</span><span>범위</span><span>CQ</span><span>모델</span><span>운영</span><span>평가</span><span>가장 잘 쓰이는 순간</span></div>
          ${methods.map((method, index) => `<div class="matrix-row" data-build="${index + 2}">
            ${method.map((cell, cellIndex) => `<span class="${cell === "●" ? "has-strength" : ""}${cellIndex === 0 ? " method-name" : ""}">${cell || "—"}</span>`).join("")}
          </div>`).join("")}
        </div>
        <p class="matrix-conclusion" data-build="7"><b>선택의 결론</b> 하나를 고르는 문제가 아니라, 질문 → 구조 → 운영의 빈틈을 조합으로 메우는 문제다.</p>
        <figcaption class="sr-only">각 방법론의 전체 범위를 순위화하지 않고 교육용으로 주된 강점을 비교한다.</figcaption>
      </figure>`;
  };

  const identityGraph = () => svgFigure(
    "identity-graph",
    "failure-1042라는 공유 식별자가 유형, 실행, 로그, 구성요소의 사실을 하나의 RDF 그래프로 연결한다",
    "0 0 1040 430",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(402, 170, 236, 92, "ex:failure-1042", "공유 IRI", "is-core", 1)}
     ${edge("M402 198 C315 164 269 127 236 103", "rdf:type", 312, 150, 2)}
     ${node(70, 58, 178, 76, "TimeoutFailure", "class", "is-class", 2)}
     ${edge("M638 197 C724 162 765 127 801 104", "observedIn", 727, 149, 3)}
     ${node(792, 58, 178, 76, "ex:run-88", "test run", "is-evidence", 3)}
     ${edge("M449 262 C391 308 330 330 276 337", "hasEvidence", 369, 315, 4)}
     ${node(92, 314, 188, 76, "ex:log-77", "evidence artifact", "is-evidence", 4)}
     ${edge("M591 262 C649 308 710 330 764 337", "affects", 672, 315, 5)}
     ${node(760, 314, 210, 76, "ex:component-DMA", "system component", "is-outcome", 5)}
     <g class="triple-caption" data-build="5"><text x="520" y="402" text-anchor="middle">주어 IRI가 같으면 서로 다른 문장의 목적어를 한 질의에서 만날 수 있다</text></g>`
  );

  const queryWalkthrough = () => `
    <figure class="visual visual-query-walkthrough" role="img" aria-label="역량 질문이 SPARQL triple pattern을 거쳐 두 개의 결과 행으로 답해지는 코드 워크스루">
      <div class="query-question" data-build="1"><span>CQ</span><strong>같은 시그니처의 과거 타임아웃 실패와 담당 구성요소는?</strong></div>
      <div class="query-grid">
        <pre class="code-window" data-build="2"><span class="code-label">SPARQL · GRAPH PATTERN</span><code><span class="code-kw">SELECT</span> ?failure ?component
<span class="code-kw">WHERE</span> {
  <mark>?failure a ex:TimeoutFailure</mark> ;
           ex:hasSignature ?sig ;
           <mark>ex:affects ?component</mark> .
  <span class="code-kw">FILTER</span>(?sig = <span class="code-string">"TMO-DMA-42"</span>)
}</code></pre>
        <div class="query-bindings" data-build="3">
          <p class="result-label">EXPECTED BINDINGS <b>2 rows</b></p>
          <div class="result-head"><span>?failure</span><span>?component</span></div>
          <div class="result-row"><span>failure-1021</span><span>component-DMA</span></div>
          <div class="result-row"><span>failure-0978</span><span>component-DMA</span></div>
        </div>
      </div>
      <div class="query-sync" data-build="3"><span>타입 패턴</span><i></i><span>관계 패턴</span><i></i><strong>결과 행</strong></div>
      <figcaption class="sr-only">질문의 명사와 관계가 그래프 패턴의 변수와 술어가 되고, 일치하는 바인딩이 표 형식으로 반환된다.</figcaption>
    </figure>`;

  const craftLoop = () => svgFigure(
    "craft-loop",
    "CRAFT의 질문, 요구, 구조, 형식, 테스트 단계가 직선이 아니라 테스트 근거를 이전 단계로 되돌리는 피드백 순환",
    "0 0 1040 430",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     <path class="cycle-track" data-build="1" d="M151 226 C190 81 388 33 520 92 C652 33 850 81 889 226 C850 371 652 397 520 338 C388 397 190 371 151 226 Z"></path>
     ${node(72, 186, 158, 80, "C · 질문", "답 형태 정의", "is-core", 1)}
     ${node(264, 74, 158, 80, "R · 요구", "범위·재사용", "is-source", 2)}
     ${node(441, 34, 158, 80, "A · 구조", "개념·관계", "is-source", 3)}
     ${node(618, 74, 158, 80, "F · 형식", "표현·매핑", "is-source", 4)}
     ${node(810, 186, 158, 80, "T · 테스트", "질의·검증·운영", "is-outcome", 5)}
     <g class="feedback-arrow" data-build="6"><path d="M850 282 C764 401 304 414 175 285" marker-end="url(#arrow)"></path><text x="520" y="404" text-anchor="middle">실패 근거가 가장 가까운 가정으로 돌아간다</text></g>
     <g class="cycle-center" data-build="6"><text x="520" y="227" text-anchor="middle">피드백</text><text x="520" y="252" text-anchor="middle">순서보다 중요한 운영 원리</text></g>`
  );

  const validationPipeline = () => `
    <figure class="visual visual-validation" role="img" aria-label="근거가 없고 점수 범위를 벗어난 실패 데이터가 SHACL 검증에서 두 건의 위반을 낸 뒤 수정되어 적합 판정을 받는 파이프라인">
      <div class="validation-rail">
        <div class="validation-input" data-build="1">
          <span class="status status-invalid">INVALID</span>
          <strong>failure-1042</strong>
          <code>hasEvidence — missing</code>
          <code>confidence 1.4</code>
        </div>
        <div class="validation-gate" data-build="2"><span>SHACL</span><strong>FailureShape</strong><small>최소 개수 · 자료형 · 범위</small></div>
        <div class="validation-report" data-build="3">
          <span class="report-count">2 violations</span>
          <p><b>hasEvidence</b> 최소 1개 필요</p>
          <p><b>confidence</b> 0.0–1.0 필요</p>
        </div>
        <div class="validation-fix" data-build="4"><span class="status status-fixed">FIXED</span><strong>근거 연결 + 0.94</strong><small>수정 후 재검증</small></div>
        <div class="validation-result" data-build="5"><span>CONFORMS</span><strong>적재 가능</strong></div>
      </div>
      <div class="validation-legend" data-build="5"><span>데이터</span><i></i><span>계약</span><i></i><span>실패 근거</span><i></i><strong>수정된 데이터</strong></div>
      <figcaption class="sr-only">검증 결과는 단순 실패가 아니라 수정할 경로와 기대 조건을 함께 돌려준다.</figcaption>
    </figure>`;

  const workshopPrompt = () => `
    <figure class="visual visual-workshop" role="img" aria-label="온톨로지 버전 0.1을 시작하기 위해 질문, 제외 범위, 책임자를 한 문장씩 작성하는 워크시트">
      <div class="workshop-statement" data-build="1"><span>START SMALL</span><strong>한 질문이 작은 온톨로지의 경계를 만든다.</strong></div>
      <ol class="worksheet-lines">
        <li data-build="2"><span>01</span><div><b>답해야 할 질문</b><p>어떤 결정을 위해 무엇을 찾아야 하는가?</p><i></i></div></li>
        <li data-build="3"><span>02</span><div><b>이번 버전의 제외 범위</b><p>지금은 어떤 개념과 자동화를 다루지 않는가?</p><i></i></div></li>
        <li data-build="4"><span>03</span><div><b>정의와 배포의 책임자</b><p>누가 용어 변경을 승인하고 운영 결과를 확인하는가?</p><i></i></div></li>
      </ol>
      <blockquote data-build="5">의미를 코드처럼 관리하라.<small>정의하고 · 테스트하고 · 버전 관리한다</small></blockquote>
      <figcaption class="sr-only">세 문장을 작성하면 질문, 범위, 거버넌스가 정해져 작은 첫 설계를 시작할 수 있다.</figcaption>
    </figure>`;

  window.OntologyDeck.visuals = {
    semanticMap,
    methodMatrix,
    identityGraph,
    queryWalkthrough,
    craftLoop,
    validationPipeline,
    workshopPrompt
  };
})();
