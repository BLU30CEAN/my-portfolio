# 05. Design System — 4개 프로젝트 통합 매핑

> 원본은 `_ops/design-system/tokens.css` + `tone-guide.md`. 사본은 `_tone-guide.md` (자동 복사).

## 컬러 매핑

| 토큰 | HEX | 역할 | 사용 예 |
| --- | --- | --- | --- |
| `--bc-cobalt`   | #0040FF | 기본 강조 | 모든 CTA primary |
| `--bc-cyan`     | #00D4FF | 보조 강조 | 링크, 호버, 글로우 |
| `--bc-magenta`  | #FF3DA5 | 실험중 라벨 | `bc-tag-experiment` |
| `--bc-lime`     | #A8FF60 | 잘 도는 신호 | 게임 정답, 성공 토스트 |
| `--bc-amber`    | #FFB020 | 주의 | ball 표식, 경고 |
| `--bc-ink`      | #0B1220 | 배경 (다크) | body |
| `--bc-paper`    | #F4F7FB | 배경 (라이트) | body |

### 게임 컬러 (word-baseball / 향후 카드게임)

| 토큰 | 의미 | HEX |
| --- | --- | --- |
| `--bc-strike`     | strike      | #22C55E |
| `--bc-strike-dup` | strike(dup) | #10B981 |
| `--bc-ball`       | ball        | #F59E0B |
| `--bc-out`        | out         | #475569 |

## 프로젝트별 시그니처 그라데이션

| 프로젝트 | 그라데이션 | 변수 |
| --- | --- | --- |
| `my-portfolio` | cobalt → cyan | `--bc-grad-cobalt` |
| `word-baseball` | strike-green → cyan | custom 또는 game color stack |
| `rabris` | cyan → lime | `--bc-grad-playful` |
| `pocket-poker` | cobalt → magenta | `--bc-grad-experiment` |
| `find-carrot` | win98 baseline + cobalt accent | (그라데이션 X) |

## 폰트 사용 규칙

| 영역 | 폰트 | 변수 |
| --- | --- | --- |
| 본문 | Inter / Pretendard | `--bc-font-sans` |
| 숫자, 태그, 코드, 자모 타일, 명령줄 헤더 | JetBrains Mono | `--bc-font-mono` |

## 모션 규칙

- 기본 트랜지션: `var(--bc-dur) var(--bc-ease-out)`
- 게임 CTA / 정답 피드백: `var(--bc-ease-spring)`
- prefers-reduced-motion: 100ms 안에 종료, transform/opacity 만 사용

## 적용 순서 (각 프로젝트)

1. `node _ops/cli/ops.mjs design publish` → 토큰 복사
2. 진입 CSS 의 최상단에 `@import "./design-tokens.css";`
3. 기존 hard-coded HEX (`rgb(0, 212, 255)` 등) 를 `var(--bc-cyan)` 로 점진 교체
4. 헤더 컴포넌트를 `MonoHeader` 로 교체 (tone-guide §4)
5. 카드 컴포넌트는 `bc-card` 클래스 또는 toolbox 컴포넌트 사용
