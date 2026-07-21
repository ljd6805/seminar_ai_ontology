# 반도체 failure 교육용 예제

이 폴더는 실제 회사·제품 데이터나 산업 표준이 아닌, CRAFT 흐름을 실습하기 위한 작은 가상 fixture다.

| 파일 | 역할 |
|---|---|
| `semiconductor-failure-ontology.ttl` | class·property·두 개의 유사 failure·evidence·component·owner를 포함한 RDF/OWL 예제 |
| `semiconductor-failure-shapes.ttl` | failure의 test·run·evidence·signature·confidence 계약을 검사하는 SHACL shapes |
| `semiconductor-failure-invalid.ttl` | evidence 누락과 잘못된 confidence를 의도적으로 포함한 실패 fixture |
| `find-similar-failures.rq` | 같은 signature의 과거 failure와 issue·component·owner를 찾는 SPARQL SELECT |

## 예상 학습 흐름

1. ontology 파일에서 `TimeoutFailure`, `hasEvidence`, `affects` 정의를 읽는다.
2. 유효한 두 failure가 같은 signature와 issue를 공유하는지 query로 확인한다.
3. ontology와 invalid fixture를 data graph로, shapes 파일을 shapes graph로 사용해 검증한다.
4. `hasEvidence` 누락과 `confidenceScore=1.4` violation을 확인한다.
5. fixture를 보완하고 다시 검증해 `Conforms: true`가 되는지 확인한다.

구체적인 SHACL/SPARQL 실행 명령은 사용하는 triplestore 또는 SHACL 엔진에 따라 다르다. 교안은 특정 도구 설치를 강제하지 않는다.
