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

  const systemHub = () => svgFigure(
    "system-hub",
    "회귀 로그, 테스트 목록, 이슈 추적기, 블록 맵, 책임자 정보가 중앙의 실패 지식 허브로 모여 판단 근거를 연결한다",
    "0 0 1040 400",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     <g class="hub-orbit" data-build="1"><ellipse cx="520" cy="202" rx="332" ry="146"></ellipse></g>
     ${node(417, 158, 206, 88, "실패 지식 허브", "판단 근거의 연결점", "is-core", 4)}
     ${node(42, 54, 164, 68, "회귀 로그", "관찰·시그니처", "is-source", 1)}
     ${node(42, 278, 164, 68, "테스트 목록", "목적·환경", "is-source", 1)}
     ${node(834, 42, 164, 68, "이슈 추적기", "결정·조치", "is-evidence", 2)}
     ${node(834, 166, 164, 68, "블록 맵", "영향 범위", "is-source", 2)}
     ${node(834, 290, 164, 68, "책임자", "검토·승인", "is-outcome", 3)}
     ${edge("M206 88 C320 88 344 167 417 185", "관찰", 315, 114, 4)}
     ${edge("M206 312 C320 312 344 237 417 219", "맥락", 315, 292, 4)}
     ${edge("M834 76 C720 76 694 167 623 185", "이력", 726, 112, 4)}
     ${edge("M834 200 L623 200", "영향", 730, 188, 4)}
     ${edge("M834 324 C720 324 694 237 623 219", "책임", 726, 292, 4)}
     <g class="hub-caption" data-build="5"><text x="520" y="382" text-anchor="middle">목표는 자동 수정이 아니라 “무엇을 근거로 누가 판단했는가”를 다시 찾게 하는 것이다</text></g>`
  );

  const sourceRibbonCraft = () => svgFigure(
    "source-ribbon",
    "다섯 방법론의 강점이 CRAFT의 질문, 재사용, 구조, 형식화, 테스트 단계로 합류하는 근거 지도",
    "0 0 1040 400",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     <g class="source-column" data-build="1">
       <text x="34" y="36">SOURCE TRADITIONS</text>
       <rect x="34" y="58" width="210" height="42"></rect><text x="50" y="84">Ontology 101 · 구축</text>
       <rect x="34" y="112" width="210" height="42"></rect><text x="50" y="138">Grüninger & Fox · CQ</text>
       <rect x="34" y="166" width="210" height="42"></rect><text x="50" y="192">METHONTOLOGY · 생명주기</text>
       <rect x="34" y="220" width="210" height="42"></rect><text x="50" y="246">NeOn · 재사용</text>
       <rect x="34" y="274" width="210" height="42"></rect><text x="50" y="300">OBO Foundry · 운영</text>
     </g>
     <g class="ribbon-lines" data-build="2"><path d="M244 79 C330 79 326 124 408 124"></path><path d="M244 133 C330 133 326 166 408 166"></path><path d="M244 187 L408 208"></path><path d="M244 241 C330 241 326 250 408 250"></path><path d="M244 295 C330 295 326 292 408 292"></path></g>
     <g class="craft-band" data-build="3">
       <text x="408" y="70">EDUCATIONAL SYNTHESIS · NOT A NEW STANDARD</text>
       <rect x="408" y="94" width="112" height="220"></rect><text x="464" y="127" text-anchor="middle">C</text><text x="464" y="286" text-anchor="middle">질문</text>
       <rect x="526" y="94" width="112" height="220"></rect><text x="582" y="127" text-anchor="middle">R</text><text x="582" y="286" text-anchor="middle">재사용</text>
       <rect x="644" y="94" width="112" height="220"></rect><text x="700" y="127" text-anchor="middle">A</text><text x="700" y="286" text-anchor="middle">구조</text>
       <rect x="762" y="94" width="112" height="220"></rect><text x="818" y="127" text-anchor="middle">F</text><text x="818" y="286" text-anchor="middle">형식화</text>
       <rect x="880" y="94" width="112" height="220"></rect><text x="936" y="127" text-anchor="middle">T</text><text x="936" y="286" text-anchor="middle">테스트</text>
     </g>
     <g class="craft-feedback" data-build="4"><path d="M936 330 C866 382 500 382 464 330" marker-end="url(#arrow)"></path><text x="700" y="374" text-anchor="middle">운영 근거를 질문과 설계로 되돌린다</text></g>`
  );

  const ontologyElements = () => svgFigure(
    "ontology-elements",
    "TimeoutFailure 클래스와 failure-1042 개체가 type 관계로 연결되고, 근거 속성, 최소 개수 제약, 사람용 정의가 서로 다른 역할을 맡는다",
    "0 0 1040 400",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(424, 40, 210, 78, "TimeoutFailure", "CLASS · 공통 경계", "is-class", 1)}
     ${node(424, 276, 210, 78, "failure-1042", "INDIVIDUAL · 실제 사건", "is-core", 2)}
     ${edge("M529 276 L529 118", "rdf:type", 573, 204, 2)}
     ${node(60, 164, 214, 72, "hasEvidence", "PROPERTY · 자원 간 관계", "is-evidence", 3)}
     ${edge("M424 315 C330 315 306 236 274 207", "근거 연결", 346, 277, 3)}
     ${node(766, 92, 214, 72, "minCount 1", "CONSTRAINT · 입력 계약", "is-outcome", 4)}
     ${edge("M634 78 C705 78 726 112 766 128", "검증 조건", 710, 91, 4)}
     ${node(766, 250, 214, 72, "사람용 정의", "ANNOTATION · 합의 설명", "is-source", 5)}
     ${edge("M634 315 C700 315 725 286 766 277", "설명", 706, 310, 5)}
     <g class="element-legend" data-build="5"><text x="60" y="380">그래프 요소의 모양과 관계 이름이 역할을 구분한다 · 제약은 목적에 따라 OWL 또는 SHACL로 표현한다</text></g>`
  );

  const labelConvergence = () => svgFigure(
    "label-convergence",
    "timeout, TMO, 응답 시간 초과, legacy 17이라는 여러 표현이 검토를 거쳐 하나의 개념 IRI에 정렬되며 라벨과 식별자가 구분된다",
    "0 0 1040 360",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(42, 38, 180, 60, "timeout", "SIM label", "is-source", 1)}
     ${node(42, 112, 180, 60, "TMO", "log code", "is-source", 1)}
     ${node(42, 186, 180, 60, "응답 시간 초과", "ko label", "is-source", 2)}
     ${node(42, 260, 180, 60, "legacy:17", "local identifier", "is-source", 2)}
     <g class="review-gate" data-build="3"><path d="M222 68 L420 154 M222 142 L420 166 M222 216 L420 178 M222 290 L420 190"></path><rect x="420" y="126" width="160" height="92" rx="46"></rect><text x="500" y="162" text-anchor="middle">정의·문맥</text><text x="500" y="188" text-anchor="middle">동일성 검토</text></g>
     ${edge("M580 172 L732 172", "승인된 정렬", 656, 157, 4)}
     ${node(732, 122, 250, 100, "ex:TimeoutFailure", "안정된 개념 IRI", "is-core", 4)}
     <g class="label-rule" data-build="5"><text x="732" y="256">라벨은 바뀔 수 있다</text><text x="732" y="282">IRI는 연결 계약을 유지한다</text></g>`
  );

  const expressiveCostMap = () => svgFigure(
    "expressive-cost",
    "지식 구조 선택지를 표현력과 운영 비용의 두 축에 배치하고 목적을 만족하는 최소 수준을 선택하는 결정 지도",
    "0 0 1040 390",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     <g class="decision-axis" data-build="1"><path d="M114 318 L114 54" marker-end="url(#arrow)"></path><path d="M114 318 L944 318" marker-end="url(#arrow)"></path><text x="46" y="68" transform="rotate(-90 46 68)">표현력</text><text x="932" y="354" text-anchor="end">운영 비용</text></g>
     <g class="decision-zone" data-build="2"><path d="M130 300 C312 245 522 190 914 70"></path><text x="670" y="118">필요 이상으로 올라가지 않는다</text></g>
     <g class="decision-point" data-build="2"><circle cx="238" cy="274" r="11"></circle><text x="238" y="248" text-anchor="middle">Glossary</text><text x="238" y="305" text-anchor="middle">용어 합의</text></g>
     <g class="decision-point" data-build="3"><circle cx="418" cy="230" r="11"></circle><text x="418" y="204" text-anchor="middle">Taxonomy</text><text x="418" y="261" text-anchor="middle">탐색·분류</text></g>
     <g class="decision-point" data-build="4"><circle cx="602" cy="174" r="11"></circle><text x="602" y="148" text-anchor="middle">Schema</text><text x="602" y="205" text-anchor="middle">구조·계약</text></g>
     <g class="decision-point is-choice" data-build="5"><circle cx="818" cy="98" r="15"></circle><text x="818" y="67" text-anchor="middle">Ontology</text><text x="818" y="133" text-anchor="middle">형식 의미·추론</text></g>
     <g class="decision-callout" data-build="6"><rect x="326" y="338" width="390" height="36"></rect><text x="521" y="362" text-anchor="middle">CQ · 검증 · 추론 요구가 선택 기준이다</text></g>`
  );

  const ontologyOverGraph = () => `
    <figure class="visual visual-layer-map" role="img" aria-label="온톨로지 명세 레이어가 지식 그래프의 사실을 해석하고 검증하며 질의가 두 레이어를 함께 사용한다">
      <div class="layer-query" data-build="1"><span>CQ</span><strong>같은 시그니처의 과거 실패와 근거는?</strong></div>
      <div class="layer-band layer-ontology" data-build="2"><b>ONTOLOGY · 의미 명세</b><span>Class</span><span>Property</span><span>Axiom</span><span>Shape</span><small>그래프를 어떻게 읽고 검사할지 정의</small></div>
      <div class="layer-link" data-build="3"><i></i><span>해석 · 추론 · 검증</span><i></i></div>
      <div class="layer-band layer-data" data-build="4"><b>KNOWLEDGE GRAPH · 식별된 사실</b><span>failure-1042</span><span>run-88</span><span>log-77</span><span>component-DMA</span><small>실제 사건과 근거를 IRI로 연결</small></div>
      <div class="layer-result" data-build="5"><span>RESULT</span><strong>failure-1021 → log-31 → issue-442</strong></div>
      <figcaption class="sr-only">이 교안에서는 온톨로지를 의미 명세 레이어, 지식 그래프를 식별된 사실 레이어로 구분한다.</figcaption>
    </figure>`;

  const timeoutAssembly = () => `
    <figure class="visual visual-assembly" role="img" aria-label="TimeoutFailure 예제에 상위 클래스, 관계, 근거 제약, 실제 개체, 정의, 역량 질문을 차례로 조립한 구조">
      <div class="assembly-core" data-build="1"><span>CLASS</span><strong>TimeoutFailure</strong><small>⊑ TestFailure</small></div>
      <div class="assembly-ring">
        <div data-build="2"><b>RELATION</b><span>observedIn → TestRun</span></div>
        <div data-build="3"><b>EVIDENCE</b><span>hasEvidence min 1</span></div>
        <div data-build="4"><b>INSTANCE</b><span>failure-1042</span></div>
        <div data-build="5"><b>DEFINITION</b><span>제한 시간 안에 완료되지 않은 관찰</span></div>
      </div>
      <div class="assembly-cq" data-build="6"><span>CQ</span><strong>같은 시그니처의 과거 실패는?</strong><i></i><b>모든 요소가 질문에 기여해야 한다</b></div>
      <figcaption class="sr-only">구성요소가 독립적으로 존재하지 않고 하나의 역량 질문을 답하기 위해 연결된다.</figcaption>
    </figure>`;

  const standardStack = () => `
    <figure class="visual visual-standard-stack" role="img" aria-label="RDF 표현에서 의미, 검증, 질의, 교환까지 각 표준이 서로 다른 질문을 맡는 다섯 층 구조">
      <div class="stack-question" data-build="1"><span>질문</span><span>표준</span><span>산출물</span></div>
      <div class="stack-row" data-build="2"><b>무엇을 연결할까?</b><strong>RDF</strong><span>트리플 · 그래프</span></div>
      <div class="stack-row" data-build="3"><b>무엇을 뜻할까?</b><strong>RDFS · OWL · SKOS</strong><span>클래스 · 관계 · 공리 · 용어망</span></div>
      <div class="stack-row" data-build="4"><b>계약을 지켰을까?</b><strong>SHACL</strong><span>검증 결과</span></div>
      <div class="stack-row" data-build="5"><b>어떻게 찾을까?</b><strong>SPARQL</strong><span>그래프 패턴 · 결과 행</span></div>
      <div class="stack-row" data-build="6"><b>어떻게 교환할까?</b><strong>Turtle · JSON-LD</strong><span>같은 그래프의 직렬화</span></div>
      <figcaption class="sr-only">각 표준은 경쟁 관계가 아니라 표현, 의미, 검증, 질의, 교환 역할을 분담한다.</figcaption>
    </figure>`;

  const skosNetwork = () => svgFigure(
    "skos-network",
    "Timeout failure 선호 레이블을 중심으로 TMO 대체 레이블, Test failure 상위 개념, Hang 관련 개념, legacy 17 매핑이 구분된 SKOS 용어망",
    "0 0 1040 390",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(405, 154, 230, 82, "Timeout failure", "skos:prefLabel", "is-core", 1)}
     ${node(78, 52, 174, 68, "TMO", "skos:altLabel", "is-source", 2)}
     ${edge("M252 86 C340 86 360 160 405 177", "label", 339, 116, 2)}
     ${node(778, 42, 184, 68, "Test failure", "broader concept", "is-class", 3)}
     ${edge("M635 176 C698 144 724 92 778 78", "skos:broader", 711, 128, 3)}
     ${node(788, 272, 174, 68, "Hang", "related concept", "is-evidence", 4)}
     ${edge("M635 214 C704 233 735 288 788 304", "skos:related", 716, 254, 4, "is-dashed")}
     ${node(74, 270, 190, 68, "legacy:17", "external concept", "is-source", 5)}
     ${edge("M264 304 C334 284 358 224 405 210", "skos:exactMatch?", 342, 259, 5, "is-dashed")}
     <g class="skos-note" data-build="6"><text x="520" y="374" text-anchor="middle">broader는 용어 조직 관계다 · OWL subClassOf와 자동으로 같다고 해석하지 않는다</text></g>`
  );

  const serializationCompare = () => `
    <figure class="visual visual-serialization" role="img" aria-label="하나의 RDF 그래프가 Turtle과 JSON-LD라는 서로 다른 직렬화 문법으로 표현되지만 같은 주어, 유형, 근거 관계를 보존하는 비교">
      <div class="serialization-graph" data-build="1"><span>failure-1042</span><i>rdf:type</i><span>TimeoutFailure</span><i>hasEvidence</i><span>log-77</span></div>
      <div class="serialization-code">
        <pre data-build="2"><b>TURTLE</b><code><mark>ex:failure-1042</mark>
  a ex:TimeoutFailure ;
  ex:hasEvidence ex:log-77 .</code></pre>
        <pre data-build="3"><b>JSON-LD</b><code>{ <mark>"@id": "ex:failure-1042"</mark>,
  "@type": "ex:TimeoutFailure",
  "ex:hasEvidence": {
    "@id": "ex:log-77" } }</code></pre>
      </div>
      <div class="serialization-result" data-build="4"><span>같은 RDF 그래프</span><i></i><strong>문법은 달라도 식별자와 관계는 유지된다</strong></div>
      <figcaption class="sr-only">JSON-LD context는 짧은 키를 IRI에 매핑하며 직렬화 차이가 데이터 모델 차이를 뜻하지 않는다.</figcaption>
    </figure>`;

  const fitPurpose = () => `
    <figure class="visual visual-fit-purpose" role="img" aria-label="우주 전체를 모델링하려는 넓은 경계에서 역량 질문에 필요한 작은 업무 경계만 잘라 내고 목적, 정합성, 운영 가능성으로 평가하는 그림">
      <div class="purpose-universe" data-build="1"><span>가능한 모든 개념</span><i>조직 · 시스템 · 로그 · 코드 · 사람 · 정책 · 원인 · 조치</i></div>
      <div class="purpose-cut" data-build="2"><span>v0.1 업무 경계</span><strong>실패 → 실행 → 근거 → 이슈 → 책임자</strong><small>CQ가 요구하는 연결만 남긴다</small></div>
      <div class="purpose-measures">
        <div data-build="3"><b>목적</b><span>CQ에 답하는가</span></div>
        <div data-build="4"><b>정합성</b><span>모순 없이 설명되는가</span></div>
        <div data-build="5"><b>운영</b><span>지속해서 돌볼 수 있는가</span></div>
      </div>
      <figcaption class="sr-only">좋은 온톨로지는 크기가 아니라 합의한 질문과 검증을 만족하는 최소 경계로 평가한다.</figcaption>
    </figure>`;

  const moduleArchitecture = () => svgFigure(
    "module-architecture",
    "공통 핵심 모듈에서 도메인 모듈, 애플리케이션 모듈로만 의존성이 흐르고 각 모듈의 변경 영향이 분리되는 구조",
    "0 0 1040 390",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(70, 118, 236, 126, "CORE", "Entity · Event · Evidence · Agent", "is-core", 1)}
     ${edge("M306 181 L402 181", "import", 354, 165, 2)}
     ${node(402, 92, 260, 178, "DOMAIN", "Test · Run · Failure · Component", "is-class", 2)}
     ${edge("M662 181 L758 181", "import", 710, 165, 3)}
     ${node(758, 118, 236, 126, "APPLICATION", "Issue mapping · queue · UI view", "is-outcome", 3)}
     <g class="module-contract" data-build="4"><line x1="70" y1="310" x2="994" y2="310"></line><text x="70" y="340">안정성 높음</text><text x="520" y="340" text-anchor="middle">도메인 변화</text><text x="994" y="340" text-anchor="end">사용처 변화 빠름</text></g>
     <g class="module-rule" data-build="5"><text x="520" y="378" text-anchor="middle">의존성은 한 방향으로 · 애플리케이션 변경이 핵심 의미를 흔들지 않게 한다</text></g>`
  );

  const craftSynthesisMap = () => svgFigure(
    "craft-synthesis",
    "역량 질문, 생명주기, 재사용, 모듈, 운영 원칙의 다섯 근거가 CRAFT 다섯 단계에 연결되는 교육용 합성 지도",
    "0 0 1040 400",
    `<g class="synthesis-ring" data-build="1"><circle cx="520" cy="204" r="128"></circle><circle cx="520" cy="204" r="82"></circle><text x="520" y="193" text-anchor="middle">CRAFT</text><text x="520" y="222" text-anchor="middle">교육용 합성 프레임</text></g>
     <g class="synthesis-stage" data-build="2"><circle cx="520" cy="52" r="29"></circle><text x="520" y="60" text-anchor="middle">C</text></g>
     <g class="synthesis-stage" data-build="2"><circle cx="666" cy="156" r="29"></circle><text x="666" y="164" text-anchor="middle">R</text></g>
     <g class="synthesis-stage" data-build="3"><circle cx="612" cy="326" r="29"></circle><text x="612" y="334" text-anchor="middle">A</text></g>
     <g class="synthesis-stage" data-build="3"><circle cx="428" cy="326" r="29"></circle><text x="428" y="334" text-anchor="middle">F</text></g>
     <g class="synthesis-stage" data-build="4"><circle cx="374" cy="156" r="29"></circle><text x="374" y="164" text-anchor="middle">T</text></g>
     <g class="synthesis-sources" data-build="5"><text x="60" y="78">CQ METHOD</text><text x="60" y="144">METHONTOLOGY</text><text x="60" y="210">ONTOLOGY 101</text><text x="830" y="112">NeOn</text><text x="830" y="244">OBO FOUNDRY</text><path d="M164 74 L454 104 M182 140 L397 177 M172 206 L397 228 M830 108 L644 142 M830 240 L636 276"></path></g>
     <g class="synthesis-disclaimer" data-build="6"><text x="520" y="390" text-anchor="middle">독립 학술 표준이 아니라 검증된 활동을 실무 학습 순서로 묶은 기억 장치다</text></g>`
  );

  const contextCanvas = () => `
    <figure class="visual visual-context-canvas" role="img" aria-label="업무 상황, 결정, 사용자, 성공 신호와 제약을 한 화면에서 채우는 CRAFT Context 캔버스">
      <div class="canvas-title" data-build="1"><span>C · CONTEXT</span><strong>기술보다 먼저 업무 결정을 고정한다</strong></div>
      <div class="canvas-field" data-build="2"><b>상황</b><span>새 회귀 실패의 초기 분석</span><small>언제 이 지식이 필요한가?</small></div>
      <div class="canvas-field" data-build="3"><b>결정</b><span>조사 우선순위와 담당 구성요소 후보</span><small>어떤 행동이 달라지는가?</small></div>
      <div class="canvas-field" data-build="4"><b>사용자</b><span>검증 엔지니어 · 구성요소 책임자</span><small>누가 답을 해석하고 승인하는가?</small></div>
      <div class="canvas-field canvas-signal" data-build="5"><b>성공 신호 / 제약</b><span>근거 경로를 재현한다</span><small>사람 승인 · 보안 경계 · 과장 금지</small></div>
      <figcaption class="sr-only">컨텍스트 캔버스는 상황과 결정을 먼저 적어 기술 선택을 업무 목적에 묶는다.</figcaption>
    </figure>`;

  const requirementSheet = () => `
    <figure class="visual visual-requirement-sheet" role="img" aria-label="요구사항을 범위, 품질, 비기능, 운영의 네 구역으로 정리한 시트">
      <div class="requirement-head" data-build="1"><span>R · REQUIREMENTS</span><b>완료 조건은 기능 밖에도 있다</b></div>
      <div class="requirement-row" data-build="2"><span>01 · 범위</span><strong>포함과 제외</strong><p>실패 유형 · 원천 · 기간 · 사용 결정</p><i>무엇을 다루지 않는지도 적는다</i></div>
      <div class="requirement-row" data-build="3"><span>02 · 품질</span><strong>정확성·완전성</strong><p>필수 근거 · 허용 코드 · 중복 식별</p><i>검증 가능한 계약으로 바꾼다</i></div>
      <div class="requirement-row" data-build="4"><span>03 · 비기능</span><strong>성능·권한·보안</strong><p>질의 지연 · 접근 통제 · 민감 로그</p><i>소비 환경의 제약을 포함한다</i></div>
      <div class="requirement-row" data-build="5"><span>04 · 운영</span><strong>갱신·버전·책임</strong><p>원천 주기 · 배포 주기 · 지원 책임</p><i>지속 가능성을 완료 조건에 넣는다</i></div>
      <figcaption class="sr-only">역량 질문만으로 빠질 수 있는 품질, 보안, 운영 요구를 별도 구역으로 명시한다.</figcaption>
    </figure>`;

  const reuseDecisionMap = () => `
    <figure class="visual visual-reuse-decision" role="img" aria-label="기존 자원의 의미 적합성과 운영 적합성을 평가해 채택, 매핑, 확장, 제외를 결정하는 지도">
      <div class="reuse-axis" data-build="1"><span>의미가 맞는가?</span><span>운영 정책이 맞는가?</span><strong>결정</strong></div>
      <div class="reuse-row" data-build="2"><i>높음</i><i>높음</i><b>채택</b><p>그대로 사용하고 버전을 고정한다</p></div>
      <div class="reuse-row" data-build="3"><i>부분</i><i>높음</i><b>매핑</b><p>로컬 개념과의 관계를 명시한다</p></div>
      <div class="reuse-row" data-build="4"><i>핵심 일치</i><i>확장 가능</i><b>확장</b><p>외부 핵심 위에 도메인 모듈을 더한다</p></div>
      <div class="reuse-row" data-build="5"><i>낮음</i><i>불안정</i><b>제외</b><p>권리·품질·변경 위험과 함께 기록한다</p></div>
      <div class="reuse-note" data-build="6">복사 여부가 아니라 <strong>어떤 관계와 책임으로 연결할지</strong>를 결정한다</div>
      <figcaption class="sr-only">재사용 결정은 기존 용어를 복사하는 작업이 아니라 의미와 운영 적합성을 평가하는 과정이다.</figcaption>
    </figure>`;

  const architectureBlueprint = () => `
    <figure class="visual visual-blueprint" role="img" aria-label="핵심 의미 모델 위에 식별자, 모듈, 출처, 책임자 정책을 동시에 겹쳐 설계한 운영 아키텍처 청사진">
      <div class="blueprint-core" data-build="1"><span>MEANING CORE</span><strong>Failure · Run · Evidence · Component</strong><small>논리 모델</small></div>
      <div class="blueprint-overlay overlay-identity" data-build="2"><b>IDENTITY</b><span>namespace · local ID · deprecation</span></div>
      <div class="blueprint-overlay overlay-module" data-build="3"><b>MODULE</b><span>core → domain → application</span></div>
      <div class="blueprint-overlay overlay-trace" data-build="4"><b>TRACE</b><span>entity · activity · agent · time</span></div>
      <div class="blueprint-overlay overlay-govern" data-build="5"><b>GOVERN</b><span>definition · form · data · consumer</span></div>
      <div class="blueprint-rule" data-build="6">릴리스 직전에 붙이는 운영 문서가 아니라 <strong>처음부터 모델의 일부</strong>다</div>
      <figcaption class="sr-only">식별자, 모듈, 출처, 책임을 논리 모델과 같은 시점에 설계해야 배포 직전의 구조 변경을 줄일 수 있다.</figcaption>
    </figure>`;

  const artifactConstellation = () => svgFigure(
    "artifact-constellation",
    "ex Failure 식별자를 중심으로 온톨로지, 매핑, 예제 데이터, SHACL 검증 규칙 네 산출물이 서로 연결되어 함께 개발되는 구조",
    "0 0 1040 390",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(412, 146, 216, 96, "ex:Failure", "공유 식별자", "is-core", 1)}
     ${node(58, 42, 216, 74, "ontology.ttl", "class · property · axiom", "is-class", 2)}
     ${edge("M274 79 C362 79 365 157 412 178", "정의", 350, 111, 2)}
     ${node(766, 42, 216, 74, "mapping.csv", "source field → IRI", "is-source", 3)}
     ${edge("M766 79 C678 79 675 157 628 178", "정렬", 690, 111, 3)}
     ${node(58, 274, 216, 74, "fixtures.ttl", "작은 실제 예제", "is-evidence", 4)}
     ${edge("M274 311 C362 311 365 231 412 210", "연결", 350, 281, 4)}
     ${node(766, 274, 216, 74, "shapes.ttl", "입력 데이터 계약", "is-outcome", 5)}
     ${edge("M766 311 C678 311 675 231 628 210", "검증", 690, 281, 5)}
     <g class="artifact-rule" data-build="6"><text x="520" y="378" text-anchor="middle">네 산출물은 같은 식별자와 예제에서 함께 깨지고 함께 고쳐진다</text></g>`
  );

  const testMatrix = () => `
    <figure class="visual visual-test-matrix" role="img" aria-label="역량 질문 유형별로 SPARQL 질의, 추론기, SHACL 검증을 선택하고 예상 결과와 실패 피드백을 연결한 테스트 행렬">
      <div class="test-head" data-build="1"><span>질문</span><span>SPARQL</span><span>추론기</span><span>SHACL</span><span>실패가 가리키는 곳</span></div>
      <div class="test-row" data-build="2"><b>같은 시그니처를 찾을 수 있는가</b><i>●</i><i>—</i><i>—</i><span>매핑·식별자·예제 데이터</span></div>
      <div class="test-row" data-build="3"><b>하위 유형이 상위 질의에 포함되는가</b><i>●</i><i>●</i><i>—</i><span>계층·공리·추론 설정</span></div>
      <div class="test-row" data-build="4"><b>근거가 없는 분류를 막는가</b><i>—</i><i>—</i><i>●</i><span>shape·입력 데이터·범위</span></div>
      <div class="test-result" data-build="5"><span>모든 질문에 세 도구를 쓰지 않는다</span><strong>CQ의 실패 의미에 맞는 테스트만 고른다</strong></div>
      <figcaption class="sr-only">테스트 실패는 어떤 설계 가정을 다시 확인해야 하는지 알려 주는 피드백이다.</figcaption>
    </figure>`;

  const sourceInventory = () => `
    <figure class="visual visual-source-inventory" role="img" aria-label="다섯 원천의 핵심 필드, 신뢰 성격, 갱신 주기와 채택 결정을 한 표에서 비교한 목록">
      <div class="inventory-head" data-build="1"><span>원천</span><span>핵심 필드</span><span>신뢰 성격</span><span>갱신</span><span>결정</span></div>
      <div class="inventory-row" data-build="2"><b>SIM LOG</b><span>signature · excerpt</span><i>원시 관찰</i><span>실행마다</span><strong>채택</strong></div>
      <div class="inventory-row" data-build="3"><b>TEST DB</b><span>test · suite · owner</span><i>관리 스키마</i><span>배포마다</span><strong>매핑</strong></div>
      <div class="inventory-row" data-build="4"><b>ISSUE</b><span>ticket · state · ref</span><i>사람 판단</i><span>사건마다</span><strong>연결</strong></div>
      <div class="inventory-row" data-build="5"><b>REGRESSION</b><span>run · date · config</span><i>실행 메타데이터</i><span>실행마다</span><strong>채택</strong></div>
      <div class="inventory-row" data-build="6"><b>ORG</b><span>component · owner</span><i>책임 매핑</i><span>조직 변경</span><strong>참조</strong></div>
      <figcaption class="sr-only">원천마다 사실의 종류와 신뢰 수준이 다르므로 하나의 진실 테이블로 평평하게 합치지 않는다.</figcaption>
    </figure>`;

  const conceptModel = () => svgFigure(
    "concept-model",
    "TestFailure를 중심으로 TestCase, RegressionRun, Evidence, Issue, IPBlock, Engineer가 관계 이름과 방향으로 연결된 최소 개념 모델",
    "0 0 1040 410",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(410, 160, 220, 90, "TestFailure", "분석의 중심 사건", "is-core", 1)}
     ${node(54, 48, 190, 70, "TestCase", "무엇을 시험했나", "is-class", 2)}
     ${edge("M244 83 C344 83 359 165 410 185", "failureOf", 342, 117, 2)}
     ${node(54, 290, 190, 70, "RegressionRun", "언제 관찰했나", "is-source", 2)}
     ${edge("M244 325 C344 325 359 245 410 225", "observedIn", 342, 294, 2)}
     ${node(784, 36, 194, 70, "Evidence", "무엇이 뒷받침하나", "is-evidence", 3)}
     ${edge("M630 183 C700 152 731 84 784 71", "hasEvidence", 716, 132, 3)}
     ${node(784, 126, 194, 70, "Issue", "어떤 판단과 연결됐나", "is-evidence", 3)}
     ${edge("M630 202 L784 161", "relatedIssue", 706, 173, 3)}
     ${node(784, 216, 194, 70, "IPBlock", "어디에 영향이 있나", "is-outcome", 4)}
     ${edge("M630 222 L784 251", "affects", 705, 226, 4)}
     ${node(784, 306, 194, 70, "Engineer", "누가 승인하나", "is-outcome", 5)}
     ${edge("M881 306 L881 286", "ownedBy", 930, 299, 5)}
     <g class="concept-note" data-build="6"><text x="520" y="397" text-anchor="middle">CQ가 요구하지 않는 LogLine · Commit · Configuration은 v0.2 후보로 남긴다</text></g>`
  );

  const taxonomyRelations = () => `
    <figure class="visual visual-taxonomy-relations" role="img" aria-label="왼쪽에는 TestFailure의 실패 종류 계층, 오른쪽에는 실패 사건이 실행, 근거, 이슈, 구성요소, 책임자와 맺는 관계를 분리한 화면">
      <div class="taxonomy-pane" data-build="1"><span>IS-A · 종류를 묻는다</span><strong>TestFailure</strong><i></i><div><b>TimeoutFailure</b><b>AssertionFailure</b><b>BuildFailure</b><b>EnvironmentFailure</b></div></div>
      <div class="relation-pane" data-build="2"><span>EDGE · 사건의 연결을 묻는다</span><strong>failure-1042</strong><div><b>observedIn</b><em>run-88</em></div><div><b>hasEvidence</b><em>log-77</em></div><div><b>relatedIssue</b><em>issue-431</em></div><div><b>affects / ownedBy</b><em>DMA / engineer</em></div></div>
      <div class="taxonomy-rule" data-build="3"><span>문장 검사</span><strong>“모든 A는 B다”면 계층 후보</strong><i></i><b>관찰 위치를 원인으로 과장하지 않는다</b></div>
      <figcaption class="sr-only">분류 계층과 사건 관계를 분리하면 질문에서 필요한 탐색 경로가 선명해진다.</figcaption>
    </figure>`;

  const turtleWalkthrough = () => `
    <figure class="visual visual-turtle-walkthrough" role="img" aria-label="개념 다이어그램의 클래스, 상위 관계, 정의, 개체, 시그니처, 근거, 영향 관계가 각각 Turtle 코드 줄과 대응하는 워크스루">
      <div class="ttl-map" data-build="1"><div><span>CLASS</span><b>TimeoutFailure</b></div><div><span>INSTANCE</span><b>failure_1021</b></div><div><span>EVIDENCE</span><b>evidence_1021</b></div></div>
      <pre class="ttl-code" data-build="2"><code><mark>ex:TimeoutFailure a owl:Class</mark> ;
  <mark>rdfs:subClassOf ex:TestFailure</mark> ;
  rdfs:comment "시간 제한 안에 종료되지 않은 실패"@ko .

<mark>ex:failure_1021 a ex:TimeoutFailure</mark> ;
  ex:hasSignature "AXI_BURST_STALL" ;
  <mark>ex:hasEvidence ex:evidence_1021</mark> ;
  ex:affects ex:DMA .</code></pre>
      <div class="ttl-sync" data-build="3"><span>다이어그램 요소</span><i></i><strong>Turtle 문장</strong><i></i><span>검토 가능한 diff</span></div>
      <figcaption class="sr-only">Turtle 텍스트는 합의한 모델을 줄 단위 변경 이력과 코드 리뷰 대상으로 만든다.</figcaption>
    </figure>`;

  const similarFailureQuery = () => `
    <figure class="visual visual-similar-query" role="img" aria-label="같은 시그니처의 과거 실패를 묻는 질문이 SPARQL 경로 패턴과 두 사건의 결과 표로 변환되는 예시">
      <div class="similar-question" data-build="1"><span>CQ 1</span><strong>AXI_BURST_STALL과 같은 시그니처의 과거 실패는?</strong></div>
      <div class="similar-main">
        <pre data-build="2"><code><span class="code-kw">SELECT</span> ?failure ?run ?issue
<span class="code-kw">WHERE</span> {
  ?failure rdf:type/rdfs:subClassOf* ex:TestFailure ;
           <mark>ex:hasSignature "AXI_BURST_STALL"</mark> ;
           ex:observedIn ?run .
  OPTIONAL { ?failure ex:relatedIssue ?issue }
}</code></pre>
        <div data-build="3"><span>2 MATCHES</span><p><b>failure_1021</b><i>nightly run</i><strong>JIRA_431</strong></p><p><b>failure_0978</b><i>prior run</i><strong>JIRA_431</strong></p></div>
      </div>
      <div class="similar-result" data-build="4">공통 이슈까지 이어지는 <strong>근거 경로</strong>가 답이다</div>
      <figcaption class="sr-only">예상 결과는 실패, 실행, 이슈의 세 열이며 저장소의 실행 가능한 질의와 연결된다.</figcaption>
    </figure>`;

  const evidenceApprovalPath = () => `
    <figure class="visual visual-approval-path" role="img" aria-label="에이전트가 질문을 개념에 연결하고 근거를 수집해 관찰, 추론, 미확인을 구분한 요약을 만들며 정책 검증 뒤 사람이 최종 승인하는 경로">
      <div class="approval-step" data-build="1"><span>01 · 연결</span><strong>질문 → 개념</strong><small>시그니처·실패·구성요소 IRI</small></div>
      <div class="approval-step" data-build="2"><span>02 · 수집</span><strong>근거 경로</strong><small>로그·실행·이슈·출처 이력</small></div>
      <div class="approval-step" data-build="3"><span>03 · 요약</span><strong>가설 + 신뢰도</strong><small>관찰 · 추론 · 미확인 분리</small></div>
      <div class="approval-step approval-gate" data-build="4"><span>04 · 관문</span><strong>규칙 + 권한</strong><small>필수 근거와 정책 검사</small></div>
      <div class="approval-step approval-human" data-build="5"><span>05 · 승인</span><strong>사람의 결정</strong><small>책임자가 분석 상태를 변경</small></div>
      <div class="approval-rule" data-build="6"><span>자동 효과 보장 없음</span><i></i><strong>재현 가능한 근거와 명시적인 책임 경계</strong></div>
      <figcaption class="sr-only">온톨로지는 AI 정확도를 보장하지 않고 근거 재현성과 사람 승인 경계를 지원한다.</figcaption>
    </figure>`;

  const ontologyDecision = () => `
    <figure class="visual visual-ontology-decision" role="img" aria-label="시스템 수, 관계 복잡도, 추론과 검증 요구, 의미 변화율의 네 축을 보고 단순 코드표와 온톨로지 사이를 선택하는 결정 화면">
      <div class="decision-title" data-build="1"><span>비용보다 의미 복잡도가 큰가?</span><strong>네 축을 함께 본다</strong></div>
      <div class="decision-scale" data-build="2"><b>시스템 수</b><i style="--score:.78"></i><span>여러 시스템</span></div>
      <div class="decision-scale" data-build="3"><b>관계 복잡도</b><i style="--score:.86"></i><span>다중 경로</span></div>
      <div class="decision-scale" data-build="4"><b>추론·검증</b><i style="--score:.72"></i><span>둘 다 필요</span></div>
      <div class="decision-scale" data-build="5"><b>변화율</b><i style="--score:.65"></i><span>장기 진화</span></div>
      <div class="decision-options" data-build="6"><span>코드표·스키마</span><i></i><strong>온톨로지 검토</strong><small>합의 · 모델링 · 도구 · 거버넌스 비용을 함께 지불한다</small></div>
      <figcaption class="sr-only">단순한 문제에는 코드표나 스키마가 더 좋은 선택일 수 있으며 온톨로지를 사용하지 않는 결정도 정당하다.</figcaption>
    </figure>`;

  const geneOntologyLayers = () => `
    <figure class="visual visual-go-layers" role="img" aria-label="Gene Ontology의 개념 명세 레이어와 유전자 산물 annotation 레이어가 GO ID와 근거 코드를 통해 연결되고 운영 과정이 두 레이어를 갱신하는 구조">
      <div class="go-layer go-ontology" data-build="1"><span>ONTOLOGY LAYER</span><strong>GO: ID · 정의 · 관계</strong><small>개념 명세와 지속적 유지</small></div>
      <div class="go-link" data-build="2"><i></i><span>GO ID + relation + reference + evidence code</span><i></i></div>
      <div class="go-layer go-annotation" data-build="3"><span>ANNOTATION LAYER</span><strong>Gene product → GO concept</strong><small>관찰 주석과 근거</small></div>
      <div class="go-operation" data-build="4"><b>정의 검토</b><b>annotation 품질</b><b>버전 배포</b><b>공동체 운영</b></div>
      <div class="go-conclusion" data-build="5">개념과 관찰은 분리하되 <strong>식별자와 근거로 연결</strong>한다</div>
      <figcaption class="sr-only">공식 GO 문서에서 장기 식별, 정의, annotation evidence, 공동체 운영 패턴을 학습한다.</figcaption>
    </figure>`;

  const fiboIntegration = () => svgFigure(
    "fibo-integration",
    "스프레드시트, 관계형 데이터베이스, XML 메시지의 서로 다른 금융 표현이 FIBO 공통 개념 레이어에 정렬되고 업무 규칙이 그 의미를 사용한다",
    "0 0 1040 390",
    `<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
     ${node(54, 38, 210, 70, "Spreadsheet", "local columns", "is-source", 1)}
     ${node(54, 158, 210, 70, "Relational DB", "tables · keys", "is-source", 1)}
     ${node(54, 278, 210, 70, "XML message", "exchange fields", "is-source", 1)}
     ${edge("M264 73 C370 73 380 148 428 171", "map", 358, 104, 2)}
     ${edge("M264 193 L428 193", "map", 346, 177, 2)}
     ${edge("M264 313 C370 313 380 238 428 215", "map", 358, 286, 2)}
     ${node(428, 132, 252, 122, "FIBO concept layer", "공통 정의 · 관계 · 공리", "is-core", 3)}
     ${edge("M680 193 L782 193", "shared meaning", 731, 177, 4)}
     ${node(782, 132, 210, 122, "Business rules", "규제 · 보고 · 분석", "is-outcome", 4)}
     <g class="fibo-rule" data-build="5"><text x="520" y="374" text-anchor="middle">형식 통합보다 먼저 복잡한 금융 개념의 해석 기준을 공유한다</text></g>`
  );

  const visualMeta = {};
  const assignMeta = (numbers, visualType, theme = "concept") => numbers.forEach(number => {
    visualMeta[`slide-${String(number).padStart(2, "0")}`] = { visualType, theme, motion: "hybrid" };
  });
  assignMeta([1, 8, 16, 25, 37, 47, 61, 70], "section");
  assignMeta([2, 3, 7, 9, 13, 18, 26, 28, 31, 38, 39, 41, 44, 45, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 62, 63, 66, 68, 72], "process");
  assignMeta([5, 6, 10, 11, 17, 22, 34, 35, 36, 40, 42, 46, 60, 74], "split");
  assignMeta([4, 19, 20, 23, 24, 27, 30, 43, 47, 56, 64, 65, 69, 71, 73], "architecture");
  assignMeta([12, 14, 21, 29], "matrix");
  assignMeta([15, 48], "cycle", "governance");
  assignMeta([32, 33, 66, 68], "code", "evidence");
  assignMeta([71], "case", "evidence");
  assignMeta([31, 67], "validation", "risk");
  assignMeta([75], "workshop");
  window.OntologyDeck.visualMeta = visualMeta;

  window.OntologyDeck.visuals = {
    semanticMap,
    methodMatrix,
    identityGraph,
    queryWalkthrough,
    craftLoop,
    validationPipeline,
    workshopPrompt,
    systemHub,
    sourceRibbonCraft,
    ontologyElements,
    labelConvergence,
    expressiveCostMap,
    ontologyOverGraph,
    timeoutAssembly,
    standardStack,
    skosNetwork,
    serializationCompare,
    fitPurpose,
    moduleArchitecture,
    craftSynthesisMap,
    contextCanvas,
    requirementSheet,
    reuseDecisionMap,
    architectureBlueprint,
    artifactConstellation,
    testMatrix,
    sourceInventory,
    conceptModel,
    taxonomyRelations,
    turtleWalkthrough,
    similarFailureQuery,
    evidenceApprovalPath,
    ontologyDecision,
    geneOntologyLayers,
    fiboIntegration
  };
})();
