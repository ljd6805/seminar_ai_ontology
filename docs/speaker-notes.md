# Ontology 지식관리 방법론 — 발표자 노트

## 진행 톤

- “Ontology = 어렵고 무거운 철학”이라는 선입견을 먼저 깨고, “의미를 코드처럼 관리하는 실무 방법”으로 계속 되돌린다.
- 초반에는 실패 경험을 많이 끌어낸다. 같은 용어를 다르게 해석해서 triage 시간이 늘어난 사례를 떠올리게 한다.
- 표준 이름은 많이 나오지만, 각 표준의 역할을 한 문장으로 고정한다.

## 장별 핵심 멘트

### 1~10 도입

- 핵심: ontology는 AI 이전에도 있던 지식 공유 문제의 해법이다.
- 강조: RAG/Agent가 강해질수록 “의미 레이어”가 더 중요해진다. 텍스트 검색만으로는 조직의 판단 기준을 보장하지 못한다.

### 11~17 정의

- 핵심: ontology는 단어장이 아니라 개념·관계·제약·공리의 명세다.
- 오해 교정: taxonomy는 ontology의 일부가 될 수 있지만, taxonomy만으로는 ontology가 아니다.

### 18~28 표준 스택

- RDF: 사실을 triple graph로 표현한다.
- RDFS: 기본 분류와 속성 의미를 준다.
- OWL: 더 강한 논리와 추론을 준다.
- SKOS: 분류체계/시소러스에는 가볍게 좋다.
- SHACL: 데이터 품질을 닫힌 세계 관점으로 검증한다.
- SPARQL: competency question을 실행 가능한 질의로 만든다.

### 29~38 구성 원리

- 핵심: 모델의 좋고 나쁨은 “의도한 질문에 답하는가”로 판단한다.
- 강조: 처음부터 큰 ontology를 만들지 않는다. scope를 자르는 사람이 실력자다.
- 농담 가능: “회사 전체 지식을 한 번에 ontology로 만들자”는 말이 나오면, 그건 프로젝트가 아니라 판타지 대하소설이다.

### 39~53 CRAFT 방법론

- 핵심: Context → Questions → Reuse → Architecture → Formalize → Test/Operate 순서로 반복한다.
- 강조: CQ가 테스트로 바뀌어야 모델이 산으로 가지 않는다.

### 54~64 반도체 예시

- 핵심: timeout failure triage는 ontology의 가치가 잘 드러나는 예시다.
- 강조: UnknownFailure를 정식으로 두는 것이 중요하다. 근거 없는 자동 분류를 막는 안전장치다.

### 65~72 실제 사례와 마무리

- 핵심: 성공한 ontology는 파일보다 커뮤니티와 운영 체계가 강하다.
- 마무리 문장: “정의하고, 연결하고, 검증하고, 운영하라.”

## Q&A 예상 질문

### Q. Knowledge Graph와 Ontology는 뭐가 다릅니까?

Knowledge Graph는 개체와 관계 데이터 자체에 가깝고, Ontology는 그 graph가 어떤 개념·관계·제약을 따라야 하는지 설명하는 의미 모델이다. 둘은 경쟁 관계가 아니라 보통 함께 쓴다.

### Q. OWL까지 꼭 써야 하나요?

아니다. 처음에는 SKOS/RDFS + SHACL + SPARQL 테스트만으로도 충분한 경우가 많다. 추론이 명확한 가치가 있을 때 OWL 표현력을 늘리는 게 안전하다.

### Q. LLM이 ontology를 자동 생성해주면 되지 않나요?

초안 생성에는 쓸 수 있다. 하지만 최종 의미 합의, scope 결정, relation 선택, 검증 기준은 도메인 전문가와 운영 프로세스가 필요하다. LLM이 만든 class 이름만 믿으면 “그럴듯한 쓰레기”가 빨리 쌓인다.

### Q. 반도체 업무에서는 어디부터 시작하면 좋나요?

Regression failure triage, register/spec 용어 정리, IP block ownership, verification plan coverage mapping처럼 반복적이고 용어 충돌이 잦으며 검증 가능한 업무부터 시작한다.

작성일: 2026-07-21
