# Blue Ocean Portfolio

🌊 **Blue Ocean** - 풀스택 개발자 포트폴리오

## 🚀 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

### 배포 방법

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/BLU30CEAN/portfolio.git
   git push -u origin main
   ```

2. **GitHub Pages 설정**
   - GitHub 저장소 → Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **배포 스크립트 추가**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **package.json에 스크립트 추가**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

5. **배포 실행**
   ```bash
   npm run deploy
   ```

## 🎨 Blue Ocean 컨셉

- **깊은 바다**: 전문성과 깊이 있는 기술력
- **파도의 흐름**: 유연하고 적응력 있는 개발 방식
- **투명한 물**: 명확하고 깔끔한 코드
- **무한한 가능성**: 끊임없는 학습과 성장

## 🛠 기술 스택

### 프론트엔드
- React, TypeScript, Styled Components

### 백엔드
- Java, Spring Boot, Kotlin, Android

### 서버/인프라
- AWS, Docker, Linux, CI/CD

### 데이터베이스/모니터링
- PostgreSQL, DataDog, GTM, GA

### Admin Studio (개인 실험 · 모노레포 sibling)
- `src/` CRA · `api/` FastAPI · `server/` Express · `docker compose` (PostgreSQL + API)
- `npm run docker:up` → FE `npm start` → `/#/admin-studio`
- CSV/Excel upsert · 엔티티 CRUD · `X-Admin-Key` (see `env.example`)

## 📧 연락처

- **Email**: ej.an.company@gmail.com
- **GitHub**: [@BLU30CEAN](https://github.com/BLU30CEAN)

## 🔒 개인정보 보호

### Environment Setup
1. Copy `env.example` to `.env`
2. Fill in your personal information in `.env`:
   ```
   REACT_APP_PERSONAL_NAME=Your Name
   REACT_APP_PERSONAL_EMAIL=your.email@example.com
   REACT_APP_GITHUB_URL=https://github.com/yourusername
   REACT_APP_LINKEDIN_URL=https://linkedin.com/in/yourusername
   REACT_APP_PROFILE_IMAGE_URL=/profile.jpg
   ```

### Security Features
- Personal information is stored in environment variables
- `.env` file is gitignored to protect privacy
- Public repository contains only template data
- 개인 연락처는 이메일로만 제공
- 민감한 정보는 최소화
- 프로젝트 중심의 포트폴리오

---

**Blue Ocean** - 깊이 있는 기술력으로 새로운 가능성을 만들어갑니다 🌊
