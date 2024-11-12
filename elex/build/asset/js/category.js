$(document).ready(function () {
    var swiper = new Swiper(".categoryHl__nav", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 4,
        freeMode: true,
        direction: 'horizontal',
        watchSlidesProgress: true,
        breakpoints: {
            1230: {
                direction: 'vertical'
            }
        }
    });
    var swiper2 = new Swiper(".categoryHl__big", {
        loop: true,
        effect: "fade",
        thumbs: {
            swiper: swiper,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
    });
});