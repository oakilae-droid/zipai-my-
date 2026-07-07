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
