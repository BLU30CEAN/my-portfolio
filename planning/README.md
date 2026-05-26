# planning/ — web 노출 X, 분석/기획만 담는 문서 보관소

CRA 빌드는 `src/`와 `public/`만 번들한다. 이 폴더는 **소스에서 절대 import 되지 않는다**.
따라서 `npm run build` 산출물(`build/`)에도, `gh-pages` 배포물에도 포함되지 않는다.

## 문서 목록

| 파일 | 내용 |
| --- | --- |
| [`00-overview.md`](./00-overview.md) | 전체 포트폴리오 톤·디자인 전략 |
| [`01-word-baseball.md`](./01-word-baseball.md) | ⚾ 한글 워드 야구 — 결함 분석 + 화면설계 |
| [`02-rabris.md`](./02-rabris.md) | 🐰 Rabris — 게임 로직 결함 + 리팩토링 로드맵 |
| [`03-pocket-poker.md`](./03-pocket-poker.md) | 🃏 Pocket Poker — 빈 레포에서 시작하는 MVP 기획 |
| [`04-my-portfolio.md`](./04-my-portfolio.md) | 🌐 portfolio 자체의 god-component 분해 계획 |
| [`05-design-system.md`](./05-design-system.md) | 통합 디자인 토큰·톤 매핑 (사본은 `_tone-guide.md`) |
| [`06-deploy-runbook.md`](./06-deploy-runbook.md) | `_ops` 사용 매뉴얼 + 원클릭 배포 |
| [`_tone-guide.md`](./_tone-guide.md) | `_ops/design-system/tone-guide.md` 의 자동 복사본 |

## 원칙

1. **수정 금지 파일은 없다**. 모든 분석은 코드보다 빠르게 낡는다 — 코드를 바꿨으면 여기도 바꾼다.
2. 모든 결함 보고는 **파일 경로 + 라인 + 코드 인용 + 재현 시나리오** 형식을 지킨다.
3. PDF/Word 산출물은 `C:/Users/ejan/TEST/file/portfolio-specs/` 에 HTML로 둔다 (브라우저 인쇄 → PDF).
