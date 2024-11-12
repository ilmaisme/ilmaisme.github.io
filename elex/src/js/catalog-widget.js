$(document).ready(function () {
    //slider projects
    var totalWd = $('.catalogWidget').attr("data-widget");
    document.querySelectorAll(".catalogList").forEach(function (c) {
        let next = c.parentNode.querySelector(".swiper-button-next");
        let prev = c.parentNode.querySelector(".swiper-button-prev");
        if (totalWd == 5) {
            new Swiper(c, {
                effect: 'slide',
                slidesPerView: 2.5,
                spaceBetween: 15,
                grabCursor: true,
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                loop: false,
                speed: 800
            });
        } else {
            new Swiper(c, {
                effect: 'slide',
                slidesPerView: 2.5,
                spaceBetween: 15,
                grabCursor: true,
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                loop: false,
                speed: 800,
                breakpoints: {
                    768: {
                        slidesPerView: 5.5
                    },
                    960: {
                        slidesPerView: 7.5,
                        spaceBetween: 15,
                    },
                    1102: {
                        slidesPerView: 9.5,
                        spaceBetween: 20,
                    }
                }
            });
        }
    });
});