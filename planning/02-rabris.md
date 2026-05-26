# 02. rabris (🐰 Rabbit Tetris)

> repo: `BLU30CEAN/rabris` · branch: `master` · pages: https://blu30cean.github.io/rabris

## 한 줄 정의

> React 18 + TypeScript 로 다시 만든 테트리스. 7-bag·SRS·hold·고스트 미적용 (= 다듬을 여지가 많은 실험판).

## 현재 구조

```
rabris/
├── src/
│   ├── App.tsx         # 전부 들어있는 단일 컴포넌트 (≈ 435줄)
│   ├── App.css
│   ├── types/tetris.ts
│   └── index.tsx
└── package.json        # CRA + gh-pages dev dep
```

## 결함 분석 (라인 번호는 현재 `App.tsx` 기준)

### 🔴 정정 필수 — 게임플레이 버그

1. **모든 활성 블록이 시안(I-piece) 색으로 보인다** — `Cell` 컴포넌트 `App.tsx:402`
   ```tsx
   <Cell key={`${y}-${x}`} type={isPlayerBlock ? 1 : cell[0]} />
   ```
   `type={1}` 은 `TETROMINOS["I"]` 색을 강제. 실제 떨어지는 블록의 색을 무시한다.
   **수정**: `BLOCK_TYPES[currentLetter]` 사용, 그리고 `player` 상태에 `letter: 'I'|'J'|…'Z'` 보관.

2. **키 핸들러가 매 렌더 재바인딩** — `move` 의 useCallback deps 에 `movePlayer/dropPlayer/playerRotate` (`App.tsx:221`). 이들은 매 렌더 새로 생성 → `useEffect [move]` (`App.tsx:223-228`) 가 매번 add/removeEventListener 호출. 키 입력 누락 발생 시점이 비결정적.
   **수정**: ref 패턴 (player/stage 를 ref 로 추적) 또는 함수를 useCallback 으로 정의.

3. **collide-후 cleanup useEffect 이중 트리거** — `App.tsx:243-283`
   - `player.collided=true` → 새 스테이지 생성 → `setPlayer(...)` → 재렌더 → 다시 `useEffect` 실행
   - `if (player.collided)` 가드는 있지만, 같은 effect 안에서 `setStage(newStage2)` 후 곧이어 `setStage(updatedStage)` 호출 → 1프레임 미리보기 깜빡임.
   **수정**: collide 후처리 → reducer 로 분리. 한 액션 = 1 dispatch.

4. **`startGame` 의 첫 블록을 stage 에 [1, 'clear'] 로 박는다** — `App.tsx:194-203`
   - player 상태로도 위치 추적 + stage 에도 박음 → 동일 블록이 2번 그려진다.
   - 렌더 분기 (`isPlayerBlock`) 가 가린다 해도, **이후 자동 낙하 첫 tick** 까지 stage cell 이 남아 그림자 잔상.
   **수정**: stage 는 "고정된 블록만" 보관, player 는 별도. startGame에서 stage 박지 말 것.

### 🟠 로직 — 잠재 버그

5. **`playerRotate` 의 자칭 wall-kick** — `App.tsx:119-134`
   - 안쪽 forEach 가 단순히 "왼쪽 셀 = 0이고 오른쪽 셀 ≠ 0이면 오른쪽 값으로 채움". 이건 회전 후 충돌 해소가 아니라 셀 시프트라 SRS 룰을 위반한다.
   **수정**: SRS 오프셋 테이블 (5개의 kick offset) 적용.

6. **레벨업 후 dropTime** — `App.tsx:286-291`
   ```ts
   if (lines > level * 10) {
     setLevel(prev => prev + 1);
     setDropTime(1000 / level);   // ← 직전 level 사용 (stale)
   }
   ```
   **수정**: `setDropTime(1000 / (level + 1))` 또는 setLevel 콜백 안에서 derive.

7. **`sweepRows` 안에서 `setLines`/`setScore` 직접 호출** — `App.tsx:164-175`
   - `reduce` 가 새 stage 1개 만들 때 setter 가 라인 개수만큼 호출됨 (React batching 에 의존). React 18 자동 batching 으로 OK 이긴 하나, `level` 이 클로저로 캡처돼 stale 가능.
   **수정**: 클리어된 row 수를 reduce 결과로 같이 반환 → effect 바깥에서 한 번에 set.

8. **next-piece 미사용** — `nextTetromino` 가 미리보기엔 쓰이지만 다음 스폰에는 `randomTetromino()` 가 새로 호출됨 (`App.tsx:269`). 미리보기와 실제 다음 블록이 다른 결정적 버그.
   **수정**: `setPlayer({ tetromino: nextTetromino.shape, … }); setNextTetromino(randomTetromino());`

### 🟡 톤/디자인

9. 헤더 `🐰 토끼 테트리스 🥕` — tone-guide §2.5 위반 (이모지 본문 사용).
   **수정**: `[ rabris ]  rabbit-tetris · v0.2`, 카테고리 표식 🐰 한 개만.
10. 버튼이 D-pad + A/B 같이 6개 — tone-guide §6 위반 (4개 이상 CTA 금지).
    **수정**: 모바일은 swipe 제스처 + 1버튼(`drop`), 데스크탑은 키보드 안내만 노출.

### 🟢 시스템

11. branch 가 `master` (다른 레포는 모두 `main`) — 통일 권장.
12. `predeploy/deploy` 가 `gh-pages -d build` → `_ops/cli/ops.mjs deploy rabris` 로 대체.

## 작업 체크리스트

- [ ] `App.tsx` 를 다음 파일로 분해
  - `engine/tetris.ts`        — `judgeRotation`, `sweepRows`, `spawn`, `nextBag()` (7-bag)
  - `engine/types.ts`         — `PieceLetter`, `Cell`, `Stage`
  - `hooks/useGameLoop.ts`    — interval + tick
  - `hooks/useKeyboard.ts`    — keydown 1회 바인딩
  - `components/Board.tsx` / `NextPanel.tsx` / `Controls.tsx`
- [ ] Cell 색상 버그 수정 (#1)
- [ ] reducer 패턴으로 state 통합
- [ ] SRS 룰 적용
- [ ] next-piece 일관성 보장
- [ ] 디자인 토큰 import (`src/index.css` 첫 줄)
- [ ] 헤더 모노 명령줄 + 이모지 단일화
- [ ] branch `master` → `main` rename 후 GH 기본 브랜치 변경
- [ ] `_ops/cli/ops.mjs deploy rabris` 검증
