window.OntologyDeck.register([
  {
    id: "slide-38",
    plainTitle: "competency question이 요구사항과 테스트를 연결한다",
    section: "05 · 구성 원리",
    title: "competency question이<br><span class=\"accent\">요구사항과 테스트</span>를 연결한다",
    lead: "CQ는 ontology가 답해야 할 업무 질문이며, 모델 경계와 완료 기준을 동시에 만든다.",
    body: lane([["WHO / WHAT", "주체", "어떤 failure·run·component인가"], ["RELATION", "연결", "무엇과 관련되거나 영향을 주는가"], ["CONDITION", "조건", "기간·상태·signature는 무엇인가"], ["EXPECTED", "답 형태", "행·boolean·graph·검증 결과"]], 4),
    sources: ["M05 · Grüninger & Fox", "M03 · Ontology 101"],
    note: "좋은 CQ는 특정 구현 문법에 종속되지 않으면서도 기대 답의 형태를 검증할 수 있을 만큼 구체적입니다."
  },
  {
    id: "slide-39",
    plainTitle: "v0.1은 포함보다 제외 범위가 더 중요하다",
    section: "05 · 구성 원리",
    title: "v0.1은 포함보다<br><span class=\"amber\">제외 범위</span>가 더 중요하다",
    lead: "작은 업무 경계 밖의 질문을 명시하면 모델이 우주 전체로 팽창하는 것을 막는다.",
    body: `<div class="comparison">
      ${card("IN · v0.1", "포함", "failure signature, test run, evidence, related issue, component owner", 1)}
      ${card("OUT · LATER", "제외", "root-cause 자동 확정, 수정 코드 추천, 조직 성과 평가, 모든 로그 유형", 2)}
    </div><p class="lead step" style="--step:3;margin-top:24px">제외는 포기가 아니라 <strong class="accent">다음 버전의 backlog</strong>다.</p>`,
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY", "M07 · OBO Foundry"],
    note: "범위는 도메인 명사 목록보다 CQ와 사용 결정을 기준으로 자릅니다."
  },
  {
    id: "slide-40",
    plainTitle: "새로 만들기 전에 기존 vocabulary를 평가한다",
    section: "05 · 구성 원리",
    title: "새로 만들기 전에<br>기존 <span class=\"violet\">vocabulary</span>를 평가한다",
    lead: "재사용은 무조건 선이 아니라 적합성·지속성·권리·변경 위험을 비교하는 결정이다.",
    body: lane([["DISCOVER", "후보 찾기", "표준·ontology·taxonomy·schema"], ["ASSESS", "5가지 평가", "권위·scope·license·stability·fit"], ["DECIDE", "채택 방식", "adopt · map · extend · reject"], ["RECORD", "근거 남기기", "버전·결정자·영향"]], 4),
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
      ${card("STABLE", "보존하는 것", "namespace와 local ID: https://example.org/onto/Failure_00042", 1)}
      ${card("EVOLVING", "바꿀 수 있는 것", "prefLabel: timeout → 시간 제한 초과 / 정의와 주석의 개선", 2)}
    </div><div class="panel step" style="--step:3;margin-top:22px"><h3>식별자의 약속</h3><p>label 변경이 link를 깨뜨리지 않고, deprecated 개념은 successor와 변경 이유를 남긴다.</p></div>`,
    sources: ["M07 · OBO Foundry", "S01 · RDF", "S10 · Data on the Web"],
    note: "HTTP IRI 설계와 해석 가능성 정책은 조직 환경에 맞게 결정하되 한 번 공개한 식별자를 함부로 재사용하지 않습니다."
  },
  {
    id: "slide-42",
    plainTitle: "정의에는 경계·예·반례·출처가 필요하다",
    section: "05 · 구성 원리",
    title: "정의에는<br><span class=\"accent\">경계·예·반례·출처</span>가 필요하다",
    lead: "‘timeout failure는 timeout이 난 failure’ 같은 순환 정의를 업무 판단 가능한 정의로 바꾼다.",
    body: `<div class="grid-2">
      ${card("BOUNDARY", "상위 개념 + 구별 조건", "TestFailure 중 실행 제한 시간 안에 종료 조건을 충족하지 못한 사건", 1)}
      ${card("EXAMPLE", "포함 예", "watchdog limit 300s를 넘겨 run이 중단됨", 2)}
      ${card("COUNTEREXAMPLE", "제외 예", "license 대기 중 CI job 자체가 취소됨", 3)}
      ${card("SOURCE", "근거와 책임", "정책 문서·로그 필드·domain owner·변경 날짜", 4)}
    </div>`,
    sources: ["M02 · Gruber 1995", "M07 · OBO Foundry", "C01 · Gene Ontology"],
    note: "텍스트 정의는 사람 합의의 핵심 인터페이스입니다. 형식 공리와 모순되지 않는지 함께 검토합니다."
  },
  {
    id: "slide-43",
    mode: "appendix",
    plainTitle: "core·domain·application module을 분리한다",
    section: "05 · 구성 원리",
    title: "core · domain · application<br><span class=\"violet\">module</span>을 분리한다",
    body: lane([["CORE", "공통 뼈대", "Entity·Event·Evidence·Agent"], ["DOMAIN", "검증 업무", "Test·Run·Failure·Component"], ["APPLICATION", "triage 사용", "Issue mapping·queue·UI view"]], 3),
    sources: ["M06 · NeOn", "M07 · OBO Foundry"],
    note: "import 방향은 core → domain → application처럼 의존성을 단순화하고, 순환 의존을 피합니다."
  },
  {
    id: "slide-44",
    mode: "appendix",
    plainTitle: "provenance와 version이 있어야 변경을 신뢰할 수 있다",
    section: "05 · 구성 원리",
    title: "provenance와 version이 있어야<br><span class=\"accent\">변경을 신뢰</span>할 수 있다",
    body: lane([["ENTITY", "ontology v0.2", "변경된 산출물"], ["ACTIVITY", "change request #18", "정의 수정과 검증"], ["AGENT", "domain owner", "승인 책임"], ["COMMIT", "diff + release note", "무엇·왜·영향"]], 4),
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
    body: lane([["SKOS", "용어 조직", "label·broader·mapping"], ["RDFS", "기본 schema", "class·property·domain·range"], ["OWL", "형식 공리", "restriction·disjoint·equivalence"], ["STOP", "CQ로 충분성 검사", "추가 공리가 답을 개선하는가"]], 4),
    sources: ["M02 · Gruber 1995", "S03 · OWL 2", "S10 · Data on the Web"],
    note: "minimal ontological commitment는 아무것도 명시하지 말라는 뜻이 아니라 지식 공유에 필요한 최소 약속만 하라는 원칙입니다."
  },
  {
    id: "slide-46",
    plainTitle: "owner와 변경 절차가 없으면 모델은 곧 낡는다",
    section: "05 · 구성 원리",
    title: "owner와 변경 절차가 없으면<br>모델은 곧 <span class=\"danger\">낡는다</span>",
    body: `<div class="grid-2">
      ${card("DOMAIN OWNER", "의미 승인", "정의·경계·업무 영향에 최종 책임", 1)}
      ${card("ONTOLOGY ENGINEER", "형식 설계", "IRI·공리·모듈·reasoner 품질", 2)}
      ${card("DATA STEWARD", "연결·품질", "mapping·instance·SHACL·갱신 주기", 3)}
      ${card("CONSUMER", "사용 검증", "query·API·Agent 관점의 CQ와 회귀 테스트", 4)}
    </div>`,
    sources: ["M07 · OBO Foundry", "C01 · Gene Ontology", "C04 · Schema.org governance"],
    note: "한 사람이 여러 역할을 맡아도 역할별 결정 책임은 명시합니다. 변경 요청→영향 분석→검증→승인→배포 흐름을 둡니다."
  },
  {
    id: "slide-47",
    plainTitle: "CRAFT는 다섯 전통을 번역한 교육용 실무 loop다",
    section: "06 · CRAFT 생명주기",
    eyebrow: "AN EDUCATIONAL SYNTHESIS, NOT A NEW STANDARD",
    title: "CRAFT는 다섯 전통을 번역한<br><span class=\"violet\">교육용 실무 loop</span>다",
    lead: "CQ·생명주기·재사용·모듈·운영 원칙을 한 장의 반복 가능한 기억 장치로 묶는다.",
    body: `<div class="graph" aria-label="다섯 방법론 전통이 CRAFT로 합쳐지는 구조"><span class="node core step" style="--step:4">C · R · A · F · T</span><span class="node step" style="--step:1">Ontology 101</span><span class="node step" style="--step:1">CQ Method</span><span class="node step" style="--step:2">METHONTOLOGY</span><span class="node step" style="--step:3">NeOn · OBO</span></div>`,
    sources: ["M03", "M04", "M05", "M06", "M07", "P01"],
    note: "CRAFT를 학술적으로 검증된 독립 방법론이라고 주장하지 않습니다. 원전의 활동을 실무 학습용으로 합성한 프레임입니다."
  },
  {
    id: "slide-48",
    plainTitle: "생명주기는 순서보다 feedback이 핵심이다",
    section: "06 · CRAFT 생명주기",
    title: "생명주기는 순서보다<br><span class=\"accent\">feedback</span>이 핵심이다",
    lead: "앞 단계의 가정이 실제 data·query·validation에서 깨지면 즉시 돌아간다.",
    body: lane([["C", "질문", "답 형태가 불명확"], ["R", "요구·재사용", "기존 자원과 충돌"], ["A", "구조", "관계 문장이 어색"], ["F", "형식·data", "표현력 과다 또는 부족"], ["T ↺", "테스트·운영", "실패 근거로 되돌아감"]], 5),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY"],
    note: "단계는 체크박스가 아니라 피드백을 어디로 보낼지 알려 주는 지도입니다."
  },
  {
    id: "slide-49",
    plainTitle: "각 단계는 산출물과 통과 조건을 남긴다",
    section: "06 · CRAFT 생명주기",
    title: "각 단계는 <span class=\"accent\">산출물</span>과<br><span class=\"amber\">통과 조건</span>을 남긴다",
    body: `<div class="grid-3">
      ${card("C", "Context + CQ", "결정·사용자·질문·기대 답이 review됨", 1)}
      ${card("R", "Requirement + Reuse log", "포함/제외·품질·license·fit이 기록됨", 2)}
      ${card("A", "Concept model + ADR", "term·relation·IRI·module·owner가 합의됨", 3)}
      ${card("F", "Ontology + Mapping + Shape", "샘플 instance가 같은 ID로 연결됨", 4)}
      ${card("T", "Test report + Release", "CQ·reasoning·validation 회귀와 승인 완료", 5)}
      ${card("↺", "Change backlog", "실사용 피드백과 영향도가 다음 주기에 들어감", 6)}
    </div>`,
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry"],
    note: "통과 조건은 완벽함이 아니라 다음 단계로 넘어갈 만큼 불확실성이 관리되었는지 판단하는 팀의 기준입니다."
  },
  {
    id: "slide-50",
    plainTitle: "C — 먼저 업무 결정과 사용자를 고른다",
    section: "06 · CRAFT 생명주기",
    title: "C — 먼저 <span class=\"accent\">업무 결정과 사용자</span>를 고른다",
    body: `<div class="grid-2">
      ${card("USE CASE", "어떤 상황인가", "새 regression failure의 초기 triage", 1)}
      ${card("DECISION", "무엇을 결정하나", "조사 우선순위와 담당 component 후보", 2)}
      ${card("ACTOR", "누가 쓰나", "검증 엔지니어와 component owner", 3)}
      ${card("SIGNAL + CONSTRAINT", "어떻게 성공을 보나", "근거 경로 재현성 / 사람 승인·보안 경계", 4)}
    </div>`,
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY", "P01 · 교육 설계"],
    note: "기술 선택보다 업무 결정을 먼저 적습니다. 예시 KPI는 실측치가 아니라 향후 측정 정의로만 다룹니다."
  },
  {
    id: "slide-51",
    plainTitle: "C — CQ는 답의 형태까지 써야 테스트가 된다",
    section: "06 · CRAFT 생명주기",
    title: "C — CQ는 <span class=\"violet\">답의 형태</span>까지<br>써야 테스트가 된다",
    body: lane([["QUESTION", "같은 signature의 과거 failure는?", "자연어 요구"], ["BINDINGS", "failure · run · issue · evidence", "예상 변수"], ["ACCEPTANCE", "알려진 fixture 3건 반환", "결과 조건"], ["TEST", "SPARQL regression", "버전마다 재실행"]], 4),
    sources: ["M05 · Grüninger & Fox", "M03 · Ontology 101"],
    note: "탐색·연결·검증·집계·추천 질문은 기대 답과 실패 의미가 다릅니다."
  },
  {
    id: "slide-52",
    plainTitle: "R — 요구사항 명세에는 포함·제외·품질·운영을 담는다",
    section: "06 · CRAFT 생명주기",
    title: "R — 요구사항 명세에는<br><span class=\"accent\">포함·제외·품질·운영</span>을 담는다",
    body: `<div class="grid-2">
      ${card("SCOPE", "포함과 제외", "어떤 failure·source·기간·사용 결정을 다루나", 1)}
      ${card("QUALITY", "정확성·완전성", "필수 evidence·허용 코드·중복 식별 기준", 2)}
      ${card("NON-FUNCTIONAL", "성능·권한·보안", "query latency·접근 통제·민감 log 처리", 3)}
      ${card("OPERATIONS", "갱신·버전·owner", "source 주기·release cadence·지원 책임", 4)}
    </div>`,
    sources: ["M04 · METHONTOLOGY", "M07 · OBO Foundry", "S10 · Data on the Web"],
    note: "CQ만으로는 접근 통제, license, 성능, 유지보수 같은 비기능 요구가 빠지기 쉽습니다."
  },
  {
    id: "slide-53",
    plainTitle: "R — 재사용은 복사가 아니라 채택·매핑·확장 결정이다",
    section: "06 · CRAFT 생명주기",
    title: "R — 재사용은 복사가 아니라<br><span class=\"violet\">채택·매핑·확장</span> 결정이다",
    body: `<div class="grid-2">
      ${card("ADOPT", "그대로 사용", "의미·범위·license·운영 정책이 맞음", 1)}
      ${card("MAP", "연결 유지", "로컬 개념과 외부 개념의 관계를 명시", 2)}
      ${card("EXTEND", "필요한 부분 확장", "외부 core 위에 domain module 추가", 3)}
      ${card("REJECT", "근거 있게 제외", "부적합·불안정·권리·운영 위험을 기록", 4)}
    </div>`,
    sources: ["M03 · Ontology 101", "M06 · NeOn", "S10 · Data on the Web"],
    note: "ontology뿐 아니라 DB schema, 코드표, 문서, log도 re-engineering 후보 자원입니다."
  },
  {
    id: "slide-54",
    plainTitle: "A — term inventory에서 개념 후보를 분리한다",
    section: "06 · CRAFT 생명주기",
    title: "A — term inventory에서<br><span class=\"accent\">개념 후보</span>를 분리한다",
    body: lane([["LABEL", "timeout · TMO", "사람이 쓰는 표현"], ["CONCEPT", "시간 제한 초과 사건", "정의할 의미"], ["CLASS", "TimeoutFailure", "여러 사건의 유형"], ["PROPERTY", "hasEvidence", "대상 사이 관계"], ["INSTANCE", "failure-1042", "특정 사건"]], 5),
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY"],
    note: "명사라고 모두 class가 아니고, 데이터 값이라고 모두 instance도 아닙니다. CQ에서 어떤 역할을 하는지 봅니다."
  },
  {
    id: "slide-55",
    plainTitle: "A — hierarchy와 relation은 문장으로 검증한다",
    section: "06 · CRAFT 생명주기",
    title: "A — hierarchy와 relation은<br><span class=\"violet\">문장으로 검증</span>한다",
    body: `<div class="grid-3">
      ${card("IS-A", "모든 A는 B인가", "모든 TimeoutFailure는 TestFailure다 → hierarchy 후보", 1)}
      ${card("PART-OF", "구성 부분인가", "LogLine은 Failure의 종류가 아니라 Evidence의 일부일 수 있음", 2)}
      ${card("RELATION", "관찰·영향·원인인가", "observedIn과 causedBy를 섞지 않고 근거 수준을 분리", 3)}
    </div>`,
    sources: ["M03 · Ontology 101", "M07 · OBO Foundry"],
    note: "관찰 관계를 인과 관계로 과장하지 않습니다. 자연어 문장과 반례로 edge 의미를 확인합니다."
  },
  {
    id: "slide-56",
    plainTitle: "A — IRI·module·provenance·owner를 함께 설계한다",
    section: "06 · CRAFT 생명주기",
    title: "A — IRI · module · provenance · owner를<br><span class=\"accent\">함께 설계</span>한다",
    body: `<div class="grid-2">
      ${card("IDENTITY", "IRI 정책", "namespace·local ID·deprecated·redirect", 1)}
      ${card("STRUCTURE", "module 경계", "core·domain·application과 import 방향", 2)}
      ${card("TRACE", "provenance", "source·activity·agent·confidence·timestamp", 3)}
      ${card("GOVERN", "owner", "정의 승인·형식 품질·data 운영·소비자 검증", 4)}
    </div>`,
    sources: ["M06 · NeOn", "M07 · OBO Foundry", "S09 · PROV-O"],
    note: "논리 모델과 운영 아키텍처를 따로 미루면 release 직전에 식별자와 책임 문제가 터집니다."
  },
  {
    id: "slide-57",
    plainTitle: "F — 필요한 질문이 표현 언어를 결정한다",
    section: "06 · CRAFT 생명주기",
    title: "F — 필요한 질문이<br><span class=\"violet\">표현 언어</span>를 결정한다",
    body: lane([["LABEL / NAV", "SKOS", "동의어·상하위·mapping"], ["BASIC TYPE", "RDFS", "class·property·subclass"], ["LOGICAL INFERENCE", "OWL", "restriction·equivalence·disjoint"], ["DATA CONTRACT", "SHACL", "필수값·datatype·pattern"], ["QUERY", "SPARQL", "CQ graph pattern"]], 5),
    sources: ["S02 · RDFS", "S03 · OWL", "S05 · SKOS", "S10 · Data on the Web"],
    note: "한 프로젝트가 여러 언어를 조합할 수 있습니다. 선택은 도구 선호가 아니라 필요한 질문과 의미에서 출발합니다."
  },
  {
    id: "slide-58",
    plainTitle: "F — ontology·mapping·instance·shape를 함께 만든다",
    section: "06 · CRAFT 생명주기",
    title: "F — ontology · mapping · instance · shape를<br><span class=\"accent\">함께 만든다</span>",
    lead: "schema만 오래 설계하고 실제 데이터 연결을 미루는 실패를 피한다.",
    body: `<div class="graph" aria-label="동일 식별자를 중심으로 네 산출물이 연결"><span class="node core step" style="--step:1">ex:Failure</span><span class="node step" style="--step:2">ontology.ttl</span><span class="node step" style="--step:3">mapping.csv</span><span class="node step" style="--step:4">fixtures.ttl</span><span class="node step" style="--step:5">shapes.ttl</span></div>`,
    sources: ["M03 · Ontology 101", "M04 · METHONTOLOGY", "S06 · SHACL", "P02", "P03"],
    note: "작은 fixture data를 초기에 연결하면 이름만 그럴듯하고 질의할 수 없는 모델을 빠르게 발견할 수 있습니다."
  },
  {
    id: "slide-59",
    plainTitle: "T — CQ를 query·reasoning·validation test로 바꾼다",
    section: "06 · CRAFT 생명주기",
    title: "T — CQ를 query · reasoning · validation<br><span class=\"violet\">test</span>로 바꾼다",
    body: `<div class="grid-3">
      ${card("SPARQL", "찾을 수 있는가", "알려진 signature fixture가 기대 result row를 반환", 1)}
      ${card("REASONER", "도출되는가", "하위 class instance가 상위 class query에 포함", 2)}
      ${card("SHACL", "계약을 지키는가", "evidence 누락 fixture는 실패, 보완 fixture는 통과", 3)}
    </div><p class="lead step" style="--step:4;margin-top:25px">테스트 실패는 어느 단계의 가정을 다시 볼지 알려 주는 feedback이다.</p>`,
    sources: ["M05 · Grüninger & Fox", "S03 · OWL", "S06 · SHACL", "S07 · SPARQL"],
    note: "CQ마다 필요한 test lane이 다릅니다. 모든 CQ에 세 도구를 억지로 적용하지 않습니다."
  }
]);
