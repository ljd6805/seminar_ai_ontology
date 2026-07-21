# CRAFT ontology 구축 체크리스트

> CRAFT는 Ontology 101·METHONTOLOGY·Grüninger & Fox·NeOn·OBO Foundry를 실무 교육용으로 합성한 5단계 프레임이다. 근거는 [`course-design.md`](course-design.md)를 참조한다.

## C — Context & Competency Questions

- [ ] 업무 결정을 한 문장으로 썼다.
- [ ] 사용자와 소비 시스템을 정했다.
- [ ] competency question을 주체·관계·조건·기대 답 형태로 썼다.
- [ ] 포함 범위와 제외 범위를 적었다.
- [ ] 성공 신호의 정의와 측정 계획을 적었다.
- 통과 조건: 우선순위 CQ마다 예상 답과 acceptance 기준이 있다.

## R — Reuse & Requirements

- [ ] 내부 용어집·DB schema·issue·문서·코드·log를 수집했다.
- [ ] 외부 표준 vocabulary·ontology·design pattern을 조사했다.
- [ ] 후보별 권위·scope·license·stability·fit을 평가했다.
- [ ] adopt·map·extend·reject 결정을 이유와 함께 기록했다.
- [ ] 품질·성능·보안·release·운영 요구사항을 적었다.
- 통과 조건: 새로 만드는 개념마다 재사용하지 못한 이유가 있다.

## A — Architecture & Alignment

- [ ] label·concept·class·property·instance 후보를 분리했다.
- [ ] class hierarchy와 관계를 자연어 문장으로 검증했다.
- [ ] relation의 domain/range와 재사용 IRI를 검토했다.
- [ ] stable IRI·prefix·naming·deprecation 규칙을 정했다.
- [ ] core·domain·application module 경계를 정했다.
- [ ] provenance와 domain owner·maintainer·consumer 역할을 정했다.
- 통과 조건: 각 CQ가 어떤 concept·relation·module을 필요로 하는지 추적된다.

## F — Formalize & Fill

- [ ] SKOS/RDFS/OWL 중 필요한 formalization level을 선택했다.
- [ ] label·definition·example·source annotation을 작성했다.
- [ ] Turtle 또는 JSON-LD syntax 검사를 통과했다.
- [ ] 대표 instance와 source-to-ontology mapping을 만들었다.
- [ ] SHACL shape와 valid/invalid fixture를 작성했다.
- 통과 조건: ontology·mapping·instance·shape가 같은 IRI와 용어를 일관되게 사용한다.

## T — Test & Tend

- [ ] CQ를 SPARQL·reasoner·SHACL test로 바꿨다.
- [ ] positive·negative·edge fixture를 만들었다.
- [ ] version IRI 또는 release tag와 change log를 정했다.
- [ ] 문서·license·provenance·owner 정보를 배포물에 포함했다.
- [ ] change request·review·deprecation·stakeholder notification 절차를 정했다.
- [ ] 품질 지표의 정의·계산식·측정 주기를 정했다.
- 통과 조건: release 이후 누가 어떤 신호를 보고 다음 변경을 승인하는지 명확하다.
