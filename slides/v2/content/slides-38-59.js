window.OntologyDeck.register([
  {
    id: "slide-38",
    plainTitle: "역량 질문(CQ)이 요구사항과 테스트를 연결한다",
    section: "05 · 구성 원리",
    title: "역량 질문(CQ)이<br><span class=\"accent\">요구사항과 테스트</span>를 연결한다",
    lead: "CQ는 온톨로지가 답해야 할 업무 질문이며, 모델의 경계와 완료 기준을 동시에 만든다.",
    body: lane([["주체", "무엇을 묻는가", "실패·실행·구성요소"], ["관계", "어떻게 연결되는가", "관련·영향·근거"], ["조건", "어떤 범위인가", "기간·상태·시그니처"], ["기대 답", "무엇이 반환되는가", "행·참/거짓·그래프·검증 결과"]], 4),
    sources: ["M05 · Grüninger & Fox", "M03 · Ontology 101"],
    note: "좋은 CQ는 특정 구현 문법에 종속되지 않으면서도 기대 답의 형태를 검증할 수 있을 만큼 구체적입니다."
  },
  {
    id: "slide-39",
    plainTitle: "v0.1은 무엇을 넣을지보다 무엇을 뺄지가 중요하다",
    section: "05 · 구성 원리",
    title: "v0.1은 무엇을 넣을지보다<br><span class=\"amber\">무엇을 뺄지</span>가 중요하다",
    lead: "작은 업무 경계 밖의 질문을 명시하면 모델이 우주 전체로 팽창하는 것을 막는다.",
    body: `<div class="comparison">
      ${card("IN · v0.1", "포함", "실패 시그니처, 테스트 실행, 근거, 관련 이슈, 구성요소 책임자", 1)}
      ${card("OUT · LATER", "제외", "근본 원인 자동 확정, 수정 코드 추천, 조직 성과 평가, 모든 로그 유형", 2)}
    </div><p class="lead step" style="--step:3;margin-top:24px">제외는 포기가 아니라 <strong class="accent">다음 버전의 작업 목록</strong>이다.</p>`,
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY", "M07 · OBO Foundry"],
    note: "범위는 도메인 명사 목록보다 CQ와 사용 결정을 기준으로 자릅니다."
  },
  {
    id: "slide-40",
    plainTitle: "새로 만들기 전에 기존 어휘를 평가한다",
    section: "05 · 구성 원리",
    title: "새로 만들기 전에<br>기존 <span class=\"violet\">어휘</span>를 평가한다",
    lead: "재사용은 무조건 선이 아니라 적합성·지속성·권리·변경 위험을 비교하는 결정이다.",
    body: lane([["발견", "후보를 찾는다", "표준·온톨로지·분류체계·스키마"], ["평가", "다섯 기준을 본다", "권위·범위·라이선스·안정성·적합성"], ["결정", "연결 방식을 고른다", "채택·매핑·확장·제외"], ["기록", "근거를 남긴다", "버전·결정자·영향"]], 4),
    sources: ["M03 · Ontology 101", "M06 · NeOn", "S10 · Data on the Web"],
    note: "외부 vocabulary의 용어 몇 개를 복사하는 것은 재사용이 아닙니다. 출처와 버전, 매핑 관계를 추적해야 합니다."
  },
  {
    id: "slide-41",
    mode: "appendix",
    plainTitle: "IRI는 이름표가 아니라 장기 식별 계약이다",
    section: "05 · 구성 원리",
    title: "IRI는 이름표가 아니라<br><span class=\"accent\">장기 식별 계약</span>이다",
    body: `<div class="comparison">
      ${card("STABLE", "보존하는 것", "네임스페이스와 로컬 ID: https://example.org/onto/Failure_00042", 1)}
      ${card("EVOLVING", "바꿀 수 있는 것", "선호 라벨: timeout → 시간 제한 초과 / 정의와 주석의 개선", 2)}
    </div><div class="conclusion-strip" data-build="3"><span>식별자가 지켜야 할 약속</span><strong>라벨이 바뀌어도 연결은 유지하고, 폐기할 개념에는 대체 개념과 변경 이유를 남긴다.</strong></div>`,
    sources: ["M07 · OBO Foundry", "S01 · RDF", "S10 · Data on the Web"],
    note: "HTTP IRI 설계와 해석 가능성 정책은 조직 환경에 맞게 결정하되 한 번 공개한 식별자를 함부로 재사용하지 않습니다."
  },
  {
    id: "slide-42",
    plainTitle: "정의에는 경계·예·반례·출처가 필요하다",
    section: "05 · 구성 원리",
    title: "정의에는<br><span class=\"accent\">경계·예·반례·출처</span>가 필요하다",
    lead: "‘타임아웃 실패는 타임아웃이 난 실패’ 같은 순환 정의를 업무에서 판단할 수 있는 정의로 바꾼다.",
    body: `<div class="grid-2">
      ${card("BOUNDARY", "상위 개념 + 구별 조건", "TestFailure 중 실행 제한 시간 안에 종료 조건을 충족하지 못한 사건", 1)}
      ${card("EXAMPLE", "포함 예", "감시 제한 300초를 넘겨 실행이 중단됨", 2)}
      ${card("COUNTEREXAMPLE", "제외 예", "라이선스 대기 중 CI 작업 자체가 취소됨", 3)}
      ${card("SOURCE", "근거와 책임", "정책 문서·로그 필드·도메인 책임자·변경 날짜", 4)}
    </div>`,
    sources: ["M02 · Gruber 1995", "M07 · OBO Foundry", "C01 · Gene Ontology"],
    note: "텍스트 정의는 사람 합의의 핵심 인터페이스입니다. 형식 공리와 모순되지 않는지 함께 검토합니다."
  },
  {
    id: "slide-43",
    mode: "appendix",
    plainTitle: "핵심·도메인·애플리케이션 모듈을 분리한다",
    section: "05 · 구성 원리",
    title: "핵심 · 도메인 · 애플리케이션<br><span class=\"violet\">모듈</span>을 분리한다",
    body: window.OntologyDeck.visuals.moduleArchitecture(),
    sources: ["M06 · NeOn", "M07 · OBO Foundry"],
    note: "import 방향은 core → domain → application처럼 의존성을 단순화하고, 순환 의존을 피합니다."
  },
  {
    id: "slide-44",
    mode: "appendix",
    plainTitle: "출처와 버전을 기록해야 변경을 신뢰할 수 있다",
    section: "05 · 구성 원리",
    title: "출처와 버전을 기록해야<br><span class=\"accent\">변경을 신뢰</span>할 수 있다",
    body: lane([["산출물", "ontology v0.2", "변경된 Entity"], ["활동", "change request #18", "정의 수정과 검증"], ["주체", "domain owner", "승인 책임"], ["커밋", "diff + release note", "무엇·왜·영향"]], 4),
    sources: ["M07 · OBO Foundry", "S09 · PROV-O", "S10 · Data on the Web"],
    note: "PROV-O의 Entity·Activity·Agent 모델을 Git 커밋과 변경 요청에 연결한 교육적 패턴입니다."
  },
  {
    id: "slide-45",
    mode: "appendix",
    plainTitle: "필요한 만큼만 공리화하라",
    section: "05 · 구성 원리",
    title: "필요한 만큼만<br><span class=\"amber\">공리화</span>하라",
    lead: "표현력이 커질수록 검토·추론·학습·변경 비용도 함께 고려한다.",
    body: lane([["SKOS", "용어를 조직한다", "label·broader·mapping"], ["RDFS", "기본 골격을 세운다", "class·property·domain·range"], ["OWL", "필요한 공리를 더한다", "restriction·disjoint·equivalence"], ["멈춤", "CQ로 충분성을 본다", "추가 공리가 답을 개선하는가"]], 4),
    sources: ["M02 · Gruber 1995", "S03 · OWL 2", "S10 · Data on the Web"],
    note: "minimal ontological commitment는 아무것도 명시하지 말라는 뜻이 아니라 지식 공유에 필요한 최소 약속만 하라는 원칙입니다."
  },
  {
    id: "slide-46",
    plainTitle: "책임자와 변경 절차가 없으면 모델은 곧 낡는다",
    section: "05 · 구성 원리",
    title: "책임자와 변경 절차가 없으면<br>모델은 곧 <span class=\"danger\">낡는다</span>",
    body: `<div class="grid-2">
      ${card("DOMAIN OWNER", "의미 승인", "정의·경계·업무 영향에 최종 책임", 1)}
      ${card("ONTOLOGY ENGINEER", "형식 설계", "IRI·공리·모듈·추론 품질", 2)}
      ${card("DATA STEWARD", "연결·품질", "매핑·개체·SHACL·갱신 주기", 3)}
      ${card("CONSUMER", "사용 검증", "질의·API·에이전트 관점의 CQ와 회귀 테스트", 4)}
    </div>`,
    sources: ["M07 · OBO Foundry", "C01 · Gene Ontology", "C04 · Schema.org governance"],
    note: "한 사람이 여러 역할을 맡아도 역할별 결정 책임은 명시합니다. 변경 요청→영향 분석→검증→승인→배포 흐름을 둡니다."
  },
  {
    id: "slide-47",
    plainTitle: "CRAFT는 다섯 방법론을 실무에 맞게 묶은 교육 프레임이다",
    section: "06 · CRAFT 생명주기",
    eyebrow: "AN EDUCATIONAL SYNTHESIS, NOT A NEW STANDARD",
    title: "CRAFT는 다섯 방법론을 실무에 맞게 묶은<br><span class=\"violet\">교육용 프레임</span>이다",
    lead: "CQ·생명주기·재사용·모듈·운영 원칙을 한 장의 반복 가능한 기억 장치로 묶는다.",
    body: window.OntologyDeck.visuals.craftSynthesisMap(),
    sources: ["M03", "M04", "M05", "M06", "M07", "P01"],
    note: "CRAFT를 학술적으로 검증된 독립 방법론이라고 주장하지 않습니다. 원전의 활동을 실무 학습용으로 합성한 프레임입니다."
  },
  {
    id: "slide-48",
    plainTitle: "생명주기의 핵심은 순서보다 피드백이다",
    section: "06 · CRAFT 생명주기",
    visualType: "cycle",
    theme: "governance",
    motion: "hybrid",
    ariaSummary: "CRAFT의 다섯 단계가 직선으로 끝나지 않고 테스트와 운영에서 얻은 실패 근거를 이전 가정으로 되돌리는 피드백 순환",
    title: "생명주기의 핵심은 순서보다<br><span class=\"accent\">피드백</span>이다",
    lead: "앞 단계의 가정이 실제 데이터·질의·검증에서 깨지면 즉시 되돌아간다.",
    body: window.OntologyDeck.visuals.craftLoop(),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY"],
    note: "단계는 체크박스가 아니라 피드백을 어디로 보낼지 알려 주는 지도입니다."
  },
  {
    id: "slide-49",
    plainTitle: "각 단계는 산출물과 통과 조건을 남긴다",
    section: "06 · CRAFT 생명주기",
    title: "각 단계는 <span class=\"accent\">산출물</span>과<br><span class=\"amber\">통과 조건</span>을 남긴다",
    body: lane([["C", "맥락 + CQ", "결정·사용자·답 형태 합의"], ["R", "요구 + 재사용", "범위·품질·적합성 기록"], ["A", "개념 모델 + ADR", "관계·IRI·모듈·책임 합의"], ["F", "온톨로지 + 매핑", "예제와 검증 규칙 연결"], ["T", "테스트 + 배포", "회귀·승인·문서 완료"], ["↺", "변경 작업 목록", "운영 근거를 다음 주기에 반영"]], 6),
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry"],
    note: "통과 조건은 완벽함이 아니라 다음 단계로 넘어갈 만큼 불확실성이 관리되었는지 판단하는 팀의 기준입니다."
  },
  {
    id: "slide-50",
    plainTitle: "C — 먼저 업무 결정과 사용자를 정한다",
    section: "06 · CRAFT 생명주기",
    title: "C — 먼저 <span class=\"accent\">업무 결정과 사용자</span>를 정한다",
    body: window.OntologyDeck.visuals.contextCanvas(),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY", "P01 · 교육 설계"],
    note: "기술 선택보다 업무 결정을 먼저 적습니다. 예시 KPI는 실측치가 아니라 향후 측정 정의로만 다룹니다."
  },
  {
    id: "slide-51",
    plainTitle: "C — CQ는 답의 형태까지 써야 테스트가 된다",
    section: "06 · CRAFT 생명주기",
    title: "C — CQ는 <span class=\"violet\">답의 형태</span>까지<br>써야 테스트가 된다",
    body: lane([["질문", "같은 시그니처의 과거 실패는?", "자연어 요구"], ["답의 열", "실패 · 실행 · 이슈 · 근거", "예상 변수"], ["통과 조건", "알려진 예제 데이터 3건 반환", "결과 조건"], ["회귀 테스트", "SPARQL로 실행", "버전마다 다시 확인"]], 4),
    sources: ["M05 · Grüninger & Fox", "M03 · Ontology 101"],
    note: "탐색·연결·검증·집계·추천 질문은 기대 답과 실패 의미가 다릅니다."
  },
  {
    id: "slide-52",
    plainTitle: "R — 요구사항에는 포함·제외·품질·운영 기준을 담는다",
    section: "06 · CRAFT 생명주기",
    title: "R — 요구사항에는<br><span class=\"accent\">포함·제외·품질·운영 기준</span>을 담는다",
    body: window.OntologyDeck.visuals.requirementSheet(),
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry", "S10 · Data on the Web"],
    note: "CQ만으로는 접근 통제, license, 성능, 유지보수 같은 비기능 요구가 빠지기 쉽습니다."
  },
  {
    id: "slide-53",
    plainTitle: "R — 재사용은 복사가 아니라 채택·매핑·확장의 결정이다",
    section: "06 · CRAFT 생명주기",
    title: "R — 재사용은 복사가 아니라<br><span class=\"violet\">채택·매핑·확장</span>의 결정이다",
    body: window.OntologyDeck.visuals.reuseDecisionMap(),
    sources: ["M03 · Ontology 101", "M06 · NeOn", "S10 · Data on the Web"],
    note: "ontology뿐 아니라 DB schema, 코드표, 문서, log도 re-engineering 후보 자원입니다."
  },
  {
    id: "slide-54",
    plainTitle: "A — 용어 목록에서 개념 후보를 분리한다",
    section: "06 · CRAFT 생명주기",
    title: "A — 용어 목록에서<br><span class=\"accent\">개념 후보</span>를 분리한다",
    body: lane([["표현", "timeout · TMO", "사람이 쓰는 말"], ["개념", "시간 제한 초과 사건", "정의할 의미"], ["클래스", "TimeoutFailure", "여러 사건의 유형"], ["속성", "hasEvidence", "대상 사이 관계"], ["개체", "failure-1042", "특정 사건"]], 5),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY"],
    note: "명사라고 모두 class가 아니고, 데이터 값이라고 모두 instance도 아닙니다. CQ에서 어떤 역할을 하는지 봅니다."
  },
  {
    id: "slide-55",
    plainTitle: "A — 계층과 관계는 문장으로 검증한다",
    section: "06 · CRAFT 생명주기",
    title: "A — 계층과 관계는<br><span class=\"violet\">문장으로 검증</span>한다",
    body: `<div class="grid-3">
      ${card("IS-A", "모든 A는 B인가", "모든 TimeoutFailure는 TestFailure다 → 분류 계층 후보", 1)}
      ${card("PART-OF", "구성 부분인가", "LogLine은 Failure의 종류가 아니라 근거의 일부일 수 있음", 2)}
      ${card("RELATION", "관찰·영향·원인인가", "observedIn과 causedBy를 섞지 않고 근거 수준을 분리", 3)}
    </div>`,
    sources: ["M03 · Ontology 101", "M07 · OBO Foundry"],
    note: "관찰 관계를 인과 관계로 과장하지 않습니다. 자연어 문장과 반례로 edge 의미를 확인합니다."
  },
  {
    id: "slide-56",
    plainTitle: "A — 식별자·모듈·출처·책임자를 함께 설계한다",
    section: "06 · CRAFT 생명주기",
    title: "A — 식별자 · 모듈 · 출처 · 책임자를<br><span class=\"accent\">함께 설계</span>한다",
    body: window.OntologyDeck.visuals.architectureBlueprint(),
    sources: ["M06 · NeOn", "M07 · OBO Foundry", "S09 · PROV-O"],
    note: "논리 모델과 운영 아키텍처를 따로 미루면 release 직전에 식별자와 책임 문제가 터집니다."
  },
  {
    id: "slide-57",
    plainTitle: "F — 답해야 할 질문이 표현 언어를 결정한다",
    section: "06 · CRAFT 생명주기",
    title: "F — 답해야 할 질문이<br><span class=\"violet\">표현 언어</span>를 결정한다",
    body: lane([["라벨·탐색", "SKOS", "동의어·상하위·mapping"], ["기본 유형", "RDFS", "class·property·subclass"], ["논리 추론", "OWL", "restriction·equivalence·disjoint"], ["데이터 계약", "SHACL", "필수값·datatype·pattern"], ["질의", "SPARQL", "CQ graph pattern"]], 5),
    sources: ["S02 · RDFS", "S03 · OWL", "S05 · SKOS", "S10 · Data on the Web"],
    note: "한 프로젝트가 여러 언어를 조합할 수 있습니다. 선택은 도구 선호가 아니라 필요한 질문과 의미에서 출발합니다."
  },
  {
    id: "slide-58",
    plainTitle: "F — 온톨로지·매핑·예제 데이터·검증 규칙을 함께 만든다",
    section: "06 · CRAFT 생명주기",
    title: "F — 온톨로지 · 매핑 · 예제 데이터 · 검증 규칙을<br><span class=\"accent\">함께 만든다</span>",
    lead: "스키마만 오래 설계한 채 실제 데이터 연결을 미루는 실수를 피한다.",
    body: window.OntologyDeck.visuals.artifactConstellation(),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY", "S06 · SHACL", "P02", "P03"],
    note: "작은 fixture data를 초기에 연결하면 이름만 그럴듯하고 질의할 수 없는 모델을 빠르게 발견할 수 있습니다."
  },
  {
    id: "slide-59",
    plainTitle: "T — CQ를 질의·추론·검증 테스트로 바꾼다",
    section: "06 · CRAFT 생명주기",
    title: "T — CQ를 질의 · 추론 · 검증<br><span class=\"violet\">테스트</span>로 바꾼다",
    body: window.OntologyDeck.visuals.testMatrix(),
    sources: ["M05 · Grüninger & Fox", "S03 · OWL", "S06 · SHACL", "S07 · SPARQL"],
    note: "CQ마다 필요한 test lane이 다릅니다. 모든 CQ에 세 도구를 억지로 적용하지 않습니다."
  }
]);
