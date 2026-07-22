# Ontology 지식관리 방법론 — 교안 슬라이드

반도체 설계/검증/소프트웨어 엔지니어가 **온톨로지 기반 지식관리 방법론**을 기초부터 따라 배울 수 있도록 만든 공개 세미나 자료입니다.

## 바로 보기

- [GitHub Pages에서 바로 보기](https://ljd6805.github.io/seminar_ai_ontology/slides/)
- [슬라이드 보기](slides/)
- [발표 모드](slides/?mode=presentation) — 본편 중심, READ/APPENDIX 제외
- [인쇄/전체 펼침](slides/?print=1)
- [QA 보고서](docs/qa-report.md)

## 제작 상태

검증된 출처와 승인된 학습 맵을 반영한 **75장 완성 웹 교안**을 제공합니다. 기존 80장 초안 청크는 변경 이력 보존을 위해 남겨 두었고 공개 진입점은 새 데이터 기반 교안으로 전환했습니다. PDF가 필요하면 `?print=1` 화면을 브라우저에서 열고 나중에 직접 PDF로 저장할 수 있습니다.

## 문서

| 문서 | 내용 |
|---|---|
| [docs/seminar-synopsis.md](docs/seminar-synopsis.md) | 세미나 목표, 청자, 핵심 메시지, 구성 |
| [docs/course-design.md](docs/course-design.md) | 75장 학습 설계, CRAFT 통합 근거, 학습 확인 |
| [docs/design-system.md](docs/design-system.md) | v3 엔지니어링 에디토리얼 디자인·모션·접근성 규칙 |
| [docs/seminar-page-list.md](docs/seminar-page-list.md) | 75장 슬라이드별 목표·근거·시각 계획 |
| [docs/source-matrix.md](docs/source-matrix.md) | 주장 상태, 적용 슬라이드, 출처와 사용 경계 |
| [docs/speaker-notes.md](docs/speaker-notes.md) | 발표자 노트와 진행 팁 |
| [docs/methodology-checklist.md](docs/methodology-checklist.md) | CRAFT 방법론 실무 체크리스트 |
| [docs/references.md](docs/references.md) | 자료 조사 근거와 확인일 |
| [examples/semiconductor-failure-ontology.ttl](examples/semiconductor-failure-ontology.ttl) | 반도체 regression failure 예시 ontology |
| [examples/semiconductor-failure-shapes.ttl](examples/semiconductor-failure-shapes.ttl) | SHACL 검증 예시 |
| [examples/find-similar-failures.rq](examples/find-similar-failures.rq) | 같은 signature의 과거 failure를 찾는 SPARQL 예시 |
| [examples/README.md](examples/README.md) | 유효/무효 fixture 학습 순서 |

## 한눈에

- **목표**: ontology를 “개념 설명”으로 끝내지 않고, 용어 합의 → graph 모델링 → 검증 → 운영까지 실무 절차로 익히기
- **청자**: 반도체 설계/검증/소프트웨어 엔지니어, 데이터/AI 지식관리 입문자
- **학습 방식**: 자율학습 중심, 발표 시 약 90~120분
- **핵심 메시지**: *Ontology는 의미를 코드처럼 관리하는 방법이다.*
- **관통 시나리오**: Regression failure triage 지식관리 — timeout/assertion/build/environment 실패를 ontology로 구조화하고 SHACL/SPARQL/RAG에 연결
- **자료 형태**: 정적 HTML, 키보드 단계 공개, 오버뷰, 발표자 노트, `?mode=presentation`, `?motion=off` 지원; PDF 산출은 이번 작업에서 제외

## 전체 흐름

```
도입      왜 ontology가 나왔나 — 같은 말·다른 의미, 표/문서/RAG의 의미 공백
정의      Gruber 정의, W3C/OWL 관점, ontology와 glossary/taxonomy/schema/KG 구분
표준      RDF, RDFS, OWL, SKOS, SHACL, SPARQL, JSON-LD, 추론과 검증의 차이
원리      competency question, scope, reuse, IRI/naming, modularity, versioning, governance
방법론    CRAFT = Context & CQ → Reuse & Requirements → Architecture & Alignment → Formalize & Fill → Test & Tend
예시      반도체 regression failure ontology, Turtle, SHACL gate, SPARQL CQ, RAG/Agent 연결
사례      Gene Ontology, Schema.org, FIBO의 목적·표현력·거버넌스 비교
실행      적용 여부 판단, 첫 4주 계획, 자신의 첫 CQ 작성
```

## GitHub Pages

이 저장소는 `.github/workflows/pages.yml`을 통해 정적 사이트를 GitHub Pages로 배포하도록 구성되어 있습니다. Pages 설정에서 Source가 아직 꺼져 있으면 **Settings → Pages → Source = GitHub Actions**로 한 번 확인하면 됩니다.

## 로컬 검증

```powershell
py -3 -m unittest discover -s tests -v
git diff --check
```

## 라이선스

- 슬라이드·문서·교육용 설명: [CC BY 4.0](LICENSE-CONTENT.md)
- HTML/CSS/JavaScript/Python 및 설정 코드: [MIT](LICENSE-CODE.md)
- 적용 경계와 외부 자산 고지: [LICENSE.md](LICENSE.md), [NOTICE.md](NOTICE.md)

## 검증 기준

자료는 W3C 표준 문서, Stanford/Protégé Ontology 101, Gruber 논문, NeOn 방법론, OBO Foundry 원칙, Gene Ontology, Schema.org, FIBO 등 1차 또는 공식 출처를 우선 확인해 작성했습니다. 세부 근거는 [docs/references.md](docs/references.md)를 확인하세요.

---

작성일: 2026-07-21
