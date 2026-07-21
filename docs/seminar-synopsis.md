# Ontology 지식관리 방법론 — 세미나 시놉시스

## 목표

이 세미나는 온톨로지를 철학적 개념이나 Semantic Web 용어로만 설명하지 않는다. 실무자가 실제로 지식관리 체계를 만들 때 필요한 절차를 다음 순서로 익히게 한다.

1. 조직에서 의미 충돌이 왜 생기는지 이해한다.
2. ontology를 glossary, taxonomy, schema, knowledge graph와 구분한다.
3. RDF/RDFS/OWL/SKOS/SHACL/SPARQL의 역할을 한 장씩 파악한다.
4. competency question을 기준으로 범위를 잡고, 재사용 가능한 개념/관계/제약을 설계한다.
5. Turtle, SHACL, SPARQL 예시를 통해 작은 ontology를 테스트 가능한 산출물로 만든다.
6. 운영 단계에서 버전, 소유자, 변경 절차, 품질 지표를 관리한다.

## 청자

- 반도체 설계/검증/소프트웨어 엔지니어
- RAG/Agent/검색 시스템에서 “의미 레이어”가 필요한 실무자
- 데이터 거버넌스, 품질검증, 용어 표준화에 관여하는 엔지니어

## 핵심 메시지

> Ontology는 의미를 코드처럼 관리하는 방법이다.

즉, ontology는 분류표를 예쁘게 그리는 작업이 아니라 “조직이 합의한 의미”를 기계가 읽고, 검증하고, 질의하고, 재사용할 수 있게 운영하는 방법론이다.

## 관통 시나리오

**Regression failure triage ontology**를 예시로 사용한다.

- 입력: regression log, Jira issue, test case, IP block, 담당자 규칙
- 문제: timeout/hang/TMO 같은 단어가 팀·도구마다 다르게 쓰임
- 목표: failure를 의미 있는 class/property로 모델링하고, evidence와 confidence를 검증하며, 재발 signature와 관련 issue를 SPARQL로 찾는다.

## 방법론: CRAFT

| 단계 | 의미 | 산출물 |
|---|---|---|
| C — Context | 업무 질문과 성공 지표 정의 | use case, scope, 제외 범위 |
| Q — Questions | competency question 작성 | CQ 목록, acceptance 기준 |
| R — Reuse | 기존 용어/표준/데이터 재사용 | source inventory, term inventory |
| A — Architecture | class/property/module/IRI 설계 | concept map, taxonomy, relation model |
| F — Formalize | TTL/OWL/SHACL/instance 작성 | ontology file, shapes, example data |
| T — Test/Operate | SPARQL 테스트와 운영 체계 | CQ query, CI, version, governance |

## 발표 시간 가이드

- 90분: 본편 중심, READ/APPENDIX 스킵
- 120분: 사례와 실습 슬라이드까지 자세히 진행
- 30분 압축: 도입 5분, 정의 7분, CRAFT 10분, 예시 8분

작성일: 2026-07-21
