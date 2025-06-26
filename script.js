<script>
document.addEventListener("DOMContentLoaded", function () {
    const menuOpenBtn = document.getElementById("Menu-open-button");
    const menuCloseBtn = document.getElementById("Menu-close-button");
    const navMenu = document.querySelector(".nav-menu");

    menuOpenBtn.addEventListener("click", function () {
        navMenu.style.display = "flex";
        menuOpenBtn.style.display = "none";
        menuCloseBtn.style.display = "block";
    });

    menuCloseBtn.addEventListener("click", function () {
        navMenu.style.display = "none";
        menuOpenBtn.style.display = "block";
        menuCloseBtn.style.display = "none";
    });
});
</script>
