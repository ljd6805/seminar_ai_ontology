# 75장 자율학습 교안 설계

## Communication job

이 교안이 끝나면 **반도체·소프트웨어·데이터 실무자**는 **업무 질문 하나에서 출발해 작고 검증 가능하며 운영 책임이 있는 ontology v0.1을 설계할 수 있어야 한다.** 그 이유는 ontology가 단순한 분류표가 아니라 합의된 의미를 식별자·관계·제약·테스트·변경 절차로 관리하는 공학 산출물이기 때문이다.

## 청자와 전제

- 주 청자: 반도체 설계·검증·소프트웨어 엔지니어, 데이터·AI 지식관리 입문 실무자
- 전제 지식: 표·JSON·API·Git의 기본 개념. RDF나 논리학 경험은 요구하지 않는다.
- 학습 방식: 75장 자율학습. 발표에서는 사례·부록성 슬라이드를 선택적으로 건너뛸 수 있다.
- 관통 예제: 실제 회사와 무관한 가상 `Regression failure triage` 지식 허브

## 학습 성과

학습자는 다음을 수행할 수 있어야 한다.

1. ontology가 등장한 공유·재사용·상호운용성 문제를 설명한다.
2. glossary, taxonomy, schema, knowledge graph, ontology의 역할을 목적과 표현력 관점에서 구분한다.
3. RDF/RDFS/OWL/SKOS/SHACL/SPARQL/JSON-LD의 역할과 추론·검증의 차이를 설명한다.
4. competency question을 작성하고 v0.1의 포함·제외 범위를 정한다.
5. 기존 자산을 조사한 뒤 class·property·IRI·module·constraint를 설계한다.
6. Turtle·SHACL·SPARQL 산출물을 연결해 요구사항을 테스트한다.
7. owner·version·provenance·change review·release 기준을 정의한다.

## 서사 구조

| 구간 | 장수 | 학습 질문 | 다음 구간으로 넘기는 긴장 |
|---|---:|---|---|
| 1. 문제와 학습 계약 | 1–7 | 같은 데이터가 왜 팀마다 다른 뜻이 되는가? | 단어를 모으는 것만으로 해결되지 않는다. |
| 2. 방법론의 탄생 | 8–15 | ontology engineering은 어떤 실패를 줄이려 나왔나? | 정의와 경계를 먼저 세워야 한다. |
| 3. 정의와 구성요소 | 16–24 | ontology는 다른 지식 구조와 무엇이 다른가? | 개념을 기계가 다룰 표준 표현이 필요하다. |
| 4. 표준 스택 | 25–36 | 표현·추론·검증·질의는 어떻게 나뉘는가? | 도구보다 설계 원리가 먼저다. |
| 5. 구성 원리 | 37–46 | 좋은 모델을 결정하는 기준은 무엇인가? | 원리를 반복 가능한 절차로 묶어야 한다. |
| 6. CRAFT 생명주기 | 47–60 | 무엇을 어떤 순서와 산출물로 만드는가? | 실제 업무 사례에서 끝까지 연결해야 한다. |
| 7. 반도체 관통 예제 | 61–69 | CQ가 TTL·SHACL·SPARQL로 어떻게 변하는가? | 구축 후 운영 가치와 한계를 판단해야 한다. |
| 8. 사례·선택·행동 | 70–75 | 언제 쓰고, 어떻게 작게 시작할 것인가? | 자신의 첫 CQ로 v0.1을 시작한다. |

## CRAFT의 위치

CRAFT는 논문이나 표준에 이미 존재하는 이름이 아니라, 여러 검증된 접근을 학습자가 기억하기 쉽게 재구성한 **교육용 통합 프레임**이다. 각 단계의 근거를 분리해 표시하며 CRAFT 자체를 새로운 학술 방법론으로 주장하지 않는다.

### C — Context & Competency Questions

- 목적·사용자·업무 결정·성공 신호·제외 범위를 정한다.
- motivating scenario와 competency question을 요구사항 및 acceptance test의 출발점으로 사용한다.
- 근거: Ontology 101의 domain/scope, Grüninger & Fox의 CQ 접근, METHONTOLOGY specification.

### R — Reuse & Requirements

- ontology·taxonomy·코드표·DB schema·문서·로그·전문가 지식을 조사한다.
- 채택·매핑·확장·보류 결정을 근거와 함께 기록한다.
- 근거: Ontology 101의 reuse first, NeOn의 reuse/re-engineering scenario, W3C DWBP의 shared vocabulary 권고.

### A — Architecture & Alignment

- term inventory를 concept·class·property·constraint 후보로 정리한다.
- hierarchy, relation, IRI, module, provenance, ownership 경계를 설계한다.
- 근거: Ontology 101 conceptual modeling, METHONTOLOGY conceptualization/integration, NeOn network alignment, OBO Foundry principles.

### F — Formalize & Fill

- 필요한 표현력에 맞춰 SKOS/RDFS/OWL을 선택하고 Turtle 또는 JSON-LD로 직렬화한다.
- instance mapping과 SHACL shape를 함께 작성해 “의미 모델”과 “입력 계약”을 구분한다.
- 근거: W3C RDF/RDFS/OWL/SKOS/SHACL/JSON-LD, METHONTOLOGY formalization/implementation.

### T — Test & Tend

- CQ를 SPARQL·reasoner·SHACL 테스트로 바꾸고 regression fixture를 만든다.
- 문서·버전·release·owner·change review·deprecation·feedback 채널을 운영한다.
- 근거: Grüninger & Fox evaluation, METHONTOLOGY evaluation/documentation/maintenance, OBO Foundry governance, W3C PROV-O·DWBP.

## 방법론별 기여와 한계

| 접근 | 이 과정이 차용하는 것 | 단독 적용 시 보완할 점 |
|---|---|---|
| Ontology 101 | 입문자가 따라갈 수 있는 반복형 구축 순서 | 네트워크 재사용·조직 거버넌스를 더 보강한다. |
| Grüninger & Fox | motivating scenario, CQ, competency evaluation | 실무 구현·release 운영 절차를 더한다. |
| METHONTOLOGY | 생명주기, 산출물, 전 과정 평가·문서화 | 현대 표준 스택과 CI 형태로 번역한다. |
| NeOn | reuse, re-engineering, alignment, collaboration, ontology network | 작은 팀이 적용할 최소 절차로 축약한다. |
| OBO Foundry | IRI·scope·definition·version·relations·authority·maintenance 원칙 | 생명과학 전용 규칙은 일반화 가능한 원칙만 차용한다. |

## 학습 확인

- 15장: 다섯 방법론이 각각 해결한 빈칸을 연결한다.
- 24장: 같은 `timeout` 예를 glossary/taxonomy/schema/ontology로 각각 표현해 본다.
- 36장: “추론”과 “검증”에 서로 다른 테스트를 고른다.
- 46장: 목적·범위·IRI·owner가 없는 모델의 위험을 찾아낸다.
- 60장: 각 CRAFT 단계의 산출물과 통과 조건을 한 줄로 적는다.
- 69장: CQ → model → data → SHACL → SPARQL → human approval 흐름을 설명한다.
- 75장: 자신의 업무 CQ 하나와 v0.1 제외 범위를 작성한다.

## 콘텐츠와 시각 원칙

- 한 장에는 하나의 질문 또는 결론만 둔다.
- 출처가 필요한 외부 사실과 교육용 가정을 시각적으로 구분한다.
- 그래프는 관계가 핵심일 때만 사용하고, 단계 공개 애니메이션은 인과·순서 설명에만 쓴다.
- 자동 애니메이션은 최초 1회만 재생하고 수동 replay와 `prefers-reduced-motion`을 제공한다.
- 실제 수치가 없는 KPI는 “측정 정의”로만 제시한다.
