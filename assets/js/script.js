/* Inicio Menu Mobile */
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementsByClassName('nav-2');
    nav[0].classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
/* Fim Menu Mobile */

/* Inicio Animação header */
window.addEventListener("scroll", function () {
    let headerAnimation = document.querySelector("#header");
    let headerLogin = document.querySelector(".menu-login");
    let loginTopHeader = document.querySelector(".box-login-header");
    let firstMenu = document.querySelector(".firstMenu");
    let secondMenu = document.querySelector(".secondMenu");
    
    firstMenu.classList.toggle("menu-dsk", window.scrollY > 0);
    secondMenu.classList.toggle("menu-dsk-down", window.scrollY > 0) ;
    headerAnimation.classList.toggle("header-jq", window.scrollY > 0);
    headerLogin.classList.toggle("menu-login-jq", window.scrollY > 0);
    loginTopHeader.classList.toggle("box-login-header-jq", window.screenY > 0);
});
/* Fim Animação header */

/* Click animation FAQ */

let acc = document.getElementsByClassName("clica-abrir");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }
    });
}   