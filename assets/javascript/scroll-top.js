const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", topFunc);
window.onscroll = function () { scrollTopFunc() };

function topFunc() {
    window.scrollTo(0, 0);
}

function scrollTopFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}