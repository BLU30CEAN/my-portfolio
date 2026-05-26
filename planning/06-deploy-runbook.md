# 06. Deploy Runbook — `_ops` 사용 매뉴얼

> 위치: `c:/GIT/_ops/`. 어떤 프로젝트 폴더에도 속하지 않는 운영 룸.

## 0. 1회 셋업

```bash
# (선택) GH PAT 환경변수 등록 → 매번 비밀번호 입력 안 함
# Windows PowerShell:
setx GH_TOKEN "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 또는 git 자격증명 헬퍼만 (기본 manager 사용 중)
git config --global credential.helper manager
```

## 1. 환경 점검

```bash
node c:/GIT/_ops/cli/ops.mjs doctor
```

기대 출력:

```
✓ git version 2.x
✓ node v20.x
✓ gh version 2.x          (없어도 됨)
› GH token present
  ✓ my-portfolio    C:/GIT/my-portfolio
  ✓ word-baseball   C:/GIT/word-baseball
  ✓ rabris          C:/GIT/rabris
  ✓ pocket-poker    C:/GIT/pocket-poker
  ✓ find-carrot     C:/GIT/find-carrot
  · netflix-clone   C:/GIT/netflix-clone   ← gh-pages 비활성
```

## 2. 단일 프로젝트 릴리즈

```bash
# 소스 push + 빌드 + gh-pages 배포 (= release)
node c:/GIT/_ops/cli/ops.mjs deploy word-baseball
```

작업 흐름:

1. `git add -A && git commit -m "chore: sync ..."` (변경 없으면 skip)
2. `git push origin HEAD:main`
3. `npm install` (node_modules 없으면)
4. `npm run build`  → buildDir 생성
5. buildDir 안에서 throw-away git → `gh-pages` 브랜치로 force push
6. SPA fallback (`404.html` 복사) + `.nojekyll` 자동 추가

## 3. 전체 일괄

```bash
node c:/GIT/_ops/cli/ops.mjs deploy --all
```

`ghPagesEnabled: false` 인 프로젝트는 건너뛴다 (netflix-clone).

## 4. 부분 명령

```bash
# 빌드만
node c:/GIT/_ops/deploy/deploy.mjs build rabris

# 빌드 산출물 재배포만 (소스 push 생략)
node c:/GIT/_ops/deploy/deploy.mjs pages rabris --skip-build

# 소스만 push
node c:/GIT/_ops/deploy/deploy.mjs push rabris --message="feat: SRS kicks"

# 강제 push (충돌 무시)
node c:/GIT/_ops/deploy/deploy.mjs push rabris --force
```

## 5. 동기화 / 상태

```bash
node c:/GIT/_ops/cli/ops.mjs sync     # 모든 레포 git pull
node c:/GIT/_ops/cli/ops.mjs status   # 모든 레포 git status -sb
```

## 6. 디자인 토큰 살포

```bash
node c:/GIT/_ops/cli/ops.mjs design publish
```

각 프로젝트의 `public/` 또는 `src/` 또는 `app/` 또는 `site/` 중 존재하는 첫 곳에
`design-tokens.css` 를 복사. 진입 CSS 첫 줄에 `@import "./design-tokens.css";` 한 줄 추가만 하면 즉시 토큰 사용 가능.

`tone-guide.md` 는 각 프로젝트의 `planning/_tone-guide.md` 로 복사 (있는 경우만).

## 7. 새 레포 추가

1. `_ops/projects.json` 의 `projects[]` 에 항목 추가
2. 빈 레포만 GitHub 에 만들어두기 (`gh repo create BLU30CEAN/new-thing --public`)
3. `node _ops/cli/ops.mjs deploy new-thing`

## 8. CI 로 옮기기 (선택)

`_ops/templates/ghpages-workflow.yml` 을 각 레포의 `.github/workflows/deploy.yml` 로 복사.
이후 push 만 하면 GitHub Actions 가 gh-pages 까지 배포.

## 9. 트러블슈팅

| 증상 | 원인 | 해결 |
| --- | --- | --- |
| `Build dir not found: .../out` | Next 앱이 `next.config.mjs` 에 `output: 'export'` 미설정 | next.config 에 export 모드 추가 |
| `Updates were rejected (non-fast-forward)` | 원격이 앞서있음 | `ops sync` 후 재시도, 또는 `--force` |
| `Permission denied (publickey)` | HTTPS 가 아니라 SSH remote | `git remote set-url origin https://github.com/...` 또는 GH_TOKEN 설정 |
| GH Pages 가 404 | gh-pages 브랜치 만들어졌으나 Settings 에서 미선택 | repo Settings → Pages → Source = gh-pages |
| 첫 페이지만 뜨고 라우트가 404 | SPA fallback 미적용 | 자동 복사되지만 캐시 문제일 수 있음 — Pages 재발행 |
