const card = (kicker, heading, text, step = 1) => `
  <article class="panel step" style="--step:${step}">
    <span class="panel-kicker">${kicker}</span><h3>${heading}</h3><p>${text}</p>
  </article>`;

const lane = (items, columns = items.length) => `<div class="flow" style="--columns:${columns}">${items.map((item, index) => `
  <div class="flow-item step" style="--step:${index + 1}"><b>${item[0]}</b><span>${item[1]}</span>${item[2] ? `<small>${item[2]}</small>` : ""}</div>`).join("")}</div>`;

const sourceLink = id => `<a href="../../docs/references.md#${id.toLowerCase()}" target="_blank" rel="noreferrer">${id}</a>`;

window.OntologyDeck.register([
  {
    id: "slide-01",
    plainTitle: "Ontology 지식관리 방법론",
    section: "01 · 문제와 학습 계약",
    eyebrow: "FROM TERMS TO TRUSTED KNOWLEDGE",
    title: "Ontology<br><span class=\"accent\">지식관리 방법론</span>",
    lead: "의미를 어떻게 코드처럼 설계하고, 테스트하고, 버전 관리할까?",
    body: `<div class="graph step" style="--step:1" aria-label="흩어진 지식이 의미 그래프로 연결되는 모습"><span class="node core">공유 의미</span><span class="node">용어</span><span class="node">데이터</span><span class="node">규칙</span><span class="node">근거</span></div>`,
    sources: ["P01 · 과정 시놉시스"],
    note: "이 과정은 철학사 강의가 아니라 기술 실무자가 작은 온톨로지를 운영 가능한 산출물로 만드는 방법을 다룹니다."
  },
  {
    id: "slide-02",
    plainTitle: "이 교안이 끝나면 v0.1을 설계할 수 있다",
    section: "01 · 문제와 학습 계약",
    title: "이 교안이 끝나면 <span class=\"accent\">v0.1</span>을 설계할 수 있다",
    lead: "읽기 → 판단 → 설계 → 구현 → 검증 → 운영으로 이어지는 자기주도 학습 경로",
    body: `<div class="grid-3">
      ${card("01", "문제를 진단", "의미 충돌과 단순 데이터 문제를 구분한다.", 1)}
      ${card("02", "정의를 설명", "ontology·KG·taxonomy의 역할을 구분한다.", 2)}
      ${card("03", "표준을 선택", "RDF·OWL·SHACL·SPARQL의 질문을 안다.", 3)}
      ${card("04", "CQ를 작성", "업무 질문을 검증 가능한 요구사항으로 바꾼다.", 4)}
      ${card("05", "모델을 구현", "최소 class·relation·instance·shape를 만든다.", 5)}
      ${card("06–07", "테스트하고 운영", "query·validation·version·owner를 연결한다.", 6)}
    </div>`,
    sources: ["P01 · 과정 시놉시스"],
    note: "순서대로 읽어도 되고 오버뷰에서 필요한 장으로 이동해도 됩니다. R 키는 현재 화면 애니메이션을 다시 재생합니다."
  },
  {
    id: "slide-03",
    plainTitle: "결론부터: 의미에도 버전·테스트·오너가 필요하다",
    section: "01 · 문제와 학습 계약",
    title: "결론부터: 의미에도<br><span class=\"accent\">버전·테스트·오너</span>가 필요하다",
    lead: "ontology는 예쁜 분류 그림이 아니라 변경되고 검증되는 공학 산출물이다.",
    body: lane([["DEFINE", "정의·식별자", "무엇을 뜻하는가"], ["VERSION", "변경 이력", "언제 왜 바뀌었나"], ["TEST", "CQ·shape", "필요한 답과 계약을 지키나"], ["OWN", "책임·승인", "누가 결정하고 돌보나"]], 4),
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry"],
    note: "모델 파일만 만들고 끝내면 용어집과 다르지 않습니다. 운영 책임까지 모델의 일부로 봅니다."
  },
  {
    id: "slide-04",
    plainTitle: "하나의 failure가 다섯 시스템에 흩어져 있다",
    section: "01 · 문제와 학습 계약",
    title: "하나의 failure가<br><span class=\"violet\">다섯 시스템</span>에 흩어져 있다",
    lead: "관통 사례: 교육용 Failure Knowledge Hub — 자동 수정이 아니라 판단 근거 연결이 목표다.",
    body: `<div class="graph" aria-label="다섯 데이터 원천이 실패 지식 허브에 연결되는 구조"><span class="node core step" style="--step:3">Failure<br>Knowledge Hub</span><span class="node step" style="--step:1">Regression log</span><span class="node step" style="--step:1">Test catalog</span><span class="node step" style="--step:2">Issue tracker</span><span class="node step" style="--step:2">Block · Owner</span></div>`,
    sources: ["P04 · 교육용 시나리오"],
    note: "실제 회사 데이터나 성과 수치가 아닌 교육용 시나리오입니다. 목표는 정보의 위치가 아니라 의미 있는 연결을 만드는 것입니다."
  },
  {
    id: "slide-05",
    plainTitle: "timeout은 팀마다 다른 사건을 뜻한다",
    section: "01 · 문제와 학습 계약",
    title: "<code>timeout</code>은 팀마다<br><span class=\"amber\">다른 사건</span>을 뜻한다",
    lead: "같은 label만 맞춘다고 같은 개념이 되는 것은 아니다.",
    body: `<div class="grid-3">
      ${card("SIM", "응답 없음", "테스트가 제한 시간 안에 완료되지 않은 관찰 사건", 1)}
      ${card("BUILD", "작업 중단", "CI 작업이 실행 한도를 초과해 종료된 상태", 2)}
      ${card("ENV", "자원 대기", "라이선스·장비·큐 대기가 임계치를 넘은 상황", 3)}
    </div><p class="lead step" style="--step:4;margin-top:26px">해결 순서: <strong>label 통합</strong>이 아니라 <strong class="accent">경계·조건·관계 합의</strong></p>`,
    sources: ["M03 · Ontology 101", "P04 · 교육용 시나리오"],
    note: "동의어와 동음이의어를 구분합니다. 문자열 정규화 전에 개념 경계를 합의해야 합니다."
  },
  {
    id: "slide-06",
    plainTitle: "값은 있어도 판단 기준은 숨어 있다",
    section: "01 · 문제와 학습 계약",
    title: "값은 있어도<br><span class=\"accent\">판단 기준</span>은 숨어 있다",
    lead: "표의 열과 코드값은 저장 형식은 보여 주지만 정의·근거·책임까지 자동으로 말해 주지 않는다.",
    body: `<div class="comparison">
      ${card("VISIBLE", "CSV에 보이는 것", "failure_type=TMO · owner=DV · severity=2", 1)}
      ${card("HIDDEN", "판단에 필요한 것", "TMO의 정의, 분류 근거, owner의 책임 범위, severity 산정 규칙", 2)}
    </div><div class="panel step" style="--step:3;margin-top:22px"><h3>의미 레이어의 질문</h3><p>이 값은 <strong>무엇을 뜻하고</strong>, 무엇과 <strong>어떻게 연결되며</strong>, 어느 근거로 <strong>유효한가</strong>?</p></div>`,
    sources: ["M03 · Ontology 101", "P04 · 교육용 시나리오"],
    note: "데이터베이스 스키마가 나쁘다는 뜻이 아닙니다. 숨은 업무 의미를 공유하고 이식해야 할 때 보완 레이어가 필요하다는 뜻입니다."
  },
  {
    id: "slide-07",
    plainTitle: "AI가 읽을 지식에도 합의된 의미와 근거가 필요하다",
    section: "01 · 문제와 학습 계약",
    title: "AI가 읽을 지식에도<br><span class=\"violet\">합의된 의미와 근거</span>가 필요하다",
    lead: "ontology가 RAG나 Agent의 정확도를 자동 보장하지 않는다. 대신 따라갈 경로와 승인 경계를 설계한다.",
    body: lane([["CONCEPT", "개념 연결", "질문과 데이터의 공통 식별자"], ["EVIDENCE", "근거 추적", "Entity·Activity·Agent provenance"], ["CONFIDENCE", "불확실성 표시", "모델 추정과 검증 결과 구분"], ["HUMAN GATE", "최종 승인", "업무 판단 책임은 사람에게"]], 4),
    sources: ["S09 · PROV-O", "P04 · 교육용 시나리오"],
    note: "인과 효과를 과장하지 않습니다. 실제 향상 여부는 별도 평가셋과 실험으로 검증해야 합니다."
  },
  {
    id: "slide-08",
    plainTitle: "ontology는 공유와 재사용 문제에서 출발했다",
    section: "02 · 방법론의 탄생",
    eyebrow: "WHY METHODOLOGY EMERGED",
    title: "ontology는 <span class=\"accent\">공유와 재사용</span><br>문제에서 출발했다",
    lead: "서로 다른 사람과 시스템이 같은 개념을 같은 방식으로 해석할 수 있는 명세가 필요했다.",
    body: lane([["SYSTEM A", "job_timeout", "CI 실행 한도"], ["SHARED", "ex:TimeoutFailure", "합의된 개념과 관계"], ["SYSTEM B", "TMO", "검증 로그 코드"]], 3),
    sources: ["M01 · Gruber 1993", "M03 · Ontology 101"],
    note: "공유는 모든 사람이 같은 화면을 쓴다는 뜻이 아니라, 표현을 옮겨도 개념적 약속을 유지한다는 뜻입니다."
  },
  {
    id: "slide-09",
    plainTitle: "철학의 ontology가 AI의 공유 명세로 이동했다",
    section: "02 · 방법론의 탄생",
    title: "철학의 ontology가<br>AI의 <span class=\"violet\">공유 명세</span>로 이동했다",
    lead: "같은 단어지만 질문의 층위가 다르다.",
    body: lane([["PHILOSOPHY", "무엇이 존재하는가?", "존재 범주에 관한 탐구"], ["KNOWLEDGE REPRESENTATION", "어떻게 개념화할까?", "계산 가능한 지식 명세"], ["SEMANTIC WEB", "어떻게 웹에서 연결할까?", "IRI·graph·formal semantics"]], 3),
    sources: ["M01 · Gruber 1993"],
    note: "교안에서 ontology는 컴퓨터과학과 지식공학 맥락의 기술 산출물을 뜻합니다. 철학의 정답을 선언하는 작업이 아닙니다."
  },
  {
    id: "slide-10",
    plainTitle: "핵심 질문은 “옮겨도 뜻이 유지되는가?”였다",
    section: "02 · 방법론의 탄생",
    title: "핵심 질문은<br><span class=\"accent\">“옮겨도 뜻이 유지되는가?”</span>였다",
    lead: "portable representation은 파일 이동보다 의미 약속의 이동에 가깝다.",
    body: `<div class="comparison">
      ${card("LOCAL", "시스템 내부 코드", "TMO=17이라는 값은 로컬 문맥 밖에서 뜻을 잃기 쉽다.", 1)}
      ${card("PORTABLE", "공유 식별자와 공리", "동일 IRI, 정의, 관계가 표현 시스템 사이에서 해석 기준을 보존한다.", 2)}
    </div>`,
    sources: ["M01 · Gruber 1993"],
    note: "상호운용성은 단지 문법 변환이 아니라 개념 해석의 호환성을 요구합니다."
  },
  {
    id: "slide-11",
    plainTitle: "방법론은 ontology 구축을 공학 활동으로 바꾸려 나왔다",
    section: "02 · 방법론의 탄생",
    title: "방법론은 ontology 구축을<br><span class=\"violet\">공학 활동</span>으로 바꾸려 나왔다",
    lead: "METHONTOLOGY는 즉흥적인 모델링에 활동·생명주기·기법·산출물을 부여했다.",
    body: `<div class="comparison">
      ${card("ART", "머릿속 모델", "전문가 한 명의 직관, 불명확한 완료 기준, 문서화 지연", 1)}
      ${card("ENGINEERING", "검토 가능한 과정", "명세→개념화→형식화→통합→구현→유지보수", 2)}
    </div>`,
    sources: ["M04 · METHONTOLOGY"],
    note: "‘art에서 engineering으로’는 모델링 창의성을 없앤다는 뜻이 아니라 과정을 반복·검토 가능하게 만든다는 뜻입니다."
  },
  {
    id: "slide-12",
    plainTitle: "모델에는 유일한 정답보다 목적 적합성이 중요하다",
    section: "02 · 방법론의 탄생",
    title: "모델에는 유일한 정답보다<br><span class=\"accent\">목적 적합성</span>이 중요하다",
    lead: "같은 domain도 질문과 예상 변화에 따라 다른 모델이 타당할 수 있다.",
    body: `<div class="grid-3">
      ${card("SEARCH", "검색용", "동의어와 broader 관계를 빠르게 탐색한다.", 1)}
      ${card("VALIDATE", "검증용", "필수 evidence와 값 범위를 계약으로 검사한다.", 2)}
      ${card("INFER", "추론용", "상위 유형과 논리적 관계에서 새로운 결론을 도출한다.", 3)}
    </div>`,
    sources: ["M03 · Ontology 101"],
    note: "모델 품질은 현실 전체를 복제했는지가 아니라 합의한 목적과 질문을 안정적으로 지원하는지로 평가합니다."
  },
  {
    id: "slide-13",
    plainTitle: "ontology는 완성품보다 진화하는 prototype에 가깝다",
    section: "02 · 방법론의 탄생",
    title: "ontology는 완성품보다<br>진화하는 <span class=\"violet\">prototype</span>에 가깝다",
    lead: "작은 버전을 사용해 보고, 질문과 데이터에서 나온 피드백을 다음 버전에 반영한다.",
    body: lane([["v0.1", "작은 범위", "핵심 CQ 2–4개"], ["USE", "실제 연결", "instance·query·shape"], ["EVALUATE", "전 과정 평가", "오답·누락·운영비"], ["v0.2", "수정·문서화", "변경 이유와 영향"]], 4),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY"],
    note: "반복 개발은 계획 부재가 아니라 매 반복마다 평가와 문서화를 수행하는 통제된 진화입니다."
  },
  {
    id: "slide-14",
    plainTitle: "고전 방법론은 서로 다른 빈칸을 채웠다",
    section: "02 · 방법론의 탄생",
    title: "고전 방법론은<br><span class=\"accent\">서로 다른 빈칸</span>을 채웠다",
    lead: "하나를 승자로 고르기보다 각 전통의 강점을 구분해 사용한다.",
    body: `<div class="grid-3">
      ${card("ONTOLOGY 101", "실용적 구축 순서", "범위·재사용·용어·class·property·instance", 1)}
      ${card("GRÜNINGER & FOX", "Competency Question", "동기 시나리오를 요구사항과 평가로 연결", 2)}
      ${card("METHONTOLOGY", "생명주기", "활동·산출물·평가·문서화", 3)}
      ${card("NeOn", "재사용 시나리오", "ontology·비ontology 자원·pattern·network", 4)}
      ${card("OBO FOUNDRY", "운영 원칙", "IRI·정의·관계·버전·책임·변경", 5)}
      ${card("SYNTHESIS", "상호 보완", "질문에서 운영까지 하나의 반복 loop", 6)}
    </div>`,
    sources: ["M03", "M04", "M05", "M06", "M07"],
    note: "비교는 강점 중심의 교육적 요약입니다. 각 방법론의 전체 범위를 순위화하거나 동일한 것으로 취급하지 않습니다."
  },
  {
    id: "slide-15",
    plainTitle: "이 과정은 다섯 전통을 하나의 실무 loop로 묶는다",
    section: "02 · 방법론의 탄생",
    title: "이 과정은 다섯 전통을<br>하나의 <span class=\"violet\">실무 loop</span>로 묶는다",
    lead: "CRAFT는 독립 학술 표준이 아니라 원전의 공통 활동을 기억하기 쉽게 번역한 교육용 통합 프레임이다.",
    body: lane([["C", "Context & CQ", "업무 결정과 질문"], ["R", "Reuse & Requirements", "요구·기존 자원"], ["A", "Architecture & Alignment", "개념·관계·운영 구조"], ["F", "Formalize & Fill", "언어·schema·data·shape"], ["T", "Test & Tend", "검증·release·진화"]], 5),
    sources: ["M03", "M04", "M05", "M06", "M07", "P01"],
    note: "CRAFT라는 이름 자체를 외부 표준처럼 인용하지 않습니다. 각 단계의 근거는 다섯 전통에 추적됩니다."
  },
  {
    id: "slide-16",
    mode: "appendix",
    plainTitle: "먼저 ontology의 경계를 세운다",
    section: "03 · 정의와 구성요소",
    eyebrow: "WHAT ARE WE BUILDING?",
    title: "먼저 ontology의<br><span class=\"accent\">경계</span>를 세운다",
    lead: "지식 구조는 표현력과 운영 비용이 함께 커진다. 목적보다 복잡하게 만들지 않는다.",
    body: lane([["GLOSSARY", "용어·정의", "사람의 공통 언어"], ["TAXONOMY", "상하위 분류", "탐색과 조직"], ["SCHEMA", "필드·구조·제약", "데이터 계약"], ["ONTOLOGY", "개념·관계·공리", "공유 의미와 추론"]], 4),
    sources: ["M01 · Gruber 1993", "M03 · Ontology 101"],
    note: "이 축은 엄격한 성숙도 서열이 아니라 선택을 위한 단순화입니다. glossary나 schema가 정답인 문제도 많습니다."
  },
  {
    id: "slide-17",
    plainTitle: "ontology는 conceptualization의 explicit specification이다",
    section: "03 · 정의와 구성요소",
    title: "ontology는 conceptualization의<br><span class=\"violet\">explicit specification</span>이다",
    lead: "Gruber의 고전적 정의를 실무 언어로 번역하면 ‘업무 세계를 보는 합의된 관점을 명시적으로 적은 것’이다.",
    body: `<div class="comparison">
      ${card("CONCEPTUALIZATION", "머릿속 관점", "어떤 대상과 관계를 중요하게 보는가", 1)}
      ${card("EXPLICIT SPECIFICATION", "공유 가능한 명세", "식별자·정의·관계·공리·주석으로 밖에 드러낸다", 2)}
    </div>`,
    sources: ["M01 · Gruber 1993"],
    note: "짧게 의역했으며 원문의 전체 문맥은 참고 링크에서 확인할 수 있습니다."
  },
  {
    id: "slide-18",
    plainTitle: "shared·explicit·formal은 서로 다른 약속이다",
    section: "03 · 정의와 구성요소",
    title: "shared · explicit · formal은<br><span class=\"accent\">서로 다른 약속</span>이다",
    body: lane([["SHARED", "공동체 합의", "누가 이 의미를 공유하는가"], ["EXPLICIT", "경계의 명시", "정의·예·반례·관계를 적었는가"], ["FORMAL", "기계 해석", "정해진 semantics로 처리 가능한가"]], 3),
    sources: ["M01 · Gruber 1993", "M03 · Ontology 101", "S03 · OWL 2"],
    note: "세 약속은 자동으로 함께 충족되지 않습니다. 형식 문법이 있어도 공동체 합의가 없을 수 있습니다."
  },
  {
    id: "slide-19",
    plainTitle: "class·property·individual·axiom이 의미를 만든다",
    section: "03 · 정의와 구성요소",
    title: "class · property · individual · axiom이<br><span class=\"violet\">의미</span>를 만든다",
    body: `<div class="graph" aria-label="온톨로지 핵심 구성요소"><span class="node core step" style="--step:1">TimeoutFailure<br><small>class</small></span><span class="node step" style="--step:2">hasEvidence<br><small>property</small></span><span class="node step" style="--step:3">failure-1042<br><small>individual</small></span><span class="node step" style="--step:4">min 1 evidence<br><small>constraint</small></span><span class="node step" style="--step:5">definition<br><small>annotation</small></span></div>`,
    sources: ["M03 · Ontology 101", "S03 · OWL 2", "S04 · OWL Primer"],
    note: "제약은 OWL 공리나 SHACL shape 등 목적에 따라 다른 언어로 표현될 수 있습니다."
  },
  {
    id: "slide-20",
    mode: "appendix",
    plainTitle: "문자열이 아니라 개념 식별자를 중심에 둔다",
    section: "03 · 정의와 구성요소",
    title: "문자열이 아니라<br><span class=\"accent\">개념 식별자</span>를 중심에 둔다",
    lead: "label은 사람이 바꾸고 번역할 수 있지만 IRI는 연결을 유지하는 식별 계약이다.",
    body: `<div class="graph" aria-label="여러 라벨이 하나의 개념 IRI에 정렬"><span class="node core step" style="--step:3">ex:TimeoutFailure</span><span class="node step" style="--step:1">timeout</span><span class="node step" style="--step:1">TMO</span><span class="node step" style="--step:2">응답 시간 초과</span><span class="node step" style="--step:2">legacy:17</span></div>`,
    sources: ["M07 · OBO Foundry", "S01 · RDF", "S05 · SKOS"],
    note: "모든 문자열을 하나의 개념으로 합쳐서는 안 됩니다. 실제로 같은 개념인지 정의와 사용 문맥으로 먼저 검토합니다."
  },
  {
    id: "slide-21",
    mode: "appendix",
    plainTitle: "이름보다 목적과 표현력으로 지식 구조를 고른다",
    section: "03 · 정의와 구성요소",
    title: "이름보다 <span class=\"violet\">목적과 표현력</span>으로<br>지식 구조를 고른다",
    body: `<div class="grid-2">
      ${card("LIGHTWEIGHT", "Glossary · Taxonomy", "용어 합의, 탐색, 분류가 목표라면 간결한 구조가 운영하기 쉽다.", 1)}
      ${card("STRUCTURED", "Schema", "필드와 데이터 계약이 중심이면 schema와 validation이 핵심이다.", 2)}
      ${card("SEMANTIC", "Ontology", "관계의 형식 의미, 통합, 추론이 필요할 때 적합하다.", 3)}
      ${card("DECISION", "충분한 최소 수준", "도구 이름이 아니라 CQ·검증·추론 요구로 선택한다.", 4)}
    </div>`,
    sources: ["S05 · SKOS", "S10 · Data on the Web", "P01 · 교육 설계"],
    note: "knowledge graph라는 구현 형태도 다양한 수준의 schema나 ontology를 사용할 수 있습니다."
  },
  {
    id: "slide-22",
    mode: "appendix",
    plainTitle: "ontology schema와 instance data는 함께 지식베이스를 이룬다",
    section: "03 · 정의와 구성요소",
    title: "ontology schema와 instance data는<br>함께 <span class=\"accent\">지식베이스</span>를 이룬다",
    body: `<div class="comparison">
      ${card("TBOX · SCHEMA", "가능한 세계의 규칙", "TestFailure는 Failure의 하위 유형이며 hasEvidence 관계를 가진다.", 1)}
      ${card("ABOX · DATA", "현재 알고 있는 사실", "failure-1042는 TimeoutFailure이며 log-77을 evidence로 가진다.", 2)}
    </div><p class="lead step" style="--step:3;margin-top:25px">schema만 있으면 빈 설계, data만 있으면 해석 규칙 없는 graph가 되기 쉽다.</p>`,
    sources: ["M03 · Ontology 101", "S03 · OWL 2"],
    note: "TBox/ABox는 설명을 위한 관용적 구분입니다. 실무 파일 구조가 반드시 두 파일이어야 하는 것은 아닙니다."
  },
  {
    id: "slide-23",
    mode: "appendix",
    plainTitle: "ontology와 knowledge graph는 역할이 겹치지만 동일어는 아니다",
    section: "03 · 정의와 구성요소",
    title: "ontology와 knowledge graph는<br>역할이 겹치지만 <span class=\"amber\">동일어는 아니다</span>",
    body: lane([["ONTOLOGY", "의미·관계·공리", "graph를 어떻게 해석할지 명세"], ["KNOWLEDGE GRAPH", "식별된 사실의 연결", "schema와 instance를 graph로 운영"], ["THIS COURSE", "layered convention", "ontology가 data graph를 설명·검증"]], 3),
    sources: ["S01 · RDF", "S03 · OWL 2", "P01 · 교육 설계"],
    note: "업계에서 용어 사용은 다양합니다. 이 교안에서는 혼란을 줄이기 위해 명세 레이어와 사실 graph를 구분합니다."
  },
  {
    id: "slide-24",
    mode: "appendix",
    plainTitle: "TimeoutFailure 하나로 정의 전체를 확인한다",
    section: "03 · 정의와 구성요소",
    title: "<code>TimeoutFailure</code> 하나로<br><span class=\"accent\">정의 전체</span>를 확인한다",
    body: `<div class="grid-3">
      ${card("CLASS", "상위 경계", "TimeoutFailure ⊑ TestFailure", 1)}
      ${card("RELATION", "관찰 위치", "observedIn → TestRun", 2)}
      ${card("EVIDENCE", "판단 근거", "hasEvidence 최소 1개를 shape로 검사", 3)}
      ${card("INSTANCE", "실제 사건", "failure-1042 : TimeoutFailure", 4)}
      ${card("ANNOTATION", "사람용 정의", "시간 제한 안에 테스트가 완료되지 않은 관찰", 5)}
      ${card("CQ", "사용 질문", "같은 signature의 과거 failure는?", 6)}
    </div>`,
    sources: ["P02 · failure ontology", "P03 · SHACL shapes"],
    note: "한 예에 class, relation, data, constraint, definition, question을 모두 연결해 개별 요소가 목적 없이 떠다니지 않게 합니다."
  },
  {
    id: "slide-25",
    plainTitle: "표준은 한 덩어리가 아니라 역할 분담이다",
    section: "04 · 표준 스택",
    eyebrow: "REPRESENT · REASON · VALIDATE · QUERY",
    title: "표준은 한 덩어리가 아니라<br><span class=\"violet\">역할 분담</span>이다",
    body: lane([["RDF", "표현", "triple과 graph"], ["RDFS / OWL / SKOS", "의미", "class·relation·axiom·용어망"], ["SHACL", "검증", "data graph 계약"], ["SPARQL", "질의", "graph pattern"], ["TURTLE / JSON-LD", "교환", "같은 graph의 직렬화"]], 5),
    sources: ["S01", "S02", "S03", "S05", "S06", "S07", "S08"],
    note: "각 표준의 질문이 다릅니다. 한 언어로 모든 문제를 해결하려 하지 않습니다."
  },
  {
    id: "slide-26",
    plainTitle: "RDF는 의미를 triple로 쪼갠다",
    section: "04 · 표준 스택",
    title: "RDF는 의미를<br><span class=\"accent\">triple</span>로 쪼갠다",
    lead: "“failure-1042가 log-77을 근거로 가진다”를 subject–predicate–object로 표현한다.",
    body: lane([["SUBJECT", "ex:failure-1042", "설명할 자원 IRI"], ["PREDICATE", "ex:hasEvidence", "관계 IRI"], ["OBJECT", "ex:log-77", "연결할 자원 IRI 또는 literal"]], 3),
    sources: ["S01 · RDF 1.1 Concepts"],
    note: "RDF graph는 triple의 집합입니다. object에는 IRI, blank node 또는 literal이 올 수 있습니다."
  },
  {
    id: "slide-27",
    plainTitle: "triple의 공유 node가 graph를 만든다",
    section: "04 · 표준 스택",
    title: "triple의 공유 node가<br><span class=\"violet\">graph</span>를 만든다",
    lead: "같은 식별자가 여러 사실의 접점이 되면서 join 가능한 지식 구조가 생긴다.",
    body: `<div class="graph" aria-label="세 RDF triple이 공유 노드로 연결"><span class="node core step" style="--step:1">failure-1042</span><span class="node step" style="--step:2">TimeoutFailure</span><span class="node step" style="--step:3">run-88</span><span class="node step" style="--step:4">log-77</span><span class="node step" style="--step:5">component-DMA</span></div>`,
    sources: ["S01 · RDF 1.1 Concepts"],
    note: "연결성은 단순 시각화가 아니라 동일 IRI를 통해 graph pattern을 매칭하는 계산 기반입니다."
  },
  {
    id: "slide-28",
    mode: "appendix",
    plainTitle: "RDFS는 class와 property의 기본 골격을 준다",
    section: "04 · 표준 스택",
    title: "RDFS는 class와 property의<br><span class=\"accent\">기본 골격</span>을 준다",
    body: lane([["ASSERT", "failure-1042 a TimeoutFailure", "명시한 type"], ["SCHEMA", "TimeoutFailure subClassOf TestFailure", "상위 class 관계"], ["ENTAIL", "failure-1042 a TestFailure", "semantics로 따라오는 결론"]], 3),
    sources: ["S02 · RDF Schema 1.1"],
    note: "domain과 range는 단순 입력 검증 규칙이 아니라 RDFS에서 type 추론을 일으킬 수 있으므로 주의해야 합니다."
  },
  {
    id: "slide-29",
    plainTitle: "OWL은 더 풍부한 공리와 형식 의미를 더한다",
    section: "04 · 표준 스택",
    title: "OWL은 더 풍부한 공리와<br><span class=\"violet\">형식 의미</span>를 더한다",
    body: `<div class="grid-3">
      ${card("DISJOINT", "함께 될 수 없음", "PassingRun과 FailedRun을 disjoint class로 선언", 1)}
      ${card("RESTRICTION", "관계 조건", "분류 또는 정의에 필요한 property 조건 표현", 2)}
      ${card("EQUIVALENCE", "같은 의미", "두 class expression의 논리적 동등성 명세", 3)}
    </div><p class="lead step" style="--step:4;margin-top:24px">reasoner는 공리의 형식 의미를 따라 일관성과 암시된 결론을 계산한다.</p>`,
    sources: ["S03 · OWL 2 Overview", "S04 · OWL 2 Primer"],
    note: "OWL은 여러 profile과 표현력 수준을 제공합니다. 더 강한 표현력이 항상 더 좋은 것은 아닙니다."
  },
  {
    id: "slide-30",
    mode: "appendix",
    plainTitle: "taxonomy와 thesaurus에는 SKOS가 더 알맞을 수 있다",
    section: "04 · 표준 스택",
    title: "taxonomy와 thesaurus에는<br><span class=\"accent\">SKOS</span>가 더 알맞을 수 있다",
    body: `<div class="graph" aria-label="SKOS 용어망"><span class="node core step" style="--step:1">Timeout failure<br><small>prefLabel</small></span><span class="node step" style="--step:2">TMO<br><small>altLabel</small></span><span class="node step" style="--step:3">Test failure<br><small>broader</small></span><span class="node step" style="--step:4">Hang<br><small>related</small></span><span class="node step" style="--step:5">legacy:17<br><small>mapping</small></span></div>`,
    sources: ["S05 · SKOS Reference"],
    note: "SKOS broader를 OWL subClassOf와 무조건 동일하게 해석하지 않습니다. 용어 조직과 논리 분류는 목적이 다릅니다."
  },
  {
    id: "slide-31",
    plainTitle: "SHACL은 “입력 graph가 계약을 지켰나?”를 검사한다",
    section: "04 · 표준 스택",
    title: "SHACL은<br><span class=\"amber\">“입력 graph가 계약을 지켰나?”</span>를 검사한다",
    body: lane([["FOCUS NODE", "failure-1042", "검사 대상"], ["SHAPE", "FailureShape", "hasEvidence minCount 1"], ["RESULT", "Violation", "누락 경로와 메시지"], ["FIX", "evidence 추가", "다시 검사해 Conforms"]], 4),
    sources: ["S06 · SHACL", "P03 · 예제 shapes"],
    note: "SHACL validation result는 data graph가 shapes graph 조건을 충족했는지 보고합니다. 도메인 진실 전체를 판정하는 장치가 아닙니다."
  },
  {
    id: "slide-32",
    plainTitle: "SPARQL은 graph pattern으로 질문한다",
    section: "04 · 표준 스택",
    title: "SPARQL은<br><span class=\"accent\">graph pattern</span>으로 질문한다",
    lead: "CQ: ‘같은 signature의 과거 timeout failure와 담당 component는?’",
    body: `<div class="comparison">
      <pre class="panel step" style="--step:1;white-space:pre-wrap;color:var(--muted)"><code>SELECT ?failure ?component
WHERE {
  ?failure a ex:TimeoutFailure ;
           ex:hasSignature ?sig ;
           ex:affects ?component .
  FILTER(?sig = "TMO-DMA-42")
}</code></pre>
      ${card("EXPECTED BINDINGS", "질문의 답 형태", "failure-1021 → DMA · failure-0978 → DMA", 2)}
    </div>`,
    sources: ["S07 · SPARQL 1.1 Query"],
    note: "SELECT 외에도 CONSTRUCT, ASK, DESCRIBE 형식이 있습니다. 이 교안은 CQ의 예상 답 형태를 먼저 정합니다."
  },
  {
    id: "slide-33",
    mode: "appendix",
    plainTitle: "Turtle과 JSON-LD는 같은 graph의 다른 표현이다",
    section: "04 · 표준 스택",
    title: "Turtle과 JSON-LD는<br>같은 graph의 <span class=\"violet\">다른 표현</span>이다",
    body: `<div class="comparison">
      <pre class="panel step" style="--step:1;white-space:pre-wrap;color:var(--muted)"><span class="panel-kicker">TURTLE</span><code>ex:failure-1042
  a ex:TimeoutFailure ;
  ex:hasEvidence ex:log-77 .</code></pre>
      <pre class="panel step" style="--step:2;white-space:pre-wrap;color:var(--muted)"><span class="panel-kicker">JSON-LD</span><code>{ "@id": "ex:failure-1042",
  "@type": "ex:TimeoutFailure",
  "ex:hasEvidence": {"@id":"ex:log-77"} }</code></pre>
    </div>`,
    sources: ["S01 · RDF 1.1", "S08 · JSON-LD 1.1"],
    note: "직렬화 문법이 다르다고 데이터 모델이 다른 것은 아닙니다. JSON-LD context는 짧은 용어를 IRI에 매핑합니다."
  },
  {
    id: "slide-34",
    mode: "appendix",
    plainTitle: "추론은 명시하지 않은 결론을 semantics로 도출한다",
    section: "04 · 표준 스택",
    title: "추론은 명시하지 않은 결론을<br><span class=\"accent\">semantics</span>로 도출한다",
    body: `<div class="comparison">
      ${card("ASSERTED · 실선", "직접 적은 사실", "failure-1042 a TimeoutFailure", 1)}
      ${card("INFERRED · 점선", "공리에서 도출", "TimeoutFailure가 TestFailure의 하위 class이면 failure-1042도 TestFailure", 2)}
    </div><p class="lead step" style="--step:3;margin-top:24px">reasoner는 추측이 아니라 선택한 형식 semantics의 논리적 귀결을 계산한다.</p>`,
    sources: ["S01 · RDF 1.1", "S03 · OWL 2"],
    note: "추론 결과의 유용성은 공리의 품질과 선택한 entailment regime에 달려 있습니다."
  },
  {
    id: "slide-35",
    plainTitle: "검증은 합격 여부를, 추론은 가능한 결론을 묻는다",
    section: "04 · 표준 스택",
    title: "검증은 <span class=\"amber\">합격 여부</span>를,<br>추론은 <span class=\"violet\">가능한 결론</span>을 묻는다",
    body: `<div class="comparison">
      ${card("SHACL VALIDATION", "계약 검사", "입력: data graph + shapes / 출력: conforms와 violation / 누락을 실패로 다룰 수 있음", 1)}
      ${card("OWL REASONING", "논리 귀결", "입력: ontology + assertions / 출력: entailment·classification·consistency / 모름은 거짓이 아님", 2)}
    </div>`,
    sources: ["S03 · OWL 2", "S06 · SHACL"],
    note: "두 도구는 경쟁 관계가 아닙니다. 같은 시스템에서 추론으로 의미를 확장하고 SHACL로 교환 데이터 계약을 검사할 수 있습니다."
  },
  {
    id: "slide-36",
    mode: "appendix",
    plainTitle: "open world에서는 “없다”와 “모른다”가 다르다",
    section: "04 · 표준 스택",
    title: "open world에서는<br><span class=\"amber\">“없다”와 “모른다”</span>가 다르다",
    lead: "graph에 evidence triple이 없다는 사실만으로 현실에 evidence가 없다고 결론 내릴 수 없다.",
    body: `<div class="comparison">
      ${card("OWL / RDF", "정보가 불완전할 수 있음", "hasEvidence가 보이지 않음 → evidence가 없다고 단정하지 않음", 1)}
      ${card("SHACL CONTRACT", "이 입력에서 필수", "hasEvidence minCount 1 → 현재 data graph는 계약 위반", 2)}
    </div>`,
    sources: ["S04 · OWL Primer", "S05 · SKOS", "S06 · SHACL"],
    note: "open-world assumption과 validation의 폐쇄적 데이터 계약을 의도적으로 함께 사용합니다. 서로 다른 질문에 답합니다."
  },
  {
    id: "slide-37",
    plainTitle: "좋은 ontology는 큰 ontology가 아니라 목적에 맞는 ontology다",
    section: "05 · 구성 원리",
    eyebrow: "FIT FOR PURPOSE",
    title: "좋은 ontology는 큰 ontology가 아니라<br><span class=\"accent\">목적에 맞는 ontology</span>다",
    lead: "세계를 다 담으려 하지 말고, 합의한 질문과 검증을 만족하는 최소 경계를 만든다.",
    body: `<div class="panel step" style="--step:1;text-align:center;padding:42px"><p class="quote">필요한 구분은 명확하게, 불필요한 약속은 최소로.</p></div><div class="grid-3" style="margin-top:22px">${card("PURPOSE", "CQ에 답하는가", "사용 결정과 연결", 2)}${card("COHERENCE", "모순 없이 설명되는가", "정의와 공리 검토", 3)}${card("OPERABILITY", "지속해서 돌볼 수 있는가", "owner·version·test", 4)}</div>`,
    sources: ["M02 · Gruber 1995", "M03 · Ontology 101"],
    note: "다음 장부터 이 원칙을 CQ, 범위, 재사용, 식별자, 정의, 모듈, provenance, 공리, governance로 구체화합니다."
  }
]);
