$(document).ready(function () {
    var swiper = new Swiper(".categoryHl__nav", {
        loop: true,
        slidesPerView: 4,
        freeMode: true,
        direction: 'vertical',
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".categoryHl__big", {
        loop: true,
        thumbs: {
            swiper: swiper,
        },
    });
});