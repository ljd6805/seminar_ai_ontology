# 현재 적용된 규칙

이 문서는 이 프로젝트에 실제 적용된 permission, hook, 작업 규칙을 빠르게 확인하기 위한 레퍼런스입니다. Tier 1 강제 설정의 정본은 `.claude/settings.json`입니다.

```yaml
version: 1

permissions:
  allow:
    - rule: "Bash(git *)"
    - rule: "Bash(ls *)"
    - rule: "Bash(find *)"
    - rule: "Bash(grep *)"
    - rule: "Read"
    - rule: "Edit"
    - rule: "Write"

hooks:
  PostToolUse:
    - matcher: "Write|Edit|MultiEdit"
      script: ".agent-harness/hooks/format_changed_file.py"
    - matcher: "Write|Edit|MultiEdit"
      script: ".agent-harness/hooks/run_tests.py"
    - matcher: "Write|Edit|MultiEdit"
      script: ".agent-harness/hooks/tdd_guard.py"
  Stop:
    - matcher: null
      script: null

workflow_rules:
  - id: explore-before-edit
  - id: check-project-guide
  - id: tdd-default
  - id: parallelization-judgement
  - id: verify-before-done
  - id: maintainable-harness-structure
```

기본 정책은 테스트 실패를 차단하고(`test_failure: strict`), TDD 짝 테스트가 없는 프로덕션 변경은 경고합니다(`tdd_guard: warning`).
