$(document).ready(function () {
    //slider headline
    var totalHl = $('.hlSlide').attr("data-number") / 2;
    var swiper = new Swiper(".hlSlide", {
        effect: "coverflow",
        grabCursor: false,
        loop: false,
        speed: 300,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: "auto",
        loopFillGroupWithBlank: true,
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 490, // Stretch space between slides (in px)
            depth: 490, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            scale: 1.28,
            slideShadows: false, // Enables slides shadows
        },
        parallax: true,
        reverseDirection: true,
        navigation: {
            nextEl: ".hl-next",
            prevEl: ".hl-prev",
        },
        pagination: {
            el: ".hl-pagination",
        },
        initialSlide: parseInt(totalHl),
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
    var swiper2 = new Swiper(".publishSlide", {
        grabCursor: false,
        effect: "coverflow",
        direction: 'vertical',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: false,
        speed: 1000,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 342,
            depth: 40,
            modifier: 1,
            scale: .92,
            slideShadows: false,
        },
        parallax: true
    });

    //slider widget article
    document.querySelectorAll(".artSlide").forEach(function (s) {
        let next = s.parentNode.querySelector(".swiper-button-next");
        let prev = s.parentNode.querySelector(".swiper-button-prev");

        new Swiper(s, {
            effect: 'slide',
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            grabCursor: true
        });
    });
});