# Ontology 지식관리 방법론 — 페이지별 구성

총 80장입니다. 본편 73장 + 부록 7장으로 구성했고, `?mode=presentation`에서는 READ/APPENDIX 슬라이드를 제외해 발표 흐름을 압축합니다.

## 도입 — 왜 ontology가 필요한가 (1~10)

| # | 제목 | 내용 |
|---|---|---|
| 1 | 표지 | Ontology 지식관리 방법론 |
| 2 | 학습 여정 | 도입 → 정의 → 원리 → 구축 → 검증 → 적용 |
| 3 | 오늘의 결론 | Ontology는 의미를 코드처럼 관리하는 방법 |
| 4 | 관통 시나리오 | Failure Knowledge Hub |
| 5 | 같은 말, 다른 뜻 | timeout의 팀별 의미 차이 |
| 6 | 표는 있는데 의미가 없다 | 코드값/컬럼명만으로는 판단 기준 부족 |
| 7 | AI 시대의 의미 공백 | RAG/Agent도 의미 레이어 필요 |
| 8 | 방법론이 나온 계기 | 커뮤니케이션·상호운용성·재사용·신뢰성 |
| 9 | 역사적 흐름 | 철학 → AI 지식표현 → RDF/OWL → KG/RAG |
| 10 | 방법론의 목표 | 합의·연결·검증·운영 |

## Part 1 — Ontology란 무엇인가 (11~17)

| # | 제목 | 내용 |
|---|---|---|
| 11 | 간지 | 정의 → 구성요소 → 구분 |
| 12 | Gruber 정의 | 공유된 담화 영역의 표현 어휘 명세 |
| 13 | W3C/OWL 관점 | 공동체가 공유하는 형식화된 어휘와 관계 |
| 14 | 비슷한 것들과의 차이 | 용어집, taxonomy, schema, KG, ontology |
| 15 | 5가지 구성요소 | Class, Individual, Property, Constraint, Axiom |
| 16 | 용어·개념·IRI 분리 | 문자열이 아니라 개념 식별자를 중심에 둠 |
| 17 | TimeoutFailure 예 | 상위/관계/필수 근거 |

## Part 2 — 표준 스택 (18~28)

| # | 제목 | 내용 |
|---|---|---|
| 18 | 간지 | RDF → RDFS → OWL → SKOS → SHACL → SPARQL |
| 19 | RDF | subject-predicate-object triple |
| 20 | RDF graph | triple이 graph가 되는 과정 |
| 21 | RDFS | Class, type, subClassOf, domain, range |
| 22 | OWL | 공리와 추론 |
| 23 | SKOS | 분류체계/시소러스 표현 |
| 24 | SHACL | 데이터 검증 게이트 |
| 25 | SPARQL | graph 질의 |
| 26 | JSON-LD | 웹/API와 RDF 연결 |
| 27 | 추론과 검증의 차이 | OWL/RDFS reasoner vs SHACL |
| 28 | Open vs Closed world | 실무 시스템에서 둘 다 필요 |

## Part 3 — 구성 원리 (29~38)

| # | 제목 | 내용 |
|---|---|---|
| 29 | 간지 | 좋은 ontology는 필요한 만큼만 만든다 |
| 30 | 정답 ontology는 없다 | 목적과 CQ가 모델을 결정 |
| 31 | Competency Question | 요구사항과 테스트의 기준 |
| 32 | 범위 자르기 | 첫 버전은 좁은 업무 질문에서 시작 |
| 33 | Reuse first | 기존 표준/내부 자산 재사용 |
| 34 | IRI와 naming | 식별자와 namespace 운영 규칙 |
| 35 | 모듈화 | Core/Domain/Application 분리 |
| 36 | 버전과 출처 | provenance와 release 관리 |
| 37 | Gruber 품질 기준 | clarity, coherence, extendibility 등 |
| 38 | 운영 역할 | domain owner, ontology engineer, data engineer |

## Part 4 — CRAFT 구축 방법론 (39~53)

| # | 제목 | 내용 |
|---|---|---|
| 39 | 간지 | CRAFT 절차 소개 |
| 40 | CRAFT 루프 | Context, Questions, Reuse, Architecture, Formalize, Test/Operate |
| 41 | Context | use case, 성공 지표, 제외 범위 |
| 42 | Questions | CQ 목록 작성 |
| 43 | Reuse | 문서, 데이터, 코드, 표준, 전문가 인터뷰 |
| 44 | Term inventory | 용어 후보 수집과 출처 기록 |
| 45 | Concept map | class/property 토론용 지도 |
| 46 | Class hierarchy | is-a 관계 설계 |
| 47 | Relationships | property, domain/range, 업무 의미 |
| 48 | Constraints | 필수값, 형식, enum, 교차검증 |
| 49 | Instances & mapping | 실제 데이터와 ontology 연결 |
| 50 | CQ → SPARQL | 요구사항을 자동 테스트로 전환 |
| 51 | Publish | 저장소, 버전, 문서, endpoint/API |
| 52 | Operate | 변경 요청, 리뷰, 검증, 릴리즈, 모니터링 |
| 53 | Toolchain | Protégé, RDFLib/Jena, pySHACL, Fuseki 등 |

## Part 5 — 반도체 검증 예시 (54~64)

| # | 제목 | 내용 |
|---|---|---|
| 54 | 간지 | Regression failure triage ontology |
| 55 | CQ 세트 | 재발 signature, issue 연결, evidence, owner |
| 56 | 개념 모델 | TestFailure 중심의 graph |
| 57 | Failure taxonomy | Timeout/Assertion/Build/Environment/Unknown |
| 58 | Relation model | failedTest, observedIn, hasEvidence 등 |
| 59 | Turtle 예시 | 실제 TTL snippet |
| 60 | SHACL 게이트 | evidence minCount 애니메이션 |
| 61 | SPARQL 예시 | 재발 signature 조회 |
| 62 | RAG/Agent 연결 | concept linking, evidence, human approval |
| 63 | 성공 지표 | 검색 품질, 분류 품질, 운영 효율 |
| 64 | 과한 경우 | lookup table로 충분한 경우 등 |

## Part 6 — 실제 사례와 마무리 (65~73)

| # | 제목 | 내용 |
|---|---|---|
| 65 | 간지 | Gene Ontology, Schema.org, FIBO |
| 66 | Gene Ontology | gene function 지식베이스 사례 |
| 67 | Schema.org | 웹 구조화 데이터 공유 어휘 사례 |
| 68 | FIBO | 금융 개념 formal ontology 사례 |
| 69 | 공통점 | 커뮤니티, 식별자, 문서화, 재사용, 운영 |
| 70 | 실패 패턴 | 우주 모델, DB 복붙, 오너 없음 등 |
| 71 | 첫 4주 실행안 | v0.1까지 가는 작은 계획 |
| 72 | 실습 과제 | 용어 10개 → CQ → TTL/SHACL/SPARQL |
| 73 | Q&A | 핵심 메시지 회수 |

## 부록 (74~80)

| # | 제목 | 내용 |
|---|---|---|
| 74 | 표준 치트시트 | RDF/RDFS/OWL/SKOS/SHACL/SPARQL |
| 75 | CQ 템플릿 | 탐색형, 연결형, 검증형, 집계형, 추천형 |
| 76 | CRAFT 워크시트 | 단계별 산출물 |
| 77 | OWL 모델링 팁 | subClassOf, disjointWith, domain/range 등 |
| 78 | SHACL 설계 팁 | minCount, datatype, enum, pattern 등 |
| 79 | 리뷰 체크리스트 | 범위, 정의, 재사용, 검증, 운영 |
| 80 | 참고문헌 | 주요 검증 자료 요약 |

## 사용 모드

- 전체 보기: `/slides/`
- 발표 모드: `/slides/?mode=presentation`
- 인쇄/전체 펼침: `/slides/?print=1`
