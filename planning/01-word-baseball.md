# 01. word-baseball (⚾ Korean Word Baseball)

> repo: `BLU30CEAN/korean-baseball` · pages: https://blu30cean.github.io/korean-baseball

## 한 줄 정의

> 5타석 한글 자모로 단어를 맞추는 Wordle. 자모 단위 strike/ball/out + 중복-자모 판정(strikeDup).

## 현재 구조

```
word-baseball/
├── app/                      # Next.js 16 App Router
│   ├── layout.tsx
│   ├── page.tsx              # 정답 1개 픽 후 <WordBaseballGame /> 렌더
│   ├── poker/                # ❓ 미정 라우트
│   ├── share/                # 결과 공유
│   ├── stats/                # 통계
│   └── api/                  # API 라우트 (정적 export와 충돌 가능)
├── components/game/
├── lib/game/
│   ├── hangul.ts             # 자모 분해/조립
│   ├── logic.ts              # judgeGuess, mergeKeyboardState
│   ├── hints.ts              # 힌트 후보 선정
│   ├── keymap.ts             # QWERTY → 자모 입력 매핑
│   ├── share.ts              # 공유 텍스트 직렬화
│   ├── stats.ts              # 로컬 통계
│   └── word-validator.ts
├── data/
│   ├── answer-pool.json      # 정답 풀
│   └── valid-words.json      # 입력 허용 단어
└── scripts/build-word-bank.ts
```

## 결함 분석

### 🔴 배포 차단급

1. **`next.config.mjs` 에 static export 설정 없음** — `next build` 가 `.next/` 만 생성하고 `out/` 미생성. GH Pages 배포 불가.
   - 파일: `next.config.mjs`
   - 누락: `output: 'export'`, `basePath: '/korean-baseball'`, `images: { unoptimized: true }`
2. **`app/api/`** — App Router의 API 라우트는 `output: 'export'` 와 호환되지 않는다.
   - `app/api/**` 를 `app/_api/`(언더스코어 prefix → 라우트 제외)로 옮기거나, gh-pages 빌드에선 제외해야 한다.
   - 옵션: 클라이언트 전용 fetch + `data/*.json` 로 우회.

### 🟠 로직 — 잠재 버그

3. **`pickInitialAnswer`** (`app/page.tsx`)
   ```ts
   export const dynamic = "force-dynamic";
   ```
   - static export 시 `force-dynamic` 은 무효. 빌드 시점에 1번만 픽 → 모든 사용자가 같은 정답을 받는다.
   - 해결: **클라이언트에서 픽**. `page.tsx` 는 풀만 넘기고 `<WordBaseballGame />` 안에서 `useEffect` 첫 마운트에 `pickRandomEntry` 호출.

4. **`judgeGuess` 의 ball 카운팅 순서** (`lib/game/logic.ts:24-34`)
   - 첫 번째 패스에서 strike 처리한 뒤 `remaining` 에 비-strike 정답 자모만 카운팅 — 정확하다.
   - 두 번째 패스에서 strike 인 위치를 건너뛰고 ball 마킹 — 정확하다.
   - 세 번째 패스에서 답에 중복 출현한 자모 strike를 `strikeDup` 으로 강등.
   - **잠재 위반**: 추측이 같은 자모를 답보다 더 많이 가졌을 때 — 정답 "사과" `ㅅㅏㄱㅗㅏ`, 추측 "사사" `ㅅㅏㅅㅏ`.
     - guess `[ㅅ, ㅏ, ㅅ, ㅏ]` vs answer `[ㅅ, ㅏ, ㄱ, ㅗ, ㅏ]` → 길이가 다르다. 길이 다른 추측은 `isValidGuess` 에서 거른다 ✓.
   - **추측 길이 = 정답 길이가 다른데 통과되는 경로**: `judgeGuess(guess, answer)` 를 직접 호출하는 모든 사이트에서 보장돼야 한다. 호출 측이 길이 일치를 검증하지 않으면 자모 idx 미스매치 발생.
     - 권장: `judgeGuess` 첫 줄에 `if (guess.length !== answer.length) throw new Error(...)` 추가.

### 🟡 톤/디자인

5. **타이틀에 이모지 사용 가능**, 본문엔 이모지 금지 (tone-guide §2).
6. **자모 타일** — 현재 시각화 미확인. 톤 가이드 §5: **자모는 모노 폰트**, 판정 칩은 `--bc-strike` / `--bc-ball` / `--bc-out` / `--bc-strike-dup` 으로 일관화.
7. **공유 카드** (`share.ts`) — 결과를 모노 ASCII로 출력하면 트위터/카카오에서 "엔지니어 게임" 인상 강함.

### 🟢 시스템

8. **commit 컨벤션 불일치**: `feat : 명사 게이트 캐시 무시` 같이 콜론 앞 공백. Conventional Commits 미준수.
9. **`tests/game.test.ts`** 는 node native test runner, `vitest` 는 dev dep 으로만 — 둘 중 하나로 통일 권장.

## 화면설계 (Refresh 후)

```
┌──────────────────────────────────────────────┐
│ $ word-baseball --bank=20210                 │   ← 모노 헤더
│                                              │
│   ⚾  한 단어,  자모  5타석.                   │
│   정답을 맞추거나 6번 안에 끝낸다.            │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ [ㅂ][ㅏ][ㄴ][ㅏ][ㄴ]   strike·ball·…    │ │   ← 자모 타일 (모노)
│ │ [ㅅ][ㅏ][ㄱ][ㅗ][ㅏ]                     │ │
│ │ [ ][ ][ ][ ][ ]                          │ │
│ └──────────────────────────────────────────┘ │
│ keyboard ▶ ㅂㅈㄷㄱㅅㅁ ...                   │
│                                              │
│ stats · share · new game                     │
└──────────────────────────────────────────────┘
```

## 작업 체크리스트

- [ ] `next.config.mjs` 에 `output: 'export'`, `basePath`, `assetPrefix` 추가
- [ ] `app/api/**` → `app/_api/` 또는 빌드 제외 분기
- [ ] `app/page.tsx` 의 `pickInitialAnswer` 를 클라이언트 사이드로 이동
- [ ] `judgeGuess` 입력 길이 가드
- [ ] 자모 타일 → JetBrains Mono 적용 (`--bc-font-mono`)
- [ ] 헤더에 모노 명령줄 추가
- [ ] `_ops/cli/ops.mjs design publish` 로 토큰 살포 → `app/globals.css` 에서 `@import "./design-tokens.css"`
- [ ] `npm test` 와 `vitest` 중 하나로 통일
- [ ] `node _ops/cli/ops.mjs deploy word-baseball` 검증
