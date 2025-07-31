document.addEventListener("DOMContentLoaded", function () {
    //slider widget event
    var swiper = new Swiper(".swiperHl", {
        grabCursor: true,
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
})