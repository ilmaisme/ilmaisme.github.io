$(document).ready(function () {
    //slider projects
    var swiper = new Swiper(".collabProject", {
        effect: 'slide',
        slidesPerView: 3,
        spaceBetween: 10,
        grabCursor: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    });
    //slider partner
    var swiper2 = new Swiper(".collabPartner", {
        effect: 'slide',
        slidesPerView: 4,
        spaceBetween: 12,
        grabCursor: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1200,
        breakpoints: {
            768: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 8,
                spaceBetween: 26,
            },
            1110: {
                slidesPerView: 10
            }
        }
    });
});

//form file
function onFileChange(el) {
    let parent = el.parentNode,
        title = parent.querySelector('.formFileTitle')
    title.setAttribute('placeholder', el.value)
}