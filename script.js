var clickmenu = document.querySelector(".immenu");
var mainmenu = document.querySelector(".menu");

clickmenu.addEventListener("click", function() {
    mainmenu.style.height = "100vh";
    mainmenu.style.width = "70%";
    mainmenu.style.opacity = "1";
});