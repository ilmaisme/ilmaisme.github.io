$(document).ready(function () {
    //slider widget event
    var swiper = new Swiper(".-sHL", {
        grabCursor: true,
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // breakpoints: {
        //     640: {
        //         coverflowEffect: {
        //             rotate: 1,
        //             modifier: 1,
        //             stretch: 280,
        //             depth: 40,
        //         }
        //     }
        // }
    });
});