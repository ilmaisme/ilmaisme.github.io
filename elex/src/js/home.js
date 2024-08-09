$(document).ready(function () {
    var swiper = new Swiper(".hlSlide", {
        effect: "coverflow",
        grabCursor: false,
        loop: true,
        speed: 300,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 473, // Stretch space between slides (in px)
            depth: 544, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            scale: 1.28,
            slideShadows: false, // Enables slides shadows
        },
        parallax: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            // dynamicBullets: true,
        },
        // breakpoints: {
        //     640: {
        //         coverflowEffect: {
        //             rotate: 1,
        //             modifier: 1.5,
        //         }
        //     }
        // }
    });
    // var swiper2 = new Swiper('.publishSlide', {
    // effect: "coverflow",
    // grabCursor: false,
    // direction: 'vertical',
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // loop: true,
    // speed: 300,
    // centeredSlides: true,
    // slidesPerView: "auto",
    // coverflowEffect: {
    //     rotate: -5,
    //     stretch: 270,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: false
    // },
    // parallax: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    //     // dynamicBullets: true,
    // }
    // });
});