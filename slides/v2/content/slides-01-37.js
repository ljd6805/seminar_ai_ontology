const card = (kicker, heading, text, step = 1) => `
  <article class="editorial-item" data-build="${step}">
    <span class="panel-kicker">${kicker}</span><h3>${heading}</h3><p>${text}</p>
  </article>`;

const lane = (items, columns = items.length) => `<ol class="process-rail" style="--columns:${columns}" aria-label="${items.map(item => item[1]).join("에서 ")}">${items.map((item, index) => `
  <li class="process-step" data-build="${index + 1}"><b>${item[0]}</b><span>${item[1]}</span>${item[2] ? `<small>${item[2]}</small>` : ""}</li>`).join("")}</ol>`;

const sourceLink = id => `<a href="../../docs/references.md#${id.toLowerCase()}" target="_blank" rel="noreferrer">${id}</a>`;

window.OntologyDeck.register([
  {
    id: "slide-01",
    plainTitle: "온톨로지 기반 지식관리 방법론",
    section: "01 · 문제와 학습 계약",
    eyebrow: "FROM TERMS TO TRUSTED KNOWLEDGE",
    visualType: "hero",
    theme: "concept",
    motion: "hybrid",
    ariaSummary: "흩어진 용어와 데이터, 규칙, 근거를 공유 의미로 연결해 검증 가능한 지식으로 만드는 과정의 표지",
    title: "온톨로지 기반<br><span class=\"accent\">지식관리 방법론</span>",
    lead: "의미를 어떻게 코드처럼 설계하고, 테스트하고, 버전 관리할까?",
    body: window.OntologyDeck.visuals.semanticMap(),
    sources: ["P01 · 과정 시놉시스"],
    note: "이 과정은 철학사 강의가 아니라 기술 실무자가 작은 온톨로지를 운영 가능한 산출물로 만드는 방법을 다룹니다."
  },
  {
    id: "slide-02",
    plainTitle: "이 교안이 끝나면 v0.1을 설계할 수 있다",
    section: "01 · 문제와 학습 계약",
    title: "이 교안이 끝나면 <span class=\"accent\">v0.1</span>을 설계할 수 있다",
    lead: "읽기 → 판단 → 설계 → 구현 → 검증 → 운영으로 이어지는 자기주도 학습 경로",
    body: lane([["01", "진단", "의미 충돌을 구분"], ["02", "정의", "지식 구조의 역할"], ["03", "선택", "표준의 질문"], ["04", "요구", "CQ 작성"], ["05", "구현", "최소 모델"], ["06", "검증", "질의·계약"], ["07", "운영", "버전·책임"]], 7),
    sources: ["P01 · 과정 시놉시스"],
    note: "순서대로 읽어도 되고 오버뷰에서 필요한 장으로 이동해도 됩니다. R 키는 현재 화면 애니메이션을 다시 재생합니다."
  },
  {
    id: "slide-03",
    plainTitle: "의미도 버전과 테스트, 책임자가 있어야 오래 간다",
    section: "01 · 문제와 학습 계약",
    title: "의미도 <span class=\"accent\">버전과 테스트, 책임자</span>가<br>있어야 오래 간다",
    lead: "온톨로지는 보기 좋은 분류도가 아니라 계속 변경하고 검증하는 공학 산출물이다.",
    body: lane([["정의", "식별자와 경계", "무엇을 뜻하는가"], ["버전", "변경 이력", "언제 왜 바뀌었나"], ["테스트", "CQ와 검증 규칙", "필요한 답과 계약을 지키나"], ["책임", "승인과 관리", "누가 결정하고 돌보나"]], 4),
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry"],
    note: "모델 파일만 만들고 끝내면 용어집과 다르지 않습니다. 운영 책임까지 모델의 일부로 봅니다."
  },
  {
    id: "slide-04",
    plainTitle: "하나의 실패 기록이 다섯 시스템에 흩어져 있다",
    section: "01 · 문제와 학습 계약",
    title: "하나의 실패 기록이<br><span class=\"violet\">다섯 시스템</span>에 흩어져 있다",
    lead: "교육용 실패 지식 허브의 목표는 자동 수정이 아니라 판단 근거를 연결하는 것이다.",
    body: window.OntologyDeck.visuals.systemHub(),
    sources: ["P04 · 교육용 시나리오"],
    note: "실제 회사 데이터나 성과 수치가 아닌 교육용 시나리오입니다. 목표는 정보의 위치가 아니라 의미 있는 연결을 만드는 것입니다."
  },
  {
    id: "slide-05",
    plainTitle: "같은 ‘타임아웃’도 팀마다 뜻이 다르다",
    section: "01 · 문제와 학습 계약",
    title: "같은 <code>timeout</code>도 팀마다<br><span class=\"amber\">뜻이 다르다</span>",
    lead: "라벨을 통일하는 것만으로는 개념이 같아지지 않는다.",
    body: `<div class="grid-3">
      ${card("시뮬레이션", "응답 없음", "테스트가 제한 시간 안에 완료되지 않은 관찰 사건", 1)}
      ${card("빌드", "작업 중단", "CI 작업이 실행 한도를 초과해 종료된 상태", 2)}
      ${card("환경", "자원 대기", "라이선스·장비·큐 대기가 임계치를 넘은 상황", 3)}
    </div><p class="lead step" style="--step:4;margin-top:26px">해결 순서: <strong>표기 통합</strong>이 아니라 <strong class="accent">경계·조건·관계 합의</strong></p>`,
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
      ${card("데이터에 보임", "CSV에 저장된 값", "failure_type=TMO · owner=DV · severity=2", 1)}
      ${card("판단에 필요", "값 밖의 의미", "TMO의 정의, 분류 근거, 책임자의 담당 범위, 심각도 산정 규칙", 2)}
    </div><div class="conclusion-strip" data-build="3"><span>의미 레이어가 답해야 할 질문</span><strong>이 값은 무엇을 뜻하고, 무엇과 어떻게 연결되며, 어떤 근거로 유효한가?</strong></div>`,
    sources: ["M03 · Ontology 101", "P04 · 교육용 시나리오"],
    note: "데이터베이스 스키마가 나쁘다는 뜻이 아닙니다. 숨은 업무 의미를 공유하고 이식해야 할 때 보완 레이어가 필요하다는 뜻입니다."
  },
  {
    id: "slide-07",
    plainTitle: "AI가 활용할 지식에도 합의된 의미와 근거가 필요하다",
    section: "01 · 문제와 학습 계약",
    title: "AI가 활용할 지식에도<br><span class=\"violet\">합의된 의미와 근거</span>가 필요하다",
    lead: "온톨로지가 RAG나 에이전트의 정확도를 자동으로 보장하지는 않는다. 대신 근거 경로와 승인 경계를 명확히 한다.",
    body: lane([["개념", "질문과 데이터 연결", "공통 식별자로 만난다"], ["근거", "출처와 이력 추적", "개체·활동·행위자를 남긴다"], ["신뢰도", "불확실성 표시", "모델 추정과 검증 결과를 구분한다"], ["사람 승인", "최종 판단", "업무 책임은 사람에게 둔다"]], 4),
    sources: ["S09 · PROV-O", "P04 · 교육용 시나리오"],
    note: "인과 효과를 과장하지 않습니다. 실제 향상 여부는 별도 평가셋과 실험으로 검증해야 합니다."
  },
  {
    id: "slide-08",
    plainTitle: "온톨로지는 의미를 공유하고 재사용하려는 필요에서 출발했다",
    section: "02 · 방법론의 탄생",
    eyebrow: "WHY METHODOLOGY EMERGED",
    title: "온톨로지는 의미를 <span class=\"accent\">공유하고 재사용</span>하려는<br>필요에서 출발했다",
    lead: "서로 다른 사람과 시스템이 같은 개념을 같은 방식으로 해석할 수 있는 명세가 필요했다.",
    body: lane([["시스템 A", "job_timeout", "CI 실행 한도"], ["공유 개념", "ex:TimeoutFailure", "합의된 정의와 관계"], ["시스템 B", "TMO", "검증 로그 코드"]], 3),
    sources: ["M01 · Gruber 1993", "M03 · Ontology 101"],
    note: "공유는 모든 사람이 같은 화면을 쓴다는 뜻이 아니라, 표현을 옮겨도 개념적 약속을 유지한다는 뜻입니다."
  },
  {
    id: "slide-09",
    plainTitle: "철학의 존재론은 AI에서 ‘공유 가능한 명세’가 되었다",
    section: "02 · 방법론의 탄생",
    title: "철학의 존재론은 AI에서<br><span class=\"violet\">공유 가능한 명세</span>가 되었다",
    lead: "같은 단어지만 질문의 층위가 다르다.",
    body: lane([["철학", "무엇이 존재하는가?", "존재 범주에 관한 탐구"], ["지식 표현", "어떻게 개념화할까?", "계산 가능한 지식 명세"], ["시맨틱 웹", "웹에서 어떻게 연결할까?", "IRI·그래프·형식 의미"]], 3),
    sources: ["M01 · Gruber 1993"],
    note: "교안에서 ontology는 컴퓨터과학과 지식공학 맥락의 기술 산출물을 뜻합니다. 철학의 정답을 선언하는 작업이 아닙니다."
  },
  {
    id: "slide-10",
    plainTitle: "핵심 질문은 “옮겨도 뜻이 유지되는가?”였다",
    section: "02 · 방법론의 탄생",
    title: "핵심 질문은<br><span class=\"accent\">“옮겨도 뜻이 유지되는가?”</span>였다",
    lead: "표현 형식을 바꾸어도 개념과 관계에 대한 약속은 유지되어야 한다.",
    body: `<div class="comparison">
      ${card("로컬 표현", "시스템 내부 코드", "TMO=17이라는 값은 로컬 문맥 밖에서 뜻을 잃기 쉽다.", 1)}
      ${card("이식 가능한 의미", "공유 식별자와 공리", "같은 IRI와 정의, 관계가 시스템 사이에서 해석 기준을 보존한다.", 2)}
    </div>`,
    sources: ["M01 · Gruber 1993"],
    note: "상호운용성은 단지 문법 변환이 아니라 개념 해석의 호환성을 요구합니다."
  },
  {
    id: "slide-11",
    plainTitle: "방법론은 온톨로지 구축을 반복 가능한 공학 과정으로 만들었다",
    section: "02 · 방법론의 탄생",
    title: "방법론은 온톨로지 구축을<br><span class=\"violet\">반복 가능한 공학 과정</span>으로 만들었다",
    lead: "METHONTOLOGY는 즉흥적이던 모델링을 활동·생명주기·기법·산출물이 있는 과정으로 정리했다.",
    body: `<div class="comparison">
      ${card("직관 중심", "머릿속 모델", "전문가 한 명의 직관, 불명확한 완료 기준, 뒤늦은 문서화", 1)}
      ${card("공학적 과정", "검토 가능한 작업", "명세 → 개념화 → 형식화 → 통합 → 구현 → 유지보수", 2)}
    </div>`,
    sources: ["M04 · METHONTOLOGY"],
    note: "‘art에서 engineering으로’는 모델링 창의성을 없앤다는 뜻이 아니라 과정을 반복·검토 가능하게 만든다는 뜻입니다."
  },
  {
    id: "slide-12",
    plainTitle: "모델은 유일한 정답보다 목적에 맞는지가 중요하다",
    section: "02 · 방법론의 탄생",
    title: "모델은 유일한 정답보다<br><span class=\"accent\">목적에 맞는지</span>가 중요하다",
    lead: "같은 업무 영역이라도 답해야 할 질문과 예상 변화에 따라 적합한 모델은 달라질 수 있다.",
    body: `<div class="grid-3">
      ${card("검색", "빠르게 찾는 모델", "동의어와 상하위 관계를 따라 필요한 용어를 탐색한다.", 1)}
      ${card("검증", "계약을 확인하는 모델", "필수 근거와 값 범위를 검사한다.", 2)}
      ${card("추론", "결론을 확장하는 모델", "상위 유형과 논리 관계에서 암시된 결론을 도출한다.", 3)}
    </div>`,
    sources: ["M03 · Ontology 101"],
    note: "모델 품질은 현실 전체를 복제했는지가 아니라 합의한 목적과 질문을 안정적으로 지원하는지로 평가합니다."
  },
  {
    id: "slide-13",
    plainTitle: "온톨로지는 한 번에 완성하기보다 작은 버전으로 진화시킨다",
    section: "02 · 방법론의 탄생",
    title: "온톨로지는 한 번에 완성하기보다<br><span class=\"violet\">작은 버전으로 진화</span>시킨다",
    lead: "작은 버전을 사용해 보고, 질문과 데이터에서 나온 피드백을 다음 버전에 반영한다.",
    body: lane([["v0.1", "작은 범위", "핵심 CQ 2–4개"], ["사용", "실제 데이터 연결", "예제·질의·검증 규칙"], ["평가", "전 과정 확인", "오답·누락·운영 비용"], ["v0.2", "수정과 문서화", "변경 이유와 영향"]], 4),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY"],
    note: "반복 개발은 계획 부재가 아니라 매 반복마다 평가와 문서화를 수행하는 통제된 진화입니다."
  },
  {
    id: "slide-14",
    plainTitle: "주요 방법론은 서로 다른 과제를 보완한다",
    section: "02 · 방법론의 탄생",
    visualType: "matrix",
    theme: "governance",
    motion: "hybrid",
    ariaSummary: "다섯 온톨로지 방법론의 주된 강점을 범위, 역량 질문, 모델링, 운영, 평가 관점으로 비교한 행렬",
    title: "주요 방법론은<br><span class=\"accent\">서로 다른 과제</span>를 보완한다",
    lead: "하나를 승자로 고르기보다 각 전통의 강점을 구분해 사용한다.",
    body: window.OntologyDeck.visuals.methodMatrix(),
    sources: ["M03", "M04", "M05", "M06", "M07"],
    note: "비교는 강점 중심의 교육적 요약입니다. 각 방법론의 전체 범위를 순위화하거나 동일한 것으로 취급하지 않습니다."
  },
  {
    id: "slide-15",
    plainTitle: "다섯 방법론의 강점을 하나의 실무 순환으로 묶는다",
    section: "02 · 방법론의 탄생",
    title: "다섯 방법론의 강점을<br>하나의 <span class=\"violet\">실무 순환</span>으로 묶는다",
    lead: "CRAFT는 독립 학술 표준이 아니라 원전의 공통 활동을 기억하기 쉽게 번역한 교육용 통합 프레임이다.",
    body: window.OntologyDeck.visuals.sourceRibbonCraft(),
    sources: ["M03", "M04", "M05", "M06", "M07", "P01"],
    note: "CRAFT라는 이름 자체를 외부 표준처럼 인용하지 않습니다. 각 단계의 근거는 다섯 전통에 추적됩니다."
  },
  {
    id: "slide-16",
    mode: "appendix",
    plainTitle: "무엇을 만들지보다 어디까지 만들지를 먼저 정한다",
    section: "03 · 정의와 구성요소",
    eyebrow: "WHAT ARE WE BUILDING?",
    title: "무엇을 만들지보다<br><span class=\"accent\">어디까지 만들지</span>를 먼저 정한다",
    lead: "지식 구조는 표현력과 운영 비용이 함께 커진다. 목적보다 복잡하게 만들지 않는다.",
    body: lane([["GLOSSARY", "용어·정의", "사람의 공통 언어"], ["TAXONOMY", "상하위 분류", "탐색과 조직"], ["SCHEMA", "필드·구조·제약", "데이터 계약"], ["ONTOLOGY", "개념·관계·공리", "공유 의미와 추론"]], 4),
    sources: ["M01 · Gruber 1993", "M03 · Ontology 101"],
    note: "이 축은 엄격한 성숙도 서열이 아니라 선택을 위한 단순화입니다. glossary나 schema가 정답인 문제도 많습니다."
  },
  {
    id: "slide-17",
    plainTitle: "온톨로지는 합의한 개념 체계를 명시한 것이다",
    section: "03 · 정의와 구성요소",
    title: "온톨로지는 합의한 개념 체계를<br><span class=\"violet\">명시적으로 적은 것</span>이다",
    lead: "Gruber의 고전적 정의를 실무 언어로 번역하면 ‘업무 세계를 보는 합의된 관점을 명시적으로 적은 것’이다.",
    body: `<div class="comparison">
      ${card("개념화", "머릿속 관점", "어떤 대상과 관계를 중요하게 보는가", 1)}
      ${card("명시적 명세", "공유 가능한 표현", "식별자·정의·관계·공리·주석으로 밖에 드러낸다", 2)}
    </div>`,
    sources: ["M01 · Gruber 1993"],
    note: "짧게 의역했으며 원문의 전체 문맥은 참고 링크에서 확인할 수 있습니다."
  },
  {
    id: "slide-18",
    plainTitle: "공유·명시·형식화는 서로 다른 약속이다",
    section: "03 · 정의와 구성요소",
    title: "공유 · 명시 · 형식화는<br><span class=\"accent\">서로 다른 약속</span>이다",
    body: lane([["공유", "공동체의 합의", "누가 이 의미를 함께 쓰는가"], ["명시", "경계를 드러냄", "정의·예·반례·관계를 적었는가"], ["형식화", "기계가 해석", "정해진 형식 의미로 처리할 수 있는가"]], 3),
    sources: ["M01 · Gruber 1993", "M03 · Ontology 101", "S03 · OWL 2"],
    note: "세 약속은 자동으로 함께 충족되지 않습니다. 형식 문법이 있어도 공동체 합의가 없을 수 있습니다."
  },
  {
    id: "slide-19",
    plainTitle: "클래스·속성·개체·공리가 의미를 구성한다",
    section: "03 · 정의와 구성요소",
    title: "클래스 · 속성 · 개체 · 공리가<br><span class=\"violet\">의미</span>를 구성한다",
    body: window.OntologyDeck.visuals.ontologyElements(),
    sources: ["M03 · Ontology 101", "S03 · OWL 2", "S04 · OWL Primer"],
    note: "제약은 OWL 공리나 SHACL shape 등 목적에 따라 다른 언어로 표현될 수 있습니다."
  },
  {
    id: "slide-20",
    mode: "appendix",
    plainTitle: "문자열이 아니라 개념 식별자를 중심에 둔다",
    section: "03 · 정의와 구성요소",
    title: "문자열이 아니라<br><span class=\"accent\">개념 식별자</span>를 중심에 둔다",
    lead: "라벨은 바꾸거나 번역할 수 있지만 IRI는 연결을 유지하는 식별 계약이다.",
    body: window.OntologyDeck.visuals.labelConvergence(),
    sources: ["M07 · OBO Foundry", "S01 · RDF", "S05 · SKOS"],
    note: "모든 문자열을 하나의 개념으로 합쳐서는 안 됩니다. 실제로 같은 개념인지 정의와 사용 문맥으로 먼저 검토합니다."
  },
  {
    id: "slide-21",
    mode: "appendix",
    plainTitle: "지식 구조는 이름이 아니라 목적과 표현력으로 고른다",
    section: "03 · 정의와 구성요소",
    title: "지식 구조는 이름이 아니라<br><span class=\"violet\">목적과 표현력</span>으로 고른다",
    body: window.OntologyDeck.visuals.expressiveCostMap(),
    sources: ["S05 · SKOS", "S10 · Data on the Web", "P01 · 교육 설계"],
    note: "knowledge graph라는 구현 형태도 다양한 수준의 schema나 ontology를 사용할 수 있습니다."
  },
  {
    id: "slide-22",
    mode: "appendix",
    plainTitle: "온톨로지 명세와 실제 데이터가 함께 지식베이스를 이룬다",
    section: "03 · 정의와 구성요소",
    title: "온톨로지 명세와 실제 데이터가<br>함께 <span class=\"accent\">지식베이스</span>를 이룬다",
    body: `<div class="comparison">
      ${card("TBOX · SCHEMA", "가능한 세계의 규칙", "TestFailure는 Failure의 하위 유형이며 hasEvidence 관계를 가진다.", 1)}
      ${card("ABOX · DATA", "현재 알고 있는 사실", "failure-1042는 TimeoutFailure이며 log-77을 근거로 가진다.", 2)}
    </div><p class="lead step" style="--step:3;margin-top:25px">명세만 있으면 빈 설계가 되고, 실제 데이터만 있으면 해석 규칙 없는 그래프가 되기 쉽다.</p>`,
    sources: ["M03 · Ontology 101", "S03 · OWL 2"],
    note: "TBox/ABox는 설명을 위한 관용적 구분입니다. 실무 파일 구조가 반드시 두 파일이어야 하는 것은 아닙니다."
  },
  {
    id: "slide-23",
    mode: "appendix",
    plainTitle: "온톨로지와 지식 그래프는 역할이 겹치지만 같은 개념은 아니다",
    section: "03 · 정의와 구성요소",
    title: "온톨로지와 지식 그래프는<br>역할이 겹치지만 <span class=\"amber\">같은 개념은 아니다</span>",
    body: window.OntologyDeck.visuals.ontologyOverGraph(),
    sources: ["S01 · RDF", "S03 · OWL 2", "P01 · 교육 설계"],
    note: "업계에서 용어 사용은 다양합니다. 이 교안에서는 혼란을 줄이기 위해 명세 레이어와 사실 graph를 구분합니다."
  },
  {
    id: "slide-24",
    mode: "appendix",
    plainTitle: "TimeoutFailure 예제로 핵심 구성요소를 한 번에 확인한다",
    section: "03 · 정의와 구성요소",
    title: "<code>TimeoutFailure</code> 예제로<br><span class=\"accent\">핵심 구성요소</span>를 한 번에 확인한다",
    body: window.OntologyDeck.visuals.timeoutAssembly(),
    sources: ["P02 · failure ontology", "P03 · SHACL shapes"],
    note: "한 예에 class, relation, data, constraint, definition, question을 모두 연결해 개별 요소가 목적 없이 떠다니지 않게 합니다."
  },
  {
    id: "slide-25",
    plainTitle: "표준은 한 덩어리가 아니라 역할 분담이다",
    section: "04 · 표준 스택",
    eyebrow: "REPRESENT · REASON · VALIDATE · QUERY",
    title: "표준은 한 덩어리가 아니라<br><span class=\"violet\">역할 분담</span>이다",
    body: window.OntologyDeck.visuals.standardStack(),
    sources: ["S01", "S02", "S03", "S05", "S06", "S07", "S08"],
    note: "각 표준의 질문이 다릅니다. 한 언어로 모든 문제를 해결하려 하지 않습니다."
  },
  {
    id: "slide-26",
    plainTitle: "RDF는 의미를 트리플로 나눈다",
    section: "04 · 표준 스택",
    title: "RDF는 의미를<br><span class=\"accent\">트리플</span>로 나눈다",
    lead: "“failure-1042가 log-77을 근거로 가진다”를 주어–술어–목적어 구조로 표현한다.",
    body: lane([["SUBJECT", "ex:failure-1042", "설명할 자원 IRI"], ["PREDICATE", "ex:hasEvidence", "관계 IRI"], ["OBJECT", "ex:log-77", "연결할 자원 IRI 또는 값"]], 3),
    sources: ["S01 · RDF 1.1 Concepts"],
    note: "RDF graph는 triple의 집합입니다. object에는 IRI, blank node 또는 literal이 올 수 있습니다."
  },
  {
    id: "slide-27",
    plainTitle: "공유 식별자가 트리플을 그래프로 연결한다",
    section: "04 · 표준 스택",
    visualType: "architecture",
    theme: "concept",
    motion: "hybrid",
    ariaSummary: "하나의 실패 IRI가 유형, 테스트 실행, 로그 근거, 영향받은 구성요소를 방향과 관계 이름이 있는 RDF 그래프로 연결하는 예시",
    title: "공유 식별자가 트리플을<br><span class=\"violet\">그래프로 연결</span>한다",
    lead: "같은 식별자가 여러 사실의 접점이 되면서 질의로 연결할 수 있는 지식 구조가 생긴다.",
    body: window.OntologyDeck.visuals.identityGraph(),
    sources: ["S01 · RDF 1.1 Concepts"],
    note: "연결성은 단순 시각화가 아니라 동일 IRI를 통해 graph pattern을 매칭하는 계산 기반입니다."
  },
  {
    id: "slide-28",
    mode: "appendix",
    plainTitle: "RDFS는 클래스와 속성의 기본 골격을 제공한다",
    section: "04 · 표준 스택",
    title: "RDFS는 클래스와 속성의<br><span class=\"accent\">기본 골격</span>을 제공한다",
    body: lane([["명시", "failure-1042 a TimeoutFailure", "직접 적은 유형"], ["스키마", "TimeoutFailure subClassOf TestFailure", "상위 클래스 관계"], ["귀결", "failure-1042 a TestFailure", "형식 의미에서 따라오는 결론"]], 3),
    sources: ["S02 · RDF Schema 1.1"],
    note: "domain과 range는 단순 입력 검증 규칙이 아니라 RDFS에서 type 추론을 일으킬 수 있으므로 주의해야 합니다."
  },
  {
    id: "slide-29",
    plainTitle: "OWL은 더 풍부한 공리와 형식 의미를 더한다",
    section: "04 · 표준 스택",
    title: "OWL은 더 풍부한 공리와<br><span class=\"violet\">형식 의미</span>를 더한다",
    body: `<div class="grid-3">
      ${card("DISJOINT", "함께 될 수 없음", "PassingRun과 FailedRun을 상호 배타적 클래스로 선언", 1)}
      ${card("RESTRICTION", "관계 조건", "분류나 정의에 필요한 속성 조건을 표현", 2)}
      ${card("EQUIVALENCE", "같은 의미", "두 클래스 표현의 논리적 동등성을 명세", 3)}
    </div><p class="lead step" style="--step:4;margin-top:24px">추론기는 공리의 형식 의미를 따라 일관성과 암시된 결론을 계산한다.</p>`,
    sources: ["S03 · OWL 2 Overview", "S04 · OWL 2 Primer"],
    note: "OWL은 여러 profile과 표현력 수준을 제공합니다. 더 강한 표현력이 항상 더 좋은 것은 아닙니다."
  },
  {
    id: "slide-30",
    mode: "appendix",
    plainTitle: "분류체계와 시소러스에는 SKOS가 더 알맞을 수 있다",
    section: "04 · 표준 스택",
    title: "분류체계와 시소러스에는<br><span class=\"accent\">SKOS</span>가 더 알맞을 수 있다",
    body: window.OntologyDeck.visuals.skosNetwork(),
    sources: ["S05 · SKOS Reference"],
    note: "SKOS broader를 OWL subClassOf와 무조건 동일하게 해석하지 않습니다. 용어 조직과 논리 분류는 목적이 다릅니다."
  },
  {
    id: "slide-31",
    plainTitle: "SHACL은 입력 그래프가 데이터 계약을 지켰는지 검사한다",
    section: "04 · 표준 스택",
    title: "SHACL은 입력 그래프가<br><span class=\"amber\">데이터 계약을 지켰는지</span> 검사한다",
    body: lane([["검사 대상", "failure-1042", "focus node"], ["데이터 계약", "FailureShape", "hasEvidence minCount 1"], ["검증 결과", "Violation", "누락 경로와 메시지"], ["수정", "evidence 추가", "다시 검사해 Conforms"]], 4),
    sources: ["S06 · SHACL", "P03 · 예제 shapes"],
    note: "SHACL validation result는 data graph가 shapes graph 조건을 충족했는지 보고합니다. 도메인 진실 전체를 판정하는 장치가 아닙니다."
  },
  {
    id: "slide-32",
    plainTitle: "SPARQL은 그래프 패턴으로 질문한다",
    section: "04 · 표준 스택",
    visualType: "code",
    theme: "evidence",
    motion: "hybrid",
    ariaSummary: "역량 질문의 명사와 관계가 SPARQL 그래프 패턴으로 바뀌고 두 개의 결과 행으로 반환되는 코드 워크스루",
    title: "SPARQL은<br><span class=\"accent\">그래프 패턴</span>으로 질문한다",
    lead: "CQ: ‘같은 시그니처의 과거 타임아웃 실패와 담당 구성요소는?’",
    body: window.OntologyDeck.visuals.queryWalkthrough(),
    sources: ["S07 · SPARQL 1.1 Query"],
    note: "SELECT 외에도 CONSTRUCT, ASK, DESCRIBE 형식이 있습니다. 이 교안은 CQ의 예상 답 형태를 먼저 정합니다."
  },
  {
    id: "slide-33",
    mode: "appendix",
    plainTitle: "Turtle과 JSON-LD는 같은 그래프를 다르게 적는 방식이다",
    section: "04 · 표준 스택",
    title: "Turtle과 JSON-LD는 같은 그래프를<br><span class=\"violet\">다르게 적는 방식</span>이다",
    body: window.OntologyDeck.visuals.serializationCompare(),
    sources: ["S01 · RDF 1.1", "S08 · JSON-LD 1.1"],
    note: "직렬화 문법이 다르다고 데이터 모델이 다른 것은 아닙니다. JSON-LD context는 짧은 용어를 IRI에 매핑합니다."
  },
  {
    id: "slide-34",
    mode: "appendix",
    plainTitle: "추론은 명시하지 않은 결론을 형식 의미에서 도출한다",
    section: "04 · 표준 스택",
    title: "추론은 명시하지 않은 결론을<br><span class=\"accent\">형식 의미</span>에서 도출한다",
    body: `<div class="comparison">
      ${card("ASSERTED · 실선", "직접 적은 사실", "failure-1042 a TimeoutFailure", 1)}
      ${card("INFERRED · 점선", "공리에서 도출", "TimeoutFailure가 TestFailure의 하위 class이면 failure-1042도 TestFailure", 2)}
    </div><p class="lead step" style="--step:3;margin-top:24px">추론기는 추측하는 도구가 아니라 선택한 형식 의미의 논리적 귀결을 계산한다.</p>`,
    sources: ["S01 · RDF 1.1", "S03 · OWL 2"],
    note: "추론 결과의 유용성은 공리의 품질과 선택한 entailment regime에 달려 있습니다."
  },
  {
    id: "slide-35",
    plainTitle: "검증은 합격 여부를, 추론은 가능한 결론을 묻는다",
    section: "04 · 표준 스택",
    title: "검증은 <span class=\"amber\">합격 여부</span>를,<br>추론은 <span class=\"violet\">가능한 결론</span>을 묻는다",
    body: `<div class="comparison">
      ${card("SHACL VALIDATION", "계약 검사", "입력: 데이터 그래프 + 검증 규칙 / 출력: 적합 여부와 위반 내역 / 누락을 실패로 다룰 수 있음", 1)}
      ${card("OWL REASONING", "논리 귀결", "입력: 온톨로지 + 명시 사실 / 출력: 논리 귀결·분류·일관성 / 모름은 거짓이 아님", 2)}
    </div>`,
    sources: ["S03 · OWL 2", "S06 · SHACL"],
    note: "두 도구는 경쟁 관계가 아닙니다. 같은 시스템에서 추론으로 의미를 확장하고 SHACL로 교환 데이터 계약을 검사할 수 있습니다."
  },
  {
    id: "slide-36",
    mode: "appendix",
    plainTitle: "열린 세계에서는 “없다”와 “모른다”가 다르다",
    section: "04 · 표준 스택",
    title: "열린 세계에서는<br><span class=\"amber\">“없다”와 “모른다”</span>가 다르다",
    lead: "그래프에 근거 트리플이 없다는 이유만으로 현실에도 근거가 없다고 결론 내릴 수는 없다.",
    body: `<div class="comparison">
      ${card("OWL / RDF", "정보가 불완전할 수 있음", "hasEvidence가 보이지 않음 → 근거가 없다고 단정하지 않음", 1)}
      ${card("SHACL CONTRACT", "이 입력에서 필수", "hasEvidence 최소 1개 → 현재 데이터 그래프는 계약 위반", 2)}
    </div>`,
    sources: ["S04 · OWL Primer", "S05 · SKOS", "S06 · SHACL"],
    note: "open-world assumption과 validation의 폐쇄적 데이터 계약을 의도적으로 함께 사용합니다. 서로 다른 질문에 답합니다."
  },
  {
    id: "slide-37",
    plainTitle: "좋은 온톨로지는 크기가 아니라 목적 적합성으로 판단한다",
    section: "05 · 구성 원리",
    eyebrow: "FIT FOR PURPOSE",
    title: "좋은 온톨로지는 크기가 아니라<br><span class=\"accent\">목적 적합성</span>으로 판단한다",
    lead: "세계를 다 담으려 하지 말고, 합의한 질문과 검증을 만족하는 최소 경계를 만든다.",
    body: window.OntologyDeck.visuals.fitPurpose(),
    sources: ["M02 · Gruber 1995", "M03 · Ontology 101"],
    note: "다음 장부터 이 원칙을 CQ, 범위, 재사용, 식별자, 정의, 모듈, provenance, 공리, governance로 구체화합니다."
  }
]);
