# zipai 부동산 웹페이지 푸터 작업 내역

## 1. 개요
- **작업 목표:** 제공된 UI 이미지를 참고하여 `zipai 부동산` 플랫폼에 최적화된 반응형 푸터(Footer) 구현
- **기술 스택:** HTML5, CSS3, Bootstrap 5, Google Fonts, FontAwesome

## 2. 세부 요구사항 구현 현황
1. **UI 및 콘텐츠 변경:** 첨부 이미지의 구조를 분석하여 좌측 고객센터, 중앙 회사 정보, 우측 사이트맵 및 SNS 구조를 `zipai 부동산` 콘텐츠에 맞게 변경했습니다.
2. **Bootstrap 5 반응형:** 부트스트랩5의 중단점 클래스(Container, Grid)와 커스텀 미디어 쿼리를 결합하여 576, 768, 992, 1200, 1400 규격에 맞게 제작했습니다.
3. **디렉토리 구조 및 외부 CSS:** `templates/common`에 HTML을 두고, `static/css`에 CSS 파일을 분리했습니다.
4. **브랜드 색상:** 지정된 팔레트의 Accent Color(`#25436E`), Primary Color(`#2465E8`), Secondary Color(`#6C757D`), Background Color(`#f8f9fa`)를 적용했습니다.
5. **구글 폰트(sans-serif):** `Inter`(영문/숫자 타이틀), `Noto Sans KR`(한글 본문) 두 가지 서체를 CDN으로 불러왔습니다.
6. **FontAwesome:** 최신 6.4.0 버전 CDN을 적용해 화살표와 SNS 아이콘 등을 표현했습니다.
7. **CSS 변수 처리:** 컬러, 폰트, 중단점 기준값을 CSS 변수(`:root`)로 설정하여 유지보수를 용이하게 했습니다.
8. **공통 CSS 파일:** `common.css`를 생성하고 `footer.css` 최상단에서 `@import` 방식으로 불러오게 구성했습니다.
9. **작업 문서화:** 현재 읽고 계신 마크다운 파일로 정리했습니다.
10. **모바일 최적화:** 모바일 화면(768px 미만) 접속 시 사이트맵 링크를 숨기고 전체 텍스트와 레이아웃을 중앙 정렬하도록 CSS를 제어했습니다.
11. **파비콘 추가:** 헤더 영역에 부동산과 어울리는 인라인 SVG 파비콘을 등록했습니다.
12. **패밀리사이트 구축:** 우측 영역에 '홈픽부동산'을 포함해 부동산과 연관된 5개 가상 패밀리사이트(인테리어, 청소 등) 드롭다운을 넣었습니다.
13. **투더탑(Top) 버튼:** 우측 하단에 화면을 따라다니는 플로팅 방식의 화살표 탑 버튼(JS 포함)을 추가했으며, 이미지 UI에 있던 상단 고정 탑버튼 디자인도 그대로 유지했습니다.

## 3. 파일 구조
```
📦 zipai_project
 ┣ 📂 templates
 ┃ ┗ 📂 common
 ┃   ┗ 📜 footer.html
 ┣ 📂 static
 ┃ ┗ 📂 css
 ┃   ┣ 📜 common.css
 ┃   ┗ 📜 footer.css
 ┗ 📂 docs
   ┗ 📜 README.md
```

# zipai 부동산 헤더(Header) 작업 내역

## 1. 개요
- **목표:** 첨부해주신 폴더 구조(Image 1)를 반영한 네비게이션과 레퍼런스(Image 2) 스타일의 헤더 UI 제작
- **기술 스택:** HTML5, CSS3(Variables 적용), Vanilla JavaScript, Bootstrap 5, FontAwesome
- **디렉토리 구조 준수:**
  - `templates/common/header.html`
  - `static/css/common.css`, `static/css/header.css`
  - `static/js/header.js`

## 2. 주요 구현 내용
1. **메뉴 구조 및 경로 매핑:**
   - 첫 번째 사진에 제시된 폴더 트리(`member`, `property`, `board`, `admin`, `defense`, `safe`)를 바탕으로 메인 메뉴와 서브 메뉴를 구성했습니다.
   - 각 하위 파일들에 대해 `../폴더명/파일명.html` 형태의 상대 경로를 적용했습니다.
2. **반응형 네비게이션 (2-Tier & Mega Menu):**
   - **PC 화면(992px 초과):** 마우스를 올리면 하위 메뉴가 나타나는 2-Tier Dropdown Menu를 적용했습니다.
   - **모바일/태블릿(992px 이하):** 부트스트랩 `d-none d-lg-block` 클래스를 사용하여 메인 메뉴바를 숨겼습니다.
   - 햄버거 아이콘 클릭 시 전체 메뉴를 한눈에 볼 수 있는 **Mega Menu**가 오버레이 형태로 부드럽게 나타납니다.
3. **햄버거 버튼 애니메이션 (Vanilla JS):**
   - 우측 상단의 햄버거 메뉴 클릭 시 3개의 Bar가 'X' 모양으로 크로스되는 인터랙티브 애니메이션을 바닐라 자바스크립트로 구현했습니다. (`header.js`의 `classList.toggle('active')` 활용)
4. **브랜드 스타일 적용:**
   - 이전 푸터에서 정의했던 `Primary Color(#2465E8)`, `Accent Color(#25436E)`를 `common.css`의 CSS 변수로 재정의하여 로고와 텍스트 하이라이트 색상에 통일감 있게 적용했습니다.
   - 폰트 역시 `Inter`와 `Noto Sans KR`을 구글 폰트 CDN으로 연결하였습니다.