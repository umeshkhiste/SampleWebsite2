const gotop = document.querySelector(".to-top");


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        gotop.classList.add("active");
    } else {
        gotop.classList.remove("active");
    }
})