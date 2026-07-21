# 범용 에이전트 작업 지침

이 저장소는 도구별 규칙을 중복 작성하지 않고 에이전트의 행동을 관리·검토하기 위해 범용 하네스를 사용합니다.

## 지원 에이전트 및 등급

| 에이전트 | 등급 | 진입점 | 적용 범위 |
|---|---|---|---|
| Claude Code | Tier 1 (완전 강제) | `CLAUDE.md` | 공통 규칙과 hook/permission |
| OpenCode | Tier 2 (규칙만) | `opencode.json` | 공통 자연어 지침 |
| Codex | Tier 2 (규칙만) | `AGENTS.md` | 공통 자연어 지침 |

모든 진입점은 이 파일을 가리킵니다. Tier 1 강제 설정의 정본은 `.claude/settings.json`입니다.

## 핵심 작업 흐름

### 1. 수정 전 먼저 탐색한다

- 관련 파일과 git 상태를 먼저 확인합니다.
- 기존 사용자 변경과 현재 작업에 무관한 변경을 보존합니다.

### 2. 프로젝트별 지침을 확인한다

`.agent-harness/rules/PROJECT_GUIDE.md`와 `.agent-harness/harness.config.json`을 함께 읽고 따릅니다. 프로젝트별 지침이 더 구체적인 경우 이를 우선하되 공통 안전 원칙은 유지합니다.

### 3. 기본값은 TDD다

프로덕션 코드는 `실패하는 테스트 → 실패 확인 → 최소 구현 → 통과 확인 → 리팩터` 순서를 기본값으로 삼습니다.

허용되는 예외는 문서만 수정하는 경우, 하네스 설정만 수정하는 경우, 명시적으로 요청된 탐색적 스캐폴딩, 사용자가 승인한 예외입니다.

### 4. 병렬화 가능성을 판단한다

서로 다른 파일·모듈을 독립적으로 수정할 수 있을 때만 병렬화를 고려합니다. 실패가 연관되어 있거나 같은 파일을 대상으로 하면 단일 흐름으로 진행합니다.

### 5. 완료 전 검증한다

- `harness.config.json`의 검증 명령을 우선 실행합니다.
- 테스트가 없다면 구체적인 수동 검사를 수행합니다.
- 검증할 수 없다면 이유와 실행해야 할 명령을 명시합니다.

### 6. 하네스를 유지보수하기 쉽게 둔다

- 공통 규칙: `.agent-harness/rules/`
- 공통 hook: `.agent-harness/hooks/`
- Claude 강제 설정: `.claude/settings.json`
- 프로젝트별 지침: `.agent-harness/rules/PROJECT_GUIDE.md`
- 프로젝트별 실행 설정: `.agent-harness/harness.config.json`

긴 인라인 셸 명령보다 작고 검토 가능한 스크립트를 선호합니다. 현재 활성 규칙은 [`ACTIVE_RULES.ko.md`](ACTIVE_RULES.ko.md)에서 확인합니다.
