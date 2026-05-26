# 04. my-portfolio — god-component 분해 계획

> repo: `BLU30CEAN/my-portfolio` · pages: https://blu30cean.github.io/my-portfolio

## 결함 분석

### 🔴 구조

1. **`src/pages/HomePage.tsx` 1,970 줄** — styled-components 정의·데이터 배열·JSX·이벤트 핸들러 한 파일에 다.
   - 영향: 변경 비용↑, 토큰 적용 시 부수효과 위험↑
   - 분해 계획: §아래

2. **`src/App.tsx` 565줄** — Navigation/MobileMenu 안에서 NavLink 4개를 수작업 4번 반복.
   - 분해: `nav/Navigation.tsx`, `nav/NavLinks.tsx`, `nav/MobileNav.tsx`, `nav/ScrollToTop.tsx`.

### 🟠 동작 결함

3. **`ProfileImage` `onError` 가 React 트리를 string innerHTML 로 덮어쓴다** (`HomePage.tsx:1256-1274`)
   ```tsx
   target.parentElement!.innerHTML = `<div ...>${name}</div>`;
   ```
   - React 재렌더가 일어나면 그 DOM 이 사라지고 onError 가 무한 트리거.
   - **수정**: `useState('loaded' | 'error')` 로 fallback 컴포넌트 렌더링.

4. **`HomeContainer` 가 자체 scroll snap** + `MainContent` 도 스크롤 + body 도 스크롤 → 모바일 더블 스크롤 버그.
   - **수정**: snap 제거, 또는 `MainContent` 의 `padding-top` 만 유지하고 body 스크롤 단일화.

5. **Netflix 카드 "🚫 임시 비활성화"** — 사용자에게 변명을 노출한다. tone-guide §6 위반.
   - **수정**: 카드 자체를 숨기거나, 같은 자리에 "리스킨 진행중 · v2 곧 공개" 같이 실험 진행을 보이는 라벨로 교체.

6. **방명록 로컬 fallback** (`handleGuestbookSubmit`) — Webhook 실패 시 localStorage 에 저장만 하고 사용자엔 "성공" 토스트 표시.
   - **수정**: 토스트 카피를 "기록됨 (로컬)" 로 분기하거나, 실패시 별도 UI.

7. **라우트 `/kwb` 와 `/word-baseball` 가 같은 컴포넌트** — 한 쪽으로 통일하고 다른 쪽은 redirect.

### 🟡 톤

8. `안녕하세요, 저는 EJ 입니다` → tone-guide §2.3 ("저는" 금지, 주인공은 결과물).
9. CTA `프로젝트 보기 →` → `$ ej show-projects`.
10. 통계 카드의 `5년 / 5개 / 20+ / AI` → 모노 폰트 강제 + 한 줄 부연.

### 🟢 시스템

11. `react@19` + `react-scripts@5` (CRA) — 잘 돌긴 하지만 long-term은 Vite 마이그레이션 권장 (다음 사이클).
12. `env.example` 의 `REACT_APP_PERSONAL_NAME=Your Name` 디폴트 → 빌드 시 환경변수 누락되면 `EJ` 폴백 정상이나 README 에 명시 필요.

## 분해 후 구조 (목표)

```
src/
├── App.tsx                    # 200줄 이내 — 라우팅 + 레이아웃만
├── design/
│   ├── tokens.css             # ops design publish 로 들어옴
│   ├── theme.ts               # 토큰을 ts 객체로
│   └── motion.ts              # framer-motion variants
├── layout/
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   ├── ScrollToTop.tsx
│   └── PageShell.tsx          # padding-top 등 공통
├── pages/
│   ├── HomePage.tsx           # 200줄 이내 — 섹션 조립만
│   ├── AboutPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ContactPage.tsx
│   └── WordBaseballPage.tsx
├── sections/                  # HomePage 가 import 하는 단위
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── TechStackSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── GuestbookSection.tsx
├── components/
│   ├── Tag.tsx                # bc-chip, bc-tag-*
│   ├── Card.tsx               # bc-card
│   ├── Button.tsx             # bc-btn
│   ├── MonoHeader.tsx         # $ command-line 헤더
│   ├── FloatingDust.tsx       # 떠다니는 점들
│   ├── ProfileAvatar.tsx      # onError 안전
│   └── ThemeToggle.tsx
├── data/
│   ├── projects.ts            # 카드 데이터 (현재 JSX 하드코딩 → JSON)
│   ├── techStack.ts
│   └── stats.ts
└── contexts/
    └── ThemeContext.tsx
```

## Hero 섹션 새 카피 (안)

```
$ ej --build experiments --ship-broken

EJ
풀스택 · AI 서비스 · 실험으로 증명하는 사람.

5개의 사이드 프로젝트, 5개의 실패, 5개의 배운 것.
슬라이드보다 돌아가는 데모를 좋아한다.

[ show me ]  [ contact ]
```

(이모지 0개, 동사 위주, CTA 2개)

## 작업 체크리스트

- [ ] `src/design/tokens.css` 가 들어갈 자리 마련 (`ops design publish` 실행)
- [ ] `index.css` 첫 줄에 `@import "./design/tokens.css";`
- [ ] `HomePage` 의 6개 섹션을 `sections/` 로 분리 (한 파일씩, 250줄 이하)
- [ ] `ProfileAvatar` onError 안전화
- [ ] Netflix 카드 "임시 비활성화" 제거 또는 라벨 교체
- [ ] Hero 카피 교체 + 모노 헤더 추가
- [ ] 라우트 `/word-baseball` → `/kwb` redirect 단일화
- [ ] `planning/` 폴더가 빌드에 포함되지 않는지 확인 (`src/` 아래 X → 안전)
