# 검증 출처 레지스트리

확인일: 2026-07-21

이 문서는 교안의 사실 주장에 사용할 출처의 정본입니다. 표준 설명은 W3C Recommendation, 방법론은 원 논문·저자 기관, 사례는 해당 프로젝트의 공식 문서·저장소를 우선합니다. `docs/seminar-page-list.md`와 `docs/source-matrix.md`는 아래 ID를 참조합니다.

## M01 — Gruber 1993, portable ontology specification

- 출처: Thomas R. Gruber, *A Translation Approach to Portable Ontology Specifications*.
- URL: <https://tomgruber.org/writing/ontolingua-kaj-1993/>
- 검증 범위: 공유 지식의 표현 어휘를 명세하는 이유, “conceptualization의 explicit specification”이라는 고전적 정의, 이식성과 재사용 문제.

## M02 — Gruber 1995, ontology design principles

- 출처: Thomas R. Gruber, *Toward Principles for the Design of Ontologies Used for Knowledge Sharing*.
- URL: <https://tomgruber.org/writing/onto-design.htm>
- 검증 범위: clarity, coherence, extendibility, minimal encoding bias, minimal ontological commitment.

## M03 — Ontology Development 101

- 출처: Natalya F. Noy, Deborah L. McGuinness, Stanford University.
- URL: <https://protege.stanford.edu/publications/ontology_development/ontology101-noy-mcguinness.html>
- PDF: <https://protege.stanford.edu/publications/ontology_development/ontology101.pdf>
- 검증 범위: 공통 어휘의 필요, 도메인·범위 결정, 재사용 검토, 용어 열거, 클래스·속성·제약·인스턴스 구축, 반복 개발, “유일한 정답 모델은 없다”는 원칙.

## M04 — METHONTOLOGY

- 출처: Mariano Fernández-López, Asunción Gómez-Pérez, Natalia Juristo, 1997.
- URL: <https://oa.upm.es/5484/1/METHONTOLOGY_.pdf>
- 검증 범위: ontology 구축을 art에서 engineering으로 전환하려는 배경, specification–conceptualization–formalization–integration–implementation–maintenance 생명주기, evolving prototype, 전 과정의 지식 획득·평가·문서화.

## M05 — Grüninger & Fox competency questions

- 출처: Michael Grüninger, Mark S. Fox, *Methodology for the Design and Evaluation of Ontologies* / enterprise modelling papers.
- URL: <https://www.eil.utoronto.ca/enterprise-modelling/papers/gruninger-ijcai95.pdf>
- 검증 범위: motivating scenario에서 competency question을 도출하고, ontology가 질문을 답할 수 있는지를 요구사항·평가 기준으로 사용하는 접근.

## M06 — NeOn Methodology

- 출처: Ontology Engineering Group, Universidad Politécnica de Madrid.
- URL: <https://oeg.fi.upm.es/index.php/en/methodologies/59-neon-methodology/index.html>
- 논문: <https://doi.org/10.3233/AO-150145>
- 검증 범위: ontology network 구축의 아홉 시나리오, ontology·비ontology 자원과 design pattern의 재사용, re-engineering·merging·협업·동적 진화.

## M07 — OBO Foundry Principles

- 출처: OBO Foundry Technical Working Group.
- URL: <https://obofoundry.org/principles/fp-000-summary.html>
- 관계 재사용: <https://obofoundry.org/principles/fp-007-relations.html>
- 검증 범위: 개방성, 공통 형식, 고유 IRI, 버전, 범위, 텍스트 정의, 관계 재사용, 문서화, 책임자, 변경 통지, 유지보수와 용어 의미 안정성.

## S01 — RDF 1.1 Concepts

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/rdf11-concepts/>
- 검증 범위: RDF graph는 subject–predicate–object triple의 집합이며 IRI·blank node·literal로 자원을 기술한다.

## S02 — RDF Schema 1.1

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/rdf-schema/>
- 검증 범위: class, property, type, subClassOf, subPropertyOf, domain, range의 기본 의미.

## S03 — OWL 2 Overview

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/owl2-overview/>
- 검증 범위: 공유 도메인의 formalized vocabulary, class·property·individual·data value, 형식 의미, 추론과 OWL 2 profile.

## S04 — OWL 2 Primer

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/owl2-primer/>
- 검증 범위: class expression, property restriction, individual, disjointness, ontology management 및 open-world 환경에서의 모델링 예시.

## S05 — SKOS Reference

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/skos-reference/>
- 검증 범위: taxonomy·thesaurus·classification scheme 등 knowledge organization system을 공유·연결하기 위한 경량 데이터 모델, concept label·hierarchy·mapping.

## S06 — SHACL

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/shacl/>
- 검증 범위: shapes graph 조건으로 data graph를 검증하는 언어, focus node·shape·constraint·validation result.

## S07 — SPARQL 1.1 Query

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/sparql11-query/>
- 검증 범위: RDF graph와 dataset을 위한 pattern 기반 질의, SELECT·CONSTRUCT·ASK·DESCRIBE.

## S08 — JSON-LD 1.1

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/json-ld11/>
- 검증 범위: JSON 기반 linked data 직렬화와 context를 통한 용어의 IRI 매핑.

## S09 — PROV-O

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/prov-o/>
- 검증 범위: Entity·Activity·Agent와 생성·사용·책임 관계를 이용한 provenance 표현.

## S10 — Data on the Web Best Practices

- 출처: W3C Recommendation.
- URL: <https://www.w3.org/TR/dwbp/>
- 검증 범위: persistent URI, 버전 식별자, provenance·quality·license metadata, 표준 vocabulary 재사용, 목적에 맞는 formalization level.

## C01 — Gene Ontology ontology documentation

- 출처: Gene Ontology Consortium 공식 문서.
- URL: <https://geneontology.org/docs/ontology-documentation/>
- 검증 범위: 표준화된 생물학 개념과 형식 관계, 고유 GO ID, 텍스트 정의와 출처, 동적·협업적 유지보수.

## C02 — Gene Ontology annotations

- 출처: Gene Ontology Consortium 공식 문서.
- URL: <https://geneontology.org/docs/go-annotations/>
- 검증 범위: gene product–GO term–relation을 잇는 annotation, reference와 evidence code, ontology와 annotation의 분리.

## C03 — Schema.org documentation

- 출처: Schema.org 공식 문서.
- URL: <https://schema.org/docs/documents.html>
- schema 구조: <https://schema.org/docs/schemas.html>
- 검증 범위: type·property hierarchy, machine-readable vocabulary, release와 community extension.

## C04 — Schema.org governance repository

- 출처: Schema.org 공식 GitHub 저장소.
- URL: <https://github.com/schemaorg/schemaorg>
- 검증 범위: issue·PR·community review·release 기반의 점진적 진화, 대규모 웹 사용성을 위해 형식적 순수성보다 실용성을 선택하는 설계 trade-off.

## C05 — FIBO

- 출처: EDM Council 공식 저장소.
- URL: <https://github.com/edmcouncil/fibo>
- 검증 범위: 금융 업무에서 관심 있는 개념과 관계를 형식화하고 spreadsheet·RDB·XML 데이터에 공통 의미를 부여하는 ontology 사례.

## P01 — 과정 시놉시스

- 출처: [`docs/seminar-synopsis.md`](seminar-synopsis.md)
- 검증 범위: 청자, 학습 목표, 반도체 관통 시나리오, 과정 범위. 외부 사실이 아니라 프로젝트의 교육 설계 결정이다.

## P02 — 반도체 failure ontology 예제

- 출처: [`examples/semiconductor-failure-ontology.ttl`](../examples/semiconductor-failure-ontology.ttl)
- 검증 범위: 교육용 class·property·instance·signature 모델. 실제 회사나 제품의 데이터가 아니다.

## P03 — 반도체 failure SHACL 예제

- 출처: [`examples/semiconductor-failure-shapes.ttl`](../examples/semiconductor-failure-shapes.ttl)
- 검증 범위: 교육용 evidence·signature·confidence 제약. 실제 품질 기준이나 산업 표준이 아니다.

## P04 — 교육용 Failure Knowledge Hub 시나리오

- 출처: [`docs/course-design.md`](course-design.md)
- 검증 범위: timeout·assertion·build·environment failure를 연결하는 가상 시나리오와 예시 KPI. 수치는 벤치마크 결과가 아니며 후속 실험 전에는 목표값으로도 제시하지 않는다.

## 사용 원칙

- “ontology를 쓰면 RAG 정확도가 자동 향상된다”처럼 보편적으로 검증되지 않은 인과 주장은 하지 않는다.
- 예시 KPI는 정의·계산식·측정 계획으로만 제시하고 실측치처럼 표현하지 않는다.
- 표준과 방법론을 교안에 옮길 때는 짧게 의역하고 원문 장문 인용을 피한다.
- 외부 이미지나 도표를 복제하지 않는다. 구조는 출처에 근거하되 시각물은 새로 제작하고 출처를 표기한다.
