# My LLM Chatbot

## 📌 프로젝트 소개
My LLM Chatbot은 **React, TypeScript, Vite, TailwindCSS**를 기반으로 제작된 AI 챗봇 애플리케이션입니다. Ollama와 **LLM (Large Language Model)** 를 활용하여 대화형 챗봇을 구현하고, 사용자가 입력한 메시지에 대한 AI의 응답을 UI에 표시하는 기능을 제공합니다.

---

## 🛠 기술 스택

### 📦 프론트엔드
- **React 19** - 사용자 인터페이스 구축
- **TypeScript** - 정적 타입 시스템을 통한 코드 안정성 향상
- **Vite** - 빠른 개발 환경 및 번들링 최적화
- **Tailwind CSS** - 유틸리티 퍼스트 방식의 스타일링
- **React Markdown** - 마크다운 렌더링 지원
- **KaTeX** - 수학 수식 렌더링 지원

### ⚡ 상태 관리 및 HTTP 요청
- **Axios** - HTTP 요청을 위한 라이브러리
- **React Hooks** - `useState`, `useEffect`, `useRef`를 활용한 상태 관리

### 📦 개발 및 빌드 도구
- **Vite** - 빠른 개발 서버 및 번들링 도구
- **TypeScript** - 정적 타입 검사 및 안정적인 코드 유지보수
- **PostCSS & Autoprefixer** - CSS 전처리 및 호환성 향상
- **ES Module** - 최신 JavaScript 모듈 시스템 지원

---

## 📂 프로젝트 구조

```
my-llm-chatbot/
│── public/            # 정적 파일
│── src/
│   ├── components/    # UI 컴포넌트
│   ├── pages/         # 페이지 구성
│   ├── styles/        # Tailwind 및 전역 스타일
│   ├── utils/         # 유틸리티 함수 및 API 통신
│   ├── App.tsx        # 메인 애플리케이션
│   ├── main.tsx       # React 진입점
│── .gitignore         # Git 무시할 파일 설정
│── package.json       # 프로젝트 종속성 및 스크립트
│── tsconfig.json      # TypeScript 설정
│── tailwind.config.js # Tailwind CSS 설정
│── postcss.config.js  # PostCSS 설정
│── vite.config.ts     # Vite 설정 파일
│── README.md          # 프로젝트 소개 문서
```

---

## 🚀 실행 방법

### 1️⃣ 프로젝트 클론
```sh
git clone https://github.com/your-repo/my-llm-chatbot.git
cd my-llm-chatbot
```

### 2️⃣ 패키지 설치
```sh
npm install
```

### 3️⃣ 개발 서버 실행
```sh
npm run dev
```
> 기본적으로 `http://localhost:5173`에서 실행됩니다.

### 4️⃣ 빌드 및 배포
```sh
npm run build
```

빌드된 정적 파일은 `dist/` 디렉토리에 생성됩니다.

---

## 🔧 환경 변수 설정
환경 변수 설정을 위해 `.env` 파일을 프로젝트 루트에 생성하고 아래 내용을 추가하세요.
```env
VITE_API_URL=http://localhost:11434/api/chat
```
> 실제 API 서버 URL을 반영하여 수정하세요.

---

## 📌 주요 기능

✔️ **LLM을 활용한 챗봇** - AI 모델을 활용한 자연스러운 대화 지원  
✔️ **Markdown 지원** - 코드 블록, 리스트, 강조 텍스트 등 마크다운 렌더링  
✔️ **KaTeX 수식 렌더링** - LaTeX 수식 표시 기능  
✔️ **코드 복사 버튼** - 코드 블록 내 복사 기능  
✔️ **코딩 모드 지원** - `codellama:13b` 모델 사용 가능  
✔️ **반응형 UI** - 모바일 및 데스크톱 환경 최적화

---

## 🛠 사용된 패키지 목록
### 📌 주요 종속성 (dependencies)
```json
{
  "axios": "^1.7.9",
  "katex": "^0.16.21",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-markdown": "^9.0.3",
  "rehype-katex": "^7.0.1",
  "remark-gfm": "^4.0.0",
  "remark-math": "^6.0.0",
  "web-vitals": "^4.2.4"
}
```

### ⚙️ 개발 종속성 (devDependencies)
```json
{
  "@vitejs/plugin-react": "^3.0.0",
  "autoprefixer": "^10.4.19",
  "postcss": "^8.4.40",
  "tailwindcss": "^3.4.7",
  "typescript": "^5.7.3",
  "vite": "^4.0.0"
}
```

---

## 📝 라이선스
본 프로젝트는 MIT 라이선스를 따릅니다. 자유롭게 수정 및 배포할 수 있습니다.

---

## 📬 문의
개선 사항이나 버그가 있다면 **GitHub Issues**를 통해 알려주세요! 😊

