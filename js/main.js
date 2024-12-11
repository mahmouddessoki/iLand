AOS.init({ disable: 'mobile' });

let toggleIcon = document.getElementById("toggle-icon");
let closeIcon = document.getElementById("modal-close");
let toggleButton = document.getElementById("toggle-button");
// let deepDrop = document.getElementById("deep-drop");
// let deepMenu = document.getElementById("deep-menu");
toggleButton.onclick = hideToggle;
closeIcon.onclick = showToggle;
// deepDrop.onclick = showDeepMenu;
function hideToggle() {
    toggleIcon.style.display = "none"
}

function showToggle() {
    toggleIcon.style.display = "block"

}
function showDeepMenu() {
    console.log("done");

}


var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});