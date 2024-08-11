$(document).ready(function () {
    //slider headline
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
            nextEl: ".hl-next",
            prevEl: ".hl-prev",
        },
        pagination: {
            el: ".hl-pagination",
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

    //slider published product
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

    //slider bestseller product
    var swiper3 = new Swiper(".bestSlide", {
        effect: 'slide',
        slidesPerView: 1.5,
        // autoplay: {                         
        //     delay: 2000,  
        // },  
        spaceBetween: 30,
        navigation: {
            nextEl: ".best-next",
            prevEl: ".best-prev"
        },
        grabCursor: true,
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 3.5,
                spaceBetween: 30
            },
            1270: {
                slidesPerView: 5.4,
                spaceBetween: 30
            },
        }
    });

    //slider special offer product
    var swiper4 = new Swiper(".specialList", {
        effect: 'slide',
        slidesPerView: 3.5,
        spaceBetween: 28,
        initialSlide: 2,
        centeredSlides: true,
        // autoplay: {                         
        //     delay: 2000,  
        // },  
        navigation: {
            nextEl: ".special-next",
            prevEl: ".special-prev"
        },
        grabCursor: true,
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 3.5,
                spaceBetween: 28
            },
            1270: {
                slidesPerView: 3.5,
                spaceBetween: 28
            },
        }
    });

    //slider hot product
    var swiper4 = new Swiper(".artSlide", {
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 10,
        // centeredSlides: true,
        loop: true,
        // autoplay: {                         
        //     delay: 2000,  
        // },  
        navigation: {
            nextEl: ".product-next",
            prevEl: ".product-prev"
        },
        grabCursor: true
    });
});