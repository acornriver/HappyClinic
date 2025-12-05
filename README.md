# 행복한가정의학과 (Happy Family Medicine) 웹사이트

천안에 위치한 **행복한가정의학과** 의원의 병원 소개 및 환자 안내를 위한 반응형 웹사이트 프로젝트입니다.
React와 Vite를 사용하여 빠르고 모던한 웹 환경을 구축하였으며, 환자들에게 신뢰감을 주는 디자인과 필수적인 진료 정보를 제공하는 데 중점을 두었습니다.

🔗 **배포 사이트 바로가기:** [https://acornriver.github.io/HappyClinic/](https://acornriver.github.io/HappyClinic/)

---

## 📌 프로젝트 개요

- **목표:** 지역 주민들이 병원 정보를 쉽고 빠르게 확인하고, 병원에 대한 신뢰를 느낄 수 있는 랜딩 페이지 제작
- **주요 색상:** 신뢰의 블루(#0056b3), 따뜻한 옐로우(#F5A623), 깔끔한 화이트(#FFFFFF)
- **디자인 컨셉:** 가독성이 높고 전문적인 의료 기관 이미지

## ✨ 주요 기능

1.  **병원 소개 및 의료진 프로필**
    * 원장님의 상세 약력 및 경력 사항 소개
    * 병원의 진료 철학 전달

2.  **진료 시간 안내 (반응형 테이블)**
    * 평일, 수/토(오전 진료), 일요일(오후 진료), 공휴일 안내
    * **업데이트:** 수요일과 토요일 진료 시간을 통합하여 가독성 개선

3.  **공지사항 팝업 (Modal)**
    * 사이트 접속 시 독감 예방접종 등 주요 공지 노출
    * '오늘 하루 보지 않기' 기능 (Local Storage 활용) 구현

4.  **진료 및 시설 안내**
    * 키오스크 접수, 수액 클리닉, 검사 장비 등 병원 내부 시설 소개 (Grid 레이아웃)

5.  **네이버 예약 및 이용 안내**
    * ⚠️ **초진 불가 / 재진만 가능** 안내
    * 🚫 **당일 예약 불가** (전날 예약 필수) 안내 문구 강조

6.  **오시는 길**
    * 주소, 전화번호, 주차 가능 여부 안내
    * 지도 연동 (카카오맵/네이버지도 등)

---

## 🛠 기술 스택 (Tech Stack)

* **Core:** React, Vite
* **Styling:** CSS Modules (Vanilla CSS) - *Tailwind 미사용, 커스텀 디자인 적용*
* **Language:** JavaScript (ES6+)
* **Deployment:** GitHub Pages

---

## 🚀 설치 및 실행 방법 (How to Run)

이 프로젝트를 로컬 환경에서 실행하려면 Node.js가 설치되어 있어야 합니다.

1.  **저장소 클론 (Clone)**
    ```bash
    git clone [https://github.com/acornriver/HappyClinic.git](https://github.com/acornriver/HappyClinic.git)
    cd HappyClinic
    ```

2.  **패키지 설치 (Install Dependencies)**
    ```bash
    npm install
    ```

3.  **개발 서버 실행 (Run Dev Server)**
    ```bash
    npm run dev
    ```
    브라우저에서 `http://localhost:5173`으로 접속하여 확인합니다.

4.  **빌드 및 배포 (Build & Deploy)**
    ```bash
    npm run deploy
    ```

---

## 📂 폴더 구조 (Project Structure)

```text
src/
├── assets/         # 이미지 및 정적 파일
├── components/     # React 컴포넌트
│   ├── Header.jsx      # 상단 네비게이션
│   ├── Hero.jsx        # 메인 비주얼 배너
│   ├── Profile.jsx     # 의료진 소개
│   ├── Hours.jsx       # 진료 시간표 (수/토 통합)
│   ├── Location.jsx    # 오시는 길 및 예약 안내
│   ├── Features.jsx    # 병원 시설/장비 소개
│   ├── NoticePopup.jsx # 공지사항 팝업
│   └── Footer.jsx      # 하단 정보
├── App.css         # 전역 스타일
├── App.jsx         # 메인 레이아웃
└── main.jsx        # 진입점
