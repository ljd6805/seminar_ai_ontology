# Ontology 지식관리 방법론 — 진행 노트

이 노트는 75장 승인 맵을 기준으로 한다. 현재 80장 HTML 초안은 후속 콘텐츠 PR에서 이 번호 체계로 맞춘다.

## 진행 원칙

- ontology를 “무거운 철학”이나 “graph DB 제품”으로 단정하지 않고, 합의된 의미를 명세·검증·운영하는 선택지로 설명한다.
- 표준 이름을 나열하지 말고 각 표준이 답하는 질문을 고정한다.
- 외부 사실, 과정의 설계 결정, 교육용 가정을 구분한다.
- “ontology가 RAG 정확도를 높인다” 같은 미검증 인과를 말하지 않는다. concept linking·provenance·human approval 패턴으로 한정한다.
- CRAFT가 기존 학술 방법론이 아니라 검증 요소를 묶은 교육용 합성임을 15장과 47장에서 반복 확인한다.

## 구간별 핵심

### 1–7 문제와 학습 계약

- 같은 `timeout`이 여러 팀에서 다른 뜻을 가질 때 생기는 판단 비용을 떠올리게 한다.
- 7장은 AI 효과 주장이 아니라 “답변 근거를 어떤 개념·출처·책임과 연결할 것인가”라는 설계 질문이다.

### 8–15 방법론의 탄생

- Gruber의 portable specification, METHONTOLOGY의 art-to-engineering, Grüninger & Fox의 CQ, NeOn의 reuse, OBO의 governance를 연결한다.
- 각 방법론을 우열로 비교하지 않고 채운 공학적 빈칸으로 비교한다.

### 16–24 정의와 구성요소

- glossary/taxonomy/schema/ontology/KG는 절대적 서열이 아니라 목적·표현력·운영비용의 선택이다.
- label과 IRI, class와 individual, ontology schema와 graph data를 분리한다.

### 25–36 표준 스택

- RDF: graph data model.
- RDFS/OWL: 명시한 의미와 entailment.
- SKOS: 경량 KOS.
- SHACL: data graph validation.
- SPARQL: graph query.
- Turtle/JSON-LD: serialization.
- domain/range를 DB 입력 제약처럼 설명하지 않고, OWL/RDFS와 SHACL의 역할을 분리한다.

### 37–46 구성 원리

- 모델의 크기보다 CQ 적합성, scope, stable IRI, textual definition, provenance, owner를 강조한다.
- 형식화 수준은 “가장 강한 언어”가 아니라 필요한 추론·교환·검증에 맞춰 고른다.

### 47–60 CRAFT 생명주기

- C: Context & Competency Questions
- R: Reuse & Requirements
- A: Architecture & Alignment
- F: Formalize & Fill
- T: Test & Tend
- 각 단계에서 활동보다 산출물과 통과 조건을 확인한다.

### 61–69 반도체 예시

- 교육용 가상 시나리오이며 산업 표준·실측 데이터가 아님을 먼저 밝힌다.
- CQ → inventory → concept/relation → Turtle → SHACL → SPARQL → human approval를 한 줄로 회수한다.

### 70–75 사례·선택·행동

- GO는 identifier·definition·evidence·maintenance, Schema.org는 pragmatic evolution, FIBO는 formal business meaning에 초점을 둔다.
- 마지막은 Q&A가 아니라 학습자가 자신의 CQ·제외 범위·owner를 적는 행동으로 끝낸다.

## 자주 나오는 질문

### Knowledge Graph와 ontology는 무엇이 다른가?

이 과정에서는 knowledge graph를 개체·관계 statement의 운용 데이터로, ontology를 그 graph에서 사용하는 개념·관계·공리의 의미 명세로 구분한다. 업계 전체의 유일한 정의가 아니라 학습을 위한 convention이며 둘은 함께 사용될 수 있다.

### OWL까지 반드시 써야 하는가?

아니다. taxonomy·thesaurus는 SKOS, 기본 schema와 hierarchy는 RDFS, 데이터 계약은 SHACL만으로 충분할 수 있다. 필요한 inference가 분명할 때 OWL 표현력을 추가한다.

### LLM이 ontology를 자동 생성하면 되는가?

용어 후보·초안·mapping 제안에는 보조적으로 쓸 수 있다. 그러나 scope, concept identity, relation meaning, source authority, acceptance test, owner 결정은 검토 가능한 사람의 책임으로 남긴다.

### 반도체 업무에서는 어디서 시작하는가?

반복되고, 여러 시스템을 가로지르며, 용어 충돌이 있고, 답을 검증할 수 있는 질문 하나를 고른다. 이 교안에서는 regression failure triage를 가상 예제로 사용한다.

작성일: 2026-07-21
