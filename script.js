const header = document.querySelector("header");
const logoHTML = document.querySelector("logo-html");
const logoJS = document.querySelector("logo-js");
const logoCSS = document.querySelector("logo-css");
const btnMobile = document.getElementById("btn-mobile");

window.addEventListener("scroll", diminuiHeader);

function diminuiHeader() {
    if (window.pageYOffset > 100 && header.classList.contains("max")) {
        header.classList.remove("max");
        header.classList.add("min");
        logoHTML.style.width = "60 px"
        logoJS.style.width = "70 px"
        logoCSS.style.width = "60 px"

    } else if (window.pageYOffset == 0 && header.classList.contains("min")) {
        header.classList.add("max");
        header.classList.remove("min");
        logoHTML.style.width = "40 px"
        logoJS.style.width = "50 px"
        logoCSS.style.width = "40 px"
    }
}


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefaul();
    const mn = document.getElementById("mn");
    mn.classList.toggle("active");

}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

