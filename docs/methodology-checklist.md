# CRAFT Ontology 구축 체크리스트

## C — Context

- [ ] 업무 use case를 한 문장으로 썼다.
- [ ] 청중/소비 시스템을 정했다.
- [ ] 성공 지표를 2~5개 정했다.
- [ ] 제외 범위를 적었다.

## Q — Questions

- [ ] competency question 5~10개를 썼다.
- [ ] 각 CQ의 acceptance 기준을 적었다.
- [ ] CQ가 실제 데이터로 답 가능한지 확인했다.
- [ ] CQ 우선순위를 정했다.

## R — Reuse

- [ ] 기존 내부 용어집/DB/Jira/문서/코드를 수집했다.
- [ ] 외부 표준 vocabulary 또는 ontology를 조사했다.
- [ ] 재사용할 class/property/annotation을 표시했다.
- [ ] 새로 만들 개념과 이유를 기록했다.

## A — Architecture

- [ ] class 후보를 정리했다.
- [ ] property 후보와 domain/range를 정했다.
- [ ] IRI/prefix/naming rule을 정했다.
- [ ] module 경계를 정했다.
- [ ] 도메인 전문가 리뷰를 받았다.

## F — Formalize

- [ ] TTL/OWL 파일을 작성했다.
- [ ] label/comment/definition을 넣었다.
- [ ] 예시 instance 3개 이상을 만들었다.
- [ ] SHACL shape를 작성했다.
- [ ] syntax 검사를 통과했다.

## T — Test/Operate

- [ ] CQ를 SPARQL 질의로 바꿨다.
- [ ] SHACL 검증을 CI에 연결했다.
- [ ] version IRI 또는 release tag를 정했다.
- [ ] maintainer와 변경 승인 절차를 정했다.
- [ ] deprecation 정책을 정했다.
- [ ] 월간 품질 지표를 정했다.
