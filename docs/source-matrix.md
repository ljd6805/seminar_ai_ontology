# 주장–출처 매트릭스

확인일: 2026-07-21

`검증됨`은 1차·공식 출처가 해당 설명을 직접 지지한다는 뜻이다. `프로젝트 결정`은 과정 구성이나 교육용 통합 방식이며 외부의 보편 명제로 주장하지 않는다. `교육용 가정`은 반도체 관통 예제에만 적용한다.

| Claim ID | 핵심 주장 | 상태 | 적용 슬라이드 | 근거 | 사용 경계 |
|---|---|---|---|---|---|
| CL01 | ontology는 공유 지식을 표현할 공통 어휘와 명시적 개념화를 제공한다. | 검증됨 | 8, 10, 17–20 | M01, M03, S03 | 정의 문구는 짧게 의역한다. |
| CL02 | ontology 구축에는 목적에 따라 여러 타당한 모델이 존재하며 반복 개발이 필요하다. | 검증됨 | 11–13, 38–39 | M03, M04 | “정답이 없다”를 품질 기준 부재로 오해시키지 않는다. |
| CL03 | METHONTOLOGY는 구축을 art에서 engineering으로 전환하고 생명주기·산출물·평가·문서화를 명시하려 했다. | 검증됨 | 10–14, 48–60 | M04 | 1997년 원 논문의 범위를 현대 표준과 혼동하지 않는다. |
| CL04 | competency question은 범위와 ontology competency 평가의 기준이 될 수 있다. | 검증됨 | 14, 38, 50–52, 62, 68, 75 | M05, M03 | CQ를 유일한 요구사항 기법으로 주장하지 않는다. |
| CL05 | NeOn은 ontology·비ontology 자원 재사용, re-engineering, merging, collaboration을 scenario로 다룬다. | 검증됨 | 14–15, 40, 53 | M06 | 아홉 scenario 전체 암기보다 reuse 선택 논리를 가르친다. |
| CL06 | OBO Foundry는 scope·IRI·version·definition·relation reuse·authority·maintenance를 운영 원칙으로 요구한다. | 검증됨 | 14–15, 41–46, 56, 60, 71 | M07 | 생명과학 전용 PURL 형식을 일반 업무에 강제하지 않는다. |
| CL07 | CRAFT는 여러 방법론을 다섯 단계로 재구성한 교육용 통합 프레임이다. | 프로젝트 결정 | 15, 47–60, 74–75 | M03, M04, M05, M06, M07, P01 | 표준·원 논문·검증된 독립 방법론으로 표현하지 않는다. |
| CL08 | RDF graph는 subject–predicate–object triple의 집합이다. | 검증됨 | 26–27 | S01 | 직렬화 문법과 추상 데이터 모델을 구분한다. |
| CL09 | RDFS는 class/property hierarchy와 domain/range 같은 기본 schema 어휘를 제공한다. | 검증됨 | 28 | S02 | domain/range를 입력 검증 제약으로 가르치지 않는다. |
| CL10 | OWL 2는 형식 의미를 가진 ontology 언어이며 class·property·individual을 사용해 추론을 지원한다. | 검증됨 | 22, 29, 34–36, 45 | S03, S04 | OWL의 모든 profile·description logic을 입문 범위에 넣지 않는다. |
| CL11 | SKOS는 taxonomy·thesaurus·classification scheme 같은 KOS를 공유·연결하는 경량 모델이다. | 검증됨 | 21, 30 | S05 | SKOS와 OWL을 우열이 아닌 목적·표현력 선택으로 설명한다. |
| CL12 | SHACL은 shapes graph 조건으로 RDF data graph를 검증한다. | 검증됨 | 31, 35–36, 58–59, 67 | S06, P03 | OWL inference와 SHACL validation을 대체 관계로 설명하지 않는다. |
| CL13 | SPARQL은 RDF graph와 dataset을 pattern으로 질의한다. | 검증됨 | 32, 59, 68 | S07 | 예제 query의 결과는 fixture 데이터에만 해당한다. |
| CL14 | JSON-LD context는 JSON 용어를 IRI에 매핑해 linked data로 표현할 수 있게 한다. | 검증됨 | 33 | S08 | JSON-LD가 유일한 RDF serialization은 아니다. |
| CL15 | provenance는 Entity·Activity·Agent와 책임·생성·사용 관계로 표현할 수 있다. | 검증됨 | 7, 44, 56, 60, 69 | S09 | 모든 provenance 요구에 PROV-O 전체를 사용해야 한다고 주장하지 않는다. |
| CL16 | persistent identifier, version, provenance, shared vocabulary는 재사용·상호운용·신뢰에 기여하는 publication practice다. | 검증됨 | 40–46, 60 | S10, M07 | “ontology만 있으면 신뢰된다”는 식의 인과를 피한다. |
| CL17 | Gene Ontology는 고유 ID·정의·형식 관계·evidence annotation·협업 유지보수를 결합한다. | 검증됨 | 71 | C01, C02 | 생물학 성과 수치를 별도 근거 없이 추가하지 않는다. |
| CL18 | Schema.org는 type/property hierarchy와 community release를 운영하며 웹 사용성을 위해 실용적 trade-off를 택한다. | 검증됨 | 72 | C03, C04 | 현재 type 수처럼 빠르게 변하는 수치는 슬라이드에 고정하지 않는다. |
| CL19 | FIBO는 금융 개념과 관계를 formal ontology로 제공해 이질적 데이터에 공통 의미를 부여하려 한다. | 검증됨 | 73 | C05 | 도입 효과나 산업 채택률을 근거 없이 정량화하지 않는다. |
| CL20 | 반도체 failure ontology·shape·query는 방법론 연결을 보여주는 가상 교육 예제다. | 교육용 가정 | 4–7, 24, 61–69 | P02, P03, P04 | 실제 제품·회사·산업 표준 또는 실측 정확도로 표현하지 않는다. |
| CL21 | ontology를 RAG/Agent에 연결할 때 concept linking·evidence·human approval를 설계할 수 있다. | 프로젝트 결정 | 7, 69 | S09, P04 | 자동 정확도 향상이나 환각 제거를 보장하지 않는다. |
| CL22 | 단순하고 안정적인 단일 시스템의 코드표에는 ontology가 과할 수 있다. | 프로젝트 결정 | 70 | M03, S10, P04 | 선택 기준을 시스템 수·관계 복잡도·추론/검증 필요·운영 비용으로 제시한다. |

## 방법론 합성 추적

| CRAFT 단계 | 주된 근거 | 이 과정의 번역 |
|---|---|---|
| C — Context & Competency Questions | M03, M04, M05 | use case·CQ·scope·성공 신호를 하나의 requirements gate로 묶는다. |
| R — Reuse & Requirements | M03, M06, S10 | 표준·ontology·코드·문서·DB를 조사하고 채택/매핑/확장 결정을 남긴다. |
| A — Architecture & Alignment | M03, M04, M06, M07 | concept·relation·IRI·module·owner·provenance를 함께 설계한다. |
| F — Formalize & Fill | M04, S01, S02, S03, S05, S06, S08 | 표현력에 맞는 언어를 고르고 instance·mapping·shape를 작성한다. |
| T — Test & Tend | M04, M05, M07, S06, S07, S09, S10 | CQ test·reasoning·validation·release·maintenance를 한 운영 loop로 연결한다. |

## 후속 저작 규칙

1. 슬라이드의 외부 사실에는 이 문서의 Claim ID 또는 `docs/references.md` Source ID를 노트/각주에 연결한다.
2. 새로운 수치·제품 기능·사례 성과를 추가하려면 출처와 확인일을 먼저 등록한다.
3. 출처가 직접 말하지 않은 해석은 “과정의 해석”, “설계 선택”, “교육용 예”로 표시한다.
4. reference의 도표를 그대로 복제하지 않고 핵심 관계를 새 시각물로 재구성한다.
