document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburgerMenu");
    const megaMenu = document.getElementById("megaMenu");

    hamburgerBtn.addEventListener("click", function() {
        // 햄버거 버튼 애니메이션 토글
        this.classList.toggle("active");
        // 메가 메뉴 보이기/숨기기 토글
        megaMenu.classList.toggle("show");
    });
});
