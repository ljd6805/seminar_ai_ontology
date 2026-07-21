# Ontology 지식관리 방법론 — 교안 슬라이드

반도체 설계/검증/소프트웨어 엔지니어가 **온톨로지 기반 지식관리 방법론**을 기초부터 따라 배울 수 있도록 만든 공개 세미나 자료입니다.

## 현재 상태와 바로 보기

이 저장소는 **모듈별 PR 리뷰 방식**으로 제작 중입니다. 현재 Pages 셸은 검토 전의 불완전한 청크를 실행하지 않고 준비 현황을 안내합니다.

- [Pages 미리보기](slides/)
- 현재 게이트: 프로젝트 스캐폴드, 범용 에이전트 하네스, 라이선스, Pages 안전 셸
- 최종 목표: 자율학습용 약 75장 HTML 교안 + 배포용 PDF

## 문서

| 문서 | 내용 |
|---|---|
| [docs/seminar-synopsis.md](docs/seminar-synopsis.md) | 세미나 목표, 청자, 핵심 메시지, 구성 |
| [docs/speaker-notes.md](docs/speaker-notes.md) | 발표자 노트와 진행 팁 |
| [docs/methodology-checklist.md](docs/methodology-checklist.md) | CRAFT 방법론 실무 체크리스트 |
| [docs/references.md](docs/references.md) | 자료 조사 근거와 확인일 |

다음 리뷰 모듈에서 슬라이드별 페이지 맵, Turtle ontology, SHACL shape, SPARQL 예제를 차례로 추가합니다.

## 한눈에

- **목표**: ontology를 “개념 설명”으로 끝내지 않고, 용어 합의 → graph 모델링 → 검증 → 운영까지 실무 절차로 익히기
- **청자**: 반도체 설계/검증/소프트웨어 엔지니어, 데이터/AI 지식관리 입문자
- **학습 방식**: 자율학습 중심, 발표 시 약 90~120분
- **핵심 메시지**: *Ontology는 의미를 코드처럼 관리하는 방법이다.*
- **관통 시나리오**: Regression failure triage 지식관리 — timeout/assertion/build/environment 실패를 ontology로 구조화하고 SHACL/SPARQL/RAG에 연결
- **자료 형태**: GitHub Pages용 정적 HTML, 키보드 네비게이션, 자동 1회 재생·수동 리플레이 애니메이션, 모션 감소 설정, 인쇄용 PDF

## 전체 흐름

```
도입      왜 ontology가 나왔나 — 같은 말·다른 의미, 표/문서/RAG의 의미 공백
정의      Gruber 정의, W3C/OWL 관점, ontology와 glossary/taxonomy/schema/KG 구분
표준      RDF, RDFS, OWL, SKOS, SHACL, SPARQL, JSON-LD, 추론과 검증의 차이
원리      competency question, scope, reuse, IRI/naming, modularity, versioning, governance
방법론    CRAFT = Context → Questions → Reuse → Architecture → Formalize → Test/Operate
예시      반도체 regression failure ontology, Turtle, SHACL gate, SPARQL CQ, RAG/Agent 연결
사례      Gene Ontology, Schema.org, FIBO
부록      표준 치트시트, CQ 템플릿, CRAFT 워크시트, OWL/SHACL 팁, 리뷰 체크리스트
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
