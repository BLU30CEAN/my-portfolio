# 03. pocket-poker (🃏 GTO Pocket)

> repo: `BLU30CEAN/pocket-poker` · pages: https://blu30cean.github.io/pocket-poker

## 현재 상태

```
pocket-poker/
└── README.md   (200줄)   ← 소스 0줄
```

README 는 React Native + Zustand + GTOEngine 으로 모바일 앱 그림을 그리는데, **하나도 안 만들어졌다**.
이 모순을 해결하지 않으면 포트폴리오 신뢰도가 떨어진다.

## 결함 / 모순 분석

| # | 문제 | 영향 |
| --- | --- | --- |
| 1 | README 가 약속하는 RN 앱 0% 구현 | 방문자가 데모를 못 본다 |
| 2 | "GTO Engine" 이라 부르는 실제 알고리즘 명세 없음 | 작성 시 가짜 룩업 테이블 위험 |
| 3 | 라이센스/연락처 라인이 placeholder | README §통합 후 교체 필요 |
| 4 | "vs PioSolver / vs GTO Wizard" 비교 — 본인 구현 없는 상태에서 비교는 과장 | tone-guide §6 (자기 평가 형용사) 위반 |

## 결정: 2단계 MVP

### Phase 1 — **static landing**  (이번 사이클)

`site/index.html` 한 페이지. 다음 요소만:

- 헤더: `$ pocket-poker --status=experimental`
- 한 줄 카피: "GTO를 게임이 아니라 도구로."
- 실험중 칩: `bc-tag-experiment` (마젠타)
- 미니 인터랙티브 = **EV 계산기** (HTML + 100줄 JS):
  - 입력: 포지션 / 핸드(텍스트) / 팟 BB / 상대 수
  - 출력: 가짜가 아닌 **간단한 EV 근사식** (강한 핸드 등급 + 포지션 보정)
- "Phase 2 = Expo Web 빌드 예정" 라벨 명시

이렇게 하면:
- 데모가 돌아간다 (방문자 만족)
- "실험중" 라벨이 디자인 톤과 일치 (정직)
- 작은 코드 → 빠른 첫 배포

### Phase 2 — Expo Web Export (다음 사이클)

- `npx create-expo-app pocket-poker --template blank-typescript`
- `expo export -p web` → `dist/` 를 buildDir 로 등록
- `_ops/projects.json` 의 `framework` 를 `static` → `expo-web` 으로 갱신
- 알고리즘: hand strength × position-multiplier × pot-odds. 결과는 보수적 근사 + 출처 명시.

## Phase 1 화면설계

```
┌──────────────────────────────────────────────┐
│ $ pocket-poker --status=experimental         │
│                                              │
│ 🃏  GTO를 게임이 아니라 도구로.               │
│ [ experimental · v0.1 ]                      │
│                                              │
│ ─── EV 미니 계산기 ─────────────────────────  │
│  포지션  [ BTN ▾ ]   상대  [ 2 ]              │
│  핸드    [ AKo  ]    팟    [ 15 BB ]          │
│                                              │
│  ▶ 결과                                       │
│    승률      67%                              │
│    EV       +2.4 BB                          │
│    추천     3x raise · LOW risk              │
│                                              │
│  ⓘ 본 결과는 거친 근사다. PioSolver 같은      │
│    솔버 출력이 아니다.                        │
│                                              │
│ ─── Roadmap ────────────────────────────────  │
│  ✓  Phase 1  static EV calc                  │
│  ·  Phase 2  Expo Web · pre-flop charts      │
│  ·  Phase 3  post-flop street planner        │
└──────────────────────────────────────────────┘
```

## 작업 체크리스트 (Phase 1)

- [ ] `site/index.html` 생성 (디자인 토큰 import)
- [ ] `site/app.js` — EV 근사 + 입력 핸들러
- [ ] `site/styles.css` — `bc-card` 활용
- [ ] README 갱신: "Phase 1 (current) = static · Phase 2 = Expo Web"
- [ ] `_ops/projects.json` 에 `framework: "static"`, `buildDir: "site"` 등록 (완료)
- [ ] `node _ops/cli/ops.mjs deploy pocket-poker` 검증
