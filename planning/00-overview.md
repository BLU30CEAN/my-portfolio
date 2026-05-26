# 00. Portfolio Overview — 무엇을 통일할 것인가

## 현재 상황

| 프로젝트 | 레포 | 상태 | 톤 | 결정적 결함 |
| --- | --- | --- | --- | --- |
| `my-portfolio` | `BLU30CEAN/my-portfolio` | live | "안녕하세요 저는…" 자기소개체 | `HomePage.tsx` 1,970줄 god-component |
| `word-baseball` | `BLU30CEAN/korean-baseball` | live | 게임 톤 + 기술 톤 혼재 | Next.js → gh-pages export 미설정 |
| `rabris` | `BLU30CEAN/rabris` | live | 이모지 폭발 (🐰🥕) | 키보드 핸들러 무한 재바인딩, Cell 색상 단일화 버그 |
| `pocket-poker` | `BLU30CEAN/pocket-poker` | README only | 마케팅 카피체 | 소스 코드 0줄 |
| `find-carrot` | `BLU30CEAN/find-carrot` | live | Win98 픽셀 | 톤 통일 시 코발트 보정만 |
| `netflix-clone` | `BLU30CEAN/netflix-clone` | disabled | — | 보안경고 → 임시 비활성, 사용자에게 변명만 노출 |

## 통일 후 모습 (목표)

```
$ ej --build ideas --ship-broken
> 5 experiments · 1 portfolio · 0 slides
```

- **단일 컬러 시스템**: `--bc-cobalt` / `--bc-cyan` / `--bc-magenta` / `--bc-lime`
- **단일 폰트 시스템**: 본문 Inter+Pretendard, 태그/숫자 JetBrains Mono
- **단일 카피 톤**: tone-guide.md 의 "동사/한 문장/모노로 시작" 규칙
- **단일 배포 시스템**: `node _ops/cli/ops.mjs deploy <name>`

## 단계

1. **D+0 (지금)** — `_ops/` 구축 + 결함 분석 문서화 + 디자인 토큰 정의 (완료)
2. **D+1** — `ops design publish`로 토큰 살포 → 각 프로젝트 1차 리스킨
3. **D+2** — word-baseball Next static export 설정 / rabris 키 핸들러 리팩토링 / pocket-poker MVP 랜딩
4. **D+3** — my-portfolio HomePage 분해 (god-component → 섹션 단위)
5. **D+4** — `ops deploy --all` 실행 + GH Pages 검증

## 왜 "실험적"인 톤인가

이력서는 결과의 정적 캡처다. 포트폴리오 사이트는 **돌아가는 실험의 모음**이어야 한다.
같은 풀스택 개발자가 5명 모이면, 차이를 만드는 건 **이상한 걸 만들었는지 여부**다.

따라서 디자인의 모든 디테일은 다음을 외친다:
- 모노 폰트가 본문에 섞여 보일 때마다 → "엔지니어가 만든 화면"
- 마젠타 칩 (`bc-tag-experiment`) → "이건 실험중"
- 한 줄 터미널 헤더 → "이 사람은 CLI를 좋아한다"
- "shipped beats perfect" 카피 → "끝낸 뒤 다듬는다"
