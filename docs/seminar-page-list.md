# Ontology 지식관리 방법론 — 75장 페이지 맵

이 문서는 후속 슬라이드 구현의 콘텐츠 정본입니다. 제목은 청자에게 보이는 결론형 문구이며, 각 장은 하나의 학습 목표를 가집니다. 근거 ID는 [`references.md`](references.md), 주장 경계는 [`source-matrix.md`](source-matrix.md)를 참조합니다.

## 1. 문제와 학습 계약 — 의미를 왜 관리해야 하는가 (1–7)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 1 | Ontology 지식관리 방법론 | 과정의 질문을 “의미를 어떻게 코드처럼 관리할까?”로 연다. | P01 | 어두운 nebula 위에 분리된 점들이 하나의 의미 graph로 연결된다. |
| 2 | 이 교안이 끝나면 v0.1을 설계할 수 있다 | 일곱 학습 성과와 자율학습 사용법을 제시한다. | P01 | 7개 성과를 한 줄 여정으로 순차 공개한다. |
| 3 | 결론부터: 의미에도 버전·테스트·오너가 필요하다 | ontology를 분류 그림이 아니라 운영되는 공학 산출물로 프레이밍한다. | M04, M07 | 용어표가 Git형 lifecycle로 바뀌는 morph. |
| 4 | 하나의 failure가 다섯 시스템에 흩어져 있다 | 관통 시나리오와 데이터 소스를 소개한다. | P04 | log·test·issue·block·owner가 중앙 hub로 모인다. |
| 5 | `timeout`은 팀마다 다른 사건을 뜻한다 | 동음 용어의 의미 충돌을 체감시킨다. | M03, P04 | 같은 단어에서 서로 다른 정의 말풍선이 갈라진다. |
| 6 | 값은 있어도 판단 기준은 숨어 있다 | 표·코드값만으로는 정의·관계·근거·책임을 전달하기 어렵다는 문제를 보인다. | M03, P04 | CSV 셀을 확대하면 비어 있는 의미 레이어가 드러난다. |
| 7 | AI가 읽을 지식에도 합의된 의미와 근거가 필요하다 | RAG/Agent 연결을 만능 효과가 아닌 provenance·approval 설계 문제로 한정한다. | S09, P04 | 답변 경로에 concept·evidence·human gate가 순차 점등된다. |

## 2. 방법론의 탄생 — art에서 engineering으로 (8–15)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 8 | ontology는 공유와 재사용 문제에서 출발했다 | 공통 어휘가 사람과 시스템 사이의 이해를 공유하게 하는 이유를 설명한다. | M01, M03 | 서로 다른 시스템 어휘가 공통 vocabulary에 정렬된다. |
| 9 | 철학의 ontology가 AI의 공유 명세로 이동했다 | 철학적 질문과 컴퓨터과학의 기술적 명세를 구분한다. | M01 | 철학–AI 지식표현–Semantic Web을 3시점 timeline으로 전개한다. |
| 10 | 핵심 질문은 “옮겨도 뜻이 유지되는가?”였다 | portable representation과 interoperability 문제를 짚는다. | M01 | 같은 개념이 두 표현 시스템 사이를 이동해도 IRI가 유지된다. |
| 11 | 방법론은 ontology 구축을 공학 활동으로 바꾸려 나왔다 | METHONTOLOGY가 지적한 활동·생명주기·기법 부재를 설명한다. | M04 | 즉흥 스케치가 단계·산출물·검증 gate로 정돈된다. |
| 12 | 모델에는 유일한 정답보다 목적 적합성이 중요하다 | application·예상 확장이 모델 선택을 좌우함을 배운다. | M03 | 하나의 domain에 목적별로 다른 세 모델을 나란히 비교한다. |
| 13 | ontology는 완성품보다 진화하는 prototype에 가깝다 | 반복 개발과 전 과정 평가·문서화의 필요를 연결한다. | M03, M04 | waterfall과 evolving prototype을 대비하고 후자를 loop로 강조한다. |
| 14 | 고전 방법론은 서로 다른 빈칸을 채웠다 | CQ·생명주기·재사용·거버넌스의 기여를 비교한다. | M03, M04, M05, M06, M07 | 다섯 방법론×다섯 관심사의 compact matrix. |
| 15 | 이 과정은 다섯 전통을 하나의 실무 loop로 묶는다 | 통합 프레임의 근거와 “새 표준이 아님”을 명시한다. | M03, M04, M05, M06, M07, P01 | 다섯 source ribbon이 CRAFT loop로 합류한다. |

## 3. 정의와 구성요소 — 무엇을 만들고 있는가 (16–24)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 16 | 먼저 ontology의 경계를 세운다 | 정의·구성요소·인접 산출물을 학습할 section transition. | M01, M03 | glossary에서 formal ontology까지 표현력 축을 연다. |
| 17 | ontology는 conceptualization의 explicit specification이다 | Gruber의 고전적 정의를 업무 언어로 번역한다. | M01 | conceptualization→specification을 2단 확대한다. |
| 18 | shared·explicit·formal은 서로 다른 약속이다 | 공동체 합의, 명시적 정의, 기계 해석 가능성을 분리한다. | M01, M03, S03 | 세 약속이 겹쳐지는 Venn 대신 수평 적층으로 표현한다. |
| 19 | class·property·individual·axiom이 의미를 만든다 | 핵심 구성요소와 constraint/annotation의 역할을 소개한다. | M03, S03, S04 | 작은 graph에서 요소별 색을 차례로 표시한다. |
| 20 | 문자열이 아니라 개념 식별자를 중심에 둔다 | label·synonym과 IRI로 식별되는 개념을 구분한다. | M07, S01, S05 | timeout·TMO·hang label이 한 IRI에 정렬된다. |
| 21 | 이름보다 목적과 표현력으로 지식 구조를 고른다 | glossary·taxonomy·schema·ontology를 엄격한 서열이 아닌 선택지로 비교한다. | S05, S10, P01 | 표현력×운영비용 2축에 네 산출물을 배치한다. |
| 22 | ontology schema와 instance data는 함께 지식베이스를 이룬다 | class/property 명세와 실제 individual을 구분한다. | M03, S03 | TBox/ABox 두 층을 한 graph에서 on/off한다. |
| 23 | ontology와 knowledge graph는 역할이 겹치지만 동일어는 아니다 | 이 과정의 용어 convention을 명시한다. | S01, S03, P01 | ontology layer가 graph data를 해석·검증하는 구조. |
| 24 | `TimeoutFailure` 하나로 정의 전체를 확인한다 | 상위 class·relation·evidence constraint·instance를 한 예로 종합한다. | P02, P03 | 예제 node를 누적 조립하고 마지막에 CQ를 붙인다. |

## 4. 표준 스택 — 표현·추론·검증·질의를 분리한다 (25–36)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 25 | 표준은 한 덩어리가 아니라 역할 분담이다 | RDF부터 SHACL·SPARQL까지 stack의 질문을 먼저 제시한다. | S01, S02, S03, S05, S06, S07, S08 | “표현/의미/검증/질의/교환” 레이어를 순차 공개한다. |
| 26 | RDF는 의미를 triple로 쪼갠다 | subject–predicate–object와 IRI/literal을 이해한다. | S01 | 자연어 한 문장을 세 칸 triple로 분해한다. |
| 27 | triple의 공유 node가 graph를 만든다 | join 가능한 식별자가 연결성을 만드는 과정을 본다. | S01 | 세 triple이 같은 node를 공유하며 graph로 합쳐진다. |
| 28 | RDFS는 class와 property의 기본 골격을 준다 | type·subClassOf·domain·range의 entailment 역할을 익힌다. | S02 | instance type이 상위 class로 추론되는 한 단계 애니메이션. |
| 29 | OWL은 더 풍부한 공리와 형식 의미를 더한다 | disjointness·restriction·equivalence와 reasoner의 용도를 소개한다. | S03, S04 | 두 class 충돌과 property restriction을 짧게 대비한다. |
| 30 | taxonomy와 thesaurus에는 SKOS가 더 알맞을 수 있다 | prefLabel·altLabel·broader·related·mapping을 목적에 맞게 고른다. | S05 | 용어망이 경량 SKOS graph로 정리된다. |
| 31 | SHACL은 “입력 graph가 계약을 지켰나?”를 검사한다 | shape·focus node·constraint·result의 흐름을 익힌다. | S06, P03 | evidence 누락 node가 gate에서 실패하고 보완 후 통과한다. |
| 32 | SPARQL은 graph pattern으로 질문한다 | SELECT와 graph pattern을 CQ에 연결한다. | S07 | CQ 문장이 triple pattern으로 변하고 결과 row가 나타난다. |
| 33 | Turtle과 JSON-LD는 같은 graph의 다른 표현이다 | data model과 serialization을 구분하고 context의 역할을 이해한다. | S01, S08 | 한 graph가 Turtle과 JSON-LD 두 코드 뷰로 전환된다. |
| 34 | 추론은 명시하지 않은 결론을 semantics로 도출한다 | entailment·subsumption·instance retrieval을 직관적으로 이해한다. | S01, S03 | asserted triple과 inferred triple을 실선/점선으로 구분한다. |
| 35 | 검증은 합격 여부를, 추론은 가능한 결론을 묻는다 | reasoner와 SHACL을 혼동하지 않도록 질문·출력·실패 의미를 비교한다. | S03, S06 | 두 개의 pipeline을 같은 입력에 병렬 적용한다. |
| 36 | open world에서는 “없다”와 “모른다”가 다르다 | OWL/RDF의 정보 불완전성과 SHACL의 데이터 계약을 함께 사용한다. | S04, S05, S06 | missing evidence가 OWA와 validation에서 다르게 처리되는 split scene. |

## 5. 구성 원리 — 필요한 만큼 명확하게 만든다 (37–46)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 37 | 좋은 ontology는 큰 ontology가 아니라 목적에 맞는 ontology다 | 구성 원리를 목적·검증 가능성에 묶는다. | M02, M03 | 우주 모델을 잘라 작은 업무 경계만 남긴다. |
| 38 | competency question이 요구사항과 테스트를 연결한다 | CQ의 주체·관계·조건·기대 답을 구조화한다. | M05, M03 | 모호한 질문을 네 칸 CQ template으로 다듬는다. |
| 39 | v0.1은 포함보다 제외 범위가 더 중요하다 | bounded context와 out-of-scope를 명시한다. | M03, M04, M07 | scope circle 밖으로 후순위 개념을 이동한다. |
| 40 | 새로 만들기 전에 기존 vocabulary를 평가한다 | reuse 후보의 권위·scope·license·stability·fit을 평가한다. | M03, M06, S10 | reuse decision funnel: adopt/map/extend/reject. |
| 41 | IRI는 이름표가 아니라 장기 식별 계약이다 | namespace·stable local ID·label 변경과 식별자 보존을 배운다. | M07, S01, S10 | label은 바뀌지만 IRI와 link는 유지되는 장면. |
| 42 | 정의에는 경계·예·반례·출처가 필요하다 | 사람 합의와 기계 모델 사이의 textual definition을 강화한다. | M02, M07, C01 | 나쁜 정의를 definition canvas로 개선한다. |
| 43 | core·domain·application module을 분리한다 | 재사용과 변경 영향도를 낮추는 모듈화를 설계한다. | M06, M07 | 세 module과 import 방향을 단순 graph로 보인다. |
| 44 | provenance와 version이 있어야 변경을 신뢰할 수 있다 | 누가·언제·무엇을·왜 바꿨는지 추적한다. | M07, S09, S10 | Entity–Activity–Agent provenance chain이 commit에 연결된다. |
| 45 | 필요한 만큼만 공리화하라 | minimal ontological commitment와 표현력 비용을 이해한다. | M02, S03, S10 | SKOS→RDFS→OWL 표현력 dial과 비용 경고. |
| 46 | owner와 변경 절차가 없으면 모델은 곧 낡는다 | domain owner·ontology engineer·data steward·consumer 역할을 정한다. | M07, C01, C04 | RACI형 4역할과 change request 흐름. |

## 6. CRAFT 생명주기 — 원리를 반복 가능한 산출물로 바꾼다 (47–60)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 47 | CRAFT는 다섯 전통을 번역한 교육용 실무 loop다 | CRAFT가 독립 표준이 아니라 합성 프레임임을 재확인한다. | M03, M04, M05, M06, M07, P01 | source별 색 ribbon이 C-R-A-F-T loop를 만든다. |
| 48 | 생명주기는 순서보다 feedback이 핵심이다 | 단계별 gate와 되돌아가기를 evolving prototype으로 이해한다. | M03, M04 | 선형 화살표가 feedback loop로 접힌다. |
| 49 | 각 단계는 산출물과 통과 조건을 남긴다 | 활동 목록을 review 가능한 artifact로 바꾼다. | M04, M07 | 단계별 artifact와 exit criterion을 한 줄로 매핑한다. |
| 50 | C — 먼저 업무 결정과 사용자를 고른다 | use case·decision·actor·success signal·constraint를 적는다. | M03, M04, P01 | context canvas를 한 항목씩 채운다. |
| 51 | C — CQ는 답의 형태까지 써야 테스트가 된다 | CQ를 탐색·연결·검증·집계·추천 유형으로 다듬는다. | M05, M03 | 질문→expected bindings→acceptance test 변환. |
| 52 | R — 요구사항 명세에는 포함·제외·품질·운영을 담는다 | CQ만으로 빠지기 쉬운 non-functional requirement를 보강한다. | M04, M07, S10 | requirement sheet의 네 구역을 순차 강조한다. |
| 53 | R — 재사용은 복사가 아니라 채택·매핑·확장 결정이다 | ontology·taxonomy·DB·문서·log를 inventory로 평가한다. | M03, M06, S10 | source inventory가 decision matrix로 정렬된다. |
| 54 | A — term inventory에서 개념 후보를 분리한다 | label·concept·class·property·instance 후보를 구분한다. | M03, M04 | 용어 카드가 다섯 bucket으로 이동한다. |
| 55 | A — hierarchy와 relation은 문장으로 검증한다 | is-a·part-of·causal/observational relation을 혼동하지 않는다. | M03, M07 | 문장 테스트를 통과한 edge만 graph에 남는다. |
| 56 | A — IRI·module·provenance·owner를 함께 설계한다 | 논리 모델과 운영 architecture를 같은 시점에 결정한다. | M06, M07, S09 | architecture blueprint에 네 overlay가 켜진다. |
| 57 | F — 필요한 질문이 표현 언어를 결정한다 | SKOS/RDFS/OWL 선택을 CQ와 inference requirement에 연결한다. | S02, S03, S05, S10 | decision tree가 적정 formalization level로 수렴한다. |
| 58 | F — ontology·mapping·instance·shape를 함께 만든다 | schema만 만들고 실제 데이터 연결을 미루는 실패를 막는다. | M03, M04, S06, P02, P03 | 네 artifact가 동일 ID를 중심으로 연결된다. |
| 59 | T — CQ를 query·reasoning·validation test로 바꾼다 | 질문 유형마다 SPARQL·reasoner·SHACL을 선택한다. | M05, S03, S06, S07 | CQ test matrix에 세 test lane이 채워진다. |
| 60 | T — release 이후에는 tend가 시작된다 | version·document·change review·deprecation·feedback·monitoring을 운영한다. | M04, M07, S09, S10 | v0.1 release가 다음 change cycle로 이어진다. |

## 7. 반도체 관통 예제 — CQ에서 검증 가능한 graph까지 (61–69)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 61 | 예제 목표는 failure triage의 판단 근거를 잇는 것이다 | 교육용 사례의 목적과 비목표를 선언한다. | P02, P03, P04 | “자동 수정”은 제외하고 triage evidence path만 강조한다. |
| 62 | 네 개 CQ가 v0.1 범위를 결정한다 | 재발 signature·관련 issue·evidence·owner 질문을 확정한다. | M05, P04 | CQ 네 장이 scope boundary를 만든다. |
| 63 | 기존 log·issue·test schema를 먼저 inventory한다 | source field와 concept 후보, 신뢰도, 갱신 주기를 기록한다. | M06, P04 | 다섯 source의 field가 inventory table로 정렬된다. |
| 64 | `TestFailure`를 중심으로 최소 개념 모델을 만든다 | failure·test·run·evidence·issue·component의 경계를 정한다. | P02 | 중앙 node에서 5개 핵심 개념만 단계 공개한다. |
| 65 | taxonomy와 relation을 분리해야 질문이 선명해진다 | failure 종류와 observedIn·hasEvidence·affects 관계를 구분한다. | P02, M03 | 왼쪽 hierarchy와 오른쪽 relation graph를 연결한다. |
| 66 | Turtle은 합의된 모델을 review 가능한 text로 만든다 | prefix·class·property·instance snippet을 읽는다. | S01, P02 | 개념 diagram의 각 요소가 TTL 줄에 highlight된다. |
| 67 | SHACL gate는 evidence 없는 분류를 막는다 | minCount·datatype·pattern·range 제약의 역할을 확인한다. | S06, P03 | invalid graph→validation result→fixed graph 3단계. |
| 68 | SPARQL은 “같은 signature의 과거 failure”를 찾는다 | CQ를 graph pattern과 expected result로 바꾼다. | S07, P02, P04 | CQ 문장→query block→result table 순차 reveal. |
| 69 | Agent는 근거를 따라가고 사람은 최종 판단을 승인한다 | concept linking·provenance·confidence·human approval 연결 패턴을 제시한다. | S09, P04 | retrieval path 끝에 승인 gate를 두고 자동 효과 보장은 배제한다. |

## 8. 사례·선택·행동 — 운영 가능한 작은 시작 (70–75)

| # | 제목 | 학습·서사 역할 | 근거 | 시각·애니메이션 |
|---:|---|---|---|---|
| 70 | ontology는 기본값이 아니라 비용이 있는 선택이다 | 코드표·schema로 충분한 경우와 ontology가 유리한 경우를 판별한다. | M03, S10, P04 | 시스템 수·관계 복잡도·추론/검증·변화율 4축 decision card. |
| 71 | Gene Ontology는 식별자·정의·evidence·운영을 함께 보여준다 | 장기 운영 사례에서 고유 ID와 annotation evidence를 배운다. | C01, C02, M07 | ontology와 annotation을 분리한 two-layer graph. |
| 72 | Schema.org는 완벽함보다 대규모 사용성과 점진 진화를 택한다 | pragmatic formalization과 community release trade-off를 배운다. | C03, C04, S10 | elegance↔usability slider와 release loop. |
| 73 | FIBO는 금융 데이터의 공통 의미를 formal ontology로 만든다 | 복잡한 규제·업무 개념에서 관계 명세가 주는 가치를 본다. | C05, S03 | spreadsheet·RDB·XML이 공통 concept layer에 연결된다. |
| 74 | 첫 4주는 한 use case와 한 release에 집중한다 | 주차별 CRAFT 산출물과 review gate를 실행 계획으로 묶는다. | M04, M07, P01 | Week 1–4 roadmap에 artifact·owner·gate를 표시한다. |
| 75 | 당신의 첫 CQ가 ontology v0.1의 시작이다 | 시작 질문·제외 범위·owner를 적게 하며 개막 질문을 해결한다. | M05, P01 | 빈 CQ card가 작성 가능한 final worksheet로 남는다. |

## 구현 메모

- 현재 80장 초안은 이 75장 맵을 기준으로 후속 콘텐츠 PR에서 통합·재배치한다.
- section transition도 고유 학습 역할과 출처를 가지며 장수에 포함한다.
- 각 외부 사실의 상세 claim boundary는 `docs/source-matrix.md`를 따른다.
- 발표 모드는 self-study 설명 장을 줄일 수 있지만 번호와 source traceability는 유지한다.
