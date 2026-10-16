# Yu So Yoon

유소윤의 기본 정보, 경력, 직장별 프로젝트와 작업물을 소개하는 포트폴리오입니다.

## 개발 스택

HTML5, CSS3, Vanilla JavaScript, Node.js 22 이상(권장 24 LTS). 정적 소개 사이트이므로 프레임워크와 외부 패키지 없이 개발합니다. 빌드·로컬 서버는 Node.js 표준 라이브러리를 사용합니다. Google Fonts는 선택적인 외부 폰트이며 연결되지 않으면 시스템 폰트로 표시됩니다.

## 시작

```sh
npm run dev
```

- 방문자 화면: http://127.0.0.1:4173
- 로컬 관리 화면: http://127.0.0.1:4173/editor.html

의존성 설치는 필요 없습니다. 소스를 수정하면 `npm run build`로 다시 빌드하고 브라우저를 새로고침하세요. `PORT` 환경변수로 포트를 변경할 수 있습니다. 개발 서버는 로컬 루프백 주소에만 바인딩됩니다.

## 디렉토리

```text
src/
  index.html             페이지 템플릿
  styles/main.css        반응형 스타일
  scripts/main.js         필터와 작업물 상세 보기
  data/portfolio.json    공개할 프로필·경력·작업 데이터
tools/editor.html        본인 컴퓨터 전용 관리 도구
scripts/
  build.mjs              정적 빌드와 단일 HTML 생성
  dev.mjs                로컬 개발 서버
  check.mjs              데이터·구문·배포 경계 검사
.github/workflows/ci.yml GitHub 푸시와 PR 검사
dist/                    생성되는 공개 배포 파일 (Git 제외)
```

## 내용 수정

`src/data/portfolio.json`을 수정한 뒤 빌드하세요. 직장 경력의 `company`와 작업물의 `company`를 동일하게 입력하면 직장 아래 해당 작업물이 연결됩니다. 개인정보와 경력은 미입력 상태이며 갤러리 4개는 예시입니다. 실제 작업으로 교체할 때 `demo`를 `false`로 변경하세요. 이미지에는 HTTPS 이미지 주소 또는 이미지 데이터 URL을 사용합니다.

로컬 관리 화면에서는 사진·작업물을 편집하고 초안을 브라우저에 저장할 수 있습니다. HTML 다운로드는 독립적인 공개 HTML을 생성하며 소스 파일을 직접 변경하지 않습니다. 개발 소스에도 반영하려면 JSON 백업을 내려받아 `src/data/portfolio.json`으로 저장하고 다시 빌드하세요. JSON 백업은 공개할 정보만 담아야 합니다.

`tools/editor.html`을 직접 열 경우 원본 선택에서 빌드된 `dist/portfolio.html`을 선택하세요.

## 검사 / 배포

```sh
npm run check
npm run build
```

정적 호스팅의 배포 폴더는 **dist/** 입니다. `dist/index.html`은 CSS·JS 파일과 함께 배포하고, `dist/portfolio.html`은 단독 파일로 열거나 배포할 수 있습니다. 저장소 루트나 `tools/`를 배포하지 마세요. 자동 온라인 배포는 설정하지 않았습니다.

공개 결과물에는 쓰기 API와 관리 도구가 없습니다. 방문자는 원본 사이트를 수정할 수 없으며 소유자는 Git 저장소와 호스팅 계정 권한으로 변경을 관리합니다. 온라인 관리자 인증 기능은 포함하지 않습니다. 저장소는 기본 비공개로 생성합니다. 비밀키·암호·공개를 원치 않는 정보는 소스 데이터에 넣지 마세요.
