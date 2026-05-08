# 공부 체크리스트 웹앱

## 1. 프로젝트 소개

이 프로젝트는 React로 만든 간단한 공부 체크리스트 웹 애플리케이션입니다.

사용자는 공부할 항목을 추가하고, 완료 여부를 체크하며, 전체 진행률을 확인할 수 있습니다.  
AWS S3 정적 웹사이트 호스팅과 GitHub Actions를 활용하여 CI/CD 환경을 구축했습니다.

---

## 2. 사용 기술

- React
- Vite
- JavaScript
- HTML/CSS
- AWS S3
- GitHub Actions

---

## 3. 주요 기능

### 3.1 공부 항목 추가

입력창에 공부할 내용을 입력하고 추가 버튼을 누르면 체크리스트에 항목이 추가됩니다.

### 3.2 완료 체크

각 공부 항목의 체크박스를 클릭하여 완료 상태로 변경할 수 있습니다.

### 3.3 항목 삭제

필요 없는 공부 항목은 삭제 버튼으로 제거할 수 있습니다.

### 3.4 진행률 표시

전체 공부 항목 중 완료된 항목의 비율을 계산하여 진행률을 표시합니다.

### 3.5 localStorage 저장

브라우저의 localStorage를 사용하여 새로고침 후에도 체크리스트 데이터가 유지됩니다.

---

## 4. CI/CD 환경 소개

이 프로젝트는 GitHub Actions를 사용하여 CI/CD 환경을 구축했습니다.

main 브랜치에 코드가 push되면 GitHub Actions workflow가 자동으로 실행됩니다.  
workflow는 React 프로젝트를 빌드한 뒤, 생성된 dist 폴더의 파일을 AWS S3 버킷에 업로드합니다.

### 배포 과정

1. 개발자가 main 브랜치에 코드를 push합니다.
2. GitHub Actions가 자동으로 실행됩니다.
3. Node.js 환경을 설정합니다.
4. npm ci 명령어로 의존성을 설치합니다.
5. npm run build 명령어로 React 프로젝트를 빌드합니다.
6. dist 폴더의 파일을 AWS S3 버킷에 업로드합니다.
7. S3 정적 웹사이트 주소에서 최신 웹앱을 확인할 수 있습니다.

---

## 5. GitHub Actions 설정

워크플로우 파일 위치:

.github/workflows/deploy.yml

GitHub Secrets에 AWS Academy Learner Lab에서 발급받은 인증 정보를 등록했습니다.

사용한 Secrets:

| Secret 이름 | 설명 |
|---|---|
| AWS_ACCESS_KEY_ID | AWS Academy Access Key |
| AWS_SECRET_ACCESS_KEY | AWS Academy Secret Key |
| AWS_SESSION_TOKEN | AWS Academy Session Token |
| AWS_REGION | AWS Region |
| S3_BUCKET | 배포 대상 S3 버킷 이름 |

---

## 6. 배포 주소

AWS S3 정적 웹사이트 URL:

http://study-check-hi-hayeon-bye-20263609.s3-website-us-east-1.amazonaws.com

주의: AWS Academy Learner Lab 환경 특성상 세션이 종료되면 URL이 더 이상 동작하지 않을 수 있습니다.

---

## 7. GitHub Repository

https://github.com/hi-hayeon-bye/study-check-cicd

---

## 8. 로컬 실행 방법

프로젝트를 로컬에서 실행하려면 아래 명령어를 사용합니다.

npm install

npm run dev

빌드 명령어:

npm run build