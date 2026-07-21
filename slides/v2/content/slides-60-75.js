window.OntologyDeck.register([
  {
    id: "slide-60",
    plainTitle: "T — 배포가 끝나면 운영과 개선이 시작된다",
    section: "06 · CRAFT 생명주기",
    title: "T — 배포가 끝나면<br><span class=\"accent\">운영과 개선</span>이 시작된다",
    lead: "v0.1은 완료가 아니라 운영 데이터가 들어오는 첫 기준점이다.",
    body: lane([["RELEASE", "버전 + 문서", "변경 내용·호환성·사용법"], ["REVIEW", "변경 요청", "정의·데이터·소비자 영향"], ["DEPRECATE", "안전한 진화", "대체 IRI와 유예 기간"], ["MONITOR", "사용 피드백", "CQ 실패·검증 위반·미사용 용어"], ["↺", "다음 순환", "근거가 남은 v0.2 작업 목록"]], 5),
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry", "S09 · PROV-O", "S10 · Data on the Web"],
    note: "T는 Test에서 끝나지 않고 Tend로 이어집니다. 변경 공지와 deprecated 정책이 있어야 소비자가 안심하고 연결할 수 있습니다."
  },
  {
    id: "slide-61",
    plainTitle: "예제의 목표는 실패 분석의 판단 근거를 연결하는 것이다",
    section: "07 · 반도체 관통 예제",
    eyebrow: "RUNNING EXAMPLE · EDUCATIONAL DATA",
    title: "예제의 목표는 실패 분석의<br><span class=\"violet\">판단 근거</span>를 연결하는 것이다",
    body: `<div class="comparison">
      ${card("GOAL", "근거 경로 연결", "실패 → 테스트/실행 → 근거 → 관련 이슈 → 구성요소/책임자", 1)}
      ${card("NOT A GOAL", "자동 판단 대체", "근본 원인 확정, 코드 수정, 담당자 배정, 성과 평가를 자동화하지 않음", 2)}
    </div><p class="lead step" style="--step:3;margin-top:20px">에이전트는 근거를 모으고, <strong class="accent">사람이 최종 분석 결과를 승인</strong>한다.</p>`,
    sources: ["P02 · failure ontology", "P03 · SHACL shapes", "P04 · 교육용 시나리오"],
    note: "모든 이름과 데이터는 교육용 가상 예시이며 특정 조직의 품질 기준이나 성능을 나타내지 않습니다."
  },
  {
    id: "slide-62",
    plainTitle: "네 개의 CQ가 v0.1 범위를 결정한다",
    section: "07 · 반도체 관통 예제",
    title: "네 개의 CQ가<br><span class=\"accent\">v0.1 범위</span>를 결정한다",
    body: `<div class="grid-2">
      ${card("CQ1 · RECUR", "같은 시그니처의 과거 실패는?", "실패·실행·날짜를 반환", 1)}
      ${card("CQ2 · ISSUE", "관련된 기존 이슈와 근거는?", "이슈·참조·근거를 반환", 2)}
      ${card("CQ3 · QUALITY", "필수 근거가 빠진 분류는?", "SHACL 위반 내역을 반환", 3)}
      ${card("CQ4 · OWNER", "영향 구성요소와 승인 책임자는?", "구성요소·엔지니어를 반환", 4)}
    </div>`,
    sources: ["M05 · Grüninger & Fox", "P04 · 교육용 시나리오"],
    note: "CQ가 요구하지 않는 root-cause 모델과 수정 제안은 v0.1 범위에서 제외합니다."
  },
  {
    id: "slide-63",
    plainTitle: "기존 로그·이슈·테스트 구조부터 목록화한다",
    section: "07 · 반도체 관통 예제",
    title: "기존 로그 · 이슈 · 테스트 구조부터<br><span class=\"violet\">목록화</span>한다",
    body: `<div class="grid-3">
      ${card("SIM LOG", "시그니처 · 발췌문", "신뢰: 원시 관찰 / 갱신: 실행마다", 1)}
      ${card("TEST DB", "테스트 · 스위트 · 책임자", "신뢰: 관리 스키마 / 갱신: 배포마다", 2)}
      ${card("ISSUE", "티켓 · 상태 · 참조", "신뢰: 사람의 판단 / 갱신: 사건마다", 3)}
      ${card("REGRESSION", "실행 · 날짜 · 설정", "신뢰: 실행 메타데이터 / 갱신: 실행마다", 4)}
      ${card("ORG", "구성요소 · 담당자", "신뢰: 책임 매핑 / 갱신: 조직 변경 시", 5)}
      ${card("DECISION", "채택 · 매핑 · 확장", "필드마다 개념·품질·갱신 주기를 기록", 6)}
    </div>`,
    sources: ["M06 · NeOn", "P04 · 교육용 시나리오"],
    note: "원천마다 사실의 종류와 신뢰 수준이 다릅니다. 모두 같은 진실 테이블로 평평하게 합치지 않습니다."
  },
  {
    id: "slide-64",
    plainTitle: "TestFailure를 중심으로 최소 개념 모델을 만든다",
    section: "07 · 반도체 관통 예제",
    title: "<code>TestFailure</code>를 중심으로<br><span class=\"accent\">최소 개념 모델</span>을 만든다",
    body: `<div class="graph" aria-label="TestFailure 중심 최소 개념 모델"><span class="node core step" style="--step:1">TestFailure</span><span class="node step" style="--step:2">TestCase</span><span class="node step" style="--step:2">RegressionRun</span><span class="node step" style="--step:3">Evidence · Issue</span><span class="node step" style="--step:4">IPBlock · Engineer</span></div>`,
    sources: ["P02 · failure ontology"],
    note: "다섯 핵심 연결만 남깁니다. LogLine, Commit, Configuration은 CQ가 요구할 때 후속 module로 추가합니다."
  },
  {
    id: "slide-65",
    plainTitle: "분류 계층과 관계를 분리해야 질문이 선명해진다",
    section: "07 · 반도체 관통 예제",
    title: "분류 계층과 관계를 분리해야<br><span class=\"violet\">질문이 선명</span>해진다",
    body: `<div class="comparison">
      ${card("TAXONOMY · IS-A", "실패 종류", "TimeoutFailure · AssertionFailure · BuildFailure · EnvironmentFailure ⊑ TestFailure", 1)}
      ${card("RELATION · EDGE", "사건의 연결", "observedIn · hasEvidence · relatedIssue · affects · ownedBy", 2)}
    </div><p class="lead step" style="--step:3;margin-top:24px"><strong>LogFailure</strong>처럼 원천 형식을 유형으로 섞을지, <strong>observedIn</strong> 관계로 둘지 CQ로 판단한다.</p>`,
    sources: ["P02 · failure ontology", "M03 · Ontology 101"],
    note: "is-a, part-of, observed-in, caused-by를 구분합니다. 관찰 위치를 원인으로 해석하지 않습니다."
  },
  {
    id: "slide-66",
    plainTitle: "Turtle은 합의한 모델을 검토 가능한 텍스트로 만든다",
    section: "07 · 반도체 관통 예제",
    title: "Turtle은 합의한 모델을<br>검토 가능한 <span class=\"accent\">텍스트</span>로 만든다",
    body: `<div class="comparison">
      <pre class="panel step" style="--step:1;white-space:pre-wrap;color:var(--muted)"><code>ex:TimeoutFailure a owl:Class ;
  rdfs:subClassOf ex:TestFailure ;
  rdfs:comment "시간 제한 안에 종료되지 않은 실패"@ko .</code></pre>
      <pre class="panel step" style="--step:2;white-space:pre-wrap;color:var(--muted)"><code>ex:failure_1021 a ex:TimeoutFailure ;
  ex:hasSignature "AXI_BURST_STALL" ;
  ex:hasEvidence ex:evidence_1021_log_excerpt ;
  ex:affects ex:DMA .</code></pre>
    </div>`,
    sources: ["S01 · RDF", "P02 · failure ontology"],
    note: "예제 전체는 저장소 examples/semiconductor-failure-ontology.ttl에서 확인할 수 있습니다."
  },
  {
    id: "slide-67",
    plainTitle: "SHACL 검증은 근거 없는 분류를 차단한다",
    section: "07 · 반도체 관통 예제",
    title: "SHACL 검증은 근거 없는<br><span class=\"danger\">분류를 차단한다</span>",
    body: lane([["INVALID", "invalid_failure", "hasEvidence 없음 · 점수 1.4"], ["VALIDATE", "FailureShape", "최소 개수·클래스·자료형·범위"], ["RESULT", "위반 2건", "누락 경로와 허용 범위 메시지"], ["FIX", "근거·점수 보완", "적합 판정 뒤 적재"]], 4),
    sources: ["S06 · SHACL", "P03 · SHACL shapes"],
    note: "invalid fixture는 학습을 위해 의도적으로 실패하도록 만들었습니다. 자동 분류라고 이름 붙인 data의 최소 계약을 검사합니다."
  },
  {
    id: "slide-68",
    plainTitle: "SPARQL로 같은 시그니처의 과거 실패를 찾는다",
    section: "07 · 반도체 관통 예제",
    title: "SPARQL로<br><span class=\"accent\">같은 시그니처의 과거 실패</span>를 찾는다",
    body: `<div class="comparison">
      <pre class="panel step" style="--step:1;white-space:pre-wrap;color:var(--muted)"><code>SELECT ?failure ?run ?issue
WHERE {
  ?failure rdf:type/rdfs:subClassOf* ex:TestFailure ;
           ex:hasSignature "AXI_BURST_STALL" ;
           ex:observedIn ?run .
  OPTIONAL { ?failure ex:relatedIssue ?issue }
}</code></pre>
      ${card("EXPECTED RESULT", "두 사건의 근거 경로", "failure_1021 → nightly run → JIRA_431<br>failure_0978 → prior run → JIRA_431", 2)}
    </div>`,
    sources: ["S07 · SPARQL", "P02 · failure ontology", "P04 · 교육용 시나리오"],
    note: "저장소 examples/find-similar-failures.rq에 실행 가능한 교육용 query를 제공합니다."
  },
  {
    id: "slide-69",
    plainTitle: "에이전트는 근거를 따라가고, 사람은 최종 판단을 승인한다",
    section: "07 · 반도체 관통 예제",
    title: "에이전트는 근거를 따라가고,<br>사람은 <span class=\"amber\">최종 판단을 승인</span>한다",
    body: lane([["LINK", "질문→개념", "시그니처·실패·구성요소 IRI"], ["RETRIEVE", "근거 수집", "로그·실행·이슈·출처 이력"], ["SUMMARIZE", "가설과 신뢰도", "관찰·추론·미확인을 분리"], ["VALIDATE", "검증 규칙·정책 관문", "필수 근거와 권한 검사"], ["APPROVE", "사람의 결정", "책임자 확인·분석 상태 변경"]], 5),
    sources: ["S09 · PROV-O", "P04 · 교육용 시나리오"],
    note: "ontology는 AI 성능을 자동 향상시키는 보증서가 아닙니다. 근거를 재현하고 사람 승인을 명시하는 설계 자원입니다."
  },
  {
    id: "slide-70",
    plainTitle: "온톨로지는 비용을 감수할 가치가 있을 때 선택한다",
    section: "08 · 사례·선택·행동",
    eyebrow: "WHEN TO USE — AND WHEN NOT TO",
    title: "온톨로지는 비용을 감수할<br><span class=\"amber\">가치가 있을 때</span> 선택한다",
    body: `<div class="grid-2">
      ${card("USE SIMPLE", "코드표·스키마로 충분", "시스템 1–2개 · 관계 단순 · 추론 불필요 · 의미 변화 낮음", 1)}
      ${card("CONSIDER ONTOLOGY", "공유 의미가 병목", "여러 시스템 · 관계 복잡 · 재사용/추론/검증 필요 · 장기 진화", 2)}
      ${card("ASK", "4축 진단", "시스템 수 · 관계 복잡도 · 추론/검증 요구 · 변화율", 3)}
      ${card("PAY", "운영 비용", "합의·모델링·도구·성능·거버넌스·교육", 4)}
    </div>`,
    sources: ["M03 · Ontology 101", "S10 · Data on the Web", "P04 · 교육용 시나리오"],
    note: "ontology를 도입하지 않는 결정도 좋은 설계 결과일 수 있습니다. 문제의 의미 복잡도가 비용보다 큰지 판단합니다."
  },
  {
    id: "slide-71",
    plainTitle: "Gene Ontology는 식별자·정의·근거·운영을 함께 보여 준다",
    section: "08 · 사례·선택·행동",
    title: "Gene Ontology는 식별자 · 정의 · 근거 · 운영을<br><span class=\"accent\">함께</span> 보여 준다",
    body: `<div class="comparison">
      ${card("ONTOLOGY LAYER", "GO 개념", "고유 GO ID · 텍스트 정의와 출처 · 형식 관계 · 지속적 유지", 1)}
      ${card("ANNOTATION LAYER", "유전자 산물 연결", "GO 개념 + 관계 + 참조 + 근거 코드", 2)}
    </div><p class="lead step" style="--step:3;margin-top:20px">개념 명세와 관찰 주석은 분리하되 <strong class="accent">근거로 연결</strong>한다.</p>`,
    sources: ["C01 · GO ontology documentation", "C02 · GO annotations", "M07 · OBO Foundry"],
    note: "GO의 도메인 내용을 복제하지 않고 공식 문서가 보여 주는 식별·정의·evidence·운영 패턴만 학습합니다."
  },
  {
    id: "slide-72",
    plainTitle: "Schema.org는 완벽함보다 넓은 사용성과 점진적 진화를 택했다",
    section: "08 · 사례·선택·행동",
    title: "Schema.org는 완벽함보다<br><span class=\"violet\">넓은 사용성과 점진적 진화</span>를 택했다",
    body: lane([["CORE", "유형·속성 계층", "웹 게시자가 이해할 수 있는 어휘"], ["USE", "기계가 읽는 마크업", "실제 채택과 도구 생태계"], ["EVOLVE", "이슈·PR·배포", "공동체 검토와 확장"], ["TRADE-OFF", "실용적 형식화", "형식적 순수성↔사용성 균형"]], 4),
    sources: ["C03 · Schema.org docs", "C04 · Schema.org repository", "S10 · Data on the Web"],
    note: "‘완벽함보다 사용성’은 governance 저장소와 공식 구조를 바탕으로 한 설계 trade-off 해석입니다."
  },
  {
    id: "slide-73",
    plainTitle: "FIBO는 금융 데이터의 공통 의미를 형식 온톨로지로 만든다",
    section: "08 · 사례·선택·행동",
    title: "FIBO는 금융 데이터의 공통 의미를<br><span class=\"accent\">형식 온톨로지</span>로 만든다",
    body: `<div class="graph" aria-label="여러 금융 데이터 형식이 공통 개념 레이어에 정렬"><span class="node core step" style="--step:3">FIBO<br>concept layer</span><span class="node step" style="--step:1">Spreadsheet</span><span class="node step" style="--step:1">Relational DB</span><span class="node step" style="--step:2">XML message</span><span class="node step" style="--step:4">Business rules</span></div>`,
    sources: ["C05 · FIBO", "S03 · OWL 2"],
    note: "FIBO는 복잡한 규제·업무 개념에서 관계 명세가 주는 가치를 보여 주는 공식 사례입니다."
  },
  {
    id: "slide-74",
    plainTitle: "첫 4주는 하나의 활용 사례와 첫 배포에 집중한다",
    section: "08 · 사례·선택·행동",
    title: "첫 4주는 하나의 활용 사례와<br><span class=\"violet\">첫 배포</span>에 집중한다",
    body: lane([["WEEK 1 · C", "업무 맥락 + CQ 2–4개", "관문: 사용자와 답 형태 합의"], ["WEEK 2 · R/A", "원천 목록 + 개념 모델", "관문: 범위·재사용·IRI·책임자 승인"], ["WEEK 3 · F", "TTL + 매핑 + 예제 + SHACL", "관문: 작은 데이터 연결"], ["WEEK 4 · T", "질의·검증·배포", "관문: 회귀 테스트·문서·v0.1 승인"]], 4),
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry", "P01 · 교육 설계"],
    note: "주차는 교육용 실행 예시입니다. 팀 규모와 데이터 접근 조건에 맞게 기간을 조정하되 산출물과 gate는 유지합니다."
  },
  {
    id: "slide-75",
    plainTitle: "첫 CQ에서 온톨로지 v0.1이 시작된다",
    section: "08 · 사례·선택·행동",
    title: "첫 CQ에서<br><span class=\"accent\">온톨로지 v0.1</span>이 시작된다",
    lead: "세 문장을 적으면 오늘 바로 작은 설계를 시작할 수 있다.",
    body: `<div class="grid-3">
      ${card("1 · 질문", "우리가 답해야 할 질문", "________________________________", 1)}
      ${card("2 · 제외 범위", "이번 버전에서 하지 않을 것", "________________________________", 2)}
      ${card("3 · 책임자", "정의와 배포를 승인할 사람", "________________________________", 3)}
    </div><p class="quote step" style="--step:4;margin:24px auto 0">의미를 코드처럼 관리하라.</p>`,
    sources: ["M05 · Grüninger & Fox", "P01 · 교육 설계"],
    note: "마지막 화면을 worksheet로 사용합니다. 한 use case, CQ 2–4개, 명확한 제외 범위, owner 한 명으로 시작합니다."
  }
]);
