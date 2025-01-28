# My LLM Chatbot

## 개요

이 프로젝트는 **Ollama**와 **LLM (Large Language Model)**을 활용한 챗봇을 구현하는 React 기반 웹 애플리케이션입니다. **Vite**, **TypeScript**, **React**, **TailwindCSS**를 사용하여 개발되었습니다.

## 주요 기능

- Ollama API를 활용한 LLM 기반 대화 기능
- **코딩 모드 지원**: 코드 관련 질문 시 **Qwen2.5 14ㅠ**을 활용하여 응답
- **일반 대화 모드**: 일반적인 질의응답을 **Phi-4 14B 모델**을 활용하여 처리
- **Markdown 렌더링**: 수학 공식, 코드 블록을 적절하게 표시
- **LaTeX 지원**: Katex를 사용한 LaTeX 렌더링
- **자동 스크롤**: 메시지가 추가될 때 채팅창이 자동으로 스크롤됨
- **Shift + Enter 개행, Enter 전송 기능**
- **복사 버튼 추가**: 코드 블록을 쉽게 복사 가능

## 기술 스택

- **Frontend:** React, TypeScript, Vite
- **UI 라이브러리:** TailwindCSS
- **HTTP 요청:** Axios
- **Markdown 지원:** react-markdown, remark-gfm, remark-math
- **LaTeX 수식 지원:** rehype-katex, katex

## 프로젝트 설정 및 실행

### 1. 프로젝트 클론

```sh
git clone https://github.com/your-repo/my-llm-chatbot.git
cd my-llm-chatbot
```

### 2. 패키지 설치

```sh
npm install
```

### 3. 개발 서버 실행

```sh
npm run dev
```

## 환경 변수 설정

**Ollama** API를 실행하기 위해 로컬에서 서버가 실행되고 있어야 합니다.

- 기본적으로 `http://localhost:11434/api/chat`을 사용합니다.

## 폴더 구조

```
my-llm-chatbot/
├── src/
│   ├── components/   # UI 컴포넌트
│   ├── pages/        # 주요 페이지
│   ├── hooks/        # 커스텀 훅
│   ├── styles/       # Tailwind 및 스타일 파일
│   ├── App.tsx       # 메인 앱 파일
│   ├── main.tsx      # React 엔트리 포인트
├── public/           # 정적 파일
├── package.json      # 패키지 관리
├── vite.config.ts    # Vite 설정
├── tailwind.config.js # Tailwind 설정
├── tsconfig.json     # TypeScript 설정
└── README.md         # 프로젝트 문서
```

## 향후 개선 사항

- 사용자 지정 LLM 모델 선택 기능 추가
- 대화 기록 저장 및 불러오기 기능
- 추가적인 UI/UX 개선

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
