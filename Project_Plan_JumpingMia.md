# 🏃‍♂️ 점핑머신 미아 (Jumping Machine Mia) - 원페이지 웹사이트 프로젝트 계획서

본 문서는 GitHub와 Netlify를 활용하여 구축할 '점핑머신 미아' 공식 원페이지 스크롤링 홈페이지의 프로젝트 계획서입니다.

## 📌 프로젝트 개요
* **프로젝트 명**: 점핑머신 미아 공식 랜딩 페이지 구축
* **목적**: 서비스 소개, 횟수제 전환 안내 및 카카오톡 상담 유도
* **핵심 기능**: 원페이지 스크롤링, 반응형 디자인, 실시간 상담 링크 연동
* **기술 스택**: 
    * **Frontend**: HTML5, CSS3, JavaScript
    * **Hosting/Deployment**: GitHub, Netlify

## 🏗 사이트 구조 (One-Page Layout)
1.  **Header**: 네비게이션 바 (홈, 소개, 프로그램, 위치, 상담하기)
2.  **Hero Section**: 메인 이미지/영상 및 "신나게 뛰면서 살 빼자!" 등의 캐치프레이즈
3.  **Introduction**: 점핑 다이어트의 효과 및 센터만의 특장점
4.  **Program (Important)**: 
    * 기존 월 단위 시스템에서 **'횟수제 수업 시스템'**으로 변경된 내용 강조
    * 수업 시간표 및 이용권 안내
5.  **Gallery**: 센터 내부 시설 및 실제 수업 현장 사진
6.  **Contact & Location**: 
    * 오시는 길 (지도 API 연동)
    * 카카오톡 '점핑머신 미아' 채널 바로가기 버튼
7.  **Footer**: 사업자 정보, SNS 링크 및 저작권 표시

## 📅 개발 프로세스 (Roadmap)

### Step 1. 저장소 및 환경 설정
- [ ] GitHub Repository 생성 및 로컬 환경 클론
- [ ] 폴더 구조화 (`/index.html`, `/styles`, `/scripts`, `/assets`)
- [ ] Netlify Site 생성 및 GitHub 저장소 연결 (Auto Deploy 설정)

### Step 2. 퍼블리싱 및 기능 구현
- [ ] HTML 시맨틱 마크업을 통한 섹션 구분
- [ ] CSS Flex/Grid를 활용한 레이아웃 작업
- [ ] JavaScript를 이용한 부드러운 스크롤링(Smooth Scroll) 및 스크롤 스파이 구현
- [ ] 모바일/태블릿 최적화를 위한 미디어 쿼리 적용

### Step 3. 콘텐츠 최적화 및 배포
- [ ] SEO를 위한 메타 태그 설정 (키워드: 미아동 점핑, 강북구 다이어트 등)
- [ ] 이미지 용량 최적화 (WebP 권장) 및 파비콘 설정
- [ ] 최종 테스트 및 `main` 브랜치 Push (Netlify 자동 배포 확인)

## 🔗 주요 링크
* **공식 카카오톡**: [점핑머신 미아 채널](https://pf.kakao.com/_xxxxxx)
* **배포 URL**: (Netlify 배포 후 입력 예정)
